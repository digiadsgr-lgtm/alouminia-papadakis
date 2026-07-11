const https = require('https');

const BASE_URL = 'https://alouminia-papadakis.gr';

const urlsToTest = [
  `${BASE_URL}/el`,
  `${BASE_URL}/el/blog/vioklimatiki-pergola-i-tentopergola`,
  `${BASE_URL}/en/blog/vioklimatiki-pergola-i-tentopergola`,
  `${BASE_URL}/el/blog/exoikonomo-2026-koufomata-kriti`,
  `${BASE_URL}/el/blog/energeiaka-koufomata-alouminiou-ti-na-prosexete`,
  `${BASE_URL}/el/blog/times-koufomata-alouminiou-odigos-kostous`,
  `${BASE_URL}/el/blog/antikatastasi-koufomaton-rethymno-vimata`
];

async function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      const vercelId = res.headers['x-vercel-id'] || 'unknown';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ html: data, vercelId }));
    }).on('error', reject);
  });
}

async function verify() {
  console.log('Fetching production pages...');
  const results = {};
  let dplId = 'unknown';

  for (const url of urlsToTest) {
    const res = await fetchUrl(url);
    results[url] = res.html;
    if (res.vercelId !== 'unknown') dplId = res.vercelId;
  }

  console.log(`\nDeployment ID (x-vercel-id): ${dplId}`);
  console.log('\n--- VERIFICATION RESULTS ---\n');

  const printResult = (name, passed, evidence) => {
    console.log(`[${passed ? 'PASS' : 'FAIL'}] ${name}`);
    console.log(`      Proof: ${evidence}`);
  };

  const pergolaHtml = results[`${BASE_URL}/el/blog/vioklimatiki-pergola-i-tentopergola`];
  const pergolaTextOnly = pergolaHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
  
  const words = pergolaTextOnly.trim().split(/\s+/).length;
  printResult('Word count >= 1000 on Pergola EL', words >= 1000, `${words} words`);

  let faqMissing = false;
  const articles = urlsToTest.slice(1);
  for (const url of articles) {
    if (!results[url].includes('"FAQPage"')) faqMissing = true;
  }
  printResult('FAQPage schema on all articles', !faqMissing, faqMissing ? 'Missing on some' : 'Found on all');

  let phoneFoundCount = 0;
  for (const url of urlsToTest) {
    const matches = results[url].match(/tel:2831023897/g);
    if (matches) phoneFoundCount += matches.length;
  }
  printResult('Old phone tel:2831023897 count = 0', phoneFoundCount === 0, `Found ${phoneFoundCount} times`);

  const forbiddenMatches = (pergolaTextOnly.match(/100%|Μηδενικές/g) || []).length;
  printResult('Forbidden words (100%, Μηδενικές) count = 0 in text', forbiddenMatches === 0, `Found ${forbiddenMatches} matches in stripped text`);

  const hasIdH2 = pergolaHtml.includes('<h2 id=');
  const hasTOC = pergolaHtml.includes('Πίνακας Περιεχομένων');
  const hasRelated = pergolaHtml.includes('Σχετικά Άρθρα');
  const hasCTA = pergolaHtml.includes('Δωρεάν Μελέτη');
  const hasAuthor = pergolaHtml.includes('Συντάκτης');
  
  const templatePass = hasIdH2 && hasTOC && hasRelated && hasCTA && hasAuthor;
  printResult('Template elements (H2 id, TOC, CTA, Author, Related)', templatePass, 
    `H2 id: ${hasIdH2}, TOC: ${hasTOC}, CTA: ${hasCTA}, Author: ${hasAuthor}, Related: ${hasRelated}`);
}

verify().catch(console.error);
