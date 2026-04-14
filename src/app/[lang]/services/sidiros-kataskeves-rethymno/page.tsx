import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageTransition from '@/components/PageTransition'
import { Factory, Cog, ChevronLeft, Building } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === 'en' ? 'Industrial Ironworks | Metal Buildings Crete | Papadakis' : 'Βιομηχανικές Σιδηροκατασκευές | Μεταλλικά Κτίρια Ρέθυμνο | Παπαδάκης',
  }
}

export default async function SidirosPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en'

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy border-b-[6px] border-red">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/industrial_ironworks_1776183414837.png" 
            alt="Ironworks" 
            fill 
            className="object-cover opacity-20 filter blur-sm scale-105" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 to-navy" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${lang}`} className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 font-medium">
            <ChevronLeft size={20} /> {isEn ? 'Back to Home' : 'Επιστροφή στην Αρχική'}
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white tracking-tight">
             {isEn ? 'Industrial' : 'Βιομηχανικές'} <br/> <span className="text-red">{isEn ? 'Ironworks' : 'Σιδηροκατασκευές'}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
             {isEn ? 'The backbone of every major project. Precision construction of metal buildings and heavy duty gates.' : 'Η ραχοκοκαλιά κάθε μεγάλου έργου. Custom Inox κατασκευές και βαριές αυλόπορτες με 100% ακρίβεια.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white text-navy">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">{isEn ? 'Absolute Mechanical Supremacy' : 'Η Απόλυτη Μηχανική Υπεροχή'}</h2>
              <div className="w-20 h-1.5 bg-red mb-8 rounded-full"></div>
              <ul className="space-y-8 mt-12">
                <li className="flex items-start gap-5">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20"><Building className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Metal Buildings' : 'Μεταλλικά Κτίρια'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? 'Industrial structural frameworks.' : 'Ανέγερση βιομηχανικών σκελετών.'}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20"><Cog className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Security Gates' : 'Αυλόπορτες'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? 'Heavy-duty gates with powder coating.' : 'Συστήματα βαρέως τύπου με ηλεκτροστατική βαφή.'}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="h-full relative min-h-[500px] rounded-[32px] overflow-hidden shadow-2xl group">
               <Image 
                 src="/images/industrial_ironworks_1776183414837.png"
                 alt="Iron Works"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-navy/80 to-transparent"></div>
            </div>
         </div>
      </section>
    </PageTransition>
  )
}
