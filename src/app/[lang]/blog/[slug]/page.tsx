import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles, getLocalizedField } from '@/data/articles'
import PageTransition from '@/components/PageTransition'
import { ChevronLeft, Calendar, Clock, Phone, ArrowRight, User, Folder } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import TableOfContents from '@/components/TableOfContents'
import ReadingProgressBar from '@/components/ReadingProgressBar'
import { parse } from 'node-html-parser'

const translations = {
  el: {
    back: 'Blog',
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
    keyTakeaway: 'Σημαντικο Σημειο',
  },
  en: {
    back: 'Blog',
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
    keyTakeaway: 'Key Takeaway',
  },
  de: {
    back: 'Blog',
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
    keyTakeaway: 'Wichtigster Punkt',
  },
  fr: {
    back: 'Blog',
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
    keyTakeaway: 'Point Clé',
  },
  nl: {
    back: 'Blog',
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
    keyTakeaway: 'Belangrijkste Punt',
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
  
  const title = getLocalizedField(article, 'title', lang);
  const description = getLocalizedField(article, 'description', lang);
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

  const title = getLocalizedField(article, 'title', lang);
  const rawContent = getLocalizedField(article, 'content', lang) || '';
  const faqData = getLocalizedField(article, 'faq', lang);
  const wordsCount = rawContent.replace(/<[^>]*>?/gm, ' ').split(/\s+/).length;
  const readTime = Math.max(1, Math.round(wordsCount / 200));
  
  // HTML PARSING
  const root = parse(rawContent);
  const h2Elements = root.querySelectorAll('> h2');
  
  const toc: { id: string, text: string }[] = [];
  h2Elements.forEach(h2 => {
    const text = h2.text;
    const id = text.toLowerCase().replace(/[^a-z0-9α-ωάέήίόύώ]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    h2.setAttribute('id', id);
    h2.setAttribute('class', 'scroll-mt-32 mt-16 mb-8 pb-2 border-b-2 border-gray-100 flex items-center relative pl-5 before:content-[""] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-2/3 before:w-1.5 before:bg-red-light before:rounded-full');
    toc.push({ id, text });
  });

  // Handle Cover Image
  const firstP = root.querySelector('> p');
  if (firstP) {
    firstP.setAttribute('class', 'text-xl md:text-2xl font-medium text-navy mb-12 leading-relaxed tracking-tight');
    const imageHtml = `
      <figure class="my-14 relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
        <img src="${article.image}" alt="${title}" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" fetchpriority="high" sizes="(max-width: 1024px) 100vw, 1024px" />
      </figure>
    `;
    firstP.insertAdjacentHTML('afterend', imageHtml);
  }
  
  const hasEnoughH2 = h2Elements.length >= 3;
  
  // Key Takeaway block
  const takeawayData = getLocalizedField(article, 'keyTakeaway', lang);
  let takeawayHtml = '';
  if (takeawayData) {
    takeawayHtml = `
      <div class="my-12 p-8 bg-gradient-to-br from-red-light/5 to-white rounded-2xl border-l-4 border-l-red-light shadow-sm">
        <div class="flex gap-4 items-start">
          <svg class="w-8 h-8 text-red-light shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          <div>
            <h4 class="text-sm font-black text-navy uppercase tracking-widest mb-2">${t.keyTakeaway}</h4>
            <p class="text-lg font-bold text-gray-800 m-0 leading-relaxed">${takeawayData}</p>
          </div>
        </div>
      </div>
    `;
  }
  
  // Stats block
  const statsData = getLocalizedField(article, 'stats', lang);
  let statsHtml = '';
  if (statsData && statsData.length > 0) {
    const cards = statsData.map((stat: any) => `
      <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center flex-1">
        <div class="text-3xl md:text-4xl font-black text-white mb-2">${stat.value}</div>
        <div class="text-xs font-bold text-gray-300 uppercase tracking-wide">${stat.label}</div>
      </div>
    `).join('');
    
    statsHtml = `
      <div class="my-16 p-8 md:p-12 rounded-3xl bg-navy relative overflow-hidden shadow-xl text-white">
        <div class="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-red-light rounded-full opacity-20 blur-3xl"></div>
        <div class="relative z-10 flex flex-col md:flex-row gap-6">
          ${cards}
        </div>
      </div>
    `;
  }
  
  if (hasEnoughH2) {
    if (takeawayHtml && h2Elements[1]) {
      h2Elements[1].insertAdjacentHTML('beforebegin', takeawayHtml);
    }
    if (statsHtml) {
      if (h2Elements[3]) {
        h2Elements[3].insertAdjacentHTML('beforebegin', statsHtml);
      } else {
        root.insertAdjacentHTML('beforeend', statsHtml);
      }
    }
  } else {
    if (takeawayHtml) root.insertAdjacentHTML('beforeend', takeawayHtml);
    if (statsHtml) root.insertAdjacentHTML('beforeend', statsHtml);
  }
  
  // Custom Typography overrides
  root.querySelectorAll('> ul').forEach(ul => {
    ul.setAttribute('class', 'space-y-4 my-8 pl-0 list-none');
    ul.querySelectorAll('li').forEach(li => {
      li.setAttribute('class', 'relative pl-8 before:content-["▸"] before:absolute before:left-0 before:text-red-light before:font-black before:text-xl text-lg text-gray-700 leading-relaxed');
    });
  });
  
  root.querySelectorAll('> p').forEach(p => {
    if (!p.getAttribute('class')) {
      p.setAttribute('class', 'text-lg text-gray-700 leading-relaxed mb-6');
    }
  });

  // Table styling reset and redesign
  root.querySelectorAll('table').forEach(table => {
    table.removeAttribute('class');
    table.setAttribute('class', 'w-full text-left border-collapse bg-white rounded-xl overflow-hidden min-w-[600px] shadow-sm');
  });
  root.querySelectorAll('tr').forEach(tr => tr.removeAttribute('class'));
  root.querySelectorAll('th').forEach(th => {
    th.removeAttribute('class');
    th.setAttribute('class', 'p-5 border-b border-gray-200 font-black text-navy bg-gray-50 uppercase tracking-wider text-sm');
  });
  root.querySelectorAll('td').forEach(td => {
    td.removeAttribute('class');
    td.setAttribute('class', 'p-5 border-b border-gray-100 text-gray-700 bg-white');
  });
  root.querySelectorAll('.overflow-x-auto').forEach(div => {
    div.setAttribute('class', 'overflow-x-auto my-12 rounded-xl border border-gray-200 shadow-sm relative scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100');
  });

  const processedContent = root.toString();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "image": [
      `https://alouminia-papadakis.gr${article.image}`
    ],
    "datePublished": article.date,
    "dateModified": article.dateModified || article.date,
    "inLanguage": lang === 'el' ? 'el-GR' : (lang === 'de' ? 'de-DE' : (lang === 'fr' ? 'fr-FR' : (lang === 'nl' ? 'nl-NL' : 'en-US'))),
    "author": [{
        "@type": "Organization",
        "name": "Αλουμίνια Παπαδάκης",
        "url": "https://alouminia-papadakis.gr"
    }]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": `https://alouminia-papadakis.gr/${lang}`
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": `https://alouminia-papadakis.gr/${lang}/blog`
    },{
      "@type": "ListItem",
      "position": 3,
      "name": title
    }]
  };

  const faqSchema = faqData && faqData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item: any) => ({
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
      <ReadingProgressBar />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      
      <article className="bg-white min-h-screen pb-24">
        {/* Premium Header Zone */}
        <header className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-offwhite border-b border-gray-100">
          <div className="max-w-[70ch] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
              <Link href={`/${lang}`} className="hover:text-navy transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href={`/${lang}/blog`} className="hover:text-navy transition-colors">Blog</Link>
              <span className="text-gray-300">/</span>
              <span className="text-navy truncate">{article.category || 'Article'}</span>
            </nav>

            {/* Meta Zone */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {article.category && (
                <span className="px-4 py-1.5 bg-navy text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                  {article.category}
                </span>
              )}
              <div className="flex items-center gap-1.5 text-sm font-bold text-gray-500 uppercase tracking-widest">
                <Clock size={16} className="text-red-light" />
                <span>{readTime} {lang === 'el' ? 'ΛΕΠΤΑ' : 'MIN READ'}</span>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-black text-navy leading-[1.1] tracking-tighter mb-8">
              {title}
            </h1>

            {/* Date & Update */}
            <div className="flex items-center gap-6 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <Calendar size={16} className="text-gray-400" />
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString(isEl ? 'el-GR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
              {isUpdated && (
                <div className="flex items-center gap-1.5 text-red-light bg-red-light/10 px-3 py-1 rounded-full">
                  <span>{t.updated} <time dateTime={article.dateModified}>{new Date(article.dateModified).toLocaleDateString(isEl ? 'el-GR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></span>
                </div>
              )}
            </div>

          </div>
        </header>

        {/* 2-Column Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex flex-col lg:flex-row gap-16 xl:gap-24">
          
          {/* Main Content Area */}
          <div className="lg:w-[70ch] shrink-0 mx-auto lg:mx-0">
            <div 
              className="article-content prose prose-lg max-w-none prose-headings:text-navy prose-headings:font-black prose-a:text-red-light prose-a:underline-offset-4 hover:prose-a:text-navy prose-strong:text-navy prose-strong:font-black"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
            
            {/* FAQ Section */}
            {faqData && faqData.length > 0 && (
              <div className="mt-20 bg-offwhite rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <h2 className="text-3xl font-black text-navy mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-red-light rounded-full block"></span>
                  {t.faq}
                </h2>
                <div className="space-y-6">
                  {faqData.map((faq: any, idx: number) => (
                    <div key={idx} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-lg font-bold text-navy mb-3 leading-snug">{faq.q}</h3>
                      <p className="text-gray-600 leading-relaxed m-0 text-md">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Author Box */}
            <div className="mt-12 flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-md">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                <User size={28} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1.5">{t.author}</p>
                <Link href={`/${lang}`} className="text-xl font-black text-navy hover:text-red-light transition-colors block">
                  Αλουμίνια Παπαδάκης
                </Link>
                <p className="text-sm text-gray-500 mt-1">Experts in premium aluminum systems in Crete.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[350px] shrink-0 hidden lg:block">
            <div className="sticky top-32 space-y-10">
              
              <TableOfContents toc={toc} label={t.toc} />

              {/* Sidebar CTA */}
              <div className="bg-navy rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-light rounded-full opacity-30 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <Folder className="w-10 h-10 text-red-light mb-6" />
                  <h3 className="text-2xl font-black mb-4 leading-tight">{t.ctaTitle}</h3>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">{t.ctaDesc}</p>
                  
                  <div className="space-y-3">
                    <a 
                      href="tel:+302831023897" 
                      className="flex items-center justify-center gap-2 bg-red-light text-white px-5 py-4 rounded-xl font-bold hover:bg-white hover:text-navy transition-all w-full text-sm uppercase tracking-wider shadow-lg"
                    >
                      <Phone size={18} />
                      {t.call}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          
        </div>
      </article>
      
      {/* Related Articles Bottom Strip */}
      {relatedArticles.length > 0 && (
        <section className="bg-offwhite py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl font-black text-navy">{t.related}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((rel) => (
                <Link 
                  key={rel.slug} 
                  href={`/${lang}/blog/${rel.slug}`}
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-light/30"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image 
                      src={rel.image} 
                      alt={getLocalizedField(rel, 'title', lang)} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
                      <Calendar size={14} className="text-red-light" />
                      {new Date(rel.date).toLocaleDateString(isEl ? 'el-GR' : 'en-US', { month: 'short', year: 'numeric' })}
                    </span>
                    <h4 className="font-black text-navy text-xl line-clamp-2 group-hover:text-red-light transition-colors leading-snug mb-4">
                      {getLocalizedField(rel, 'title', lang)}
                    </h4>
                    <div className="mt-auto text-sm font-bold text-navy group-hover:text-red-light flex items-center gap-2 transition-colors">
                      {t.readMore} <ArrowRight size={16} strokeWidth={2.5}/>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  )
}
