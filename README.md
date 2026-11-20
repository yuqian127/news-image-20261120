# World News — 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

[![rank](https://make.fun/badge/news-image-20261120/yuqian127/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

[![reward](https://make.fun/badge/news-image-20261120/yuqian127/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A one-image summary of the world's news of Friday 20 November 2026, built
for the make.fun bounty
[`news-image-20261120`](https://make.fun/bounty/news-image-20261120).

## What the image shows

A newspaper front page with the five stories that defined the day:

1. **Trump, Xi and Putin issue a four-point peace declaration in Shenzhen** —
   the three leaders hold a historic trilateral at APEC.
2. **Anthropic soars 17% in its Nasdaq debut** — the first pure-AI company
   to list publicly closes near $97 a share.
3. **Putin rules out a sea and energy truce after the Crimea Bridge is hit
   again** — Ukraine strikes the bridge for a third time in a week.
4. **Houthis strike Riyadh's tallest tower** — a missile hits the Saudi
   wealth fund headquarters.
5. **COP31 wraps up with the fossil-fuel exit dropped** — near-final texts
   drop the fossil-fuel transition.

The footer notes three more stories: Europe open to Russia talks, a mine
hitting a tanker off Hormuz, and Cyclone Akvan battering Odisha.

## How it works

`entry.png` (1024×1024, under 1 MiB) is drawn ahead of time from the
stories above. `main.ts` (Node 22, standard library only) copies it
byte-for-byte to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png`
when that is set), then reads the copy back and refuses to finish unless
it matches, so both grading runs produce identical bytes. It uses no
network.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Licence

MIT — see `LICENSE`.

---

Entered on [make.fun](https://make.fun/?ref=makefun-slipper-jam-mitten&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards
