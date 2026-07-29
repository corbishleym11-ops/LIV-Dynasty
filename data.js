// ═══════════════════════════════════════════════
// LIV DYNASTY EXCHANGE — SHARED DATA
// Loaded by every page. Edit team info, rosters, media, etc. here ONLY.
// ═══════════════════════════════════════════════

const TEAMS = [
  { owner:'Charles',   team:'Chuckys Cutlets',         company:'Crownline Global Holdings',   ticker:'CROWN', history:[{d:'Dec 2025',p:118.28},{d:'May 2026',p:139.84},{d:'Jul 2026',p:135.34},{d:'Jul 17 2026',p:139.28},{d:'Jul 20 2026',p:134.14},{d:'Jul 29 2026',p:131.71}], trend:'Slight dip into camp; still holds a sixteen-dollar lead at the top',        qb:100,rb:84, wr:60, te:92, pick:44, strength:'QB',     weakness:'Pick Liquidity', summary:'Elite operating platform with premium QB/RB/TE strength' },
  { owner:'Corbishley',team:'Guiness Guzzlers',         company:'Apex Iron Capital',           ticker:'APEX',  history:[{d:'Dec 2025',p:87.53},{d:'May 2026',p:107.27},{d:'Jul 2026',p:114.53},{d:'Jul 17 2026',p:111.66},{d:'Jul 20 2026',p:103.98},{d:'Jul 29 2026',p:115.51}], trend:'The Burrow deal ends the QB crisis; pick vault now dead last — all-in',     qb:76,rb:68, wr:84, te:76, pick:12, strength:'RB/WR',  weakness:'QB',            summary:'Explosive skill-position portfolio dragged by QB concerns' },
  { owner:'Shaq',      team:'The Shough Boys',          company:'Monarch Wideout Bank',        ticker:'MWB',   history:[{d:'Dec 2025',p:87.73},{d:'May 2026',p:100.98},{d:'Jul 2026',p:109.39},{d:'Jul 17 2026',p:109.39},{d:'Jul 20 2026',p:101.17},{d:'Jul 29 2026',p:95.21}], trend:'Bench grade falls to dead last; biggest faller of the camp issue',              qb:84,rb:28, wr:100, te:68, pick:60, strength:'WR',     weakness:'RB',            summary:'Luxury WR bank with underfunded RB cash flow' },
  { owner:'Adam',      team:'The 100xers',              company:'Helix Quant Strategies',      ticker:'HLX',   history:[{d:'Dec 2025',p:68.37},{d:'May 2026',p:92.23},{d:'Jul 2026',p:92.58},{d:'Jul 17 2026',p:86.21},{d:'Jul 20 2026',p:90.89},{d:'Jul 29 2026',p:95.11}],  trend:'Third straight rise; the Herbert unit grades QB2 entering camp',qb:68,rb:36, wr:92, te:60, pick:20, strength:'WR',     weakness:'RB',            summary:'Strong WR/young asset base with weak current RB output' },
  { owner:'Jake',      team:'yakeyaine',                company:'EchoPoint Global Markets',    ticker:'ECHO',  history:[{d:'Dec 2025',p:86.28},{d:'May 2026',p:99.58},{d:'Jul 2026',p:105.22},{d:'Jul 17 2026',p:105.22},{d:'Jul 20 2026',p:99.13},{d:'Jul 29 2026',p:97.90}],  trend:'Idling under $100; backfield elite, TE desk still vacant',                qb:60,rb:100, wr:52, te:28, pick:92, strength:'RB',     weakness:'TE',            summary:'Liquidity-heavy trading desk powered by elite RB and solid QB' },
  { owner:'Fronge',    team:'JD Power & Ass.',          company:'ForgeHammer Industries',      ticker:'FORG',  history:[{d:'Dec 2025',p:97.43},{d:'May 2026',p:94.03},{d:'Jul 2026',p:84.6},{d:'Jul 17 2026',p:81.54},{d:'Jul 20 2026',p:91.52},{d:'Jul 29 2026',p:90.38}],  trend:'Cools slightly watching the Burrow deal from the sidelines',             qb:44,rb:92, wr:20, te:36, pick:28, strength:'RB/QB',  weakness:'Pick Liquidity', summary:'High-impact factory contender with thin support and no reserves' },
  { owner:'Brent',     team:'2028 League Champs',       company:'Obsidian Specialty Holdings', ticker:'OBS',   history:[{d:'Dec 2025',p:75.4},{d:'May 2026',p:87.62},{d:'Jul 2026',p:79.05},{d:'Jul 17 2026',p:79.05},{d:'Jul 20 2026',p:71.69},{d:'Jul 29 2026',p:73.89}],  trend:'WR shelf improves to 4th; claws back three percent',          qb:20,rb:12, wr:76, te:100, pick:76, strength:'TE',     weakness:'QB/RB',         summary:'Elite TE and future assets attached to broken operations' },
  { owner:'Wingard',   team:'Mile High Bo',             company:'Sovereign Draft Reserve',     ticker:'SDR',   history:[{d:'Dec 2025',p:81.02},{d:'May 2026',p:74.63},{d:'Jul 2026',p:73.37},{d:'Jul 17 2026',p:73.37},{d:'Jul 20 2026',p:71.20},{d:'Jul 29 2026',p:69.01}],  trend:'Drifts lower into camp; the vault stays patient',  qb:28,rb:60, wr:44, te:44, pick:100,strength:'Pick Portfolio',weakness:'QB', summary:'Offshore futures empire with current production discount' },
  { owner:'Mitchum',   team:'Mitchumm11',               company:'Deepwater Supply Co.',        ticker:'DEEP',  history:[{d:'Dec 2025',p:100.66},{d:'May 2026',p:85.2},{d:'Jul 2026',p:68.7},{d:'Jul 17 2026',p:72.36},{d:'Jul 20 2026',p:79.88},{d:'Jul 29 2026',p:78.76}],  trend:'Holds steady; WR2 grade intact, direction still unannounced',      qb:12,rb:44, wr:68, te:52, pick:52, strength:'WR',     weakness:'QB',            summary:'Deep WR warehouse with unclear consolidation strategy' },
  { owner:'Ryan',      team:'Diggs-y Party',            company:'Aegis Quarterback Systems',   ticker:'AEGIS', history:[{d:'Dec 2025',p:76.63},{d:'May 2026',p:77.61},{d:'Jul 2026',p:118.42},{d:'Jul 17 2026',p:115.54},{d:'Jul 20 2026',p:109.70},{d:'Jul 29 2026',p:109.72}],  trend:'QB1 grade meets the flattest price ever recorded: two cents of movement',    qb:92,rb:76, wr:12, te:84, pick:68, strength:'QB',     weakness:'WR',            summary:'Defending champion with elite command systems but broken WR supply chain' },
  { owner:'Kevin',     team:'ksanda',                   company:'Redline Distressed Capital',  ticker:'RDC',   history:[{d:'Dec 2025',p:126.29},{d:'May 2026',p:69.47},{d:'Jul 2026',p:64.48},{d:'Jul 17 2026',p:68.30},{d:'Jul 20 2026',p:84.67},{d:'Jul 29 2026',p:81.85}],  trend:'Sold Burrow at the top; younger roster, 3rd-ranked vault, short-term markdown',           qb:52,rb:52, wr:28, te:12, pick:84, strength:'QB',     weakness:'TE',            summary:'Premium QB leverage trapped in distressed supporting structure' },
  { owner:'Drew',      team:'Brazzellian Booty Lift',   company:'Atlas Rebuild Works',         ticker:'ATLAS', history:[{d:'Dec 2025',p:106.18},{d:'May 2026',p:47.52},{d:'Jul 2026',p:44.38},{d:'Jul 17 2026',p:48.09},{d:'Jul 20 2026',p:50.08},{d:'Jul 29 2026',p:50.03}],  trend:'Flat at fifty; the rebuild reports to camp',       qb:36,rb:20, wr:36, te:20, pick:36, strength:'QB',     weakness:'RB',            summary:'Recognizable assets inside an unfinished rebuild' },
];

// ── derived pricing — price history is the source of truth ──
// current price/change/pct/cap are computed from `history`; to update prices,
// append one {d:'Mon YYYY', p:xx.xx} entry per team and everything recalculates.
TEAMS.forEach(t => {
  const h = t.history, last = h[h.length - 1], prev = h[h.length - 2] || last;
  t.price26 = last.p;                       // current price (legacy field name)
  t.price25 = h[0].p;                       // original listing price
  t.prevPrice = prev.p;                     // price at previous update
  t.change  = +(last.p - prev.p).toFixed(2);   // vs previous update
  t.pct     = +(((last.p - prev.p) / prev.p) * 100).toFixed(2);
  t.cap     = Math.round(last.p * 100);
  t.high52  = Math.max(...h.map(x => x.p));
  t.low52   = Math.min(...h.map(x => x.p));
});
// category tag — recomputed from % change on every price update
(() => {
  const maxPct = Math.max(...TEAMS.map(t => t.pct));
  const minPct = Math.min(...TEAMS.map(t => t.pct));
  TEAMS.forEach(t => {
    let cat;
    if      (t.pct >=  15) cat = 'Major Riser';
    else if (t.pct >=   2) cat = 'Riser';
    else if (t.pct >   -2) cat = 'Flat';
    else if (t.pct >   -5) cat = 'Slight Faller';
    else if (t.pct >  -15) cat = 'Faller';
    else if (t.pct >  -35) cat = 'Major Faller';
    else                   cat = 'Crash';
    if (t.pct === maxPct && t.pct > 0) cat = 'Biggest Riser';
    if (t.pct === minPct && t.pct < 0) cat = 'Biggest Faller';
    t.cat = cat;
  });
})();

const SEASON_2025 = [
  { owner:'Charles',   wins:23, losses:5,  pf:2051, pa:1569, finish:4, playoff:true,  trades:9  },
  { owner:'Corbishley',wins:21, losses:7,  pf:1951, pa:1736, finish:2, playoff:true,  trades:16 },
  { owner:'Fronge',    wins:21, losses:7,  pf:1894, pa:1705, finish:5, playoff:true,  trades:2  },
  { owner:'Jake',      wins:21, losses:7,  pf:1844, pa:1637, finish:3, playoff:true,  trades:2  },
  { owner:'Shaq',      wins:17, losses:11, pf:1727, pa:1738, finish:7, playoff:true,  trades:0  },
  { owner:'Ryan',      wins:14, losses:14, pf:1789, pa:1738, finish:1, playoff:true,  trades:3  },
  { owner:'Kevin',     wins:12, losses:16, pf:1668, pa:1687, finish:6, playoff:true,  trades:1  },
  { owner:'Drew',      wins:11, losses:17, pf:1544, pa:1684, finish:9, playoff:false, trades:1  },
  { owner:'Mitchum',   wins:10, losses:18, pf:1637, pa:1665, finish:8, playoff:false, trades:2  },
  { owner:'Adam',      wins:7,  losses:21, pf:1463, pa:1762, finish:11,playoff:false, trades:3  },
  { owner:'Brent',     wins:6,  losses:22, pf:1471, pa:1867, finish:12,playoff:false, trades:2  },
  { owner:'Wingard',   wins:5,  losses:23, pf:1455, pa:1693, finish:10,playoff:false, trades:5  },
];

const PROJ_2026 = [
  { rank:1,  owner:'Charles',   team:'Chuckys Cutlets',       record:'21-7'  },
  { rank:2,  owner:'Jake',      team:'yakeyaine',              record:'20-8'  },
  { rank:3,  owner:'Corbishley',team:'Guiness Guzzlers',       record:'19-9'  },
  { rank:4,  owner:'Fronge',    team:'JD Power & Ass.',        record:'18-10' },
  { rank:5,  owner:'Ryan',      team:'Diggs-y Party',          record:'17-11' },
  { rank:6,  owner:'Shaq',      team:'The Shough Boys',        record:'16-12' },
  { rank:7,  owner:'Adam',      team:'The 100xers',            record:'15-13' },
  { rank:8,  owner:'Mitchum',   team:'Mitchumm11',             record:'14-14' },
  { rank:9,  owner:'Kevin',     team:'ksanda',                 record:'13-15' },
  { rank:10, owner:'Wingard',   team:'Mile High Bo',           record:'10-18' },
  { rank:11, owner:'Brent',     team:'2028 League Champs',     record:'9-19'  },
  { rank:12, owner:'Drew',      team:'Brazzellian Booty Lift', record:'6-22'  },
];

const OBJECTIVES = [
  { owner:'Charles',   obj:1, text:'Win the league championship',                          cat:'Finish',      priority:'High', status:'Pending' },
  { owner:'Charles',   obj:2, text:'Finish top 2 in regular-season standings',             cat:'Finish',      priority:'High', status:'Pending' },
  { owner:'Charles',   obj:3, text:'Acquire one insurance RB/WR depth asset before playoffs', cat:'Acquisition', priority:'Medium', status:'Pending' },
  { owner:'Corbishley',obj:1, text:'Reach the championship game again',                    cat:'Finish',      priority:'High', status:'Pending' },
  { owner:'Corbishley',obj:2, text:'Acquire or stabilize the QB division',                 cat:'Acquisition', priority:'High', status:'Complete' },
  { owner:'Corbishley',obj:3, text:'Finish ahead of Crownline in regular-season standings',cat:'Rivalry',     priority:'Medium', status:'Pending' },
  { owner:'Shaq',      obj:1, text:'Convert WR wealth into RB production',                 cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Shaq',      obj:2, text:'Make the playoffs comfortably',                        cat:'Finish',      priority:'High', status:'Pending' },
  { owner:'Shaq',      obj:3, text:'Finish ahead of EchoPoint',                            cat:'Rivalry',     priority:'Medium', status:'Pending' },
  { owner:'Adam',      obj:1, text:'Improve into playoff contention after poor 2025 finish',cat:'Finish',     priority:'High', status:'In Progress' },
  { owner:'Adam',      obj:2, text:'Acquire one undervalued RB asset',                     cat:'Acquisition', priority:'High', status:'Complete' },
  { owner:'Adam',      obj:3, text:'Finish ahead of Monarch or Obsidian to validate the model', cat:'Rivalry', priority:'Medium', status:'Pending' },
  { owner:'Jake',      obj:1, text:'Finish top 4 in regular-season standings',             cat:'Finish',      priority:'High', status:'Pending' },
  { owner:'Jake',      obj:2, text:'Use liquidity to acquire one WR or TE stabilizer',     cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Jake',      obj:3, text:'Beat Monarch in the asset-market rivalry',             cat:'Rivalry',     priority:'Medium', status:'Pending' },
  { owner:'Fronge',    obj:1, text:'Make the playoffs and scare a top seed',               cat:'Finish',      priority:'High', status:'Pending' },
  { owner:'Fronge',    obj:2, text:'Acquire stable WR production',                         cat:'Acquisition', priority:'High', status:'Complete' },
  { owner:'Fronge',    obj:3, text:'Avoid a liquidity crisis after injuries or bye weeks', cat:'Risk Management', priority:'Medium', status:'In Progress' },
  { owner:'Brent',     obj:1, text:'Fix either QB or RB before the deadline',              cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Brent',     obj:2, text:'Finish outside the bottom 3',                          cat:'Finish',      priority:'Medium', status:'Pending' },
  { owner:'Brent',     obj:3, text:"Monetize Brock Bowers' TE advantage into weekly competitiveness", cat:'Operations', priority:'High', status:'Pending' },
  { owner:'Wingard',   obj:1, text:'Do not panic-sell future capital early',               cat:'Risk Management', priority:'High', status:'Pending' },
  { owner:'Wingard',   obj:2, text:'Acquire one young cornerstone asset',                  cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Wingard',   obj:3, text:'Control the trade deadline market',                    cat:'Market Influence', priority:'Medium', status:'Pending' },
  { owner:'Mitchum',   obj:1, text:'Consolidate depth into one flagship asset',            cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Mitchum',   obj:2, text:'Compete for a playoff spot',                           cat:'Finish',      priority:'Medium', status:'Pending' },
  { owner:'Mitchum',   obj:3, text:'Clarify buy/sell direction by midseason',              cat:'Operations',  priority:'High', status:'Pending' },
  { owner:'Ryan',      obj:1, text:'Return to the playoffs as defending champion',         cat:'Finish',      priority:'High', status:'Pending' },
  { owner:'Ryan',      obj:2, text:'Acquire WR help',                                      cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Ryan',      obj:3, text:'Prove 2025 title was not a one-year postseason spike', cat:'Reputation',  priority:'Medium', status:'Pending' },
  { owner:'Kevin',     obj:1, text:'Restore market confidence after the Wes scandal',      cat:'Reputation',  priority:'High', status:'Pending' },
  { owner:'Kevin',     obj:2, text:'Trade one major asset only if it resets the portfolio',cat:'Asset Management', priority:'High', status:'Pending' },
  { owner:'Kevin',     obj:3, text:'Improve WR/TE infrastructure',                         cat:'Acquisition', priority:'Medium', status:'Complete' },
  { owner:'Drew',      obj:1, text:'Commit fully to the redevelopment plan',               cat:'Operations',  priority:'High', status:'Pending' },
  { owner:'Drew',      obj:2, text:'Liquidate aging assets before value depreciation accelerates', cat:'Asset Management', priority:'High', status:'Pending' },
  { owner:'Drew',      obj:3, text:'Acquire at least one future cornerstone or premium pick package', cat:'Acquisition', priority:'High', status:'Pending' },
];

const OWNER_COLORS = {
  Charles:'#ffc840', Corbishley:'#00e676', Shaq:'#4fc3f7', Adam:'#ce93d8',
  Jake:'#ff7043', Fronge:'#80cbc4', Brent:'#fff176', Wingard:'#ef9a9a',
  Mitchum:'#b39ddb', Ryan:'#a5d6a7', Kevin:'#ffab91', Drew:'#f48fb1'
};

const TEAM_TICKERS = {
  Charles:'CROWN', Corbishley:'APEX', Shaq:'MWB', Adam:'HLX', Jake:'ECHO',
  Fronge:'FORG', Brent:'OBS', Wingard:'SDR', Mitchum:'DEEP', Ryan:'AEGIS',
  Kevin:'RDC', Drew:'ATLAS'
};


// ── FEATURED EPISODE — when set, this takes over the "This Week On LIV" slot
// on the Overview page and links to the episode. Set to null to restore the
// default day-based show rotation.
const FEATURED_EPISODE = {
  show:   'The Weekly Sit-Down',
  title:  'Training Camp Special',
  href:   'sitdown.html',
  host:   'Clara Hopkins',
  hostSub:'with Big Dog, Chad Bellwether & guest Jay Kelpey',
  photo:  'avatars/clara-hopkins.jpg',
  badge:  'NOW AIRING',
  teaser: 'Camps are open and the desk is full: the Havana question, whether the league is Charles\u2019s to lose, eight Apex trades under the microscope, the board\u2019s growing faith in Kevin \u2014 and four dark-horse picks that go on the record. Tap to watch the episode.',
};

// ── MEDIA CENTER ──
const SHOWS = [
  { name:'The Wire', desc:'Competing scoops on trades, waivers, and roster moves before anyone else confirms them.', cast:[{n:'Marty Volkman', host:false},{n:'Dina Ravioli', host:false}] },
  { name:'The Weekly Sit-Down', desc:'Tue/Wed — recaps every matchup from the week that just wrapped.', cast:[{n:'Clara Hopkins', host:true},{n:'Big Dog', host:false},{n:'Chad Bellwether', host:false},{n:'Rotating Guest', host:false}] },
  { name:'The Marquee', desc:'Draft night, playoffs, and championship coverage. The biggest stage, the biggest voices.', cast:[{n:'Vivienne Ashcroft', host:true},{n:'Terrence E. Odom', host:false},{n:'Dexter Vail', host:false},{n:'Bo Ruckman', host:false}] },
  { name:'Market Movers', desc:'A stock-market-style trade show — hype, valuations, and reversals of opinion mid-segment.', cast:[{n:'Vance Hollis', host:true},{n:'Matteo Honeydew', host:true}] },
];

const MEDIA = [
  { key:'marty-volkman', name:'Marty Volkman', role:'The Insider', show:'insider', showLabel:'The Wire', photo:'avatars/marty-volkman.jpg',
    beat:'Breaking trades and roster moves — always "first," rarely fully right.',
    quote:'Sources close to the situation tell me a deal is "not imminent, but not dead." Details to come, per source, per me, per nobody who will confirm anything.' },
  { key:'dina-ravioli', name:'Dina Ravioli', role:'The Trusted Source', show:'insider', showLabel:'The Wire', photo:'avatars/dina-ravioli.jpg',
    beat:'Investigative trade rumors — measured, credible, usually right.',
    quote:'I\'m told talks have quietly restarted. Nothing filed yet, but multiple league sources describe the mood as optimistic.' },
  { key:'big-dog', name:'Big Dog', role:'Hype Narrator', show:'panel', showLabel:'The Weekly Sit-Down', photo:'avatars/big-dog.jpg',
    beat:'Highlight recaps, running bits, and nicknames that stick all season.',
    quote:'FOLKS. That performance should be up forty points on this exchange alone. We are SO back.' },
  { key:'chad-bellwether', name:'Chad Bellwether', role:'The Bit Guy', show:'panel', showLabel:'The Weekly Sit-Down', photo:'avatars/chad-bellwether.jpg',
    beat:'Absurd hot takes, played completely straight, every single week.',
    quote:'I\'ve said this for years: touchdowns are a counting stat invented to sell jerseys. Real GMs draft for jawline.' },
  { key:'vance-hollis', name:'Vance Hollis', role:'Market Screamer', show:'trade', showLabel:'Market Movers', photo:'avatars/vance-hollis.jpg',
    beat:'Player valuations as stock hype — BUY/SELL calls, reversed mid-segment.',
    quote:'SELL. SELL SELL SELL. Wait — BUY. I\'ve done a complete 180 in four seconds and I regret NOTHING.' },
  { key:'terrence-odom', name:'Terrence E. Odom', role:'Debate Titan', show:'marquee', showLabel:'The Marquee', photo:'avatars/terrence-odom.jpg',
    beat:'Theatrical, dramatic verdicts on every questionable roster decision.',
    quote:'Let. Me. Be. Clear. That was not strategy. It was a cry for help disguised as a waiver claim.' },
  { key:'dexter-vail', name:'Dexter Vail', role:'The Contrarian', show:'marquee', showLabel:'The Marquee', photo:'avatars/dexter-vail.jpg',
    beat:'Confidently against the grain — and quick to remind you he called it first.',
    quote:'Everybody panicking is forgetting one thing — I called this in the preseason. Go check. I\'ll wait.' },
  { key:'bo-ruckman', name:'Bo Ruckman', role:'The Wildcard', show:'marquee', showLabel:'The Marquee', photo:'avatars/bo-ruckman.jpg',
    beat:'Unfiltered reactions and live chaos energy — no notes, no filter.',
    quote:'I have NO notes, I did NOT read the transaction log, and I already have a strong opinion. Let\'s GO.' },
  { key:'clara-hopkins', name:'Clara Hopkins', role:'The Anchor', show:'panel', showLabel:'The Weekly Sit-Down', photo:'avatars/clara-hopkins.jpg',
    beat:'Hosts the weekly sit-down — recaps the week that just wrapped, keeps the chaos on schedule.',
    quote:'Alright — Big Dog, land the plane. We have three more segments and about ninety seconds.' },
  { key:'vivienne-ashcroft', name:'Vivienne Ashcroft', role:'Global Host', show:'marquee', showLabel:'The Marquee / Exchange Report', photo:'avatars/vivienne-ashcroft.jpg',
    beat:'Hosts every marquee broadcast, plus the weekly Thursday Exchange Report previewing what\'s next.',
    quote:'Before the deadline chaos gets any louder — and I suspect it will — let\'s go around the desk.' },
  { key:'jay-kelpey', name:'Jay Kelpey', role:'The Trench Guy', show:'panel', showLabel:'Rotating Guest', photo:'avatars/jay-kelpey.jpg',
    beat:'Roster-construction nerd — depth charts, bench value, "who\'s actually doing the work."',
    quote:'Buddy. BUDDY. Nobody talks about the guy on the waiver wire doing the actual work. Let\'s talk depth chart.' },
  { key:'matteo-honeydew', name:'Matteo Honeydew', role:'Rankings Guru', show:'trade', showLabel:'Market Movers', photo:'avatars/matteo-honeydew.jpg',
    beat:'Weekly Love/Hate rankings — tells a story instead of just stating a stat line.',
    quote:'Look, I love this roster the way I love a good dad joke — a little corny, but it somehow keeps working.' },
];

// ── WEEKLY POWER RANKINGS (Matteo Honeydew) ──
const RANKINGS = [
  { rank:1, move:'same', ticker:'CROWN', owner:'Charles', take:'Camp opens and the gap is still sixteen dollars. Wake me when someone makes it interesting.' },
  { rank:2, move:'same', ticker:'APEX', owner:'Corbishley', take:'Joe Burrow ends the argument. The QB crisis is over, the vault is empty, and I respect the commitment completely.' },
  { rank:3, move:'up', delta:2, ticker:'AEGIS', owner:'Ryan', take:'QB1 grade, defending champ, flattest stock alive. The most stable operation on the exchange, for better and worse.' },
  { rank:4, move:'up', delta:3, ticker:'HLX', owner:'Adam', take:'Three straight issues of gains. The model is winning arguments I was having with myself in March.' },
  { rank:5, move:'down', delta:1, ticker:'ECHO', owner:'Jake', take:'Elite backfield, broom-closet TE room, sub-$100 price. All three things have been true for a month.' },
  { rank:6, move:'down', delta:3, ticker:'FORG', owner:'Fronge', take:'The factory sat out the Burrow deal and the market noticed. Depth is a virtue until it\'s an alibi.' },
  { rank:7, move:'down', delta:1, ticker:'MWB', owner:'Shaq', take:'Biggest faller of the issue. A dead-last bench grade behind a top WR bank is a choice, not an accident.' },
  { rank:8, move:'up', delta:1, ticker:'DEEP', owner:'Mitchum', take:'Quietly holding while everyone else lurches. Still waiting on a direction, but the floor is real.' },
  { rank:9, move:'down', delta:1, ticker:'RDC', owner:'Kevin', take:'Selling Burrow at the rally top is either brilliant or heartbreak, and camp won\'t tell us which. The vault says brilliant.' },
  { rank:10, move:'same', ticker:'OBS', owner:'Brent', take:'A real WR improvement to 4th. Small green shoots in Zurich. I\'m as surprised as you are.' },
  { rank:11, move:'same', ticker:'SDR', owner:'Wingard', take:'The vault is patient. The standings will not be. Camp is where those two facts start colliding.' },
  { rank:12, move:'same', ticker:'ATLAS', owner:'Drew', take:'Fifty dollars flat, hard hats on, reporting to camp. Ask me again in October.' },
];


// Last-updated stamp for the power rankings. Bump this date whenever RANKINGS changes.
const RANKINGS_UPDATED = 'Jul 29 2026';
// Self-rendering: inserts the stamp above the rankings list wherever it appears.
// Defensive — if the page has no #rankings-list element, this does nothing.
document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('rankings-list');
  if (!list || document.getElementById('rankings-updated')) return;
  const tag = document.createElement('div');
  tag.id = 'rankings-updated';
  tag.style.cssText = 'font-family:var(--mono);font-size:9px;letter-spacing:1px;color:var(--muted);margin:0 0 8px;text-transform:uppercase;';
  tag.textContent = 'Updated ' + RANKINGS_UPDATED;
  list.parentNode.insertBefore(tag, list);
});

// ── LEAGUE FEED (weekly tweets) ──
const TWEETS = [
  { key:'marty-volkman', name:'Marty Volkman', handle:'@MartyBreaks', time:'2h', text:'Hearing real buzz that Redline is finally ready to move a core piece. Nothing confirmed. Nothing denied. That\'s all I\'ll say for now.', likes:41, rt:12, reply:19 },
  { key:'dina-ravioli', name:'Dina Ravioli', handle:'@DinaOnTheLine', time:'4h', text:'Sources tell me the Apex front office is NOT panicking about the QB room, no matter what my colleague wants you to believe. 🙄', likes:63, rt:8, reply:27 },
  { key:'big-dog', name:'Big Dog', handle:'@BigDogHype', time:'6h', text:'FOLKS. EchoPoint\'s backfield went off again this week and I am simply not built for this level of joy on a Sunday.', likes:112, rt:34, reply:15 },
  { key:'chad-bellwether', name:'Chad Bellwether', handle:'@ChadTakesLIV', time:'7h', text:'Unpopular opinion: draft picks are just IOUs from a guy who\'s scared to make a decision right now. Sovereign Draft Reserve, this is about you.', likes:88, rt:22, reply:41 },
  { key:'vance-hollis', name:'Vance Hollis', handle:'@VanceScreamsLIV', time:'8h', text:'CROWNLINE AT $139.84. ARE WE SERIOUS. THAT\'S NOT A STOCK PRICE THAT\'S A CRIME SCENE. BUY BUY BUY.', likes:76, rt:19, reply:33 },
  { key:'terrence-odom', name:'Terrence E. Odom', handle:'@TerrenceVerdict', time:'9h', text:'Let. Me. Be. Clear. ForgeHammer is quietly building the most disciplined roster in this exchange and nobody is talking about it.', likes:94, rt:16, reply:11 },
  { key:'dexter-vail', name:'Dexter Vail', handle:'@DexterCalledIt', time:'11h', text:'Helix Quant is up 34.9% and I called this turnaround back in the preseason. Screenshot it. I\'ll wait.', likes:58, rt:9, reply:24 },
  { key:'bo-ruckman', name:'Bo Ruckman', handle:'@BoRuckmanLIVE', time:'12h', text:'I have not slept and I have THOUGHTS about Deepwater\'s roster direction. Someone book me a segment RIGHT NOW.', likes:47, rt:6, reply:29 },
  { key:'clara-hopkins', name:'Clara Hopkins', handle:'@ClaraAnchors', time:'1d', text:'Reminder: this week\'s Sit-Down recaps every matchup from the weekend. Tuesday, same time. Bring snacks.', likes:39, rt:11, reply:5 },
  { key:'vivienne-ashcroft', name:'Vivienne Ashcroft', handle:'@VivienneOnAir', time:'1d', text:'Thursday\'s Exchange Report previews the full slate ahead, prediction picks included. It has been, shall we say, an eventful week across the league.', likes:71, rt:14, reply:8 },
  { key:'jay-kelpey', name:'Jay Kelpey', handle:'@JayInTheTrenches', time:'1d', text:'Buddy. BUDDY. Nobody talks about the depth pieces doing the actual work every week. Let\'s change that this season.', likes:52, rt:7, reply:13 },
  { key:'matteo-honeydew', name:'Matteo Honeydew', handle:'@MatteoRanksIt', time:'2d', text:'New Love/Hate Rankings are up. Someone in the replies is going to be mad and it\'s probably going to be you, Wingard.', likes:66, rt:13, reply:38 },
];


// ── MOVEMENT — who moved and why (prev values drive ▲/▼ indicators everywhere) ──
const MOVEMENT = {
  Charles:   { stockRank:{now:1, prev:1},  power:{now:1, prev:1},   proj:{now:1, prev:1},   playoff:{now:92, prev:89}, conf:{now:91, prev:84}, asset:{now:1, prev:1},   hq:'Manhattan, NY',    risk:{level:'Low',    text:'Championship-or-bust: any finish short of a title triggers a board reckoning.'}, headline:'Crownline dips to $131.71 as camp opens — the lead is still sixteen dollars.' },
  Corbishley:{ stockRank:{now:2, prev:3},  power:{now:2, prev:2},   proj:{now:3, prev:4},   playoff:{now:81, prev:74}, conf:{now:93, prev:88}, asset:{now:2, prev:3},   hq:'London, England',       risk:{level:'Medium', text:'QB division remains unstabilized; one injury from a full-blown crisis.'}, headline:'Apex lands Joe Burrow and rockets 11% into the 2 spot — the QB crisis is over, and so is the pick vault.' },
  Shaq:      { stockRank:{now:5, prev:4},  power:{now:7, prev:6},   proj:{now:6, prev:5},   playoff:{now:58, prev:63}, conf:{now:76, prev:79}, asset:{now:4, prev:4},   hq:'Dallas, TX',       risk:{level:'Medium', text:'WR wealth is illiquid; the RB hole is unaddressed for a second consecutive window.'}, headline:'Monarch is the issue\'s biggest faller — the bench grade slides to dead last as camp opens.' },
  Adam:      { stockRank:{now:6, prev:7},  power:{now:4, prev:7},  proj:{now:7, prev:9},   playoff:{now:47, prev:31}, conf:{now:84, prev:79}, asset:{now:5, prev:6},   hq:'Chicago, IL',      risk:{level:'Medium', text:'Model-driven turnaround still unproven against live competition.'}, headline:'Helix rises a third straight issue — the Herbert unit now grades QB2.' },
  Jake:      { stockRank:{now:4, prev:5},  power:{now:5, prev:4},   proj:{now:2, prev:2},   playoff:{now:84, prev:85}, conf:{now:82, prev:78}, asset:{now:3, prev:2},   hq:'Singapore',        risk:{level:'Low',    text:'TE position is a rounding error; elite RB depreciation is the long-term worry.'}, headline:'EchoPoint idles under $100 into camp; the TE desk remains a broom closet.' },
  Fronge:    { stockRank:{now:7, prev:6},  power:{now:6, prev:3},   proj:{now:4, prev:3},   playoff:{now:74, prev:78}, conf:{now:80, prev:74}, asset:{now:7, prev:7},   hq:'Havana, CU',       risk:{level:'High',   text:'Zero pick liquidity — one injury and there is no capital to respond.'}, headline:'ForgeHammer cools slightly — the factory watches the Burrow deal from the sidelines.' },
  Brent:     { stockRank:{now:10, prev:10},  power:{now:10, prev:10},   proj:{now:11, prev:11}, playoff:{now:14, prev:12}, conf:{now:52, prev:49}, asset:{now:8, prev:9},   hq:'Zurich, CH',       risk:{level:'High',   text:'Operating model broken at two positions; the Bowers advantage is wasting on the vine.'}, headline:'Obsidian claws back 3% — the WR shelf quietly improves to 4th.' },
  Wingard:   { stockRank:{now:11, prev:11}, power:{now:11, prev:11},  proj:{now:10, prev:10}, playoff:{now:18, prev:22}, conf:{now:44, prev:51}, asset:{now:6, prev:5},   hq:'George Town, KY',  risk:{level:'High',   text:'Pick empire depreciates if the rebuild window slips another season.'}, headline:'Sovereign drifts as camp opens — the vault is patient, the market is not.' },
  Mitchum:   { stockRank:{now:9, prev:9},  power:{now:8, prev:9},   proj:{now:8, prev:8},   playoff:{now:38, prev:44}, conf:{now:47, prev:55}, asset:{now:10, prev:9},  hq:'Houston, TX',      risk:{level:'High',   text:'No flagship direction; depth without consolidation is a slow leak.'}, headline:'Deepwater holds steady — WR2 grade intact, direction still unannounced.' },
  Ryan:      { stockRank:{now:3, prev:2},  power:{now:3, prev:5},   proj:{now:5, prev:6},   playoff:{now:62, prev:58}, conf:{now:71, prev:70}, asset:{now:9, prev:10},  hq:'Philadelphia, PA', risk:{level:'Medium', text:'Repeat skepticism is priced in; the WR supply chain is still broken.'}, headline:'Aegis moves two cents — QB1 per the agency, and the flattest price in exchange history.' },
  Kevin:     { stockRank:{now:8, prev:8},power:{now:9, prev:8}, proj:{now:9, prev:9},   playoff:{now:31, prev:28}, conf:{now:41, prev:33}, asset:{now:11, prev:11}, hq:'Detroit, MI',      risk:{level:'Severe', text:'Post-scandal trust deficit; one more misstep invites a hostile takeover.'}, headline:'Redline sells Burrow at the top — down 3% today, up a year of roster youth and a 3rd-ranked vault.' },
  Drew:      { stockRank:{now:12, prev:12},power:{now:12, prev:12}, proj:{now:12, prev:12}, playoff:{now:6, prev:11},  conf:{now:28, prev:41}, asset:{now:12, prev:12}, hq:'Sao Paulo, BR',    risk:{level:'Severe', text:'Liquidation risk: aging assets depreciating faster than the rebuild absorbs.'}, headline:'Atlas unchanged at fifty bucks — the rebuild reports to camp.' },
};

// Previous positional RANKS (1-12, lower = better) — current ranks are computed live from TEAMS
const PREV_POS_RANKS = {
  Charles:   { qb:1,   rb:3,   wr:6,   te:2,   pick:6  },
  Corbishley:{ qb:9,   rb:5,   wr:2,   te:4,   pick:10 },
  Shaq:      { qb:4,   rb:10,  wr:1,   te:5,   pick:5  },
  Adam:      { qb:5,   rb:9,   wr:3,   te:6,   pick:12 },
  Jake:      { qb:6,   rb:1,   wr:7,   te:10,  pick:2  },
  Fronge:    { qb:7,   rb:2,   wr:11,  te:9,   pick:11 },
  Brent:     { qb:11,  rb:12,  wr:5,   te:1,   pick:3  },
  Wingard:   { qb:10,  rb:6,   wr:8,   te:8,   pick:1  },
  Mitchum:   { qb:12,  rb:8,   wr:4,   te:7,   pick:7  },
  Ryan:      { qb:2,   rb:4,   wr:12,  te:3,   pick:4  },
  Kevin:     { qb:3,   rb:7,   wr:10,  te:12,  pick:8  },
  Drew:      { qb:8,   rb:11,  wr:9,   te:11,  pick:9  },
};

// ── LEAGUE TIMELINE — permanent canon, chronological ──
const TIMELINE = [
  { date:'Aug 2025', tag:'FOUNDING',     color:'gold',   title:'The Exchange Opens',                 text:'The LIV Dynasty Exchange is founded. Twelve corporations list on day one; Crownline opens as the largest by market cap.' },
  { date:'Nov 2025', tag:'SCANDAL',      color:'red',    title:'The Wes Scandal',                    text:'The Wes scandal breaks and Redline stock craters. Kevin assumes control of Redline Distressed Capital and inherits the cleanup.', owner:'Kevin' },
  { date:'Dec 2025', tag:'CHAMPIONSHIP', color:'green',  title:'Ryan Wins the Inaugural Championship', text:'Aegis Quarterback Systems takes the first title from the 6 seed at 14-14. The victory parade is one block long. The market remains skeptical.', owner:'Ryan' },
  { date:'May 2026', tag:'DRAFT',        color:'purple', title:'2026 Rookie Draft',                  text:'Futures change hands across the board. The Sovereign Draft Reserve pick empire grows again; scouts disagree loudly on everything.' },
  { date:'May 2026', tag:'RELOCATION',   color:'blue',   title:'ForgeHammer Relocates to Havana',    text:'Following the rookie draft, ForgeHammer Industries moves its headquarters to Havana, citing "regulatory flexibility." Analysts note the factory keeps running either way.', owner:'Fronge' },
  { date:'Jun 2026', tag:'VALUATIONS',   color:'gold',   title:'2026 Preseason Valuations Published', text:'Helix posts the biggest rise (+34.9%), Atlas the biggest fall (-55.3%). Vance Hollis reverses his position on both within one broadcast.' },
  { date:'Jul 2026', tag:'TRADE',        color:'red',    title:'The Midsummer Blockbuster',          text:'Helix lands Justin Herbert, sending C.J. Stroud, Jacory Croskey-Merritt, and a 2028 first to ForgeHammer. The vault empties overnight; the whole exchange reprices within hours.', owner:'Adam' },
  { date:'Jul 2026', tag:'TRADE',        color:'red',    title:'The Cigar Accord',             text:'Apex lands Breece Hall and Tee Higgins from ForgeHammer for Nico Collins, TreVeyon Henderson, Kyle Monangai and a pick swap — sealed, per league legend, over cigars. In 1762 London seized Havana and traded it back for Florida; in 2026 London seized the skill positions and paid in youth. History rhymes.', owner:'Corbishley' },
  { date:'Jul 2026', tag:'VALUATIONS',   color:'gold',   title:'The Ratings Agency Switch',          text:'The exchange adopts Dynasty Daddy contender grades — five inputs, FLEX included — and every stock reprices at once: Redline +24%, Obsidian -9.3%. Chaos, by design.' },
  { date:'Jul 2026', tag:'TRADE',        color:'red',    title:'The Burrow Deal',                    text:'Apex lands Joe Burrow, Jordan Addison, and David Montgomery from Redline for Quinshon Judkins, Christian Watson, Daniel Jones, and pick capital. Corbishley goes all-in; Kevin sells the rally top and gets a year younger doing it.', owner:'Corbishley' },
  { date:'Jul 2026', tag:'SEASON',       color:'blue',   title:'Training Camp Opens',                text:'The 2026 season stirs to life: training camps open league-wide on Jul 29. Momentum multipliers stay dormant until three full weeks of games are on the books.' },
];
