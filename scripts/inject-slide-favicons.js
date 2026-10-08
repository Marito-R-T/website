import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const FAVICON_SNIPPET = `  <!-- Favicon Neo-Brutalista 'M' -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">`;

function getHtmlFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

function injectFaviconToFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already injected
  if (content.includes('/favicon.svg') || content.includes('/favicon.ico')) {
    console.log(`- Already has favicon: ${path.relative(rootDir, filePath)}`);
    return false;
  }

  // Inject before </head> or after </title>
  if (content.includes('</title>')) {
    content = content.replace('</title>', `</title>\n\n${FAVICON_SNIPPET}`);
  } else if (content.includes('</head>')) {
    content = content.replace('</head>', `${FAVICON_SNIPPET}\n</head>`);
  } else {
    console.warn(`! No <head> tag found in: ${path.relative(rootDir, filePath)}`);
    return false;
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Injected favicon into: ${path.relative(rootDir, filePath)}`);
  return true;
}

const targetDirs = [
  path.join(rootDir, 'public', 'slides'),
  path.join(rootDir, 'presentaciones_ejemplo')
];

let totalInjected = 0;
for (const dir of targetDirs) {
  const files = getHtmlFiles(dir);
  for (const file of files) {
    if (injectFaviconToFile(file)) {
      totalInjected++;
    }
  }
}

console.log(`\nFinished checking slides. Injected favicon into ${totalInjected} file(s).`);
