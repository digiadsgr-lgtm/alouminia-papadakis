const { execSync } = require('child_process');

function runCurl(url) {
  try {
    const cmd = `curl.exe -sL -H "Cache-Control: no-cache" -H "User-Agent: SEO-Audit-Bot" ${url}`;
    return execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'], maxBuffer: 10 * 1024 * 1024 });
  } catch (e) {
    return e.stdout ? e.stdout.toString() : '';
  }
}

function runCurlI(url, extraHeader = '') {
  try {
    const cmd = `curl.exe -sI -H "Cache-Control: no-cache" -H "User-Agent: SEO-Audit-Bot" ${extraHeader} ${url}`;
    return execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'], maxBuffer: 10 * 1024 * 1024 });
  } catch (e) {
    return e.stdout ? e.stdout.toString() : '';
  }
}

function grepLine(text, regex) {
  const lines = text.split(/\r?\n/);
  return lines.filter(l => regex.test(l)).join('\n');
}

function grepO(text, regex) {
  let matches = [];
  let match;
  const globalRegex = new RegExp(regex, 'g');
  while ((match = globalRegex.exec(text)) !== null) {
    matches.push(match[0]);
  }
  return matches.join('\n');
}

console.log('=== CHECK 0: DEPLOYMENT FRESHNESS ===');
const elRaw = runCurl('https://alouminia-papadakis.gr/el');
const dplMatches = grepO(elRaw, /dpl_[A-Za-z0-9]*/);
console.log(dplMatches.split('\n').slice(0, 3).join('\n'));

console.log('\n=== CHECK 1: CANONICAL = SELF ===');
const urls1 = [
  'https://alouminia-papadakis.gr/el',
  'https://alouminia-papadakis.gr/el/services/koufomata-alouminiou-rethymno',
  'https://alouminia-papadakis.gr/el/services/pergoles-rethymno-kriti',
  'https://alouminia-papadakis.gr/el/services/portes-asfaleias-rethymno',
  'https://alouminia-papadakis.gr/de',
  'https://alouminia-papadakis.gr/de/services/koufomata-alouminiou-rethymno',
  'https://alouminia-papadakis.gr/fr',
  'https://alouminia-papadakis.gr/nl',
  'https://alouminia-papadakis.gr/el/blog',
  'https://alouminia-papadakis.gr/el/blog/exoikonomo-2026-koufomata-kriti',
  'https://alouminia-papadakis.gr/en/blog/exoikonomo-2026-koufomata-kriti'
];
for (const u of urls1) {
  const raw = runCurl(u);
  console.log(`URL: ${u}`);
  console.log(grepO(raw, /<link rel="canonical"[^>]*>/));
}

console.log('\n=== CHECK 2: PER-PAGE METADATA ===');
for (const u of urls1) {
  const raw = runCurl(u);
  console.log(`URL: ${u}`);
  console.log(grepLine(raw, /<title/));
  console.log(grepLine(raw, /og:title/));
  console.log(grepLine(raw, /og:url/));
  console.log(grepLine(raw, /name="description"/));
}

console.log('\n=== CHECK 3: HREFLANG ===');
for (const u of urls1) {
  const raw = runCurl(u);
  console.log(`URL: ${u}`);
  const matches = grepO(raw, /hreflang="[^"]*"/).split('\n');
  const counts = {};
  matches.forEach(m => {
    if(m) counts[m] = (counts[m] || 0) + 1;
  });
  for (const [k, v] of Object.entries(counts).sort()) {
    console.log(`   ${v} ${k}`);
  }
}

console.log('\n=== CHECK 4: FAQ ΣΤΟ SSR HTML ===');
const faqElRaw = runCurl('https://alouminia-papadakis.gr/el/services/koufomata-alouminiou-rethymno');
console.log('grep -c πολυαμίδιο: ' + (faqElRaw.match(/πολυαμίδιο/g) || []).length);
console.log(grepO(faqElRaw, /"@type":"FAQPage"/));

const faqDeRaw = runCurl('https://alouminia-papadakis.gr/de/services/koufomata-alouminiou-rethymno');
console.log('grep -c Aluminiumfenster: ' + (faqDeRaw.match(/Aluminiumfenster/g) || []).length);
console.log(grepO(faqDeRaw, /"@type":"FAQPage"/));

console.log('\n=== CHECK 5: JSON-LD ΕΓΚΥΡΟΤΗΤΑ ===');
const urls5 = [
  'https://alouminia-papadakis.gr/el',
  'https://alouminia-papadakis.gr/el/services/koufomata-alouminiou-rethymno',
  'https://alouminia-papadakis.gr/el/blog/exoikonomo-2026-koufomata-kriti'
];
for (const u of urls5) {
  const raw = runCurl(u);
  console.log(`URL: ${u}`);
  const scripts = [...raw.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  for (const s of scripts) {
    try {
      const obj = JSON.parse(s[1]);
      if (Array.isArray(obj)) {
        console.log('Valid JSON array. Types: ' + obj.map(o => o['@type']).join(', '));
      } else {
        let extra = '';
        if (obj['@type'] === 'Article') extra = ` Date: ${obj.datePublished}, Lang: ${obj.inLanguage}`;
        if (obj['@type'] === 'HomeAndConstructionBusiness') extra = ` Tel: ${obj.telephone}`;
        console.log(`Valid JSON object. Type: ${obj['@type']}${extra}`);
      }
    } catch (e) {
      console.log('INVALID JSON-LD: ' + e.message);
    }
  }
}

console.log('\n=== CHECK 6: SITEMAP & REDIRECTS ===');
const smRaw = runCurl('https://alouminia-papadakis.gr/sitemap.xml');
console.log('Sitemap locales:');
const locs = grepO(smRaw, /<loc>(.*?)<\/loc>/).split('\n');
console.log(' Total: ' + locs.length);
console.log(' de/: ' + locs.filter(l => l.includes('/de/')).length);
console.log(' fr/: ' + locs.filter(l => l.includes('/fr/')).length);
console.log(' nl/: ' + locs.filter(l => l.includes('/nl/')).length);
console.log(' el/blog/: ' + locs.filter(l => l.includes('/el/blog/')).length);
console.log(' de/blog/: ' + locs.filter(l => l.includes('/de/blog/')).length);
console.log(' fr/blog/: ' + locs.filter(l => l.includes('/fr/blog/')).length);
console.log(' nl/blog/: ' + locs.filter(l => l.includes('/nl/blog/')).length);

const redirDeBlog = runCurlI('https://alouminia-papadakis.gr/de/blog/exoikonomo-2026-koufomata-kriti');
console.log(grepLine(redirDeBlog, /^HTTP/));
console.log(grepLine(redirDeBlog, /^Location:/i));

const root1 = runCurlI('https://alouminia-papadakis.gr/');
console.log('Root:');
console.log(grepLine(root1, /^HTTP/));
console.log(grepLine(root1, /^Location:/i));

const root2 = runCurlI('https://www.alouminia-papadakis.gr/');
console.log('www:');
console.log(grepLine(root2, /^HTTP/));
console.log(grepLine(root2, /^Location:/i));

const asdf = runCurlI('https://alouminia-papadakis.gr/el/asdf123');
console.log('404 test:');
console.log(grepLine(asdf, /^HTTP/));

console.log('\n=== CHECK 7: ROBOTS ===');
const robRaw = runCurl('https://alouminia-papadakis.gr/robots.txt');
console.log(robRaw);

console.log('\n=== CHECK 8: COPY FIXES LIVE ===');
console.log('grep -c αλεξίσφαιρα: ' + (elRaw.match(/αλεξίσφαιρα/g) || []).length);
console.log('grep -c Απόρθητες: ' + (elRaw.match(/Απόρθητες/g) || []).length);
console.log('grep -c execution risk: ' + (elRaw.match(/execution risk/g) || []).length);
console.log('grep -c operational maturity: ' + (elRaw.match(/operational maturity/g) || []).length);
console.log('grep -c Μηδενίστε: ' + (elRaw.match(/Μηδενίστε/g) || []).length);
console.log('grep -c πόλυτ: ' + (elRaw.match(/πόλυτ/g) || []).length);

console.log('\n=== CHECK 9: NAVIGATION & COMPONENTS ΣΤΟ SSR ===');
console.log(grepO(elRaw, /href="\/el\/blog"/).slice(0, 100));
console.log(grepLine(elRaw, /Seaside Class/).trim().slice(0, 150));
console.log(grepLine(elRaw, /38mm/).trim().slice(0, 150));
console.log(grepO(elRaw, /tel:\+302831023897/).slice(0, 100));
console.log(grepLine(elRaw, /Deutsch/).trim().slice(0, 150));
console.log(grepO(elRaw, /href="\/el\/oroi-xrisis"/).slice(0, 100));
console.log(grepO(elRaw, /href="\/el\/politiki-aporritou"/).slice(0, 100));
const gtmIdx = elRaw.indexOf('gtm.js');
const denIdx = elRaw.indexOf('denied');
console.log('gtm index: ' + gtmIdx + ', denied index: ' + denIdx);

console.log('\n=== CHECK 10: SUGGESTION BANNER — ΟΧΙ AUTO-REDIRECT ===');
const deHeaders = runCurlI('https://alouminia-papadakis.gr/el', '-H "Accept-Language: de-DE,de;q=0.9"');
console.log('DE: ' + grepLine(deHeaders, /^HTTP/));
const nlHeaders = runCurlI('https://alouminia-papadakis.gr/el', '-H "Accept-Language: nl-NL,nl;q=0.9"');
console.log('NL: ' + grepLine(nlHeaders, /^HTTP/));
