import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageTransition from '@/components/PageTransition'
import { ChevronLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import { articles, getLocalizedField } from '@/data/articles'

const translations = {
  el: {
    title: 'Blog & Ενημερώσεις',
    description: 'Διαβάστε τα τελευταία νέα, οδηγούς και συμβουλές για τα συστήματα αλουμινίου, την εξοικονόμηση ενέργειας και τη σύγχρονη δόμηση.',
    siteName: 'Αλουμίνια Παπαδάκης',
    back: 'Επιστροφή στην Αρχική',
    heading1: 'Το',
    heading2: 'Blog',
    heading3: 'Μας',
    readTime: 'λεπτά',
    readArticle: 'Διαβάστε Περισσότερα',
    all: 'Όλα',
  },
  en: {
    title: 'Blog & Articles | Papadakis Aluminium',
    description: 'Read the latest news, guides, and tips regarding aluminum systems, energy efficiency, and modern architecture.',
    siteName: 'Papadakis Aluminium',
    back: 'Back to Home',
    heading1: 'Our',
    heading2: 'Blog',
    heading3: '',
    readTime: 'min',
    readArticle: 'Read Article',
    all: 'All',
  },
  de: {
    title: 'Blog & Artikel | Papadakis Aluminium',
    description: 'Lesen Sie die neuesten Nachrichten, Leitfäden und Tipps zu Aluminiumsystemen, Energieeffizienz und moderner Architektur.',
    siteName: 'Papadakis Aluminium',
    back: 'Zurück zur Startseite',
    heading1: 'Unser',
    heading2: 'Blog',
    heading3: '',
    readTime: 'Min',
    readArticle: 'Weiterlesen',
    all: 'Alle',
  },
  fr: {
    title: 'Blog & Articles | Papadakis Aluminium',
    description: 'Lisez les dernières nouvelles, guides et conseils concernant les systèmes en aluminium, l\'efficacité énergétique et l\'architecture moderne.',
    siteName: 'Papadakis Aluminium',
    back: 'Retour à l\'accueil',
    heading1: 'Notre',
    heading2: 'Blog',
    heading3: '',
    readTime: 'min',
    readArticle: 'Lire la suite',
    all: 'Tous',
  },
  nl: {
    title: 'Blog & Artikelen | Papadakis Aluminium',
    description: 'Lees het laatste nieuws, gidsen en tips over aluminiumsystemen, energie-efficiëntie en moderne architectuur.',
    siteName: 'Papadakis Aluminium',
    back: 'Terug naar Home',
    heading1: 'Ons',
    heading2: 'Blog',
    heading3: '',
    readTime: 'min',
    readArticle: 'Lees meer',
    all: 'Alle',
  },
} as const;

type Locale = keyof typeof translations;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang as Locale] || translations.en;
  
  const url = `https://alouminia-papadakis.gr/${lang}/blog`;
  const imageUrl = 'https://alouminia-papadakis.gr/images/hero_aluminum_villa_1776110912532.png';

  return {
    title: t.title,
    description: t.description,
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
      title: t.title,
      description: t.description,
      url,
      siteName: t.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: t.title,
        },
      ],
      locale: lang === 'el' ? 'el_GR' : (lang === 'de' ? 'de_DE' : (lang === 'fr' ? 'fr_FR' : (lang === 'nl' ? 'nl_NL' : 'en_US'))),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: [imageUrl],
    },
  }
}

export default async function BlogIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = translations[lang as Locale] || translations.en;
  
  // Sort articles by date descending
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredArticle = sortedArticles[0];
  const gridArticles = sortedArticles.slice(1);

  // Extract unique categories
  const categories = Array.from(new Set(articles.map(a => a.category).filter(Boolean)));

  const getReadTime = (article: any) => {
    const text = getLocalizedField(article, 'content', lang);
    if (!text) return 1;
    const words = text.replace(/<[^>]*>?/gm, ' ').split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white border-b-8 border-red-light">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href={`/${lang}`} className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 font-medium">
            <ChevronLeft size={20} /> {t.back}
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter">
            {t.heading1} <span className="text-red-light">{t.heading2}</span> {t.heading3}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            {t.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-offwhite min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filters (Static visually for now, could be dynamic client-side) */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <span className="px-6 py-2.5 bg-navy text-white rounded-full text-sm font-bold shadow-md cursor-pointer hover:bg-navy/90 transition-colors">
              {t.all}
            </span>
            {categories.map((cat, idx) => (
              <span key={idx} className="px-6 py-2.5 bg-white text-navy border border-gray-200 rounded-full text-sm font-bold shadow-sm hover:border-red-light hover:text-red-light cursor-pointer transition-colors">
                {cat}
              </span>
            ))}
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <Link 
              href={`/${lang}/blog/${featuredArticle.slug}`} 
              className="group relative flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mb-16 border border-gray-100 hover:border-red-light/30"
            >
              <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
                <Image 
                  src={featuredArticle.image} 
                  alt={getLocalizedField(featuredArticle, 'title', lang)} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  priority
                />
                {featuredArticle.category && (
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-1.5 bg-red-light/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                      {featuredArticle.category}
                    </span>
                  </div>
                )}
              </div>
              <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-6 text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest">
                  <span className="flex items-center gap-2 text-navy">
                    <Calendar size={16} className="text-red-light" />
                    <time dateTime={featuredArticle.date}>
                      {new Date(featuredArticle.date).toLocaleDateString(lang === 'el' ? 'el-GR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {getReadTime(featuredArticle)} {t.readTime}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-navy mb-6 leading-tight group-hover:text-red-light transition-colors line-clamp-3">
                  {getLocalizedField(featuredArticle, 'title', lang)}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed line-clamp-3">
                  {getLocalizedField(featuredArticle, 'description', lang)}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-red-light font-bold uppercase tracking-wide text-sm group-hover:gap-4 transition-all">
                  {t.readArticle} <ArrowRight size={18} strokeWidth={3}/>
                </div>
              </div>
            </Link>
          )}

          {/* Grid Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridArticles.map((article, idx) => (
              <Link 
                key={idx} 
                href={`/${lang}/blog/${article.slug}`} 
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-light/30 active:scale-[0.98]"
              >
                <div className="relative w-full aspect-video overflow-hidden bg-gray-100">
                  <Image 
                    src={article.image} 
                    alt={getLocalizedField(article, 'title', lang)} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  {article.category && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-navy text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                    <time dateTime={article.date} className="flex items-center gap-1.5 text-navy">
                      <Calendar size={14} className="text-red-light" />
                      {new Date(article.date).toLocaleDateString(lang === 'el' ? 'el-GR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </time>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {getReadTime(article)} {t.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-black text-navy mb-4 leading-snug group-hover:text-red-light transition-colors line-clamp-2">
                    {getLocalizedField(article, 'title', lang)}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 flex-1 leading-relaxed text-sm line-clamp-2">
                    {getLocalizedField(article, 'description', lang)}
                  </p>
                  
                  <div className="flex items-center gap-2 text-navy font-bold text-sm group-hover:text-red-light group-hover:gap-3 transition-all">
                    {t.readArticle} <ArrowRight size={16} strokeWidth={2.5}/>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </PageTransition>
  )
}
