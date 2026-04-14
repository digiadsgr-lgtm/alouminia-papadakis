"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronRight, Globe } from 'lucide-react'

const dict = {
  el: {
    koufomata: "Κουφώματα",
    pergoles: "Πέργκολες",
    sidiros: "Σιδηροκατασκευές",
    contact: "Επικοινωνία",
    call: "ΚΑΛΕΣΤΕ ΜΑΣ",
    menu: "ΜΕΝΟΥ",
    home: "Αρχική",
    langSwitch: "EN",
    langLink: "/en"
  },
  en: {
    koufomata: "Windows",
    pergoles: "Pergolas",
    sidiros: "Ironworks",
    contact: "Contact",
    call: "CALL US",
    menu: "MENU",
    home: "Home",
    langSwitch: "EL",
    langLink: "/el"
  }
}

export default function Navbar({ lang = 'el' }: { lang?: 'el' | 'en' }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const t = dict[lang]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 py-3 shadow-sm text-navy' 
          : 'bg-transparent py-5 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href={`/${lang}`} className="text-2xl md:text-3xl font-black tracking-tight active:scale-95 transform transition-transform">
                {lang === 'en' ? 'PAPADAKIS' : 'ΠΑΠΑΔΑΚΗΣ'}<span className="text-red">.</span>
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <Link href={`/${lang}/services/koufomata-alouminiou-rethymno`} className={`text-sm font-semibold transition-colors ${isScrolled ? 'hover:text-red' : 'hover:text-gray-300'}`}>{t.koufomata}</Link>
              <Link href={`/${lang}/services/pergoles-rethymno-kriti`} className={`text-sm font-semibold transition-colors ${isScrolled ? 'hover:text-red' : 'hover:text-gray-300'}`}>{t.pergoles}</Link>
              <Link href={`/${lang}/services/sidiros-kataskeves-rethymno`} className={`text-sm font-semibold transition-colors ${isScrolled ? 'hover:text-red' : 'hover:text-gray-300'}`}>{t.sidiros}</Link>
              <Link href={`/${lang}#contact`} className={`text-sm font-semibold transition-colors ${isScrolled ? 'hover:text-red' : 'hover:text-gray-300'}`}>{t.contact}</Link>
              
              <Link href={t.langLink} className={`flex items-center gap-1 text-sm font-bold transition-colors ${isScrolled ? 'text-navy hover:text-red' : 'text-white hover:text-red'}`}>
                 <Globe size={16} /> {t.langSwitch}
              </Link>

              <a href="tel:2831023897" className="flex items-center gap-2 bg-red text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors active:scale-95 shadow-lg shadow-red/25">
                <Phone size={18} />
                <span>28310 23897</span>
              </a>
            </div>

            <div className="md:hidden flex items-center gap-4">
               <Link href={t.langLink} className={`font-bold text-sm ${isScrolled ? 'text-navy' : 'text-white'}`}>
                 {t.langSwitch}
               </Link>
               <button 
                 onClick={() => setMobileMenuOpen(true)}
                 className={`p-2 -mr-2 active:scale-90 transform transition-transform ${isScrolled ? 'text-navy' : 'text-white'}`}
                 aria-label="Open Menu"
               >
                  <Menu size={32} />
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-navy/40 backdrop-blur-md"
            />

            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white border-l border-gray-100 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center px-6 py-8 border-b border-gray-100">
                <span className="font-black text-xl text-navy tracking-tight">{t.menu}</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="p-2 -mr-2 bg-gray-100 rounded-full text-navy active:scale-90 transform transition-transform"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
                {[
                  { name: t.home, link: `/${lang}` },
                  { name: t.koufomata, link: `/${lang}/services/koufomata-alouminiou-rethymno` },
                  { name: t.pergoles, link: `/${lang}/services/pergoles-rethymno-kriti` },
                  { name: t.sidiros, link: `/${lang}/services/sidiros-kataskeves-rethymno` },
                  { name: t.contact, link: `/${lang}#contact` }
                ].map((item, i) => (
                  <Link 
                    key={i} 
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4 border-b border-gray-100 font-bold text-lg text-navy active:opacity-50 transition-opacity"
                  >
                    <span>{item.name}</span>
                    <ChevronRight size={20} className="text-red" />
                  </Link>
                ))}
              </div>

              <div className="p-6">
                <a 
                  href="tel:2831023897" 
                  className="flex items-center justify-center gap-3 w-full bg-red text-white py-4 rounded-full font-bold active:scale-95 transform transition-transform shadow-xl shadow-red/25"
                >
                  <Phone size={20} /> {t.call}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
