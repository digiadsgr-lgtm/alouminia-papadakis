import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import PageTransition from '@/components/PageTransition'
import TrustBadges from '@/components/TrustBadges'
import { Factory, Cog, ChevronLeft, Building } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  const content = {
    el: {
      title: 'Σιδηροκατασκευές Ρέθυμνο | Custom Ειδικές Κατασκευές',
      description: 'Εξειδικευμένες σιδηροκατασκευές στο Ρέθυμνο. Κατασκευή περιφράξεων, κάγκελων, στεγάστρων και βαρέων μεταλλικών κατασκευών με αντισκωριακή προστασία.',
      siteName: 'Αλουμίνια Παπαδάκης',
      imageAlt: 'Μεταλλικές κατασκευές και σιδηροκατασκευές στην Κρήτη',
      locale: 'el_GR'
    },
    en: {
      title: 'Ironworks Crete | Custom Metal Fabrications',
      description: 'Specialized ironworks in Rethymno, Crete. Custom fences, railings, and heavy metal structures with marine-grade rust protection.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Custom metal fabrications in Crete',
      locale: 'en_US'
    },
    de: {
      title: 'Eisenarbeiten Kreta | Metallkonstruktionen',
      description: 'Spezialisierte Eisenarbeiten in Rethymno, Kreta. Maßgeschneiderte Zäune, Geländer und schwere Metallkonstruktionen mit Rostschutz.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Maßgeschneiderte Metallkonstruktionen auf Kreta',
      locale: 'de_DE'
    },
    fr: {
      title: 'Ferronnerie Crète | Fabrications Métalliques',
      description: 'Ferronnerie spécialisée à Réthymnon, Crète. Clôtures, rampes et structures métalliques lourdes sur mesure avec protection antirouille.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Fabrications métalliques sur mesure en Crète',
      locale: 'fr_FR'
    },
    nl: {
      title: 'Smeedwerk Kreta | Metaalconstructies',
      description: 'Gespecialiseerd smeedwerk in Rethymnon, Kreta. Op maat gemaakte hekken, leuningen en zware metaalconstructies met roestbescherming.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Op maat gemaakte metaalconstructies op Kreta',
      locale: 'nl_NL'
    }
  }

  const l = content[lang as keyof typeof content] || content['en'];
  const url = `https://alouminia-papadakis.gr/${lang}/services/sidiros-kataskeves-rethymno`;
  const imageUrl = 'https://alouminia-papadakis.gr/images/ironworks_metal_crete_1776183416209.png';

  return {
    title: l.title,
    description: l.description,
    alternates: {
      canonical: url,
      languages: {
        'el': 'https://alouminia-papadakis.gr/el/services/sidiros-kataskeves-rethymno',
        'en': 'https://alouminia-papadakis.gr/en/services/sidiros-kataskeves-rethymno',
        'de': 'https://alouminia-papadakis.gr/de/services/sidiros-kataskeves-rethymno',
        'fr': 'https://alouminia-papadakis.gr/fr/services/sidiros-kataskeves-rethymno',
        'nl': 'https://alouminia-papadakis.gr/nl/services/sidiros-kataskeves-rethymno',
        'x-default': 'https://alouminia-papadakis.gr/el/services/sidiros-kataskeves-rethymno',
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

export default async function SidirosPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en'

  const faqsContent = {
    el: [
      {
        question: "Σκουριάζουν οι σιδηροκατασκευές κοντά στη θάλασσα;",
        answer: "Χρησιμοποιούμε θερμό γαλβάνισμα και ηλεκτροστατική βαφή που θωρακίζουν τον σίδηρο, καθιστώντας τις κατασκευές μας εξαιρετικά ανθεκτικές ακόμα και σε παραθαλάσσιες περιοχές.",
        textAnswer: "Χρησιμοποιούμε θερμό γαλβάνισμα και ηλεκτροστατική βαφή που θωρακίζουν τον σίδηρο, καθιστώντας τις κατασκευές μας εξαιρετικά ανθεκτικές ακόμα και σε παραθαλάσσιες περιοχές."
      },
      {
        question: "Κατασκευάζετε ειδικά σχέδια κατά παραγγελία;",
        answer: "Ναι, εξειδικευόμαστε σε custom σιδηροκατασκευές, από παραδοσιακά κάγκελα έως μοντέρνες αυλόπορτες και βιομηχανικά υπόστεγα, ακριβώς στα μέτρα σας.",
        textAnswer: "Ναι, εξειδικευόμαστε σε custom σιδηροκατασκευές, από παραδοσιακά κάγκελα έως μοντέρνες αυλόπορτες και βιομηχανικά υπόστεγα, ακριβώς στα μέτρα σας."
      }
    ],
    en: [
      {
        question: "Do iron structures rust near the sea?",
        answer: "We use hot-dip galvanizing and electrostatic painting to protect iron structures from corrosion, making them highly durable even in coastal areas.",
        textAnswer: "We use hot-dip galvanizing and electrostatic painting to protect iron structures from corrosion, making them highly durable even in coastal areas."
      },
      {
        question: "Can you create custom designs?",
        answer: "Yes, we specialize in custom ironworks, including traditional and modern gates, railings, and industrial structures tailored to your specifications.",
        textAnswer: "Yes, we specialize in custom ironworks, including traditional and modern gates, railings, and industrial structures tailored to your specifications."
      }
    ],
    de: [
      { question: "Rosten Eisenstrukturen in Meeresnähe?", answer: "Wir verwenden Feuerverzinkung und elektrostatische Lackierung, um Eisenstrukturen vor Korrosion zu schützen.", textAnswer: "Wir verwenden Feuerverzinkung und elektrostatische Lackierung, um Eisenstrukturen vor Korrosion zu schützen." },
      { question: "Können Sie maßgeschneiderte Designs erstellen?", answer: "Ja, wir sind auf maßgeschneiderte Eisenarbeiten spezialisiert.", textAnswer: "Ja, wir sind auf maßgeschneiderte Eisenarbeiten spezialisiert." }
    ],
    fr: [
      { question: "Les structures en fer rouillent-elles près de la mer ?", answer: "Nous utilisons la galvanisation à chaud et la peinture électrostatique pour protéger les structures en fer de la corrosion.", textAnswer: "Nous utilisons la galvanisation à chaud et la peinture électrostatique pour protéger les structures en fer de la corrosion." },
      { question: "Pouvez-vous créer des designs personnalisés ?", answer: "Oui, nous nous spécialisons dans la ferronnerie sur mesure.", textAnswer: "Oui, nous nous spécialisons dans la ferronnerie sur mesure." }
    ],
    nl: [
      { question: "Roesten ijzeren structuren bij de zee?", answer: "We gebruiken thermisch verzinken en elektrostatisch schilderen om ijzeren structuren tegen corrosie te beschermen.", textAnswer: "We gebruiken thermisch verzinken en elektrostatisch schilderen om ijzeren structuren tegen corrosie te beschermen." },
      { question: "Kunt u op maat gemaakte ontwerpen maken?", answer: "Ja, we zijn gespecialiseerd in op maat gemaakt smeedwerk.", textAnswer: "Ja, we zijn gespecialiseerd in op maat gemaakt smeedwerk." }
    ]
  };
  const faqs = faqsContent[lang as keyof typeof faqsContent] || faqsContent['en'];

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
        "name": isEn ? "Industrial Ironworks" : "Σιδηροκατασκευές",
        "item": `https://alouminia-papadakis.gr/${lang}/services/sidiros-kataskeves-rethymno`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": isEn ? "Custom Ironworks" : "Σιδηροκατασκευές",
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
      "name": isEn ? "Ironworks" : "Σιδηροκατασκευές",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": isEn ? "Metal Buildings & Gates" : "Μεταλλικά Κτίρια και Αυλόπορτες"
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

      <TrustBadges lang={lang as any} badges={['seaside', 'alumil']} className="relative z-30 -mt-12 bg-white" />

      <section className="py-24 bg-white text-navy">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">{isEn ? 'Absolute Mechanical Supremacy' : 'Η Απόλυτη Μηχανική Υπεροχή'}</h2>
              <div className="w-20 h-1.5 bg-red mb-8 rounded-full"></div>
              <ul className="space-y-8 mt-12">
                <li className="flex items-start gap-5 p-6 rounded-3xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer active:scale-[0.98]">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20 group-hover:bg-red/20 group-hover:scale-110 transition-all duration-300"><Building className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Metal Buildings' : 'Μεταλλικά Κτίρια'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? 'Industrial structural frameworks.' : 'Ανέγερση βιομηχανικών σκελετών.'}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 p-6 rounded-3xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer active:scale-[0.98]">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20 group-hover:bg-red/20 group-hover:scale-110 transition-all duration-300"><Cog className="text-red" size={28} /></div>
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
      
      <section className="bg-gray-50 border-t border-gray-100">
        <FaqAccordion items={faqs} title={isEn ? "Frequently Asked Questions" : "Συχνές Ερωτήσεις"} />
      </section>
    </PageTransition>
  )
}
