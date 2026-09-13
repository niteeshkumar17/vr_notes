/**
 * Prebuild search-index.json so Pyro Search Notes is one fetch, not 150+ GitHub files.
 * Run from repo root: node scripts/build-search-index.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const INDEX_PATH = path.join(ROOT, 'notes-index.json');
const OUT_PATH = path.join(ROOT, 'search-index.json');

function parseSections(markdown, folder, file) {
  const lines = markdown.split(/\r?\n/);

  const dateRegex = /Date added\b[^0-9]*(\d{4}-\d{2}-\d{2})/gi;
  const allDates = [...markdown.matchAll(dateRegex)].map((m) => m[1]);

  const filenameDateMatch = file.match(/(\d{4}-\d{2}-\d{2})/);
  if (filenameDateMatch && !allDates.includes(filenameDateMatch[1])) {
    allDates.unshift(filenameDateMatch[1]);
  }

  const sections = [];
  let heading = null;
  let level = 0;
  let content = [];
  let currentDate = allDates[0] || null;

  function flush() {
    if (heading) {
      const text = content.join('\n').trim();
      if (text.length > 0) {
        sections.push({
          folder,
          file,
          heading,
          level,
          content: text,
          date: currentDate,
          dates: [...new Set(allDates)],
        });
      }
    }
  }

  for (const line of lines) {
    const dm = line.match(/Date added\b[^0-9]*(\d{4}-\d{2}-\d{2})/i);
    if (dm) currentDate = dm[1];

    const hm = line.match(/^(#{1,4})\s+(.+)/);
    if (hm) {
      flush();
      level = hm[1].length;
      heading = hm[2].trim();
      content = [];
    } else {
      content.push(line);
    }
  }
  flush();
  return sections;
}

const index = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
const sections = [];
let filesOk = 0;
const missing = [];

for (const [folder, notes] of Object.entries(index)) {
  for (const note of notes) {
    const rel = String(note.file).replace(/\\/g, '/');
    const abs = path.join(ROOT, folder, ...rel.split('/'));
    if (!fs.existsSync(abs)) {
      missing.push(`${folder}/${rel}`);
      continue;
    }
    const markdown = fs.readFileSync(abs, 'utf8');
    sections.push(...parseSections(markdown, folder, rel));
    filesOk += 1;
  }
}

const payload = {
  generatedAt: new Date().toISOString(),
  fileCount: filesOk,
  sectionCount: sections.length,
  index,
  sections,
};

fs.writeFileSync(OUT_PATH, JSON.stringify(payload));
const mb = (fs.statSync(OUT_PATH).size / (1024 * 1024)).toFixed(2);
console.log(`search-index.json: ${filesOk} files, ${sections.length} sections, ${mb} MB`);
if (missing.length) {
  console.warn(`Missing ${missing.length} indexed files:`);
  for (const m of missing) console.warn(`  ${m}`);
  process.exitCode = 1;
}
