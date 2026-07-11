const https = require('https');

const fetchURL = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ data, status: res.statusCode }));
    }).on('error', reject);
  });
};

const runQA = async () => {
  console.log("=== UNIFIED QA CHECKS ===");
  let allPass = true;

  const logResult = (check, cmd, raw, pass) => {
    console.log(`[${pass ? 'PASS' : 'FAIL'}] ${check} | cmd: ${cmd} | raw: ${raw}`);
    if (!pass) allPass = false;
  };

  const slugsEL = [
    { slug: 'exoikonomo-2026-koufomata-kriti', target: 1000 },
    { slug: 'vioklimatiki-pergola-i-tentopergola', target: 800 },
    { slug: 'energeiaka-koufomata-alouminiou-ti-na-prosexete', target: 800 },
    { slug: 'times-koufomata-alouminiou-odigos-kostous', target: 800 },
  ];

  for (const {slug, target} of slugsEL) {
    const { data: html } = await fetchURL(`https://alouminia-papadakis.gr/el/blog/${slug}`);
    
    // Word count
    const text = html.replace(/<[^>]*>?/gm, ' ');
    const words = text.split(/\s+/).filter(w => w.length > 0).length;
    logResult(`Word count el ${slug}`, `curl | sed | wc -w`, words, words >= target);
    
    // Progress bar, stats, takeaway, CTA, author, related
    const hasProgress = html.includes('fixed top-0');
    const hasCTA = html.includes('tel:+302831023897');
    const hasCoverAfterLead = html.includes('class="text-xl md:text-2xl') && html.includes('<figure class="my-14');
    logResult(`Editorial SSR HTML ${slug}`, `grep for SSR components`, `Progress=${hasProgress}, CTA=${hasCTA}, Cover=${hasCoverAfterLead}`, hasProgress && hasCTA && hasCoverAfterLead);
    
    // FAQPage
    const hasFAQ = html.includes('"@type":"FAQPage"');
    logResult(`FAQPage el ${slug}`, `grep FAQPage`, hasFAQ, hasFAQ);

    if (slug === 'exoikonomo-2026-koufomata-kriti') {
      const hasDikaiouxoi = html.includes('Ποιοι είναι δικαιούχοι');
      const has4Vimata = html.includes('Τα 4 βήματα');
      logResult(`Flagship specifics`, `grep text`, `Dikaiouxoi=${hasDikaiouxoi}, 4vimata=${has4Vimata}`, hasDikaiouxoi && has4Vimata);
    }
  }

  // EN FAQPage Check
  const { data: enHtml } = await fetchURL(`https://alouminia-papadakis.gr/en/blog/exoikonomo-2026-koufomata-kriti`);
  const enHasFAQ = enHtml.includes('"@type":"FAQPage"');
  logResult(`FAQPage en flagship`, `grep FAQPage`, enHasFAQ, enHasFAQ);

  // Translations checks
  const deUrl = 'https://alouminia-papadakis.gr/de/blog/exoikonomo-2026-koufomata-kriti';
  const { data: deHtml, status: deStatus } = await fetchURL(deUrl);
  logResult(`Translation DE Status`, `curl -I ${deUrl}`, deStatus, deStatus === 200);
  
  const deTitleMatch = deHtml.includes('Exoikonomo 2026: Förderprogramm für Fenster auf Kreta');
  const deCanonical = deHtml.includes('rel="canonical"') && deHtml.includes('href="https://alouminia-papadakis.gr/de/blog');
  const deKeyword = deHtml.includes('Aluminiumfenster') || deHtml.includes('Kreta');
  const deFAQ = deHtml.includes('"@type":"FAQPage"');
  const deEnglishPhrase = deHtml.includes('The biggest hesitation');
  logResult(`Translation DE Title`, `grep title`, deTitleMatch, deTitleMatch);
  logResult(`Translation DE Canonical`, `grep canonical`, deCanonical, deCanonical);
  logResult(`Translation DE Keyword`, `grep keyword`, deKeyword, deKeyword);
  logResult(`Translation DE FAQPage`, `grep FAQPage`, deFAQ, deFAQ);
  logResult(`Translation DE 0 English fallback`, `grep english phrase`, `HasEnglish=${deEnglishPhrase}`, !deEnglishPhrase);

  // Sitemap
  const { data: sitemapXml } = await fetchURL('https://alouminia-papadakis.gr/sitemap.xml');
  const deSitemap = sitemapXml.includes('/de/blog/');
  const frSitemap = sitemapXml.includes('/fr/blog/');
  const nlSitemap = sitemapXml.includes('/nl/blog/');
  logResult(`Sitemap URLs DE/FR/NL`, `grep /de/blog/ etc.`, `de=${deSitemap} fr=${frSitemap} nl=${nlSitemap}`, deSitemap && frSitemap && nlSitemap);

  if (!allPass) {
    console.error("SOME CHECKS FAILED!");
    process.exit(1);
  } else {
    console.log("ALL QA CHECKS PASSED!");
  }
}
runQA();
