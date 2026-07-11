const http = require('http');

const urls = [
  'http://localhost:3000/de',
  'http://localhost:3000/de/services/koufomata-alouminiou-rethymno',
  'http://localhost:3000/fr'
];

function fetchAndExtractMeta(url) {
  http.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      const headMatch = data.match(/<head[^>]*>(.*?)<\/head>/is);
      if (!headMatch) {
        console.log('No <head> found in ' + url);
        return;
      }
      const head = headMatch[1];
      
      const titleMatch = head.match(/<title[^>]*>(.*?)<\/title>/is);
      const title = titleMatch ? titleMatch[1] : 'No title';
      
      const canonicalMatch = head.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/is);
      const canonical = canonicalMatch ? canonicalMatch[1] : 'No canonical';
      
      console.log('--- ' + url + ' ---');
      console.log('Title: ' + title);
      console.log('Canonical: ' + canonical);
    });
  }).on('error', (err) => {
    console.log('Error: ' + err.message);
  });
}

for (const u of urls) {
  fetchAndExtractMeta(u);
}
