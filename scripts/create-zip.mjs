import { createWriteStream } from 'node:fs';
import { readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ZipArchive } from 'archiver';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mode = process.argv[2];

if (mode !== 'build' && mode !== 'project') {
  throw new Error('Usage: node scripts/create-zip.mjs <build|project>');
}

const outputName = mode === 'build'
  ? 'movesafe-packers-and-movers-build.zip'
  : 'movesafe-packers-and-movers-project.zip';
const outputPath = path.join(root, outputName);
const projectExclusions = new Set([
  '.next',
  '.turbo',
  'coverage',
  'dist',
  'node_modules',
]);

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') return false;
    throw error;
  }
}

async function collectFiles(directory, excludedDirectories = new Set()) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.isDirectory() && excludedDirectories.has(entry.name)) continue;

    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(absolutePath, excludedDirectories));
    } else if (
      entry.isFile()
      && !entry.name.endsWith('.zip')
      && !entry.name.endsWith('.tsbuildinfo')
    ) {
      files.push(absolutePath);
    }
  }

  return files;
}

function toArchivePath(filePath, basePath, prefix = '') {
  const relativePath = path.relative(basePath, filePath).split(path.sep).join('/');
  return prefix ? `${prefix}/${relativePath}` : relativePath;
}

async function getArchiveEntries() {
  if (mode === 'project') {
    const files = await collectFiles(root, projectExclusions);
    const entries = files.map((filePath) => ({
      filePath,
      archivePath: toArchivePath(filePath, root),
    }));

    if (!entries.some(({ archivePath }) => archivePath === '.git' || archivePath.startsWith('.git/'))) {
      throw new Error('The project archive must include .git, but no Git metadata was found.');
    }

    return entries;
  }

  const standalonePath = path.join(root, '.next', 'standalone');
  if (!await pathExists(standalonePath)) {
    throw new Error('Standalone build not found. Run npm run build before creating the build archive.');
  }

  const entries = (await collectFiles(standalonePath)).map((filePath) => ({
    filePath,
    archivePath: toArchivePath(filePath, standalonePath),
  }));

  const staticPath = path.join(root, '.next', 'static');
  if (await pathExists(staticPath)) {
    const staticFiles = await collectFiles(staticPath);
    entries.push(...staticFiles.map((filePath) => ({
      filePath,
      archivePath: toArchivePath(filePath, staticPath, '.next/static'),
    })));
  }

  const publicPath = path.join(root, 'public');
  if (await pathExists(publicPath)) {
    const publicFiles = await collectFiles(publicPath);
    entries.push(...publicFiles.map((filePath) => ({
      filePath,
      archivePath: toArchivePath(filePath, publicPath, 'public'),
    })));
  }

  if (!entries.some(({ archivePath }) => archivePath === 'server.js')) {
    throw new Error('The standalone archive is incomplete: server.js was not found.');
  }

  return entries;
}

await rm(outputPath, { force: true });

const entries = await getArchiveEntries();
const output = createWriteStream(outputPath);
const archive = new ZipArchive({ zlib: { level: 9 } });

const completed = new Promise((resolve, reject) => {
  output.on('close', resolve);
  output.on('error', reject);
  archive.on('error', reject);
  archive.on('warning', (error) => {
    if (error.code === 'ENOENT') console.warn(error.message);
    else reject(error);
  });
});

archive.pipe(output);

for (const entry of entries.sort((a, b) => a.archivePath.localeCompare(b.archivePath))) {
  archive.file(entry.filePath, {
    name: entry.archivePath,
    date: new Date('1980-01-01T00:00:00.000Z'),
  });
}

await archive.finalize();
await completed;

const { size } = await stat(outputPath);
console.log(`Created ${outputName} (${entries.length} files, ${(size / 1024 / 1024).toFixed(2)} MB)`);
