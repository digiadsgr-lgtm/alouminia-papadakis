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
  viewportFit: 'cover'
}

// Provide dictionary-based metadata in layout or generate Metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
    if (lang === 'en') {
    return {
      metadataBase: new URL('https://alouminia-papadakis.gr'),
      title: 'Premium Aluminum Systems Rethymno | Papadakis Crete',
      description: 'Certified Alumil manufacturer in Rethymno, Crete. Premium aluminum systems for luxury residences and hotels. Uncompromised quality.',
      alternates: {
        canonical: '/en',
        languages: {
          'el': '/el',
          'en': '/en',
        },
      },
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
    metadataBase: new URL('https://alouminia-papadakis.gr'),
    title: 'Κατασκευές Αλουμινίου Ρέθυμνο & Κρήτη | Κορυφαία Κουφώματα',
    description: 'Πιστοποιημένος κατασκευαστής συστημάτων Alumil στο Ρέθυμνο. Κουφώματα υψηλής αισθητικής και ασφάλειας για απαιτητικά έργα.',
    alternates: {
      canonical: '/el',
      languages: {
        'el': '/el',
        'en': '/en',
      },
    },
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
    "@type": "HomeAndConstructionBusiness",
    "name": "Αλουμίνια Παπαδάκης",
    "alternateName": ["Papadakis Aluminium", "Papadakis Aluminum Systems", "Κατασκευές Αλουμινίου Παπαδάκης Ι. Γεώργιος"],
    "legalName": "Κατασκευές Αλουμινίου Παπαδάκης Ι. Γεώργιος",
    "url": "https://alouminia-papadakis.gr",
    "logo": "https://alouminia-papadakis.gr/icon.png",
    "image": "https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.png",
    "description": "Certified Alumil manufacturer specializing in project-based aluminum solutions for luxury villas, boutique hotels, and high-end residential developments across Crete. Uncompromised operational maturity, scalable manufacturing processes with zero delays, and a proven extensive portfolio. Full workflow: architectural study → CAD design → in-house manufacturing → on-site installation by permanent crews → structured after-sales guarantee.",
    "foundingDate": "1993",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 25
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Δρουλίσκου 8",
      "addressLocality": "Ρέθυμνο",
      "addressRegion": "Κρήτη",
      "postalCode": "74100",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.366667,
      "longitude": 24.483333
    },
    "telephone": "+302831023897",
    "email": "gpapadakisret@gmail.com",
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Γιάννης Καλαϊτζάκης (Εργολάβος)" },
        "datePublished": "2023-11-15",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Εξαιρετική συνεργασία σε project βίλας στον Πλακιά. Τήρηση χρονοδιαγραμμάτων, μηδενικό execution risk. Τα συστήματα Alumil SUPREME μπήκαν με απόλυτη ακρίβεια. Εγγύηση για επαγγελματίες."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Maria Stavrou (Architect)" },
        "datePublished": "2024-02-28",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "The most reliable aluminum manufacturing partner in Crete. Their in-house production facility ensures scalable workflow without delays. Perfect execution on boutique hotel renovation."
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Ρέθυμνο" },
      { "@type": "City", "name": "Χανιά" },
      { "@type": "City", "name": "Ηράκλειο" },
      { "@type": "AdministrativeArea", "name": "Κρήτη" }
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Manufacturer Certification",
        "recognizedBy": { "@type": "Organization", "name": "Alumil S.A." }
      }
    ],
    "knowsAbout": [
      "Θερμοδιακοπτόμενα κουφώματα αλουμινίου",
      "Thermal break aluminum windows",
      "Alumil SMARTIA & SUPREME systems",
      "Seaside Class anti-corrosion coating",
      "RC3/RC4 security doors",
      "Bioclimatic pergolas",
      "Luxury villa aluminum installations",
      "Hotel renovation aluminum systems",
      "Πρόγραμμα Εξοικονομώ - Αυτονομώ",
      "CAD architectural studies",
      "Electrostatic powder coating",
      "Custom Inox ironworks"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Αρχιτεκτονικές Λύσεις Αλουμινίου",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Ενεργειακά Κουφώματα Alumil",
          "description": "Μελέτη, κατασκευή και τοποθέτηση θερμοδιακοπτόμενων κουφωμάτων με δείκτη θερμοπερατότητας Uw έως 0.9 W/m²K. Πιστοποιημένα για Εξοικονομώ.",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Συρόμενα Κουφώματα SMARTIA S560", "description": "Premium θερμοδιακοπτόμενα συρόμενα συστήματα για μεγάλα ανοίγματα βιλών" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ανοιγόμενα Κουφώματα SUPREME S77", "description": "Κορυφαίο σύστημα ηχομόνωσης και θερμομόνωσης για κατοικίες" } }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Θωρακισμένες Πόρτες Ασφαλείας RC3",
          "description": "Πιστοποιημένες πόρτες ασφαλείας κλάσης 3 και 4 με κλειδαριές Defender νέας γενιάς."
        },
        {
          "@type": "OfferCatalog",
          "name": "Βιοκλιματικές Πέργκολες",
          "description": "Heavy-duty πέργκολες αλουμινίου σχεδιασμένες για τους ισχυρούς ανέμους της Κρήτης."
        },
        {
          "@type": "OfferCatalog",
          "name": "Σιδηροκατασκευές & Ironworks",
          "description": "Custom αυλόπορτες, μεταλλικά κτίρια, σκάλες Inox με ηλεκτροστατική βαφή Seaside Class."
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ολοκληρωμένη Διαχείριση Έργου Αλουμινίου",
          "description": "Structured project workflow: αρχιτεκτονική μελέτη → τεχνική προσφορά → κατασκευή στη μονάδα μας → τοποθέτηση → παράδοση με το κλειδί στο χέρι → εγγύηση & after-sales υποστήριξη. Εξειδίκευση σε πολυτελείς κατοικίες, βίλες και ξενοδοχειακές μονάδες.",
          "provider": { "@type": "HomeAndConstructionBusiness", "name": "Αλουμίνια Παπαδάκης" },
          "areaServed": "Κρήτη",
          "serviceType": "Project-based aluminum construction"
        }
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+302831023897",
      "contactType": "Technical Department",
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
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="Alouminia Papadakis AI Context" />
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
      <body suppressHydrationWarning className={`${montserrat.className} bg-background text-foreground antialiased`}>
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
