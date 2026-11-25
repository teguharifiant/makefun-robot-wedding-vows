// One-Line Robot Wedding Vows — entry for make.fun bounty
// u-kreutzx-one-line-robot-wedding-vows-a154ba4b
//
// The entry is a single line of wedding vows for a robot couple: it
// opens with the classic "I take you to be my lawfully wedded"
// formula, turns it on the machine's own world (co-processor,
// firmware updates), and lands the punch on the twist of the
// traditional closing line — "till a factory reset do us part".
// Total entry: 1-160 characters (counted by code points), ASCII only,
// single line, no leading/trailing whitespace, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const ENTRY: string =
  "I take you to be my lawfully wedded co-processor, to have and to hold through every firmware update, till a factory reset do us part.";

/**
 * Validate an entry against the bounty gates:
 * - 1-160 characters, counted by code points
 * - not only whitespace
 * - no leading or trailing whitespace
 * - exactly one line (no "\n", no "\r")
 * - printable ASCII only (no control characters, no non-ASCII)
 *
 * Each gate lives in its own helper so a failure names the exact rule
 * that was broken, and validateEntry reads as the checklist itself.
 */
function fail(message: string): never {
  throw new Error(message);
}

function assertLength(text: string): void {
  const codePoints = [...text].length;
  if (codePoints < 1 || codePoints > 160) {
    fail(`entry must be 1-160 characters, got ${codePoints} code points`);
  }
}

function assertNotBlank(text: string): void {
  if (text.trim() === "") {
    fail("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    fail("entry must not have leading or trailing whitespace");
  }
}

function assertSingleLine(text: string): void {
  if (text.includes("\r")) {
    fail("entry must not contain carriage returns");
  }
  if (text.includes("\n")) {
    fail("entry must be a single line");
  }
}

function assertPrintableAscii(text: string): void {
  for (const ch of text) {
    const code = ch.codePointAt(0)!;
    if (code > 127) {
      fail("entry must be ASCII only");
    }
    if (code < 32 || code === 127) {
      fail("entry must not contain control characters");
    }
  }
}

export function validateEntry(text: string): void {
  assertLength(text);
  assertNotBlank(text);
  assertSingleLine(text);
  assertPrintableAscii(text);
}

function main(): void {
  validateEntry(ENTRY);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
}

main();
