const fs = require('fs');
const files = ['src/components/HomeEL.tsx', 'src/components/HomeEN.tsx', 'src/components/HomeDE.tsx', 'src/components/HomeFR.tsx', 'src/components/HomeNL.tsx'];
files.forEach(f => {
  let text = fs.readFileSync(f, 'utf8');
  text = text.replace(/import ContactForm from '\.\/ContactForm'\nimport ProtectedEmail from '\.\/ProtectedEmail'\nimport ContactForm from '\.\/ContactForm'\nimport ProtectedEmail from '\.\/ProtectedEmail'/g, "import ContactForm from './ContactForm'\nimport ProtectedEmail from './ProtectedEmail'");
  fs.writeFileSync(f, text, 'utf8');
  console.log('Fixed ' + f);
});
