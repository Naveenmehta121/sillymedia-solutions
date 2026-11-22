import {
  getConfiguredSameAs,
  getFounderSameAs,
  isConfigured,
  siteConfig,
} from '@/config/site.config';
import type { ServiceItem } from '@/data/services';
import type { Crumb } from '@/components/Breadcrumbs';

const ORG_ID = `${siteConfig.siteUrl}/#organization`;
const WEBSITE_ID = `${siteConfig.siteUrl}/#website`;
const FOUNDER_ID = `${siteConfig.siteUrl}/#founder`;

export function buildGlobalGraph() {
  const orgSameAs = getConfiguredSameAs();
  const founderSameAs = getFounderSameAs();
  const founderName = isConfigured(siteConfig.founder.fullName)
    ? siteConfig.founder.fullName
    : siteConfig.founder.name;

  const address: Record<string, unknown> = {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.contact.addressLocality,
    addressRegion: siteConfig.contact.addressRegion,
    addressCountry: siteConfig.contact.addressCountry,
  };
  if (isConfigured(siteConfig.contact.streetAddress)) {
    address.streetAddress = siteConfig.contact.streetAddress;
  }
  if (isConfigured(siteConfig.contact.postalCode)) {
    address.postalCode = siteConfig.contact.postalCode;
  }

  const organization: Record<string, unknown> = {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    description: siteConfig.shortDescription,
    email: siteConfig.contact.email,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.siteUrl}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.siteUrl}/og-image.png`,
    address,
    areaServed: siteConfig.areaServed.map((city) => ({
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'National Capital Region, India',
      },
    })),
    founder: { '@id': FOUNDER_ID },
  };

  if (isConfigured(siteConfig.contact.phone)) {
    organization.telephone = siteConfig.contact.phone;
  }
  if (
    isConfigured(siteConfig.contact.geoLat) &&
    isConfigured(siteConfig.contact.geoLng)
  ) {
    organization.geo = {
      '@type': 'GeoCoordinates',
      latitude: Number(siteConfig.contact.geoLat),
      longitude: Number(siteConfig.contact.geoLng),
    };
  }
  if (isConfigured(siteConfig.contact.openingHours)) {
    organization.openingHours = siteConfig.contact.openingHours;
  }
  if (isConfigured(siteConfig.pricing.priceRangeSchema)) {
    organization.priceRange = siteConfig.pricing.priceRangeSchema;
  }
  if (orgSameAs.length > 0) {
    organization.sameAs = orgSameAs;
  }

  const person: Record<string, unknown> = {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: founderName,
    jobTitle: siteConfig.founder.jobTitle,
    url: `${siteConfig.siteUrl}/about`,
    worksFor: { '@id': ORG_ID },
    knowsAbout: [
      'Custom Web Development',
      'Next.js & TypeScript Engineering',
      'Hyperlocal SEO & Google Business Profile Optimization',
      'WhatsApp Business Cloud API Automation',
      'Custom AI Chatbots & Workflow Agents',
    ],
  };
  if (isConfigured(siteConfig.founder.photoUrl)) {
    person.image = siteConfig.founder.photoUrl.startsWith('http')
      ? siteConfig.founder.photoUrl
      : `${siteConfig.siteUrl}${siteConfig.founder.photoUrl}`;
  }
  if (founderSameAs.length > 0) {
    person.sameAs = founderSameAs;
  }

  const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteConfig.siteUrl,
    name: siteConfig.brandName,
    description: siteConfig.shortDescription,
    inLanguage: siteConfig.language,
    publisher: { '@id': ORG_ID },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, person, website],
  };
}

export function buildBreadcrumbSchema(items: Crumb[], currentPath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      item: item.href
        ? `${siteConfig.siteUrl}${item.href === '/' ? '' : item.href}`
        : `${siteConfig.siteUrl}${currentPath}`,
    })),
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema(service: ServiceItem) {
  const url = `${siteConfig.siteUrl}/services/${service.slug}`;
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.name,
    serviceType: service.shortName,
    description: service.directAnswer,
    url,
    provider: { '@id': ORG_ID },
    areaServed: siteConfig.areaServed.map((city) => ({
      '@type': 'City',
      name: city.name,
    })),
  };

  // Offer is emitted ONLY when the service's pricing tier has a real, configured
  // numeric starting price visible on the page. All four tiers currently use
  // placeholder prices, so no Offer is emitted today — once Naveen confirms a
  // tier price in site.config.ts, the Offer appears automatically.
  const tier = siteConfig.pricing.tiers.find((t) => t.id === service.pricingTierId);
  const price = tier ? parseInrPrice(tier.startingPrice) : null;
  if (tier && price !== null) {
    schema.hasOffer = {
      '@type': 'Offer',
      name: tier.name,
      priceCurrency: siteConfig.pricing.currency,
      price,
      availability: 'https://schema.org/InStock',
      url,
    };
  }
  return schema;
}

/** Parse a configured INR price string (e.g. '₹25,000') to a number; null if placeholder/unparseable. */
function parseInrPrice(value: string): number | null {
  if (!isConfigured(value)) return null;
  const digits = value.replace(/[^\d.]/g, '');
  const num = Number(digits);
  return Number.isFinite(num) && num > 0 ? num : null;
}

/**
 * Offers for the four fixed-price Website Packages shown on the homepage
 * (PricingSection). Prices are read from site.config.ts — the same values
 * rendered visibly on the page — so no price is invented.
 */
export function buildWebsitePackagesOffer(url = '/#pricing') {
  const packages = siteConfig.pricing.websitePackages
    .map((pkg, idx) => {
      const price = parseInrPrice(pkg.startingPrice);
      if (price === null) return null;
      return {
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'Offer',
          name: pkg.name,
          priceCurrency: siteConfig.pricing.currency,
          price,
          availability: 'https://schema.org/InStock',
          url: `${siteConfig.siteUrl}${url}`,
        },
      };
    })
    .filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Website Packages — Fixed Prices',
    itemListElement: packages,
  };
}

export function buildArticleSchema(params: {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}) {
  const url = `${siteConfig.siteUrl}/guides/${params.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: params.headline,
    description: params.description,
    image: `${siteConfig.siteUrl}/og-image.png`,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    inLanguage: siteConfig.language,
    author: { '@id': FOUNDER_ID },
    publisher: { '@id': ORG_ID },
  };
}
