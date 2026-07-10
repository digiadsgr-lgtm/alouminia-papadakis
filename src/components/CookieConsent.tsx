"use client"
import { useState, useEffect } from 'react'
import { Check, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function CookieConsent({ lang }: { lang: 'el' | 'en' }) {
  const [show, setShow] = useState(false)
  const pathname = usePathname()

  const content = {
    el: {
      text: 'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας. Επιλέξτε αν αποδέχεστε τα cookies ανάλυσης. Δείτε την',
      accept: 'Αποδοχή Όλων',
      decline: 'Μόνο Απαραίτητα',
      policy: 'Πολιτική Απορρήτου & Cookies',
      policyLink: '/el/politiki-aporritou'
    },
    en: {
      text: 'We use cookies to improve your experience. Choose if you accept analytics cookies. View our',
      accept: 'Accept All',
      decline: 'Strictly Necessary',
      policy: 'Privacy & Cookies Policy',
      policyLink: '/en/privacy-policy'
    }
  }

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => setShow(true), 2000)
    } else {
      applyConsent(consent)
    }
  }, [])

  const applyConsent = (consent: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      if (consent === 'accepted') {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'granted',
        })
      }
    }
  }

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    applyConsent('accepted')
    setShow(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 md:max-w-2xl">
      <div className="bg-navy/95 backdrop-blur-xl border border-navy-800 shadow-2xl rounded-3xl p-6 sm:p-8 flex flex-col gap-6 transform translate-y-0 text-white relative">
        <div>
          <h3 className="font-bold text-xl mb-2 flex items-center gap-2 tracking-tight">
            🍪 {lang === 'en' ? 'Data Privacy & Cookies' : 'Πολιτική Απορρήτου & Cookies'}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {content[lang].text}{' '}
            <Link href={content[lang].policyLink} className="text-red font-semibold hover:underline">
              {content[lang].policy}
            </Link>.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button 
            onClick={handleAccept}
            className="flex-1 bg-red text-white font-bold py-3 px-6 rounded-full flex justify-center items-center gap-2 hover:bg-red-700 transition shadow-lg active:scale-95"
          >
            <Check size={18} /> {content[lang].accept}
          </button>
          <button 
            onClick={handleDecline}
            className="sm:flex-none px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full flex justify-center items-center gap-2 transition active:scale-95"
          >
            <X size={18} /> {content[lang].decline}
          </button>
        </div>
      </div>
    </div>
  )
}
