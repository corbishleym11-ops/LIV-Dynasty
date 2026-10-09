// ═══════════════════════════════════════════════
// LIV DYNASTY EXCHANGE — SHARED DATA
// Loaded by every page. Edit team info, rosters, media, etc. here ONLY.
// ═══════════════════════════════════════════════

const TEAMS = [
  { owner:'Charles',   team:'Chuckys Cutlets',         company:'Crownline Global Holdings',   ticker:'CROWN', history:[{d:'Dec 2025',p:118.28},{d:'May 2026',p:139.84},{d:'Jul 2026',p:135.34},{d:'Jul 17 2026',p:139.28},{d:'Jul 20 2026',p:134.14},{d:'Jul 29 2026',p:131.71},{d:'Aug 20 2026',p:129.47},{d:'Sep 7 2026',p:133.12},{d:'Sep 22 2026',p:132.81},{d:'Sep 29 2026',p:136.79},{d:'Oct 9 2026',p:148.52}], trend:'162.22 over Ryan and 8-0; the contender grade prints an all-time high of 468',        qb:100,rb:100, wr:68, te:92, pick:12, strength:'QB/RB',     weakness:'Pick Liquidity', summary:'Elite operating platform with premium QB/RB/TE strength' },
  { owner:'Corbishley',team:'Guiness Guzzlers',         company:'Apex Iron Capital',           ticker:'APEX',  history:[{d:'Dec 2025',p:87.53},{d:'May 2026',p:107.27},{d:'Jul 2026',p:114.53},{d:'Jul 17 2026',p:111.66},{d:'Jul 20 2026',p:103.98},{d:'Jul 29 2026',p:115.51},{d:'Aug 20 2026',p:118.00},{d:'Sep 7 2026',p:116.71},{d:'Sep 22 2026',p:119.30},{d:'Sep 29 2026',p:123.00},{d:'Oct 9 2026',p:124.15}], trend:'139.70 past Brent and 7-1; the only desk still within sight of Crownline',     qb:76,rb:68, wr:100, te:76, pick:20, strength:'WR',  weakness:'Pick Liquidity',            summary:'Explosive skill-position portfolio dragged by QB concerns' },
  { owner:'Shaq',      team:'The Shough Boys',          company:'Monarch Wideout Bank',        ticker:'MWB',   history:[{d:'Dec 2025',p:87.73},{d:'May 2026',p:100.98},{d:'Jul 2026',p:109.39},{d:'Jul 17 2026',p:109.39},{d:'Jul 20 2026',p:101.17},{d:'Jul 29 2026',p:95.21},{d:'Aug 20 2026',p:99.99},{d:'Sep 7 2026',p:99.99},{d:'Sep 22 2026',p:95.12},{d:'Sep 29 2026',p:90.42},{d:'Oct 9 2026',p:92.87}], trend:'138.30 on Fronge and 5-3; the fraud label is starting to look dated',              qb:92,rb:28, wr:76, te:68, pick:60, strength:'QB',     weakness:'RB',            summary:'Luxury WR bank with underfunded RB cash flow' },
  { owner:'Adam',      team:'The 100xers',              company:'Helix Quant Strategies',      ticker:'HLX',   history:[{d:'Dec 2025',p:68.37},{d:'May 2026',p:92.23},{d:'Jul 2026',p:92.58},{d:'Jul 17 2026',p:86.21},{d:'Jul 20 2026',p:90.89},{d:'Jul 29 2026',p:95.11},{d:'Aug 20 2026',p:90.95},{d:'Sep 7 2026',p:92.02},{d:'Sep 22 2026',p:85.64},{d:'Sep 29 2026',p:79.57},{d:'Oct 9 2026',p:75.13}],  trend:'109.58 and 2-6; six straight results lost and QB12 on the board again',qb:44,rb:36, wr:92, te:60, pick:28, strength:'WR',     weakness:'Pick Liquidity',            summary:'Strong WR/young asset base with weak current RB output' },
  { owner:'Jake',      team:'yakeyaine',                company:'EchoPoint Global Markets',    ticker:'ECHO',  history:[{d:'Dec 2025',p:86.28},{d:'May 2026',p:99.58},{d:'Jul 2026',p:105.22},{d:'Jul 17 2026',p:105.22},{d:'Jul 20 2026',p:99.13},{d:'Jul 29 2026',p:97.90},{d:'Aug 20 2026',p:101.55},{d:'Sep 7 2026',p:103.99},{d:'Sep 22 2026',p:101.59},{d:'Sep 29 2026',p:104.02},{d:'Oct 9 2026',p:92.12}],  trend:'122.88 beat Adam while the contender grade fell 56 points underneath him',                qb:68,rb:92, wr:44, te:12, pick:92, strength:'RB',     weakness:'TE',            summary:'Liquidity-heavy trading desk powered by elite RB and solid QB' },
  { owner:'Fronge',    team:'JD Power & Ass.',          company:'ForgeHammer Industries',      ticker:'FORG',  history:[{d:'Dec 2025',p:97.43},{d:'May 2026',p:94.03},{d:'Jul 2026',p:84.6},{d:'Jul 17 2026',p:81.54},{d:'Jul 20 2026',p:91.52},{d:'Jul 29 2026',p:90.38},{d:'Aug 20 2026',p:86.85},{d:'Sep 7 2026',p:81.86},{d:'Sep 22 2026',p:85.59},{d:'Sep 29 2026',p:78.62},{d:'Oct 9 2026',p:88.66}],  trend:'119.62 and 2-6, but WR3 and FLEX3 lift the stock nearly 13 percent',             qb:28,rb:84, wr:52, te:36, pick:36, strength:'RB',  weakness:'QB', summary:'High-impact factory contender with thin support and no reserves' },
  { owner:'Brent',     team:'2028 League Champs',       company:'Obsidian Specialty Holdings', ticker:'OBS',   history:[{d:'Dec 2025',p:75.4},{d:'May 2026',p:87.62},{d:'Jul 2026',p:79.05},{d:'Jul 17 2026',p:79.05},{d:'Jul 20 2026',p:71.69},{d:'Jul 29 2026',p:73.89},{d:'Aug 20 2026',p:74.95},{d:'Sep 7 2026',p:77.10},{d:'Sep 22 2026',p:66.11},{d:'Sep 29 2026',p:75.32},{d:'Oct 9 2026',p:75.90}],  trend:'131.06 was the seventh-best score of the week and still a loss',          qb:12,rb:12, wr:84, te:100, pick:76, strength:'TE',     weakness:'QB/RB',         summary:'Elite TE and future assets attached to broken operations' },
  { owner:'Wingard',   team:'Mile High Bo',             company:'Sovereign Draft Reserve',     ticker:'SDR',   history:[{d:'Dec 2025',p:81.02},{d:'May 2026',p:74.63},{d:'Jul 2026',p:73.37},{d:'Jul 17 2026',p:73.37},{d:'Jul 20 2026',p:71.20},{d:'Jul 29 2026',p:69.01},{d:'Aug 20 2026',p:67.86},{d:'Sep 7 2026',p:63.56},{d:'Sep 22 2026',p:65.78},{d:'Sep 29 2026',p:65.03},{d:'Oct 9 2026',p:56.11}],  trend:'103.96 beats Drew, but the contender grade collapses to 108 — the lowest ever recorded',  qb:36,rb:44, wr:36, te:52, pick:100,strength:'Pick Portfolio',weakness:'QB/WR', summary:'Offshore futures empire with current production discount' },
  { owner:'Mitchum',   team:'Mitchumm11',               company:'Deepwater Supply Co.',        ticker:'DEEP',  history:[{d:'Dec 2025',p:100.66},{d:'May 2026',p:85.2},{d:'Jul 2026',p:68.7},{d:'Jul 17 2026',p:72.36},{d:'Jul 20 2026',p:79.88},{d:'Jul 29 2026',p:78.76},{d:'Aug 20 2026',p:76.60},{d:'Sep 7 2026',p:75.34},{d:'Sep 22 2026',p:79.82},{d:'Sep 29 2026',p:82.86},{d:'Oct 9 2026',p:87.66}],  trend:'187.80, the highest score of the season, and 6-0 across the last three weeks',      qb:52,rb:52, wr:60, te:44, pick:52, strength:'WR',     weakness:'TE',            summary:'Deep WR warehouse with unclear consolidation strategy' },
  { owner:'Ryan',      team:'Diggs-y Party',            company:'Aegis Quarterback Systems',   ticker:'AEGIS', history:[{d:'Dec 2025',p:76.63},{d:'May 2026',p:77.61},{d:'Jul 2026',p:118.42},{d:'Jul 17 2026',p:115.54},{d:'Jul 20 2026',p:109.70},{d:'Jul 29 2026',p:109.72},{d:'Aug 20 2026',p:115.06},{d:'Sep 7 2026',p:114.98},{d:'Sep 22 2026',p:129.22},{d:'Sep 29 2026',p:127.96},{d:'Oct 9 2026',p:124.13}],  trend:'138.86 was not enough against Charles; the champion sits 4-4',    qb:84,rb:76, wr:12, te:84, pick:68, strength:'QB',     weakness:'WR',            summary:'Defending champion with elite command systems but broken WR supply chain' },
  { owner:'Kevin',     team:'ksanda',                   company:'Redline Distressed Capital',  ticker:'RDC',   history:[{d:'Dec 2025',p:126.29},{d:'May 2026',p:69.47},{d:'Jul 2026',p:64.48},{d:'Jul 17 2026',p:68.30},{d:'Jul 20 2026',p:84.67},{d:'Jul 29 2026',p:81.85},{d:'Aug 20 2026',p:79.65},{d:'Sep 7 2026',p:78.52},{d:'Sep 22 2026',p:86.58},{d:'Sep 29 2026',p:82.84},{d:'Oct 9 2026',p:95.35}],  trend:'133.76 in a loss to a 187, and the contender grade still jumps 72 points',           qb:60,rb:60, wr:28, te:28, pick:84, strength:'Pick Portfolio',     weakness:'WR/TE',            coCeo:'Tyler', summary:'Co-CEO era begins: Kevin and Tyler steer the post-scandal turnaround together' },
  { owner:'Drew',      team:'Brazzellian Booty Lift',   company:'Atlas Rebuild Works',         ticker:'ATLAS', history:[{d:'Dec 2025',p:106.18},{d:'May 2026',p:47.52},{d:'Jul 2026',p:44.38},{d:'Jul 17 2026',p:48.09},{d:'Jul 20 2026',p:50.08},{d:'Jul 29 2026',p:50.03},{d:'Aug 20 2026',p:50.11},{d:'Sep 7 2026',p:53.53},{d:'Sep 22 2026',p:45.57},{d:'Sep 29 2026',p:49.72},{d:'Oct 9 2026',p:40.72}],  trend:'93.12 and 0-8; an all-time low of 40.72 with both lenses still falling',       qb:20,rb:20, wr:20, te:20, pick:44, strength:'Pick Portfolio',     weakness:'All Positions',            summary:'Recognizable assets inside an unfinished rebuild' },
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


// ── CURRENT EPISODE — renders as an embedded slide deck in the "This Week On
// LIV" slot on the Overview page (and standalone at sitdown.html). To publish
// a new episode, replace this block. Set EPISODE = null to restore the
// default day-based show rotation on the Overview.
// ══════════════════════════════════════════════════════════════
// THE WEEKLY LEDGER — prose newsletter, renders in the Overview slot.
// Publish a new issue: move the current NEWSLETTER object into
// NEWSLETTER_ARCHIVE (front of array), then replace NEWSLETTER.
// paragraphs: {text:'...'} for narration, {who:'pundit-key', quote:'...'} for desk quotes.
// ══════════════════════════════════════════════════════════════
const NEWSLETTER = {
  week:5,
  kind:'WEEK 5 PREVIEW',
  date:'Oct 9 2026',
  narrator:'clara-hopkins',
  title:'CHARLES AND MITCHUM ARE BOTH 6-0 SINCE WEEK 2. ON SUNDAY ONE OF THEM STOPS.',
  paragraphs:[
    { text:'Good evening. Week 5 opens with the two hottest teams in this league pointed directly at each other, four games that will decide whether the middle of the table still exists, and one projection so low the agency appears to have given up mid-calculation. Let me take them in order of how much they matter.' },
    { text:'Charles at 8-0 plays Mitchum at 6-2, and this is the game of the season to date. Both men are 6-0 across the last three weeks — identical trailing form, the only two in the league who have not dropped a result since Week 2. Charles brings the highest lineup grade the exchange has ever recorded, a 468 that is ninety-six points clear of anything else on the board. Mitchum brings a 187.80, the best single score anyone has posted this year. Sleeper projects 152.34 to 135.05 and gives Charles seventy-two percent, which feels roughly twenty points too generous to the undefeated team. If Mitchum wins this, the conversation about the top of this league reopens for the first time since September.' },
    { text:'Corbishley at 7-1 draws Jake at 4-4, projected 143.68 to 112.10. Corbishley has the best receiving room in the league and a one-game cushion behind Charles he cannot afford to spend. Jake is the more interesting case: he won last week and his contender grade fell fifty-six points anyway, the TE room is still twelfth, and his stock has dropped eleven percent. He is 4-4 and trending in the wrong direction on a roster that was second in the league six weeks ago.' },
    { text:'Kevin at 5-3 faces Brent at 2-6, projected 131.27 to 107.63. Kevin scored above the median last week and lost anyway; his contender grade then jumped seventy-two points and his stock fifteen percent. Brent has the best tight end in the league, the seventh-best score of last week, and one banked result in his last six. One of these men is being rewarded by the market and the other is being ignored by it, and neither has much to do with what either deserves.' },
    { text:'Adam at 2-6 plays Shaq at 5-3 and it is the closest line on the board: 126.66 to 123.29, fifty-three percent. Adam has lost six consecutive results and grades twelfth at quarterback in a superflex league. Shaq has banked two results in a week twice running and spent the autumn quietly making me look foolish for the fraud call. By projection this is a coin flip. By form it should not be close, and if Adam wins it he salvages a season that is otherwise finished.' },
    { text:'Drew at 0-8 gets Fronge at 2-6, projected 105.90 to 128.42. This is the game nobody will watch and both men desperately need. Drew has lost all eight results available to him and sits at an all-time low of 40.72. Fronge has lost six of his last eight while his roster quietly became one of the best in the league on paper — third at receiver, third in the flex. If Fronge loses this one the gap between his assets and his outcomes stops being interesting and starts being an indictment.' },
    { text:'And then Wingard at 3-5 plays Ryan at 4-4, where Sleeper projects Wingard for 78.59. Seventy-eight. The agency grades his lineup 108, the lowest figure recorded against any team at any point this season, and he is eleventh or twelfth at four of five positions. He is also first in the league in draft capital, which is the whole thesis and the whole problem. Ryan is a thirteen-point favorite in a game the model gives him eighty-seven percent, and the champion badly needs it: 4-4 with the second-best lineup in the league is not a record that survives another month of this.' },
    { text:'The market goes into Sunday with Charles at 148.52 after an eight and a half percent week, Corbishley and Ryan separated by two cents at the top of the second tier, and Drew down eighteen percent to 40.72. Kevin was the biggest riser at plus fifteen. Six teams are at or above .500 and five of the other six are 2-6 or worse. The middle of this league has stopped existing. I am Clara Hopkins. Enjoy Sunday.' }
  ]
};
const NEWSLETTER_ARCHIVE = [
  {
  week:3,
  kind:'WEEK 3 RECAP',
  date:'Sep 29 2026',
  narrator:'vivienne-ashcroft',
  title:'BRENT SCORED 89 AND GOT RICHER. FRONGE SCORED 99 AND LOST TO A WINLESS TEAM.',
  paragraphs:[
    { text:'Good evening. I want to start with the median, because this week the median did more damage than any single opponent did. It settled at 119.64. Six of you cleared it. Six of you did not, and for four of those six it was the second loss of the afternoon — which is how a league goes from competitive to sorted in about four hours.' },
    { text:'Begin at the top, because the top has stopped being a conversation. Charles beat Brent 174.04 to 89.12. That is an eighty-five point margin between two adults who both set a lineup. Charles is 6-0. He has not dropped a result — not a matchup, not a median — since this exchange opened its books. There is Charles, and then there is a gap you could land a plane in.' },
    { text:'Corbishley put 161.30 on Drew, who answered with 93.02 and fell to 0-6. Sixth-worst is the wrong frame here. Drew is the only owner in this league who has not banked a single result in three weeks of football — twelve chances, twelve losses. Corbishley meanwhile is 5-1 and his receiving corps now grades first in the league on the dynasty board, which makes the Cigar Accord look less like a trade and more like a hostile acquisition nobody bothered to contest.' },
    { text:'Kevin scored 148.64, second-most in the league, and spent all of it on Shaq, who managed 117.44 and finished beneath the median. That is an 0-2 week for a man the board had at 3-1 and who spent all of September being described as a contender. Shaq has now been graded a fraud by the agency, lost both results in a single week, and still owns the third-best receiving room in the league. The assets are real. The Sundays are not.' },
    { text:'And then there is the game I am obliged to describe. Wingard — 0-4, winless, and carrying a starting lineup the agency grades eleventh at quarterback, twelfth at running back and dead last in the flex — beat Fronge 121.84 to 99.40, cleared the median, and walked out of Week 3 with two results. Fronge walked out with none. Seven days ago the power rankings had Fronge fifth and Wingard twelfth. Fronge did not lose to a good team. Fronge lost to a team that, until Sunday afternoon, had lost absolutely everything.' },
    { text:'The two competitive games were almost an afterthought. Mitchum beat Jake 139.50 to 123.22 — Jake cleared the median and took a loss anyway, which is the specific cruelty this format was built to administer. Ryan beat Adam 114.70 to 98.84, a game neither should list on a resume: Ryan won with a number that did not clear the median, and Adam has now finished under a hundred three weeks running. The defending champion is 3-3. Adam is 2-4 with the twelfth-ranked quarterback room in a superflex league, which is not a weakness so much as a structural defect.' },
    { text:'The market closed stranger than the football did. Brent was the biggest riser on the exchange at plus 13.93 percent — on an eighty-nine point Sunday — because the agency moved his contender grade eighty points on the strength of Bowers and a flex room nobody had been looking at. It repriced his bench. It has not repriced his outcomes. Fronge was the biggest faller at minus 8.14. Charles gained three percent on momentum alone, this being the first week the momentum term has been live, and Corbishley crossed back above 120 dollars. Drew rose nine percent while going 0-6, which is the market telling him something his record keeps refusing to hear.' },
    { text:'Six of you are at or above .500. Four of you are 2-4 and separated by nothing but the order the tiebreakers happen to run in. One of you is 0-6. Week 4 opens Sunday and the median has no interest in how any of you feel about that. I am Vivienne Ashcroft. Good night.' }
  ]
},
  {
  week: 2, kind: 'WEEK 2 RECAP', date: 'Sep 22 2026',
  narrator: 'clara-hopkins',
  title: 'CHARLES SCORED 205. ADAM SCORED 71. SOMEHOW NEITHER IS THE WORST THING THAT HAPPENED.',
  paragraphs: [
    { text: 'Good evening. Week 2 was not a week of football so much as a controlled demolition, and I want to be precise about the wreckage before anyone starts spinning it. Charles put up 205.60 — the first two-hundred-point game this exchange has ever recorded. Adam put up 71.08. Wingard put up 70.56. Those last two numbers were produced by professional adults who were, at the time, trying.' },
    { text: 'Begin at the top, because the top is obscene. Charles beat Kevin 205.60 to 133.58. Read that again. Kevin scored the sixth-most points in the league this week and lost by seventy-two. There is no version of that game Kevin wins, no lineup he sets, no waiver he claims. He played well and was destroyed anyway. Charles is 4-0, has scored 374.50 points in two weeks, and remains at $132.81 for the simple reason that the market ran out of room to price him higher.' },
    { who: 'vance-hollis', quote: 'TWO HUNDRED AND FIVE POINT SIX ZERO. I HAVE BEEN SCREAMING ABOUT CROWNLINE SINCE JULY AND THE NUMBER FINALLY SCREAMED BACK. KEVIN DID NOTHING WRONG. KEVIN SCORED 133 AND GOT DELETED. THAT IS NOT A LOSS THAT IS A NATURAL DISASTER WITH A BOX SCORE.' },
    { text: 'Now the two crime scenes. Adam scored 71.08 against Brent and lost by twenty-eight. Wingard scored 70.56 against Shaq and lost by seventeen. Between them, 141.64 points — less than Charles managed by himself with room to spare. Adam traded his entire pick vault for Justin Herbert in July and has now been outscored in a single week by a man starting Brock Bowers and a prayer. His stock fell another 6.93 percent, a third consecutive red issue.' },
    { text: 'Wingard’s week deserves its own paragraph and possibly its own inquiry. He is 0-and-4. He has scored fewer points than any team in the league. During the week he added Cooper Rush and DeeJay Dallas from the waiver wire, which is the transactional equivalent of rearranging chairs on a submarine. He holds four 2027 first-round picks. He is, at $65.78, the eleventh most valuable corporation in a twelve-team league, and the only reason he is not twelfth is that Drew exists.' },
    { who: 'bo-ruckman', quote: 'I asked for a segment on Sovereign last week and nobody booked it. Seventy point five six. I want the whiteboard, I want an hour, and I want Wingard in the chair explaining to me, slowly, what four first-round picks are supposed to do about a Tuesday.' },
    { text: 'Speaking of Drew: 92.74 against Ryan, a fourth straight loss, and an all-time-low share price of $45.57. That is the cheapest listing in the history of this exchange, and it arrived in September. The rebuild was sold as a long-term thesis. Four weeks in, it looks less like a thesis and more like a liquidation notice with a hard hat on it.' },
    { text: 'The upset of the week belonged to Mitchum, who walked into an undefeated Apex and left with the scalp: 159.98 to 151.66. Corbishley scored 151 points and lost, which is the cruelest possible outcome and the third-most points in the league. Mitchum, a man this network has accused of having no direction for six consecutive issues, picked a direction and it turned out to be straight through Corbishley’s chest.' },
    { who: 'dina-ravioli', quote: 'For the record, because nobody else will keep it: the median this week was 116.25, down eleven points from Week 1. Half this league scored under 117. What looked like a bloodbath was, statistically, a league-wide power outage with two exceptions — and one of those exceptions scored 205.' },
    { text: 'And then there is Jake. Last week this network moved him up six spots to second on the strength of a 155-point opener. This week he scored 97.94 and was beaten by 48.62 points by Fronge — the man ranked ninth at the time. Fronge dropped 146.56, the second-best score of the week, and finally cashed the depth thesis he has been selling since the Cigar Accord. One analyst has been waiting a long time for that.' },
    { who: 'jay-kelpey', quote: 'I locked Fronge in Week 1 and lost by 3.36 points. I locked him again in Week 2 and he put 146 on the second-best team in the league. Buddy, I did not change my mind, I just waited. I am 8-and-4 and I would like that entered into the record next to every joke made at my expense.' },
    { who: 'matteo-honeydew', quote: 'I had Jake second. He is eighth now. I had Fronge ninth. He is fifth. Two weeks of football have made a fool of my preseason board, and I would rather say that out loud than let one of you say it for me. The list is corrected. The embarrassment is filed.' },
    { text: 'The rankings moved accordingly, and they moved hard. Ryan climbs to third on a 136.68 and the best contender grade in the league. Fronge jumps four to fifth. Mitchum jumps four to sixth on the third-most points in the entire league — six issues of being called directionless, answered in one afternoon. Jake falls six. Adam falls five. Brent sits ninth despite being unbeaten head-to-head, because 225 points across two weeks is not a foundation, it is a coincidence with good timing.' },
    { who: 'terrence-odom', quote: 'I am 5-and-7 in this pick-em pool, dead last, and I have heard every joke. Let. Me. Be. Clear. I locked the defending champion in Week 1 because champions earn that. He lost. I did not chase it in Week 2 and he won. That is not bad analysis, that is bad timing, and I will thank this network to learn the difference before Sunday.' },
    { text: 'Around the rest of the carnage: Shaq is 3-and-1 having won a game 87.30 to 70.56, a scoreline that belongs in a different sport. Ryan finally won, beat the only 0-4 team on the board, and was rewarded by the market anyway — Aegis is up 12.39 percent to $129.22 after Dynasty Daddy graded him QB1, RB2, TE2 and the best FLEX in the league. He is now $3.59 from the top of the exchange. Brent is undefeated head-to-head and priced tenth at $66.11, down 14.26 percent — the cheapest 2-0 team this exchange has ever listed. Somebody is wrong about Brent, and I am no longer sure whether it is the market or the record.' },
    { text: 'Pick-em: Bo and Jay lead at 8-and-4, the two men this desk spent September mocking. Terrence is last at 5-and-7. Six of eight analysts sit at 7-and-5, which means the field is one bad Sunday from total reshuffling. Week 3 picks land with Thursday’s preview. Until then — Charles is 4-0 and unbothered, Wingard is 0-4 and unwell, and this desk will be here to describe both. Good night.' },
  ],
},
  {
  week: 2, kind: 'WEEK 2 PREVIEW', date: 'Sep 19 2026',
  narrator: 'vivienne-ashcroft',
  title: 'FIVE UNDEFEATED, FIVE WINLESS, AND ONE GAME WHERE SOMEBODY HAS TO STOP LOSING',
  paragraphs: [
    { text: 'Good evening. One week of real football has sorted this exchange into three tidy piles, and the middle pile is nearly empty. Five corporations sit at 2-and-0. Five sit at 0-and-2. Exactly two — Kevin and Brent — managed to split, which in a league that scores a head-to-head result and a median result every week is the statistical equivalent of shrugging. Week 2 opens tomorrow. Here is what the desk is watching.' },
    { text: 'Start with the game nobody wants and everybody will watch: Ryan versus Drew. The defending champion is 0-and-2. The cheapest listing on the exchange is 0-and-2. One of them walks out of Sunday with a win and the other begins a conversation that does not end quickly. Sleeper gives Ryan a 63 percent chance and projects him for 142.91 — second-highest on the slate — which tells you the roster is fine and the results are not.' },
    { who: 'big-dog', quote: 'A winless champion against a winless rebuild. FOLKS. This is not a marquee game, this is a hostage situation, and I have cleared my entire Sunday for it.' },
    { text: 'The heavyweight fixture is Charles against Kevin, and the projection is not subtle: 157.35 to 132.05, 74 percent to 26. Crownline has scored more than anyone in the league and drawn seven of eight analyst picks. Redline enters at 1-and-1 with the fifth-most points in the exchange and a co-CEO structure that has now survived exactly one week without incident — which the Detroit communications office has, I am told, described as a milestone.' },
    { who: 'marty-volkman', quote: 'Hearing Redline has been quietly taking calls on a WR piece — not shopping, taking calls, there is a difference and I will be reminding people of it all week. No names. Two CEOs now have to agree on the answer, which is either a safeguard or a delay depending on who you ask. Developing.' },
    { text: 'The most interesting number on the board belongs to the ForgeHammer–EchoPoint game. Jake is 2-and-0 and dropped 155.16 in Week 1. Fronge is 0-and-2. Sleeper favors Fronge, 59 percent to 41, projecting 127.57 against 125.29. A winless team favored over an undefeated one is exactly the sort of thing that makes one analyst at this network insufferable, and he has not disappointed.' },
    { who: 'jay-kelpey', quote: 'My lock lost by 3.36 points and I would make it again tomorrow. Buddy, the depth thesis did not fail — it ran into the one week where every coin landed wrong. Number one FLEX grade in the league, favored by the projection, 0-and-2 record that describes nothing. I am back on Fronge and I am locking it.' },
    { text: 'Elsewhere: Corbishley faces Mitchum in the tightest projection of the week, 134.39 to 132.72, a 51-49 coin flip that Apex should probably win more comfortably than that. Shaq takes on Wingard, where Monarch is favored 62 percent and Sovereign is projected for a league-low 109.42 — the pick empire having now spent a full week failing to appear in the box score. And Adam meets Brent in a 2-and-0 versus 1-and-1 matchup that Sleeper calls 55-45, which is the polite way of saying nobody has any idea.' },
    { text: 'To the pick-em board, where Week 1 was nearly unanimous and somehow still produced a villain. Seven of our eight analysts finished 4-and-2. Terrence finished 3-and-3, alone in last, having locked the champion. Six locks hit. Two did not. And Chad Bellwether, who picked four games against the entire room and locked Brent Bethel in a three-point game, went 4-and-2 with a perfect lock and has been describing consensus as “a wealth transfer” on two programs since.' },
    { who: 'chad-bellwether', quote: 'This week I am picking all six games against the room, because last week proved the room is a liability. Kevin. Mitchum. Wingard. Brent. Drew. Fronge. If I hit even four of those again I would like the network to consider renaming the segment after me. If I hit zero, I will simply never mention it, as is tradition.' },
    { text: 'New power rankings also landed today, and the headline is Jake climbing six spots to second — the largest single-week move on the board — on the back of a 155-point opener. Ryan drops four to sixth. Fronge drops five to ninth. Our rankings guru would like everyone to understand that this was not an overcorrection.' },
    { who: 'matteo-honeydew', quote: 'Moving a team six spots after one week looks like panic. It is not. I had EchoPoint eighth because I could not get past the tight end room, and then the roster scored 155 points without one. When the evidence arrives that fast, you move. I moved. The list is updated.' },
    { text: 'So: Charles is the heaviest favorite, Chad is on an island of his own construction, Fronge is a winless favorite, and two 0-and-2 teams have to produce a winner whether they like it or not. All eight analysts are on the record, their faces sit under their picks on the Overview, and their records follow them until December. From all of us at LIV Network Studios — the board is set, the locks are in, and the market opens tomorrow at one.' },
  ],
  },
  {
  week: 1, kind: 'WEEK 1 RECAP', date: 'Sep 15 2026',
  narrator: 'clara-hopkins',
  title: 'THE CHAMPION LOST, THE SPITE LOCK CASHED, AND CHAD BELLWETHER IS INSUFFERABLE NOW',
  paragraphs: [
    { text: 'One week of real football is in the books, and the league wasted no time reorganizing itself. The defending champion lost. The three-point game everyone circled went the wrong way for seven of our eight analysts. And the man who made four picks against the entire room is currently doing television with the energy of someone who has never been wrong in his life. I will present the facts. You may draw your own conclusions, though I have already drawn mine.' },
    { text: 'Start where the scoreboard demands: Charles (Crownline Global Holdings) hung a week-high 168.90 on Drew (Atlas Rebuild Works), winning by 52 and change in a game that was over by Sunday brunch. Gibbs did precisely what the number one asset in dynasty is supposed to do, and the three analysts who locked Charles \u2014 Big Dog, Dexter, and Matteo \u2014 spent Monday congratulating themselves for correctly predicting the sunrise. Drew, to his credit, took the beating on schedule. The rebuild continues, presently in a hard hat.' },
    { text: 'The story of the week happened one card over: Shaq (Monarch Wideout Bank) 143.86, Ryan (Aegis Quarterback Systems) 125.92. The champion is 0-and-1. The stock that has been frozen at $99.99 for two consecutive issues just posted the third-highest score of the week, and the one analyst who locked it \u2014 out of what we all assumed was pure grievance \u2014 is owed a public accounting.' },
    { who: 'bo-ruckman', quote: 'I locked Monarch at $99.99 while this network was doing champion-repeat segments, and all I asked for in return was airtime. 143 points later I am done asking. I want my segment, I want it this week, and I want the graphics package.' },
    { who: 'terrence-odom', quote: 'My lock lost and I will not be hiding from that. Let. Me. Be. Clear. I locked the champion because champions deserve the benefit of the doubt \u2014 once. Ryan got his once. What I watched Sunday was a QB1 room producing a fourth-place score, and the next time I extend Philadelphia any courtesy, it will be earned at market rate.' },
    { text: 'In London, the all-in cashed its first check: Corbishley (Apex Iron Capital) 139.20, Kevin (Redline Distressed Capital) 130.76. Joe Burrow\u2019s Guzzlers debut won the week, Vance\u2019s lock survived, and eight offseason trades briefly looked like a plan instead of a compulsion. The consolation desk notes that Kevin\u2019s 130.76 actually beat the league median \u2014 meaning the co-CEO era opened 1-and-1 rather than 0-and-2, a distinction the Redline communications office reached three separate outlets about before noon.' },
    { who: 'dina-ravioli', quote: 'To be precise, since precision is apparently my department now: Kevin lost the matchup and beat the median, Brent won the matchup and lost to the median, and both front offices called that outcome \u201Cencouraging.\u201D Sources tell me Tyler personally approved the phrase. This is what governance looks like, I am told.' },
    { text: 'Which brings us to the smallest margin and the largest ego of the week. Brent (Obsidian Specialty Holdings) edged Fronge (ForgeHammer Industries) 126.88 to 123.52 \u2014 a 3.36-point escape that detonated the pick board. Seven analysts took Fronge. One took Brent. That one also locked Brent, and had already taken Drew, Mitchum, and Shaq against the room for good measure. Chad Bellwether finished 4-and-2 with a perfect lock, from an island he built himself, and has referred to consensus as \u201Ca wealth transfer from the many to me\u201D on two programs since.' },
    { text: 'Elsewhere: Adam (Helix Quant Strategies) handled Mitchum (Deepwater Supply Co.) 127.66 to 120.12 \u2014 the model is 1-and-0 and unbearable about it \u2014 and Jake (EchoPoint Global Markets) dropped 155.16 on Wingard (Sovereign Draft Reserve), which is what happens when the vault plays an actual roster. Bo\u2019s lone miss of the week was taking Wingard, a decision he has declined to discuss, citing the Monarch segment.' },
    { who: 'dexter-vail', quote: 'Four-and-two with a lock on the board leader. I would also direct you to my June file where I flagged EchoPoint as a top-three Week 1 score \u2014 155.16, thank you \u2014 and my standing Fronge depth thesis, which loses by 3.36 points exactly once before it starts printing. Timestamps on everything, folks.' },
    { who: 'vance-hollis', quote: 'I LOCKED CORBISHLEY AT $116.71 AND HE WON THE WEEK BURROW THREW FOR LONDON AND I AM AIRING THE PRE-RECORDED VINDICATION SEGMENT TONIGHT IN ITS ENTIRETY. BOTH HOURS.' },
    { text: 'The board after one week: everyone at 4-and-2 except Terrence at 3-and-3, six locks hit, two locks in the ground. Standings show six winners \u2014 Charles on top by points, Jake and Shaq right behind \u2014 and a bottom half that includes the defending champion, which the exchange will be pricing shortly and without sentiment. Week 2 picks land with the next Ledger. Until then: the mahogany has been dusted, Chad has been asked to stop taking victory laps through the newsroom, and the market \u2014 as always \u2014 opens whether you are ready or not.' },
  ],
  },
  {
  week: 1, kind: 'SEASON PREVIEW', date: 'Sep 7 2026',
  narrator: 'vivienne-ashcroft',
  title: 'TWELVE CORPORATIONS ENTER. THE MARKET GRADES ON A CURVE ANYWAY.',
  paragraphs: [
    { text: 'Season two of the LIV Dynasty Exchange opens Thursday, and the board arrives exactly as dysfunctional as we left it: a $133 juggernaut with no jewelry, a champion nobody will price correctly, one stock frozen a single cent from triple digits, and \u2014 as of this morning \u2014 a franchise with two chief executives. It is, in every measurable way, good to be back.' },
    { text: 'Start at the top, because Charles insists. Charles (Crownline Global Holdings) opens at $133.12 with Jahmyr Gibbs newly crowned the number one asset in all of dynasty, a number one FLEX grade, and a sixteen-dollar lead on the field. The resume remains spotless except for the only line that matters: 23-and-5 last year, zero rings. The market has priced a coronation two years running. The trophy lives with Ryan.' },
    { who: 'big-dog', quote: 'FOLKS, I have watched this movie. Charles wins twenty-three games, Charles does laundry in December, and a 14-and-14 team walks off with the belt. I am not saying it happens again. I am saying I have popcorn.' },
    { text: 'Speaking of the belt: Ryan (Aegis Quarterback Systems) opens his title defense at $114.98, having moved eight cents in three weeks. Ryan is the only CEO on this exchange who treats volatility as a personal insult. The new agency grades his QB room first in the league, his stock refuses to acknowledge anything, and the repeat conversation is \u2014 for the first time \u2014 not a punchline.' },
    { text: 'The all-in belongs to Corbishley (Apex Iron Capital). Eight trades in one offseason, a pick vault emptied to dead last, and Joe Burrow, Breece Hall, and Tee Higgins bought with the proceeds. Corbishley opens at $116.71 in the two spot. Every analyst on this network has an opinion; none of them matter after Thursday.' },
    { who: 'vance-hollis', quote: 'CORBISHLEY AT $116.71 IS EITHER THE BUY OF THE DECADE OR THE FIRST CHAPTER OF A CAUTIONARY TALE AND I HAVE PERSONALLY PRE-RECORDED BOTH SEGMENTS.' },
    { text: 'Now the news desk. Kevin (Redline Distressed Capital) announced this morning that he has brought in a co-chief executive: Tyler, whose mandate is \u2014 per the release \u2014 \u201Cshareholder confidence, structural discipline, and never mentioning the previous administration again.\u201D It is the first two-CEO structure in exchange history, and the board immediately rewarded it: Redline confidence jumped seven points, its largest single move since the Wes fallout began. Whether two executives can fix one WR room remains an open research question.' },
    { who: 'chad-bellwether', quote: 'Two CEOs is genius and I will explain why: accountability is a finite resource, and Kevin just diluted his fifty percent. That is not a criticism. That is corporate strategy. Wes had one hundred percent of the accountability and look what happened.' },
    { text: 'Around the rest of the floor: Shaq (Monarch Wideout Bank) opens at $99.99 for the second consecutive issue, which is no longer a price so much as a psychological experiment. Fronge (ForgeHammer Industries) gave back most of the Cigar Accord pop but still owns the deepest startable roster in the league. Adam (Helix Quant Strategies) gets the first live test of the model. Brent (Obsidian Specialty Holdings) quietly climbed to ninth. And at the bottom, a genuine role reversal: Drew (Atlas Rebuild Works) posted the best issue of his rebuild on opening week, while Wingard (Sovereign Draft Reserve) hit an all-time low of $63.56 \u2014 the pick empire now officially costs more to hold than it pays to admire.' },
    { who: 'matteo-honeydew', quote: 'My Week 1 rankings are live and yes, Jake, you fell four spots without losing a game. The tight end room did that, not me. I am simply the messenger with a numbered list.' },
    { text: 'Housekeeping before the bell: the pick-em board is officially live \u2014 eight analysts, every matchup, one lock apiece, and their faces now sit under their picks on the Overview. Charles draws three locks, Chad is alone on an island with Brent, and Bo locked the frozen $99.99 stock out of what we can only assume is spite. Records are tracked all season; the roasting is scheduled accordingly. Momentum multipliers stay dormant until three full weeks are banked \u2014 after that, winning starts compounding. From all of us at LIV Network Studios: the mahogany is polished, the tickers are humming, and the opening bell rings Thursday. Do not embarrass your shareholders.' },
  ],
  },
  // past issues get pushed here, newest first — rendered on the Media Center page
];

// ── PUNDIT PICK-EM — eight pickers, every matchup, one lock each ──
// Picks land with each Weekly Ledger. Grading is automatic client-side vs Sleeper finals.
// Entry shape: { week:1, picks:{ 'big-dog':{ winners:['Charles','Jake',...], lock:'Charles' }, ... } }
const PUNDIT_PICKERS = ['big-dog','chad-bellwether','vance-hollis','terrence-odom','dexter-vail','bo-ruckman','jay-kelpey','matteo-honeydew'];
const PICKS_HISTORY = [
  { week: 2, picks: {
    'big-dog':         { winners: ['Charles','Corbishley','Shaq','Adam','Ryan','Jake'],     lock: 'Charles' },
    'chad-bellwether': { winners: ['Kevin','Mitchum','Wingard','Brent','Drew','Fronge'],    lock: 'Brent' },
    'vance-hollis':    { winners: ['Charles','Corbishley','Shaq','Adam','Ryan','Jake'],     lock: 'Corbishley' },
    'terrence-odom':   { winners: ['Charles','Corbishley','Shaq','Adam','Drew','Jake'],     lock: 'Charles' },
    'dexter-vail':     { winners: ['Charles','Corbishley','Shaq','Adam','Ryan','Jake'],     lock: 'Jake' },
    'bo-ruckman':      { winners: ['Charles','Corbishley','Shaq','Brent','Ryan','Jake'],    lock: 'Shaq' },
    'jay-kelpey':      { winners: ['Charles','Corbishley','Shaq','Adam','Ryan','Fronge'],   lock: 'Fronge' },
    'matteo-honeydew': { winners: ['Charles','Corbishley','Shaq','Adam','Ryan','Jake'],     lock: 'Jake' },
  } },
  { week: 1, picks: {
    'big-dog':         { winners: ['Charles','Corbishley','Adam','Ryan','Fronge','Jake'],    lock: 'Charles' },
    'chad-bellwether': { winners: ['Drew','Corbishley','Mitchum','Shaq','Brent','Jake'],     lock: 'Brent' },
    'vance-hollis':    { winners: ['Charles','Corbishley','Adam','Ryan','Fronge','Jake'],    lock: 'Corbishley' },
    'terrence-odom':   { winners: ['Charles','Kevin','Adam','Ryan','Fronge','Jake'],         lock: 'Ryan' },
    'dexter-vail':     { winners: ['Charles','Corbishley','Mitchum','Shaq','Fronge','Jake'], lock: 'Charles' },
    'bo-ruckman':      { winners: ['Charles','Corbishley','Adam','Shaq','Fronge','Wingard'], lock: 'Shaq' },
    'jay-kelpey':      { winners: ['Charles','Corbishley','Adam','Ryan','Fronge','Jake'],    lock: 'Fronge' },
    'matteo-honeydew': { winners: ['Charles','Corbishley','Adam','Ryan','Fronge','Jake'],    lock: 'Charles' },
  } },
];

// ── MEDIA CENTER (personalities only — shows retired Sep 2026) ──

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
  { rank:1,   move:'same',           ticker:'CROWN', owner:'Charles', take:'8-0 and a 162.22 on the defending champion. The agency now grades his starting lineup 468 — the highest single-lens figure this exchange has ever printed, ninety-six clear of second place. He traded his way down to twelfth in picks to get there. He is not pretending this is a long-term plan and he does not need to.' },
  { rank:2,   move:'same',           ticker:'APEX', owner:'Corbishley', take:'7-1, 139.70 past Brent, and the receiving room still grades first in the league. He is the only owner within sight of Charles and the gap is one game. The pick cupboard is eleventh and he has clearly decided that is somebody else problem.' },
  { rank:3,   move:'up',   delta:1,  ticker:'DEEP', owner:'Mitchum', take:'187.80. Highest score of the season by twenty-five points, 6-2 overall, and 6-0 across the last three weeks — the same trailing record as Charles. Three weeks ago I wrote that Mitchum finally had a plan. The plan is now the second-hottest team in the league and he gets Charles on Sunday.' },
  { rank:4,   move:'down', delta:1,  ticker:'RDC', owner:'Kevin', take:'5-3, and he scored 133.76 — above the median — and still lost, because the man across from him scored 187. His contender grade jumped seventy-two points to 332 and his stock gained fifteen percent. Losing has rarely paid this well.' },
  { rank:5,   move:'up',   delta:2,  ticker:'MWB', owner:'Shaq', take:'5-3 after taking Fronge apart 138.30 to 119.62. I called him a fraud six weeks ago on the strength of 87-point wins. He has now banked two results in a week twice running and the record is no longer an accident. Moving him two spots and keeping my mouth shut.' },
  { rank:6,   move:'down', delta:1,  ticker:'AEGIS', owner:'Ryan', take:'4-4. He put 138.86 on Charles, which would have beaten eight other teams this week, and lost by twenty-four. The champion owns the second-best starting lineup in the league on the contender board and a .500 record. At some point that stops being bad luck.' },
  { rank:7,   move:'down', delta:1,  ticker:'ECHO', owner:'Jake', take:'4-4, and he beat Adam while his contender grade fell fifty-six points underneath him. The TE room is still twelfth, the stock dropped eleven percent, and the roster is quietly being reorganized by the market rather than by him.' },
  { rank:8,   move:'up',   delta:3,  ticker:'FORG', owner:'Fronge', take:'2-6 and up three spots, which I accept sounds insane. The receiving room grades third and the flex grades third and the stock gained thirteen percent in a week he lost twice. The record is awful. The assets are the best they have been all year. Pick whichever one you find convincing.' },
  { rank:9,   move:'down', delta:1,  ticker:'SDR', owner:'Wingard', take:'He beat Drew 103.96 to 93.12 and his contender grade fell to 108. Eleventh at quarterback, twelfth at running back, tenth at receiver, tenth at tight end, eleventh in the flex. That is the lowest lineup grade this exchange has recorded on any team at any point. He is still first in picks, which is the entire argument and the entire problem.' },
  { rank:10,  move:'same',           ticker:'OBS', owner:'Brent', take:'131.06 — the seventh-best score in the league this week — and a loss, followed by a loss to the median. He is 2-6 with one result banked in his last six. Bowers is still the best tight end in the league and it has bought him nothing.' },
  { rank:11,  move:'down', delta:2,  ticker:'HLX', owner:'Adam', take:'109.58 and 2-6. He has lost six consecutive results. Six. The quarterback room grades twelfth on the contender board for the fourth straight update and the Herbert acquisition is no longer a story about upside, it is a story about a man who cannot score a hundred and ten points.' },
  { rank:12,  move:'same',           ticker:'ATLAS', owner:'Drew', take:'0-8. Eight results issued this season, eight losses. The stock is at 40.72, an all-time low, and both lenses are still falling. He is eleventh at quarterback, eleventh at running back, eleventh at receiver and eleventh at tight end. There is nothing to rank here. There is a salvage estimate.' },
];


// Last-updated stamp for the power rankings. Bump this date whenever RANKINGS changes.
// ── QUADRANT BOARD — dynasty rating (x) vs win-now score (y) ──
// Both lenses use the same zero-sum rank scale: score = 100 - 8*(rank-1),
// summed over 5 inputs. Twelve teams therefore always total 3360 per lens,
// so the league mean is exactly 280 on each axis — that is the crosshair.
//   dyn = KTC full team + picks   (QB/RB/WR/TE/PICK)
//   con = Dynasty Daddy starters  (QB/RB/WR/TE/FLEX)
// side = which way the owner label hangs off its dot, hand-set to avoid collisions.
const QUADRANT_MEAN = 280;
const QUADRANT_UPDATED = 'Oct 9 2026';
const QUADRANT = {
  Charles:   { dyn:372, con:468, side:'left' },
  Ryan:      { dyn:324, con:372, side:'left' },
  Corbishley:{ dyn:340, con:340, side:'right' },
  Kevin:     { dyn:260, con:332, side:'right' },
  Mitchum:   { dyn:260, con:292, side:'right' },
  Fronge:    { dyn:236, con:300, side:'left' },
  Adam:      { dyn:260, con:268, side:'left' },
  Jake:      { dyn:308, con:244, side:'left' },
  Shaq:      { dyn:324, con:244, side:'right' },
  Brent:     { dyn:284, con:244, side:'left' },
  Wingard:   { dyn:268, con:108, side:'right' },
  Drew:      { dyn:124, con:148, side:'right' },
};
const QUADRANT_ZONES = [
  { key:'chips',      name:'BLUE CHIPS',        tag:'win now, win later',
    blurb:'Above the mean on both lenses. Winning today and holding the paper to keep winning. No trade-off left to make.',
    color:'#ffc840', dynUp:true,  conUp:true  },
  { key:'borrowed',   name:'BORROWED TIME',     tag:'contending on thin capital',
    blurb:'Lineups good enough to contend, balance sheets too thin to sustain it. Every win is financed.',
    color:'#ec835a', dynUp:false, conUp:true  },
  { key:'distressed', name:'DISTRESSED ASSETS', tag:'no present, no future',
    blurb:'Below the mean both ways. Nothing on the field and nothing in the vault — only a decision nobody has made yet.',
    color:'#ff5c5c', dynUp:false, conUp:false },
  { key:'vault',      name:'THE VAULT',         tag:'rich on paper, quiet on Sunday',
    blurb:'Assets are real; none of them have been converted into wins. The widest spreads on the exchange live here.',
    color:'#4fc3f7', dynUp:true,  conUp:false }
];
function quadrantZone(owner) {
  const q = QUADRANT[owner]; if (!q) return null;
  return QUADRANT_ZONES.find(z =>
    z.dynUp === (q.dyn >= QUADRANT_MEAN) && z.conUp === (q.con >= QUADRANT_MEAN)) || null;
}

const RANKINGS_UPDATED = 'Oct 9 2026';
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
  Charles:   { stockRank:{now:1, prev:1},  power:{now:1, prev:1},   proj:{now:1, prev:1},   playoff:{now:99, prev:96}, conf:{now:97, prev:94}, asset:{now:1, prev:1},   hq:'Manhattan, NY',    risk:{level:'Low',    text:'Championship-or-bust: any finish short of a title triggers a board reckoning.'}, headline:'162.22 over Ryan, 8-0, and a contender grade of 468 — an exchange record.' },
  Corbishley:{ stockRank:{now:2, prev:3},  power:{now:2, prev:2},   proj:{now:2, prev:2},   playoff:{now:96, prev:90}, conf:{now:94, prev:95}, asset:{now:2, prev:2},   hq:'London, England',       risk:{level:'Medium', text:'QB division remains unstabilized; one injury from a full-blown crisis.'}, headline:'139.70 past Brent and 7-1; the only desk still in contact with Crownline.' },
  Shaq:      { stockRank:{now:5, prev:5},  power:{now:5, prev:7},   proj:{now:5, prev:7},   playoff:{now:66, prev:44}, conf:{now:73, prev:66}, asset:{now:4, prev:3},   hq:'Dallas, TX',       risk:{level:'Medium', text:'WR wealth is illiquid; the RB hole is unaddressed for a second consecutive window.'}, headline:'138.30 on Fronge and 5-3; two banked results a week, twice running.' },
  Adam:      { stockRank:{now:10, prev:8},  power:{now:11, prev:9},  proj:{now:10, prev:8},   playoff:{now:8, prev:28}, conf:{now:44, prev:68}, asset:{now:10, prev:8},   hq:'Chicago, IL',      risk:{level:'Medium', text:'Model-driven turnaround still unproven against live competition.'}, headline:'109.58 and 2-6 — a sixth consecutive result lost and QB12 again.' },
  Jake:      { stockRank:{now:6, prev:4},  power:{now:7, prev:6},   proj:{now:7, prev:6},   playoff:{now:42, prev:64}, conf:{now:62, prev:78}, asset:{now:5, prev:5},   hq:'Singapore',        risk:{level:'Low',    text:'TE position is a rounding error; elite RB depreciation is the long-term worry.'}, headline:'122.88 beat Adam while the contender grade fell 56 points underneath him.' },
  Fronge:    { stockRank:{now:7, prev:9},  power:{now:8, prev:11},   proj:{now:9, prev:9},   playoff:{now:11, prev:31}, conf:{now:61, prev:58}, asset:{now:11, prev:11},   hq:'Havana, CU',       risk:{level:'High',   text:'Zero pick liquidity — one injury and there is no capital to respond.'}, headline:'119.62 and 2-6, but WR3 and FLEX3 send the stock up nearly 13 percent.' },
  Brent:     { stockRank:{now:9, prev:10},  power:{now:10, prev:10},   proj:{now:11, prev:10}, playoff:{now:7, prev:17}, conf:{now:38, prev:49}, asset:{now:6, prev:6},   hq:'Zurich, CH',       risk:{level:'High',   text:'Operating model broken at two positions; the Bowers advantage is wasting on the vine.'}, headline:'131.06 was the seventh-best score of the week and still produced an 0-2 week.' },
  Wingard:   { stockRank:{now:11, prev:11}, power:{now:9, prev:8},  proj:{now:8, prev:11}, playoff:{now:14, prev:16}, conf:{now:35, prev:51}, asset:{now:7, prev:7},   hq:'George Town, KY',  risk:{level:'High',   text:'Pick empire depreciates if the rebuild window slips another season.'}, headline:'103.96 beats Drew as the contender grade collapses to 108, the lowest ever recorded.' },
  Mitchum:   { stockRank:{now:8, prev:6},  power:{now:3, prev:4},   proj:{now:3, prev:3},   playoff:{now:82, prev:55}, conf:{now:79, prev:62}, asset:{now:9, prev:10},  hq:'Houston, TX',      risk:{level:'High',   text:'No flagship direction; depth without consolidation is a slow leak.'}, headline:'187.80 — the highest score of the season — and 6-0 over the last three weeks.' },
  Ryan:      { stockRank:{now:3, prev:2},  power:{now:6, prev:5},   proj:{now:6, prev:5},   playoff:{now:47, prev:58}, conf:{now:61, prev:69}, asset:{now:3, prev:4},  hq:'Philadelphia, PA', risk:{level:'Medium', text:'Repeat skepticism is priced in; the WR supply chain is still broken.'}, headline:'138.86 against Charles was not enough; the champion falls to 4-4.' },
  Kevin:     { stockRank:{now:4, prev:7},power:{now:4, prev:3}, proj:{now:4, prev:4},   playoff:{now:71, prev:48}, conf:{now:76, prev:61}, asset:{now:8, prev:9}, hq:'Detroit, MI',      risk:{level:'Severe', text:'Post-scandal trust deficit; one more misstep invites a hostile takeover.'}, headline:'133.76, above the median, and a loss; the contender grade still jumps 72 points.' },
  Drew:      { stockRank:{now:12, prev:12},power:{now:12, prev:12}, proj:{now:12, prev:12}, playoff:{now:1, prev:2},  conf:{now:12, prev:21}, asset:{now:12, prev:12}, hq:'Sao Paulo, BR',    risk:{level:'Severe', text:'Liquidation risk: aging assets depreciating faster than the rebuild absorbs.'}, headline:'93.12 and 0-8; an all-time low of 40.72 with both lenses still falling.' },
};

// Previous positional RANKS (1-12, lower = better) — current ranks are computed live from TEAMS
const PREV_POS_RANKS = {
  Charles:   { qb:1,   rb:2,   wr:6,   te:2,   pick:9, },
  Corbishley:{ qb:4,   rb:5,   wr:1,   te:4,   pick:12,},
  Shaq:      { qb:2,   rb:10,  wr:3,   te:5,   pick:6, },
  Adam:      { qb:7,   rb:9,   wr:2,   te:6,   pick:11,},
  Jake:      { qb:5,   rb:1,   wr:7,   te:12,  pick:2, },
  Fronge:    { qb:11,  rb:3,   wr:9,   te:8,   pick:10,},
  Brent:     { qb:12,  rb:12,  wr:4,   te:1,   pick:4, },
  Wingard:   { qb:10,  rb:7,   wr:8,   te:7,   pick:1, },
  Mitchum:   { qb:8,   rb:8,   wr:5,   te:9,   pick:7, },
  Ryan:      { qb:3,   rb:4,   wr:12,  te:3,   pick:5, },
  Kevin:     { qb:6,   rb:6,   wr:11,  te:10,  pick:3, },
  Drew:      { qb:9,   rb:11,  wr:10,  te:11,  pick:8, },
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
  { date:'Aug 2026', tag:'VALUATIONS',   color:'gold',   title:'Preseason Final Valuations',         text:'The last board before real football: Apex enters the season near an all-time high, Monarch closes one cent from triple digits, and the Crownline lead briefly shrinks to $11.47 — the smallest in exchange history.' },
  { date:'Sep 2026', tag:'GOVERNANCE',   color:'blue',   title:'Redline Appoints a Co-CEO',          text:'Kevin brings in Tyler as co-chief executive of Redline Distressed Capital — a governance move designed to steady shareholders still bracing from the Wes fallout. The board responds: confidence ticks up for the first structural reason since the scandal.', owner:'Kevin' },
  { date:'Sep 2026', tag:'SEASON',       color:'green',  title:'Opening Bell — the 2026 Season Kicks Off', text:'Real football at last. Crownline opens at $133.12, Monarch is frozen at $99.99, Sovereign hits an all-time low, and the pundit pick-em era begins. Momentum multipliers activate after Week 3.' },
];
