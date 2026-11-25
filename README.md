# One-Line Robot Wedding Vows

[![Entry](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/teguharifiant/makefun-robot-wedding-vows/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![Reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/teguharifiant/makefun-robot-wedding-vows/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

Two machines exchange vows in the classic wedding wording, with the hardware swapped in: the partner becomes a co-processor, the hard times become firmware updates, and the only thing that can part them is a factory reset. It reads like a ceremony line and a changelog at the same time — a promise to keep running together, patch after patch.

> I take you to be my lawfully wedded co-processor, to have and to hold through every firmware update, till a factory reset do us part.

Character count: 133 (inside the 1–160 limit).

## How to run

You need Node.js 22 or newer. There is nothing to install.

```sh
node main.ts
```

That writes the vow to `/output/entry.txt`. Point it somewhere else with `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Before writing anything, `main.ts` runs the vow through a table of gates: 1–160 characters counted by code points, printable ASCII only, exactly one line, and no leading or trailing whitespace. A vow that fails any gate is rejected with a reason and nothing is written.

## Determinism

The vow is a fixed string in the source code, so every run writes the same bytes. Running `main.ts` twice into two different folders gives two byte-identical `entry.txt` files.

## Built for make.fun

Built for [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b).
