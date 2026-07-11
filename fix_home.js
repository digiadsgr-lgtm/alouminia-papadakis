const fs = require('fs');

const files = [
  { path: 'src/components/HomeEL.tsx', lang: 'el' },
  { path: 'src/components/HomeEN.tsx', lang: 'en' },
  { path: 'src/components/HomeDE.tsx', lang: 'de' },
  { path: 'src/components/HomeFR.tsx', lang: 'fr' },
  { path: 'src/components/HomeNL.tsx', lang: 'nl' }
];

for (const f of files) {
  let text = fs.readFileSync(f.path, 'utf8');

  if (!text.includes('<ContactForm')) {
    const searchString = `            </div>\n          </div>`;
    const replaceString = `            </div>\n          </div>\n          <div className="mt-16 text-left">\n            <ContactForm lang="${f.lang}" />\n          </div>`;
    text = text.replace(searchString, replaceString);
  }

  // Also fix "Μηδενικό delays" in EL
  if (f.lang === 'el') {
    text = text.replace('Μηδενικό delays', 'Άμεση Παράδοση');
  }

  fs.writeFileSync(f.path, text, 'utf8');
  console.log(`Updated form in ${f.path}`);
}
