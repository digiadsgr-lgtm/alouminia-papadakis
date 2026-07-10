import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import PageTransition from '@/components/PageTransition'
import { Cpu, Smartphone, ShieldCheck, ChevronLeft } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  
  const title = isEn 
    ? 'Smart Home Automations Crete | Somfy Motors' 
    : 'Αυτοματισμοί & Smart Home Ρέθυμνο | Somfy';
    
  const description = isEn 
    ? 'Smart Home automations in Rethymno, Crete. Remote control for shutters, doors, and pergolas via smartphone. Official Somfy partners.'
    : 'Αυτοματισμοί και Smart Home λύσεις στο Ρέθυμνο. Απομακρυσμένος έλεγχος για ρολά και πέργκολες μέσω κινητού. Επίσημοι συνεργάτες Somfy.';
    
  const url = `https://alouminia-papadakis.gr/${lang}/services/smart-home-rethymno`;
  const imageUrl = 'https://alouminia-papadakis.gr/images/smart_home_automation_1776183365365.png';
  const imageAlt = isEn ? 'Somfy smart home automation in Crete' : 'Αυτοματισμοί smart home Somfy στο Ρέθυμνο';

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'el': 'https://alouminia-papadakis.gr/el/services/smart-home-rethymno',
        'en': 'https://alouminia-papadakis.gr/en/services/smart-home-rethymno',
        'x-default': 'https://alouminia-papadakis.gr/el/services/smart-home-rethymno',
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: isEn ? 'Papadakis Aluminium' : 'Αλουμίνια Παπαδάκης',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale: isEn ? 'en_US' : 'el_GR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function SmartHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en'

  const faqs = isEn ? [
    {
      question: "Can I upgrade my existing aluminum windows to a smart home system?",
      answer: "In most cases, yes! We can retrofit Somfy or other compatible smart motors to your existing rolling shutters, awnings, and pergolas without replacing the entire system.",
      textAnswer: "In most cases, yes! We can retrofit Somfy or other compatible smart motors to your existing rolling shutters, awnings, and pergolas without replacing the entire system."
    },
    {
      question: "Is it difficult to use?",
      answer: "Not at all. The systems are designed to be user-friendly, allowing you to control everything from your smartphone, tablet, or via voice commands with Google Assistant / Alexa.",
      textAnswer: "Not at all. The systems are designed to be user-friendly, allowing you to control everything from your smartphone, tablet, or via voice commands with Google Assistant / Alexa."
    }
  ] : [
    {
      question: "Μπορώ να κάνω έξυπνα τα ήδη υπάρχοντα κουφώματά μου;",
      answer: "Στις περισσότερες περιπτώσεις, ναι! Μπορούμε να τοποθετήσουμε μοτέρ Somfy ή άλλους συμβατούς αυτοματισμούς στα υπάρχοντα ρολά, τις τέντες ή τις πέργκολές σας χωρίς να χρειαστεί πλήρης αντικατάσταση.",
      textAnswer: "Στις περισσότερες περιπτώσεις, ναι! Μπορούμε να τοποθετήσουμε μοτέρ Somfy ή άλλους συμβατούς αυτοματισμούς στα υπάρχοντα ρολά, τις τέντες ή τις πέργκολές σας χωρίς να χρειαστεί πλήρης αντικατάσταση."
    },
    {
      question: "Είναι δύσκολο στη χρήση;",
      answer: "Καθόλου. Τα συστήματα έχουν σχεδιαστεί για να είναι απόλυτα φιλικά προς τον χρήστη. Μπορείτε να ελέγχετε τα πάντα από το κινητό, το tablet ή με φωνητικές εντολές μέσω Google Assistant / Alexa.",
      textAnswer: "Καθόλου. Τα συστήματα έχουν σχεδιαστεί για να είναι απόλυτα φιλικά προς τον χρήστη. Μπορείτε να ελέγχετε τα πάντα από το κινητό, το tablet ή με φωνητικές εντολές μέσω Google Assistant / Alexa."
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isEn ? "Home" : "Αρχική",
        "item": `https://alouminia-papadakis.gr/${lang}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": isEn ? "Services" : "Υπηρεσίες",
        "item": `https://alouminia-papadakis.gr/${lang}/#services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": isEn ? "Smart Home & Automations" : "Έξυπνο Σπίτι & Αυτοματισμοί",
        "item": `https://alouminia-papadakis.gr/${lang}/services/smart-home-rethymno`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": isEn ? "Smart Home Automation" : "Αυτοματισμοί Smart Home",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Αλουμίνια Παπαδάκης",
      "url": "https://alouminia-papadakis.gr"
    },
    "areaServed": {
      "@type": "State",
      "name": "Crete"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": isEn ? "Home Automation" : "Αυτοματισμοί Κατοικίας",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isEn ? "Somfy Motors" : "Μοτέρ Somfy"
          }
        }
      ]
    }
  };

  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy border-b-[6px] border-red">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/smart_home_automation_1776183365365.png" 
            alt="Smart Home Automations Rethymno" 
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
            {isEn ? 'Smart Home &' : 'Έξυπνο Σπίτι &'} <span className="text-red">{isEn ? 'Automations' : 'Αυτοματισμοί'}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            {isEn ? 'Control your entire property\'s shutters, doors, and pergolas seamlessly from your smartphone.' : 'Πλήρης έλεγχος των ρολών, της γκαραζόπορτας και της πέργκολας απευθείας από το κινητό σας.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white text-navy">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="h-full relative min-h-[500px] rounded-[32px] overflow-hidden shadow-2xl group">
               <Image 
                 src="/images/smart_home_automation_1776183365365.png"
                 alt="Somfy Smart Home"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-bl from-navy/50 to-transparent"></div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">{isEn ? 'Total Control Architecture' : 'Απόλυτος Έλεγχος & Ασφάλεια'}</h2>
              <div className="w-20 h-1.5 bg-red mb-8 rounded-full"></div>
              <ul className="space-y-8 mt-12">
                <li className="flex items-start gap-5">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20"><Smartphone className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Remote Access' : 'Απομακρυσμένος Έλεγχος'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? 'Open/close your shutters from anywhere in the world using Wi-Fi motors.' : 'Ανοιγοκλείστε τα ρολά σας ή την πέργκολα όσο λείπετε από το σπίτι μέσω του smartphone σας.'}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20"><Cpu className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Premium Motors (Somfy)' : 'Κορυφαία Μοτέρ (Somfy)'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? 'Reliable European motorization ensuring decades of zero-maintenance operation.' : 'Συνεργαζόμαστε με την κορυφαία εταιρεία Somfy για αξιόπιστους και αθόρυβους μηχανισμούς.'}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20"><ShieldCheck className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Presence Simulation' : 'Προσομοίωση Παρουσίας'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? 'Automate lighting and shutters to simulate your presence when traveling.' : 'Προγραμματίστε τα ρολά σας να κατεβαίνουν αυτόματα το βράδυ για αποτροπή διαρρήξεων.'}</p>
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
