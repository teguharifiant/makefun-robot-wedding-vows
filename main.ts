// One-Line Robot Wedding Vows — entry for the make.fun bounty.
// A robot wedding vow, checked against every bounty gate, then saved
// to entry.txt. Plain Node 22 TypeScript, zero dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The vow itself: 133 characters, one line, printable ASCII only.
export const ENTRY =
  "I take you to be my lawfully wedded co-processor, to have and to hold through every firmware update, till a factory reset do us part.";

// One gate of the bounty, as a small test plus a human-readable reason
// for failing it. Keeping the gates in a table makes it trivial to see
// at a glance that every rule from the bounty is covered.
type Gate = {
  label: string;
  passes: (line: string) => boolean;
  reason: (line: string) => string;
};

const MIN_CHARS = 1;
const MAX_CHARS = 160;

function countChars(line: string): number {
  // Spread counts Unicode code points, not UTF-16 code units.
  return [...line].length;
}

function hasOnlyPrintableAscii(line: string): boolean {
  return scanLine(line).badChar === null;
}

// Walk the string once and note the first character that breaks the
// printable-ASCII rule or the single-line rule, so both gates share
// one scan instead of looping over the vow twice.
function scanLine(line: string): {
  badChar: string | null;
  lineBreak: boolean;
} {
  let badChar: string | null = null;
  let lineBreak = false;
  for (const ch of line) {
    if (ch === "\n" || ch === "\r") {
      lineBreak = true;
    }
    const n = ch.codePointAt(0) ?? 0;
    if ((n < 0x20 || n > 0x7e) && badChar === null) {
      badChar = ch;
    }
  }
  return { badChar, lineBreak };
}

const GATES: Gate[] = [
  {
    label: "length",
    passes: (line) => {
      const n = countChars(line);
      return n >= MIN_CHARS && n <= MAX_CHARS;
    },
    reason: (line) =>
      `length must be ${MIN_CHARS}-${MAX_CHARS} characters, found ${countChars(line)}`,
  },
  {
    label: "printable-ascii",
    passes: hasOnlyPrintableAscii,
    reason: (line) => {
      const found = scanLine(line).badChar;
      return found === null
        ? "only printable ASCII characters are allowed"
        : `only printable ASCII characters are allowed, found ${JSON.stringify(found)}`;
    },
  },
  {
    label: "single-line",
    passes: (line) => !scanLine(line).lineBreak,
    reason: () => "the vow must fit on exactly one line",
  },
  {
    label: "no-edge-spaces",
    passes: (line) => line === line.trim() && line.length > 0,
    reason: () =>
      "the vow must not be empty, whitespace-only, or padded with spaces",
  },
];

// Run every gate and collect the reasons for the ones that fail.
function failingReasons(line: string): string[] {
  const failures: string[] = [];
  for (const gate of GATES) {
    if (!gate.passes(line)) {
      failures.push(`${gate.label}: ${gate.reason(line)}`);
    }
  }
  return failures;
}

function run(): void {
  const failures = failingReasons(ENTRY);
  if (failures.length > 0) {
    for (const failure of failures) {
      console.error(`invalid vow — ${failure}`);
    }
    process.exit(1);
  }

  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(folder, { recursive: true });
  const destination = join(folder, "entry.txt");
  writeFileSync(destination, ENTRY, "utf8");
  console.log(`saved ${countChars(ENTRY)}-character vow to ${destination}`);
}

run();
