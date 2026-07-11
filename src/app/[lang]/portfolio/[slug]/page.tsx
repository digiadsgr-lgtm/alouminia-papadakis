import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { alumilSystems } from '@/data/systems'
import PageTransition from '@/components/PageTransition'
import { ChevronLeft, Info, CheckCircle2 } from 'lucide-react'

// Render text based on language
const getTranslations = (lang: string) => {
  switch (lang) {
    case 'el':
      return {
        back: 'Επιστροφή στο Portfolio',
        visualBadge: 'Φωτορεαλιστική απεικόνιση',
        system: 'Σύστημα',
        features: 'Χαρακτηριστικά',
        disclaimer: 'Οι απεικονίσεις είναι ενδεικτικές και αφορούν προτάσεις εφαρμογών σε υποθετικά έργα. Δεν αποτελούν πραγματικές φωτογραφίες.',
        contact: 'Ενδιαφέρεστε για αντίστοιχη εφαρμογή;'
      };
    case 'de':
      return {
        back: 'Zurück zum Portfolio',
        visualBadge: 'Fotorealistische Darstellung',
        system: 'System',
        features: 'Eigenschaften',
        disclaimer: 'Die Abbildungen sind indikativ und beziehen sich auf Anwendungsvorschläge in hypothetischen Projekten. Sie stellen keine echten Fotos dar.',
        contact: 'Interessiert an einer ähnlichen Anwendung?'
      };
    case 'fr':
      return {
        back: 'Retour au Portfolio',
        visualBadge: 'Visualisation photoréaliste',
        system: 'Système',
        features: 'Caractéristiques',
        disclaimer: 'Les illustrations sont indicatives et se réfèrent à des propositions d\'application dans des projets hypothétiques. Elles ne constituent pas de vraies photos.',
        contact: 'Intéressé par une application similaire?'
      };
    case 'nl':
      return {
        back: 'Terug naar Portfolio',
        visualBadge: 'Fotorealistische weergave',
        system: 'Systeem',
        features: 'Kenmerken',
        disclaimer: 'De afbeeldingen zijn indicatief en hebben betrekking op toepassingsvoorstellen in hypothetische projecten. Het zijn geen echte foto\'s.',
        contact: 'Geïnteresseerd in een vergelijkbare toepassing?'
      };
    case 'en':
    default:
      return {
        back: 'Back to Portfolio',
        visualBadge: 'Photorealistic visualization',
        system: 'System',
        features: 'Features',
        disclaimer: 'The illustrations are indicative and refer to application proposals in hypothetical projects. They are not real photos.',
        contact: 'Interested in a similar application?'
      };
  }
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) return {};

  const tTitle = project[`title${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof project] as string || project.titleEN;
  const tDesc = project[`desc${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof project] as string || project.descEN;
  
  const url = `https://alouminia-papadakis.gr/${lang}/portfolio/${slug}`;
  
  return {
    title: `${tTitle} | Portfolio`,
    description: tDesc,
    alternates: {
      canonical: url,
      languages: {
        'el': `https://alouminia-papadakis.gr/el/portfolio/${slug}`,
        'en': `https://alouminia-papadakis.gr/en/portfolio/${slug}`,
        'de': `https://alouminia-papadakis.gr/de/portfolio/${slug}`,
        'fr': `https://alouminia-papadakis.gr/fr/portfolio/${slug}`,
        'nl': `https://alouminia-papadakis.gr/nl/portfolio/${slug}`,
        'x-default': `https://alouminia-papadakis.gr/el/portfolio/${slug}`,
      }
    }
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const project = projects.find(p => p.slug === slug);
  
  if (!project) notFound();

  const t = getTranslations(lang);
  
  // Multilingual fields
  const pTitle = project[`title${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof project] as string || project.titleEN;
  const pDesc = project[`desc${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof project] as string || project.descEN;
  const pFeatures = project[`features${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof project] as string[] || project.featuresEN;

  const system = project.systemSlug ? alumilSystems.find(s => s.slug === project.systemSlug) : null;

  return (
    <PageTransition>
      {/* JSON-LD specifically without ImageObject for renders */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Portfolio",
                "item": `https://alouminia-papadakis.gr/${lang}/portfolio`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": pTitle,
                "item": `https://alouminia-papadakis.gr/${lang}/portfolio/${slug}`
              }
            ]
          })
        }}
      />
      
      <section className="relative pt-32 pb-20 bg-navy text-white min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy opacity-80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href={`/${lang}/portfolio`} className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 font-medium">
            <ChevronLeft size={20} /> {t.back}
          </Link>
          {project.type === 'render' && (
            <div className="flex justify-center mb-6">
              <span className="bg-white/10 text-white border border-white/20 text-xs px-4 py-1.5 rounded-full flex items-center gap-2">
                <Info size={14} /> {t.visualBadge}
              </span>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
            {pTitle}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {pDesc}
          </p>
        </div>
      </section>

      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
              <Image 
                src={`/projects/${slug}/01.webp`}
                alt={pTitle}
                fill
                className="object-cover"
                priority
              />
              {project.type === 'render' && (
                <div className="absolute bottom-4 left-4 bg-navy/80 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 border border-white/10">
                  <Info size={14} /> {t.visualBadge}
                </div>
              )}
            </div>
            
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-black text-navy mb-6">{t.features}</h3>
                  <ul className="space-y-4">
                    {pFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="text-red flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700 leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {system && (
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 h-fit">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{t.system}</h4>
                    <p className="text-2xl font-black text-navy mb-4">{system.name}</p>
                    <Link href={`/${lang}/systimata-alumil/${system.slug}`} className="text-red font-bold hover:underline">
                      View details →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {project.type === 'render' && (
            <div className="mt-8 text-center px-4">
              <p className="text-sm text-gray-400 italic">
                * {t.disclaimer}
              </p>
            </div>
          )}
          
          <div className="mt-20 text-center">
             <h3 className="text-3xl font-black text-navy mb-6">{t.contact}</h3>
             <a href={`/${lang}#contact`} className="inline-block bg-navy hover:bg-red text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all duration-300">
               +30 28310 23897
             </a>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
