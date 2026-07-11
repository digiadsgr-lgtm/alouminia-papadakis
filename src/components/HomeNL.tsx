"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Zap, CheckCircle2, ChevronRight, PhoneCall, MapPin, Mail, Sparkles, Home, BookOpen } from 'lucide-react'
import TrustBadges from './TrustBadges'
import JsonLd from '@/components/JsonLd'
import { useRef } from 'react'

export default function HomeNL() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  // Parallax Effect
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Papadakis Aluminium",
    "image": "https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.png",
    "@id": "https://alouminia-papadakis.gr/en",
    "url": "https://alouminia-papadakis.gr/en",
    "telephone": "+302831023897",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Drouliskou 8",
      "addressLocality": "Rethymno",
      "postalCode": "74100",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.366667,
      "longitude": 24.483333
    },
    "priceRange": "$$$"
  };

  const faqSchemaNL = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wat is de projectworkflow bij Papadakis Aluminium op Kreta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wij opereren als een gestructureerd bouwbedrijf, niet als een reparatiedienst. Onze workflow: 1) Inspectie ter plaatse & architecturaal advies, 2) CAD technische tekeningen & gedetailleerde offerte, 3) Eigen productie in onze 300m² faciliteit in Rethymnon, 4) Professionele installatie door onze vaste teams, 5) Turn-key oplevering, 6) Dienst na verkoop & garantie."
        }
      },
      {
        "@type": "Question",
        "name": "In welke soorten projecten is Papadakis Aluminium gespecialiseerd?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wij zijn gespecialiseerd in premium projectmatig werk: luxe villa&apos;s, boetiekhotels, hoogwaardige residentiële ontwikkelingen en commercieel vastgoed op heel Kreta. Wij werken op projectniveau samen met architecten, civiel ingenieurs en hoofdaannemers — wij doen geen individuele reparaties."
        }
      },
      {
        "@type": "Question",
        "name": "Werkt u samen met architecten en aannemers aan grote ontwikkelingen op Kreta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Een groot deel van ons werk komt voort uit terugkerende partnerschappen met architecten, civiel ingenieurs en bouwbedrijven op heel Kreta. Wij integreren naadloos in grotere bouwplanningen en bieden uiterst nauwkeurige productie en tijdige installatie. Voor buitenlandse investeerders bieden wij ook compleet remote projectbeheer aan."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe garandeert u de projectplanningen en voorkomt u vertragingen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We reduceren vertragingen tot nul dankzij onze uitgebreide expertise. We beheren onze eigen productielijn, hebben toegewijde vaste installatieteams in dienst en houden ons strikt aan gestandaardiseerde projectprocessen. We leveren projecten — van enkele luxe villa&apos;s tot volledige boetiekhotels — exact op schema, zonder compromissen."
        }
      },
      {
        "@type": "Question",
        "name": "Heeft u een bewezen portfolio voor hoogwaardige architecturale projecten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Ons uitgebreide portfolio is sterk gericht op esthetiek op villaniveau en complexe commerciële eisen, niet op geïsoleerde raamvervangingen. Wij integreren naadloos met architectenbureaus en hoofdaannemers om premium turn-key oplossingen (aluminium systemen, op maat gemaakt inox smeedwerk, bioklimatische pergola's) te bieden."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe is uw After-Sales support gestructureerd?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wij zijn een gestructureerd bouwbedrijf, geen onafhankelijke klusjesmannen. Papadakis Aluminium beschikt over een georganiseerde After-Sales afdeling die de officiële Alumil-fabrieksgarantie biedt, samen met toegewijde langetermijnservice. Consistente, betrouwbare ondersteuning na oplevering is een fundamenteel onderdeel van onze gestructureerde activiteiten."
        }
      },
      {
        "@type": "Question",
        "name": "Waarom kiezen voor Papadakis in plaats van onafhankelijke aluminium installateurs in Rethymnon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het verschil is structureel: wij zijn een gecertificeerd productiebedrijf met een eigen productiefaciliteit, een toegewijde engineeringsafdeling, vaste installatieteams en meer dan 30 jaar ononderbroken activiteit. Wij bezitten de directe Alumil-certificering, gebruiken Seaside Class anti-corrosie coatings en hebben honderden villa- en hotelprojecten afgerond."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full bg-offwhite">
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchemaNL} />
      <article ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden" aria-label="Manufacturing and Installation of Aluminum Systems in Rethymno, Crete">
        <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_aluminum_villa_1776110912532.png" 
            alt="Installation of thermal break aluminum windows in a luxury villa, Crete" 
            fill 
            className="object-cover scale-110"
            priority
            quality={60}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.header 
            style={{ opacity: opacityText }}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white mb-8 shadow-2xl">
              <CheckCircle2 size={16} className="text-red" />
              <span className="text-sm font-bold tracking-wider uppercase">Gecertificeerde Alumil-fabrikanten &bull; Kreta</span>
            </div>
            
            <h1 className="text-[11vw] sm:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] tracking-tighter drop-shadow-2xl">
              <span className="block text-xl md:text-2xl uppercase tracking-widest text-gray-400 font-bold mb-4 drop-shadow-md">Aluminiumsystemen Rethymnon</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">Architecturale oplossingen</span> <br />
              <span className="text-red">Voor luxe ontwikkelingen</span>
            </h1>
            
            <section className="mb-10 text-xl text-gray-300 max-w-2xl leading-relaxed">
              <p className="mb-4">
                Engineering, fabricage en installatie van premium gecertificeerde <strong>Alumil-systemen</strong>. Als de toonaangevende leverancier van <strong>Aluminiumsystemen in Rethymnon</strong>, leveren we compromisloze <strong>architecturale oplossingen voor luxe ontwikkelingen</strong> op heel Kreta.
              </p>
            </section>

            <nav className="flex flex-col sm:flex-row flex-wrap gap-5" aria-label="Hero Actions">
              <a href="#services" className="bg-gradient-to-r from-red to-red-700 text-white px-8 py-4 rounded-full font-bold text-center hover:shadow-[0_0_30px_rgba(200,20,20,0.4)] transition-all duration-300 border border-red-500/50 active:scale-95 flex items-center justify-center gap-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></div>
                <Home size={20} className="relative z-10" /> <span className="relative z-10">Ontdek onze mogelijkheden</span>
              </a>
              <a href="mailto:gpapadakisret@gmail.com" className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-2xl">
                <Sparkles size={20} /> Stuur architectonische plannen
              </a>
              <Link href="/en/blog" className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-2xl">
                <BookOpen size={20} /> Lees onze blog
              </Link>
            </nav>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 0.8 }}
               className="mt-12 flex flex-wrap gap-4 items-center"
            >
               <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl">
                 <span className="font-black text-2xl text-red">A+</span>
                 <span className="text-xs uppercase tracking-widest text-gray-300 font-bold leading-tight">Energie<br/>Klasse</span>
               </div>
               <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl">
                 <span className="font-black text-2xl text-red">100%</span>
                 <span className="text-xs uppercase tracking-widest text-gray-300 font-bold leading-tight">Beheer<br/>op afstand</span>
               </div>
               <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl">
                 <span className="font-black text-2xl text-red">B2B</span>
                 <span className="text-xs uppercase tracking-widest text-gray-300 font-bold leading-tight">Turn-key<br/>Partner</span>
               </div>
            </motion.div>
          </motion.header>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }} 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 pointer-events-none hidden sm:flex"
        >
          <span className="text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
             <motion.div 
                animate={{ y: [-10, 48, -10] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} 
                className="w-full h-8 bg-white/70"
             />
          </div>
        </motion.div>
      </article>

      <TrustBadges lang="en" className="relative z-30 mt-8 mb-12" />

      <section className="bg-navy py-12 relative z-20 shadow-2xl border-t border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="flex flex-col items-center p-4">
              <Sparkles className="text-red mb-4" size={40} />
              <h2 className="text-white font-bold text-xl mb-2">Projectbeheer op afstand</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Geen lokale aanwezigheid vereist. Wij bieden volledige digitale CAD-studies, voortgangsrapporten en turn-key levering voor internationale investeerders die op Kreta bouwen.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="flex flex-col items-center p-4">
              <Zap className="text-red mb-4" size={40} />
              <h2 className="text-white font-bold text-xl mb-2">A+ Energie-autonomie</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Rust uw commerci&euml;le of residenti&euml;le ontwikkeling uit met thermisch onderbroken profielen die een Uw-waarde tot 0,9 W/m&sup2;K bereiken, waardoor de operationele kosten worden geminimaliseerd.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="flex flex-col items-center p-4">
              <CheckCircle2 className="text-red mb-4" size={40} />
              <h2 className="text-white font-bold text-xl mb-2">Seaside Class duurzaamheid</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Hotels en villa&apos;s aan het strand vereisen absolute roestbescherming. Onze aluminium systemen zijn voorzien van Seaside Class elektrocoating voor absolute uithoudingsvermogen.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 lg:py-32 bg-offwhite relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-20 max-w-4xl mx-auto"
           >
             <h2 className="text-navy font-black text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">Uw Productiepartner <br/>op Kreta, Griekenland</h2>
             <div className="w-24 h-2 bg-red mx-auto rounded-full mb-8"></div>
             <p className="text-gray-600 text-xl leading-relaxed">
               Wij doen niet alleen basisinstallaties. Onze productie-eenheid in Rethymnon werkt samen met architecten en projectontwikkelaars om premium architecturale systemen te vervaardigen die de commerci&euml;le en esthetische waarde van uw eigendom verhogen.
             </p>
             <p className="text-gray-500 text-base mt-4 leading-relaxed max-w-2xl mx-auto">
               Als gestructureerd productiebedrijf beschikken wij over de bewezen expertise om veeleisende architecturale projecten aan te pakken. Wij voeren geen losse reparaties uit. Onze focus ligt op complete projectoplossingen met strikte naleving van de planning en zonder vertragingen voor investeerders en aannemers.
             </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="md:col-span-2">
               <Link href="/en/services/koufomata-alouminiou-rethymno" className="glass-panel p-10 lg:p-14 relative overflow-hidden group hover:border-red/30 transition-all duration-500 block text-navy h-full active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div className="relative z-10">
                   <div className="bg-red/10 text-red w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Home size={32} /></div>
                   <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Energiezuinige ramen</h3>
                   <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">Absolute geluids- en warmte-isolatie. Als gecertificeerde Alumil-fabrikanten installeren we de geavanceerde SMARTIA- en SUPREME-systemen om een perfect afgesloten huis te garanderen.</p>
                   <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Bekijk systemen <ChevronRight size={20} strokeWidth={3}/></span>
                 </div>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1 }}>
               <Link href="/en/services/pergoles-rethymno-kriti" className="glass-panel p-10 hover:border-red/30 transition-all duration-500 block group text-navy flex flex-col justify-between h-full bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div>
                   <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Pergola&apos;s en zonwering</h3>
                   <p className="text-gray-600 mb-8 text-lg">Bioklimatische pergola's, moderne rolluiken en insectenhorren voor slimme controle van natuurlijk licht.</p>
                 </div>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">Meer informatie <ChevronRight size={20} strokeWidth={3}/></span>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}>
               <Link href="/en/services/portes-asfaleias-rethymno" className="glass-panel p-10 hover:border-red/30 transition-all duration-500 block group text-navy flex flex-col justify-between h-full bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div>
                   <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Gepantserde veiligheidsdeuren</h3>
                   <p className="text-gray-600 mb-8 text-lg">Klasse 3/4 bepantsering en Defender-sloten van de volgende generatie die nul inbraakmogelijkheden garanderen.</p>
                 </div>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">Meer informatie <ChevronRight size={20} strokeWidth={3}/></span>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.3 }} className="md:col-span-2">
               <Link href="/en/services/sidiros-kataskeves-rethymno" className="glass-panel p-10 lg:p-14 hover:border-red/30 transition-all duration-500 block group text-navy bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Aangepast smeedwerk en design</h3>
                 <p className="text-gray-600 mb-8 max-w-xl text-lg leading-relaxed">Van imposante Inox-poorten tot minimalistische binnentrappen. Elektrostatisch schilderwerk voorkomt oxidatie en verbetert het ontwerp van uw huis zonder toekomstige onderhoudskosten.</p>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">Bekijk toepassingen <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3}/></span>
               </Link>
             </motion.div>
           </div>
        </div>
      </section>

      <section id="contact" className="py-16 lg:py-32 bg-navy text-white relative border-b-8 border-red shadow-inner overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Geen Uitvoeringsrisico</h2>
          <p className="text-2xl text-gray-300 mb-6 font-light max-w-3xl mx-auto leading-relaxed">Absolute naleving van projectplanningen en premium esthetiek. Wij leveren turn-key toepassingen die de commerci&euml;le waarde van uw eigendom verhogen.</p>
          <p className="text-base text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">Bewezen staat van dienst &middot; Gestructureerde workflow &middot; Gestructureerde After-Sales &middot; Alumil garantie &middot; Geen vertragingen</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <PhoneCall className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Bel Ons</p>
                 <a href="tel:+302831023897" className="font-bold text-2xl group-hover:text-[var(--color-red-light)] transition-colors">+30 28310 23897</a>
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <MapPin className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Fabriekadres</p>
                 <p className="font-bold text-xl">Drouliskou 8, Rethymno</p>
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <Mail className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">E-mail Aanvragen</p>
                 <a href="mailto:gpapadakisret@gmail.com" className="font-bold text-lg md:text-xl group-hover:text-[var(--color-red-light)] transition-colors break-all">gpapadakisret@gmail.com</a>
               </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
