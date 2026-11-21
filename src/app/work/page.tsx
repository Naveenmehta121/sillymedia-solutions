import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { caseStudiesData } from '@/data/work';
import { siteConfig } from '@/config/site.config';

const pageTitle = 'Our Work — The Diets (thediets.in)';

export const metadata: Metadata = {
  title: pageTitle,
  description:
    'Selected web development, local SEO, WhatsApp booking, and B2B SaaS deployments built across Delhi NCR — currently featuring The Diets (thediets.in).',
  alternates: { canonical: '/work' },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.brandName}`,
    description:
      'Selected web development, local SEO, WhatsApp booking, and B2B SaaS deployments built across Delhi NCR — currently featuring The Diets (thediets.in).',
    url: `${siteConfig.siteUrl}/work`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SillyMedia Solutions — Selected Work & Production Deployment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageTitle} | ${siteConfig.brandName}`,
    description:
      'Selected web development, local SEO, WhatsApp booking, and B2B SaaS deployments built across Delhi NCR — currently featuring The Diets (thediets.in).',
    images: ['/og-image.png'],
  },
};

export default function WorkIndexPage() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Work' }];
  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, '/work')} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            SELECTED WORK · DELHI NCR
          </span>
          <h1>Our Work &amp; Production Deployment</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>Online Dietitian · 1:1 Diet Plans</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">What kinds of projects does SillyMedia Solutions build?</span>
            <p>
              SillyMedia Solutions engineers production digital systems for Delhi NCR businesses.
              Our live deployment is The Diets (thediets.in) — an online dietitian platform with
              1:1 diet plans, online consultation booking and transparent pricing.
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
                <img
                  src={cs.imageWebp}
                  alt={cs.imageAlt}
                  width={960}
                  height={600}
                  loading="lazy"
                />
                <span>{cs.imageTag}</span>
              </div>
              <h2>
                <Link href={`/work/${cs.slug}`}>{cs.title}</Link>
              </h2>
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
