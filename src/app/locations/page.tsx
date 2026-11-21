import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { locationsData } from '@/data/locations';
import { siteConfig } from '@/config/site.config';

const pageTitle = 'Delhi NCR Service Locations';

export const metadata: Metadata = {
  title: pageTitle,
  description:
    'Hyperlocal web development, Google Maps SEO, and WhatsApp automation across Delhi, Gurugram, Noida, Greater Noida, Faridabad, and Ghaziabad.',
  alternates: { canonical: '/locations' },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.brandName}`,
    description:
      'Hyperlocal web development, Google Maps SEO, and WhatsApp automation across Delhi, Gurugram, Noida, Greater Noida, Faridabad, and Ghaziabad.',
    url: `${siteConfig.siteUrl}/locations`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SillyMedia Solutions — Delhi NCR Service Locations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageTitle} | ${siteConfig.brandName}`,
    description:
      'Hyperlocal web development, Google Maps SEO, and WhatsApp automation across Delhi, Gurugram, Noida, Greater Noida, Faridabad, and Ghaziabad.',
    images: ['/og-image.png'],
  },
};

export default function LocationsIndexPage() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Locations' }];
  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, '/locations')} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            DELHI NCR COVERAGE
          </span>
          <h1>Delhi NCR Cities We Serve</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>6 dedicated NCR local market playbooks</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">Where does SillyMedia Solutions operate?</span>
            <p>
              SillyMedia Solutions serves independent businesses, clinics, retail brands, B2B
              manufacturers, and startups across all six major hubs of Delhi NCR: Delhi, Gurugram,
              Noida, Greater Noida, Faridabad, and Ghaziabad — with city-specific SEO and conversion
              playbooks tailored to each local buyer market.
            </p>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container content-grid-2">
          {locationsData.map((loc) => (
            <article className="editorial-card" key={loc.slug}>
              <span className="eyebrow">{loc.regionLabel}</span>
              <h2>
                <Link href={`/locations/${loc.slug}`}>{loc.city}</Link>
              </h2>
              <p style={{ marginBottom: 14 }}>{loc.directAnswer}</p>
              <p style={{ fontSize: 13, color: '#3d2c24', marginBottom: 18 }}>
                <strong>Key Hubs:</strong> {loc.neighbourhoods.slice(0, 4).join(' · ')}
              </p>
              <Link href={`/locations/${loc.slug}`} className="button-link button-light">
                Explore {loc.city} Playbook <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
