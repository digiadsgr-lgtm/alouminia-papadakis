'use client'

import React, { useState, useEffect } from 'react'
import { X, Globe } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

export default function LanguageSuggestion() {
  const [show, setShow] = useState(false)
  const [suggestion, setSuggestion] = useState<{ code: string, msg: string, btnYes: string, btnNo: string } | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if dismissed or preferred_lang exists
    if (document.cookie.includes('preferred_lang=') || document.cookie.includes('lang_suggestion_dismissed=')) {
      return
    }

    if (typeof navigator === 'undefined' || !navigator.languages) return

    // If 'el' is anywhere in the languages, do not show
    const hasGreek = navigator.languages.some(l => l.toLowerCase().includes('el'))
    if (hasGreek) return

    const primaryLang = navigator.language.toLowerCase()
    
    let target = ''
    if (primaryLang.startsWith('de')) target = 'de'
    else if (primaryLang.startsWith('fr')) target = 'fr'
    else if (primaryLang.startsWith('nl')) target = 'nl'
    
    // Only suggest if they are NOT already on that locale
    if (target && !pathname.startsWith(`/${target}`)) {
      const messages: Record<string, { msg: string, btnYes: string, btnNo: string }> = {
        de: { msg: 'Diese Seite auf Deutsch ansehen?', btnYes: 'Ja', btnNo: 'Weiter auf Griechisch' },
        fr: { msg: 'Voir cette page en français?', btnYes: 'Oui', btnNo: 'Continuer en grec' },
        nl: { msg: 'Bekijk deze pagina in het Nederlands?', btnYes: 'Ja', btnNo: 'Doorgaan in het Grieks' }
      }
      setSuggestion({ code: target, ...messages[target] })
      setShow(true)
    }
  }, [pathname])

  if (!show || !suggestion) return null

  const handleDismiss = () => {
    document.cookie = "lang_suggestion_dismissed=1; max-age=31536000; path=/"
    setShow(false)
  }

  const handleAccept = () => {
    document.cookie = `preferred_lang=${suggestion.code}; max-age=31536000; path=/`
    // redirect to the new locale
    const currentPathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/'
    router.push(`/${suggestion.code}${currentPathWithoutLocale === '/' ? '' : currentPathWithoutLocale}`)
    setShow(false)
  }

  return (
    <div className="bg-[#0F203C] text-white border-b border-white/10 px-4 py-3 relative z-[100] flex flex-col sm:flex-row items-center justify-between gap-4 animate-in slide-in-from-top">
      <div className="flex items-center gap-3">
        <Globe size={18} className="text-[var(--color-red-light)]" />
        <span className="font-semibold text-sm">{suggestion.msg}</span>
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button 
          onClick={handleAccept}
          className="flex-1 sm:flex-none bg-[var(--color-red-light)] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
        >
          {suggestion.btnYes}
        </button>
        <button 
          onClick={handleDismiss}
          className="flex-1 sm:flex-none bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center gap-1"
        >
          <X size={14} /> {suggestion.btnNo}
        </button>
      </div>
    </div>
  )
}
