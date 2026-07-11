'use client'
import Link from 'next/link'
import { Globe, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher({ currentLang, isScrolled = false }: { currentLang: string, isScrolled?: boolean }) {
  const pathname = usePathname()
  
  const locales = [
    { code: 'el', label: 'Ελληνικά' },
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' },
    { code: 'fr', label: 'Français' },
    { code: 'nl', label: 'Nederlands' }
  ]

  const getLocalizedHref = (targetLocale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    if (segments.length > 1 && locales.some(l => l.code === segments[1])) {
      segments[1] = targetLocale
    } else {
      segments.splice(1, 0, targetLocale)
    }
    return segments.join('/') || '/'
  }

  return (
    <div className="relative group cursor-pointer z-50">
      <div className={`flex items-center gap-1 font-bold text-sm transition-colors ${isScrolled ? 'text-navy hover:text-[var(--color-red-light)]' : 'text-white hover:text-[var(--color-red-light)]'}`}>
        <Globe size={16} />
        <span>{currentLang.toUpperCase()}</span>
        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
      </div>
      
      <div className="absolute top-full right-0 mt-4 w-32 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col py-2">
        <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />
        {locales.map(l => (
          <Link 
            key={l.code} 
            href={getLocalizedHref(l.code)}
            onClick={() => {
              document.cookie = `preferred_lang=${l.code}; max-age=31536000; path=/`
            }}
            className={`px-4 py-2 text-center text-sm font-bold transition-colors ${currentLang === l.code ? 'text-[var(--color-red-light)] bg-red/5' : 'text-navy hover:bg-gray-50 hover:text-[var(--color-red-light)]'}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
