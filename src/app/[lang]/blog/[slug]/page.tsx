import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/data/articles'
import PageTransition from '@/components/PageTransition'
import { ChevronLeft, Calendar, Clock, Phone, ArrowRight, User } from 'lucide-react'
import JsonLd from '@/components/JsonLd'

const translations = {
  el: {
    back: 'Επιστροφή στο Blog',
    toc: 'Πίνακας Περιεχομένων',
    updated: 'Ενημερώθηκε:',
    faq: 'Συχνές Ερωτήσεις',
    ctaTitle: 'Δωρεάν Μελέτη & Κοστολόγηση',
    ctaDesc: 'Επικοινωνήστε μαζί μας για μια εξατομικευμένη προσφορά για τον χώρο σας, χωρίς καμία δέσμευση.',
    call: 'Καλέστε μας',
    services: 'Οι Υπηρεσίες μας',
    related: 'Σχετικά Άρθρα',
    author: 'Συντάκτης',
    readMore: 'Διαβάστε περισσότερα',
  },
  en: {
    back: 'Back to Blog',
    toc: 'Table of Contents',
    updated: 'Updated:',
    faq: 'Frequently Asked Questions',
    ctaTitle: 'Free Study & Quote',
    ctaDesc: 'Contact us for a personalized quote for your space, with no obligation.',
    call: 'Call us',
    services: 'Our Services',
    related: 'Related Articles',
    author: 'Author',
    readMore: 'Read more',
  },
  de: {
    back: 'Zurück zum Blog',
    toc: 'Inhaltsverzeichnis',
    updated: 'Aktualisiert:',
    faq: 'Häufig gestellte Fragen',
    ctaTitle: 'Kostenlose Studie & Angebot',
    ctaDesc: 'Kontaktieren Sie uns für ein unverbindliches, personalisiertes Angebot für Ihre Räumlichkeiten.',
    call: 'Rufen Sie uns an',
    services: 'Unsere Dienstleistungen',
    related: 'Ähnliche Artikel',
    author: 'Autor',
    readMore: 'Weiterlesen',
  },
  fr: {
    back: 'Retour au blog',
    toc: 'Table des matières',
    updated: 'Mise à jour :',
    faq: 'Foire aux questions',
    ctaTitle: 'Étude et devis gratuits',
    ctaDesc: 'Contactez-nous pour un devis personnalisé pour votre espace, sans aucun engagement.',
    call: 'Appelez-nous',
    services: 'Nos services',
    related: 'Articles liés',
    author: 'Auteur',
    readMore: 'Lire la suite',
  },
  nl: {
    back: 'Terug naar blog',
    toc: 'Inhoudsopgave',
    updated: 'Bijgewerkt:',
    faq: 'Veelgestelde vragen',
    ctaTitle: 'Gratis studie & offerte',
    ctaDesc: 'Neem contact met ons op voor een gepersonaliseerde offerte voor uw ruimte, zonder verplichting.',
    call: 'Bel ons',
    services: 'Onze diensten',
    related: 'Gerelateerde artikelen',
    author: 'Auteur',
    readMore: 'Lees meer',
  },
} as const;

type Locale = keyof typeof translations;

export async function generateStaticParams() {
  const paths = [];
  for (const lang of ['el', 'en', 'de', 'fr', 'nl']) {
    for (const article of articles) {
      paths.push({ lang, slug: article.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string, slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  
  const article = articles.find(a => a.slug === slug);
  if (!article) return {};
  
  const title = lang === 'el' ? article.titleEL : article.titleEN;
  const description = lang === 'el' ? article.descriptionEL : article.descriptionEN;
  const url = `https://alouminia-papadakis.gr/${lang}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'el': `https://alouminia-papadakis.gr/el/blog/${slug}`,
        'en': `https://alouminia-papadakis.gr/en/blog/${slug}`,
        'de': `https://alouminia-papadakis.gr/de/blog/${slug}`,
        'fr': `https://alouminia-papadakis.gr/fr/blog/${slug}`,
        'nl': `https://alouminia-papadakis.gr/nl/blog/${slug}`,
        'x-default': `https://alouminia-papadakis.gr/el/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: lang !== 'el' ? 'Papadakis Aluminium' : 'Αλουμίνια Παπαδάκης',
      images: [
        {
          url: `https://alouminia-papadakis.gr${article.image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: lang === 'el' ? 'el_GR' : (lang === 'de' ? 'de_DE' : (lang === 'fr' ? 'fr_FR' : (lang === 'nl' ? 'nl_NL' : 'en_US'))),
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.dateModified || article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://alouminia-papadakis.gr${article.image}`],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string, slug: string }> }) {
  const { lang, slug } = await params;
  const t = translations[lang as Locale] || translations.en;
  const isEl = lang === 'el';
  
  const article = articles.find(a => a.slug === slug);
  if (!article) notFound();

  const title = isEl ? article.titleEL : article.titleEN;
  const description = isEl ? article.descriptionEL : article.descriptionEN;
  const rawContent = (isEl ? article.contentEL : article.contentEN) || '';
  const faqData = isEl ? article.faqEL : article.faqEN;
  
  const toc: { id: string, text: string }[] = [];
  const processedContent = rawContent.replace(/<h2[^>]*>(.*?)<\/h2>/g, (match, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9α-ωάέήίόύώ]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    toc.push({ id, text: text.replace(/<[^>]*>?/gm, '') });
    return `<h2 id="${id}" class="scroll-mt-32">${text}</h2>`;
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": [
      `https://alouminia-papadakis.gr${article.image}`
    ],
    "datePublished": article.date,
    "dateModified": article.dateModified || article.date,
    "inLanguage": isEl ? 'el-GR' : 'en-US',
    "author": [{
        "@type": "Organization",
        "name": "Αλουμίνια Παπαδάκης",
        "url": "https://alouminia-papadakis.gr"
    }]
  };

  const faqSchema = faqData && faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  } : null;

  const isUpdated = article.dateModified && new Date(article.dateModified) > new Date(article.date);
  
  const relatedArticles = articles
    .filter(a => a.slug !== slug && (article.relatedSlugs?.includes(a.slug)))
    .slice(0, 3);
  
  if (relatedArticles.length < 3) {
    const more = articles.filter(a => a.slug !== slug && !relatedArticles.includes(a));
    relatedArticles.push(...more.slice(0, 3 - relatedArticles.length));
  }

  return (
    <PageTransition>
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      
      <article className="bg-offwhite min-h-screen">
        {/* Header */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white border-b-8 border-red">
          <div className="absolute inset-0 z-0">
            <Image 
              src={article.image} 
              alt={title} 
              fill 
              className="object-cover opacity-20 filter blur-sm" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/95 to-navy" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/${lang}/blog`} className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 font-medium">
              <ChevronLeft size={20} /> {t.back}
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-red mb-6 uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <Calendar size={16} />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString(isEl ? 'el-GR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
              {isUpdated && (
                <div className="flex items-center gap-1.5 text-orange-400">
                  <Clock size={16} />
                  <span>{t.updated} <time dateTime={article.dateModified}>{new Date(article.dateModified).toLocaleDateString(isEl ? 'el-GR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                </div>
              )}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              {title}
            </h1>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <div 
              className="prose prose-lg prose-slate max-w-none prose-headings:text-navy prose-headings:font-black prose-a:text-red hover:prose-a:text-red-700 prose-img:rounded-xl prose-img:shadow-lg prose-table:rounded-xl"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
            
            {/* FAQ Section */}
            {faqData && faqData.length > 0 && (
              <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red">
                <h2 className="text-3xl font-black text-navy mb-8">{t.faq}</h2>
                <div className="space-y-6">
                  {faqData.map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-xl font-bold text-navy mb-2">{faq.q}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* CTA Banner */}
            <div className="mt-16 bg-gradient-to-br from-navy to-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-red rounded-full opacity-20 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-3 text-white">{t.ctaTitle}</h3>
                  <p className="text-gray-300 max-w-md">{t.ctaDesc}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <a 
                    href="tel:+302831023897" 
                    className="inline-flex items-center justify-center gap-2 bg-red text-white px-6 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors whitespace-nowrap"
                  >
                    <Phone size={20} />
                    {t.call}
                  </a>
                  {article.relatedService && (
                    <Link 
                      href={`/${lang}${article.relatedService}`}
                      className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors whitespace-nowrap backdrop-blur-sm"
                    >
                      {t.services} <ArrowRight size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-12 flex items-center gap-6 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                <User size={32} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">{t.author}</p>
                <Link href={`/${lang}`} className="text-xl font-black text-navy hover:text-red transition-colors">
                  Αλουμίνια Παπαδάκης
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-32 space-y-12">
              
              {/* Table of Contents */}
              {toc.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-black text-navy uppercase tracking-wider mb-4 pb-4 border-b border-gray-100">
                    {t.toc}
                  </h3>
                  <ul className="space-y-3">
                    {toc.map((item, idx) => (
                      <li key={idx}>
                        <a 
                          href={`#${item.id}`} 
                          className="text-gray-600 hover:text-red transition-colors block text-sm font-medium leading-tight"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div>
                  <h3 className="text-lg font-black text-navy uppercase tracking-wider mb-6 pb-2 border-b-2 border-red inline-block">
                    {t.related}
                  </h3>
                  <div className="space-y-6">
                    {relatedArticles.map((rel) => (
                      <Link 
                        key={rel.slug} 
                        href={`/${lang}/blog/${rel.slug}`}
                        className="group flex gap-4 bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-50"
                      >
                        <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden">
                          <Image 
                            src={rel.image} 
                            alt={isEl ? rel.titleEL : rel.titleEN} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h4 className="font-bold text-navy text-sm line-clamp-2 group-hover:text-red transition-colors leading-snug mb-2">
                            {isEl ? rel.titleEL : rel.titleEN}
                          </h4>
                          <span className="text-xs text-gray-400 flex items-center gap-1 font-medium">
                            <Calendar size={12} />
                            {new Date(rel.date).toLocaleDateString(isEl ? 'el-GR' : 'en-US', { month: 'short', year: 'numeric' })}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
            </div>
          </aside>
          
        </div>
      </article>
    </PageTransition>
  )
}
