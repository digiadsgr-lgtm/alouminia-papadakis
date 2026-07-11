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

async function runVerification() {
  console.log('=== FIX VERIFICATION ===\n');
  
  process.stdout.write('Fetching production /el... ');
  const home = await fetchPage('/el');
  if (home.status === 200) {
    console.log('OK');
  } else {
    console.log('FAILED to fetch');
    return;
  }
  
  const rawHtml = home.data;

  // Check 1: ContactForm always visible
  process.stdout.write('CHECK 1: Contact Form SSR (name="honeypot" & select)... ');
  if (rawHtml.includes('name="honeypot"') && rawHtml.includes('<select')) {
    console.log('PASS');
  } else {
    console.log('FAIL (Form fields missing in SSR)');
  }

  // Check 2: ProtectedEmail
  process.stdout.write('CHECK 2: ProtectedEmail Encoding... ');
  if (!rawHtml.includes('gpapadakisret') && rawHtml.includes('&#103;&#112;&#97;&#112;&#97;&#100;&#97;&#107;&#105;&#115;&#114;&#101;&#116;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;')) {
    console.log('PASS (No plaintext email + entity encoding found)');
  } else {
    console.log('FAIL');
  }

  // Check 3: Copy Regressions
  process.stdout.write('CHECK 3a: Έως 50% Χαμηλότεροι Λογαριασμοί... ');
  if (rawHtml.includes('Έως 50% Χαμηλότεροι Λογαριασμοί')) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }

  process.stdout.write('CHECK 3b: Οργανωμένη Παραγωγή... ');
  if (rawHtml.includes('Οργανωμένη Παραγωγή')) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }

  process.stdout.write('CHECK 3c: και κοιμηθείτε ήσυχοι... ');
  if (rawHtml.includes('και κοιμηθείτε ήσυχοι')) {
    console.log('PASS');
  } else {
    console.log('FAIL');
  }
}

runVerification();
