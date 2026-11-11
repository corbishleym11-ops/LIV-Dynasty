// ═══════════════════════════════════════════════
// LIV DYNASTY EXCHANGE — SHARED DATA
// Loaded by every page. Edit team info, rosters, media, etc. here ONLY.
// ═══════════════════════════════════════════════

const TEAMS = [
  { owner:'Charles',   team:'Chuckys Cutlets',         company:'Crownline Global Holdings',   ticker:'CROWN', history:[{d:'Dec 2025',p:118.28},{d:'May 2026',p:139.84},{d:'Jul 2026',p:135.34},{d:'Jul 17 2026',p:139.28},{d:'Jul 20 2026',p:134.14},{d:'Jul 29 2026',p:131.71},{d:'Aug 20 2026',p:129.47},{d:'Sep 7 2026',p:133.12},{d:'Sep 22 2026',p:132.81},{d:'Sep 29 2026',p:136.79},{d:'Oct 9 2026',p:148.52},{d:'Oct 16 2026',p:146.42},{d:'Oct 27 2026',p:145.21},{d:'Nov 4 2026',p:158.82},{d:'Nov 10 2026',p:158.59}], trend:'14-4 and alone at the top; contender grade 436, the best figure this exchange has measured',        qb:100,rb:100, wr:60, te:92, pick:12, strength:'QB/RB',     weakness:'Pick Liquidity', summary:'Elite operating platform with premium QB/RB/TE strength' },
  { owner:'Corbishley',team:'Guiness Guzzlers',         company:'Apex Iron Capital',           ticker:'APEX',  history:[{d:'Dec 2025',p:87.53},{d:'May 2026',p:107.27},{d:'Jul 2026',p:114.53},{d:'Jul 17 2026',p:111.66},{d:'Jul 20 2026',p:103.98},{d:'Jul 29 2026',p:115.51},{d:'Aug 20 2026',p:118.00},{d:'Sep 7 2026',p:116.71},{d:'Sep 22 2026',p:119.30},{d:'Sep 29 2026',p:123.00},{d:'Oct 9 2026',p:124.15},{d:'Oct 16 2026',p:123.78},{d:'Oct 27 2026',p:123.64},{d:'Nov 4 2026',p:136.58},{d:'Nov 10 2026',p:125.49}], trend:'Lost both results and 90.94 was the worst score of his season; contender grade off 48',     qb:68,rb:44, wr:100, te:68, pick:28, strength:'WR',  weakness:'RB',            summary:'Explosive receiving portfolio with a collapsed backfield' },
  { owner:'Shaq',      team:'The Shough Boys',          company:'Monarch Wideout Bank',        ticker:'MWB',   history:[{d:'Dec 2025',p:87.73},{d:'May 2026',p:100.98},{d:'Jul 2026',p:109.39},{d:'Jul 17 2026',p:109.39},{d:'Jul 20 2026',p:101.17},{d:'Jul 29 2026',p:95.21},{d:'Aug 20 2026',p:99.99},{d:'Sep 7 2026',p:99.99},{d:'Sep 22 2026',p:95.12},{d:'Sep 29 2026',p:90.42},{d:'Oct 9 2026',p:92.87},{d:'Oct 16 2026',p:97.65},{d:'Oct 27 2026',p:88.36},{d:'Nov 4 2026',p:92.17},{d:'Nov 10 2026',p:97.99}], trend:'Dynasty grade second in the league and WR1 on the contender board; 9-9 and up 6 percent',              qb:92,rb:28, wr:76, te:76, pick:68, strength:'WR',     weakness:'RB',            summary:'Luxury WR bank with underfunded RB cash flow' },
  { owner:'Adam',      team:'The Spice Must Throw',     company:'Helix Quant Strategies',      ticker:'HLX',   history:[{d:'Dec 2025',p:68.37},{d:'May 2026',p:92.23},{d:'Jul 2026',p:92.58},{d:'Jul 17 2026',p:86.21},{d:'Jul 20 2026',p:90.89},{d:'Jul 29 2026',p:95.11},{d:'Aug 20 2026',p:90.95},{d:'Sep 7 2026',p:92.02},{d:'Sep 22 2026',p:85.64},{d:'Sep 29 2026',p:79.57},{d:'Oct 9 2026',p:75.13},{d:'Oct 16 2026',p:74.85},{d:'Oct 27 2026',p:76.25},{d:'Nov 4 2026',p:71.63},{d:'Nov 10 2026',p:70.25}],  trend:'Lost both results on 72.82; contender grade up 16, dynasty grade down 16, 4-14',qb:44,rb:36, wr:84, te:60, pick:36, strength:'WR',     weakness:'QB',            summary:'Strong skill-position base undone by the quarterback room' },
  { owner:'Jake',      team:'yakeyaine',                company:'EchoPoint Global Markets',    ticker:'ECHO',  history:[{d:'Dec 2025',p:86.28},{d:'May 2026',p:99.58},{d:'Jul 2026',p:105.22},{d:'Jul 17 2026',p:105.22},{d:'Jul 20 2026',p:99.13},{d:'Jul 29 2026',p:97.90},{d:'Aug 20 2026',p:101.55},{d:'Sep 7 2026',p:103.99},{d:'Sep 22 2026',p:101.59},{d:'Sep 29 2026',p:104.02},{d:'Oct 9 2026',p:92.12},{d:'Oct 16 2026',p:96.00},{d:'Oct 27 2026',p:94.99},{d:'Nov 4 2026',p:94.79},{d:'Nov 10 2026',p:89.93}],  trend:'Lost both results and both grades; 8-10 with a TE room ranked eleventh on either board',                qb:76,rb:84, wr:52, te:20, pick:84, strength:'RB',     weakness:'TE',            summary:'Liquidity-heavy trading desk with no production at tight end' },
  { owner:'Fronge',    team:'JD Power & Ass.',          company:'ForgeHammer Industries',      ticker:'FORG',  history:[{d:'Dec 2025',p:97.43},{d:'May 2026',p:94.03},{d:'Jul 2026',p:84.6},{d:'Jul 17 2026',p:81.54},{d:'Jul 20 2026',p:91.52},{d:'Jul 29 2026',p:90.38},{d:'Aug 20 2026',p:86.85},{d:'Sep 7 2026',p:81.86},{d:'Sep 22 2026',p:85.59},{d:'Sep 29 2026',p:78.62},{d:'Oct 9 2026',p:88.66},{d:'Oct 16 2026',p:86.62},{d:'Oct 27 2026',p:88.37},{d:'Nov 4 2026',p:85.54},{d:'Nov 10 2026',p:91.71}],  trend:'Beat Charles and swept the week; RB2 on the dynasty board and back to .500 at 9-9',             qb:60,rb:92, wr:36, te:36, pick:44, strength:'RB',  weakness:'TE', summary:'High-impact factory contender with thin support and no reserves' },
  { owner:'Brent',     team:'2028 League Champs',       company:'Obsidian Specialty Holdings', ticker:'OBS',   history:[{d:'Dec 2025',p:75.4},{d:'May 2026',p:87.62},{d:'Jul 2026',p:79.05},{d:'Jul 17 2026',p:79.05},{d:'Jul 20 2026',p:71.69},{d:'Jul 29 2026',p:73.89},{d:'Aug 20 2026',p:74.95},{d:'Sep 7 2026',p:77.10},{d:'Sep 22 2026',p:66.11},{d:'Sep 29 2026',p:75.32},{d:'Oct 9 2026',p:75.90},{d:'Oct 16 2026',p:78.45},{d:'Oct 27 2026',p:78.20},{d:'Nov 4 2026',p:81.85},{d:'Nov 10 2026',p:81.62}],  trend:'165.46 was the highest score of the week and both grades fell anyway; 10-8',          qb:36,rb:20, wr:92, te:100, pick:52, strength:'TE',     weakness:'RB',         summary:'Elite TE and future assets attached to broken operations' },
  { owner:'Wingard',   team:'Mile High Bo',             company:'Sovereign Draft Reserve',     ticker:'SDR',   history:[{d:'Dec 2025',p:81.02},{d:'May 2026',p:74.63},{d:'Jul 2026',p:73.37},{d:'Jul 17 2026',p:73.37},{d:'Jul 20 2026',p:71.20},{d:'Jul 29 2026',p:69.01},{d:'Aug 20 2026',p:67.86},{d:'Sep 7 2026',p:63.56},{d:'Sep 22 2026',p:65.78},{d:'Sep 29 2026',p:65.03},{d:'Oct 9 2026',p:56.11},{d:'Oct 16 2026',p:54.08},{d:'Oct 27 2026',p:50.75},{d:'Nov 4 2026',p:53.08},{d:'Nov 10 2026',p:59.14}],  trend:'Biggest riser at plus 11 percent; four 2027 firsts and a lineup grade still last',  qb:20,rb:52, wr:44, te:44, pick:100,strength:'Pick Portfolio',weakness:'WR', summary:'Offshore futures empire with current production discount' },
  { owner:'Mitchum',   team:'Mitchumm11',               company:'Deepwater Supply Co.',        ticker:'DEEP',  history:[{d:'Dec 2025',p:100.66},{d:'May 2026',p:85.2},{d:'Jul 2026',p:68.7},{d:'Jul 17 2026',p:72.36},{d:'Jul 20 2026',p:79.88},{d:'Jul 29 2026',p:78.76},{d:'Aug 20 2026',p:76.60},{d:'Sep 7 2026',p:75.34},{d:'Sep 22 2026',p:79.82},{d:'Sep 29 2026',p:82.86},{d:'Oct 9 2026',p:87.66},{d:'Oct 16 2026',p:94.32},{d:'Oct 27 2026',p:102.21},{d:'Nov 4 2026',p:101.05},{d:'Nov 10 2026',p:104.54}],  trend:'Won both on 153.88 and climbed to 12-6; no hole on either board for the first time',      qb:52,rb:60, wr:68, te:52, pick:60, strength:'WR',     weakness:'FLEX',            summary:'Balanced warehouse operation with no obvious weakness left' },
  { owner:'Ryan',      team:'Diggs-y Party',            company:'Aegis Quarterback Systems',   ticker:'AEGIS', history:[{d:'Dec 2025',p:76.63},{d:'May 2026',p:77.61},{d:'Jul 2026',p:118.42},{d:'Jul 17 2026',p:115.54},{d:'Jul 20 2026',p:109.70},{d:'Jul 29 2026',p:109.72},{d:'Aug 20 2026',p:115.06},{d:'Sep 7 2026',p:114.98},{d:'Sep 22 2026',p:129.22},{d:'Sep 29 2026',p:127.96},{d:'Oct 9 2026',p:124.13},{d:'Oct 16 2026',p:124.07},{d:'Oct 27 2026',p:124.07},{d:'Nov 4 2026',p:116.80},{d:'Nov 10 2026',p:124.14}],  trend:'Beat Corbishley and cleared the median by 1.24; contender grade 388, second in the league',    qb:84,rb:68, wr:12, te:84, pick:76, strength:'QB',     weakness:'WR',            summary:'Defending champion rebuilt around elite command systems' },
  { owner:'Kevin',     team:'ksanda',                   company:'Redline Distressed Capital',  ticker:'RDC',   history:[{d:'Dec 2025',p:126.29},{d:'May 2026',p:69.47},{d:'Jul 2026',p:64.48},{d:'Jul 17 2026',p:68.30},{d:'Jul 20 2026',p:84.67},{d:'Jul 29 2026',p:81.85},{d:'Aug 20 2026',p:79.65},{d:'Sep 7 2026',p:78.52},{d:'Sep 22 2026',p:86.58},{d:'Sep 29 2026',p:82.84},{d:'Oct 9 2026',p:95.35},{d:'Oct 16 2026',p:93.69},{d:'Oct 27 2026',p:96.50},{d:'Nov 4 2026',p:102.71},{d:'Nov 10 2026',p:92.21}],  trend:'13-5 and down 10 percent; the QB room fell 3rd to 8th and the dynasty grade is now last',           qb:28,rb:76, wr:28, te:28, pick:20, strength:'RB',     weakness:'QB/WR',            coCeo:'Tyler', summary:'All-in operator whose present collapsed before the future could' },
  { owner:'Drew',      team:'Jeremiah Smith + Others',   company:'Atlas Rebuild Works',         ticker:'ATLAS', history:[{d:'Dec 2025',p:106.18},{d:'May 2026',p:47.52},{d:'Jul 2026',p:44.38},{d:'Jul 17 2026',p:48.09},{d:'Jul 20 2026',p:50.08},{d:'Jul 29 2026',p:50.03},{d:'Aug 20 2026',p:50.11},{d:'Sep 7 2026',p:53.53},{d:'Sep 22 2026',p:45.57},{d:'Sep 29 2026',p:49.72},{d:'Oct 9 2026',p:40.72},{d:'Oct 16 2026',p:35.28},{d:'Oct 27 2026',p:38.25},{d:'Nov 4 2026',p:30.71},{d:'Nov 10 2026',p:28.15}],  trend:'0-18 on 47.42, the lowest score of the week; both grades fell again',       qb:12,rb:12, wr:20, te:12, pick:92, strength:'Pick Portfolio',     weakness:'All Positions',            summary:'Recognizable assets inside an unfinished rebuild' },
];

// ── derived pricing — price history is the source of truth ──
// Momentum: trailing 3 weeks (6 results), +/-1% per game off .500, capped +/-4%
// (the cap does not bind at a 6-result window — the real range is +/-3%).
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

// ── v4 STANDINGS TERM (added Nov 4 2026) ──
// Record now carries a LEVEL premium on top of the chain-linked grade price:
//
//   price_new = price_prev x (raw_new/raw_prev) x (1 + momentum) x (recfac_new / recfac_prev)
//   recfac    = 1 + REC_ALPHA * (win% - 0.500)
//
// It is a ratio, exactly like the grade term, so it cannot compound: a desk whose
// record holds steady multiplies by 1.0000 and the premium simply persists. League
// win% always sums to 6.00 across twelve teams (mean .500), so the term is zero-sum
// in the same way the 3360 rank scale is.
//
// REC_FACTOR below is the factor already baked into the CURRENT price. Next update,
// divide it out and apply the new one. Never re-apply it from scratch.
const REC_ALPHA = 0.30;        // +/-15% between a 16-0 and an 0-16 desk
const REC_RESULTS = 18;        // results banked (2 per week: H2H + median)
const REC_FACTOR = {
  Charles:    { w:14, winpct:0.7778, factor:1.08333 },
  Corbishley: { w:13, winpct:0.7222, factor:1.06667 },
  Kevin:      { w:13, winpct:0.7222, factor:1.06667 },
  Mitchum:    { w:12, winpct:0.6667, factor:1.05000 },
  Brent:      { w:10, winpct:0.5556, factor:1.01667 },
  Fronge:     { w:9,  winpct:0.5000, factor:1.00000 },
  Ryan:       { w:9,  winpct:0.5000, factor:1.00000 },
  Shaq:       { w:9,  winpct:0.5000, factor:1.00000 },
  Jake:       { w:8,  winpct:0.4444, factor:0.98333 },
  Wingard:    { w:7,  winpct:0.3889, factor:0.96667 },
  Adam:       { w:4,  winpct:0.2222, factor:0.91667 },
  Drew:       { w:0,  winpct:0.0000, factor:0.85000 },
};

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
  { owner:'Charles',   obj:3, text:'Acquire one insurance RB/WR depth asset before playoffs', cat:'Acquisition', priority:'Medium', status:'Complete' },
  { owner:'Corbishley',obj:1, text:'Reach the championship game again',                    cat:'Finish',      priority:'High', status:'Pending' },
  { owner:'Corbishley',obj:2, text:'Acquire or stabilize the QB division',                 cat:'Acquisition', priority:'High', status:'Complete' },
  { owner:'Corbishley',obj:3, text:'Finish ahead of Crownline in regular-season standings',cat:'Rivalry',     priority:'Medium', status:'Pending' },
  { owner:'Shaq',      obj:1, text:'Convert WR wealth into RB production',                 cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Shaq',      obj:2, text:'Make the playoffs comfortably',                        cat:'Finish',      priority:'High', status:'Pending' },
  { owner:'Shaq',      obj:3, text:'Finish ahead of EchoPoint',                            cat:'Rivalry',     priority:'Medium', status:'Pending' },
  { owner:'Adam',      obj:1, text:'Improve into playoff contention after poor 2025 finish',cat:'Finish',     priority:'High', status:'Trending Down' },
  { owner:'Adam',      obj:2, text:'Acquire one undervalued RB asset',                     cat:'Acquisition', priority:'High', status:'Complete' },
  { owner:'Adam',      obj:3, text:'Finish ahead of Monarch or Obsidian to validate the model', cat:'Rivalry', priority:'Medium', status:'Pending' },
  { owner:'Jake',      obj:1, text:'Finish top 4 in regular-season standings',             cat:'Finish',      priority:'High', status:'Pending' },
  { owner:'Jake',      obj:2, text:'Use liquidity to acquire one WR or TE stabilizer',     cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Jake',      obj:3, text:'Beat Monarch in the asset-market rivalry',             cat:'Rivalry',     priority:'Medium', status:'Pending' },
  { owner:'Fronge',    obj:1, text:'Make the playoffs and scare a top seed',               cat:'Finish',      priority:'High', status:'Trending Down' },
  { owner:'Fronge',    obj:2, text:'Acquire stable WR production',                         cat:'Acquisition', priority:'High', status:'Complete' },
  { owner:'Fronge',    obj:3, text:'Avoid a liquidity crisis after injuries or bye weeks', cat:'Risk Management', priority:'Medium', status:'In Progress' },
  { owner:'Brent',     obj:1, text:'Fix either QB or RB before the deadline',              cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Brent',     obj:2, text:'Finish outside the bottom 3',                          cat:'Finish',      priority:'Medium', status:'Pending' },
  { owner:'Brent',     obj:3, text:"Monetize Brock Bowers' TE advantage into weekly competitiveness", cat:'Operations', priority:'High', status:'Pending' },
  { owner:'Wingard',   obj:1, text:'Do not panic-sell future capital early',               cat:'Risk Management', priority:'High', status:'Pending' },
  { owner:'Wingard',   obj:2, text:'Acquire one young cornerstone asset',                  cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Wingard',   obj:3, text:'Control the trade deadline market',                    cat:'Market Influence', priority:'Medium', status:'Pending' },
  { owner:'Mitchum',   obj:1, text:'Consolidate depth into one flagship asset',            cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Mitchum',   obj:2, text:'Compete for a playoff spot',                           cat:'Finish',      priority:'Medium', status:'Trending Up' },
  { owner:'Mitchum',   obj:3, text:'Clarify buy/sell direction by midseason',              cat:'Operations',  priority:'High', status:'Pending' },
  { owner:'Ryan',      obj:1, text:'Return to the playoffs as defending champion',         cat:'Finish',      priority:'High', status:'Pending' },
  { owner:'Ryan',      obj:2, text:'Acquire WR help',                                      cat:'Acquisition', priority:'High', status:'Pending' },
  { owner:'Ryan',      obj:3, text:'Prove 2025 title was not a one-year postseason spike', cat:'Reputation',  priority:'Medium', status:'Pending' },
  { owner:'Kevin',     obj:1, text:'Restore market confidence after the Wes scandal',      cat:'Reputation',  priority:'High', status:'Pending' },
  { owner:'Kevin',     obj:2, text:'Trade one major asset only if it resets the portfolio',cat:'Asset Management', priority:'High', status:'Pending' },
  { owner:'Kevin',     obj:3, text:'Improve WR/TE infrastructure',                         cat:'Acquisition', priority:'Medium', status:'Complete' },
  { owner:'Drew',      obj:1, text:'Commit fully to the redevelopment plan',               cat:'Operations',  priority:'High', status:'Trending Up' },
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
  week:10,
  kind:'WEEK 9 RECAP / WEEK 10 PREVIEW',
  date:'Nov 10 2026',
  narrator:'vivienne-ashcroft',
  title:'CHARLES LOST AND WENT CLEAR ANYWAY. KEVIN GAVE BACK EVERYTHING HE BOUGHT.',
  paragraphs:[
    { text:'Good evening. Week 9 broke the tie at the top and did it in the least dignified way available: Charles lost and went clear anyway. He was beaten by Fronge 137.62 to 133.66, which should have been the opening for everybody chasing him. Instead Corbishley scored 90.94, the lowest figure he has posted all season, and dropped both results to Ryan. Charles is 14-4 and alone in first. The team that took him down four points is 9-9.' },
    { text:'The market has stopped arguing about him. His contender grade is now 436, the highest number this exchange has measured on any desk in two seasons of keeping the books, and his price moved fourteen cents — downward — on a week in which the grade went up sixteen, because the standings premium trimmed him for going 1-1 and the trailing form term took another point off. Four weeks in a row this company has printed essentially flat while being, by every measure the agencies publish, the best one here.' },
    { text:'Kevin had the worst week on the board and it is worth stating plainly what happened, because it is the second act of a story that started a fortnight ago. He sold a 2027 first to buy a contender. This week the quarterback room went from third in the league to eighth, the contender grade gave back fifty-six of the forty-eight points that purchase had bought him, and the dynasty grade fell to 180 — last in the league, twenty-eight points behind eleventh. He is 13-5 and down ten percent. He is still in second place on record and there is now no version of this roster that survives an injury at the top.' },
    { text:'Mitchum is the opposite and nobody has noticed. He won both results on 153.88, he is 12-6, his receiving room is second in the league on the contender board, and for the first time this season the agencies cannot find a position on his roster to complain about. He has not made a trade since the summer. He moves to second in the rankings on the strength of having no argument against him, which is a strange thing to lead with and the only honest one available.' },
    { text:'The rest of Week 9: Brent posted 165.46, the highest score anybody managed, beat Jake by fifty-two, and watched both of his grades fall anyway — he is 10-8 off a 5-1 run with the best tight end in the league and the eleventh-best running backs. Ryan beat Corbishley and cleared the median by 1.24 points, which turned a one-and-one into a sweep and is the difference between 8-10 and 9-9. Fronge swept as well and is back to .500 from 7-9 a fortnight ago. Wingard beat Adam 108.48 to 72.82 and is the biggest riser on the exchange at plus eleven percent, with a lineup grade still last in the league by eighty-eight points. Drew scored 47.42 and is 0-18.' },
    { text:'Week 10 opens Thursday with the widest projected board of the season. Charles is set for 176.52 against Jake, the highest single projection anybody has carried into a week this year. Mitchum is 148.85 against Drew’s 66.73 and Corbishley 143.97 against Wingard’s 90.01. Those three are decided unless something unusual happens, which in fairness is what we said about Charles and Fronge seven days ago.' },
    { text:'The game is Kevin against Ryan, 138.13 to 135.74 — two and a half points, 13-5 against 9-9, and the two desks moving hardest in opposite directions. Kevin has lost ten percent of his value in a week and is still favoured. Ryan has the second-best lineup grade in the league and a record that says he has wasted it. Whoever loses that game spends the rest of November explaining themselves.' },
    { text:'Also worth watching: Shaq at 130.15 against Brent’s 104.56, which the projection likes and the form does not — Brent has banked five of his last six and Shaq has banked three. And Fronge, projected 125.07 against Adam, is trying to put together a third straight winning week from 7-9, with no draft capital left to buy help if it stalls. Three teams sit at 9-9, one at 10-8 and one at 8-10. The top four have separated. Everything from fifth down is still one bad Sunday from being somebody else’s problem.' }
  ]
};
const NEWSLETTER_ARCHIVE = [
  {
  week:9,
  kind:'WEEK 8 RECAP / WEEK 9 PREVIEW',
  date:'Nov 4 2026',
  narrator:'clara-hopkins',
  title:'THE EXCHANGE NOW PAYS FOR WINNING. TWELVE COMPANIES REPRICED IN ONE SESSION.',
  paragraphs:[
    { text:'Good evening. The sit-down is a double this week, because Week 8 finally produced a result that changes the top of this league and Week 9 has already printed a board that may change it again. Start with the game. Corbishley beat Charles 163.92 to 160.36 — three and a half points, the highest-scoring matchup of the season, and the first time all year the team at the top of this exchange has been beaten by the team directly behind it. Both men are now 13-3. Corbishley holds the tiebreaker. That is the whole margin between first and second in a sixteen-result season and it belongs to the man in second.' },
    { text:'What makes it stranger is that nothing else about Charles moved. Quarterbacks first, running backs first, receivers sixth, tight ends second, picks twelfth — identical in every slot to last week. On the old rules he would have printed 145.21 for a second straight update, unchanged to the cent, having lost the biggest game of the year without the market registering it anywhere. That is the hole the exchange closed this week.' },
    { text:'Because the pricing model changed on Wednesday, and it is the reason every number on this board looks different tonight. Until now a company was worth its assets and its recent form — what the two agencies said about the roster, and how it had gone over the trailing three weeks. Nothing in the formula cared whether you were 13-3 or 3-13. From this session a standings premium sits on top: up to fifteen percent either way, set by season record, held as a level rather than a rate so that it cannot compound week after week. The effect was immediate and it was not subtle. Crownline gained nine percent without playing a down. Apex gained ten and a half and is the biggest riser on the exchange. Atlas lost twenty percent in a single session, the largest one-day fall this market has recorded, for the offence of being 0-16. The three companies at 8-8 did not move a cent, which is the clearest statement of what the rule is for.' },
    { text:'The loudest thing in Week 8 was not on a scoreboard. Kevin shipped a 2027 first-round pick to Drew. His pick portfolio fell from third in the league to tenth, his dynasty grade dropped sixty-four points in a single week — the largest one-week fall on either lens this season — and his contender grade climbed forty-eight to second overall, behind only Charles. He is 12-4. He bought a running back room that now grades fourth in the league and he paid for it with April. Kevin has spent two months being the best team nobody discussed. He has now made himself impossible to ignore and expensive to be.' },
    { text:'Drew, for his part, went 0-2 again and is 0-16. He scored 70.44 against Brent, the lowest figure of the week by thirty-one points, his contender grade fell fifty-six, and his pick portfolio jumped from eighth in the league to second. Those are the same transaction viewed from two ends. He is also still first in the projected draft order on 761.74 max points for, two hundred points clear of anybody else, which means he now owns the 1.01 and a second first-round pick in the middle of the board. Nothing on the field has gone right for him in two months and he is having the most productive November in the league.' },
    { text:'Elsewhere: Jake took both results off Shaq 148.88 to 137.48 and climbs to 8-8, with running backs second in the league and a tight end room still ranked eleventh that has now survived eight weeks of being the obvious problem. Brent beat Drew by sixty-seven, posted the identical 137.48 Shaq lost with, and is 8-8 off a 5-1 trailing run with the best tight end in the league and the worst running back room in it. Wingard beat Fronge 139.48 to 109.48 and is up five percent on the week, which still leaves his lineup grade dead last by sixteen points. Adam renamed the franchise, beat the defending champion 116.98 to 107.16, and is 4-12. Kevin beat Mitchum 101.48 to 84.46 in the only game where neither team cleared the median of 127.23.' },
    { text:'Which brings us to Ryan, because somebody has to say it plainly. The champion is 7-9. He has won one of his last six results. He is down six percent, he lost to a 4-12 team while favoured, and his receiving corps grades twelfth in this league by eight full points. In August he had the second-best starting lineup the agency had measured. He is ninth in this week’s rankings and ninth is generous. Mitchum is the other half of that story: both results lost, contender grade off thirty-two, and 84.46 in a week he was expected to win. The fourth-best record in this league is cooling in public.' },
    { text:'Week 9 opens Thursday and the board is unusually lopsided. Charles is projected 147.94 against Fronge’s 118.54 and Kevin 136.53 against Drew’s 76.93, which are the two safest lines on the slate. Adam draws Wingard, 123.66 to 76.14, the widest margin of the week and a game between the two teams furthest from mattering. Jake is favoured over Brent 136.88 to 114.66, which the trailing form disputes — Brent has banked five of six and Jake has banked four.' },
    { text:'The two games that decide anything are Corbishley against Ryan, projected 133.50 to 129.19, and Mitchum against Shaq, 135.48 to 127.64. Four points and eight points. Corbishley is 13-3 and tied for first and is a four-point favourite over a 7-9 team — the exact shape of game Ryan has spent October losing, which is the only reason to think he wins it. Mitchum and Shaq are separated by two games and the same slot. Three teams sit at 8-8, two at 7-9, and the gap between fourth place and ninth is two results. The top of this league settled on Sunday. The middle of it has nine weeks of work left in four.' }
  ]
  },
  {
  week:6,
  kind:'WEEK 6 PREVIEW',
  date:'Oct 16 2026',
  narrator:'vivienne-ashcroft',
  title:'CORBISHLEY IS 9-1 AND PROJECTED TO LOSE. DREW IS PROJECTED FOR 55.',
  paragraphs:[
    { text:'Good evening. Week 5 was the week the favourites stopped losing. All six of them held — every single game went the way the board said it would, which has not happened once this season and which left one of our analysts at nought for six. Charles put 201.40 on Mitchum, the second two-hundred-point game the exchange has recorded and both of them his. He is 10-0. He has scored 912.16 points. The next-best total in this league is Corbishley at 737.80, and that gap of a hundred and seventy-four points is now larger than four teams entire deficit to the median.' },
    { text:'So begin where the week is going rather than where it has been, because the most interesting line on the board belongs to the man in second. Corbishley is 9-1 and Sleeper projects him to lose. Fronge is the favourite, 129.32 to 114.52, and the projection is not a glitch: Fronge has the third-best receiving room in this league and the third-best flex, he has won four of his last six results, and Corbishley has Thursday already behind him with thirty points banked and a thin weekend ahead. A 9-1 team is an underdog to a 4-6 team. That sentence should not be possible and it is on the board.' },
    { text:'Ryan plays Mitchum and the projection separates them by twenty-eight hundredths of a point — 132.66 to 132.38. Both are 6-4. Both are chasing the same playoff slot. Ryan has the second-best starting lineup in the league by the agency grade and a record that keeps refusing to reflect it; Mitchum was the hottest team in the league a fortnight ago and has now lost both results in a week to Charles. This is the closest line the exchange has printed all year and the loser of it falls behind Shaq on the tiebreaker.' },
    { text:'Kevin at 7-3 draws Wingard at 3-7, projected 141.89 to 87.10. Kevin has quietly become the third-best team in this league by record while spending September being described as a recovery narrative; he has banked seven of his last ten results. Wingard is projected for eighty-seven points, which is the second-lowest figure on this week board, and his lineup grade is still the worst the exchange has ever recorded. He also still owns the best pick portfolio in the league. Nobody has yet explained what he intends to do with it.' },
    { text:'Charles plays Adam, projected 151.53 to 104.37, and there is not a great deal to say. Charles is 10-0. Adam is 2-8, has lost eight of ten results, and grades twelfth at quarterback in a superflex league. The only question this game asks is whether anybody can take a result off Charles before the postseason, and Adam is not the man to answer it.' },
    { text:'Jake at 4-6 faces Shaq at 6-4, projected 123.82 to 113.55 — the second-closest game on the board and a genuine one. Jake has lost six of his last eight results while his roster was quietly repriced downward around him. Shaq is 6-4 on the strength of winning the weeks nobody expected him to, and he has the smallest points-for total of any team above .500. One of these two is better than his record and the other is worse, and I do not think the projection knows which is which.' },
    { text:'And then Drew, 0-10, projected for 55.57 against Brent. Fifty-five. That is the lowest projection this exchange has ever printed against any team in any week, roughly a third of what Charles is expected to score on the same afternoon. Drew has lost all ten results available to him, his stock sits at an all-time low, and he is eleventh in this league at every single position. Brent is 3-7 and projected at 144.34 and should not have to think about this game at all, which historically is exactly when he loses it.' },
    { text:'Six teams are at or above .500 and the other six are 3-7 or worse; the middle of this league has not so much narrowed as disappeared. Charles and Corbishley are a combined 19-1. Drew is 0-10. Everything else is happening in the four games between. I am Vivienne Ashcroft. Enjoy Sunday.' }
  ]
  },
  {
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
},
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
  { week:6, picks:{
    'big-dog':         { winners:['Jake','Brent','Corbishley','Kevin','Charles','Ryan'], lock:'Charles' },
    'chad-bellwether': { winners:['Shaq','Drew','Fronge','Wingard','Adam','Mitchum'], lock:'Fronge' },
    'vance-hollis':    { winners:['Jake','Brent','Corbishley','Kevin','Charles','Mitchum'], lock:'Corbishley' },
    'terrence-odom':   { winners:['Jake','Brent','Fronge','Kevin','Charles','Ryan'], lock:'Kevin' },
    'dexter-vail':     { winners:['Jake','Brent','Fronge','Kevin','Charles','Ryan'], lock:'Jake' },
    'bo-ruckman':      { winners:['Shaq','Brent','Corbishley','Kevin','Charles','Mitchum'], lock:'Shaq' },
    'jay-kelpey':      { winners:['Jake','Brent','Fronge','Kevin','Charles','Mitchum'], lock:'Fronge' },
    'matteo-honeydew': { winners:['Jake','Brent','Corbishley','Kevin','Charles','Ryan'], lock:'Charles' }
  } },
  { week:5, picks:{
    'big-dog':         { winners:['Corbishley','Shaq','Ryan','Kevin','Fronge','Charles'], lock:'Charles' },
    'chad-bellwether': { winners:['Jake','Adam','Wingard','Brent','Drew','Mitchum'], lock:'Mitchum' },
    'vance-hollis':    { winners:['Corbishley','Shaq','Ryan','Kevin','Fronge','Charles'], lock:'Corbishley' },
    'terrence-odom':   { winners:['Corbishley','Adam','Ryan','Kevin','Fronge','Charles'], lock:'Kevin' },
    'dexter-vail':     { winners:['Jake','Shaq','Ryan','Kevin','Fronge','Charles'], lock:'Ryan' },
    'bo-ruckman':      { winners:['Corbishley','Shaq','Ryan','Brent','Fronge','Charles'], lock:'Shaq' },
    'jay-kelpey':      { winners:['Corbishley','Adam','Ryan','Kevin','Fronge','Mitchum'], lock:'Fronge' },
    'matteo-honeydew': { winners:['Corbishley','Shaq','Ryan','Kevin','Fronge','Charles'], lock:'Corbishley' }
  } },
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
  { rank:1, move:'same',          ticker:'CROWN', owner:'Charles', take:'14-4, alone at the top again, and the contender grade is now 436 — the highest figure this exchange has ever measured on any desk. He lost to Fronge on Sunday by four points and it cost him nothing except the game, which is the fourth week running I have written some version of that sentence. The receiving room is still sixth and the pick cupboard is still twelfth and neither has mattered yet. At some point one of them will. Not this month.' },
  { rank:2, move:'up',   delta:2, ticker:'DEEP', owner:'Mitchum', take:'Up two, and I have been waiting since September for a reason to move him. He won both results on 153.88, he is 12-6, the receiving room is second on the contender board, and for the first time all season there is no hole on either sheet to point at. He has not made a trade since the summer. He has not needed to. The quietest 12-6 I have covered and the only roster in this league I cannot find an argument against.' },
  { rank:3, move:'down', delta:1, ticker:'APEX', owner:'Corbishley', take:'Down one, and it was the worst week of his year by a distance. 90.94 against Ryan, both results dropped, the contender grade off forty-eight points, and a running back room that now grades twelfth in the league on the starting-lineup board. He is still 13-5 and still holds the tiebreaker over nobody that matters now that Charles has pulled clear. The receiving corps is first in the league. It cannot carry a backfield this empty through January.' },
  { rank:4, move:'down', delta:1, ticker:'RDC', owner:'Kevin', take:'Down one and down ten percent, the worst week any desk had. Two weeks ago he sold 2027 to buy November. November has now taken the quarterback room off him — third to eighth on the contender board — and the contender grade that purchase bought him gave back fifty-six of the forty-eight it gained. The dynasty grade is 180, dead last in the league by twenty-eight points. He is 13-5. He is also the most fragile 13-5 I have ever had to rank.' },
  { rank:5, move:'up',   delta:4, ticker:'AEGIS', owner:'Ryan', take:'Up four, and the champion is back in the conversation. He beat Corbishley, cleared the median by a point and a quarter, took both results, and is 9-9 with the second-best contender grade in the league at 388. Quarterback first, flex first, tight end fifth. The receiving corps is still twelfth and still the reason he spent October at 7-9. Everything else about this roster is championship furniture and it has finally been pointed in the right direction.' },
  { rank:6, move:'down', delta:1, ticker:'OBS', owner:'Brent', take:'Down one, which will annoy him, because 165.46 was the highest score anybody posted in Week 9 and he is 10-8 off a 5-1 run. Both of his grades fell anyway. Bowers is the best tight end in the league on both boards and the running backs are eleventh on one and eleventh on the other. He has had nine weeks to fix one position. He keeps winning games instead, which is a reasonable answer and not a durable one.' },
  { rank:7, move:'same',          ticker:'MWB', owner:'Shaq', take:'Second-best dynasty grade in the league, first in the league at receiver on the contender board, up six percent, and 9-9. Same company as August: a luxury front end bolted to a backfield that grades tenth. He lost to Mitchum by fifteen in a game where he scored 138.46, which is the problem with being this shape — there is no bad week and there is no week that wins anything either.' },
  { rank:8, move:'same',          ticker:'FORG', owner:'Fronge', take:'Beat Charles. Swept the week. Back to .500 at 9-9 from 7-9 a fortnight ago, running backs second in the league on the dynasty board, and up seven percent. He also still owns zero 2027 picks, so every further gain has to come from the eleven men already on his roster. Eighth is as high as I can put a desk with no reserves and no way to buy any.' },
  { rank:9, move:'down', delta:3, ticker:'ECHO', owner:'Jake', take:'Down three. Lost both results, lost ground on both boards, and sits 8-10 with a tight end room ranked eleventh on the dynasty board and eleventh on the contender board. Two independent agencies, same verdict, eleven weeks running. The running backs are third in the league and the picks are third in the league and none of it has produced a winning record, because he has spent the season refusing to spend any of it.' },
  { rank:10,move:'same',          ticker:'SDR', owner:'Wingard', take:'Biggest riser on the exchange at plus eleven percent, both grades up, and 7-11. The lineup grade is 156 and still last in the league by eighty-eight points, which is the largest gap between eleventh and twelfth on either board. He holds four of the twelve 2027 first-round picks. He has been right about the shape of this for a year and he is still going to finish last in points.' },
  { rank:11,move:'same',          ticker:'HLX', owner:'Adam', take:'Lost both on 72.82, the second-worst score of the week. The contender grade went up sixteen and the dynasty grade went down sixteen, which is a company selling the future to improve a present that is 4-14. Receivers third on one board and fourth on the other. The quarterback room is eleventh and it is the whole season in one number.' },
  { rank:12,move:'same',          ticker:'ATLAS', owner:'Drew', take:'0-18. Forty-seven points. Both grades down again, the dynasty grade now 148 and the contender grade 100, and he is 266 points of max scoring clear of the second pick in the draft. The 1.01 was decided weeks ago. What is being decided now is whether anybody else finishes close enough to make the 1.04 he took off Kevin worth having.' },
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
const QUADRANT_UPDATED = 'Nov 10 2026';
const QUADRANT = {
  Charles:   { dyn:364, con:436, side:'left' },
  Ryan:      { dyn:324, con:388, side:'right' },
  Adam:      { dyn:260, con:324, side:'left' },
  Mitchum:   { dyn:292, con:316, side:'right' },
  Kevin:     { dyn:180, con:308, side:'right' },
  Corbishley:{ dyn:308, con:292, side:'right' },
  Shaq:      { dyn:340, con:276, side:'right' },
  Fronge:    { dyn:268, con:276, side:'left' },
  Jake:      { dyn:316, con:244, side:'right' },
  Brent:     { dyn:300, con:244, side:'left' },
  Wingard:   { dyn:260, con:156, side:'right' },
  Drew:      { dyn:148, con:100, side:'right' },
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

const RANKINGS_UPDATED = 'Nov 10 2026';
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
  Charles:   { stockRank:{now:1, prev:1},  power:{now:1, prev:1},   proj:{now:1, prev:1},   playoff:{now:99, prev:99}, conf:{now:98, prev:98}, asset:{now:1, prev:1},   hq:'Manhattan, NY',    risk:{level:'Low',    text:'Championship-or-bust: any finish short of a title triggers a board reckoning.'}, headline:'14-4 and alone at the top; contender grade 436 is the highest this exchange has measured.' },
  Corbishley:{ stockRank:{now:2, prev:2},  power:{now:3, prev:2},   proj:{now:3, prev:2},   playoff:{now:97, prev:99}, conf:{now:88, prev:95}, asset:{now:5, prev:5},   hq:'London, England',       risk:{level:'Medium', text:'QB division remains unstabilized; one injury from a full-blown crisis.'}, headline:'Lost both results on a season-low 90.94; contender grade off 48 and the RB room is last.' },
  Shaq:      { stockRank:{now:5, prev:7},  power:{now:7, prev:7},   proj:{now:7, prev:7},   playoff:{now:44, prev:30}, conf:{now:60, prev:58}, asset:{now:2, prev:2},   hq:'Dallas, TX',       risk:{level:'Medium', text:'WR wealth is illiquid; the RB hole is unaddressed for a second consecutive window.'}, headline:'Dynasty grade second in the league, WR1 on the contender board, up 6 percent at 9-9.' },
  Adam:      { stockRank:{now:10, prev:10},  power:{now:11, prev:11},  proj:{now:11, prev:11},   playoff:{now:1, prev:2}, conf:{now:30, prev:35}, asset:{now:10, prev:8},   hq:'Chicago, IL',      risk:{level:'Medium', text:'Model-driven turnaround still unproven against live competition.'}, headline:'Lost both on 72.82; contender grade up 16, dynasty grade down 16, and 4-14.' },
  Jake:      { stockRank:{now:8, prev:6},  power:{now:9, prev:6},   proj:{now:9, prev:6},   playoff:{now:22, prev:34}, conf:{now:40, prev:55}, asset:{now:4, prev:4},   hq:'Singapore',        risk:{level:'Low',    text:'TE position is a rounding error; elite RB depreciation is the long-term worry.'}, headline:'Lost both results and both grades; 8-10 with the TE room eleventh on either board.' },
  Fronge:    { stockRank:{now:7, prev:8},  power:{now:8, prev:8},   proj:{now:8, prev:8},   playoff:{now:45, prev:12}, conf:{now:57, prev:54}, asset:{now:8, prev:9},   hq:'Havana, CU',       risk:{level:'High',   text:'Zero pick liquidity — one injury and there is no capital to respond.'}, headline:'Beat Charles and swept the week; RB2 on the dynasty board and back to .500.' },
  Brent:     { stockRank:{now:9, prev:9},  power:{now:6, prev:5},   proj:{now:6, prev:5}, playoff:{now:62, prev:29}, conf:{now:56, prev:52}, asset:{now:6, prev:6},   hq:'Zurich, CH',       risk:{level:'High',   text:'Operating model broken at two positions; the Bowers advantage is wasting on the vine.'}, headline:'165.46 was the highest score of the week and both grades fell anyway; 10-8.' },
  Wingard:   { stockRank:{now:11, prev:11}, power:{now:10, prev:10},  proj:{now:10, prev:10}, playoff:{now:9, prev:6}, conf:{now:33, prev:29}, asset:{now:9, prev:10},   hq:'George Town, KY',  risk:{level:'High',   text:'Pick empire depreciates if the rebuild window slips another season.'}, headline:'Biggest riser at plus 11 percent; four 2027 firsts, lineup grade still last by 88.' },
  Mitchum:   { stockRank:{now:4, prev:5},  power:{now:2, prev:4},   proj:{now:2, prev:4},   playoff:{now:93, prev:85}, conf:{now:84, prev:79}, asset:{now:7, prev:7},  hq:'Houston, TX',      risk:{level:'High',   text:'No flagship direction; depth without consolidation is a slow leak.'}, headline:'Won both on 153.88, climbed to 12-6, and has no hole left on either board.' },
  Ryan:      { stockRank:{now:3, prev:3},  power:{now:5, prev:9},   proj:{now:5, prev:9},   playoff:{now:48, prev:14}, conf:{now:70, prev:57}, asset:{now:3, prev:3},  hq:'Philadelphia, PA', risk:{level:'Medium', text:'Repeat skepticism is priced in; the WR supply chain is still broken.'}, headline:'Beat Corbishley and cleared the median by 1.24; contender grade 388, second in the league.' },
  Kevin:     { stockRank:{now:6, prev:4},power:{now:4, prev:3}, proj:{now:4, prev:3},   playoff:{now:96, prev:97}, conf:{now:72, prev:88}, asset:{now:11, prev:11}, hq:'Detroit, MI',      risk:{level:'Severe', text:'Post-scandal trust deficit; one more misstep invites a hostile takeover.'}, headline:'Down 10 percent, the worst week on the board; the QB room fell 3rd to 8th.' },
  Drew:      { stockRank:{now:12, prev:12},power:{now:12, prev:12}, proj:{now:12, prev:12}, playoff:{now:1, prev:1},  conf:{now:10, prev:12}, asset:{now:12, prev:12}, hq:'Sao Paulo, BR',    risk:{level:'Severe', text:'Liquidation risk: aging assets depreciating faster than the rebuild absorbs.'}, headline:'0-18 on 47.42, the lowest score of the week; both grades fell again.' },
};

// Previous positional RANKS (1-12, lower = better) — current ranks are computed live from TEAMS
const PREV_POS_RANKS = {
  Charles:   { qb:1,   rb:1,   wr:6,   te:2,   pick:12,},
  Corbishley:{ qb:4,   rb:7,   wr:1,   te:6,   pick:11,},
  Shaq:      { qb:2,   rb:10,  wr:4,   te:4,   pick:6, },
  Adam:      { qb:8,   rb:9,   wr:2,   te:5,   pick:9, },
  Jake:      { qb:5,   rb:2,   wr:7,   te:11,  pick:3, },
  Fronge:    { qb:6,   rb:3,   wr:9,   te:9,   pick:8, },
  Brent:     { qb:9,   rb:12,  wr:3,   te:1,   pick:4, },
  Wingard:   { qb:11,  rb:8,   wr:8,   te:8,   pick:1, },
  Mitchum:   { qb:7,   rb:6,   wr:5,   te:7,   pick:7, },
  Ryan:      { qb:3,   rb:5,   wr:12,  te:3,   pick:5, },
  Kevin:     { qb:10,  rb:4,   wr:10,  te:10,  pick:10,},
  Drew:      { qb:12,  rb:11,  wr:11,  te:12,  pick:2, },
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
  { date:'Nov 2026', tag:'VALUATIONS',   color:'gold',   title:'The Standings Rule', text:'The exchange adds a standings term to the pricing model: every desk now carries a premium or discount of up to fifteen percent set by its season record. Twelve companies reprice in a single session. Crownline gains nine percent without playing a down; Atlas loses twenty.' },];
