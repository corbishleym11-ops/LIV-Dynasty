// LIV Network hype intro — hosted by Vivienne Ashcroft
// Uses globals from animations-v2.jsx (SceneStage, useScene) and tweaks-panel.jsx.

const C = {
  bg: '#080b0f', bg2: '#0d1117', card: '#0f1318', card2: '#151c24',
  border: '#1e2a36', border2: '#243040',
  gold: '#ffc840', goldDim: '#a07820', green: '#00e676', red: '#ff3d3d',
  blue: '#4fc3f7', purple: '#ce93d8', text: '#e2eaf4', muted: '#5a7a96', dim: '#2a3a4a',
};
const MONO = "'IBM Plex Mono', monospace";
const SANS = "'Inter', sans-serif";

// easing + segment helpers (all motion driven by scene progress → time-stretch safe)
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp01 = (t) => Math.max(0, Math.min(1, t));
// progress p mapped to 0..1 across [a,b]
const seg = (p, a, b, ez) => (ez || easeOut)(clamp01((p - a) / (b - a)));

const P = (k) => 'photos/' + k + '.jpg';
const CAST = {
  viv:      { name: 'Vivienne Ashcroft', role: 'Global Host',        photo: P('vivienne-ashcroft') },
  marty:    { name: 'Marty Volkman',     role: 'The Insider',        photo: P('marty-volkman') },
  dina:     { name: 'Dina Ravioli',      role: 'The Trusted Source', photo: P('dina-ravioli') },
  clara:    { name: 'Clara Hopkins',     role: 'The Anchor',         photo: P('clara-hopkins') },
  bigdog:   { name: 'Big Dog',           role: 'Hype Narrator',      photo: P('big-dog') },
  chad:     { name: 'Chad Bellwether',   role: 'The Bit Guy',        photo: P('chad-bellwether') },
  jay:      { name: 'Jay Kelpey',        role: 'The Trench Guy',     photo: P('jay-kelpey') },
  vance:    { name: 'Vance Hollis',      role: 'Market Screamer',    photo: P('vance-hollis') },
  matteo:   { name: 'Matteo Honeydew',   role: 'Rankings Guru',      photo: P('matteo-honeydew') },
  terrence: { name: 'Terrence E. Odom',  role: 'Debate Titan',       photo: P('terrence-odom') },
  dexter:   { name: 'Dexter Vail',       role: 'The Contrarian',     photo: P('dexter-vail') },
  bo:       { name: 'Bo Ruckman',        role: 'The Wildcard',       photo: P('bo-ruckman') },
};

const SHOW_META = {
  'The Wire':            { color: C.blue,   tag: 'BREAKING · TRADES · SOURCES',   cast: ['marty', 'dina'] },
  'The Weekly Sit-Down': { color: C.green,  tag: 'THE PANEL · EVERY WEEK',        cast: ['clara', 'bigdog', 'chad', 'jay'] },
  'Market Movers':       { color: C.purple, tag: 'BUY · SELL · PANIC',            cast: ['vance', 'matteo'] },
  'The Marquee':         { color: C.gold,   tag: 'THURSDAYS · THE BIG STAGE',     cast: ['viv', 'terrence', 'dexter', 'bo'] },
};

const TweaksCtx = React.createContext({ captions: true, voice: false });

// ── narration track (recorded VO, mixed into video export) ─────────
const NARRATION_SRC = 'narration.mp3';
const NARRATION_DUR = 52.66;

function NarrationTrack({ enabled }) {
  const t = useTime(); // global stage clock — spans all scenes
  const ref = React.useRef(null);
  const lastRef = React.useRef({ t: -1, wall: 0 });
  // The project file server streams the mp3 without range support, so the
  // element reports seekable [0,0] and currentTime snaps back to 0. Load it
  // as a Blob object URL instead — fully seekable.
  const [blobSrc, setBlobSrc] = React.useState(null);
  React.useEffect(() => {
    let alive = true;
    let url = null;
    fetch(NARRATION_SRC)
      .then((r) => r.blob())
      .then((b) => {
        url = URL.createObjectURL(b);
        if (alive) setBlobSrc(url); else URL.revokeObjectURL(url);
      })
      .catch(() => {});
    return () => { alive = false; if (url) URL.revokeObjectURL(url); };
  }, []);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const now = Date.now();
    const last = lastRef.current;
    const advancing = t > last.t && (t - last.t) < 0.5 && (now - last.wall) < 400;
    lastRef.current = { t: t, wall: now };
    const ended = t >= NARRATION_DUR;
    const target = Math.min(Math.max(t, 0), NARRATION_DUR - 0.05);
    if (advancing && !ended) {
      // playing: let the audio run, only correct real drift
      if (Math.abs(v.currentTime - target) > 0.3) { try { v.currentTime = target; } catch (e) {} }
      if (v.paused) v.play().catch(() => {});
    } else {
      if (!v.paused) v.pause();
      if (Math.abs(v.currentTime - target) > 0.05) { try { v.currentTime = target; } catch (e) {} }
    }
    // no fresh tick within 300ms → the stage is paused; stop the audio
    const timer = setTimeout(() => { if (v && !v.paused) v.pause(); }, 300);
    return () => clearTimeout(timer);
  }, [t]);
  React.useEffect(() => { if (ref.current) ref.current.muted = !enabled; }, [enabled]);
  if (!blobSrc) return null;
  return (
    <video
      ref={ref}
      src={blobSrc}
      playsInline
      preload="auto"
      muted={!enabled}
      data-om-exportable-video-play-start={0}
      data-om-exportable-video-play-end={NARRATION_DUR}
      style={{ position: 'absolute', left: 0, top: 0, width: 2, height: 2, opacity: 0.01, pointerEvents: 'none' }}
    />
  );
}

// ── shared pieces ─────────────────────────────────────────────

const TICKER_TEXT = 'LIV DYNASTY EXCHANGE ▲ CROWN +4.2 ▼ APEX −1.8 ▲ MWB +2.6 ▼ OBS −3.1 ▲ HLX +1.4 ● TRADE WINDOW OPEN ● SOURCES: TALKS "NOT DEAD" ● ';
function Ticker({ progress, top, color, reverse }) {
  const dist = (reverse ? -1 : 1) * progress * 1600;
  const x = -(((dist % 1920) + 1920) % 1920);
  const style = {
    position: 'absolute', top, left: 0, right: 0, height: 42, overflow: 'hidden',
    borderTop: '1px solid ' + C.border, borderBottom: '1px solid ' + C.border,
    background: 'rgba(13,17,23,0.85)',
  };
  return (
    <div style={style}>
      <div style={{
        position: 'absolute', top: 0, left: x, whiteSpace: 'nowrap', lineHeight: '42px',
        fontFamily: MONO, fontSize: 15, letterSpacing: 2, color: color || C.muted,
      }}>
        {TICKER_TEXT + TICKER_TEXT + TICKER_TEXT}
      </div>
    </div>
  );
}

function GridBg() {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 50% 38%, #0e141c 0%, ' + C.bg + ' 62%)',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.35,
        backgroundImage: 'linear-gradient(' + C.border + ' 1px, transparent 1px), linear-gradient(90deg, ' + C.border + ' 1px, transparent 1px)',
        backgroundSize: '96px 96px',
        maskImage: 'radial-gradient(ellipse at 50% 40%, black 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 0%, transparent 75%)',
      }} />
    </div>
  );
}

function Logo({ build, scale }) {
  const o = seg(build, 0, 0.4);
  const sweep = seg(build, 0.35, 0.75);
  const sub = seg(build, 0.6, 1);
  return (
    <div style={{ textAlign: 'center', transform: 'scale(' + (scale || 1) + ')' }}>
      <div style={{
        fontFamily: MONO, fontWeight: 700, fontSize: 210, letterSpacing: 30,
        color: C.gold, opacity: o, lineHeight: 1,
        textShadow: '0 0 ' + Math.round(60 * o) + 'px rgba(255,200,64,0.35)',
        transform: 'translateY(' + (1 - o) * 30 + 'px)',
      }}>LIV</div>
      <div style={{ height: 3, width: sweep * 560, margin: '26px auto 22px', background: 'linear-gradient(90deg, transparent, ' + C.gold + ', transparent)' }} />
      <div style={{
        fontFamily: MONO, fontSize: 34, letterSpacing: 22, color: C.text,
        opacity: sub, transform: 'translateY(' + (1 - sub) * 14 + 'px)',
      }}>NETWORK</div>
    </div>
  );
}

function Caption({ text, at }) {
  const { captions } = React.useContext(TweaksCtx);
  const { progress, localTime } = useScene();
  if (!captions || !text) return null;
  const o = seg(progress, at == null ? 0.24 : at, (at == null ? 0.24 : at) + 0.1);
  const speaking = o > 0.5 && progress < 0.97;
  const vBob = speaking ? Math.sin(localTime * 8.2) : 0;
  return (
    <div style={{
      position: 'absolute', bottom: 64, left: 0, right: 0, display: 'flex', justifyContent: 'center',
      opacity: o, transform: 'translateY(' + (1 - o) * 16 + 'px)',
    }}>
      <div style={{
        maxWidth: 1180, padding: '18px 34px', background: 'rgba(13,17,23,0.92)',
        border: '1px solid ' + C.border2, borderRadius: 6, display: 'flex', gap: 18, alignItems: 'center',
      }}>
        <img src={CAST.viv.photo} alt="" style={{
          width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 20%',
          border: '2px solid ' + C.goldDim, flexShrink: 0,
          transform: 'translateY(' + vBob * 1.6 + 'px) scale(' + (1 + (speaking ? 0.015 * Math.abs(vBob) : 0)) + ')',
        }} />
        <div>
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: 2, color: C.gold, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
            VIVIENNE ASHCROFT
            <EqBars t={localTime} color={C.gold} active={speaking} size={10} />
          </div>
          <div style={{ fontFamily: SANS, fontSize: 24, fontStyle: 'italic', color: C.text, lineHeight: 1.35 }}>“{text}”</div>
        </div>
      </div>
    </div>
  );
}

// animated "on mic" EQ bars
function EqBars({ t, color, active, size }) {
  const s = size || 14;
  const bars = [0, 1, 2, 3];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: s, opacity: active ? 1 : 0.25 }}>
      {bars.map((k) => {
        const h = active ? 0.3 + 0.7 * Math.abs(Math.sin(t * (7 + k * 1.7) + k * 1.3)) : 0.25;
        return <div key={k} style={{ width: 3, height: Math.max(2, s * h), background: color, borderRadius: 1 }} />;
      })}
    </div>
  );
}

function CastCard({ person, meta, t, w, num, total, isHost }) {
  const { localTime } = useScene();
  const o = t;
  // pundits take turns "talking": a slow per-card oscillator gates who's on mic
  const idx = (num || 1) - 1;
  const talking = o >= 1 && Math.sin(localTime * 0.9 + idx * 2.4) > -0.15;
  const bob = talking ? Math.sin(localTime * 9 + idx * 1.7) : 0;
  const nod = talking ? Math.sin(localTime * 5.3 + idx * 3.1) : 0;
  return (
    <div style={{
      width: w, opacity: o,
      transform: 'translateY(' + (1 - o) * 60 + 'px) scale(' + (0.94 + 0.06 * o) + ')',
      background: C.card, border: '1px solid ' + (isHost ? C.goldDim : C.border), borderRadius: 10,
      overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
    }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: C.card2 }}>
        <img src={person.photo} alt={person.name} style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block',
          transform: 'scale(' + (1.12 - 0.08 * o + (talking ? 0.006 * bob : 0)) + ') translateY(' + (talking ? bob * 2.4 : 0) + 'px) rotate(' + (talking ? nod * 0.7 : 0) + 'deg)',
          transformOrigin: '50% 85%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,19,24,0) 52%, rgba(15,19,24,0.96) 100%)' }} />
        <div style={{
          position: 'absolute', top: 14, right: 14, fontFamily: MONO, fontSize: 12, fontWeight: 600,
          padding: '3px 9px', borderRadius: 2, letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 7,
          background: 'rgba(8,11,15,0.7)', border: '1px solid ' + meta.color, color: meta.color,
          boxShadow: talking ? '0 0 14px ' + meta.color + '44' : 'none',
        }}>
          <EqBars t={localTime} color={meta.color} active={talking} size={11} />
          {isHost ? '★ HOST' : num + '/' + total}
        </div>
        <div style={{ position: 'absolute', bottom: 14, left: 18, right: 18 }}>
          <div style={{ fontFamily: SANS, fontSize: 26, fontWeight: 700, color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>{person.name}</div>
          <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: 2, color: C.gold, textTransform: 'uppercase', marginTop: 3 }}>{person.role}</div>
        </div>
      </div>
    </div>
  );
}

// ── scenes ────────────────────────────────────────────────────

function ColdOpen({ progress }) {
  const flicker = progress > 0.12 && progress < 0.3 ? 0.85 + 0.15 * Math.abs(Math.sin(progress * 90)) : 1;
  const tagO = seg(progress, 0.55, 0.72);
  const liveO = seg(progress, 0.06, 0.14);
  return (
    <div data-screen-label="Scene: Cold Open" style={{ position: 'absolute', inset: 0, background: C.bg }}>
      <GridBg />
      <Ticker progress={progress} top={56} />
      <Ticker progress={progress} top={982} reverse color={C.dim} />
      <div style={{
        position: 'absolute', top: 130, left: 96, opacity: liveO, display: 'flex', alignItems: 'center', gap: 12,
        fontFamily: MONO, fontSize: 16, letterSpacing: 3, color: C.red,
      }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: C.red, opacity: 0.5 + 0.5 * Math.abs(Math.sin(progress * 22)) }} />
        LIVE
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: flicker }}>
        <Logo build={seg(progress, 0.1, 0.62, easeInOut)} />
      </div>
      <div style={{
        position: 'absolute', bottom: 150, left: 0, right: 0, textAlign: 'center',
        fontFamily: MONO, fontSize: 20, letterSpacing: 10, color: C.muted,
        opacity: tagO, transform: 'translateY(' + (1 - tagO) * 12 + 'px)',
      }}>THE VOICES OF THE EXCHANGE</div>
    </div>
  );
}

function YourHost({ progress, scene }) {
  const { localTime } = useScene();
  const panelX = (1 - seg(progress, 0.02, 0.2)) * 620;
  const tagO = seg(progress, 0.12, 0.24);
  const nameO = seg(progress, 0.18, 0.32);
  const rowO = seg(progress, 0.28, 0.42);
  const speaking = progress > 0.08 && progress < 0.97;
  const vBob = speaking ? Math.sin(localTime * 8.2) : 0;
  const zoom = 1.02 + 0.07 * easeInOut(progress);
  return (
    <div data-screen-label="Scene: Your Host" style={{ position: 'absolute', inset: 0, background: C.bg }}>
      <GridBg />
      <Ticker progress={progress} top={0} color={C.dim} />
      {/* right photo panel */}
      <div style={{
        position: 'absolute', top: 42, right: 96, width: 560, height: 860,
        transform: 'translateX(' + panelX + 'px)',
        border: '1px solid ' + C.goldDim, borderRadius: 12, overflow: 'hidden',
        boxShadow: '0 40px 100px rgba(0,0,0,0.6)', background: C.card2,
      }}>
        <img src={CAST.viv.photo} alt="Vivienne Ashcroft" style={{
          width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%',
          transform: 'scale(' + (zoom + 0.004 * vBob) + ') translateY(' + vBob * 2 + 'px) rotate(' + (speaking ? Math.sin(localTime * 5.1) * 0.4 : 0) + 'deg)',
          transformOrigin: '50% 85%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,11,15,0) 60%, rgba(8,11,15,0.9) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 22, left: 26, display: 'flex', alignItems: 'center', gap: 10, fontFamily: MONO, fontSize: 14, letterSpacing: 3, color: C.gold }}>
          <EqBars t={localTime} color={C.gold} active={speaking} size={12} />
          ON MIC · LONDON → THE DESK
        </div>
      </div>
      {/* left text block */}
      <div style={{ position: 'absolute', top: 250, left: 96, width: 1050 }}>
        <div style={{
          display: 'inline-block', fontFamily: MONO, fontSize: 16, letterSpacing: 4, color: C.gold,
          border: '1px solid ' + C.goldDim, background: 'rgba(255,200,64,0.07)', padding: '7px 18px', borderRadius: 2,
          opacity: tagO,
        }}>YOUR HOST</div>
        <div style={{
          fontFamily: SANS, fontWeight: 700, fontSize: 108, lineHeight: 1.02, color: C.text, margin: '30px 0 26px',
          opacity: nameO, transform: 'translateY(' + (1 - nameO) * 26 + 'px)',
        }}>Vivienne<br />Ashcroft</div>
        <div style={{ display: 'flex', gap: 14, opacity: rowO, transform: 'translateY(' + (1 - rowO) * 16 + 'px)' }}>
          {['THE MARQUEE', 'THURSDAYS', 'DEADPAN · SINCE BIRTH'].map((s, i) => (
            <div key={i} style={{
              fontFamily: MONO, fontSize: 16, letterSpacing: 2, color: i === 0 ? C.gold : C.muted,
              border: '1px solid ' + (i === 0 ? C.goldDim : C.border2), padding: '9px 16px', borderRadius: 4,
              background: C.card,
            }}>{s}</div>
          ))}
        </div>
      </div>
      <Caption text={scene.caption} at={0.12} />
    </div>
  );
}

function ShowScene({ progress, scene }) {
  const meta = SHOW_META[scene.name];
  const cast = meta.cast.map((k) => CAST[k]);
  const n = cast.length;
  const w = n <= 2 ? 480 : 390;
  const titleO = seg(progress, 0.02, 0.14);
  const lineW = seg(progress, 0.08, 0.26) * 100;
  return (
    <div data-screen-label={'Scene: ' + scene.name} style={{ position: 'absolute', inset: 0, background: C.bg }}>
      <GridBg />
      <Ticker progress={progress} top={0} color={C.dim} />
      <div style={{ position: 'absolute', top: 108, left: 96, right: 96 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 26, opacity: titleO, transform: 'translateY(' + (1 - titleO) * 18 + 'px)' }}>
          <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 64, letterSpacing: 4, color: meta.color, textTransform: 'uppercase' }}>{scene.name}</div>
          <div style={{ fontFamily: MONO, fontSize: 17, letterSpacing: 3, color: C.muted }}>{meta.tag}</div>
        </div>
        <div style={{ height: 2, width: lineW + '%', marginTop: 20, background: 'linear-gradient(90deg, ' + meta.color + ', transparent)' }} />
      </div>
      <div style={{
        position: 'absolute', top: 280, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 34,
      }}>
        {cast.map((p, i) => {
          const a = 0.16 + i * (n <= 2 ? 0.14 : 0.1);
          return <CastCard key={p.name} person={p} meta={meta} w={w} t={seg(progress, a, a + 0.13)} num={i + 1} total={n} isHost={scene.name === 'The Marquee' && i === 0} />;
        })}
      </div>
      <Caption text={scene.caption} at={0.1} />
    </div>
  );
}

function SignOff({ progress, scene }) {
  const logoO = seg(progress, 0.02, 0.16);
  const showO = seg(progress, 0.14, 0.3);
  const timeO = seg(progress, 0.26, 0.42);
  const byeO = seg(progress, 0.5, 0.66);
  return (
    <div data-screen-label="Scene: Sign Off" style={{ position: 'absolute', inset: 0, background: C.bg }}>
      <GridBg />
      <Ticker progress={progress} top={982} color={C.dim} />
      <div style={{ position: 'absolute', inset: '0 0 120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ opacity: logoO, fontFamily: MONO, fontWeight: 700, fontSize: 54, letterSpacing: 14, color: C.gold }}>LIV NETWORK</div>
        <div style={{
          fontFamily: SANS, fontWeight: 700, fontSize: 132, color: C.text, margin: '34px 0 10px',
          opacity: showO, transform: 'translateY(' + (1 - showO) * 26 + 'px)', letterSpacing: -2,
        }}>THE MARQUEE</div>
        <div style={{
          fontFamily: MONO, fontSize: 30, letterSpacing: 10, color: C.gold, opacity: timeO,
          transform: 'translateY(' + (1 - timeO) * 14 + 'px)',
        }}>THURSDAYS · 8PM · LIVE</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 64, opacity: byeO }}>
          <img src={CAST.viv.photo} alt="" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center 20%', border: '2px solid ' + C.goldDim }} />
          <div style={{ fontFamily: SANS, fontSize: 28, fontStyle: 'italic', color: C.muted }}>“{scene.caption}”</div>
        </div>
      </div>
    </div>
  );
}

// ── app ───────────────────────────────────────────────────────

function LivNetworkIntro() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  return (
    <TweaksCtx.Provider value={{ captions: t.captions, voice: t.voice }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', background: C.bg }}>
        <SceneStage width={1920} height={1080} scenes={window.OM_SCENES} playback={window.OM_PLAYBACK} bg={C.bg}
                    overlay={<NarrationTrack enabled={t.voice} />}>
          {{
            'Cold Open': ColdOpen,
            'Your Host': YourHost,
            'The Wire': ShowScene,
            'The Weekly Sit-Down': ShowScene,
            'Market Movers': ShowScene,
            'The Marquee': ShowScene,
            'Sign Off': SignOff,
          }}
        </SceneStage>
        <TweaksPanel>
          <TweakSection label="Broadcast" />
          <TweakToggle label="Vivienne's captions" value={t.captions} onChange={(v) => setTweak('captions', v)} />
          <TweakToggle label="Vivienne's narration audio" value={t.voice} onChange={(v) => setTweak('voice', v)} />
          <TweakSection label="Editing" />
          <TweakToggle label="Motion editor" value={t.motionEditor} onChange={(v) => setTweak('motionEditor', v)} />
        </TweaksPanel>
      </div>
    </TweaksCtx.Provider>
  );
}

window.LivNetworkIntro = LivNetworkIntro;
