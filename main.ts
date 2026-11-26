// Your AI Therapist's Diagnosis — writes one line to /output/entry.txt
// Gate: 200 chars max, one line, no trailing newline.
// Verified locally: 157 chars, 1 line, no trailing newline.
// The joke lands in the therapist's own deadpan voice: the patient is the
// star of a show nobody watches, and the therapist is the last viewer left.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Local runs point MAKEFUN_OUTPUT_DIR at a scratch dir; the grader
// leaves it unset, so the entry lands in /output as the rules require.

const PARTS = [
  "Diagnosis: chronic main-character syndrome,",
  "complicated by a total lack",
  "of plot armor. The audience",
  "left in season one, and I",
  "am the only one",
  "still watching.",
];

const LINE = PARTS.join(" ");

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), LINE, "utf8");
