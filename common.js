// ═══════════════════════════════════════════════
// COMMON — ticker, market bar, league summary
// Loaded on every page for a consistent header experience
// ═══════════════════════════════════════════════

function buildTicker() {
  const sorted = [...TEAMS].sort((a,b) => Math.abs(b.change) - Math.abs(a.change));
  const html = [...sorted, ...sorted].map(t => {
    const up = t.change >= 0;
    const arrow = up ? '▲' : '▼';
    return `<div class="ticker-item">
      <span class="ticker-sym">${t.ticker}</span>
      <span class="ticker-price">$${t.price26.toFixed(2)}</span>
      <span class="ticker-change ${up?'up':'down'}">${arrow} $${Math.abs(t.change).toFixed(2)}</span>
      <span class="ticker-pct">(${up?'+':''}${t.pct.toFixed(2)}%)</span>
    </div>`;
  }).join('');
  document.getElementById('ticker-track').innerHTML = html;
}

function buildMarketBar() {
  document.getElementById('market-date').textContent = new Date().toLocaleDateString('en-US', {weekday:'short', month:'short', day:'numeric', year:'numeric'});

  const totalMktCap = TEAMS.reduce((s,t) => s + t.cap, 0);
  const risers = TEAMS.filter(t => t.change > 0).length;
  const fallers = TEAMS.filter(t => t.change < 0).length;
  const topGainer = TEAMS.reduce((a,b) => a.pct > b.pct ? a : b);
  const topLoser = TEAMS.reduce((a,b) => a.pct < b.pct ? a : b);
  const hi = TEAMS.reduce((a,b) => a.high52 > b.high52 ? a : b);
  const lo = TEAMS.reduce((a,b) => a.low52 < b.low52 ? a : b);

  document.getElementById('market-bar').innerHTML = [
    {label:'LIV INDEX', val:'$'+(TEAMS.reduce((s,t)=>s+t.price26,0)/12).toFixed(2), change: '', cls:'flat'},
    {label:'TOTAL MKT CAP', val:'$'+totalMktCap.toLocaleString(), change:'', cls:'flat'},
    {label:'RISERS', val:risers+' ▲', change:'', cls:'up'},
    {label:'FALLERS', val:fallers+' ▼', change:'', cls:'down'},
    {label:'TOP GAINER', val:topGainer.ticker, change:'+'+topGainer.pct.toFixed(2)+'%', cls:'up'},
    {label:'TOP LOSER', val:topLoser.ticker, change:topLoser.pct.toFixed(2)+'%', cls:'down'},
    {label:'52W HIGH', val:'$'+hi.high52.toFixed(2), change:hi.ticker, cls:'flat'},
    {label:'52W LOW', val:'$'+lo.low52.toFixed(2), change:lo.ticker, cls:'down'},
  ].map(m => `
    <div class="mbar-item">
      <div class="mbar-label">${m.label}</div>
      <div class="mbar-val ${m.cls}">${m.val}</div>
      ${m.change ? `<div class="mbar-change ${m.cls}">${m.change}</div>` : ''}
    </div>`).join('');
}

// ── movement helpers ──
function deltaBadge(now, prev, opts = {}) {
  if (now == null || prev == null) return '';
  const raw = opts.lowerBetter ? prev - now : now - prev;
  const mag = Math.abs(now - prev);
  if (!raw || !mag) return `<span style="font-family:var(--mono);font-size:10px;color:var(--dim)">—</span>`;
  const up = raw > 0;
  const val = (opts.decimals ? mag.toFixed(opts.decimals) : mag) + (opts.suffix || '');
  return `<span style="font-family:var(--mono);font-size:10px;font-weight:700;color:${up?'var(--green)':'var(--red)'}">${up?'▲':'▼'}${val}</span>`;
}
function teamHref(owner) { return `team.html?owner=${encodeURIComponent(owner)}`; }
function ownerLink(owner, style) { return `<a href="${teamHref(owner)}" style="color:inherit;text-decoration:underline dotted rgba(255,255,255,.25);text-underline-offset:3px;${style||''}">${owner}</a>`; }
function stockRankNow(owner) { return [...TEAMS].sort((a,b) => b.cap - a.cap).findIndex(t => t.owner === owner) + 1; }
function posRanksNow(owner) {
  const out = {};
  ['qb','rb','wr','te','pick'].forEach(p => { out[p] = [...TEAMS].sort((a,b) => b[p] - a[p]).findIndex(t => t.owner === owner) + 1; });
  return out;
}
function posMove(owner, p) {
  const prev = (PREV_POS_RANKS[owner] || {})[p];
  return deltaBadge(posRanksNow(owner)[p], prev, { lowerBetter: true });
}

function buildLeagueSummary() {
  const champion2025 = SEASON_2025.find(s => s.finish === 1);
  const capLeader = [...TEAMS].sort((a,b) => b.cap - a.cap)[0];
  const biggestRiser = [...TEAMS].sort((a,b) => b.pct - a.pct)[0];
  const biggestFaller = [...TEAMS].sort((a,b) => a.pct - b.pct)[0];
  const dynastyLeader = [...TEAMS].sort((a,b) => (b.qb+b.rb+b.wr+b.te+b.pick) - (a.qb+a.rb+a.wr+a.te+a.pick))[0];
  const avgPrice = (TEAMS.reduce((s,t) => s + t.price26, 0) / TEAMS.length).toFixed(2);
  const risers = TEAMS.filter(t => t.change > 0);
  const fallers = TEAMS.filter(t => t.change < 0);
  const champTeam = TEAMS.find(t => t.owner === champion2025?.owner);

  const kpis = [
    { eyebrow: '2025 Champion', value: champion2025?.owner || '—', sub: champTeam?.team || '', color: 'var(--gold)', badge: null },
    { eyebrow: 'Market Cap Leader', value: capLeader.owner, sub: '$' + capLeader.cap.toLocaleString(), color: 'var(--blue)', badge: capLeader.ticker },
    { eyebrow: 'Biggest Riser', value: biggestRiser.owner, sub: biggestRiser.team, color: 'var(--green)', badge: '+' + biggestRiser.pct.toFixed(2) + '%' },
    { eyebrow: 'Biggest Faller', value: biggestFaller.owner, sub: biggestFaller.team, color: 'var(--red)', badge: biggestFaller.pct.toFixed(2) + '%' },
    { eyebrow: 'Dynasty Leader', value: dynastyLeader.owner, sub: 'Roster score ' + (dynastyLeader.qb+dynastyLeader.rb+dynastyLeader.wr+dynastyLeader.te+dynastyLeader.pick), color: 'var(--purple)', badge: dynastyLeader.ticker },
    { eyebrow: 'League Avg Price', value: '$' + avgPrice, sub: risers.length + ' risers · ' + fallers.length + ' fallers', color: 'var(--text)', badge: null },
  ];

  if (!document.getElementById('kpi-strip')) return;
  // Glossary: who is which company/team on the exchange
  document.getElementById('kpi-strip').innerHTML = `
    <div style="grid-column:1/-1; display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:8px;">
      <div style="grid-column:1/-1; font-family:var(--mono); font-size:10px; letter-spacing:2px; color:var(--muted); text-transform:uppercase;">Exchange Glossary — Owner · Ticker · Company · Team</div>
      ${[...TEAMS].sort((a,b) => a.owner.localeCompare(b.owner)).map(t => `
        <div onclick="location.href='team.html?owner=${encodeURIComponent(t.owner)}'" style="display:flex; align-items:center; gap:10px; min-width:0; background:var(--card); border:1px solid ${OWNER_COLORS[t.owner] || 'var(--gold)'}55; border-radius:4px; padding:8px 12px; cursor:pointer; transition:border-color .15s, background .15s;" onmouseover="this.style.borderColor='${OWNER_COLORS[t.owner] || 'var(--gold)'}'; this.style.background='var(--card2, #151c24)';" onmouseout="this.style.borderColor='${OWNER_COLORS[t.owner] || 'var(--gold)'}55'; this.style.background='var(--card)';">
          <span class="sym-tag" style="flex-shrink:0;">${t.ticker}</span>
          <div style="min-width:0;">
            <div style="font-size:12px; font-weight:600; color:${OWNER_COLORS[t.owner] || 'var(--text)'}">${t.owner}</div>
            <div style="font-size:10px; color:var(--muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${t.company} · ${t.team}</div>
          </div>
        </div>`).join('')}
    </div>`;

  const riserList = risers.sort((a,b) => b.pct - a.pct)
    .map(t => `<span class="intel-name-up">${t.owner}</span> (${t.pct >= 0 ? '+' : ''}${t.pct.toFixed(2)}%)`).join(', ');
  const fallerList = fallers.sort((a,b) => a.pct - b.pct)
    .map(t => `<span class="intel-name-down">${t.owner}</span> (${t.pct.toFixed(2)}%)`).join(', ');

  const topRiser = biggestRiser;
  const topFaller = biggestFaller;
  const insight = `<strong class="intel-name-gold">${capLeader.owner}</strong> leads the exchange on market cap entering 2026. ` +
    `<strong class="intel-name-up">${topRiser.owner}</strong> is the biggest mover (+${topRiser.pct.toFixed(2)}%) — ${topRiser.trend.split(';')[0].toLowerCase()}. ` +
    `<strong class="intel-name-down">${topFaller.owner}</strong> & <strong class="intel-name-down">${fallers.sort((a,b) => a.pct - b.pct)[1].owner}</strong> are in steep decline. ` +
    `<strong class="intel-name-gold">${champion2025?.owner}</strong> is the defending champion with market skepticism priced in.`;

}

function initCommon() {
  Chart.defaults.color = '#5a7a96';
  Chart.defaults.font.family = 'Inter';
  buildTicker();
  buildMarketBar();
  buildLeagueSummary();
}
