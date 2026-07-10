'use client'

import React, { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

type Locale = 'el' | 'en' | 'de' | 'fr' | 'nl'

const dict = {
  el: 'Καλέστε μας',
  en: 'Call us',
  de: 'Anrufen',
  fr: 'Appelez-nous',
  nl: 'Bel ons'
}

export default function StickyCallButton({ lang }: { lang: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    const observer = new MutationObserver(() => {
      setIsMenuOpen(document.body.style.overflow === 'hidden')
    })
    
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] })
    setIsMenuOpen(document.body.style.overflow === 'hidden')
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  if (!isVisible || isMenuOpen) return null

  const label = dict[lang] || dict['en']

  return (
    <a 
      href="tel:+302831023897"
      aria-label={label}
      className="fixed z-40 lg:hidden right-4 bg-[var(--color-red)] text-white h-14 px-5 rounded-full flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(230,57,70,0.4)] hover:bg-[#c22d38] transition-all duration-300 active:scale-95 group animate-in fade-in slide-in-from-bottom-4"
      style={{
        bottom: 'calc(var(--consent-h, 0px) + 16px)'
      }}
    >
      <Phone size={22} className="group-hover:animate-pulse" />
      <span className="font-bold text-base tracking-wide">{label}</span>
    </a>
  )
}
