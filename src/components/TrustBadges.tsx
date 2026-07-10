'use client'

import React from 'react'
import { Thermometer, Layers, ShieldCheck, Waves, Award } from 'lucide-react'

type Locale = 'el' | 'en' | 'de' | 'fr' | 'nl'
type BadgeType = 'insulation' | 'thermal' | 'security' | 'seaside' | 'alumil'

const dict = {
  el: {
    insulation: { value: 'Uw έως 0,9', label: 'W/m²K Θερμομόνωση' },
    thermal: { value: '38mm', label: 'Πολυαμίδια Θερμοδιακοπής' },
    security: { value: 'RC3 / RC4', label: 'Πιστοποιημένη Θωράκιση' },
    seaside: { value: 'Seaside Class', label: 'Αντοχή στην Αλμύρα' },
    alumil: { value: 'Alumil', label: 'Πιστοποιημένος Κατασκευαστής' }
  },
  en: {
    insulation: { value: 'Uw up to 0,9', label: 'W/m²K Thermal Insulation' },
    thermal: { value: '38mm', label: 'Thermal Break Polyamides' },
    security: { value: 'RC3 / RC4', label: 'Certified Armoring' },
    seaside: { value: 'Seaside Class', label: 'Saltwater Resistance' },
    alumil: { value: 'Alumil', label: 'Certified Manufacturer' }
  },
  de: {
    insulation: { value: 'Uw bis zu 0,9', label: 'W/m²K Wärmedämmung' },
    thermal: { value: '38mm', label: 'Thermische Unterbrechung' },
    security: { value: 'RC3 / RC4', label: 'Zertifizierte Panzerung' },
    seaside: { value: 'Seaside Class', label: 'Salzwasserbeständigkeit' },
    alumil: { value: 'Alumil', label: 'Zertifizierter Hersteller' }
  },
  fr: {
    insulation: { value: "Uw jusqu'à 0,9", label: 'W/m²K Isolation Thermique' },
    thermal: { value: '38mm', label: 'Rupture de Pont Thermique' },
    security: { value: 'RC3 / RC4', label: 'Blindage Certifié' },
    seaside: { value: 'Seaside Class', label: 'Résistance au Sel' },
    alumil: { value: 'Alumil', label: 'Fabricant Certifié' }
  },
  nl: {
    insulation: { value: 'Uw tot 0,9', label: 'W/m²K Thermische Isolatie' },
    thermal: { value: '38mm', label: 'Thermische Onderbreking' },
    security: { value: 'RC3 / RC4', label: 'Gecertificeerde Bepantsering' },
    seaside: { value: 'Seaside Class', label: 'Zoutwaterbestendigheid' },
    alumil: { value: 'Alumil', label: 'Gecertificeerde Fabrikant' }
  }
}

const ICONS = {
  insulation: Thermometer,
  thermal: Layers,
  security: ShieldCheck,
  seaside: Waves,
  alumil: Award
}

interface TrustBadgesProps {
  lang: Locale
  badges?: BadgeType[] // If not provided, shows all
  className?: string
}

export default function TrustBadges({ lang, badges = ['insulation', 'thermal', 'security', 'seaside', 'alumil'], className = '' }: TrustBadgesProps) {
  const t = dict[lang] || dict['en']

  return (
    <div className={`w-full py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-5 gap-4 pb-4 lg:pb-0">
          {badges.map((key) => {
            const data = t[key]
            const Icon = ICONS[key]
            return (
              <div 
                key={key} 
                className="flex-shrink-0 snap-center w-[260px] lg:w-auto bg-[#0F203C]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[var(--color-red-light)]/50 hover:shadow-[0_0_20px_rgba(255,90,101,0.15)] group"
              >
                <div className="bg-[var(--color-red-light)]/10 text-[var(--color-red-light)] p-3 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <div className="text-white font-black text-lg mb-1 tracking-tight">{data.value}</div>
                <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">{data.label}</div>
              </div>
            )
          })}
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
