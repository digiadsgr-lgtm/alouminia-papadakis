const fs = require('fs');

const files = [
  'src/components/HomeEL.tsx',
  'src/components/HomeEN.tsx',
  'src/components/HomeDE.tsx',
  'src/components/HomeFR.tsx',
  'src/components/HomeNL.tsx'
];

files.forEach(f => {
  let text = fs.readFileSync(f, 'utf8');
  
  // a)
  text = text.replace('100% Ενεργειακή Αυτονομία', 'Έως 50% Χαμηλότεροι Λογαριασμοί');
  text = text.replace('100% Energy Autonomy', 'Up to 50% Lower Bills');
  text = text.replace('100 % Energieautonomie', 'Bis zu 50 % niedrigere Rechnungen');
  text = text.replace('Autonomie énergétique à 100 %', "Jusqu'à 50 % de factures en moins");
  text = text.replace('100% energieautonomie', 'Tot 50% lagere rekeningen');
  
  // b)
  if (f.includes('HomeEL.tsx')) {
    text = text.replace('structured Workflow', 'Οργανωμένη Παραγωγή');
  }
  
  // c)
  text = text.replace('μην φοβάστε απολύτως τίποτα', 'και κοιμηθείτε ήσυχοι');
  
  // Inject ContactForm if missing (fix for missing form)
  if (!text.includes('<ContactForm')) {
    text = text.replace(
      "import Link from 'next/link'",
      "import Link from 'next/link'\nimport ContactForm from './ContactForm'\nimport ProtectedEmail from './ProtectedEmail'"
    );
    const langMatch = f.match(/Home(EL|EN|DE|FR|NL)/);
    const lang = langMatch ? langMatch[1].toLowerCase() : 'el';
    
    text = text.replace(
      /<\/div>\s*<\/div>\s*<\/motion\.div>\s*<\/section>/,
      `</div>\n          </div>\n          <div className="mt-16 text-left relative z-20">\n            <ContactForm lang="${lang}" />\n          </div>\n        </motion.div>\n      </section>`
    );
  }
  
  fs.writeFileSync(f, text, 'utf8');
  console.log('Fixed ' + f);
});
