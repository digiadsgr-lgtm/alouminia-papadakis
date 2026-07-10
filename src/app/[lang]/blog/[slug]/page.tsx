import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles } from '@/data/articles'
import PageTransition from '@/components/PageTransition'
import { ChevronLeft, Calendar } from 'lucide-react'
import JsonLd from '@/components/JsonLd'

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
  const isEn = lang === 'en';
  
  const article = articles.find(a => a.slug === slug);
  if (!article) return {};
  
  const title = lang !== 'el' ? article.titleEN : article.titleEL;
  const description = lang !== 'el' ? article.descriptionEN : article.descriptionEL;
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
  const isEn = lang !== 'el';
  
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": isEn ? article.titleEN : article.titleEL,
    "image": [
      `https://alouminia-papadakis.gr${article.image}`
    ],
    "datePublished": article.date,
    "dateModified": article.date,
    "author": [{
        "@type": "Organization",
        "name": "Αλουμίνια Παπαδάκης",
        "url": "https://alouminia-papadakis.gr"
      }]
  };

  return (
    <PageTransition>
      <JsonLd data={articleSchema} />
      <article className="bg-offwhite min-h-screen">
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-navy text-white border-b-8 border-red">
          <div className="absolute inset-0 z-0">
            <Image 
              src={article.image} 
              alt={isEn ? article.titleEN : article.titleEL} 
              fill 
              className="object-cover opacity-20 filter blur-sm" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/95 to-navy" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/${lang}/blog`} className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8 font-medium">
              <ChevronLeft size={20} /> {isEn ? 'Back to Blog' : 'Επιστροφή στο Blog'}
            </Link>
            <div className="flex items-center gap-1.5 text-sm font-bold text-red mb-6 uppercase tracking-widest">
              <Calendar size={16} />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString(isEn ? 'en-US' : 'el-GR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
              {isEn ? article.titleEN : article.titleEL}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {isEn ? article.descriptionEN : article.descriptionEL}
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div 
            className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:text-navy prose-headings:font-black prose-a:text-red hover:prose-a:text-red-700"
            dangerouslySetInnerHTML={{ __html: article.contentEL || '' }}
          />
        </div>
      </article>
    </PageTransition>
  )
}
