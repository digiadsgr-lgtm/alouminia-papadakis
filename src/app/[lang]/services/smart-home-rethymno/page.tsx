import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import PageTransition from '@/components/PageTransition'
import TrustBadges from '@/components/TrustBadges'
import { Cpu, Smartphone, ShieldCheck, ChevronLeft } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  const content = {
    el: {
      title: 'Smart Home Ρέθυμνο | Αυτοματισμοί Κουφωμάτων',
      description: 'Λύσεις Smart Home για κουφώματα Alumil στο Ρέθυμνο. Απομακρυσμένος έλεγχος ρολών, βιοκλιματικών περγκολών και έξυπνες κλειδαριές ασφαλείας.',
      siteName: 'Αλουμίνια Παπαδάκης',
      imageAlt: 'Έξυπνο σπίτι και αυτοματισμοί κουφωμάτων στην Κρήτη',
      locale: 'el_GR'
    },
    en: {
      title: 'Smart Home Crete | Window Automations',
      description: 'Smart home integration for Alumil windows in Rethymno. Remote-controlled rolling shutters, bioclimatic pergolas, and smart security locks.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Smart home window automations in Crete',
      locale: 'en_US'
    },
    de: {
      title: 'Smart Home Kreta | Fensterautomatisierungen',
      description: 'Integration von Smart Home für Alumil-Fenster in Rethymno. Ferngesteuerte Rollläden, bioklimatische Pergolen und intelligente Sicherheitsschlösser.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Smart Home Fensterautomatisierungen auf Kreta',
      locale: 'de_DE'
    },
    fr: {
      title: 'Maison Intelligente Crète | Automatisations Fenêtres',
      description: 'Intégration de maison intelligente pour fenêtres Alumil à Réthymnon. Volets roulants contrôlés à distance, pergolas bioclimatiques et serrures connectées.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Automatisations de fenêtres intelligentes en Crète',
      locale: 'fr_FR'
    },
    nl: {
      title: 'Smart Home Kreta | Raamautomatisering',
      description: 'Smart home integratie voor Alumil ramen in Rethymnon. Op afstand bedienbare rolluiken, bioklimatische pergola\'s en slimme veiligheidssloten.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Smart home raamautomatisering op Kreta',
      locale: 'nl_NL'
    }
  }

  const l = content[lang as keyof typeof content] || content['en'];
  const url = `https://alouminia-papadakis.gr/${lang}/services/smart-home-rethymno`;
  const imageUrl = 'https://alouminia-papadakis.gr/images/smart_home_automation_1776183424168.png';

  return {
    title: l.title,
    description: l.description,
    alternates: {
      canonical: url,
      languages: {
        'el': 'https://alouminia-papadakis.gr/el/services/smart-home-rethymno',
        'en': 'https://alouminia-papadakis.gr/en/services/smart-home-rethymno',
        'de': 'https://alouminia-papadakis.gr/de/services/smart-home-rethymno',
        'fr': 'https://alouminia-papadakis.gr/fr/services/smart-home-rethymno',
        'nl': 'https://alouminia-papadakis.gr/nl/services/smart-home-rethymno',
        'x-default': 'https://alouminia-papadakis.gr/el/services/smart-home-rethymno',
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

export default async function SmartHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en'

  const faqsContent = {
    el: [
      {
        question: "Μπορώ να κάνω έξυπνα τα ήδη υπάρχοντα κουφώματά μου;",
        answer: "Στις περισσότερες περιπτώσεις, ναι! Μπορούμε να τοποθετήσουμε μοτέρ Somfy ή άλλους συμβατούς αυτοματισμούς στα υπάρχοντα ρολά, τις τέντες ή τις πέργκολές σας χωρίς να χρειαστεί πλήρης αντικατάσταση.",
        textAnswer: "Στις περισσότερες περιπτώσεις, ναι! Μπορούμε να τοποθετήσουμε μοτέρ Somfy ή άλλους συμβατούς αυτοματισμούς στα υπάρχοντα ρολά, τις τέντες ή τις πέργκολές σας χωρίς να χρειαστεί πλήρης αντικατάσταση."
      },
      {
        question: "Είναι δύσκολο στη χρήση;",
        answer: "Καθόλου. Τα συστήματα έχουν σχεδιαστεί για να είναι εξαιρετικά φιλικά προς τον χρήστη. Μπορείτε να ελέγχετε τα πάντα από το κινητό, το tablet ή με φωνητικές εντολές μέσω Google Assistant / Alexa.",
        textAnswer: "Καθόλου. Τα συστήματα έχουν σχεδιαστεί για να είναι εξαιρετικά φιλικά προς τον χρήστη. Μπορείτε να ελέγχετε τα πάντα από το κινητό, το tablet ή με φωνητικές εντολές μέσω Google Assistant / Alexa."
      }
    ],
    en: [
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
    ],
    de: [
      { question: "Kann ich meine bestehenden Aluminiumfenster auf ein Smart-Home-System aufrüsten?", answer: "In den meisten Fällen ja! Wir können Somfy-Motoren an Ihren bestehenden Rollläden nachrüsten, ohne das gesamte System austauschen zu müssen.", textAnswer: "In den meisten Fällen ja! Wir können Somfy-Motoren an Ihren bestehenden Rollläden nachrüsten." },
      { question: "Ist es schwierig zu bedienen?", answer: "Ganz und gar nicht. Die Systeme sind benutzerfreundlich gestaltet.", textAnswer: "Ganz und gar nicht. Die Systeme sind benutzerfreundlich gestaltet." }
    ],
    fr: [
      { question: "Puis-je mettre à niveau mes fenêtres existantes vers un système de maison intelligente ?", answer: "Dans la plupart des cas, oui ! Nous pouvons installer des moteurs Somfy sur vos volets roulants existants sans avoir à remplacer l'ensemble du système.", textAnswer: "Dans la plupart des cas, oui ! Nous pouvons installer des moteurs Somfy sur vos volets roulants existants sans avoir à remplacer l'ensemble du système." },
      { question: "Est-ce difficile à utiliser ?", answer: "Pas du tout. Les systèmes sont conçus pour être conviviaux.", textAnswer: "Pas du tout. Les systèmes sont conçus pour être conviviaux." }
    ],
    nl: [
      { question: "Kan ik mijn bestaande aluminium ramen upgraden naar een smart home-systeem?", answer: "In de meeste gevallen wel! We kunnen Somfy-motoren op uw bestaande rolluiken achteraf monteren zonder het hele systeem te hoeven vervangen.", textAnswer: "In de meeste gevallen wel! We kunnen Somfy-motoren op uw bestaande rolluiken achteraf monteren zonder het hele systeem te hoeven vervangen." },
      { question: "Is het moeilijk te gebruiken?", answer: "Helemaal niet. De systemen zijn ontworpen om gebruiksvriendelijk te zijn.", textAnswer: "Helemaal niet. De systemen zijn ontworpen om gebruiksvriendelijk te zijn." }
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
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 lg:mt-40 mb-[-3rem] relative z-20"><Breadcrumbs lang={lang as string} items={[{label: lang === 'el' ? 'Υπηρεσίες' : 'Services', href: '#'}, {label: "{isEn ? 'Smart Home &' : 'Έξυπνο Σπίτι &'} {isEn ? 'Automations' : 'Αυτοματισμοί'}", href: '#'}]} /></div>

      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy border-b-[6px] border-red">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/smart_home_automation_1776183365365.webp" 
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

      <TrustBadges lang={lang as any} badges={['alumil']} className="relative z-30 -mt-12 bg-white" />

      <section className="py-24 bg-white text-navy">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="h-full relative min-h-[500px] rounded-[32px] overflow-hidden shadow-2xl group">
               <Image 
                 src="/images/smart_home_automation_1776183365365.webp"
                 alt="Somfy Smart Home"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-bl from-navy/50 to-transparent"></div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">{isEn ? 'Total Control Architecture' : 'Πλήρης Έλεγχος & Ασφάλεια'}</h2>
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
