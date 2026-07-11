const fs = require('fs');

const de = require('./translations_de.js');
const fr = require('./translations_fr.js');
const nl = require('./translations_nl.js');

const filepath = 'src/data/articles.ts';
const content = fs.readFileSync(filepath, 'utf8');

const jsonStr = content.replace('export const articles = ', '').replace(/;\s*$/, '');
let articles;
try {
  articles = JSON.parse(jsonStr);
} catch (e) {
  console.error("Failed to parse articles.ts JSON", e);
  process.exit(1);
}

// Ensure safety by tracking exact lengths
const getLengths = (arr) => arr.map(a => a.contentEL.length + '-' + a.contentEN.length).join('|');
const initialLengths = getLengths(articles);

// Inject translations
articles = articles.map(a => {
  const tDe = de[a.slug] || {};
  const tFr = fr[a.slug] || {};
  const tNl = nl[a.slug] || {};

  return {
    ...a,
    titleDE: tDe.title || a.titleEN,
    titleFR: tFr.title || a.titleEN,
    titleNL: tNl.title || a.titleEN,
    
    descriptionDE: tDe.description || a.descriptionEN,
    descriptionFR: tFr.description || a.descriptionEN,
    descriptionNL: tNl.description || a.descriptionEN,
    
    keyTakeawayDE: tDe.keyTakeaway || a.keyTakeawayEN,
    keyTakeawayFR: tFr.keyTakeaway || a.keyTakeawayEN,
    keyTakeawayNL: tNl.keyTakeaway || a.keyTakeawayEN,
    
    statsDE: tDe.stats || a.statsEN,
    statsFR: tFr.stats || a.statsEN,
    statsNL: tNl.stats || a.statsEN,
    
    faqDE: tDe.faq || a.faqEN,
    faqFR: tFr.faq || a.faqEN,
    faqNL: tNl.faq || a.faqEN,
    
    contentDE: tDe.content || a.contentEN,
    contentFR: tFr.content || a.contentEN,
    contentNL: tNl.content || a.contentEN,
  };
});

const finalLengths = getLengths(articles);
if (initialLengths !== finalLengths) {
  console.error("CRITICAL ERROR: Content lengths changed during patch!");
  process.exit(1);
}

const finalOutput = `export const articles = ${JSON.stringify(articles, null, 2)};\n`;
fs.writeFileSync(filepath, finalOutput, 'utf8');
console.log("SUCCESS: Patched articles.ts with translations.");
