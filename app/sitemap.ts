import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'
import { equipment } from '@/lib/data/equipment'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE.url}/equipment/`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE.url}/about/`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE.url}/contact/`, changeFrequency: 'monthly', priority: 0.5 },
  ]

  const productRoutes: MetadataRoute.Sitemap = equipment.map((item) => ({
    url: `${SITE.url}/equipment/${item.slug}/`,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...productRoutes]
}
