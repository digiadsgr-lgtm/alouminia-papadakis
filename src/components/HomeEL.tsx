"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Factory, CheckCircle2, ChevronRight, PhoneCall, MapPin, Mail } from 'lucide-react'

export default function HomeEL() {
  return (
    <div className="flex flex-col w-full bg-offwhite">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_aluminum_villa_1776110912532.png" 
            alt="Κορυφαία Κουφώματα Αλουμινίου Ρέθυμνο" 
            fill 
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red/10 border border-red/20 text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-red animate-pulse"></span>
              <span className="text-sm font-bold tracking-wide uppercase">Εξουσιοδοτημενος Κατασκευαστης Alumil</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white tracking-tight">
              Αρχιτεκτονικά Συστήματα <br />
              <span className="text-red">Αλουμινίου</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Αναβαθμίζουμε την ποιότητα ζωής και την αξία του ακινήτου σας. Κορυφαία ενεργειακά κουφώματα, βιοκλιματικές πέργκολες και βαριές σιδηροκατασκευές με έδρα το Ρέθυμνο.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-red text-white px-8 py-4 rounded-full font-bold text-center hover:bg-red-700 transition-colors shadow-xl shadow-red/25 active:scale-95">
                Οι Υπηρεσίες Μας
              </a>
              <a href="tel:2831023897" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-center hover:bg-white/20 transition-colors flex items-center justify-center gap-2 active:scale-95">
                <PhoneCall size={20} /> Δωρεάν Μελέτη Χώρου
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-navy border-t border-b border-navy-800 py-12 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center p-4">
              <Zap className="text-red mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-2">Ενεργειακή Κλάση Α+</h3>
              <p className="text-gray-400 text-sm">Μειώστε δραματικά τα κόστη θέρμανσης και ψύξης με συστήματα θερμοδιακοπής.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <ShieldCheck className="text-red mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-2">Anti-Burglary Ασφάλεια</h3>
              <p className="text-gray-400 text-sm">Περιμετρικοί μηχανισμοί κλειδώματος και άθραυστα κρύσταλλα.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <CheckCircle2 className="text-red mb-4" size={40} />
              <h3 className="text-white font-bold text-xl mb-2">CE Πιστοποιήσεις</h3>
              <p className="text-gray-400 text-sm">Όλες οι κατασκευές μας ακολουθούν τα αυστηρότερα Ευρωπαϊκά πρότυπα αντοχής.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-navy font-black text-4xl md:text-5xl mb-6 tracking-tight">Η Τεχνογνωσία Μας</h2>
             <div className="w-24 h-1.5 bg-red mx-auto rounded-full mb-6"></div>
             <p className="text-gray-600 text-lg">
               Αφήστε πίσω τις παρωχημένες λύσεις. Μελετάμε, σχεδιάζουμε και εγκαθιστούμε αρχιτεκτονικά συστήματα που συμπεριφέρονται άψογα απέναντι στα ακραία φαινόμενα της Κρήτης.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <Link href="/el/services/koufomata-alouminiou-rethymno" className="md:col-span-2 glass-panel p-10 relative overflow-hidden group hover:border-red/30 transition-all block text-navy">
               <div className="relative z-10">
                 <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Ενεργειακά Κουφώματα</h3>
                 <p className="text-gray-600 mb-8 max-w-md text-lg leading-relaxed">Απόλυτη ηχομόνωση και θερμομόνωση με minimal design. Ως πιστοποιημένοι κατασκευαστές της Alumil, εγκαθιστούμε τα προηγμένα συστήματα SMARTIA & SUPREME.</p>
                 <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Περισσότερα <ChevronRight size={20} strokeWidth={3}/></span>
               </div>
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                 <Factory size={150} />
               </div>
             </Link>

             <Link href="/el/services/pergoles-rethymno-kriti" className="glass-panel p-10 hover:border-red/30 transition-all block group text-navy flex flex-col justify-between">
               <div>
                 <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Πέργκολες & Σκίαση</h3>
                 <p className="text-gray-600 mb-8 text-lg">Βιοκλιματικές πέργκολες, ρολά και σίτες νέας γενιάς για έξυπνο έλεγχο φυσικού φωτισμού.</p>
               </div>
               <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Περισσότερα <ChevronRight size={20} strokeWidth={3}/></span>
             </Link>

             <Link href="/el/services/sidiros-kataskeves-rethymno" className="glass-panel p-10 hover:border-red/30 transition-all block group text-navy flex flex-col justify-between">
               <div>
                 <h3 className="text-2xl font-black mb-4 group-hover:text-red transition-colors">Αυλόπορτες & Κάγκελα</h3>
                 <p className="text-gray-600 mb-8 text-lg">Inox κατασκευές και ηλεκτροστατική βαφή που αποτρέπουν την οξείδωση και απογειώνουν το design.</p>
               </div>
               <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Περισσότερα <ChevronRight size={20} strokeWidth={3}/></span>
             </Link>

             <Link href="/el/services/sidiros-kataskeves-rethymno" className="md:col-span-2 glass-panel p-10 hover:border-red/30 transition-all block group text-navy">
               <h3 className="text-3xl font-black mb-4 group-hover:text-red transition-colors">Βιομηχανικές Σιδηροκατασκευές</h3>
               <p className="text-gray-600 mb-8 max-w-xl text-lg leading-relaxed">Μεταλλικά κτίρια, αποθήκες και σκάλες υψηλής αντοχής. Απόλυτη ακρίβεια συγκολλήσεων με βιομηχανικό σχεδιασμό CAD.</p>
               <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Περισσότερα <ChevronRight size={20} strokeWidth={3}/></span>
             </Link>
           </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-navy text-white relative border-b-8 border-red shadow-inner">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Ζητήστε Προσφορά & Μελέτη</h2>
          <p className="text-xl text-gray-300 mb-12">Είτε πρόκειται για ανακαίνιση οικίας είτε για νέο ξενοδοχειακό project, αναλαμβάνουμε να δώσουμε τη λύση που σας αξίζει, άμεσα και υπεύθυνα.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-red/50 transition-colors">
               <PhoneCall className="text-red mt-1" size={24} />
               <div>
                 <p className="text-gray-400 text-sm mb-1">Καλέστε μας</p>
                 <a href="tel:2831023897" className="font-bold text-lg hover:text-red transition-colors">28310 23897</a>
               </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-red/50 transition-colors">
               <MapPin className="text-red mt-1" size={24} />
               <div>
                 <p className="text-gray-400 text-sm mb-1">Διεύθυνση Εργοστασίου</p>
                 <p className="font-bold text-lg">Δρουλίσκου 8, Ρέθυμνο</p>
               </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:border-red/50 transition-colors">
               <Mail className="text-red mt-1" size={24} />
               <div>
                 <p className="text-gray-400 text-sm mb-1">Email Επικοινωνίας</p>
                 <a href="mailto:gpapadakisret@gmail.com" className="font-bold text-[15px] hover:text-red transition-colors">gpapadakisret@gmail.com</a>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
