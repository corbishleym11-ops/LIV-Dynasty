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
