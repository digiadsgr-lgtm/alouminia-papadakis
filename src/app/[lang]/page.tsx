import type { Metadata } from 'next'
import HomeEL from '@/components/HomeEL'
import HomeEN from '@/components/HomeEN'
import HomeDE from '@/components/HomeDE'
import HomeFR from '@/components/HomeFR'
import HomeNL from '@/components/HomeNL'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  const content = {
    el: {
      title: 'Κατασκευές Αλουμινίου Ρέθυμνο & Κρήτη | Κορυφαία Κουφώματα',
      description: 'Πιστοποιημένος κατασκευαστής συστημάτων Alumil στο Ρέθυμνο. Κουφώματα υψηλής αισθητικής και ασφάλειας για απαιτητικά έργα.',
      siteName: 'Αλουμίνια Παπαδάκης',
      imageAlt: 'Κατασκευές Συστημάτων Αλουμινίου στο Ρέθυμνο, Κρήτη',
      locale: 'el_GR'
    },
    en: {
      title: 'Premium Aluminum Systems Rethymno | Papadakis Crete',
      description: 'Certified Alumil manufacturer in Rethymno, Crete. Premium aluminum systems for luxury residences and hotels. Uncompromised quality.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Aluminum Systems Installation in Crete',
      locale: 'en_US'
    },
    de: {
      title: 'Premium Aluminiumsysteme Rethymno | Papadakis Kreta',
      description: 'Zertifizierter Alumil-Hersteller in Rethymno, Kreta. Premium-Aluminiumsysteme für Luxusresidenzen und Hotels. Kompromisslose Qualität.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Installation von Aluminiumsystemen auf Kreta',
      locale: 'de_DE'
    },
    fr: {
      title: 'Systèmes en Aluminium Premium Réthymnon | Papadakis Crète',
      description: 'Fabricant certifié Alumil à Réthymnon, Crète. Systèmes en aluminium premium pour résidences de luxe et hôtels. Qualité sans compromis.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Installation de Systèmes en Aluminium en Crète',
      locale: 'fr_FR'
    },
    nl: {
      title: 'Premium Aluminium Systemen Rethymnon | Papadakis Kreta',
      description: 'Gecertificeerde Alumil fabrikant in Rethymnon, Kreta. Premium aluminium systemen voor luxe woningen en hotels. Compromisloze kwaliteit.',
      siteName: 'Papadakis Aluminium',
      imageAlt: 'Installatie van Aluminium Systemen op Kreta',
      locale: 'nl_NL'
    }
  }

  const l = content[lang as keyof typeof content] || content['en']
  const url = `https://alouminia-papadakis.gr/${lang}`
  const imageUrl = 'https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.webp'

  return {
    title: l.title,
    description: l.description,
    alternates: {
      canonical: url,
      languages: {
        'el': 'https://alouminia-papadakis.gr/el',
        'en': 'https://alouminia-papadakis.gr/en',
        'de': 'https://alouminia-papadakis.gr/de',
        'fr': 'https://alouminia-papadakis.gr/fr',
        'nl': 'https://alouminia-papadakis.gr/nl',
        'x-default': 'https://alouminia-papadakis.gr/el',
      },
    },
    openGraph: {
      title: l.title,
      description: l.description,
      url,
      siteName: l.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: l.imageAlt,
        },
      ],
      locale: l.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: l.title,
      description: l.description,
      images: [imageUrl],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  if (lang === 'en') return <HomeEN />
  if (lang === 'de') return <HomeDE />
  if (lang === 'fr') return <HomeFR />
  if (lang === 'nl') return <HomeNL />
  
  return <HomeEL />
}
