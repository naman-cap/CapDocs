/*
 Converts blockquoted notes like:
 > 📘 Note:
 >
 > Some content
 Into:
 <Note title="Note"> ... </Note>

 Usage:
   node fix-notes.js --write       # apply changes
   node fix-notes.js --dry         # show files that would change
*/

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const WRITE = process.argv.includes('--write');
const DRY = process.argv.includes('--dry') || !WRITE;

// Matches variations like:
// > Note:
// > **Note**
// > 📘 Note:- Some text
// > Note : inline text
const NOTE_START_RE = /^>\s*(?:📘\s*)?(?:\*\*\s*)?Note(?:\s*\*\*)?\s*:?-?\s*(.*)$/i;

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (/\.(md|mdx)$/i.test(entry.name)) {
      yield full;
    }
  }
}

function transform(content) {
  const lines = content.split(/\r?\n/);
  const out = [];
  let i = 0;
  let changed = false;

  while (i < lines.length) {
    const startMatch = lines[i].match(NOTE_START_RE);
    if (startMatch) {
      const noteLines = [];
      const inlineRemainder = (startMatch[1] || '').trim();
      if (inlineRemainder) noteLines.push(inlineRemainder);
      i++;
      // optional blank blockquote line
      if (i < lines.length && /^>\s*$/.test(lines[i])) i++;

      while (i < lines.length && /^>\s?/.test(lines[i])) {
        noteLines.push(lines[i].replace(/^>\s?/, ''));
        i++;
      }

      const inner = noteLines.join('\n');
      out.push('<Note title="Note">');
      out.push(inner);
      out.push('</Note>');
      changed = true;
      continue;
    }

    out.push(lines[i]);
    i++;
  }

  return { content: out.join('\n'), changed };
}

const touched = [];
for (const file of walk(path.join(ROOT))) {
  const before = fs.readFileSync(file, 'utf8');
  const { content: after, changed } = transform(before);
  if (changed) {
    touched.push(file);
    if (!DRY) fs.writeFileSync(file, after, 'utf8');
  }
}

if (DRY) {
  console.log(`[fix-notes] ${touched.length} files would change`);
  touched.forEach(f => console.log(`- ${path.relative(ROOT, f)}`));
} else {
  console.log(`[fix-notes] Updated ${touched.length} files`);
}


