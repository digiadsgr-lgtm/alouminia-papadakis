"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Zap, Factory, CheckCircle2, ChevronRight, PhoneCall, MapPin, Mail, Sparkles, Home } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { useRef } from 'react'

export default function HomeEL() {
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
    "name": "Αλουμίνια Παπαδάκης",
    "image": "https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.png",
    "@id": "https://alouminia-papadakis.gr",
    "url": "https://alouminia-papadakis.gr",
    "telephone": "2831023897",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Δρουλίσκου 8",
      "addressLocality": "Ρέθυμνο",
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

  const faqSchemaEL = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Πώς λειτουργεί η διαδικασία συνεργασίας με την εταιρεία Αλουμίνια Παπαδάκης;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ακολουθούμε δομημένο workflow έργου: Αρχιτεκτονική μελέτη και αυτοψία → Τεχνική προσφορά με CAD σχέδια → Εργοστασιακή κατασκευή στο ιδιόκτητο εργοστάσιό μας στο Ρέθυμνο → Τοποθέτηση από τα εξειδικευμένα συνεργεία μας → Παράδοση με το κλειδί στο χέρι → After-sales υποστήριξη και εγγύηση. Δεν είμαστε απλώς τοποθετητές — είμαστε project-based κατασκευαστική εταιρεία με ολοκληρωμένη διαχείριση."
        }
      },
      {
        "@type": "Question",
        "name": "Τι είδους έργα αναλαμβάνει η εταιρεία Παπαδάκης στο Ρέθυμνο;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Εξειδικευόμαστε σε premium κατασκευαστικά έργα: πολυτελείς βίλες, boutique ξενοδοχεία, σύγχρονες κατοικίες υψηλής αισθητικής και εμπορικά ακίνητα. Συνεργαζόμαστε σε project-level με αρχιτέκτονες, εργολάβους και μηχανικούς — δεν κάνουμε μεμονωμένες επισκευές. Η εστίασή μας είναι η αρχιτεκτονική λεπτομέρεια και η μακροχρόνια αντοχή."
        }
      },
      {
        "@type": "Question",
        "name": "Πώς διασφαλίζετε την τήρηση των χρονοδιαγραμμάτων και την αποφυγή καθυστερήσεων;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Μειώνουμε το execution risk στο μηδέν χάρη στην operational maturity της εταιρείας μας. Διαθέτουμε in-house γραμμή παραγωγής, δικά μας εκπαιδευμένα συνεργεία τοποθέτησης και αυστηρές διαδικασίες (processes) παραγγελιοληψίας. Παραδίδουμε τα έργα (από μία βίλα μέχρι ολόκληρο ξενοδοχείο) ακριβώς στον συμφωνημένο χρόνο, χωρίς καμία απόκλιση."
        }
      },
      {
        "@type": "Question",
        "name": "Διαθέτετε αποδεδειγμένο Portfolio για projects υψηλής αισθητικής;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Βεβαίως. Το portfolio μας επικεντρώνεται σε villa-level αισθητική και έργα απαιτήσεων (όχι μεμονωμένες αλλαγές παραθύρων). Συνεργαζόμαστε με αρχιτεκτονικά γραφεία και εργολάβους προσφέροντας ολοκληρωμένες λύσεις (κουφώματα, κάγκελα inox, πέργκολες) ώστε το αισθητικό (brand fit) και λειτουργικό αποτέλεσμα να είναι ενιαίο και premium."
        }
      },
      {
        "@type": "Question",
        "name": "Τι δομή After-Sales υποστήριξης διαθέτετε;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Δεν είμαστε 'μάστορες' που απλώς τοποθετούν και φεύγουν. Η Αλουμίνια Παπαδάκης διαθέτει οργανωμένο (structured) After-Sales τμήμα. Παρέχουμε εγγύηση Alumil, άμεση επέμβαση από το δικό μας συνεργείο service για περιοδικές ρυθμίσεις μακροχρόνια. Η συνεπής υποστήριξη του έργου είναι για εμάς αδιαπραγμάτευτη."
        }
      },
      {
        "@type": "Question",
        "name": "Είναι τα κουφώματά σας επιλέξιμα για το πρόγραμμα Εξοικονομώ - Αυτονομώ στην Κρήτη;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ναι. Τα θερμοδιακοπτόμενα κουφώματα Alumil (SMARTIA, SUPREME) που κατασκευάζουμε πληρούν στο 100% τις αυστηρότερες ενεργειακές προδιαγραφές του Εξοικονομώ - Αυτονομώ (Uw έως 0.9 W/m²K). Αναλαμβάνουμε πλήρη τεκμηρίωση για τα δικαιολογητικά του προγράμματος."
        }
      },
      {
        "@type": "Question",
        "name": "Γιατί να επιλέξω την Παπαδάκης αντί για έναν ανεξάρτητο τεχνίτη αλουμινίου;",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Η διαφορά είναι δομική: λειτουργούμε ως κατασκευαστική εταιρεία έργων, όχι ως συνεργείο επισκευών. Διαθέτουμε ιδιόκτητο εργοστάσιο 300m² στο Ρέθυμνο, πιστοποίηση Alumil, εξειδικευμένο τεχνικό τμήμα, μόνιμα συνεργεία τοποθέτησης και 30+ χρόνια συνεχούς δραστηριότητας. Συνεργαζόμαστε επαναληπτικά με εργολάβους και αρχιτέκτονες σε μεσαία και μεγάλα κατασκευαστικά projects."
        }
      }
    ]
  };

  return (
    <div className="flex flex-col w-full bg-offwhite">
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchemaEL} />
      <article ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden" aria-label="Κατασκευή και Τοποθέτηση Κουφωμάτων και Συστημάτων Αλουμινίου στο Ρέθυμνο, Κρήτη">
        <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_aluminum_villa_1776110912532.png" 
            alt="Εγκατάσταση θερμοδιακοπτόμενων κουφωμάτων αλουμινίου σε βίλα, Ρέθυμνο" 
            fill 
            className="object-cover scale-110"
            priority
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
              <span className="text-sm font-bold tracking-wider uppercase">Εξουσιοδοτημένοι Κατασκευαστές Alumil • Κρήτη</span>
            </div>
            
            <h1 className="text-[11vw] sm:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] tracking-tighter drop-shadow-2xl">
              <span className="block text-xl md:text-2xl uppercase tracking-widest text-gray-400 font-bold mb-4 drop-shadow-md">Κατασκευές Αλουμινίου Ρέθυμνο</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">Η Απόλυτη Ασφάλεια</span> <br />
              <span className="text-red">Στο Νέο Σας Σπίτι</span>
            </h1>
            
            <section className="mb-10 text-xl text-gray-300 max-w-2xl leading-relaxed">
              <p className="mb-4">
                Μελέτη, κατασκευή και τοποθέτηση ενεργειακών <strong>Συστημάτων Alumil</strong> στην Κρήτη. Εξειδικευόμαστε σε πιστοποιημένα κουφώματα αλουμινίου, θωρακισμένες πόρτες και βιοκλιματικές πέργκολες που θωρακίζουν την κατοικία σας απέναντι στο κρύο και τους απρόσκλητους επισκέπτες.
              </p>
            </section>

            <nav className="flex flex-col sm:flex-row gap-5" aria-label="Hero Actions">
              <a href="#services" className="bg-gradient-to-r from-red to-red-700 text-white px-8 py-4 rounded-full font-bold text-center hover:shadow-[0_0_30px_rgba(200,20,20,0.4)] transition-all duration-300 border border-red-500/50 active:scale-95 flex items-center justify-center gap-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></div>
                <Home size={20} className="relative z-10" /> <span className="relative z-10">Ανακαλύψτε τις Λύσεις μας</span>
              </a>
              <a href="tel:2831023897" className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-2xl">
                <PhoneCall size={20} /> Συμβουλευτική Μελέτη
              </a>
            </nav>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 0.8 }}
               className="mt-12 flex flex-wrap gap-4 items-center"
            >
               <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl">
                 <span className="font-black text-2xl text-red">30+</span>
                 <span className="text-xs uppercase tracking-widest text-gray-300 font-bold leading-tight">Έτη<br/>Εμπειρίας</span>
               </div>
               <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl">
                 <span className="font-black text-2xl text-red">100%</span>
                 <span className="text-xs uppercase tracking-widest text-gray-300 font-bold leading-tight">Πιστοποίηση<br/>Alumil</span>
               </div>
               <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl">
                 <span className="font-black text-2xl text-red">RC3</span>
                 <span className="text-xs uppercase tracking-widest text-gray-300 font-bold leading-tight">Κλάση<br/>Ασφαλείας</span>
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

      <section className="bg-navy py-12 relative z-20 shadow-2xl border-t border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.1 }} className="flex flex-col items-center p-4">
              <Zap className="text-red mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-2">100% Ενεργειακή Αυτονομία</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Μηδενίστε το κόστος θέρμανσης και ψύξης. Τα θερμοδιακοπτόμενα προφίλ μας επιτυγχάνουν δείκτη Uw έως 0.9 W/m²K.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="flex flex-col items-center p-4">
              <ShieldCheck className="text-red mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-2">Οικογένεια σε Απόλυτη Ασφάλεια</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Απόρθητες θωρακισμένες πόρτες Class 4 και ενισχυμένα αλεξίσφαιρα τζάμια για την απόλυτη ξεγνοιασιά σας.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once:true }} transition={{ delay: 0.3 }} className="flex flex-col items-center p-4">
              <CheckCircle2 className="text-red mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-2">Μια Επένδυση Εφ' Όρου Ζωής</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Οξειδωμένα κάγκελα και χαλασμένα ράουλα τέλος. Οι κατασκευές μας έρχονται με πιστοποίηση Seaside Class για αντοχή στην αλμύρα.</p>
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
             <h2 className="text-navy font-black text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">Κατασκευή & Τοποθέτηση <br/>Αλουμινίων στην Κρήτη</h2>
             <div className="w-24 h-2 bg-red mx-auto rounded-full mb-8"></div>
             <p className="text-gray-600 text-xl leading-relaxed">
               Δεν κάνουμε απλώς τοποθετήσεις. Το εργοστάσιό μας στο Ρέθυμνο σχεδιάζει, κατασκευάζει και εφαρμόζει κορυφαία αρχιτεκτονικά συστήματα που αυξάνουν την αξία και την ενεργειακή απόδοση του ακινήτου σας.
             </p>
             <p className="text-gray-500 text-base mt-4 leading-relaxed max-w-2xl mx-auto">
               Ως οργανωμένη (scalable) κατασκευαστική εταιρεία, διαθέτουμε το operational maturity να αναλάβουμε απαιτητικά έργα. Δεν εκτελούμε μεμονωμένες επισκευές. Εστιάζουμε σε ολοκληρωμένες λύσεις με αυστηρή τήρηση χρονοδιαγραμμάτων, premium portfolio εφαρμογών και μηδενικό execution risk για τον ιδιοκτήτη.
             </p>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="md:col-span-2">
               <Link href="/el/services/koufomata-alouminiou-rethymno" className="glass-panel p-10 lg:p-14 relative overflow-hidden group hover:border-red/30 transition-all duration-500 block text-navy h-full active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div className="relative z-10">
                   <div className="bg-red/10 text-red w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Home size={32} /></div>
                   <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Ενεργειακά Κουφώματα</h3>
                   <p className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed">Απόλυτη ηχομόνωση και θερμομόνωση. Ως πιστοποιημένοι κατασκευαστές της Alumil, εγκαθιστούμε τα κορυφαία συστήματα SMARTIA & SUPREME εξασφαλίζοντας ένα "σφραγισμένο" και αθόρυβο σπίτι.</p>
                   <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Δείτε τα Συστήματα <ChevronRight size={20} strokeWidth={3}/></span>
                 </div>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1 }}>
               <Link href="/el/services/pergoles-rethymno-kriti" className="glass-panel p-10 hover:border-red/30 transition-all duration-500 block group text-navy flex flex-col justify-between h-full bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div>
                   <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Πέργκολες & Σκίαση</h3>
                   <p className="text-gray-600 mb-8 text-lg">Βιοκλιματικές πέργκολες, μοντέρνα ρολά και σίτες. Προστατέψτε τον εξωτερικό σας χώρο από τον ήλιο και τους ανέμους της Κρήτης.</p>
                 </div>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">Περισσότερα <ChevronRight size={20} strokeWidth={3}/></span>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}>
               <Link href="/el/services/portes-asfaleias-rethymno" className="glass-panel p-10 hover:border-red/30 transition-all duration-500 block group text-navy flex flex-col justify-between h-full bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <div>
                   <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Πόρτες Ασφαλείας</h3>
                   <p className="text-gray-600 mb-8 text-lg">Θωράκιση Class 3/4 και κλειδαριές νέας γενιάς (Defender). Κλείστε την πόρτα του σπιτιού σας και μην φοβάστε απολύτως τίποτα.</p>
                 </div>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">Περισσότερα <ChevronRight size={20} strokeWidth={3}/></span>
               </Link>
             </motion.div>

             <motion.div initial={{ opacity: 0, y: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.3 }} className="md:col-span-2">
               <Link href="/el/services/sidiros-kataskeves-rethymno" className="glass-panel p-10 lg:p-14 hover:border-red/30 transition-all duration-500 block group text-navy bg-white active:scale-[0.98] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                 <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Design & Σιδηροκατασκευές</h3>
                 <p className="text-gray-600 mb-8 max-w-xl text-lg leading-relaxed">Από επιβλητικές Inox αυλόπορτες μέχρι minimal εσωτερικές σκάλες. Ηλεκτροστατικές βαφές που αποτρέπουν την οξείδωση και απογειώνουν το design της κατοικίας σας χωρίς μελλοντικά έξοδα συντήρησης.</p>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-6">Δείτε τις Εφαρμογές <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3}/></span>
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
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Μηδενικό Execution Risk</h2>
          <p className="text-2xl text-gray-300 mb-6 font-light max-w-3xl mx-auto leading-relaxed">Απόλυτη συνέπεια στα χρονοδιαγράμματα και Premium Αισθητική. Παραδίδουμε ολοκληρωμένες εφαρμογές που αναβαθμίζουν εμπορικά την αξία του ακινήτου σας.</p>
          <p className="text-base text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">Αποδεδειγμένο Portfolio · Scalable Workflow · Οργανωμένο After-Sales · Εγγύηση Alumil · Καμία Καθυστέρηση</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <PhoneCall className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Καλεστε Μας</p>
                 <a href="tel:2831023897" className="font-bold text-2xl group-hover:text-red transition-colors">28310 23897</a>
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <MapPin className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Διευθυνση Εργοστασιου</p>
                 <p className="font-bold text-xl">Δρουλίσκου 8, Ρέθυμνο</p>
               </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 flex flex-col justify-between hover:bg-white/10 hover:border-red/50 transition-all duration-300 rounded-2xl group cursor-pointer">
               <Mail className="text-red mb-6" size={32} />
               <div>
                 <p className="text-gray-400 text-sm mb-2 uppercase tracking-wide">Email Επικοινωνιας</p>
                 <a href="mailto:gpapadakisret@gmail.com" className="font-bold text-lg md:text-xl group-hover:text-red transition-colors break-all">gpapadakisret@gmail.com</a>
               </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
