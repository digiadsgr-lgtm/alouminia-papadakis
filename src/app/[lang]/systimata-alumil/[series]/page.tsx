import { alumilSystems } from '@/data/systems'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { Check, Shield, Info, ArrowRight } from 'lucide-react'
import JsonLd from '@/components/JsonLd'

// Translation helper
const getUi = (lang: string) => {
  switch (lang) {
    case 'el': return {
      home: 'Αρχική',
      hub: 'Συστήματα Alumil',
      subtitle: 'Κατασκευή & Τοποθέτηση στο Ρέθυμνο',
      contact: 'Επικοινωνία (28310 23897)',
      specs: 'Τεχνικά Χαρακτηριστικά (Specs)',
      cat: 'Κατηγορία Συστήματος',
      uw: 'Θερμοπερατότητα (Uw)',
      from: 'από',
      uwDisc: '* Ανάλογα με τον υαλοπίνακα και τις διαστάσεις του κουφώματος, βάσει του επίσημου datasheet της Alumil.',
      ideal: 'Για ποιον είναι ιδανικό',
      why: 'Γιατί από εμάς',
      relServ: 'Σχετικές Υπηρεσίες',
      servKoufomata: 'Κουφώματα Αλουμινίου',
      servPergoles: 'Πέργκολες & Σκίαση',
      servExo: 'Οδηγός Εξοικονομώ 2026',
      other: 'Άλλα Συστήματα',
      viewAll: 'Προβολή όλων'
    }
    case 'de': return {
      home: 'Startseite',
      hub: 'Alumil Systeme',
      subtitle: 'Herstellung & Installation auf Kreta',
      contact: 'Kontakt (28310 23897)',
      specs: 'Technische Eigenschaften (Specs)',
      cat: 'Systemkategorie',
      uw: 'Wärmedurchgang (Uw)',
      from: 'ab',
      uwDisc: '* Abhängig von der Verglasung und den Rahmenabmessungen basierend auf dem offiziellen Alumil-Datenblatt.',
      ideal: 'Für wen ist es ideal?',
      why: 'Warum von uns',
      relServ: 'Verwandte Dienstleistungen',
      servKoufomata: 'Aluminiumfenster',
      servPergoles: 'Pergolen & Beschattung',
      servExo: 'Energieeffizienz-Zuschüsse',
      other: 'Andere Systeme',
      viewAll: 'Alle anzeigen'
    }
    case 'fr': return {
      home: 'Accueil',
      hub: 'Systèmes Alumil',
      subtitle: 'Fabrication & Installation en Crète',
      contact: 'Contact (28310 23897)',
      specs: 'Caractéristiques Techniques (Specs)',
      cat: 'Catégorie de Système',
      uw: 'Transmittance Thermique (Uw)',
      from: 'à partir de',
      uwDisc: '* Dépend du vitrage et des dimensions du cadre, selon la fiche technique officielle Alumil.',
      ideal: 'Pour qui est-ce idéal ?',
      why: 'Pourquoi nous choisir',
      relServ: 'Services Liés',
      servKoufomata: 'Fenêtres en Aluminium',
      servPergoles: 'Pergolas & Ombrage',
      servExo: 'Subventions Énergétiques',
      other: 'Autres Systèmes',
      viewAll: 'Voir tout'
    }
    case 'nl': return {
      home: 'Home',
      hub: 'Alumil Systemen',
      subtitle: 'Productie & Installatie op Kreta',
      contact: 'Contact (28310 23897)',
      specs: 'Technische Kenmerken (Specs)',
      cat: 'Systeemcategorie',
      uw: 'Thermische Doorlaatbaarheid (Uw)',
      from: 'vanaf',
      uwDisc: '* Afhankelijk van de beglazing en kozijnafmetingen op basis van de officiële Alumil-datasheet.',
      ideal: 'Voor wie is het ideaal?',
      why: 'Waarom bij ons',
      relServ: 'Gerelateerde Diensten',
      servKoufomata: 'Aluminium Ramen',
      servPergoles: 'Pergola\'s & Schaduw',
      servExo: 'Energie-Subsidies',
      other: 'Andere Systemen',
      viewAll: 'Bekijk alles'
    }
    case 'en':
    default: return {
      home: 'Home',
      hub: 'Alumil Systems',
      subtitle: 'Manufacturing & Installation in Crete',
      contact: 'Contact (28310 23897)',
      specs: 'Technical Specifications (Specs)',
      cat: 'System Category',
      uw: 'Thermal Transmittance (Uw)',
      from: 'from',
      uwDisc: '* Depending on glazing and frame dimensions based on official Alumil datasheet.',
      ideal: 'Ideal For',
      why: 'Why Us',
      relServ: 'Related Services',
      servKoufomata: 'Aluminum Windows',
      servPergoles: 'Pergolas & Shading',
      servExo: 'Energy Efficiency Grants',
      other: 'Other Systems',
      viewAll: 'View all'
    }
  }
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string, series: string }> }): Promise<Metadata> {
  const { lang, series } = await params;
  const system = alumilSystems.find(s => s.slug === series)
  
  if (!system) return {}
  
  const desc = system[`shortDesc${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof system] as string || system.shortDescEN;

  return {
    title: `Alumil ${system.name} | Αλουμίνια Παπαδάκης`,
    description: desc,
    alternates: {
      canonical: `https://alouminia-papadakis.gr/${lang}/systimata-alumil/${system.slug}`,
      languages: {
        'el': `https://alouminia-papadakis.gr/el/systimata-alumil/${system.slug}`,
        'en': `https://alouminia-papadakis.gr/en/systimata-alumil/${system.slug}`,
        'de': `https://alouminia-papadakis.gr/de/systimata-alumil/${system.slug}`,
        'fr': `https://alouminia-papadakis.gr/fr/systimata-alumil/${system.slug}`,
        'nl': `https://alouminia-papadakis.gr/nl/systimata-alumil/${system.slug}`,
        'x-default': `https://alouminia-papadakis.gr/el/systimata-alumil/${system.slug}`,
      }
    }
  }
}

export function generateStaticParams() {
  const params = [];
  for (const lang of ['el', 'en', 'de', 'fr', 'nl']) {
    for (const s of alumilSystems) {
      params.push({ lang, series: s.slug });
    }
  }
  return params;
}

export default async function SeriesPage({ params }: { params: Promise<{ lang: string, series: string }> }) {
  const { lang, series } = await params;

  const system = alumilSystems.find(s => s.slug === series)
  if (!system) {
    notFound()
  }

  const otherSystems = alumilSystems.filter(s => s.slug !== series).slice(0, 2)
  const ui = getUi(lang);

  const category = system[`category${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof system] as string || system.categoryEN;
  const shortDesc = system[`shortDesc${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof system] as string || system.shortDescEN;
  const features = system[`features${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof system] as {label:string, value:string}[] || system.featuresEN;
  const idealFor = system[`idealFor${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof system] as string || system.idealForEN;
  const whyUs = system[`whyUs${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof system] as string || system.whyUsEN;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Alumil ${system.name}`,
    "image": `https://alouminia-papadakis.gr${system.imageUrl}`,
    "description": shortDesc,
    "brand": {
      "@type": "Brand",
      "name": "Alumil"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "price": "0",
      "url": `https://alouminia-papadakis.gr/${lang}/systimata-alumil/${system.slug}`
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": ui.home,
        "item": `https://alouminia-papadakis.gr/${lang}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": ui.hub,
        "item": `https://alouminia-papadakis.gr/${lang}/systimata-alumil`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": system.name,
        "item": `https://alouminia-papadakis.gr/${lang}/systimata-alumil/${system.slug}`
      }
    ]
  }

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-gray-200">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={system.imageUrl} alt={system.name} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-sm text-gray-400">
            <Link href={`/${lang}`} className="hover:text-white transition-colors">{ui.home}</Link>
            <span>/</span>
            <Link href={`/${lang}/systimata-alumil`} className="hover:text-white transition-colors">{ui.hub}</Link>
            <span>/</span>
            <span className="text-red-400">{system.name}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Alumil {system.name} <br/>
            <span className="text-2xl md:text-3xl text-gray-400 font-normal">— {ui.subtitle}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            {shortDesc}
          </p>
          
          <div className="flex gap-4">
            <a href="tel:+302831023897" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center gap-2">
              <Shield className="w-5 h-5" /> {ui.contact}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Specs Table */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Info className="text-red-500 w-6 h-6" /> {ui.specs}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-white/10">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-4 font-medium text-gray-400">{ui.cat}</td>
                        <td className="py-4 text-white font-bold">{category}</td>
                      </tr>
                      {system.uw !== '-' && (
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="py-4 font-medium text-gray-400">{ui.uw}</td>
                          <td className="py-4 text-white font-bold">{ui.from} {system.uw} W/m²K*</td>
                        </tr>
                      )}
                      {features.map((feat: any, idx: number) => (
                        <tr key={idx} className="hover:bg-white/5 transition-colors">
                          <td className="py-4 font-medium text-gray-400">{feat.label}</td>
                          <td className="py-4 text-white font-bold">{feat.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {system.uw !== '-' && (
                  <p className="text-sm text-gray-500 mt-4">
                    {ui.uwDisc}
                  </p>
                )}
              </div>

              {/* Text Sections */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">{ui.ideal}</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {idealFor}
                </p>
                
                <h2 className="text-2xl font-bold text-white mb-4">{ui.why}</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {whyUs}
                </p>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Internal Links Card */}
              <div className="bg-gradient-to-br from-red-900/40 to-black border border-red-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">{ui.relServ}</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href={`/${lang}/services/koufomata-alouminiou-rethymno`} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 text-red-500" /> {ui.servKoufomata}
                    </Link>
                  </li>
                  {system.slug.includes('pergoles') ? (
                    <li>
                      <Link href={`/${lang}/services/pergoles-rethymno-kriti`} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4 text-red-500" /> {ui.servPergoles}
                      </Link>
                    </li>
                  ) : null}
                  {lang === 'el' && (
                    <li>
                      <Link href="/el/blog/exoikonomo-2026-koufomata-kriti" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                        <ArrowRight className="w-4 h-4 text-red-500" /> {ui.servExo}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>

              {/* Other Systems */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">{ui.other}</h3>
                <div className="space-y-4">
                  {otherSystems.map(os => {
                    const osCat = os[`category${lang.toUpperCase() as 'EL'|'EN'|'DE'|'FR'|'NL'}` as keyof typeof os] as string || os.categoryEN;
                    return (
                      <Link key={os.slug} href={`/${lang}/systimata-alumil/${os.slug}`} className="block group">
                        <div className="font-bold text-gray-200 group-hover:text-red-400 transition-colors">{os.name}</div>
                        <div className="text-sm text-gray-500">{osCat}</div>
                      </Link>
                    )
                  })}
                  <Link href={`/${lang}/systimata-alumil`} className="block text-sm text-red-500 hover:underline mt-4">
                    {ui.viewAll} &rarr;
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
