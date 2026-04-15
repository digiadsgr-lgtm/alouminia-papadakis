import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import { MapPin, ChevronLeft, Calendar, ShieldCheck, Ruler } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === 'en' ? 'Our Projects in Crete | Luxury Villas & Resorts | Papadakis' : 'Τα Έργα Μας στην Κρήτη | Βίλες & Ξενοδοχεία | Παπαδάκης',
    description: lang === 'en' ? 'Explore our massive portfolio of aluminum and shading projects across Crete. Detailed case studies of luxury villas, boutique hotels, and complex commercial buildings.' : 'Εκτενές portfolio κατασκευαστικών έργων στην Κρήτη. Δείτε αναλυτικά case studies από τοποθετήσεις σε βίλες, ξενοδοχεία και βιομηχανικά κτίρια.'
  }
}

const projects = [
  {
    titleEL: "Αρχιτεκτονική Εφαρμογή σε Luxury Βίλα",
    titleEN: "Architectural Application for Luxury Villa",
    location: "Πλακιάς, Νότιο Ρέθυμνο / Plakias, South Rethymno",
    img: "/images/hero_aluminum_villa_1776110912532.png",
    categoryEL: "Custom Κατοικία - Πλήρες Έργο",
    categoryEN: "Custom Residence - Turn-key",
    descEL: "Κατασκευή και εγκατάσταση θερμοδιακοπτόμενων συστημάτων Alumil SMARTIA S560 για μέγιστη κάλυψη ανοιγμάτων. Λόγω της εγγύτητας στη θάλασσα, εφαρμόστηκε βαφή Seaside Class για απόλυτη αντιδιαβρωτική προστασία. Παράδοση σε 14 εργάσιμες, με γραπτή εγγύηση Alumil.",
    descEN: "Manufacture and installation of Alumil SMARTIA S560 thermal-break systems for maximum span coverage. Due to seaside proximity, Seaside Class coating was applied for absolute rust protection. Turn-key delivery in 14 days with Alumil guarantee.",
    scope: "6 Windows, 4 Sliding Doors, 1 Security Door"
  },
  {
    titleEL: "Ενεργειακή Αναβάθμιση Boutique Resort",
    titleEN: "Boutique Resort Energy Upgrade",
    location: "Μπαλί, Βόρειος Άξονας / Bali, North Coast",
    img: "/images/pergola_crete_1776112148406.png",
    categoryEL: "Τουριστικό Κατάλυμα & B2B",
    categoryEN: "Tourism Hospitality B2B",
    descEL: "Ολοκληρωμένο project αντικατάστασης κουφωμάτων για ξενοδοχειακή μονάδα με αυστηρό deadline ενόψει σεζόν. Τοποθετήθηκαν ανοιγόμενα SUPREME S77 και 3 βαρέως τύπου βιοκλιματικές πέργκολες στις σουίτες. Εφαρμογή χωρίς καμία απόκλιση στο χρονοδιάγραμμα.",
    descEN: "Comprehensive window replacement project for a hotel under strict pre-season deadlines. Installed SUPREME S77 casements and 3 heavy-duty bioclimatic pergolas in the suites. Flawless execution with zero timeline delays.",
    scope: "12 Rooms, 3 Pergolas, Inox Railings"
  },
  {
    titleEL: "Premium Ενεργειακή Εφαρμογή (Εξοικονομώ)",
    titleEN: "Premium Energy Application (Subsidy Run)",
    location: "Πρινές, Ρέθυμνο / Prines, Rethymno",
    img: "/images/aluminum_doors_patio_1776112180417.png",
    categoryEL: "Ιδιωτική Κατοικία - Εξοικονομώ",
    categoryEN: "Private Residence",
    descEL: "Αντικατάσταση παλαιών κουφωμάτων με νέα, πιστοποιημένα ενεργειακά προφίλ για το πρόγραμμα Εξοικονομώ. Ο δείκτης θερμοπερατότητας μειώθηκε στο Uw 1.2 W/m²K, προσφέροντας 40% εξοικονόμηση λογαριασμού ρεύματος.",
    descEN: "Replacement of old windows with certified energy-efficient profiles. The thermal transmittance coefficient was reduced to Uw 1.2 W/m²K, offering a 40% saving on cooling/heating operational costs.",
    scope: "Full House Upgrade + Rollers"
  },
  {
    titleEL: "Heavy Duty Βιομηχανικές Σιδηροκατασκευές",
    titleEN: "Heavy Duty Commercial Ironworks",
    location: "Πάνορμο / Panormo",
    img: "/images/hero_welding_1776110934221.png",
    categoryEL: "Commercial Space",
    categoryEN: "Commercial Space",
    descEL: "Βαριές σιδηροκατασκευές (Heavy Ironworks), custom inox σκάλες και τοποθέτηση θωρακισμένων πορτών ασφαλείας RC3 για εμπορική αποθήκη. Σχεδιασμός CAD in-house πριν την έναρξη του project.",
    descEN: "Heavy ironworks, custom inox staircases, and installation of RC3 armored security doors for a commercial warehouse facility. In-house CAD design validation prior to manufacturing.",
    scope: "Security Doors, Staircases, Roofing"
  }
]

export default async function PortfolioPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en'

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white border-b-8 border-red">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href={`/${lang}`} className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 font-medium">
            <ChevronLeft size={20} /> {isEn ? 'Back to Home' : 'Επιστροφή στην Αρχική'}
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {isEn ? 'Our Work in' : 'Τα Έργα Μας στην'} <span className="text-red">{isEn ? 'Crete' : 'Κρήτη'}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {isEn ? 'Proof of operational maturity and flawless execution. Explore our detailed case studies of premium aluminum installations.' : 'Η απόδειξη της αξιοπιστίας μας. Δείτε αναλυτικά case studies από έργα εφαρμογής συστημάτων υψηλής αισθητικής και αυστηρών απαιτήσεων.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {projects.map((p, idx) => (
                <article key={idx} className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 flex flex-col hover:border-red/30 transition-colors">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image 
                      src={p.img} 
                      alt={isEn ? p.titleEN : p.titleEL} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-red text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg tracking-wider uppercase">
                      {isEn ? p.categoryEN : p.categoryEL}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-black text-navy mb-4 leading-tight">{isEn ? p.titleEN : p.titleEL}</h3>
                    
                    <p className="text-gray-600 mb-6 flex-1 leading-relaxed text-sm">
                      {isEn ? p.descEN : p.descEL}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-500 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-1.5"><MapPin className="text-red" size={16} />{isEn ? p.location.split(' / ')[1] : p.location.split(' / ')[0]}</div>
                      <div className="flex items-center gap-1.5"><Ruler className="text-red" size={16} />{p.scope}</div>
                      <div className="flex items-center gap-1.5"><ShieldCheck className="text-red" size={16} />{isEn ? 'Guaranteed' : 'Με Εγγύηση'}</div>
                    </div>
                  </div>
                </article>
             ))}
          </div>

          <div className="mt-24 text-center">
             <div className="inline-block bg-white border border-gray-200 p-10 md:px-16 rounded-3xl shadow-xl relative overflow-hidden">
               <div className="absolute left-0 top-0 w-2 h-full bg-red"></div>
               <h3 className="text-3xl font-black text-navy mb-4 tracking-tight">{isEn ? 'Scalable B2B Project Operations' : 'Αναλαμβάνετε κάποιο μεγάλο Project;'}</h3>
               <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg leading-relaxed">{isEn ? 'We provide structural solutions, scalable timeline execution, and direct architectural collaboration for demanding hospitality or residential developments.' : 'Μηδενικό execution risk. Εγγυημένη τήρηση παραδόσεων, ειδικές B2B τιμές και απόλυτη προτεραιότητα σε μεγάλα κατασκευαστικά έργα.'}</p>
               <a href={`/${lang}#contact`} className="inline-block bg-navy hover:bg-red text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all duration-300">
                 {isEn ? 'Contact B2B Departement' : 'Επικοινωνία με τμήμα B2B'}
               </a>
             </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
