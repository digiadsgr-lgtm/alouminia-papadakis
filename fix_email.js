const fs = require('fs');

// Fix Home components
const homeFiles = ['src/components/HomeDE.tsx', 'src/components/HomeEN.tsx', 'src/components/HomeFR.tsx', 'src/components/HomeNL.tsx'];
homeFiles.forEach(f => {
  let text = fs.readFileSync(f, 'utf8');
  text = text.replace(/<a href="mailto:gpapadakisret@gmail\.com"[^>]*>/g, '<a href="tel:+302831023897" className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-2xl">');
  fs.writeFileSync(f, text, 'utf8');
});

// Remove email from layout schema
const layoutPath = 'src/app/[lang]/layout.tsx';
let layoutText = fs.readFileSync(layoutPath, 'utf8');
layoutText = layoutText.replace(/"email": "gpapadakisret@gmail\.com",?\s*/g, '');
fs.writeFileSync(layoutPath, layoutText, 'utf8');

// Replace email in legal pages with <ProtectedEmail />
const legalPages = [
  'src/app/[lang]/oroi-xrisis/page.tsx',
  'src/app/[lang]/politiki-aporritou/page.tsx',
  'src/app/[lang]/privacy-policy/page.tsx',
  'src/app/[lang]/terms-of-use/page.tsx'
];
legalPages.forEach(f => {
  let text = fs.readFileSync(f, 'utf8');
  if (text.includes('gpapadakisret@gmail.com')) {
    // Inject import if needed
    if (!text.includes('ProtectedEmail')) {
      text = text.replace("import Link from 'next/link'", "import Link from 'next/link'\nimport ProtectedEmail from '@/components/ProtectedEmail'");
      // if Link wasn't found
      if (!text.includes('ProtectedEmail')) {
        text = "import ProtectedEmail from '@/components/ProtectedEmail'\n" + text;
      }
    }
    text = text.replace(/gpapadakisret@gmail\.com/g, '<ProtectedEmail />');
    fs.writeFileSync(f, text, 'utf8');
  }
});

console.log('Fixed gpapadakisret occurrences!');
