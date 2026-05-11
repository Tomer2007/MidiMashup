const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const sourceDir = path.join(repoRoot, 'SoundClip', 'Tote', 'ExpandedSoundList');
const jsonOut = path.join(sourceDir, 'ToteSound.manifest.json');
const jsOut = path.join(sourceDir, 'ToteSound.manifest.js');

function extractSourceNumber(fileName) {
  const match = fileName.match(/-(\d+)\.mp3$/i);
  return match ? Number(match[1]) : null;
}

const files = fs.readdirSync(sourceDir)
  .filter(fileName => /^Tote-.*\.mp3$/i.test(fileName))
  .map(fileName => ({
    fileName,
    sourceNumber: extractSourceNumber(fileName),
  }))
  .filter(entry => Number.isFinite(entry.sourceNumber))
  .sort((a, b) => b.sourceNumber - a.sourceNumber);

if (!files.length) {
  throw new Error(`No Tote MP3 files were found in ${sourceDir}`);
}

const noteCount = files.length;
const rootNotes = noteCount === 1
  ? [1]
  : files.map((_, index) => Math.round(1 + index * ((127 - 1) / (noteCount - 1))));

const clips = files.map((entry, index) => ({
  id: `tote-${entry.sourceNumber}`,
  label: `Tote ${entry.sourceNumber}`,
  type: 'mp3',
  url: `SoundClip/Tote/ExpandedSoundList/${entry.fileName}`,
  sourceNumber: entry.sourceNumber,
  rootNote: rootNotes[index],
}));

const manifest = {
  id: 'tote-expanded-soundlist',
  label: 'Tote Instrument',
  sourceFolder: 'SoundClip/Tote/ExpandedSoundList',
  clips,
};

fs.writeFileSync(jsonOut, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
fs.writeFileSync(jsOut, `globalThis.TOTE_SOUND_MANIFEST = ${JSON.stringify(manifest, null, 2)};\n`, 'utf8');

console.log(`Wrote ${clips.length} Tote clips to ${path.relative(repoRoot, jsonOut)} and ${path.relative(repoRoot, jsOut)}`);
