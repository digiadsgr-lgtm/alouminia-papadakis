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

export default function HomeFR() {
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

  const faqSchemaFR = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quel est le déroulement du projet en travaillant avec Papadakis Aluminium en Crète ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous fonctionnons comme une entreprise de construction structurée, et non comme un service de réparation. Notre processus : 1) Étude sur site et consultation architecturale, 2) Dessins techniques CAO & devis détaillé, 3) Fabrication interne dans notre usine de 300m² à Réthymnon, 4) Installation professionnelle par nos équipes permanentes, 5) Livraison clé en main, 6) Service après-vente et garantie."
        }
      },
      {
        "@type": "Question",
        "name": "Dans quels types de projets Papadakis Aluminium se spécialise-t-il ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous sommes spécialisés dans les projets haut de gamme : villas de luxe, hôtels-boutiques, développements résidentiels de prestige et propriétés commerciales à travers la Crète. Nous collaborons au niveau des projets avec des architectes, des ingénieurs civils et des entrepreneurs généraux — nous ne gérons pas les réparations individuelles."
        }
      },
      {
        "@type": "Question",
        "name": "Travaillez-vous avec des architectes et des entrepreneurs sur de grands développements en Crète ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui. Une grande partie de notre travail provient de partenariats réguliers avec des architectes, des ingénieurs civils et des entreprises de construction à travers la Crète. Nous nous intégrons parfaitement dans les grands calendriers de construction. Pour les investisseurs étrangers, nous proposons également une gestion de projet complète à distance avec des rapports d&apos;avancement numériques."
        }
      },
      {
        "@type": "Question",
        "name": "Comment garantissez-vous les délais des projets et évitez-vous les retards ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous réduisons les retards à zéro grâce à notre vaste expertise. Nous exploitons notre propre ligne de fabrication interne, employons des équipes d'installation permanentes et dédiées, et adhérons strictement à des processus de projet standardisés. Nous livrons les projets exactement dans les délais prévus, sans aucun compromis."
        }
      },
      {
        "@type": "Question",
        "name": "Avez-vous un portfolio éprouvé pour des projets architecturaux haut de gamme ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolument. Notre vaste portfolio est fortement axé sur l'esthétique des villas et les exigences commerciales complexes, et non sur le remplacement isolé de fenêtres. Nous nous intégrons parfaitement avec les cabinets d'architectes et les entrepreneurs généraux pour fournir des solutions premium clé en main (systèmes en aluminium, ferrures inox sur mesure, pergolas bioclimatiques)."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la structure de votre support Après-Vente ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous sommes une entreprise de construction structurée, pas des artisans indépendants. Papadakis Aluminium dispose d'un service après-vente organisé offrant la garantie officielle du fabricant Alumil ainsi qu'un service à long terme dédié. Un support cohérent et fiable après la livraison est un élément fondamental de nos opérations structurées."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi choisir Papadakis plutôt que des installateurs d'aluminium indépendants à Réthymnon ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La différence est structurelle : nous sommes une entreprise de fabrication certifiée avec notre propre usine de production, un département d'ingénierie dédié, des équipes d'installation permanentes et plus de 30 ans de fonctionnement continu. Nous possédons la certification directe Alumil, utilisons des revêtements Seaside Class pour les propriétés côtières et avons réalisé des centaines de projets à travers la Crète."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full bg-offwhite">
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchemaFR} />
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
              <span className="text-sm font-bold tracking-wider uppercase">Fabricants certifi&eacute;s Alumil &bull; Cr&egrave;te</span>
            </div>
            
            <h1 className="text-[11vw] sm:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] tracking-tighter drop-shadow-2xl">
              <span className="block text-xl md:text-2xl uppercase tracking-widest text-gray-400 font-bold mb-4 drop-shadow-md">Syst&egrave;mes en aluminium R&eacute;thymnon</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">Solutions architecturales</span> <br />
              <span className="text-red">Pour d&eacute;veloppements de luxe</span>
            </h1>
            
            <section className="mb-10 text-xl text-gray-300 max-w-2xl leading-relaxed">
              <p className="mb-4">
                Ing&eacute;nierie, fabrication et installation de <strong>syst&egrave;mes Alumil</strong> certifi&eacute;s de qualit&eacute; sup&eacute;rieure. En tant que principal fournisseur de <strong>syst&egrave;mes en aluminium &agrave; R&eacute;thymnon</strong>, nous proposons des <strong>solutions architecturales pour les d&eacute;veloppements de luxe</strong> sans compromis dans toute la Cr&egrave;te.
              </p>
            </section>

            <nav className="flex flex-col sm:flex-row flex-wrap gap-5" aria-label="Hero Actions">
              <a href="#services" className="bg-gradient-to-r from-red to-red-700 text-white px-8 py-4 rounded-full font-bold text-center hover:shadow-[0_0_30px_rgba(200,20,20,0.4)] transition-all duration-300 border border-red-500/50 active:scale-95 flex items-center justify-center gap-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></div>
                <Home size={20} className="relative z-10" /> <span className="relative z-10">D&eacute;couvrir nos capacit&eacute;s</span>
              </a>
              <a href="tel:+302831023897" className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-2xl">
                <Sparkles size={20} /> Envoyer les plans architecturaux
              </a>
              <Link href="/en/blog" className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-2xl">
                <BookOpen size={20} /> Lire notre blog
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
                 <span className="text-xs uppercase tracking-widest text-gray-300 font-bold leading-tight">Classe<br/>&Eacute;nerg&eacute;tique</span>
               </div>
               <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl">
                 <span className="font-black text-2xl text-red">100%</span>
                 <span className="text-xs uppercase tracking-widest text-gray-300 font-bold leading-tight">Gestion<br/>&agrave; distance</span>
               </div>
               <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl">
                 <span className="font-black text-2xl text-red">B2B</span>
                 <span className="text-xs uppercase tracking-widest text-gray-300 font-bold leading-tight">Partenaire<br/>Cl&eacute; en main</span>
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
              <h2 className="text-white font-bold text-xl mb-2">Gestion de projet &agrave; distance</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Aucune pr&eacute;sence locale n&apos;est requise. Nous fournissons des &eacute;tudes CAO num&eacute;riques compl&egrave;tes, des rapports d&apos;avancement et une livraison cl&eacute; en main pour les investisseurs internationaux construisant en Cr&egrave;te.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="flex flex-col items-center p-4">
              <Zap className="text-red mb-4" size={40} />
              <h2 className="text-white font-bold text-xl mb-2">Autonomie &eacute;nerg&eacute;tique A+</h2>
              <p className="text-gray-400 text-sm leading-relaxed">&Eacute;quipez votre d&eacute;veloppement commercial ou r&eacute;sidentiel de profil&eacute;s &agrave; rupture de pont thermique atteignant une valeur Uw allant jusqu'&agrave; 0,9 W/m&sup2;K, minimisant ainsi les co&ucirc;ts op&eacute;rationnels.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="flex flex-col items-center p-4">
              <CheckCircle2 className="text-red mb-4" size={40} />
              <h2 className="text-white font-bold text-xl mb-2">Durabilit&eacute; Seaside Class</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Les h&ocirc;tels et les villas en bord de mer n&eacute;cessitent une protection absolue contre la rouille. Nos syst&egrave;mes en aluminium sont dot&eacute;s d'un rev&ecirc;tement &eacute;lectrolytique Seaside Class pour une endurance absolue.</p>
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
             <h2 className="text-navy font-black text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">Votre Partenaire de Fabrication <br/>en Cr&egrave;te, Gr&egrave;ce</h2>
             <div className="w-24 h-2 bg-red mx-auto rounded-full mb-8"></div>
             <p className="text-gray-600 text-xl leading-relaxed">
               Nous ne faisons pas que de simples installations. Notre unit&eacute; de production &agrave; R&eacute;thymnon collabore avec des architectes et des promoteurs pour fabriquer des syst&egrave;mes architecturaux haut de gamme qui augmentent la valeur commerciale et esth&eacute;tique de votre propri&eacute;t&eacute;.
             </p>
             <p className="text-gray-500 text-base mt-4 leading-relaxed max-w-2xl mx-auto">
               En tant qu'entreprise de fabrication structur&eacute;e, nous poss&eacute;dons l'expertise reconnue pour g&eacute;rer des projets architecturaux exigeants. Nous ne r&eacute;alisons pas de r&eacute;parations individuelles. Nous nous concentrons sur des solutions de projets complets avec un respect strict des d&eacute;lais et sans aucun retard pour les investisseurs et les entrepreneurs.
             </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="md:col-span-2">
               <Link href="/en/services/koufomata-alouminiou-rethymno" className="glass-panel p-10 lg:p-14 relative overflow-hidden group hover:border-red/30 transition-all duration-500 block text-navy h-full active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div className="relative z-10">
                   <div className="bg-red/10 text-red w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Home size={32} /></div>
                   <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Fen&ecirc;tres &eacute;co&eacute;nerg&eacute;tiques</h3>
                   <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">Isolation phonique et thermique absolue. En tant que fabricants certifi&eacute;s Alumil, nous installons les syst&egrave;mes de pointe SMARTIA et SUPREME garantissant une maison parfaitement &eacute;tanche.</p>
                   <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Voir les syst&egrave;mes <ChevronRight size={20} strokeWidth={3}/></span>
                 </div>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1 }}>
               <Link href="/en/services/pergoles-rethymno-kriti" className="glass-panel p-10 hover:border-red/30 transition-all duration-500 block group text-navy flex flex-col justify-between h-full bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div>
                   <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Pergolas et ombrage</h3>
                   <p className="text-gray-600 mb-8 text-lg">Pergolas bioclimatiques, volets modernes et moustiquaires pour un contr&ocirc;le intelligent de la lumi&egrave;re naturelle.</p>
                 </div>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">En savoir plus <ChevronRight size={20} strokeWidth={3}/></span>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}>
               <Link href="/en/services/portes-asfaleias-rethymno" className="glass-panel p-10 hover:border-red/30 transition-all duration-500 block group text-navy flex flex-col justify-between h-full bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div>
                   <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Portes blind&eacute;es de s&eacute;curit&eacute;</h3>
                   <p className="text-gray-600 mb-8 text-lg">Blindage de classe 3/4 et serrures Defender de nouvelle g&eacute;n&eacute;ration garantissant aucune possibilit&eacute; d&apos;intrusion.</p>
                 </div>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">En savoir plus <ChevronRight size={20} strokeWidth={3}/></span>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.3 }} className="md:col-span-2">
               <Link href="/en/services/sidiros-kataskeves-rethymno" className="glass-panel p-10 lg:p-14 hover:border-red/30 transition-all duration-500 block group text-navy bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Ferronnerie sur mesure et design</h3>
                 <p className="text-gray-600 mb-8 max-w-xl text-lg leading-relaxed">Des imposants portails Inox aux escaliers int&eacute;rieurs minimalistes. La peinture &eacute;lectrostatique pr&eacute;vient l'oxydation et rehausse le design de votre maison sans co&ucirc;ts d&apos;entretien futurs.</p>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">Voir les applications <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3}/></span>
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
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Zéro Risque d'Exécution</h2>
          <p className="text-2xl text-gray-300 mb-6 font-light max-w-3xl mx-auto leading-relaxed">Respect absolu des d&eacute;lais du projet et esth&eacute;tique haut de gamme. Nous livrons des applications cl&eacute; en main qui augmentent commercialement la valeur de votre propri&eacute;t&eacute;.</p>
          <p className="text-base text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">Exp&eacute;rience &eacute;prouv&eacute;e &middot; Flux de travail structur&eacute; &middot; Service apr&egrave;s-vente structur&eacute; &middot; Garantie Alumil &middot; Aucun retard</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <PhoneCall className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Appelez-nous</p>
                 <a href="tel:+302831023897" className="font-bold text-2xl group-hover:text-[var(--color-red-light)] transition-colors">+30 28310 23897</a>
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <MapPin className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Adresse de l'Usine</p>
                 <p className="font-bold text-xl">Drouliskou 8, Rethymno</p>
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <Mail className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Demandes par E-mail</p>
                 <ProtectedEmail className="font-bold text-lg md:text-xl group-hover:text-[var(--color-red-light)] transition-colors break-all" />
               </div>
            </div>
          </div>
          <div className="mt-16 text-left">
            <ContactForm lang="fr" />
          </div>
        </motion.div>
      </section>
    </div>
  )
}
