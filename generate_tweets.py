#!/usr/bin/env python3
"""
LIV Network tweet generator — full-league edition (Sep 2026).

Feeds Claude the entire state of the league every run: live standings, last
week's actual results, this week's matchups, the pundit pick-em ledger (with
lock outcomes to brag about or answer for), Matteo's power rankings, current
stock prices, recent transactions, and the league lore. The feed reacts to the
league, not just the waiver wire.

Runs in GitHub Actions (see .github/workflows/generate-tweets.yml).
Requires: ANTHROPIC_API_KEY in the environment. Stdlib only — no pip installs.
"""

import json
import os
import re
import sys
import urllib.request
from datetime import datetime, timezone

LEAGUE_ID = "1312142691848454144"
MODEL = "claude-sonnet-4-6"
MAX_EVENTS = 8
TWEETS_PER_RUN = (7, 10)
HERE = os.path.dirname(__file__)
OUT_PATH = os.path.join(HERE, "..", "tweets.json")
DATA_JS_PATH = os.path.join(HERE, "..", "data.js")

SLEEPER_MAP = {  # owner -> roster_id (mirrors sleeper.js)
    "Charles": 5, "Corbishley": 1, "Shaq": 11, "Adam": 2, "Jake": 6,
    "Fronge": 4, "Brent": 12, "Wingard": 8, "Mitchum": 10, "Ryan": 9,
    "Kevin": 7, "Drew": 3,
}
ROSTER_TO_OWNER = {v: k for k, v in SLEEPER_MAP.items()}
PICKER_NAMES = {
    "big-dog": "Big Dog", "chad-bellwether": "Chad Bellwether",
    "vance-hollis": "Vance Hollis", "terrence-odom": "Terrence E. Odom",
    "dexter-vail": "Dexter Vail", "bo-ruckman": "Bo Ruckman",
    "jay-kelpey": "Jay Kelpey", "matteo-honeydew": "Matteo Honeydew",
}


def http_json(url, payload=None, headers=None, timeout=120):
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(url, data=data, headers=headers or {})
    with urllib.request.urlopen(req, timeout=timeout) as res:
        return json.loads(res.read().decode())


def sleeper(path):
    return http_json(f"https://api.sleeper.app/v1{path}")


# ── data.js readers (regex — defensive, every reader may return None) ────────

def _read_data_js():
    try:
        return open(DATA_JS_PATH).read()
    except Exception:
        return ""


def read_exchange_board(src):
    lines = []
    team_re = re.compile(r"owner:'(\w+)'.*?company:'([^']*)'.*?ticker:'(\w+)'.*?history:\[([^\]]*)\]")
    price_re = re.compile(r"\{d:'([^']*)',\s*p:([\d.]+)\}")
    for m in team_re.finditer(src):
        owner, company, ticker, hist = m.groups()
        pts = price_re.findall(hist)
        if not pts:
            continue
        d_now, p_now = pts[-1][0], float(pts[-1][1])
        line = f"- {owner} ({company}, {ticker}): ${p_now:.2f} as of {d_now}"
        if len(pts) >= 2:
            p_prev = float(pts[-2][1])
            chg = 100 * (p_now - p_prev) / p_prev
            line += f" ({'+' if chg >= 0 else ''}{chg:.1f}% vs previous issue)"
        lines.append(line)
    return lines


def read_rankings(src):
    out = []
    stamp = None
    m = re.search(r"RANKINGS_UPDATED = '([^']+)'", src)
    if m:
        stamp = m.group(1)
    for r in re.finditer(r"\{ rank:(\d+), move:'(\w+)'(?:, delta:(\d+))?, ticker:'(\w+)', owner:'(\w+)', take:'((?:[^'\\]|\\.)*)' \}", src):
        rank, move, delta, ticker, owner, take = r.groups()
        arrow = "" if move == "same" else (f" (up {delta})" if move == "up" else f" (down {delta})")
        out.append(f"{rank}. {owner} ({ticker}){arrow} — Matteo's take: \"{take.replace(chr(92) + chr(39), chr(39))}\"")
    return out, stamp


def read_picks_history(src):
    entries = []
    for block in re.finditer(r"\{ week: (\d+), picks: \{(.*?)\} \},", src, re.S):
        week = int(block.group(1))
        picks = {}
        for p in re.finditer(r"'([\w-]+)':\s*\{ winners: \[([^\]]*)\],\s*lock: '(\w+)' \}", block.group(2)):
            key, winners_raw, lock = p.groups()
            winners = re.findall(r"'(\w+)'", winners_raw)
            picks[key] = {"winners": winners, "lock": lock}
        if picks:
            entries.append({"week": week, "picks": picks})
    return entries


def read_newsletter_meta(src):
    m = re.search(r"const NEWSLETTER = \{\s*week: (\d+), kind: '([^']+)', date: '([^']+)',\s*narrator: '([\w-]+)',\s*title: '((?:[^'\\]|\\.)*)'", src, re.S)
    if not m:
        return None
    week, kind, date, narrator, title = m.groups()
    return f"Week {week} {kind} ('{title.replace(chr(92) + chr(39), chr(39))}'), narrated by {PICKER_NAMES.get(narrator, narrator)} — dated {date}"


# ── Sleeper: standings, results, matchups ────────────────────────────────────

def get_standings():
    rosters = sleeper(f"/league/{LEAGUE_ID}/rosters")
    rows = []
    for r in rosters or []:
        o = ROSTER_TO_OWNER.get(r.get("roster_id"))
        if not o:
            continue
        s = r.get("settings") or {}
        pf = s.get("fpts", 0) + s.get("fpts_decimal", 0) / 100.0
        rows.append((o, s.get("wins", 0), s.get("losses", 0), pf))
    rows.sort(key=lambda x: (-x[1], -x[3]))
    return [f"{i+1}. {o}: {w}-{l}, {pf:.1f} PF" for i, (o, w, l, pf) in enumerate(rows)] if rows else []


def _week_pairs(week):
    ms = sleeper(f"/league/{LEAGUE_ID}/matchups/{week}")
    by_id = {}
    for m in ms or []:
        if m.get("matchup_id") is not None:
            by_id.setdefault(m["matchup_id"], []).append(m)
    return [p for p in by_id.values() if len(p) == 2]


def get_week_results(week):
    """Completed-week results with scores; returns (lines, winners_set)."""
    lines, winners = [], set()
    for a, b in _week_pairs(week):
        pa, pb = a.get("points") or 0, b.get("points") or 0
        if not (pa > 0 or pb > 0) or pa == pb:
            continue
        oa, ob = ROSTER_TO_OWNER.get(a["roster_id"]), ROSTER_TO_OWNER.get(b["roster_id"])
        if not oa or not ob:
            continue
        w, l = (oa, ob) if pa > pb else (ob, oa)
        ws, ls = max(pa, pb), min(pa, pb)
        margin = ws - ls
        tag = " (BLOWOUT)" if margin >= 40 else (" (NAIL-BITER)" if margin <= 5 else "")
        lines.append(f"- {w} def. {l}, {ws:.1f}-{ls:.1f}{tag}")
        winners.add(w)
    return lines, winners


def get_current_matchups(week):
    lines = []
    for a, b in _week_pairs(week):
        oa, ob = ROSTER_TO_OWNER.get(a["roster_id"]), ROSTER_TO_OWNER.get(b["roster_id"])
        if not oa or not ob:
            continue
        pa, pb = a.get("points") or 0, b.get("points") or 0
        live = f" (live: {pa:.1f}-{pb:.1f})" if (pa > 0 or pb > 0) else ""
        lines.append(f"- {oa} vs {ob}{live}")
    return lines


def grade_pickem(picks_history, results_by_week):
    """Season records + last graded week's lock outcomes."""
    recs = {k: {"w": 0, "l": 0, "lw": 0, "ll": 0} for k in PICKER_NAMES}
    last_week_detail = []
    graded_weeks = sorted(w for w in results_by_week if results_by_week[w])
    for entry in picks_history:
        wk = entry["week"]
        winners = results_by_week.get(wk)
        if not winners:
            continue
        is_last = wk == (graded_weeks[-1] if graded_weeks else -1)
        for k, p in entry["picks"].items():
            if k not in recs:
                continue
            for o in p["winners"]:
                recs[k]["w" if o in winners else "l"] += 1
            lock_hit = p["lock"] in winners
            recs[k]["lw" if lock_hit else "ll"] += 1
            if is_last:
                last_week_detail.append(
                    f"{PICKER_NAMES[k]}: lock was {p['lock']} — {'HIT' if lock_hit else 'MISSED'}")
    board = sorted(recs.items(), key=lambda kv: -(kv[1]["w"] - kv[1]["l"]))
    lines = [f"{i+1}. {PICKER_NAMES[k]}: {r['w']}-{r['l']} (locks {r['lw']}-{r['ll']})"
             for i, (k, r) in enumerate(board) if (r["w"] + r["l"]) > 0]
    return lines, last_week_detail


# ── transactions (unchanged behavior, computed ages) ─────────────────────────

def player_names():
    raw = sleeper("/players/nfl")
    out = {}
    for pid, p in raw.items():
        if not p:
            continue
        name = p.get("full_name") or f"{p.get('first_name','')} {p.get('last_name','')}".strip()
        out[pid] = f"{name} ({p.get('position') or '?'}, {p.get('team') or 'FA'})"
    return out


def fmt_when(ms):
    then = datetime.fromtimestamp(ms / 1000, tz=timezone.utc)
    days = (datetime.now(timezone.utc).date() - then.date()).days
    rel = "today" if days <= 0 else ("yesterday" if days == 1 else f"{days} days ago")
    return f"{then.strftime('%b %d')} ({rel})"


def describe_transactions(players, week):
    txs = []
    for r in sorted({week, max(1, week - 1)}, reverse=True):
        try:
            txs += sleeper(f"/league/{LEAGUE_ID}/transactions/{r}") or []
        except Exception:
            pass
    txs = [t for t in txs if t and t.get("status") == "complete" and t.get("created")]
    txs.sort(key=lambda t: t["created"], reverse=True)
    events = []
    for tx in txs[:MAX_EVENTS]:
        when = fmt_when(tx["created"])
        adds, drops = tx.get("adds") or {}, tx.get("drops") or {}
        owner = lambda rid: ROSTER_TO_OWNER.get(rid, "Unknown")
        if tx.get("type") == "trade" and len(tx.get("roster_ids") or []) >= 2:
            ra, rb = tx["roster_ids"][:2]
            side = lambda rid: (
                [players.get(pid, pid) for pid, r_ in adds.items() if r_ == rid]
                + [f"{p['season']} R{p['round']} pick" for p in (tx.get("draft_picks") or [])
                   if p.get("owner_id") == rid])
            sa = ", ".join(side(ra)) or "future considerations"
            sb = ", ".join(side(rb)) or "future considerations"
            events.append(f"TRADE ({when}): {owner(ra)} receives {sa}. {owner(rb)} receives {sb}.")
        elif adds:
            pid, rid = next(iter(adds.items()))
            bid = (tx.get("settings") or {}).get("waiver_bid")
            faab = f" for ${bid} FAAB" if bid else ""
            dropped = ""
            if drops:
                dpid, _ = next(iter(drops.items()))
                dropped = f" (dropped {players.get(dpid, dpid)})"
            kind = "WAIVER CLAIM" if tx.get("type") == "waiver" else "FREE AGENT ADD"
            events.append(f"{kind} ({when}): {owner(rid)} added {players.get(pid, pid)}{faab}{dropped}.")
        elif drops:
            pid, rid = next(iter(drops.items()))
            events.append(f"CUT ({when}): {owner(rid)} released {players.get(pid, pid)}.")
    return events


# ── prompt ───────────────────────────────────────────────────────────────────

def block(lines, empty="- (unavailable this run)"):
    return "\n".join(lines) if lines else empty


def build_prompt(kit, lore, ctx):
    people = "\n".join(
        f"- {p['name']} ({p['handle']}) — {p['role']}. Beat: {p['beat']} "
        f"Register sample (do NOT copy or template): \"{p['voice_sample']}\""
        for p in kit["personalities"])
    owners = "\n".join(
        f"- {o['owner']} = {o['company']} ({o['ticker']}), team \"{o['team']}\""
        for o in kit["owners"])
    lo, hi = TWEETS_PER_RUN
    today = datetime.now(timezone.utc).strftime("%A, %B %d, %Y")

    return f"""You are the entire on-air talent pool of the LIV Network, the fictional sports-media \
ecosystem covering the LIV Dynasty fantasy football league. You write their tweets.

## Today's date
Today is {today}. Every dated item below includes its age (e.g. "Sep 06 (yesterday)"). Use those \
labels verbatim — NEVER recompute or guess how old something is.

## League lore (canon — reference naturally, never info-dump)
{lore}

## Owner / corporation glossary
{owners}

## CURRENT STANDINGS (live from Sleeper)
{block(ctx['standings'], '- Season has not started or standings unavailable.')}

## LAST COMPLETED WEEK — RESULTS (week {ctx['last_week'] or '—'})
{block(ctx['results'], '- No completed games yet this season.')}

## THIS WEEK'S MATCHUPS (week {ctx['week']})
{block(ctx['matchups'])}

## PICK-EM LEDGER (eight pundits pick every game; records are public and sacred)
Season records:
{block(ctx['pickem'], '- No graded weeks yet — the panel is on the record but unproven.')}
Last graded week, lock outcomes:
{block(ctx['lock_detail'], '- (no locks graded yet)')}

## MATTEO'S POWER RANKINGS (updated {ctx['rankings_stamp'] or '—'})
{block(ctx['rankings'])}

## CURRENT EXCHANGE BOARD (quote these prices exactly, never invent numbers)
{block(ctx['board'])}

## THE WEEKLY LEDGER (current issue, for continuity)
{ctx['newsletter'] or '- (no current issue)'}

## RECENT TRANSACTIONS
{block(ctx['events'], '- No recent transactions — quiet wire.')}

## Recently posted tweets (do NOT repeat these takes or phrasings)
{block(['- ' + t for t in ctx['previous'][:20]], '- (none)')}

## Writing direction — this is the important part
Write {lo}-{hi} tweets total from a MIX of personalities (6-9 different people; not everyone \
tweets every day).

SPREAD THE BATCH ACROSS THE LEAGUE, not one topic. A good batch touches several of: reactions to \
actual game results (real scores above — celebrate blowouts, mourn nail-biters, spotlight upsets); \
this week's matchups (previews, trash talk, revenge-game angles from the lore); PICK-EM \
ACCOUNTABILITY — this is premium content: pundits who missed their lock must address it (excuses, \
deflection, vows), pundits who hit brag insufferably, and everyone roasts the bottom of the pick-em \
board BY NAME; arguments about Matteo's rankings (others attack specific placements, Matteo defends \
citing his list); market takes citing exact board prices; storyline continuity (Tyler the co-CEO, \
the Havana question, the $99.99 freeze, whatever the lore holds); and transactions only as one \
thread among many, never the whole batch.

Rules of the feed:
- NEVER invent scores, records, picks, prices, or trades. Everything checkable must come from the \
data above, quoted exactly.
- Vivienne Ashcroft and Clara Hopkins do not make picks — they narrate, tease the Ledger, and hold \
the pickers accountable. Breaking news belongs to Marty Volkman (first) and Dina Ravioli (right).
- NEVER open two tweets the same way. Vary structure, length, and energy.
- Signature tics (Jay's "Buddy", Vance's all-caps, Dexter's "I called it", Bo demanding a segment) \
in AT MOST one tweet each per batch.
- Let personalities interact: reply to each other's takes, subtweet, pile on.
- 1-3 sentences mostly. No hashtag spam. At most one emoji in the whole batch.

## Output format
Respond with ONLY a JSON array, no markdown fences. Each element:
{{"key": "<personality key>", "text": "<tweet>", "minutes_ago": <int 5-2000, staggered>, \
"likes": <int 15-140>, "rt": <int 2-35>, "reply": <int 1-45>}}

Valid keys: {", ".join(p["key"] for p in kit["personalities"])}"""


def call_claude(prompt):
    key = os.environ.get("ANTHROPIC_API_KEY")
    if not key:
        sys.exit("ANTHROPIC_API_KEY is not set — add it as a GitHub Actions secret.")
    res = http_json(
        "https://api.anthropic.com/v1/messages",
        payload={"model": MODEL, "max_tokens": 3500,
                 "messages": [{"role": "user", "content": prompt}]},
        headers={"content-type": "application/json", "x-api-key": key,
                 "anthropic-version": "2023-06-01"})
    text = "".join(b.get("text", "") for b in res.get("content", []) if b.get("type") == "text")
    text = text.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()
    return json.loads(text)


# ── main ─────────────────────────────────────────────────────────────────────

def main():
    kit = json.load(open(os.path.join(HERE, "media_kit.json")))
    lore_path = os.path.join(HERE, "lore.md")
    lore = open(lore_path).read() if os.path.exists(lore_path) else ""
    people = {p["key"]: p for p in kit["personalities"]}

    previous = []
    if os.path.exists(OUT_PATH):
        try:
            previous = [t["text"] for t in json.load(open(OUT_PATH)).get("tweets", [])]
        except Exception:
            pass

    print("Reading league state…")
    state = sleeper("/state/nfl")
    week = max(1, state.get("week") or 1)
    in_season = state.get("season_type") in ("regular", "post")

    src = _read_data_js()
    rankings, rankings_stamp = read_rankings(src)
    picks_history = read_picks_history(src)

    ctx = {
        "week": week, "last_week": None,
        "standings": [], "results": [], "matchups": [],
        "pickem": [], "lock_detail": [],
        "rankings": rankings, "rankings_stamp": rankings_stamp,
        "board": read_exchange_board(src),
        "newsletter": read_newsletter_meta(src),
        "events": [], "previous": previous,
    }

    try:
        ctx["standings"] = get_standings() if in_season else []
    except Exception:
        pass
    try:
        ctx["matchups"] = get_current_matchups(week) if in_season else []
    except Exception:
        pass

    results_by_week = {}
    if in_season and week > 1:
        ctx["last_week"] = week - 1
        for w in range(1, week):
            try:
                lines, winners = get_week_results(w)
                results_by_week[w] = winners
                if w == week - 1:
                    ctx["results"] = lines
            except Exception:
                pass
    try:
        ctx["pickem"], ctx["lock_detail"] = grade_pickem(picks_history, results_by_week)
    except Exception:
        pass

    try:
        players = player_names()
        ctx["events"] = describe_transactions(players, week)
    except Exception:
        pass
    print(f"Context: {len(ctx['standings'])} standings rows, {len(ctx['results'])} results, "
          f"{len(ctx['matchups'])} matchups, {len(ctx['pickem'])} pick-em rows, "
          f"{len(ctx['rankings'])} rankings, {len(ctx['board'])} listings, {len(ctx['events'])} events.")

    print("Asking Claude to write the feed…")
    raw = call_claude(build_prompt(kit, lore, ctx))

    now = datetime.now(timezone.utc)
    tweets = []
    for t in raw:
        p = people.get(t.get("key"))
        if not p or not t.get("text"):
            continue
        mins = max(1, int(t.get("minutes_ago", 60)))
        tweets.append({
            "key": p["key"], "name": p["name"], "handle": p["handle"], "text": t["text"],
            "posted_at": datetime.fromtimestamp(now.timestamp() - mins * 60, tz=timezone.utc).isoformat(),
            "likes": int(t.get("likes", 30)), "rt": int(t.get("rt", 5)), "reply": int(t.get("reply", 4)),
        })
    if not tweets:
        sys.exit("Model returned no usable tweets; leaving tweets.json untouched.")

    tweets.sort(key=lambda t: t["posted_at"], reverse=True)
    events_seen = ctx["events"] + [f"WEEK {ctx['last_week']} RESULTS: " + "; ".join(
        r.lstrip("- ") for r in ctx["results"])] if ctx["results"] else ctx["events"]
    json.dump({"generated_at": now.isoformat(), "events_seen": events_seen, "tweets": tweets},
              open(OUT_PATH, "w"), indent=2)
    print(f"Wrote {len(tweets)} tweets to tweets.json")


if __name__ == "__main__":
    main()
