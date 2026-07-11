import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageTransition from '@/components/PageTransition'
import { ChevronLeft, Info } from 'lucide-react'
import { projects } from '@/data/projects'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  const content = {
    el: {
      title: 'Τα Έργα Μας στην Κρήτη | Βίλες & Ξενοδοχεία',
      description: 'Εκτενές portfolio κατασκευαστικών έργων στην Κρήτη. Δείτε αναλυτικά case studies από τοποθετήσεις σε βίλες, ξενοδοχεία και βιομηχανικά κτίρια.',
      siteName: 'Αλουμίνια Παπαδάκης',
      imageAlt: 'Συστήματα αλουμινίου σε βίλα στην Κρήτη',
      locale: 'el_GR'
    },
    en: {
      title: 'Our Projects in Crete | Luxury Villas & Resorts',
      description: 'Explore our massive portfolio of aluminum and shading projects across Crete. Detailed case studies of luxury villas, boutique hotels, and complex commercial buildings.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Aluminum systems in a Crete luxury villa',
      locale: 'en_US'
    },
    de: {
      title: 'Unsere Projekte auf Kreta | Luxusvillen & Resorts',
      description: 'Entdecken Sie unser riesiges Portfolio an Aluminium- und Beschattungsprojekten auf Kreta. Detaillierte Fallstudien zu Luxusvillen und komplexen Gewerbegebäuden.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Aluminiumsysteme in einer Luxusvilla auf Kreta',
      locale: 'de_DE'
    },
    fr: {
      title: 'Nos Projets en Crète | Villas de Luxe & Hôtels',
      description: 'Découvrez notre vaste portfolio de projets en aluminium et ombrage en Crète. Études de cas détaillées de villas de luxe et bâtiments commerciaux complexes.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Systèmes en aluminium dans une villa de luxe en Crète',
      locale: 'fr_FR'
    },
    nl: {
      title: 'Onze Projecten op Kreta | Luxe Villa\'s & Resorts',
      description: 'Ontdek ons uitgebreide portfolio van aluminium- en schaduwprojecten op Kreta. Gedetailleerde casestudies van luxe villa\'s en complexe commerciële gebouwen.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Aluminium systemen in een luxe villa op Kreta',
      locale: 'nl_NL'
    }
  }

  const l = content[lang as keyof typeof content] || content['en'];
  const url = `https://alouminia-papadakis.gr/${lang}/portfolio`;
  const imageUrl = 'https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.png';

  return {
    title: l.title,
    description: l.description,
    alternates: {
      canonical: url,
      languages: {
        'el': 'https://alouminia-papadakis.gr/el/portfolio',
        'en': 'https://alouminia-papadakis.gr/en/portfolio',
        'de': 'https://alouminia-papadakis.gr/de/portfolio',
        'fr': 'https://alouminia-papadakis.gr/fr/portfolio',
        'nl': 'https://alouminia-papadakis.gr/nl/portfolio',
        'x-default': 'https://alouminia-papadakis.gr/el/portfolio',
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

export default async function PortfolioPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  const ui = {
    el: {
      back: 'Επιστροφή στην Αρχική',
      title1: 'Τα Έργα Μας στην',
      title2: 'Κρήτη',
      subtitle: 'Η απόδειξη της αξιοπιστίας μας. Δείτε αναλυτικά case studies από έργα εφαρμογής συστημάτων υψηλής αισθητικής.',
      badge: 'Φωτορεαλιστική απεικόνιση',
      b2bTitle: 'Αναλαμβάνετε κάποιο μεγάλο Project;',
      b2bDesc: 'Μηδενικές καθυστερήσεις. Εγγυημένη τήρηση παραδόσεων, ειδικές B2B τιμές και άμεση προτεραιότητα σε μεγάλα κατασκευαστικά έργα.',
      b2bBtn: 'Επικοινωνία με τμήμα B2B'
    },
    en: {
      back: 'Back to Home',
      title1: 'Our Work in',
      title2: 'Crete',
      subtitle: 'Proof of flawless execution. Explore our detailed case studies of premium aluminum installations.',
      badge: 'Photorealistic visualization',
      b2bTitle: 'Structured B2B Project Operations',
      b2bDesc: 'We provide structural solutions, structured timeline execution, and direct architectural collaboration for demanding hospitality or residential developments.',
      b2bBtn: 'Contact B2B Department'
    },
    de: {
      back: 'Zurück zur Startseite',
      title1: 'Unsere Arbeit auf',
      title2: 'Kreta',
      subtitle: 'Beweis für fehlerfreie Ausführung. Entdecken Sie unsere detaillierten Fallstudien zu hochwertigen Aluminiuminstallationen.',
      badge: 'Fotorealistische Darstellung',
      b2bTitle: 'Strukturierte B2B-Projektabläufe',
      b2bDesc: 'Wir bieten strukturelle Lösungen, strukturierte Zeitplanausführung und direkte architektonische Zusammenarbeit für anspruchsvolle Entwicklungen im Gastgewerbe oder Wohnungsbau.',
      b2bBtn: 'Kontakt B2B-Abteilung'
    },
    fr: {
      back: 'Retour à l\'accueil',
      title1: 'Notre Travail en',
      title2: 'Crète',
      subtitle: 'Preuve d\'une exécution sans faille. Découvrez nos études de cas détaillées sur les installations en aluminium premium.',
      badge: 'Visualisation photoréaliste',
      b2bTitle: 'Opérations Structurées de Projets B2B',
      b2bDesc: 'Nous fournissons des solutions structurelles, une exécution structurée du calendrier et une collaboration architecturale directe pour les développements hôteliers ou résidentiels exigeants.',
      b2bBtn: 'Contacter le Département B2B'
    },
    nl: {
      back: 'Terug naar Home',
      title1: 'Ons Werk op',
      title2: 'Kreta',
      subtitle: 'Bewijs van een vlekkeloze uitvoering. Ontdek onze gedetailleerde casestudies van premium aluminium installaties.',
      badge: 'Fotorealistische weergave',
      b2bTitle: 'Gestructureerde B2B Projectoperaties',
      b2bDesc: 'Wij bieden structurele oplossingen, een gestructureerde uitvoering van de planning en directe architectonische samenwerking voor veeleisende horeca- of woningbouwprojecten.',
      b2bBtn: 'Contacteer de B2B Afdeling'
    }
  }

  const t = ui[lang as keyof typeof ui] || ui['en'];

  // Sort real first, then render
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.type === 'real' && b.type === 'render') return -1;
    if (a.type === 'render' && b.type === 'real') return 1;
    return 0;
  });

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white border-b-8 border-red">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href={`/${lang}`} className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 font-medium">
            <ChevronLeft size={20} /> {t.back}
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {t.title1} <span className="text-red">{t.title2}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {sortedProjects.map((p, idx) => {
                const title = p[`title${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof p] as string || p.titleEN;
                const desc = p[`desc${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof p] as string || p.descEN;
                
                return (
                  <Link href={`/${lang}/portfolio/${p.slug}`} key={idx} className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 flex flex-col hover:border-red/30 transition-colors">
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image 
                        src={`/projects/${p.slug}/01.webp`}
                        alt={title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute top-4 left-4 bg-red text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg tracking-wider uppercase">
                        {p.category}
                      </div>
                      {p.type === 'render' && (
                        <div className="absolute bottom-4 left-4 bg-navy/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 border border-white/10">
                          <Info size={12} /> {t.badge}
                        </div>
                      )}
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="text-2xl font-black text-navy mb-4 leading-tight group-hover:text-red transition-colors">{title}</h3>
                      <p className="text-gray-600 mb-6 flex-1 leading-relaxed text-sm">
                        {desc.substring(0, 150)}...
                      </p>
                      <div className="font-bold text-red flex items-center gap-2">
                        View details →
                      </div>
                    </div>
                  </Link>
                )
             })}
          </div>

          <div className="mt-24 text-center">
             <div className="inline-block bg-white border border-gray-200 p-10 md:px-16 rounded-3xl shadow-xl relative overflow-hidden">
               <div className="absolute left-0 top-0 w-2 h-full bg-red"></div>
               <h3 className="text-3xl font-black text-navy mb-4 tracking-tight">{t.b2bTitle}</h3>
               <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg leading-relaxed">{t.b2bDesc}</p>
               <a href={`/${lang}#contact`} className="inline-block bg-navy hover:bg-red text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all duration-300">
                 {t.b2bBtn}
               </a>
             </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
