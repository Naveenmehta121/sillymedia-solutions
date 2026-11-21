import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import { caseStudiesData } from '@/data/work';
import { guidesData } from '@/data/guides';

/**
 * Real per-page lastmod, derived from the repo's git history (commit dates in IST):
 * - 2026-11-22: commit 776eba5 (work, prices, contact) and 1ca7122 (rebrand) — pages
 *   whose component or data file changed in those commits.
 * - 2026-11-18: pages whose files were last touched in the 17-18 Nov build phases
 *   (59190e8 / 82df564).
 * Guide detail pages keep their own dateModified from guides.ts (the content's
 * declared modification date), not the file's commit date.
 */
const LAST_MOD: Record<string, string> = {
  '/': '2026-11-22',
  '/services': '2026-11-22',
  '/locations': '2026-11-22',
  '/work': '2026-11-22',
  '/guides': '2026-11-22',
  '/about': '2026-11-22',
  '/faq': '2026-11-22',
  '/privacy-policy': '2026-11-18',
  '/terms': '2026-11-18',
};

function lastMod(path: string): Date {
  return new Date(LAST_MOD[path] ?? '2026-11-22');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: lastMod('/'), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services`, lastModified: lastMod('/services'), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/locations`, lastModified: lastMod('/locations'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/work`, lastModified: lastMod('/work'), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/guides`, lastModified: lastMod('/guides'), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/about`, lastModified: lastMod('/about'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/faq`, lastModified: lastMod('/faq'), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/privacy-policy`, lastModified: lastMod('/privacy-policy'), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: lastMod('/terms'), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: lastMod('/services'),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locationsData.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: lastMod('/locations'),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const workRoutes: MetadataRoute.Sitemap = caseStudiesData.map((w) => ({
    url: `${base}/work/${w.slug}`,
    lastModified: lastMod('/work'),
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
