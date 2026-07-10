import { MetadataRoute } from 'next'
import { articles } from '@/data/articles'

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

  routes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}/el${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1.0 : (route === '/blog' ? 0.9 : 0.8),
      alternates: {
        languages: {
          el: `${baseUrl}/el${route}`,
          en: `${baseUrl}/en${route}`,
          'x-default': `${baseUrl}/el${route}`,
        },
      },
    })
    
    sitemapEntries.push({
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 0.9 : (route === '/blog' ? 0.8 : 0.8),
      alternates: {
        languages: {
          el: `${baseUrl}/el${route}`,
          en: `${baseUrl}/en${route}`,
          'x-default': `${baseUrl}/el${route}`,
        },
      },
    })
  })

  // Add Blog Articles dynamically
  articles.forEach((article) => {
    const route = `/blog/${article.slug}`
    
    sitemapEntries.push({
      url: `${baseUrl}/el${route}`,
      lastModified: new Date(article.date),
      changeFrequency: 'yearly',
      priority: 0.7,
      alternates: {
        languages: {
          el: `${baseUrl}/el${route}`,
          en: `${baseUrl}/en${route}`,
          'x-default': `${baseUrl}/el${route}`,
        },
      },
    })
    
    sitemapEntries.push({
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(article.date),
      changeFrequency: 'yearly',
      priority: 0.7,
      alternates: {
        languages: {
          el: `${baseUrl}/el${route}`,
          en: `${baseUrl}/en${route}`,
          'x-default': `${baseUrl}/el${route}`,
        },
      },
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
