// ═══════════════════════════════════════════════
// SLEEPER — live league data (rosters, matchups, transactions, picks)
// This NEVER touches TEAMS (company names/prices/categories) in data.js.
// It only supplies real football data alongside the hand-authored identity layer.
// ═══════════════════════════════════════════════

const SLEEPER_LEAGUE_ID = '1312142691848454144';

// Owner name -> Sleeper roster_id (confirmed against the live league)
const SLEEPER_MAP = {
  Charles: 5, Corbishley: 1, Shaq: 11, Adam: 2, Jake: 6, Fronge: 4,
  Brent: 12, Wingard: 8, Mitchum: 10, Ryan: 9, Kevin: 7, Drew: 3
};
const ROSTER_TO_OWNER = Object.fromEntries(Object.entries(SLEEPER_MAP).map(([o, r]) => [r, o]));

async function sleeperFetch(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Sleeper fetch failed: ' + url);
  return res.json();
}

async function getNFLState() {
  return sleeperFetch('https://api.sleeper.app/v1/state/nfl');
}

async function getRosters() {
  return sleeperFetch(`https://api.sleeper.app/v1/league/${SLEEPER_LEAGUE_ID}/rosters`);
}

async function getMatchups(week) {
  return sleeperFetch(`https://api.sleeper.app/v1/league/${SLEEPER_LEAGUE_ID}/matchups/${week}`);
}

async function getTransactions(round) {
  return sleeperFetch(`https://api.sleeper.app/v1/league/${SLEEPER_LEAGUE_ID}/transactions/${round}`);
}

async function getLeagueInfo(leagueId) {
  return sleeperFetch(`https://api.sleeper.app/v1/league/${leagueId || SLEEPER_LEAGUE_ID}`);
}

// Full trade history across the league's whole life (walks previous_league_id
// back through past seasons). ~18 fetches per season on a cold load, so the
// result is cached in localStorage for an hour.
async function getAllTrades() {
  const CACHE_KEY = 'liv_trades_cache_v1';
  const CACHE_TIME_KEY = 'liv_trades_cache_time_v1';
  const cached = localStorage.getItem(CACHE_KEY);
  const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
  if (cached && cachedTime && (Date.now() - parseInt(cachedTime, 10) < 60 * 60 * 1000)) {
    try { return JSON.parse(cached); } catch (e) { /* refetch */ }
  }
  const trades = [];
  let leagueId = SLEEPER_LEAGUE_ID;
  let hops = 0;
  while (leagueId && hops < 5) {           // safety: at most 5 seasons back
    const info = await getLeagueInfo(leagueId);
    const rounds = Array.from({ length: 18 }, (_, i) => i + 1);
    const lists = await Promise.all(rounds.map(r =>
      sleeperFetch(`https://api.sleeper.app/v1/league/${leagueId}/transactions/${r}`).catch(() => [])));
    lists.flat().forEach(t => {
      if (t && t.type === 'trade' && t.status === 'complete') trades.push({ ...t, season: info.season });
    });
    leagueId = info.previous_league_id;
    hops++;
  }
  trades.sort((a, b) => b.created - a.created);
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(trades));
    localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
  } catch (e) { /* storage unavailable */ }
  return trades;
}

async function getTradedPicks() {
  return sleeperFetch(`https://api.sleeper.app/v1/league/${SLEEPER_LEAGUE_ID}/traded_picks`);
}

// The full NFL players database is ~5MB — fetch once, cache in localStorage for 24h.
async function getPlayersMap() {
  const CACHE_KEY = 'liv_players_cache_v1';
  const CACHE_TIME_KEY = 'liv_players_cache_time_v1';
  const cached = localStorage.getItem(CACHE_KEY);
  const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
  if (cached && cachedTime && (Date.now() - parseInt(cachedTime, 10) < 24 * 60 * 60 * 1000)) {
    try { return JSON.parse(cached); } catch (e) { /* fall through to refetch */ }
  }
  const data = await sleeperFetch('https://api.sleeper.app/v1/players/nfl');
  const trimmed = {};
  for (const id in data) {
    const p = data[id];
    if (!p) continue;
    trimmed[id] = {
      name: p.full_name || `${p.first_name || ''} ${p.last_name || ''}`.trim(),
      pos: p.position || '',
      team: p.team || 'FA'
    };
  }
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(trimmed));
    localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
  } catch (e) { /* storage full or unavailable, ignore */ }
  return trimmed;
}

// Convenience: pulls everything needed for the Rosters page in one go.
async function loadLiveRosterData() {
  const [rosters, players] = await Promise.all([getRosters(), getPlayersMap()]);
  return rosters.map(r => {
    const owner = ROSTER_TO_OWNER[r.roster_id] || 'Unknown';
    const starters = (r.starters || []).filter(id => id && id !== '0').map(id => players[id] || { name: id, pos: '?', team: '' });
    const bench = (r.players || []).filter(id => !( r.starters || []).includes(id)).map(id => players[id] || { name: id, pos: '?', team: '' });
    return { owner, rosterId: r.roster_id, starters, bench, wins: r.settings?.wins || 0, losses: r.settings?.losses || 0, fpts: r.settings?.fpts || 0 };
  });
}

// ══════════════════════════════════════════════════════════════
// LIFETIME HEAD-TO-HEAD ENGINE (added Sep 7 2026)
// 2025 league H2H games + winners-bracket playoffs, plus completed
// 2026 weeks — median games are never counted. Cached in localStorage;
// lifetime records grow automatically as the season plays out.
// ══════════════════════════════════════════════════════════════
const SLEEPER_2025_LEAGUE_ID = '1187148266420215808';
const H2H_USERNAME_MAP = {
  'cp0304':'Charles', 'mattcorbishley':'Corbishley', 'bschachle':'Shaq',
  'morrowad10':'Adam', 'yakeyaine':'Jake', 'frongellomp':'Fronge',
  'babethel14':'Brent', 'brentbethel':'Brent', 'mwinny':'Wingard',
  'mitchumm11':'Mitchum', 'ryansamuels':'Ryan', 'ksanda':'Kevin', 'drewsats':'Drew'
};
function h2hKey(a, b) { return [a, b].sort().join('|'); }
function h2hRecord(store, a, b) {
  const k = h2hKey(a, b), r = store[k];
  if (!r) return { w: 0, l: 0 };
  return k.startsWith(a + '|') ? { w: r.aw, l: r.bw } : { w: r.bw, l: r.aw };
}
function h2hAdd(store, winner, loser) {
  const k = h2hKey(winner, loser);
  if (!store[k]) store[k] = { aw: 0, bw: 0 };
  if (k.startsWith(winner + '|')) store[k].aw++; else store[k].bw++;
}

async function mapRostersToOwners(leagueId) {
  const [users, rosters] = await Promise.all([
    sleeperFetch(`https://api.sleeper.app/v1/league/${leagueId}/users`),
    sleeperFetch(`https://api.sleeper.app/v1/league/${leagueId}/rosters`),
  ]);
  const byUser = {};
  (users || []).forEach(u => {
    const owner = H2H_USERNAME_MAP[(u.display_name || '').toLowerCase()];
    if (owner) { byUser[u.user_id] = owner; return; }
    const tn = ((u.metadata && u.metadata.team_name) || '').toLowerCase();
    const t = TEAMS.find(x => x.team.toLowerCase() === tn);
    if (t) byUser[u.user_id] = t.owner;
  });
  const map = {};
  (rosters || []).forEach(r => { if (byUser[r.owner_id]) map[r.roster_id] = byUser[r.owner_id]; });
  return map;
}

async function h2hFromWeeks(leagueId, rosterMap, fromWeek, toWeek, into, gamesList) {
  for (let w = fromWeek; w <= toWeek; w++) {
    const ms = await sleeperFetch(`https://api.sleeper.app/v1/league/${leagueId}/matchups/${w}`);
    const byId = {};
    (ms || []).forEach(m => { if (m.matchup_id != null) (byId[m.matchup_id] = byId[m.matchup_id] || []).push(m); });
    Object.values(byId).forEach(pair => {
      if (pair.length !== 2) return;
      const [a, b] = pair;
      if (!(a.points > 0 || b.points > 0)) return;         // not played
      if (a.points === b.points) return;                    // tie — no H2H credit
      const oa = rosterMap[a.roster_id], ob = rosterMap[b.roster_id];
      if (!oa || !ob) return;
      const winner = a.points > b.points ? oa : ob;
      const loser  = winner === oa ? ob : oa;
      h2hAdd(into, winner, loser);
      if (gamesList) gamesList.push({ week: w, winner, loser,
        ws: (a.points > b.points ? a.points : b.points), ls: (a.points > b.points ? b.points : a.points) });
    });
  }
}

async function h2hFromWinnersBracket(leagueId, rosterMap, into, gamesList) {
  const bracket = await sleeperFetch(`https://api.sleeper.app/v1/league/${leagueId}/winners_bracket`);
  (bracket || []).forEach(g => {
    if (!g.w || !g.l) return;                               // undecided or bye
    const winner = rosterMap[g.w], loser = rosterMap[g.l];
    if (!winner || !loser) return;
    h2hAdd(into, winner, loser);
    if (gamesList) gamesList.push({ round: g.r, winner, loser, playoff: true });
  });
}

async function getH2HData() {
  const CACHE_KEY = 'liv_h2h_v1';
  let base2025 = null;
  try { base2025 = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null'); } catch (e) {}

  if (!base2025) {
    const map25 = await mapRostersToOwners(SLEEPER_2025_LEAGUE_ID);
    const records = {}, regGames = [], poGames = [];
    await h2hFromWeeks(SLEEPER_2025_LEAGUE_ID, map25, 1, 14, records, regGames);
    await h2hFromWinnersBracket(SLEEPER_2025_LEAGUE_ID, map25, records, poGames);
    base2025 = { records, regGames, poGames };
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(base2025)); } catch (e) {}
  }

  // fold in completed 2026 weeks (small; re-fetched each visit, playoffs auto-join later)
  const lifetime = JSON.parse(JSON.stringify(base2025.records));
  try {
    const state = await getNFLState();
    const doneThrough = (state.season_type === 'regular') ? Math.max(0, (state.week || 1) - 1)
                      : (state.season_type === 'post' ? 14 : 0);
    if (doneThrough > 0) {
      await h2hFromWeeks(SLEEPER_LEAGUE_ID, ROSTER_TO_OWNER, 1, Math.min(doneThrough, 14), lifetime, null);
    }
    if (state.season_type === 'post') {
      await h2hFromWinnersBracket(SLEEPER_LEAGUE_ID, ROSTER_TO_OWNER, lifetime, null);
    }
  } catch (e) { /* 2026 portion unavailable — 2025 base still returned */ }

  return { lifetime, s2025: base2025 };
}

// ══════════════════════════════════════════════════════════════
// SLEEPER PROJECTIONS (unofficial endpoint — fails gracefully)
// ══════════════════════════════════════════════════════════════
async function getWeekProjections(season, week) {
  try {
    const rows = await sleeperFetch(
      `https://api.sleeper.app/projections/nfl/${season}/${week}?season_type=regular` +
      `&position[]=QB&position[]=RB&position[]=WR&position[]=TE&position[]=K&position[]=DEF&order_by=pts_half_ppr`);
    const map = {};
    (rows || []).forEach(r => {
      const pts = r.stats && (r.stats.pts_half_ppr != null ? r.stats.pts_half_ppr : r.stats.pts_ppr);
      if (r.player_id && pts != null) map[r.player_id] = pts;
    });
    return Object.keys(map).length ? map : null;
  } catch (e) { return null; }
}
function projForStarters(projMap, starters) {
  if (!projMap || !starters) return null;
  let sum = 0, hits = 0;
  starters.forEach(pid => { if (projMap[pid] != null) { sum += projMap[pid]; hits++; } });
  return hits >= 5 ? sum : null;   // require a real lineup's worth of data
}
