import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageTransition from '@/components/PageTransition'
import { Shield, PenTool, CheckCircle, ChevronLeft, Thermometer, VolumeX, PhoneCall } from 'lucide-react'
import dynamic from 'next/dynamic'

const InsulationSimulator = dynamic(() => import('@/components/InsulationSimulator'))

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === 'en' ? 'Aluminum Windows Crete | Alumil Systems | Papadakis' : 'Κουφώματα Αλουμινίου Ρέθυμνο | Ενεργειακά Συστήματα | Παπαδάκης',
    description: lang === 'en' ? 'Premium energy-efficient aluminum windows in Rethymno, Crete. High thermal insulation and security. Official Alumil partners.' : 'Κορυφαία ενεργειακά κουφώματα αλουμινίου στο Ρέθυμνο.',
  }
}

export default async function KoufomataPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en'

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": isEn ? "What is the U-value of your aluminum windows?" : "Ποιος είναι ο δείκτης θερμοπερατότητας (Uw) των κουφωμάτων;",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": isEn ? "Our certified Alumil systems achieve a U-value up to 0.9 W/m²K, ensuring maximum energy efficiency and thermal insulation." : "Τα πιστοποιημένα συστήματα Alumil SMARTIA/SUPREME επιτυγχάνουν δείκτη Uw έως 0.9 W/m²K, εξασφαλίζοντας μέγιστη ενεργειακή απόδοση."
      }
    }, {
      "@type": "Question",
      "name": isEn ? "Are your frames suitable for seaside properties?" : "Είναι τα κουφώματα κατάλληλα για παραθαλάσσια σπίτια στην Κρήτη;",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": isEn ? "Yes, we apply Seaside Class certification anodizing, providing extreme resistance to salt corrosion." : "Ναι, εφαρμόζουμε πιστοποιημένη επεξεργασία ανοδίωσης Seaside Class, εξασφαλίζοντας απόλυτη αντοχή στη διάβρωση από την αλμύρα."
      }
    }]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Alumil Thermal Break Windows",
    "description": isEn ? "Premium thermal break aluminum windows with 38mm polyamide and multi-point security locks." : "Ενεργειακά κουφώματα αλουμινίου θερμοδιακοπής (Πολυαμίδια 38mm) με περιμετρική ασφάλεια.",
    "brand": {
      "@type": "Brand",
      "name": "Alumil"
    }
  };

  return (
    <PageTransition>
      <JsonLd data={faqSchema} />
      <JsonLd data={productSchema} />
      <article className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy border-b-[6px] border-red">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/modern_aluminum_windows_1776183397754.png" 
            alt="Κουφώματα Αλουμινίου Ρέθυμνο" 
            fill 
            className="object-cover opacity-20 filter blur-sm scale-105" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 to-navy" />
        </div>

        <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${lang}`} className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 font-medium">
            <ChevronLeft size={20} /> {isEn ? 'Back to Home' : 'Επιστροφή στην Αρχική'}
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white tracking-tight">
             {isEn ? 'Energy Efficient Windows' : 'Ενεργειακά Κουφώματα'} <br/> <span className="text-red">{isEn ? 'in Crete' : 'στο Ρέθυμνο'}</span>
          </h1>
           <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
             {isEn ? 'Upgrade your property with top-tier aluminum systems (Alumil). Invest in ultimate insulation and armor your space.' : 'Αναβαθμίστε την κατοικία ή την επιχείρησή σας με συστήματα αλουμινίου κορυφαίων προδιαγραφών (Alumil) με δείκτη Uw έως 0.9 W/m²K.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mt-8">
             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center gap-4 text-white">
               <Thermometer className="text-red" size={32} />
               <div>
                  <div className="font-black text-xl leading-none">Uw {`<`} 1.1</div>
                  <div className="text-xs text-gray-300 uppercase tracking-widest mt-1">{isEn ? 'Thermal Insulation' : 'Θερμομόνωση'}</div>
               </div>
             </div>
             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center gap-4 text-white">
               <VolumeX className="text-red" size={32} />
               <div>
                  <div className="font-black text-xl leading-none">Rw 45dB</div>
                  <div className="text-xs text-gray-300 uppercase tracking-widest mt-1">{isEn ? 'Sound Reduction' : 'Ηχομείωση'}</div>
               </div>
             </div>
             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center gap-4 text-white">
               <Shield className="text-red" size={32} />
               <div>
                  <div className="font-black text-xl leading-none">RC3 / E1500</div>
                  <div className="text-xs text-gray-300 uppercase tracking-widest mt-1">{isEn ? 'Security Class' : 'Κλάση Ασφαλείας'}</div>
               </div>
             </div>
          </div>
          <InsulationSimulator isEn={isEn} />
        </header>
      </article>

      <section className="py-24 bg-white text-navy">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">{isEn ? 'The Ultimate Upgrade Choice' : 'Η Απόλυτη Επιλογή Αναβάθμισης'}</h2>
              <div className="w-20 h-1.5 bg-red mb-8 rounded-full"></div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                 {isEn ? 'At Papadakis, we specialize in heavy-duty modern windows in Rethymno, ensuring extreme resistance to Crete\'s humidity and winds while maximizing thermal efficiency.' : 'Ειδικευόμαστε στην κατασκευή και τοποθέτηση σύγχρονων κουφωμάτων βαρέως τύπου στο Ρέθυμνο.'}
              </p>
              <ul className="space-y-8 mt-12">
                <li className="flex items-start gap-5">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20"><Shield className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Thermal Break (38mm Polyamide)' : 'Κορυφαία Θερμοδιακοπή (Πολυαμίδια 38mm)'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? 'Certified thermal break systems achieving extreme U-values. Reduce cooling costs up to 40%.' : 'Πιστοποιημένα συστήματα SMARTIA & SUPREME. Κυκλώματα πολυαμιδίων 38mm που εκμηδενίζουν τη μεταφορά θερμότητας.'}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20"><CheckCircle className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Anti-Burglary Security' : 'Ασφάλεια Anti-Burglary'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? 'Military-grade armoring with multi-point locking.' : 'Χρησιμοποιούμε μηχανισμούς πολλαπλών κλειδωμάτων.'}</p>
                  </div>
                </li>
              </ul>

              <a href="tel:2831023897" className="mt-12 inline-flex items-center gap-3 bg-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red/25 active:scale-95">
                <PhoneCall size={20} />
                {isEn ? 'Request Technical Study & Quote' : 'Ζητήστε Τεχνική Μελέτη & Κοστολόγηση'}
              </a>
            </div>
            
            <div className="h-full relative min-h-[500px] rounded-[32px] overflow-hidden group shadow-2xl">
               <Image 
                 src="/images/aluminum_doors_patio_1776112180417.png"
                 alt="Windows"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
               <div className="absolute bottom-10 left-8 right-8">
                 <div className="glass-panel p-8">
                   <p className="text-navy font-black text-xl mb-3 uppercase tracking-wide">{isEn ? 'Alumil Premium Partner' : 'Εξοικονόμηση Ενέργειας'}</p>
                   <p className="text-gray-700 text-lg font-medium">{isEn ? 'Replacing your old frames perfectly.' : 'Αναλαμβάνουμε την αντικατάσταση ενεργειακών κουφωμάτων.'}</p>
                 </div>
               </div>
            </div>
         </div>
      </section>
    </PageTransition>
  )
}
