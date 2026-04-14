import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import { MapPin, ChevronLeft } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === 'en' ? 'Our Projects in Crete | Luxury Villas & Resorts | Papadakis' : 'Τα Έργα Μας στην Κρήτη | Βίλες & Ξενοδοχεία | Παπαδάκης',
    description: lang === 'en' ? 'Explore our aluminum and shading projects across Crete. From luxury villas in Plakias to resorts in Bali.' : 'Δείτε τα έργα μας σε όλη την Κρήτη. Κουφώματα και πέργκολες σε βίλες σε Πλακιά, Πρινέ, Μπαλί και Ρέθυμνο.'
  }
}

const projects = [
  {
    titleEL: "Minimal Κουφώματα σε Βίλα",
    titleEN: "Minimal Windows in Luxury Villa",
    location: "Πλακιάς, Νότιο Ρέθυμνο / Plakias, South Rethymno",
    img: "/images/hero_aluminum_villa_1776110912532.png",
    categoryEL: "Ιδιωτική Κατοικία",
    categoryEN: "Private Residence"
  },
  {
    titleEL: "Βιοκλιματικές Πέργκολες σε Resort",
    titleEN: "Bioclimatic Pergolas in Resort",
    location: "Μπαλί, Βόρειος Άξονας / Bali, North Coast",
    img: "/images/pergola_crete_1776112148406.png",
    categoryEL: "Τουριστικό Κατάλυμα",
    categoryEN: "Tourism Hospitality"
  },
  {
    titleEL: "Ενεργειακή Αναβάθμιση (Εξοικονομώ)",
    titleEN: "Energy Upgrade (Alumil Systems)",
    location: "Πρινές, Ρέθυμνο / Prines, Rethymno",
    img: "/images/aluminum_doors_patio_1776112180417.png",
    categoryEL: "Ιδιωτική Κατοικία",
    categoryEN: "Private Residence"
  },
  {
    titleEL: "Heavy Duty Σιδηροκατασκευές",
    titleEN: "Heavy Duty Ironworks",
    location: "Πάνορμο / Panormo",
    img: "/images/hero_welding_1776110934221.png",
    categoryEL: "Βιομηχανικός Χώρος",
    categoryEN: "Commercial Space"
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
            {isEn ? 'From luxury private villas in the south to massive hospitality projects on the north coast. We deliver excellence.' : 'Από υπερπολυτελείς βίλες στο Νότιο Ρέθυμνο, μέχρι ξενοδοχειακά συγκροτήματα. Η υπογραφή μας βρίσκεται παντού.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {projects.map((p, idx) => (
                <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 flex flex-col hover:border-red/30 transition-colors">
                  <div className="relative h-80 w-full overflow-hidden">
                    <Image 
                      src={p.img} 
                      alt={isEn ? p.titleEN : p.titleEL} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-navy text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      {isEn ? p.categoryEN : p.categoryEL}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-navy mb-3">{isEn ? p.titleEN : p.titleEL}</h3>
                    <div className="flex items-center gap-2 text-gray-500 font-medium">
                      <MapPin className="text-red" size={18} />
                      <span className="text-sm">{isEn ? p.location.split(' / ')[1] : p.location.split(' / ')[0]}</span>
                    </div>
                  </div>
                </div>
             ))}
          </div>

          <div className="mt-20 text-center">
             <div className="inline-block bg-white border border-gray-200 p-8 rounded-3xl shadow-xl">
               <h3 className="text-2xl font-bold text-navy mb-3">{isEn ? 'Are you an Architect or Investor?' : 'Είστε Αρχιτέκτονας ή Επενδυτής;'}</h3>
               <p className="text-gray-600 mb-6">{isEn ? 'We provide special B2B pricing and absolute priority for massive projects.' : 'Παρέχουμε ειδικές B2B τιμές και απόλυτη προτεραιότητα σε κατασκευαστικά έργα.'}</p>
               <a href={`/${lang}#contact`} className="inline-block bg-red text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-red-700 transition">
                 {isEn ? 'Contact B2B Departement' : 'Επικοινωνία με τμήμα B2B'}
               </a>
             </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
