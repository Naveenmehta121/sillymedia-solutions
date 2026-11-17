import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { caseStudiesData } from '@/data/work';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Case Studies & Client Work in Delhi NCR',
  description:
    'Selected web development, local SEO, WhatsApp booking, and B2B SaaS deployments built across Delhi, Gurugram, and Noida by SillyMedia Solutions.',
  alternates: { canonical: '/work' },
};

export default function WorkIndexPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Work' }]} />
          <span className="eyebrow-pill">
            <i />
            SELECTED WORK · DELHI NCR
          </span>
          <h1>Case Studies &amp; Production Deployments</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>E-Commerce · Healthcare · B2B SaaS</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">What kinds of projects does SillyMedia Solutions build?</span>
            <p>
              SillyMedia Solutions engineers production digital systems for Delhi NCR businesses —
              including headless retail storefronts in Gurugram, automated patient booking and
              local Google Maps SEO for clinics in South Delhi, and multi-tenant B2B fintech web
              applications in Noida Sector 62.
            </p>
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container content-grid-3">
          {caseStudiesData.map((cs) => (
            <article className="work-card" key={cs.slug}>
              <div className="card-meta">
                <b>{cs.client}</b>
                <span
                  className={
                    cs.badgeColor === 'green'
                      ? 'green-tag'
                      : cs.badgeColor === 'blue'
                      ? 'blue-tag'
                      : ''
                  }
                >
                  {cs.city} · {cs.sector}
                </span>
              </div>
              <div className="work-image">
                <picture>
                  <source srcSet={cs.imageAvif} type="image/avif" />
                  <img
                    src={cs.imageWebp}
                    alt={cs.imageAlt}
                    width={960}
                    height={600}
                    loading="lazy"
                  />
                </picture>
                <span>{cs.imageTag}</span>
              </div>
              <h3>
                <Link href={`/work/${cs.slug}`}>{cs.title}</Link>
              </h3>
              <p>{cs.summary}</p>
              <div className="card-foot">
                <strong className={cs.badgeColor === 'green' ? 'green-text' : ''}>
                  {cs.headlineMetric} <small>{cs.headlineMetricLabel}</small>
                </strong>
                <Link href={`/work/${cs.slug}`}>
                  Read Case Study <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
