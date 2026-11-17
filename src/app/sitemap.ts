import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import { caseStudiesData } from '@/data/work';
import { guidesData } from '@/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const lastMod = new Date(siteConfig.lastUpdated);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: lastMod, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/locations`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/work`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/guides`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/about`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/faq`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/privacy-policy`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locationsData.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const workRoutes: MetadataRoute.Sitemap = caseStudiesData.map((w) => ({
    url: `${base}/work/${w.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guidesData.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: new Date(g.dateModified),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...workRoutes,
    ...guideRoutes,
  ];
}
