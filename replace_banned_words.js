const fs = require('fs');
const replacements = [
  {
    file: 'src/app/[lang]/services/koufomata-alouminiou-rethymno/page.tsx',
    find: 'Η Απόλυτη Επιλογή Αναβάθμισης',
    replace: 'Η Κορυφαία Επιλογή Αναβάθμισης'
  },
  {
    file: 'src/app/[lang]/services/pergoles-rethymno-kriti/page.tsx',
    find: 'Απόλυτα. Οι βιοκλιματικές',
    replace: 'Βεβαίως. Οι βιοκλιματικές'
  },
  {
    file: 'src/app/[lang]/services/pergoles-rethymno-kriti/page.tsx',
    find: 'απόλυτη σταθερότητα',
    replace: 'μέγιστη σταθερότητα'
  },
  {
    file: 'src/app/[lang]/services/sidiros-kataskeves-rethymno/page.tsx',
    find: 'Absolute Mechanical Supremacy',
    replace: 'Top Mechanical Supremacy'
  },
  {
    file: 'src/app/[lang]/services/sidiros-kataskeves-rethymno/page.tsx',
    find: 'Η Απόλυτη Μηχανική Υπεροχή',
    replace: 'Κορυφαία Μηχανική Υπεροχή'
  },
  {
    file: 'src/app/[lang]/services/smart-home-rethymno/page.tsx',
    find: 'απόλυτα φιλικά',
    replace: 'εξαιρετικά φιλικά'
  },
  {
    file: 'src/app/[lang]/services/smart-home-rethymno/page.tsx',
    find: 'Απόλυτος Έλεγχος & Ασφάλεια',
    replace: 'Πλήρης Έλεγχος & Ασφάλεια'
  },
  {
    file: 'src/app/[lang]/systimata-alumil/page.tsx',
    find: 'απόλυτη ενοποίηση',
    replace: 'πλήρη ενοποίηση'
  },
  {
    file: 'src/components/HomeEL.tsx',
    find: 'Η Απόλυτη Ασφάλεια',
    replace: 'Κορυφαία Ασφάλεια'
  },
  {
    file: 'src/components/InsulationSimulator.tsx',
    find: 'Απόλυτη Ησυχία',
    replace: 'Πλήρης Ησυχία'
  },
  {
    file: 'src/data/articles.ts',
    find: 'απόλυτη ειλικρίνεια',
    replace: 'πλήρη ειλικρίνεια'
  },
  {
    file: 'src/data/projects.ts',
    find: 'ενοποιούν απόλυτα',
    replace: 'ενοποιούν πλήρως'
  },
  {
    file: 'src/data/systems.ts',
    find: 'Καλύπτει απόλυτα',
    replace: 'Καλύπτει πλήρως'
  },
  {
    file: 'src/data/systems.ts',
    find: 'απαιτεί απόλυτη αλφαδιά',
    replace: 'απαιτεί άριστη αλφαδιά'
  },
  {
    file: 'src/data/systems.ts',
    find: 'απόλυτη ενοποίηση',
    replace: 'πλήρη ενοποίηση'
  },
  {
    file: 'src/data/systems.ts',
    find: 'απόλυτο minimal',
    replace: 'κορυφαίο minimal'
  }
];

let success = true;
for (const r of replacements) {
  try {
    let content = fs.readFileSync(r.file, 'utf8');
    if (content.includes(r.find)) {
      content = content.split(r.find).join(r.replace);
      fs.writeFileSync(r.file, content, 'utf8');
      console.log(`Replaced in ${r.file}`);
    } else {
      console.log(`String not found in ${r.file}: ${r.find}`);
    }
  } catch(e) {
    console.error(`Error processing ${r.file}`, e);
    success = false;
  }
}
if (!success) process.exit(1);
