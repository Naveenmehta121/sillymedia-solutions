import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

export default function robots(): MetadataRoute.Robots {
  const disallow = [...siteConfig.crawlers.disallowPaths];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
      ...siteConfig.crawlers.allowSearchAndAiCrawlers.map((agent) => ({
        userAgent: agent,
        allow: '/',
        disallow,
      })),
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
