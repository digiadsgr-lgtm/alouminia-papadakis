import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import PageTransition from '@/components/PageTransition'
import TrustBadges from '@/components/TrustBadges'
import { ShieldCheck, Lock, Award, ChevronLeft } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  const content = {
    el: {
      title: 'Θωρακισμένες Πόρτες Ασφαλείας Ρέθυμνο | Τοποθέτηση',
      description: 'Πιστοποιημένες πόρτες ασφαλείας και θωρακισμένες πόρτες (Class 3 & 4) στο Ρέθυμνο. Μέγιστη αντοχή σε διαρρήξεις, κορυφαία αισθητική και ηχομόνωση.',
      siteName: 'Αλουμίνια Παπαδάκης',
      imageAlt: 'Θωρακισμένη πόρτα ασφαλείας στο Ρέθυμνο',
      locale: 'el_GR'
    },
    en: {
      title: 'Armored Security Doors Crete | Premium Installation',
      description: 'Certified security doors (Class 3 & 4) in Rethymno, Crete. Maximum burglary resistance, premium aesthetics, and top-tier sound insulation.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Armored security door in Crete',
      locale: 'en_US'
    },
    de: {
      title: 'Sicherheitstüren Kreta | Gepanzerte Installation',
      description: 'Zertifizierte Sicherheitstüren (Klasse 3 & 4) in Rethymno, Kreta. Maximale Einbruchhemmung, erstklassige Ästhetik und hervorragende Schalldämmung.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Gepanzerte Sicherheitstür auf Kreta',
      locale: 'de_DE'
    },
    fr: {
      title: 'Portes Blindées Crète | Installation Premium',
      description: 'Portes de sécurité certifiées (Classe 3 & 4) à Réthymnon, Crète. Résistance maximale à l\'effraction, esthétique premium et isolation phonique.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Porte blindée de sécurité en Crète',
      locale: 'fr_FR'
    },
    nl: {
      title: 'Veiligheidsdeuren Kreta | Gepantserde Installatie',
      description: 'Gecertificeerde veiligheidsdeuren (Klasse 3 & 4) in Rethymnon, Kreta. Maximale inbraakwerendheid, premium esthetiek en geluidsisolatie.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Gepantserde veiligheidsdeur op Kreta',
      locale: 'nl_NL'
    }
  }

  const l = content[lang as keyof typeof content] || content['en'];
  const url = `https://alouminia-papadakis.gr/${lang}/services/portes-asfaleias-rethymno`;
  const imageUrl = 'https://alouminia-papadakis.gr/images/security_door_armored_1776183382427.webp';

  return {
    title: l.title,
    description: l.description,
    alternates: {
      canonical: url,
      languages: {
        'el': 'https://alouminia-papadakis.gr/el/services/portes-asfaleias-rethymno',
        'en': 'https://alouminia-papadakis.gr/en/services/portes-asfaleias-rethymno',
        'de': 'https://alouminia-papadakis.gr/de/services/portes-asfaleias-rethymno',
        'fr': 'https://alouminia-papadakis.gr/fr/services/portes-asfaleias-rethymno',
        'nl': 'https://alouminia-papadakis.gr/nl/services/portes-asfaleias-rethymno',
        'x-default': 'https://alouminia-papadakis.gr/el/services/portes-asfaleias-rethymno',
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

export default async function SecurityDoorsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang === 'en'

  const faqsContent = {
    el: [
      {
        question: "Τι κλάση ασφαλείας έχουν οι πόρτες σας;",
        answer: "Οι θωρακισμένες πόρτες μας διαθέτουν πιστοποίηση αντιδιαρρηκτικής προστασίας RC3 και RC4, με πολλαπλά σημεία κλειδώματος και ενισχυμένα ατσάλινα φύλλα.",
        textAnswer: "Οι θωρακισμένες πόρτες μας διαθέτουν πιστοποίηση αντιδιαρρηκτικής προστασίας RC3 και RC4, με πολλαπλά σημεία κλειδώματος και ενισχυμένα ατσάλινα φύλλα."
      },
      {
        question: "Μπορώ να επιλέξω το σχέδιο της πόρτας;",
        answer: "Φυσικά. Η εξωτερική επένδυση μπορεί να προσαρμοστεί πλήρως (ξύλο, αλουμίνιο, τζάμι, μοντέρνα χρώματα) ώστε να ταιριάζει με την αισθητική της κατοικίας σας.",
        textAnswer: "Φυσικά. Η εξωτερική επένδυση μπορεί να προσαρμοστεί πλήρως (ξύλο, αλουμίνιο, τζάμι, μοντέρνα χρώματα) ώστε να ταιριάζει με την αισθητική της κατοικίας σας."
      }
    ],
    en: [
      {
        question: "Are your doors certified for security?",
        answer: "Yes, all our security doors meet RC3/RC4 anti-burglary standards and are constructed with reinforced steel sheets and multi-point locking mechanisms.",
        textAnswer: "Yes, all our security doors meet RC3/RC4 anti-burglary standards and are constructed with reinforced steel sheets and multi-point locking mechanisms."
      },
      {
        question: "Can I choose the design of the door?",
        answer: "Absolutely! We offer a wide range of external linings (wood, aluminum, glass, modern colors) to match the aesthetics of your home.",
        textAnswer: "Absolutely! We offer a wide range of external linings (wood, aluminum, glass, modern colors) to match the aesthetics of your home."
      }
    ],
    de: [
      { question: "Sind Ihre Türen sicherheitszertifiziert?", answer: "Ja, alle unsere Sicherheitstüren erfüllen die Einbruchschutznormen RC3/RC4.", textAnswer: "Ja, alle unsere Sicherheitstüren erfüllen die Einbruchschutznormen RC3/RC4." },
      { question: "Kann ich das Design der Tür wählen?", answer: "Absolut! Wir bieten eine große Auswahl an Außenverkleidungen.", textAnswer: "Absolut! Wir bieten eine große Auswahl an Außenverkleidungen." }
    ],
    fr: [
      { question: "Vos portes sont-elles certifiées pour la sécurité ?", answer: "Oui, toutes nos portes de sécurité répondent aux normes anti-effraction RC3/RC4.", textAnswer: "Oui, toutes nos portes de sécurité répondent aux normes anti-effraction RC3/RC4." },
      { question: "Puis-je choisir le design de la porte ?", answer: "Absolument ! Nous proposons une large gamme de revêtements extérieurs.", textAnswer: "Absolument ! Nous proposons une large gamme de revêtements extérieurs." }
    ],
    nl: [
      { question: "Zijn uw deuren gecertificeerd voor veiligheid?", answer: "Ja, al onze veiligheidsdeuren voldoen aan de RC3/RC4-inbraaknormen.", textAnswer: "Ja, al onze veiligheidsdeuren voldoen aan de RC3/RC4-inbraaknormen." },
      { question: "Kan ik het ontwerp van de deur kiezen?", answer: "Absoluut! We bieden een breed scala aan buitenbekledingen.", textAnswer: "Absoluut! We bieden een breed scala aan buitenbekledingen." }
    ]
  };
  const faqs = faqsContent[lang as keyof typeof faqsContent] || faqsContent['en'];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Security Door Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Αλουμίνια Παπαδάκης"
    },
    "description": isEn ? "Sales and precise installation of Class 3 and Class 4 armored security doors equipped with defender locks." : "Πώληση και τοποθέτηση θωρακισμένων πορτών ασφαλείας (Κλάση 3 & 4) με κλειδαριές νέας τεχνολογίας (Defender)."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": isEn ? "What anti-burglary class do your doors provide?" : "Τι κλάση ασφαλείας παρέχουν οι θωρακισμένες πόρτες σας;",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": isEn ? "We install and sell certified doors up to Class 4, ensuring maximum resistance against heavy intrusion tools." : "Παρέχουμε και τοποθετούμε πιστοποιημένες πόρτες έως Κλάση 4, προσφέροντας κορυφαία αντίσταση σε διαρρηκτικά εργαλεία βαρέως τύπου."
      }
    }]
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
        "name": isEn ? "Security Doors" : "Πόρτες Ασφαλείας",
        "item": `https://alouminia-papadakis.gr/${lang}/services/portes-asfaleias-rethymno`
      }
    ]
  };

  return (
    <PageTransition>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 lg:mt-40 mb-[-3rem] relative z-20"><Breadcrumbs lang={lang as string} items={[{label: lang === 'el' ? 'Υπηρεσίες' : 'Services', href: '#'}, {label: "{isEn ? 'Armored Security' : 'Θωρακισμένες Πόρτες'}  {isEn ? 'Doors' : 'Ασφαλείας'}", href: '#'}]} /></div>

      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <article className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy border-b-[6px] border-red">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/security_door_armored_1776183382427.webp" 
            alt="Θωρακισμένες Πόρτες Ασφαλείας Ρέθυμνο" 
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
             {isEn ? 'Armored Security' : 'Θωρακισμένες Πόρτες'} <br/> <span className="text-red">{isEn ? 'Doors' : 'Ασφαλείας'}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
             {isEn ? 'Protect what matters most. We offer premium sales and professional installation of Class 3/4 security doors, armed with multi-point defender locks.' : 'Πώληση και τοποθέτηση θωρακισμένων πορτών. Η 1η γραμμή άμυνας της οικίας σας με συστήματα κλειδώματος Defender και πιστοποίηση Anti-Burglar Class 3 & 4.'}
          </p>
        </header>
      </article>

      <TrustBadges lang={lang as any} badges={['security', 'alumil']} className="relative z-30 -mt-12 bg-white" />

      <section className="py-24 bg-white text-navy">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="h-full relative min-h-[500px] rounded-[32px] overflow-hidden group shadow-2xl">
               <Image 
                 src="/images/security_door_armored_1776183382427.webp"
                 alt="Security Doors"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
               <div className="absolute bottom-10 left-8 right-8">
                 <div className="glass-panel p-8">
                   <p className="text-navy font-black text-xl mb-3 uppercase tracking-wide">{isEn ? 'Zero Intrusions' : 'Αδιαπέραστη Θωράκιση'}</p>
                   <p className="text-gray-700 text-lg font-medium">{isEn ? 'Certified for extreme impact resistance.' : 'Πιστοποιημένη προστασία από τη μηχανική παραβίαση.'}</p>
                 </div>
               </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">{isEn ? 'Uncompromising Engineering' : 'Πώληση & Σωστή Τοποθέτηση'}</h2>
              <div className="w-20 h-1.5 bg-red mb-8 rounded-full"></div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                 {isEn ? 'A high-end door is useless without proper installation. Our certified technical team ensures absolute structural bonding between the frame and your walls.' : 'Ακόμα και η πιο ακριβή πόρτα είναι ευάλωτη αν τοποθετηθεί λάθος. Η τεχνική μας ομάδα αναλαμβάνει την άρτια εγκατάσταση με ενισχυμένα μεταλλικά δεσίματα στον τοίχο, εξασφαλίζοντας πως η πόρτα δεν πρόκειται να υποχωρήσει κάτω από οποιαδήποτε πίεση.'}
              </p>
              <ul className="space-y-8 mt-12">
                <li className="flex items-start gap-5">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20"><Lock className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Multi-Point Locking & Defender' : 'Κλειδαριές Defender Νέας Γενιάς'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? '14-point locking mechanisms utilizing Defender cylinder protection against picking and drilling.' : '14 έως 18 σημεία περιμετρικού κλειδώματος με προστασία κυλίνδρου Defender (Anti-Drill / Anti-Pick) που αποτρέπει τη διάρρηξη.'}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-red/10 p-4 rounded-2xl border border-red/20"><Award className="text-red" size={28} /></div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2 text-navy tracking-tight">{isEn ? 'Certified Sound/Thermal Insulation' : 'Θερμομόνωση & Ηχομόνωση'}</h3>
                    <p className="text-gray-600 text-lg">{isEn ? 'Integrated windbreakers and dense internal insulation keeping noise and cold completely out.' : 'Εσωτερική μόνωση υψηλής πυκνότητας και ενσωματωμένος ανεμοφράκτης, απομονώνοντας τον ήχο και τις καιρικές συνθήκες.'}</p>
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
