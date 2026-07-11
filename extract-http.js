const fs = require('fs');
const content = fs.readFileSync('C:\\\\Users\\\\avour\\\\.gemini\\\\antigravity\\\\brain\\\\632e6964-5c2e-4c53-8e7b-29d062a5b0b4\\\\.system_generated\\\\tasks\\\\task-1245.log', 'utf8');
const lines = content.split('\n');
let inCheck1 = false;
let inCheck2 = false;
for (let line of lines) {
  if (line.includes('=== CHECK 1')) inCheck1 = true;
  if (line.includes('=== CHECK 2')) { inCheck1 = false; inCheck2 = true; }
  if (line.includes('=== CHECK 3')) { inCheck2 = false; break; }
  
  if (inCheck1) {
    if (line.startsWith('URL:') || line.includes('<link rel="canonical"')) console.log(line.trim());
  }
  if (inCheck2) {
    if (line.startsWith('URL:')) console.log('\n'+line.trim());
    const titleMatch = line.match(/<title>(.*?)<\/title>/);
    if (titleMatch) console.log('Title: ' + titleMatch[1]);
    const canMatch = line.match(/<link rel="canonical" href="(.*?)"\/>/);
    if (canMatch) console.log('Canonical: ' + canMatch[1]);
  }
}
