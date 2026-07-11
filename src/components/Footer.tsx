import Link from 'next/link'
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'
import ProtectedEmail from './ProtectedEmail'

const dict = {
  el: {
    title: "ΑΛΟΥΜΙΝΙΑ",
    surname: "ΠΑΠΑΔΑΚΗΣ",
    desc: "Πιστοποιημένος κατασκευαστής Alumil με μονάδα παραγωγής στο Ρέθυμνο. Ενεργειακά κουφώματα, πόρτες ασφαλείας και πέργκολες για κατοικίες σε όλη την Κρήτη — με τεκμηριωμένες προδιαγραφές και παράδοση στην ώρα μας.",
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
    blog: "To Blog Μας",
    terms: "Όροι Χρήσης",
    privacy: "Πολιτική Απορρήτου",
    rights: "Αλουμίνια Παπαδάκης. All rights reserved."
  },
  en: {
    title: "PAPADAKIS",
    surname: "ALUMINIUM",
    desc: "Certified Alumil fabricator with a production unit in Rethymno. Energy-efficient windows, security doors, and pergolas for residences across Crete — with documented specifications and on-time delivery.",
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
    blog: "Our Blog",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    rights: "Papadakis Aluminium. All rights reserved."
  },
  de: {
    title: "PAPADAKIS",
    surname: "ALUMINIUM",
    desc: "Zertifizierter Alumil-Hersteller mit einer Produktionsstätte in Rethymno. Energieeffiziente Fenster, Sicherheitstüren und Pergolen für Häuser auf ganz Kreta — mit dokumentierten Spezifikationen und pünktlicher Lieferung.",
    contact: "HEUTE KONTAKTIEREN",
    address: "Adresse",
    expertise: "KERNLEISTUNGEN",
    exp1: "Energiefenster",
    exp2: "Bioklimatische Pergolen",
    exp3: "Design-Eisenarbeiten",
    exp4: "RC3 Sicherheitstüren",
    links: "SCHNELLLINKS",
    home: "Startseite",
    portfolio: "Unser Portfolio",
    smarthome: "Smart Home Lösungen",
    blog: "Unser Blog",
    terms: "Nutzungsbedingungen",
    privacy: "Datenschutzrichtlinie",
    rights: "Papadakis Aluminium. Alle Rechte vorbehalten."
  },
  fr: {
    title: "PAPADAKIS",
    surname: "ALUMINIUM",
    desc: "Fabricant certifié Alumil avec une unité de production à Réthymnon. Fenêtres écoénergétiques, portes de sécurité et pergolas pour les résidences à travers la Crète — avec des spécifications documentées et une livraison à temps.",
    contact: "NOUS CONTACTER",
    address: "Adresse",
    expertise: "SERVICES CLÉS",
    exp1: "Fenêtres Écoénergétiques",
    exp2: "Pergolas Bioclimatiques",
    exp3: "Ferronnerie Design",
    exp4: "Portes Blindées RC3",
    links: "LIENS RAPIDES",
    home: "Accueil",
    portfolio: "Notre Portfolio",
    smarthome: "Solutions Smart Home",
    blog: "Notre Blog",
    terms: "Conditions d'Utilisation",
    privacy: "Politique de Confidentialité",
    rights: "Papadakis Aluminium. Tous droits réservés."
  },
  nl: {
    title: "PAPADAKIS",
    surname: "ALUMINIUM",
    desc: "Gecertificeerde Alumil fabrikant met een productie-eenheid in Rethymno. Energiezuinige ramen, veiligheidsdeuren en pergola's voor woningen in heel Kreta — met gedocumenteerde specificaties en tijdige levering.",
    contact: "NEEM CONTACT OP",
    address: "Adres",
    expertise: "KERN DIENSTEN",
    exp1: "Energiezuinige Ramen",
    exp2: "Bioklimatische Pergola's",
    exp3: "Design Smeedwerk",
    exp4: "RC3 Veiligheidsdeuren",
    links: "SNELKOPPELINGEN",
    home: "Home",
    portfolio: "Ons Portfolio",
    smarthome: "Smart Home Oplossingen",
    blog: "Onze Blog",
    terms: "Gebruiksvoorwaarden",
    privacy: "Privacybeleid",
    rights: "Papadakis Aluminium. Alle rechten voorbehouden."
  }
}

export default function Footer({ lang = 'el' }: { lang?: 'el' | 'en' | 'de' | 'fr' | 'nl' }) {
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
            {lang === 'el' && (
              <li className="flex items-center gap-2 group cursor-pointer">
                <ChevronRight size={14} className="text-red group-hover:translate-x-1 transition-transform" /> 
                <Link href={`/${lang}/systimata-alumil`} className="group-hover:text-white transition-colors">Συστήματα Alumil</Link>
              </li>
            )}
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
              <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" /> 
              <Link href={`/${lang}`} className="group-hover:text-white transition-colors">{t.home}</Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" /> 
              <Link href={`/${lang}/portfolio`} className="group-hover:text-white transition-colors">{t.portfolio}</Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" /> 
              <Link href={`/${lang}/blog`} className="group-hover:text-white transition-colors">{t.blog}</Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" /> 
              <Link href={`/${lang}/services/smart-home-rethymno`} className="group-hover:text-white transition-colors">{t.smarthome}</Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" /> 
              <Link href={lang === 'el' ? '/el/oroi-xrisis' : '/en/terms-of-use'} className="group-hover:text-white transition-colors">{t.terms}</Link>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" /> 
              <Link href={lang === 'el' ? '/el/politiki-aporritou' : '/en/privacy-policy'} className="group-hover:text-white transition-colors">{t.privacy}</Link>
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
                 <a href="https://maps.app.goo.gl/P7fcaFiK9mkdmUTS6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Δρουλίσκου 8, Ρέθυμνο, 74100</a>
               </div>
            </li>
            <li className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-red/10 flex items-center justify-center flex-shrink-0 text-red">
                 <Phone size={18} />
               </div>
               <div className="pt-1">
                 <p className="text-white font-bold mb-1">Τεχνικό Τμήμα</p>
                 <a href="tel:+302831023897" className="text-gray-400 hover:text-white transition-colors">+30 28310 23897</a>
               </div>
            </li>
            <li className="flex items-start gap-4">
               <div className="w-10 h-10 rounded-xl bg-red/10 flex items-center justify-center flex-shrink-0 text-red">
                 <Mail size={18} />
               </div>
               <div className="pt-1">
                 <p className="text-white font-bold mb-1">Email</p>
                 <ProtectedEmail className="text-gray-400 hover:text-white transition-colors" />
               </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} {t.rights}</p>
        <p className="text-gray-400 tracking-wider">
          ENGINEERED BY <a href="https://digiads.gr" target="_blank" rel="noopener noreferrer" className="text-red font-bold hover:text-white transition-colors ml-1 uppercase">DIGIADS</a>
        </p>
      </div>
    </footer>
  )
}
