import { MetadataRoute } from 'next'
import { articles } from '@/data/articles'
import { alumilSystems } from '@/data/systems'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alouminia-papadakis.gr'
  
  const routes = [
    '',
    '/services/koufomata-alouminiou-rethymno',
    '/services/pergoles-rethymno-kriti',
    '/services/portes-asfaleias-rethymno',
    '/services/sidiros-kataskeves-rethymno',
    '/services/smart-home-rethymno',
    '/portfolio',
    '/blog'
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []
  const staticLocales = ['el', 'en', 'de', 'fr', 'nl']

  routes.forEach((route) => {
    const isBlog = route === '/blog'
    const routeLocales = isBlog ? ['el', 'en'] : staticLocales

    // Create the alternates languages object dynamically
    const languages: Record<string, string> = {
      'x-default': `${baseUrl}/el${route}`
    }
    routeLocales.forEach(lang => {
      languages[lang] = `${baseUrl}/${lang}${route}`
    })

    routeLocales.forEach(lang => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' && lang === 'el' ? 1.0 : (route === '' ? 0.9 : 0.8),
        alternates: { languages },
      })
    })
  })

  // Add Blog Articles dynamically
  articles.forEach((article) => {
    const route = `/blog/${article.slug}`
    
    // The new article is ONLY el
    if (article.slug === 'vioklimatiki-pergola-i-tentopergola') {
      sitemapEntries.push({
        url: `${baseUrl}/el${route}`,
        lastModified: new Date(article.date),
        changeFrequency: 'yearly',
        priority: 0.7,
        alternates: { languages: { 'el': `${baseUrl}/el${route}`, 'x-default': `${baseUrl}/el${route}` } },
      })
    } else {
      const languages = {
        'el': `${baseUrl}/el${route}`,
        'en': `${baseUrl}/en${route}`,
        'x-default': `${baseUrl}/el${route}`
      }
      
      ;['el', 'en'].forEach(lang => {
        sitemapEntries.push({
          url: `${baseUrl}/${lang}${route}`,
          lastModified: new Date(article.date),
          changeFrequency: 'yearly',
          priority: 0.7,
          alternates: { languages },
        })
      })
    }
  })

  // Add Alumil Systems (EL only)
  const systemRoutes = ['/systimata-alumil', ...alumilSystems.map(s => `/systimata-alumil/${s.slug}`)]
  systemRoutes.forEach(route => {
    sitemapEntries.push({
      url: `${baseUrl}/el${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { 'el': `${baseUrl}/el${route}`, 'x-default': `${baseUrl}/el${route}` } },
    })
  })

  // Root domain redirect
  sitemapEntries.push({
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  })

  return sitemapEntries
}
