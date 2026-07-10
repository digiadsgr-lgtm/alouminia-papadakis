import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageTransition from '@/components/PageTransition'
import { ChevronLeft, Calendar } from 'lucide-react'
import { articles } from '@/data/articles'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  
  const content = {
    el: {
      title: 'Blog & Ενημερώσεις | Αλουμίνια Παπαδάκης',
      description: 'Διαβάστε τα τελευταία νέα, οδηγούς και συμβουλές για τα συστήματα αλουμινίου, την εξοικονόμηση ενέργειας και τη σύγχρονη δόμηση.',
      siteName: 'Αλουμίνια Παπαδάκης',
      locale: 'el_GR'
    },
    en: {
      title: 'Blog & Articles | Papadakis Aluminium',
      description: 'Read the latest news, guides, and tips regarding aluminum systems, energy efficiency, and modern architecture.',
      siteName: 'Papadakis Aluminium',
      locale: 'en_US'
    },
    de: {
      title: 'Blog & Artikel | Papadakis Aluminium',
      description: 'Lesen Sie die neuesten Nachrichten, Leitfäden und Tipps zu Aluminiumsystemen, Energieeffizienz und moderner Architektur.',
      siteName: 'Papadakis Aluminium',
      locale: 'de_DE'
    },
    fr: {
      title: 'Blog & Articles | Papadakis Aluminium',
      description: 'Lisez les dernières nouvelles, guides et conseils concernant les systèmes en aluminium, l\'efficacité énergétique et l\'architecture moderne.',
      siteName: 'Papadakis Aluminium',
      locale: 'fr_FR'
    },
    nl: {
      title: 'Blog & Artikelen | Papadakis Aluminium',
      description: 'Lees het laatste nieuws, gidsen en tips over aluminiumsystemen, energie-efficiëntie en moderne architectuur.',
      siteName: 'Papadakis Aluminium',
      locale: 'nl_NL'
    }
  }

  const l = content[lang as keyof typeof content] || content['en'];
  const url = `https://alouminia-papadakis.gr/${lang}/blog`;
  const imageUrl = 'https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.png';

  return {
    title: l.title,
    description: l.description,
    alternates: {
      canonical: url,
      languages: {
        'el': 'https://alouminia-papadakis.gr/el/blog',
        'en': 'https://alouminia-papadakis.gr/en/blog',
        'de': 'https://alouminia-papadakis.gr/de/blog',
        'fr': 'https://alouminia-papadakis.gr/fr/blog',
        'nl': 'https://alouminia-papadakis.gr/nl/blog',
        'x-default': 'https://alouminia-papadakis.gr/el/blog',
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
          alt: l.title,
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

export default async function BlogIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isEn = lang !== 'el';

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white border-b-8 border-red">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href={`/${lang}`} className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 font-medium">
            <ChevronLeft size={20} /> {isEn ? 'Back to Home' : 'Επιστροφή στην Αρχική'}
          </Link>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            {isEn ? 'Our' : 'Το'} <span className="text-red">Blog</span> {isEn ? '' : 'Μας'}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {isEn 
              ? 'Insights, technical guides, and news about aluminum systems and modern architecture.' 
              : 'Οδηγοί αγοράς, τεχνικές συμβουλές και νέα γύρω από τα συστήματα αλουμινίου και τη δόμηση.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {articles.map((article, idx) => (
              <Link key={idx} href={`/${lang}/blog/${article.slug}`} className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 flex flex-col hover:border-red/30 transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] active:scale-[0.98]">
                <div className="relative h-72 w-full overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={isEn ? article.titleEN : article.titleEL} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
                    <Calendar size={14} className="text-red" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString(isEn ? 'en-US' : 'el-GR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  </div>
                  <h2 className="text-2xl font-black text-navy mb-4 leading-tight group-hover:text-red transition-colors">
                    {isEn ? article.titleEN : article.titleEL}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-1 leading-relaxed text-sm">
                    {isEn ? article.descriptionEN : article.descriptionEL}
                  </p>
                  <span className="text-red font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-sm">
                    {isEn ? 'Read Article' : 'Διαβάστε Περισσότερα'} <ChevronLeft className="rotate-180" size={16} strokeWidth={3}/>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
