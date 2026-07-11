import type { Metadata } from 'next'
import FaqAccordion from '@/components/FaqAccordion'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import PageTransition from '@/components/PageTransition'
import TrustBadges from '@/components/TrustBadges'
import { Shield, PenTool, CheckCircle, ChevronLeft, Thermometer, VolumeX, PhoneCall } from 'lucide-react'
import dynamic from 'next/dynamic'

const InsulationSimulator = dynamic(() => import('@/components/InsulationSimulator'))

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  const content = {
    el: {
      title: 'Ενεργειακά Κουφώματα Αλουμινίου Ρέθυμνο | Alumil',
      description: 'Ενεργειακά κουφώματα αλουμινίου Alumil στο Ρέθυμνο με δείκτη Uw έως 0,9 W/m²K. Κατασκευή & τοποθέτηση από πιστοποιημένο συνεργείο. Ζητήστε δωρεάν μελέτη.',
      siteName: 'Αλουμίνια Παπαδάκης',
      imageAlt: 'Ενεργειακές μπαλκονόπορτες αλουμινίου Alumil σε κατοικία στο Ρέθυμνο',
      locale: 'el_GR'
    },
    en: {
      title: 'Aluminum Windows Crete | Alumil Systems',
      description: 'Premium energy-efficient aluminum windows in Rethymno, Crete. High thermal insulation (Uw up to 0.9 W/m²K) and certified security. Official Alumil partners.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Energy efficient Alumil aluminum balcony doors in Rethymno residence',
      locale: 'en_US'
    },
    de: {
      title: 'Aluminiumfenster Kreta | Alumil Systeme',
      description: 'Premium energieeffiziente Aluminiumfenster in Rethymno. Hohe Wärmedämmung (Uw bis 0,9 W/m²K) und zertifizierte Sicherheit. Offizielle Alumil-Partner.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Energieeffiziente Alumil-Balkontüren in Residenz auf Kreta',
      locale: 'de_DE'
    },
    fr: {
      title: 'Fenêtres Aluminium Crète | Systèmes Alumil',
      description: 'Fenêtres écoénergétiques premium à Réthymnon. Isolation thermique élevée (Uw 0,9 W/m²K) et sécurité certifiée. Partenaires officiels Alumil.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Portes-fenêtres en aluminium Alumil en Crète',
      locale: 'fr_FR'
    },
    nl: {
      title: 'Aluminium Ramen Kreta | Alumil Systemen',
      description: 'Premium energiezuinige ramen in Rethymnon. Hoge thermische isolatie (Uw tot 0,9 W/m²K) en gecertificeerde veiligheid. Alumil partner.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Energiezuinige Alumil aluminium deuren in Kreta',
      locale: 'nl_NL'
    }
  }

  const l = content[lang as keyof typeof content] || content['en'];
  const url = `https://alouminia-papadakis.gr/${lang}/services/koufomata-alouminiou-rethymno`;
  const imageUrl = 'https://alouminia-papadakis.gr/images/modern_aluminum_windows_1776183397754.png';

  return {
    title: l.title,
    description: l.description,
    alternates: {
      canonical: url,
      languages: {
        'el': 'https://alouminia-papadakis.gr/el/services/koufomata-alouminiou-rethymno',
        'en': 'https://alouminia-papadakis.gr/en/services/koufomata-alouminiou-rethymno',
        'de': 'https://alouminia-papadakis.gr/de/services/koufomata-alouminiou-rethymno',
        'fr': 'https://alouminia-papadakis.gr/fr/services/koufomata-alouminiou-rethymno',
        'nl': 'https://alouminia-papadakis.gr/nl/services/koufomata-alouminiou-rethymno',
        'x-default': 'https://alouminia-papadakis.gr/el/services/koufomata-alouminiou-rethymno',
      },
    },
    openGraph: {
      title: l.title,
      description: l.description,
      url,
      siteName: l.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: l.imageAlt,
        },
      ],
      locale: l.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: l.title,
      description: l.description,
      images: [imageUrl],
    },
  }
}

export default async function KoufomataPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en'

  const faqsContent = {
    el: [
      {
        question: 'Πόσο κοστίζουν τα κουφώματα αλουμινίου στο Ρέθυμνο;',
        answer: 'Το κόστος εξαρτάται από τη σειρά προφίλ (π.χ. προσθήκη πολυαμιδίου για θερμοδιακοπή), τον υαλοπίνακα και τις διαστάσεις. Ενδεικτικά, μια ενεργειακή μπαλκονόπορτα με θερμοδιακοπή (ειδικό πολυαμίδιο) ξεκινά από τα επίπεδα των μεσαίων σειρών Alumil και κλιμακώνεται στις premium SUPREME. Κάθε έργο κοστολογείται μετά από δωρεάν επιμέτρηση.',
        textAnswer: 'Το κόστος εξαρτάται από τη σειρά προφίλ (πολυαμίδιο θερμοδιακοπής), τον υαλοπίνακα και τις διαστάσεις.'
      },
      {
        question: 'Ποιος είναι ο δείκτης θερμοπερατότητας (Uw) των κουφωμάτων;',
        answer: 'Τα πιστοποιημένα συστήματα Alumil SMARTIA/SUPREME επιτυγχάνουν δείκτη Uw έως 0.9 W/m²K, εξασφαλίζοντας μέγιστη ενεργειακή απόδοση.',
        textAnswer: 'Τα πιστοποιημένα συστήματα Alumil επιτυγχάνουν δείκτη Uw έως 0.9 W/m²K.'
      },
      {
        question: 'Είναι τα κουφώματα κατάλληλα για παραθαλάσσια σπίτια στην Κρήτη;',
        answer: 'Ναι, εφαρμόζουμε πιστοποιημένη επεξεργασία ανοδίωσης Seaside Class, εξασφαλίζοντας εγγυημένη αντοχή στη διάβρωση από την αλμύρα.',
        textAnswer: 'Ναι, εφαρμόζουμε πιστοποιημένη επεξεργασία ανοδίωσης Seaside Class.'
      }
    ],
    en: [
      {
        question: 'How much do aluminum windows cost in Rethymno?',
        answer: 'The cost depends on the profile series, the glazing, and dimensions. Every project is priced after a free measurement.',
        textAnswer: 'The cost depends on the profile series, the glazing, and dimensions.'
      },
      {
        question: 'What is the U-value of your aluminum windows?',
        answer: 'Our certified Alumil systems achieve a U-value up to 0.9 W/m²K, ensuring maximum energy efficiency.',
        textAnswer: 'Our certified Alumil systems achieve a U-value up to 0.9 W/m²K.'
      },
      {
        question: 'Are your frames suitable for seaside properties?',
        answer: 'Yes, we apply Seaside Class certification anodizing, providing extreme resistance to salt corrosion.',
        textAnswer: 'Yes, we apply Seaside Class certification anodizing.'
      }
    ],
    de: [
      { question: 'Wie viel kosten Aluminiumfenster in Rethymno?', answer: 'Die Kosten hängen von der Profilserie, Verglasung und den Abmessungen ab. Jedes Projekt wird nach kostenlosem Aufmaß berechnet.', textAnswer: 'Die Kosten hängen von der Profilserie, Verglasung und den Abmessungen ab.' },
      { question: 'Wie hoch ist der U-Wert Ihrer Fenster?', answer: 'Unsere zertifizierten Alumil-Systeme erreichen einen U-Wert von bis zu 0,9 W/m²K.', textAnswer: 'Unsere zertifizierten Alumil-Systeme erreichen einen U-Wert von bis zu 0,9 W/m²K.' },
      { question: 'Sind Ihre Rahmen für Immobilien am Meer geeignet?', answer: 'Ja, wir verwenden die Seaside Class-Zertifizierungseloxierung, die extreme Beständigkeit gegen Salzkorrosion bietet.', textAnswer: 'Ja, wir verwenden die Seaside Class-Zertifizierung.' }
    ],
    fr: [
      { question: 'Combien coûtent les fenêtres en aluminium à Réthymnon?', answer: 'Le coût dépend de la série de profils, du vitrage et des dimensions. Chaque projet est chiffré après mesure gratuite.', textAnswer: 'Le coût dépend de la série de profils, du vitrage et des dimensions.' },
      { question: 'Quelle est la valeur U de vos fenêtres?', answer: 'Nos systèmes Alumil certifiés atteignent une valeur U de 0,9 W/m²K.', textAnswer: 'Nos systèmes Alumil certifiés atteignent une valeur U de 0,9 W/m²K.' },
      { question: 'Vos cadres sont-ils adaptés aux propriétés en bord de mer?', answer: 'Oui, nous appliquons une anodisation certifiée Seaside Class, offrant une résistance extrême à la corrosion saline.', textAnswer: 'Oui, nous appliquons une anodisation certifiée Seaside Class.' }
    ],
    nl: [
      { question: 'Hoeveel kosten aluminium ramen in Rethymnon?', answer: 'De kosten zijn afhankelijk van de profielserie, de beglazing en de afmetingen. Elk project wordt geprijsd na een gratis meting.', textAnswer: 'De kosten zijn afhankelijk van de profielserie, de beglazing en de afmetingen.' },
      { question: 'Wat is de U-waarde van uw ramen?', answer: 'Onze gecertificeerde Alumil-systemen bereiken een U-waarde tot 0,9 W/m²K.', textAnswer: 'Onze gecertificeerde Alumil-systemen bereiken een U-waarde tot 0,9 W/m²K.' },
      { question: 'Zijn uw kozijnen geschikt voor woningen aan zee?', answer: 'Ja, we passen Seaside Class-certificering anodisatie toe, voor extreme weerstand tegen zoutcorrosie.', textAnswer: 'Ja, we passen Seaside Class-certificering anodisatie toe.' }
    ]
  };
  const faqs = faqsContent[lang as keyof typeof faqsContent] || faqsContent['en'];

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
        "name": isEn ? "Aluminum Windows" : "Κουφώματα Αλουμινίου",
        "item": `https://alouminia-papadakis.gr/${lang}/services/koufomata-alouminiou-rethymno`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": isEn ? "Aluminum Windows Installation" : "Τοποθέτηση Κουφωμάτων Αλουμινίου",
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
      "name": isEn ? "Aluminum Windows Services" : "Υπηρεσίες Κουφωμάτων Αλουμινίου",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isEn ? "Energy Efficient Windows" : "Ενεργειακά Κουφώματα"
          }
        }
      ]
    }
  };

  return (
    <PageTransition>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
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

      <TrustBadges lang={lang as any} badges={['insulation', 'thermal', 'alumil']} className="relative z-30 -mt-12 bg-white" />

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

              <a href="tel:+302831023897" className="mt-12 inline-flex items-center gap-3 bg-red text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-xl shadow-red/25 active:scale-95">
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
      
      <section className="bg-gray-50 border-t border-gray-100">
        <FaqAccordion items={faqs} title={isEn ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"} />
      </section>
    </PageTransition>
  )
}
