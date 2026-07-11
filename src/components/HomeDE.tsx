"use client"
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './ContactForm'
import ProtectedEmail from './ProtectedEmail'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Zap, CheckCircle2, ChevronRight, PhoneCall, MapPin, Mail, Sparkles, Home, BookOpen } from 'lucide-react'
import TrustBadges from './TrustBadges'
import JsonLd from '@/components/JsonLd'
import { useRef } from 'react'

export default function HomeDE() {
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
    "image": "https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.webp",
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

  const faqSchemaDE = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie ist der Projektablauf bei Papadakis Aluminium auf Kreta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir arbeiten als strukturiertes Bauunternehmen, nicht als Reparaturservice. Unser Ablauf: 1) Vor-Ort-Besichtigung & architektonische Beratung, 2) CAD-Zeichnungen & detailliertes Angebot, 3) Eigene Fertigung in unserer 300m² Anlage in Rethymno, 4) Professionelle Installation durch unsere festen Teams, 5) Schlüsselfertige Übergabe, 6) Kundendienst & Garantie. Wir verwalten den gesamten Projektlebenszyklus."
        }
      },
      {
        "@type": "Question",
        "name": "Auf welche Arten von Projekten ist Papadakis Aluminium spezialisiert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir sind auf hochwertige Projektarbeiten spezialisiert: Luxusvillen, Boutique-Hotels, gehobene Wohnanlagen und Gewerbeimmobilien auf ganz Kreta. Wir arbeiten auf Projektebene mit Architekten, Bauingenieuren und Generalunternehmern zusammen — wir übernehmen keine Einzelreparaturen. Unser Fokus liegt auf architektonischer Präzision und designorientierten Aluminiumlösungen."
        }
      },
      {
        "@type": "Question",
        "name": "Arbeiten Sie bei großen Bauprojekten auf Kreta mit Architekten und Bauunternehmen zusammen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Ein großer Teil unserer Arbeit besteht aus wiederkehrenden Partnerschaften mit Architekten, Bauingenieuren und Bauunternehmen auf ganz Kreta. Wir integrieren uns nahtlos in größere Bauzeitpläne und bieten hochpräzise Fertigung und termingerechte Installation. Für ausländische Investoren bieten wir auch ein komplettes Remote-Projektmanagement mit digitalen Fortschrittsberichten an."
        }
      },
      {
        "@type": "Question",
        "name": "Wie garantieren Sie Projektzeitpläne und vermeiden Verzögerungen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir reduzieren Verzögerungen durch unsere langjährige Expertise auf null. Wir betreiben unsere eigene Fertigungslinie, beschäftigen engagierte feste Installationsteams und halten uns strikt an standardisierte Projektprozesse. Wir liefern Projekte — von der einzelnen Luxusvilla bis zum kompletten Boutique-Hotel — genau im Zeitplan, ohne Kompromisse."
        }
      },
      {
        "@type": "Question",
        "name": "Haben Sie ein nachgewiesenes Portfolio für hochwertige Architekturprojekte?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolut. Unser umfangreiches Portfolio konzentriert sich stark auf Ästhetik auf Villenniveau und komplexe kommerzielle Anforderungen, nicht auf isolierte Fensteraustausche. Wir integrieren uns nahtlos mit Architekturbüros und Generalunternehmern, um schlüsselfertige Premium-Lösungen (Aluminiumsysteme, maßgeschneiderte Inox-Eisenarbeiten, bioklimatische Pergolen) anzubieten."
        }
      },
      {
        "@type": "Question",
        "name": "Wie ist Ihr Kundendienst nach dem Verkauf strukturiert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir sind ein strukturiertes Bauunternehmen, keine unabhängigen Handwerker. Papadakis Aluminium verfügt über eine organisierte Kundendienstabteilung, die neben dem engagierten Langzeitservice die offizielle Alumil-Herstellergarantie bietet. Ein konsequenter und zuverlässiger Support nach der Übergabe ist ein grundlegender Bestandteil unserer strukturierten Abläufe."
        }
      },
      {
        "@type": "Question",
        "name": "Warum sollten Sie Papadakis gegenüber unabhängigen Aluminiuminstallateuren in Rethymno bevorzugen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Unterschied ist strukturell: Wir sind ein zertifiziertes Fertigungsunternehmen mit eigener Produktionsstätte, eigener Konstruktionsabteilung, festen Installationsteams und mehr als 30 Jahren kontinuierlichem Betrieb. Wir verfügen über eine direkte Alumil-Zertifizierung, verwenden Seaside Class-Korrosionsschutzbeschichtungen für Küstenobjekte und haben Hunderte von Villen- und Hotelprojekten auf ganz Kreta abgeschlossen. Wir sind ein Projektpartner, kein Handwerker."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full bg-offwhite">
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchemaDE} />
      <article ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden" aria-label="Manufacturing and Installation of Aluminum Systems in Rethymno, Crete">
        <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_aluminum_villa_1776110912532.webp" 
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
              <span className="text-sm font-bold tracking-wider uppercase">Zertifizierte Alumil-Hersteller • Kreta</span>
            </div>
            
            <h1 className="text-[11vw] sm:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] tracking-tighter drop-shadow-2xl">
              <span className="block text-xl md:text-2xl uppercase tracking-widest text-gray-400 font-bold mb-4 drop-shadow-md">Aluminiumsysteme Rethymno</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">Architektonische L&ouml;sungen</span> <br />
              <span className="text-red">F&uuml;r Luxusimmobilien</span>
            </h1>
            
            <section className="mb-10 text-xl text-gray-300 max-w-2xl leading-relaxed">
              <p className="mb-4">
                Planung, Herstellung und Installation von zertifizierten Premium-<strong>Alumil-Systemen</strong>. Als f&uuml;hrender Anbieter von <strong>Aluminiumsystemen in Rethymno</strong> liefern wir kompromisslose <strong>Architekturl&ouml;sungen f&uuml;r Luxusimmobilien</strong> auf ganz Kreta.
              </p>
            </section>

            <nav className="flex flex-col sm:flex-row flex-wrap gap-5" aria-label="Hero Actions">
              <a href="#services" className="bg-gradient-to-r from-red to-red-700 text-white px-8 py-4 rounded-full font-bold text-center hover:shadow-[0_0_30px_rgba(200,20,20,0.4)] transition-all duration-300 border border-red-500/50 active:scale-95 flex items-center justify-center gap-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></div>
                <Home size={20} className="relative z-10" /> <span className="relative z-10">F&auml;higkeiten entdecken</span>
              </a>
              <a href="tel:+302831023897" className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-2xl">
                <Sparkles size={20} /> Architekturpl&auml;ne senden
              </a>
              <Link href="/en/blog" className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-2xl">
                <BookOpen size={20} /> Unseren Blog lesen
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
                 <span className="text-xs uppercase tracking-widest text-gray-300 font-bold leading-tight">Fern<br/>Verwaltung</span>
               </div>
               <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl">
                 <span className="font-black text-2xl text-red">B2B</span>
                 <span className="text-xs uppercase tracking-widest text-gray-300 font-bold leading-tight">Schl&uuml;sselfertiger<br/>Partner</span>
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
              <h2 className="text-white font-bold text-xl mb-2">Remote-Projektmanagement</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Keine lokale Pr&auml;senz erforderlich. Wir bieten vollst&auml;ndige digitale CAD-Studien, Fortschrittsberichte und schl&uuml;sselfertige Lieferung f&uuml;r internationale Investoren, die auf Kreta bauen.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="flex flex-col items-center p-4">
              <Zap className="text-red mb-4" size={40} />
              <h2 className="text-white font-bold text-xl mb-2">A+ Energieautonomie</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Statten Sie Ihre Gewerbe- oder Wohnanlage mit thermisch getrennten Profilen aus, die einen Uw-Wert von bis zu 0,9 W/m&sup2;K erreichen und die Betriebskosten minimieren.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="flex flex-col items-center p-4">
              <CheckCircle2 className="text-red mb-4" size={40} />
              <h2 className="text-white font-bold text-xl mb-2">Seaside Class Haltbarkeit</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Hotels und Strandvillen ben&ouml;tigen absoluten Rostschutz. Unsere Aluminiumsysteme verf&uuml;gen &uuml;ber eine Seaside Class-Elektrobeschichtung f&uuml;r absolute Best&auml;ndigkeit.</p>
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
             <h2 className="text-navy font-black text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">Ihr Produktionspartner <br/>auf Kreta, Griechenland</h2>
             <div className="w-24 h-2 bg-red mx-auto rounded-full mb-8"></div>
             <p className="text-gray-600 text-xl leading-relaxed">
               Wir f&uuml;hren nicht nur einfache Installationen durch. Unsere Produktionsst&auml;tte in Rethymno arbeitet mit Architekten und Bautr&auml;gern zusammen, um erstklassige Architektursysteme herzustellen, die den kommerziellen und &auml;sthetischen Wert Ihrer Immobilie steigern.
             </p>
             <p className="text-gray-500 text-base mt-4 leading-relaxed max-w-2xl mx-auto">
               Als strukturiertes Fertigungsunternehmen verf&uuml;gen wir &uuml;ber das nachgewiesene Fachwissen, um anspruchsvolle Architekturprojekte zu bew&auml;ltigen. Wir f&uuml;hren keine Einzelreparaturen durch. Unser Fokus liegt auf kompletten Projektl&ouml;sungen mit strikter Einhaltung von Zeitpl&auml;nen und ohne Verz&ouml;gerungen f&uuml;r Investoren und Bauunternehmer.
             </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="md:col-span-2">
               <Link href="/en/services/koufomata-alouminiou-rethymno" className="glass-panel p-10 lg:p-14 relative overflow-hidden group hover:border-red/30 transition-all duration-500 block text-navy h-full active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div className="relative z-10">
                   <div className="bg-red/10 text-red w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Home size={32} /></div>
                   <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Energieeffiziente Fenster</h3>
                   <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">Absolute Schall- und W&auml;rmed&auml;mmung. Als zertifizierte Alumil-Hersteller installieren wir die hochmodernen SMARTIA & SUPREME-Systeme und sorgen f&uuml;r ein perfekt abgedichtetes Zuhause.</p>
                   <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Systeme ansehen <ChevronRight size={20} strokeWidth={3}/></span>
                 </div>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1 }}>
               <Link href="/en/services/pergoles-rethymno-kriti" className="glass-panel p-10 hover:border-red/30 transition-all duration-500 block group text-navy flex flex-col justify-between h-full bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div>
                   <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Pergolen & Beschattung</h3>
                   <p className="text-gray-600 mb-8 text-lg">Bioklimatische Pergolen, moderne Rolll&auml;den und Insektenschutzgitter f&uuml;r intelligente Tageslichtsteuerung.</p>
                 </div>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">Mehr erfahren <ChevronRight size={20} strokeWidth={3}/></span>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}>
               <Link href="/en/services/portes-asfaleias-rethymno" className="glass-panel p-10 hover:border-red/30 transition-all duration-500 block group text-navy flex flex-col justify-between h-full bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div>
                   <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Gepanzerte Sicherheitst&uuml;ren</h3>
                   <p className="text-gray-600 mb-8 text-lg">Klasse 3/4 Panzerung und Defender-Schl&ouml;sser der n&auml;chsten Generation sorgen f&uuml;r null Einbruchsm&ouml;glichkeiten.</p>
                 </div>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">Mehr erfahren <ChevronRight size={20} strokeWidth={3}/></span>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.3 }} className="md:col-span-2">
               <Link href="/en/services/sidiros-kataskeves-rethymno" className="glass-panel p-10 lg:p-14 hover:border-red/30 transition-all duration-500 block group text-navy bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Ma&szlig;geschneiderte Eisenwaren & Design</h3>
                 <p className="text-gray-600 mb-8 max-w-xl text-lg leading-relaxed">Von imposanten Inox-Toren bis zu minimalistischen Innentreppen. Elektrostatische Lackierung verhindert Oxidation und wertet das Design Ihres Hauses ohne zuk&uuml;nftige Wartungskosten auf.</p>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">Anwendungen ansehen <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3}/></span>
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
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Kein Ausführungsrisiko</h2>
          <p className="text-2xl text-gray-300 mb-6 font-light max-w-3xl mx-auto leading-relaxed">Absolute Einhaltung von Projektzeitpl&auml;nen und Premium-&Auml;sthetik. Wir liefern schl&uuml;sselfertige Anwendungen, die den kommerziellen Wert Ihrer Immobilie steigern.</p>
          <p className="text-base text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">Nachgewiesene Erfolgsbilanz &middot; Strukturierter Workflow &middot; Strukturierter Kundendienst &middot; Alumil-Garantie &middot; Keine Verz&ouml;gerungen</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <PhoneCall className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Rufen Sie uns an</p>
                 <a href="tel:+302831023897" className="font-bold text-2xl group-hover:text-[var(--color-red-light)] transition-colors">+30 28310 23897</a>
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <MapPin className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Werksadresse</p>
                 <p className="font-bold text-xl">Drouliskou 8, Rethymno</p>
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <Mail className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">E-Mail Anfragen</p>
                 <ProtectedEmail className="font-bold text-lg md:text-xl group-hover:text-[var(--color-red-light)] transition-colors break-all" />
               </div>
            </div>
          </div>
          <div className="mt-16 text-left">
            <ContactForm lang="de" />
          </div>
        </motion.div>
      </section>
    </div>
  )
}
