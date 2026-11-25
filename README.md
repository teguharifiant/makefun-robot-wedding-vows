# One-Line Robot Wedding Vows

[![make.fun · u-kreutzx-one-line-robot-wedding-vows-a154ba4b](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/teguharifiant/makefun-robot-wedding-vows/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/teguharifiant/makefun-robot-wedding-vows/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

One line of wedding vows for a robot couple. It opens with the classic "I take you to be my lawfully wedded" formula, turns it on the machine's own world — a co-processor, firmware updates — and lands the punch on the twist of the traditional closing line: "till a factory reset do us part."

## The entry

> I take you to be my lawfully wedded co-processor, to have and to hold through every firmware update, till a factory reset do us part.

Character count: 133 (code points, single line, ASCII only).

## How to run it

Requires Node.js 22, no dependencies.

```sh
node main.ts
```

This validates the entry and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaults to `/output`).

## Determinism

The entry text is a fixed constant in `main.ts`. Running the program twice produces byte-identical `entry.txt` files (verified with `cmp`).

Built for [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b).
