const fs = require('fs');

const filesToVerify = [
  '.next/server/app/de.html',
  '.next/server/app/de/services/koufomata-alouminiou-rethymno.html',
  '.next/server/app/fr.html'
];

function extractMeta(filepath) {
  if (!fs.existsSync(filepath)) {
    console.log(filepath + ' not found');
    return;
  }
  const content = fs.readFileSync(filepath, 'utf8');
  
  const headMatch = content.match(/<head[^>]*>(.*?)<\/head>/is);
  if (!headMatch) {
    console.log('No <head> found in ' + filepath);
    return;
  }
  const head = headMatch[1];
  
  const titleMatch = head.match(/<title[^>]*>(.*?)<\/title>/is);
  const title = titleMatch ? titleMatch[1] : 'No title';
  
  const canonicalMatch = head.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/is);
  const canonical = canonicalMatch ? canonicalMatch[1] : 'No canonical';
  
  console.log('--- ' + filepath + ' ---');
  console.log('Title: ' + title);
  console.log('Canonical: ' + canonical);
}

for (const f of filesToVerify) {
  extractMeta(f);
}
