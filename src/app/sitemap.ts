import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alouminia-papadakis.gr'
  
  const routes = [
    '',
    '/services/koufomata-alouminiou-rethymno',
    '/services/pergoles-rethymno-kriti',
    '/services/portes-asfaleias-rethymno',
    '/services/sidiros-kataskeves-rethymno',
    '/services/smart-home-rethymno',
    '/portfolio'
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  routes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}/el${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          el: `${baseUrl}/el${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    })
    
    sitemapEntries.push({
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 0.9 : 0.8,
      alternates: {
        languages: {
          el: `${baseUrl}/el${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    })
  })

  // Root domain
  sitemapEntries.push({
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  })

  return sitemapEntries
}
