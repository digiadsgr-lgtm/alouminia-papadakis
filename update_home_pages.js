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

  // Add import ContactForm and ProtectedEmail if not present
  if (!text.includes('import ContactForm')) {
    text = text.replace(
      "import Link from 'next/link'",
      "import Link from 'next/link'\nimport ContactForm from './ContactForm'\nimport ProtectedEmail from './ProtectedEmail'"
    );
  }

  // Replace email with ProtectedEmail
  text = text.replace(
    /<a href="mailto:gpapadakisret@gmail\.com"[^>]*>gpapadakisret@gmail\.com<\/a>/g,
    '<ProtectedEmail className="font-bold text-lg md:text-xl group-hover:text-[var(--color-red-light)] transition-colors break-all" />'
  );

  // Re-layout contact section to include form
  // Find where the grid of 3 contact items is
  // I will just append the ContactForm after the grid inside the section.
  if (!text.includes('<ContactForm')) {
    const gridEnd = text.indexOf('</div>\n          </div>\n        </motion.div>\n      </section>');
    if (gridEnd > -1) {
      const insertion = `</div>\n          </div>\n          <div className="mt-16 text-left">\n            <ContactForm lang="${f.lang}" />\n          </div>\n        </motion.div>\n      </section>`;
      text = text.replace('</div>\n          </div>\n        </motion.div>\n      </section>', insertion);
    }
  }

  fs.writeFileSync(f.path, text, 'utf8');
  console.log(`Updated ${f.path}`);
}
