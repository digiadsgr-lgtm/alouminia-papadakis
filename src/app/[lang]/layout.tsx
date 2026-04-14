import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/app/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ subsets: ['latin', 'greek'], variable: '--font-montserrat' })

// Provide dictionary-based metadata in layout or generate Metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ lang: 'el' | 'en' }> }): Promise<Metadata> {
  const { lang } = await params;
  if (lang === 'en') {
    return {
      title: 'Papadakis Aluminium | Premium Architectural Systems in Crete',
      description: 'Certified Alumil Manufacturer in Rethymno. High-end energy efficient windows, bioclimatic pergolas, and industrial ironworks.',
    }
  }
  return {
    title: 'Αλουμίνια Παπαδάκης | Κορυφαίες Κατασκευές στο Ρέθυμνο',
    description: 'Ενεργειακά κουφώματα, βιοκλιματικές πέργκολες, σιδηροκατασκευές με έδρα το Ρέθυμνο.',
  }
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: 'el' | 'en' }>
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${montserrat.className} bg-background text-foreground antialiased`}>
        <Navbar lang={lang} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  )
}
