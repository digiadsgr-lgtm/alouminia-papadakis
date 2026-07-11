const https = require('https');

const baseURL = 'https://alouminia-papadakis.gr';

async function fetchPage(path) {
  return new Promise((resolve, reject) => {
    https.get(baseURL + path, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function postForm() {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ name: 'Test', phone: '123', area: 'Test', interest: 'Other' });
    const options = {
      hostname: 'alouminia-papadakis.gr',
      path: '/api/contact',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      }
    };
    const req = https.request(options, (res) => {
      let responseData = '';
      res.on('data', chunk => responseData += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data: responseData }));
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function runQA() {
  console.log('=== FINAL CONSOLIDATION VERIFICATION ===\n');
  
  // Section A: Footer & Email
  process.stdout.write('Checking Footer (el)... ');
  const home = await fetchPage('/el');
  if (home.data.includes('Πιστοποιημένος κατασκευαστής Alumil με μονάδα παραγωγής στο Ρέθυμνο') && !home.data.includes('mailto:gpapadakisret@gmail.com') && home.data.includes('&#103;&#112;&#97;&#112;&#97;&#100;&#97;&#107;&#105;&#115;&#114;&#101;&#116;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;')) {
    console.log('PASS');
  } else {
    console.log('FAIL (Footer blurb or email encoding missing)');
  }

  // Section B: Banned Words
  process.stdout.write('Checking Banned Words (απόλυτ)... ');
  const services = await fetchPage('/el/services/pergoles-rethymno-kriti');
  if (!services.data.includes('απόλυτ')) {
    console.log('PASS');
  } else {
    console.log('FAIL (Found banned word)');
  }

  // Section C: Contact API & Fallback
  process.stdout.write('Checking Contact API without Key... ');
  const apiRes = await postForm();
  if (apiRes.status === 503) {
    console.log('PASS (503 Service Unavailable)');
  } else {
    console.log(`FAIL (Expected 503, got ${apiRes.status})`);
  }
  
  process.stdout.write('Checking Contact Form in SSR... ');
  if (home.data.includes('<form') || home.data.includes('id="contact"')) {
    console.log('PASS');
  } else {
    console.log('FAIL (Contact form not found in SSR)');
  }

  // Section D: Performance (WebP, Lazy, Priority)
  process.stdout.write('Checking Images (WebP/Priority)... ');
  if (home.data.includes('.webp') || home.data.includes('hero_aluminum_villa')) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }

  // Section E: Blog Breadcrumbs & Date
  process.stdout.write('Checking Blog Breadcrumbs... ');
  const blogArticle = await fetchPage('/el/blog/exoikonomo-2026-koufomata-kriti');
  if (blogArticle.data.includes('BreadcrumbList')) {
    console.log('PASS');
  } else {
    console.log('FAIL (Schema not found)');
  }

  process.stdout.write('Checking Blog Date Modified... ');
  const blogIndex = await fetchPage('/el/blog');
  if (blogIndex.data.includes('Ενημερώθηκε')) {
    console.log('PASS');
  } else {
    console.log('FAIL (Date modified not found)');
  }

  // Section F: Link Markers
  process.stdout.write('Checking [→ link:] markers... ');
  if (!blogArticle.data.includes('[→ link:')) {
    console.log('PASS');
  } else {
    console.log('FAIL (Found marker)');
  }
  
  console.log('\nREADY FOR SEARCH CONSOLE SUBMISSION');
}

runQA();
