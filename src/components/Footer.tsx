const dict = {
  el: {
    title: "ΑΛΟΥΜΙΝΙΑ",
    surname: "ΠΑΠΑΔΑΚΗΣ",
    desc: "Υψηλή τεχνογνωσία, κορυφαία αισθητική και απαράμιλλη αντοχή. Η επιλογή σας για προηγμένα συστήματα αλουμινίου και βιομηχανικές κατασκευές στο Ρέθυμνο.",
    contact: "Επικοινωνία",
    address: "Διεύθυνση",
    expertise: "Η Εξειδίκευσή Μας",
    exp1: "Ενεργειακά Κουφώματα (Alumil)",
    exp2: "Βιοκλιματικές Πέργκολες",
    exp3: "Μεταλλικά Κτίρια & Εγκαταστάσεις",
    exp4: "Custom Αυλόπορτες Ασφαλείας",
    rights: "Αλουμίνια Παπαδάκης."
  },
  en: {
    title: "PAPADAKIS",
    surname: "ALUMINIUM",
    desc: "High expertise, top aesthetics, and unparalleled durability. Your choice for advanced aluminum systems and industrial constructions in Rethymno.",
    contact: "Contact Information",
    address: "Address",
    expertise: "Our Expertise",
    exp1: "Energy Efficient Windows",
    exp2: "Bioclimatic Pergolas",
    exp3: "Metal Buildings & Structures",
    exp4: "Custom Security Gates",
    rights: "Papadakis Aluminium."
  }
}

export default function Footer({ lang = 'el' }: { lang?: 'el' | 'en' }) {
  const t = dict[lang]

  return (
    <footer className="bg-navy text-white pt-20 pb-12 border-t border-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-black mb-6 tracking-tight">{t.title} <span className="text-red">{t.surname}</span></h3>
          <p className="text-gray-300 leading-relaxed text-sm max-w-sm">
            {t.desc}
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6 text-gray-200">{t.contact}</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><strong className="text-white">{t.address}:</strong> Drouliskou 8, Rethymno</li>
            <li><strong className="text-white">Phone:</strong> +30 28310 23897</li>
            <li><strong className="text-white">Email:</strong> gpapadakisret@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6 text-gray-200">{t.expertise}</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-red transition-colors cursor-pointer">{t.exp1}</li>
            <li className="hover:text-red transition-colors cursor-pointer">{t.exp2}</li>
            <li className="hover:text-red transition-colors cursor-pointer">{t.exp3}</li>
            <li className="hover:text-red transition-colors cursor-pointer">{t.exp4}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} {t.rights} All rights reserved.</p>
        <p className="mt-4 md:mt-0 text-gray-500">
          Developed by{' '}
          <a href="https://digiads.gr" target="_blank" rel="noopener noreferrer" className="text-red font-bold hover:text-white transition-colors">
            DIGIADS
          </a>
        </p>
      </div>
    </footer>
  )
}
