# LIV Network — automated tweet feed

Claude writes fresh, in-character tweets from your 12 media personalities reacting to real
Sleeper league activity. A GitHub Action runs on a schedule, commits `tweets.json` to the
repo, and the dashboard feed picks it up. The site stays 100% static — no servers, no keys
in the page.

## What's in this package

| File | What it does |
|---|---|
| `.github/workflows/generate-tweets.yml` | Runs every 6 hours + manual button. Commits `tweets.json` when there's new content. |
| `scripts/generate_tweets.py` | Pulls Sleeper trades/waivers/cuts, sends them + the media kit + lore to Claude, writes `tweets.json`. |
| `scripts/media_kit.json` | The 12 personalities (roles, beats, handles, voice samples) and the owner/ticker glossary. Edit this to evolve a character. |
| `scripts/lore.md` | Condensed league canon fed to the writer. Add new canon here as the 2026 season unfolds. |
| `index.html` | Your Overview page, patched: the feed loads `tweets.json` first, falls back to the Sleeper template feed, then to hand-written tweets. |
| `tweets.json` | A sample so the feed works before the first Action run. |

## Setup (one time, ~3 minutes)

1. Copy these files into your repo (keep the folder structure) and push.
2. Get an Anthropic API key at https://console.anthropic.com → API Keys.
3. In your GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `ANTHROPIC_API_KEY`
   - Value: your key
4. **Settings → Actions → General → Workflow permissions** → select **Read and write permissions** → Save.
   (This lets the Action commit tweets.json.)
5. Go to the **Actions** tab → "Generate LIV Network tweets" → **Run workflow** to test it immediately.

After that it runs itself every 6 hours. To change the cadence, edit the `cron` line in the
workflow (`0 */6 * * *` → e.g. `0 13 * * *` for once daily at 13:00 UTC).

## When a big trade drops

Hit **Run workflow** in the Actions tab and the newsroom reacts within a minute or two.

## Voice quality

The prompt explicitly instructs Claude that catchphrases are seasoning, not structure — Jay
doesn't open every tweet with "Buddy," Vance isn't always in all-caps, and each batch avoids
repeating takes from the previous one (recent tweets are passed in as "don't repeat this").
Personalities also react to *each other*, not just the news. If a character drifts, tune
their entry in `media_kit.json` — that's the single source of truth for voices.

## Cost

A few Sonnet calls per day at ~4K tokens each — roughly a cent or two per day, often less.
