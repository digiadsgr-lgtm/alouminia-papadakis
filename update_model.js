const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'src', 'data', 'articles.ts');
let content = fs.readFileSync(filepath, 'utf8');

const additions = {
  'vioklimatiki-pergola-i-tentopergola': {
    category: 'Συστήματα Σκίασης',
    keyTakeawayEL: 'Αν επενδύετε στο σπίτι σας, επιθυμείτε μηδενική συντήρηση και θέλετε το ακίνητό σας να κερδίσει σε εμπορική αξία και λειτουργικότητα τον χειμώνα, επιλέξτε βιοκλιματική πέργκολα αλουμινίου.',
    keyTakeawayEN: 'If you are investing in your home, desire zero maintenance, and want your property to gain in commercial value and winter functionality, choose an aluminum bioclimatic pergola.',
    statsEL: [
      { value: '15+', label: 'Χρόνια Ζωής' },
      { value: 'Μηδέν', label: 'Κόστος Συντήρησης' },
      { value: '100%', label: 'Στεγανότητα' }
    ],
    statsEN: [
      { value: '15+', label: 'Years Lifespan' },
      { value: 'Zero', label: 'Maintenance Cost' },
      { value: '100%', label: 'Watertightness' }
    ]
  },
  'exoikonomo-2026-koufomata-kriti': {
    category: 'Ενεργειακή Αναβάθμιση',
    keyTakeawayEL: 'Επιδοτούνται αποκλειστικά θερμοδιακοπτόμενα κουφώματα αλουμινίου με ενεργειακούς υαλοπίνακες.',
    keyTakeawayEN: 'Only thermal-break aluminium systems with energy glazing are eligible.',
    statsEL: [
      { value: 'έως 80%', label: 'Επιδότηση' },
      { value: '0.9', label: 'W/m²K Uw' },
      { value: '30-50%', label: 'Μείωση Κόστους Θέρμανσης' }
    ],
    statsEN: [
      { value: 'up to 80%', label: 'Subsidy' },
      { value: '0.9', label: 'W/m²K Uw' },
      { value: '30-50%', label: 'Heating Cost Reduction' }
    ]
  },
  'energeiaka-koufomata-alouminiou-ti-na-prosexete': {
    category: 'Οδηγός Αγοράς',
    keyTakeawayEL: 'Η ηλεκτροστατική βαφή Seaside Class με ενισχυμένη προεργασία είναι αδιαπραγμάτευτη για ακίνητα σε απόσταση αναπνοής από τη θάλασσα.',
    keyTakeawayEN: 'Electrostatic Seaside Class coating with reinforced pre-treatment is mandatory for properties within reach of sea air.',
    statsEL: [
      { value: '20+', label: 'Χρόνια Επένδυση' },
      { value: '45dB', label: 'Ηχομείωση' },
      { value: '38mm', label: 'Πολυαμίδιο' }
    ],
    statsEN: [
      { value: '20+', label: 'Years Investment' },
      { value: '45dB', label: 'Sound Reduction' },
      { value: '38mm', label: 'Polyamide' }
    ]
  },
  'times-koufomata-alouminiou-odigos-kostous': {
    category: 'Οδηγός Αγοράς',
    keyTakeawayEL: 'Μια προσφορά που είναι 30% φθηνότερη από τον μέσο όρο δεν είναι "ευκαιρία", αλλά συνήθως κρύβει εκπτώσεις στην ποιότητα του υαλοπίνακα, τη βαφή ή τη στεγάνωση.',
    keyTakeawayEN: 'A quote that is 30% cheaper than the average is not a "bargain", but usually hides compromises in glazing quality, coating, or sealing.',
    statsEL: [
      { value: '4.000€', label: 'Ενδεικτική Αφετηρία' },
      { value: '1-3', label: 'Ημέρες Τοποθέτησης' },
      { value: '15-25%', label: 'Κόστος Συρόμενων (Έξτρα)' }
    ],
    statsEN: [
      { value: '€4,000', label: 'Indicative Start' },
      { value: '1-3', label: 'Days Installation' },
      { value: '15-25%', label: 'Sliding Cost (Extra)' }
    ]
  },
  'antikatastasi-koufomaton-rethymno-vimata': {
    category: 'Οδηγός Αγοράς',
    keyTakeawayEL: 'Η αντικατάσταση ολοκληρώνεται χωρίς σκαψίματα και σκόνες σε 1-3 ημέρες, αναβαθμίζοντας άμεσα την αξία του σπιτιού σας.',
    keyTakeawayEN: 'The replacement is completed without digging and dust in 1-3 days, immediately upgrading your home\'s value.',
    statsEL: [
      { value: '1-3', label: 'Ημέρες' },
      { value: 'Μηδέν', label: 'Σκαψίματα' },
      { value: '100%', label: 'Ασφάλεια' }
    ],
    statsEN: [
      { value: '1-3', label: 'Days' },
      { value: 'Zero', label: 'Digging' },
      { value: '100%', label: 'Security' }
    ]
  }
};

for (const slug in additions) {
  const data = additions[slug];
  
  // Find the block for this slug
  const regex = new RegExp(`"slug":\\s*"${slug}"[\\s\\S]*?"faqEN":\\s*\\[[\\s\\S]*?\\]`, 'g');
  
  content = content.replace(regex, (match) => {
    const stringifiedData = `
    "category": ${JSON.stringify(data.category)},
    "keyTakeawayEL": ${JSON.stringify(data.keyTakeawayEL)},
    "keyTakeawayEN": ${JSON.stringify(data.keyTakeawayEN)},
    "statsEL": ${JSON.stringify(data.statsEL)},
    "statsEN": ${JSON.stringify(data.statsEN)},`;
    
    return match + ',' + stringifiedData;
  });
}

fs.writeFileSync(filepath, content, 'utf8');
console.log('Model updated!');
