// News-image entry for Friday 20 November 2026 (Node 22, standard library only).
//
// The picture itself is drawn ahead of time and kept beside this file as
// entry.png. This program's only job is to place an exact copy of it at the
// path the grader reads. It touches no network, reads nothing else, and
// writes the same bytes on every run, so the two grading runs agree.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

mkdirSync(outDir, { recursive: true });

const bytes = readFileSync(source);
writeFileSync(target, bytes);

const written = readFileSync(target);
if (!written.equals(bytes)) {
  throw new Error('output bytes differ from the entry image');
}
