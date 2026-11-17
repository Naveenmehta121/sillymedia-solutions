import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { guidesData } from '@/data/guides';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Delhi NCR Digital Growth Guides — Websites, Local SEO & WhatsApp',
  description:
    'Practical, answer-first guides by SillyMedia Solutions on website development costs in Delhi NCR, Google Maps SEO in Gurugram, and WhatsApp automation for clinics.',
  alternates: { canonical: '/guides' },
};

export default function GuidesIndexPage() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Guides' }];
  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, '/guides')} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            PLAYBOOKS &amp; RESEARCH · DELHI NCR
          </span>
          <h1>Practical Digital Growth Guides for Delhi NCR Businesses</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>Written by {siteConfig.founder.name}</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">What will you find in these guides?</span>
            <p>
              Plain-English technical playbooks covering real commercial questions Delhi NCR
              founders and clinic owners ask before hiring an agency — including website pricing
              drivers, Google Maps ranking fundamentals, and ban-safe WhatsApp Business API
              workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container content-grid-3">
          {guidesData.map((guide) => (
            <article className="editorial-card" key={guide.slug} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 18 }}>
              <div>
                <span className="eyebrow">{guide.eyebrow}</span>
                <h2 style={{ font: '700 22px/1.25 Playfair Display, Georgia, serif', margin: '8px 0 12px', color: '#1a1208' }}>
                  <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                </h2>
                <p>{guide.directAnswer}</p>
              </div>
              <div>
                <p style={{ fontSize: 12.5, fontFamily: 'Space Mono, monospace', marginBottom: 12 }}>
                  Updated {guide.dateModified} · {guide.readingTime}
                </p>
                <Link href={`/guides/${guide.slug}`} className="button-link button-light">
                  Read Guide <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
