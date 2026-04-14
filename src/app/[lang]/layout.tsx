import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import '@/app/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

// App-like iOS viewport parameters
export const viewport: Viewport = {
  themeColor: '#0a192f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
}

// Provide dictionary-based metadata in layout or generate Metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (lang === 'en') {
    return {
      title: 'Aluminum Systems Rethymno & Crete | Papadakis Manufacturing',
      description: 'Expert manufacturing and installation of premium Alumil aluminum systems, energy-efficient windows, security doors, and pergolas in Rethymno, Crete.',
      openGraph: {
        title: 'Aluminum Systems Rethymno | Papadakis Manufacturing',
        description: 'Expert manufacturing and installation of premium aluminum systems, windows, and security doors across Crete. Discover absolute security for your home.',
        url: 'https://alouminia-papadakis.gr/en',
        siteName: 'Papadakis Aluminium',
        images: [
          {
            url: 'https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.png',
            width: 1200,
            height: 630,
            alt: 'Aluminum Systems Installation in Crete',
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Aluminum Systems Rethymno | Papadakis Manufacturing',
        description: 'Installation of premium aluminum systems and windows in Rethymno, Crete.',
        images: ['https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.png'],
      },
      verification: {
        google: 'So9Um9OAEPVqMxFHrDLEPUZgZWSMtc5Qf5Fi_y4gCjQ',
      },
    }
  }
  return {
    title: 'Κατασκευές & Συστήματα Αλουμινίου Ρέθυμνο | Παπαδάκης Κρήτη',
    description: 'Μελέτη, κατασκευή και τοποθέτηση ενεργειακών κουφωμάτων αλουμινίου (Alumil), περγκολών και θωρακισμένων πορτών. Εξυπηρετούμε το Ρέθυμνο & όλη την Κρήτη.',
    openGraph: {
      title: 'Κατασκευή & Τοποθέτηση Αλουμινίων | Ρέθυμνο',
      description: 'Κατασκευή και εγκατάσταση συστημάτων αλουμινίου, ενεργειακών κουφωμάτων και πορτών ασφαλείας. Καλύπτουμε το Ρέθυμνο και ολόκληρη την Κρήτη.',
      url: 'https://alouminia-papadakis.gr',
      siteName: 'Αλουμίνια Παπαδάκης',
      images: [
        {
          url: 'https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.png',
          width: 1200,
          height: 630,
          alt: 'Κατασκευές Συστήματων Αλουμινίου στο Ρέθυμνο, Κρήτη',
        },
      ],
      locale: 'el_GR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Κατασκευές & Συστήματα Αλουμινίου Ρέθυμνο | Παπαδάκης',
      description: 'Κατασκευή και τοποθέτηση κουφωμάτων αλουμινίου στην Κρήτη.',
      images: ['https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.png'],
    },
    verification: {
      google: 'So9Um9OAEPVqMxFHrDLEPUZgZWSMtc5Qf5Fi_y4gCjQ',
    },
  }
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;
  const validLang = lang as 'el' | 'en';
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Αλουμίνια Παπαδάκης",
    "alternateName": "Papadakis Aluminium",
    "url": "https://alouminia-papadakis.gr",
    "logo": "https://alouminia-papadakis.gr/icon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+302831023897",
      "contactType": "customer service",
      "areaServed": "GR",
      "availableLanguage": ["Greek", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/alouminiapapadakis"
    ]
  };

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5DZRRRX5');
          `}
        </Script>
      </head>
      <body className={`${montserrat.className} bg-background text-foreground antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5DZRRRX5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Navbar lang={validLang} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer lang={validLang} />
        <CookieConsent lang={validLang} />
        <Analytics />
      </body>
    </html>
  )
}
