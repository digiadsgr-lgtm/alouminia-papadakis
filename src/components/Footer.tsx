import Link from 'next/link'
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'

const dict = {
  el: {
    title: "ΑΛΟΥΜΙΝΙΑ",
    surname: "ΠΑΠΑΔΑΚΗΣ",
    desc: "Η επιτομή της σύγχρονης αρχιτεκτονικής. Πιστοποιημένα συστήματα αλουμινίου Alumil, με εστίαση στην απόλυτη ασφάλεια, θερμομόνωση και minimal αισθητική για την πολυτελή κατοικία σας.",
    contact: "ΕΠΙΚΟΙΝΩΝΙΑ ΣΗΜΕΡΑ",
    address: "Διεύθυνση",
    expertise: "ΒΑΣΙΚΕΣ ΥΠΗΡΕΣΙΕΣ",
    exp1: "Ενεργειακά Κουφώματα",
    exp2: "Βιοκλιματικές Πέργκολες",
    exp3: "Σιδηροκατασκευές Design",
    exp4: "Πόρτες Ασφαλείας RC3",
    links: "ΣΥΝΔΕΣΜΟΙ",
    home: "Αρχική",
    portfolio: "Portfolio - Έργα Μας",
    smarthome: "Λύσεις Smart Home",
    terms: "Όροι Χρήσης",
    rights: "Αλουμίνια Παπαδάκης. All rights reserved."
  },
  en: {
    title: "PAPADAKIS",
    surname: "ALUMINIUM",
    desc: "The pinnacle of modern architecture. Certified Alumil aluminum systems, focusing on absolute security, thermal insulation, and minimal aesthetics for your luxury residence.",
    contact: "CONTACT US TODAY",
    address: "Address",
    expertise: "CORE SERVICES",
    exp1: "Energy Windows",
    exp2: "Bioclimatic Pergolas",
    exp3: "Design Ironworks",
    exp4: "RC3 Security Doors",
    links: "QUICK LINKS",
    home: "Home",
    portfolio: "Our Portfolio",
    smarthome: "Smart Home Solutions",
    terms: "Terms of Use",
    rights: "Papadakis Aluminium. All rights reserved."
  }
}

export default function Footer({ lang = 'el' }: { lang?: 'el' | 'en' }) {
  const t = dict[lang]

  return (
    <footer className="bg-[#050B14] text-white pt-24 pb-8 border-t-[4px] border-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Brand */}
        <div className="md:col-span-1">
          <Link href={`/${lang}`} className="block mb-6">
            <h3 className="text-2xl font-black tracking-tight">{t.title} <span className="text-red">{t.surname}</span></h3>
          </Link>
          <p className="text-gray-400 leading-relaxed text-sm">
            {t.desc}
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-md font-black mb-6 tracking-widest text-white uppercase">{t.expertise}</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-red group-hover:translate-x-1 transition-transform" /> 
              <Link href={`/${lang}/services/koufomata-alouminiou-rethymno`} className="group-hover:text-white transition-colors">{t.exp1}</Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-red group-hover:translate-x-1 transition-transform" /> 
              <Link href={`/${lang}/services/pergoles-rethymno-kriti`} className="group-hover:text-white transition-colors">{t.exp2}</Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-red group-hover:translate-x-1 transition-transform" /> 
              <Link href={`/${lang}/services/portes-asfaleias-rethymno`} className="group-hover:text-white transition-colors">{t.exp4}</Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-red group-hover:translate-x-1 transition-transform" /> 
              <Link href={`/${lang}/services/sidiros-kataskeves-rethymno`} className="group-hover:text-white transition-colors">{t.exp3}</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h4 className="text-md font-black mb-6 tracking-widest text-white uppercase">{t.links}</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-gray-600 group-hover:translate-x-1 transition-transform" /> 
              <Link href={`/${lang}`} className="group-hover:text-white transition-colors">{t.home}</Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-gray-600 group-hover:translate-x-1 transition-transform" /> 
              <Link href={`/${lang}/portfolio`} className="group-hover:text-white transition-colors">{t.portfolio}</Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-gray-600 group-hover:translate-x-1 transition-transform" /> 
              <Link href={`/${lang}/services/smart-home-rethymno`} className="group-hover:text-white transition-colors">{t.smarthome}</Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-gray-600 group-hover:translate-x-1 transition-transform" /> 
              <span className="group-hover:text-white transition-colors">{t.terms}</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-md font-black mb-6 tracking-widest text-white uppercase">{t.contact}</h4>
          <ul className="space-y-5 text-sm text-gray-300 font-medium">
            <li className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-red/10 flex items-center justify-center flex-shrink-0 text-red">
                 <MapPin size={18} />
               </div>
               <div className="pt-1">
                 <p className="text-white font-bold mb-1">{t.address}</p>
                 <p className="text-gray-400">Δρουλίσκου 8, Ρέθυμνο, 74100</p>
               </div>
            </li>
            <li className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-red/10 flex items-center justify-center flex-shrink-0 text-red">
                 <Phone size={18} />
               </div>
               <div className="pt-1">
                 <p className="text-white font-bold mb-1">Τεχνικό Τμήμα</p>
                 <a href="tel:2831023897" className="text-gray-400 hover:text-white transition-colors">+30 28310 23897</a>
               </div>
            </li>
            <li className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-red/10 flex items-center justify-center flex-shrink-0 text-red">
                 <Mail size={18} />
               </div>
               <div className="pt-1">
                 <p className="text-white font-bold mb-1">Email</p>
                 <a href="mailto:gpapadakisret@gmail.com" className="text-gray-400 hover:text-white transition-colors">gpapadakisret@gmail.com</a>
               </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} {t.rights}</p>
        <p className="text-gray-500 tracking-wider">
          ENGINEERED BY <a href="https://digiads.gr" target="_blank" rel="noopener noreferrer" className="text-red font-bold hover:text-white transition-colors ml-1 uppercase">DIGIADS</a>
        </p>
      </div>
    </footer>
  )
}
