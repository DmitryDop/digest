import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outDir = path.join(root, "out");
const fontsDir = path.join(root, "public", "fonts");

async function collectFiles(dir, extension) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(fullPath, extension)));
    } else if (entry.name.endsWith(extension)) {
      files.push(fullPath);
    }
  }

  return files;
}

const mimeByExtension = {
  ".woff2": "font/woff2",
};

async function inlineFonts(cssFile) {
  let css = await readFile(cssFile, "utf8");
  const referenced = [...css.matchAll(/url\((['"]?)\/fonts\/([^)'"]+)\1\)/g)];

  for (const [match, quote, fileName] of referenced) {
    const fontPath = path.join(fontsDir, fileName);
    const extension = path.extname(fileName);
    const mime = mimeByExtension[extension];

    if (!mime) {
      throw new Error(`Unsupported font type in ${cssFile}: ${fileName}`);
    }

    try {
      await stat(fontPath);
    } catch {
      throw new Error(`Font referenced by CSS is missing: ${fontPath}`);
    }

    const data = (await readFile(fontPath)).toString("base64");
    css = css.replace(match, `url(${quote}data:${mime};base64,${data}${quote})`);
  }

  await writeFile(cssFile, css);
  return referenced.length;
}

async function makeHtmlPortable(htmlFile) {
  const html = await readFile(htmlFile, "utf8");
  const portable = html
    .replaceAll("/icon.svg?", "icon.svg?")
    .replaceAll('"/icon.svg"', '"icon.svg"');

  await writeFile(htmlFile, portable);
  return portable !== html;
}

try {
  await stat(outDir);
} catch {
  throw new Error('Static export not found. Run "NEXT_EXPORT=1 next build" first.');
}

const cssFiles = await collectFiles(path.join(outDir, "_next"), ".css");
let inlined = 0;

for (const cssFile of cssFiles) {
  inlined += await inlineFonts(cssFile);
}

const htmlFiles = await collectFiles(outDir, ".html");
let rewritten = 0;

for (const htmlFile of htmlFiles) {
  if (await makeHtmlPortable(htmlFile)) {
    rewritten += 1;
  }
}

console.log(
  `Static export prepared: ${inlined} font reference(s) inlined, ${rewritten} HTML file(s) made file://-safe.`,
);
