const https = require('https');
const http = require('http');

async function fetchUrl(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const defaultHeaders = {
      'Cache-Control': 'no-cache',
      'User-Agent': 'SEO-Audit-Bot'
    };
    const options = {
      headers: { ...defaultHeaders, ...headers }
    };

    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, options, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirect
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const urlObj = new URL(url);
          redirectUrl = urlObj.origin + redirectUrl;
        }
        resolve({
          status: res.statusCode,
          headers: res.headers,
          redirectUrl: redirectUrl,
          body: ''
        });
        return;
      }

      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve({
        status: res.statusCode,
        headers: res.headers,
        body: data
      }));
    });
    
    req.on('error', (e) => reject(e));
  });
}

async function fetchFollowRedirects(url, headers = {}) {
  let currentUrl = url;
  let count = 0;
  while (count < 5) {
    const res = await fetchUrl(currentUrl, headers);
    if (res.redirectUrl) {
      currentUrl = res.redirectUrl;
      count++;
    } else {
      return res;
    }
  }
  return await fetchUrl(currentUrl, headers);
}

async function run() {
  console.log('=== CHECK 0: DEPLOYMENT FRESHNESS ===');
  const resEl = await fetchFollowRedirects('https://alouminia-papadakis.gr/el');
  const dplMatches = resEl.body.match(/dpl_[A-Za-z0-9]+/g) || [];
  const uniqueDpls = [...new Set(dplMatches)].slice(0, 3);
  console.log(`dpl matched: ${uniqueDpls.join(', ') || 'None'}`);
  if (uniqueDpls.includes('dpl_ALw3sTozP3ejQd4gxUN5Tb7UGFAN')) {
    console.log('FAIL: OLD DEPLOYMENT DETECTED. STOPPING.');
    return;
  }

  console.log('\n=== CHECK 1 & 2: CANONICAL AND METADATA ===');
  const urls = [
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

  for (const url of urls) {
    const res = await fetchFollowRedirects(url);
    const body = res.body;
    
    // Canonical
    const canonicalMatch = body.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"[^>]*>/) || body.match(/<link[^>]*href="([^"]*)"[^>]*rel="canonical"[^>]*>/);
    const canonical = canonicalMatch ? canonicalMatch[1] : 'NONE';
    
    // Title
    const titleMatch = body.match(/<title[^>]*>(.*?)<\/title>/is);
    const title = titleMatch ? titleMatch[1] : 'NONE';
    
    // OG Title
    const ogTitleMatch = body.match(/<meta[^>]*property="og:title"[^>]*content="([^"]*)"[^>]*>/) || body.match(/<meta[^>]*content="([^"]*)"[^>]*property="og:title"[^>]*>/);
    const ogTitle = ogTitleMatch ? ogTitleMatch[1] : 'NONE';
    
    // OG URL
    const ogUrlMatch = body.match(/<meta[^>]*property="og:url"[^>]*content="([^"]*)"[^>]*>/) || body.match(/<meta[^>]*content="([^"]*)"[^>]*property="og:url"[^>]*>/);
    const ogUrl = ogUrlMatch ? ogUrlMatch[1] : 'NONE';
    
    // Description
    const descMatch = body.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/) || body.match(/<meta[^>]*content="([^"]*)"[^>]*name="description"[^>]*>/);
    const desc = descMatch ? descMatch[1] : '';
    
    // Hreflangs
    const hrefMatches = [...body.matchAll(/hreflang="([^"]*)"/g)].map(m => m[1]);
    
    console.log(`URL: ${url}`);
    console.log(` Canonical: ${canonical}`);
    console.log(` Title: ${title}`);
    console.log(` OG:Title: ${ogTitle}`);
    console.log(` OG:Url: ${ogUrl}`);
    console.log(` Desc Len: ${desc.length}`);
    console.log(` Hreflangs: ${[...new Set(hrefMatches)].sort().join(', ')}`);
  }

  console.log('\n=== CHECK 4: FAQ ΣΤΟ SSR HTML ===');
  const elFaqRes = await fetchFollowRedirects('https://alouminia-papadakis.gr/el/services/koufomata-alouminiou-rethymno');
  const elPoly = (elFaqRes.body.match(/πολυαμίδιο/g) || []).length;
  const elFaqLd = (elFaqRes.body.match(/"@type":"FAQPage"/g) || []).length;
  console.log(`el/services/koufomata-alouminiou-rethymno -> πολυαμίδιο: ${elPoly}, "@type":"FAQPage": ${elFaqLd}`);

  const deFaqRes = await fetchFollowRedirects('https://alouminia-papadakis.gr/de/services/koufomata-alouminiou-rethymno');
  const deFaqLd = (deFaqRes.body.match(/"@type":"FAQPage"/g) || []).length;
  // Check for some German words like 'Aluminiumfenster'
  const deWords = (deFaqRes.body.match(/Aluminiumfenster/g) || []).length;
  console.log(`de/services/koufomata-alouminiou-rethymno -> Aluminiumfenster: ${deWords}, "@type":"FAQPage": ${deFaqLd}`);

  console.log('\n=== CHECK 5: JSON-LD ΕΓΚΥΡΟΤΗΤΑ ===');
  const pagesToCheckLd = [
    'https://alouminia-papadakis.gr/el',
    'https://alouminia-papadakis.gr/el/services/koufomata-alouminiou-rethymno',
    'https://alouminia-papadakis.gr/el/blog/exoikonomo-2026-koufomata-kriti'
  ];
  for (const p of pagesToCheckLd) {
    const res = await fetchFollowRedirects(p);
    const ldMatches = [...res.body.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
    let types = [];
    let errs = [];
    for (const m of ldMatches) {
      try {
        const obj = JSON.parse(m[1]);
        if (Array.isArray(obj)) {
          obj.forEach(o => types.push(o['@type']));
        } else {
          types.push(obj['@type']);
          if (obj['@type'] === 'Article') {
            types.push(`Date: ${obj.datePublished}, Lang: ${obj.inLanguage}`);
          }
        }
      } catch(e) {
        errs.push('Parse Error');
      }
    }
    console.log(`Page: ${p}`);
    console.log(` Types: ${types.join(', ')}`);
    console.log(` Errors: ${errs.join(', ')}`);
  }

  console.log('\n=== CHECK 6: SITEMAP & REDIRECTS ===');
  const sitemapRes = await fetchFollowRedirects('https://alouminia-papadakis.gr/sitemap.xml');
  const smUrls = [...sitemapRes.body.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  const smTypes = { de: 0, fr: 0, nl: 0, el_blog: 0, de_blog: 0, fr_blog: 0, nl_blog: 0 };
  smUrls.forEach(u => {
    if (u.includes('/de/')) smTypes.de++;
    if (u.includes('/fr/')) smTypes.fr++;
    if (u.includes('/nl/')) smTypes.nl++;
    if (u.includes('/el/blog/')) smTypes.el_blog++;
    if (u.includes('/de/blog/')) smTypes.de_blog++;
    if (u.includes('/fr/blog/')) smTypes.fr_blog++;
    if (u.includes('/nl/blog/')) smTypes.nl_blog++;
  });
  console.log('Sitemap stats:', JSON.stringify(smTypes));

  const redirRes = await fetchUrl('https://alouminia-papadakis.gr/de/blog/exoikonomo-2026-koufomata-kriti');
  console.log(`de/blog redir: Status ${redirRes.status}, Location: ${redirRes.headers.location}`);

  const rootRes1 = await fetchUrl('https://alouminia-papadakis.gr/');
  const rootRes2 = await fetchUrl('https://www.alouminia-papadakis.gr/');
  console.log(`root redir: ${rootRes1.status} -> ${rootRes1.headers.location}`);
  console.log(`www redir: ${rootRes2.status} -> ${rootRes2.headers.location}`);

  const notFoundRes = await fetchUrl('https://alouminia-papadakis.gr/el/asdf123');
  console.log(`404 check: ${notFoundRes.status}`);

  console.log('\n=== CHECK 7: ROBOTS ===');
  const robotsRes = await fetchFollowRedirects('https://alouminia-papadakis.gr/robots.txt');
  console.log('Robots: ' + (robotsRes.body.includes('Sitemap: ') ? 'Has Sitemap' : 'No Sitemap'));

  console.log('\n=== CHECK 8: COPY FIXES LIVE ===');
  const b = resEl.body;
  const count = (str) => (b.match(new RegExp(str, 'g')) || []).length;
  console.log(`αλεξίσφαιρα: ${count('αλεξίσφαιρα')}`);
  console.log(`Απόρθητες: ${count('Απόρθητες')}`);
  console.log(`execution risk: ${count('execution risk')}`);
  console.log(`operational maturity: ${count('operational maturity')}`);
  console.log(`Μηδενίστε: ${count('Μηδενίστε')}`);
  console.log(`πόλυτ: ${count('πόλυτ')}`);

  console.log('\n=== CHECK 9: NAVIGATION & COMPONENTS ΣΤΟ SSR ===');
  console.log(`Link to /el/blog: ${b.includes('href="/el/blog"')}`);
  console.log(`Seaside Class: ${b.includes('Seaside Class')}`);
  console.log(`38mm: ${b.includes('38mm')}`);
  console.log(`Sticky call (tel): ${b.includes('tel:+302831023897')}`);
  console.log(`Lang switcher (Deutsch): ${b.includes('Deutsch')}`);
  console.log(`Terms link: ${b.includes('/el/oroi-xrisis')}`);
  console.log(`Privacy link: ${b.includes('/el/politiki-aporritou')}`);
  
  // Check default denied before GTM
  const gtmIdx = b.indexOf('gtm.js');
  const deniedIdx = b.indexOf('denied');
  console.log(`GTM Index: ${gtmIdx}, Denied Index: ${deniedIdx}, Denied before GTM: ${deniedIdx !== -1 && deniedIdx < gtmIdx}`);

  console.log('\n=== CHECK 10: SUGGESTION BANNER — ΟΧΙ AUTO-REDIRECT ===');
  const noRedirDe = await fetchUrl('https://alouminia-papadakis.gr/el', { 'Accept-Language': 'de-DE,de;q=0.9' });
  const noRedirNl = await fetchUrl('https://alouminia-papadakis.gr/el', { 'Accept-Language': 'nl-NL,nl;q=0.9' });
  console.log(`Accept-Language de -> Status: ${noRedirDe.status}`);
  console.log(`Accept-Language nl -> Status: ${noRedirNl.status}`);

}

run().catch(console.error);
