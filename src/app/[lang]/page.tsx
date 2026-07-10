import type { Metadata } from 'next'
import HomeEL from '@/components/HomeEL'
import HomeEN from '@/components/HomeEN'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';
  
  const title = isEn 
    ? 'Premium Aluminum Systems Rethymno | Papadakis Crete' 
    : 'Κατασκευές Αλουμινίου Ρέθυμνο & Κρήτη | Κορυφαία Κουφώματα';
    
  const description = isEn 
    ? 'Certified Alumil manufacturer in Rethymno, Crete. Premium aluminum systems for luxury residences and hotels. Uncompromised quality.'
    : 'Πιστοποιημένος κατασκευαστής συστημάτων Alumil στο Ρέθυμνο. Κουφώματα υψηλής αισθητικής και ασφάλειας για απαιτητικά έργα.';
    
  const url = lang === 'en' ? 'https://alouminia-papadakis.gr/en' : 'https://alouminia-papadakis.gr/el';

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'el': 'https://alouminia-papadakis.gr/el',
        'en': 'https://alouminia-papadakis.gr/en',
        'x-default': 'https://alouminia-papadakis.gr/el',
      },
    },
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: 'https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  if (lang === 'en') {
    return <HomeEN />
  }
  
  return <HomeEL />
}
