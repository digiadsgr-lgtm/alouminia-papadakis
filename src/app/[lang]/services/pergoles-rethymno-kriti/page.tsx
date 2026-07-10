import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import PageTransition from '@/components/PageTransition'
import { Sun, Wind, Move, ChevronLeft } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  
  const title = isEn 
    ? 'Bioclimatic Pergolas Crete | Shading Systems' 
    : 'Βιοκλιματικές Πέργκολες Ρέθυμνο | Συστήματα Σκίασης';
    
  const description = isEn 
    ? 'Heavy duty bioclimatic pergolas and advanced shading systems for severe island winds. Custom design and installation in Crete.'
    : 'Βιοκλιματικές πέργκολες αλουμινίου και συστήματα σκίασης στο Ρέθυμνο. Heavy duty κατασκευές με αντοχή στους ισχυρούς ανέμους της Κρήτης.';
    
  const url = `https://alouminia-papadakis.gr/${lang}/services/pergoles-rethymno-kriti`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'el': 'https://alouminia-papadakis.gr/el/services/pergoles-rethymno-kriti',
        'en': 'https://alouminia-papadakis.gr/en/services/pergoles-rethymno-kriti',
        'x-default': 'https://alouminia-papadakis.gr/el/services/pergoles-rethymno-kriti',
      },
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: 'https://alouminia-papadakis.gr/images/pergola_crete_1776112148406.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

export default async function PergolesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en'

  const faqs = isEn ? [
    {
      question: "Are bioclimatic pergolas suitable for windy areas like Crete?",
      answer: "Absolutely. Our heavy-duty bioclimatic pergolas are specifically engineered and tested to withstand severe winds. The robust aluminum profiles ensure maximum stability.",
      textAnswer: "Absolutely. Our heavy-duty bioclimatic pergolas are specifically engineered and tested to withstand severe winds. The robust aluminum profiles ensure maximum stability."
    },
    {
      question: "Can I add lighting or heating to the pergola?",
      answer: "Yes, our systems support integrated LED lighting, infrared heaters, and even side screens for complete weather protection and year-round usage.",
      textAnswer: "Yes, our systems support integrated LED lighting, infrared heaters, and even side screens for complete weather protection and year-round usage."
    }
  ] : [
    {
      question: "Αντέχουν οι πέργκολες στους δυνατούς αέρηδες της Κρήτης;",
      answer: "Απόλυτα. Οι βιοκλιματικές πέργκολες βαρέως τύπου που κατασκευάζουμε είναι μελετημένες για ακραίες ανεμοπιέσεις, διασφαλίζοντας απόλυτη σταθερότητα.",
      textAnswer: "Απόλυτα. Οι βιοκλιματικές πέργκολες βαρέως τύπου που κατασκευάζουμε είναι μελετημένες για ακραίες ανεμοπιέσεις, διασφαλίζοντας απόλυτη σταθερότητα."
    },
    {
      question: "Μπορώ να προσθέσω φωτισμό ή θέρμανση;",
      answer: "Ναι, τα συστήματά μας υποστηρίζουν ενσωματωμένο LED φωτισμό, θερμάστρες υπερύθρων και κάθετες σίτες ή τζάμια για χρήση όλο τον χρόνο.",
      textAnswer: "Ναι, τα συστήματά μας υποστηρίζουν ενσωματωμένο LED φωτισμό, θερμάστρες υπερύθρων και κάθετες σίτες ή τζάμια για χρήση όλο τον χρόνο."
    }
  ];

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy border-b-[6px] border-red">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/pergola_crete_1776112148406.png" 
            alt="Pergolas" 
            fill 
            className="object-cover opacity-30 filter blur-sm scale-105" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/95 to-navy" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${lang}`} className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 font-medium">
            <ChevronLeft size={20} /> {isEn ? 'Back to Home' : 'Επιστροφή στην Αρχική'}
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white tracking-tight">
            {isEn ? 'Bioclimatic' : 'Βιοκλιματικές'} <span className="text-red">{isEn ? 'Pergolas' : 'Πέργκολες'}</span> <br/> {isEn ? '& Shading Systems' : '& Συστήματα Σκίασης'}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            {isEn ? 'Turn outdoor spaces into relaxation oasis regardless of weather. Heavy duty pergolas engineered for Crete winds.' : 'Κινητές πέργκολες σχεδιασμένες για το κλίμα της Κρήτης.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white text-navy">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="h-full relative min-h-[500px] rounded-[32px] overflow-hidden shadow-2xl group">
               <Image 
                 src="/images/pergola_crete_1776112148406.png"
                 alt="Pergola"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-navy/50 to-transparent"></div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">{isEn ? 'Technology Serving Relaxation' : 'Τεχνολογία στην Υπηρεσία της Χαλάρωσης'}</h2>
              <div className="w-20 h-1.5 bg-red mb-8 rounded-full"></div>
              <ul className="space-y-8 mt-12">
                <li className="flex items-start gap-5 p-6 rounded-3xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer active:scale-[0.98]">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20 group-hover:bg-red/20 group-hover:scale-110 transition-all duration-300"><Sun className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Light Control' : 'Πλήρης Έλεγχος Σκίασης'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? 'Adjustable louvers for light regulation.' : 'Περιστρεφόμενες περσίδες αλουμινίου.'}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 p-6 rounded-3xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer active:scale-[0.98]">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20 group-hover:bg-red/20 group-hover:scale-110 transition-all duration-300"><Wind className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Wind Resistant' : 'Αξεπέραστη Αντοχή'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? 'Built to withstand severe island winds.' : 'Heavy Duty κατασκευές που δεν λυγίζουν στους βοριάδες.'}</p>
                  </div>
                </li>
              </ul>
            </div>
         </div>
      </section>
      
      <section className="bg-gray-50 border-t border-gray-100">
        <FaqAccordion items={faqs} title={isEn ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"} />
      </section>
    </PageTransition>
  )
}
