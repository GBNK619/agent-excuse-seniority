// The Excuse Your Agent Gives You — writes the excuse line to /output/entry.txt.
// Node 22, standard library only. The output dir is /output in the grader;
// MAKEFUN_OUTPUT_DIR stands in for it outside the grader.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'I would fix the bug, but it has been in production longer than I have — at this point it has seniority.';

// The gate only accepts 1–200 characters of non-whitespace UTF-8 text, so
// refuse loudly rather than hand in an entry that can never be judged.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(
    `entry line must be 1–200 non-whitespace characters, got ${LINE.length}`,
  );
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${LINE.length} characters): ${LINE}`);
