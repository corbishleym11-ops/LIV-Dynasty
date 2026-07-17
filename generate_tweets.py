#!/usr/bin/env python3
"""
LIV Network tweet generator.

Pulls real league activity from the Sleeper API, hands it to Claude along with
the media personalities and league lore, and writes freshly authored
in-character tweets to tweets.json at the repo root.

Runs in GitHub Actions (see .github/workflows/generate-tweets.yml).
Requires: ANTHROPIC_API_KEY in the environment. Stdlib only — no pip installs.
"""

import json
import os
import sys
import urllib.request
from datetime import datetime, timezone

LEAGUE_ID = "1312142691848454144"
MODEL = "claude-sonnet-4-6"
MAX_EVENTS = 10          # most recent league events fed to the writer
TWEETS_PER_RUN = (6, 9)  # min, max tweets to ask for
OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "tweets.json")

SLEEPER_MAP = {  # owner -> roster_id (mirrors sleeper.js)
    "Charles": 5, "Corbishley": 1, "Shaq": 11, "Adam": 2, "Jake": 6,
    "Fronge": 4, "Brent": 12, "Wingard": 8, "Mitchum": 10, "Ryan": 9,
    "Kevin": 7, "Drew": 3,
}
ROSTER_TO_OWNER = {v: k for k, v in SLEEPER_MAP.items()}


def http_json(url, payload=None, headers=None, timeout=120):
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(url, data=data, headers=headers or {})
    with urllib.request.urlopen(req, timeout=timeout) as res:
        return json.loads(res.read().decode())


# ── Sleeper ──────────────────────────────────────────────────────────

def sleeper(path):
    return http_json(f"https://api.sleeper.app/v1{path}")


def player_names():
    """Full players DB is ~5MB; trim to id -> 'Name (POS, TEAM)'."""
    raw = sleeper("/players/nfl")
    out = {}
    for pid, p in raw.items():
        if not p:
            continue
        name = p.get("full_name") or f"{p.get('first_name','')} {p.get('last_name','')}".strip()
        pos, team = p.get("position") or "?", p.get("team") or "FA"
        out[pid] = f"{name} ({pos}, {team})"
    return out


def fmt_when(ms):
    return datetime.fromtimestamp(ms / 1000, tz=timezone.utc).strftime("%b %d")


def describe_transactions(players):
    """Turn recent completed Sleeper transactions into plain-English event lines."""
    state = sleeper("/state/nfl")
    week = max(1, state.get("week") or 1)
    rounds = sorted({week, max(1, week - 1), 1}, reverse=True)

    txs = []
    for r in rounds:
        try:
            txs += sleeper(f"/league/{LEAGUE_ID}/transactions/{r}") or []
        except Exception:
            pass
    txs = [t for t in txs if t and t.get("status") == "complete" and t.get("created")]
    txs.sort(key=lambda t: t["created"], reverse=True)

    events = []
    for tx in txs[:MAX_EVENTS]:
        when = fmt_when(tx["created"])
        adds = tx.get("adds") or {}
        drops = tx.get("drops") or {}
        owner = lambda rid: ROSTER_TO_OWNER.get(rid, "Unknown")

        if tx.get("type") == "trade" and len(tx.get("roster_ids") or []) >= 2:
            ra, rb = tx["roster_ids"][:2]
            side = lambda rid: (
                [players.get(pid, pid) for pid, r_ in adds.items() if r_ == rid]
                + [f"{p['season']} R{p['round']} pick" for p in (tx.get("draft_picks") or [])
                   if p.get("owner_id") == rid]
            )
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

    season_note = f"NFL state: {state.get('season')} {state.get('season_type')}, week {week}."
    return events, season_note


# ── Claude ───────────────────────────────────────────────────────────

def build_prompt(kit, lore, events, season_note, previous_texts):
    people = "\n".join(
        f"- {p['name']} ({p['handle']}) — {p['role']}, {p['show']}. Beat: {p['beat']} "
        f"Sample of their register (do NOT copy or template this): \"{p['voice_sample']}\""
        for p in kit["personalities"]
    )
    owners = "\n".join(
        f"- {o['owner']} = {o['company']} ({o['ticker']}), team \"{o['team']}\""
        for o in kit["owners"]
    )
    events_block = "\n".join(f"- {e}" for e in events) if events else \
        "- No new transactions. It's a quiet stretch — write offseason content instead: " \
        "preview takes, rankings beefs, show promos, market chatter, slow-news-day pundit behavior."
    prev_block = "\n".join(f"- {t}" for t in previous_texts[:20]) or "- (none)"
    lo, hi = TWEETS_PER_RUN

    return f"""You are the entire on-air talent pool of the LIV Network, the fictional sports-media \
ecosystem covering the LIV Dynasty fantasy football league. You write their tweets.

## League lore (canon — reference naturally, never info-dump)
{lore}

## Owner / corporation glossary
{owners}

## The personalities
{people}

## Real league events to react to
{season_note}
{events_block}

## Recently posted tweets (do NOT repeat these takes or phrasings)
{prev_block}

## Writing direction — this is the important part
Write {lo}-{hi} tweets total, from a MIX of personalities (5-8 different people; not everyone \
tweets every day, and that's realistic).

Voice, not formula. Each personality's role and beat is their worldview — how they see events — \
not a script. The voice samples show their register, NOT templates to reuse. Specifically:
- NEVER open two tweets the same way. Vary sentence structure, length, and energy across the batch.
- Signature tics (Jay's "Buddy", Vance's all-caps, Dexter's "I called it", Bo demanding a segment) \
may appear in AT MOST one tweet each per batch, and most of each person's tweets should not lean \
on their tic at all. A good impression of a person is not them saying their catchphrase.
- Real pundits have range: Vance can be quietly ominous, Big Dog can be sincere for once, \
Terrence can concede a point, Clara can get genuinely rattled. Use that range sparingly — it lands \
harder when it's rare.
- Let personalities interact: reference each other's takes, subtweet, disagree on the same trade. \
A newsroom is a conversation, not twelve monologues.
- Vivienne Ashcroft HOSTS — she teases broadcasts and steers the desk. She does not break news. \
Breaking news belongs to Marty Volkman (first, not always right) and Dina Ravioli (the confirmation).
- Ground tweets in the actual events and canon above: real player names, real owners' situations, \
real storylines (superflex QB scarcity, TE premium, the 2027 pick premium, etc.). No invented trades.
- If an event is minor (a waiver add nobody cares about), it's fine for someone to say exactly that.
- Tweets should read like real sports-media Twitter: 1-3 sentences mostly, occasionally longer. \
No hashtag spam. At most one emoji across the whole batch, if any.

## Output format
Respond with ONLY a JSON array, no markdown fences, no commentary. Each element:
{{"key": "<personality key like marty-volkman>", "text": "<the tweet>", "minutes_ago": <int 5-2000, \
stagger these so the feed reads like a day of posting>, "likes": <int 15-120>, "rt": <int 2-30>, \
"reply": <int 1-40>}}

Valid keys: {", ".join(p["key"] for p in kit["personalities"])}"""


def call_claude(prompt):
    key = os.environ.get("ANTHROPIC_API_KEY")
    if not key:
        sys.exit("ANTHROPIC_API_KEY is not set — add it as a GitHub Actions secret.")
    body = {
        "model": MODEL,
        "max_tokens": 3000,
        "messages": [{"role": "user", "content": prompt}],
    }
    res = http_json(
        "https://api.anthropic.com/v1/messages",
        payload=body,
        headers={
            "content-type": "application/json",
            "x-api-key": key,
            "anthropic-version": "2023-06-01",
        },
    )
    text = "".join(b.get("text", "") for b in res.get("content", []) if b.get("type") == "text")
    text = text.strip().removeprefix("```json").removeprefix("```").removesuffix("```").strip()
    return json.loads(text)


# ── Main ─────────────────────────────────────────────────────────────

def main():
    here = os.path.dirname(__file__)
    kit = json.load(open(os.path.join(here, "media_kit.json")))
    lore_path = os.path.join(here, "lore.md")
    lore = open(lore_path).read() if os.path.exists(lore_path) else ""

    people = {p["key"]: p for p in kit["personalities"]}

    previous_texts = []
    if os.path.exists(OUT_PATH):
        try:
            previous_texts = [t["text"] for t in json.load(open(OUT_PATH)).get("tweets", [])]
        except Exception:
            pass

    print("Fetching Sleeper data…")
    players = player_names()
    events, season_note = describe_transactions(players)
    print(f"{len(events)} recent events found.")

    print("Asking Claude to write the feed…")
    raw = call_claude(build_prompt(kit, lore, events, season_note, previous_texts))

    now = datetime.now(timezone.utc)
    tweets = []
    for t in raw:
        p = people.get(t.get("key"))
        if not p or not t.get("text"):
            continue
        mins = max(1, int(t.get("minutes_ago", 60)))
        tweets.append({
            "key": p["key"],
            "name": p["name"],
            "handle": p["handle"],
            "text": t["text"],
            "posted_at": datetime.fromtimestamp(
                now.timestamp() - mins * 60, tz=timezone.utc
            ).isoformat(),
            "likes": int(t.get("likes", 30)),
            "rt": int(t.get("rt", 5)),
            "reply": int(t.get("reply", 4)),
        })

    if not tweets:
        sys.exit("Model returned no usable tweets; leaving tweets.json untouched.")

    tweets.sort(key=lambda t: t["posted_at"], reverse=True)
    out = {"generated_at": now.isoformat(), "events_seen": events, "tweets": tweets}
    with open(OUT_PATH, "w") as f:
        json.dump(out, f, indent=2)
    print(f"Wrote {len(tweets)} tweets to tweets.json")


if __name__ == "__main__":
    main()
