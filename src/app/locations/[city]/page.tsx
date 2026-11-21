import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema, buildFaqSchema } from '@/lib/schema';
import { getLocationBySlug, locationsData } from '@/data/locations';
import { getServiceBySlug } from '@/data/services';
import { getCaseStudyBySlug } from '@/data/work';
import { siteConfig } from '@/config/site.config';

export function generateStaticParams() {
  return locationsData.map((loc) => ({ city: loc.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const loc = getLocationBySlug(params.city);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: `${loc.metaTitle} | ${siteConfig.brandName}`,
      description: loc.metaDescription,
      url: `${siteConfig.siteUrl}/locations/${loc.slug}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${loc.metaTitle} — ${siteConfig.brandName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${loc.metaTitle} | ${siteConfig.brandName}`,
      description: loc.metaDescription,
      images: ['/og-image.png'],
    },
  };
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const loc = getLocationBySlug(params.city);
  if (!loc) notFound();

  const relatedWork = loc.relatedWorkSlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const otherLocations = locationsData.filter((item) => item.slug !== loc.slug);

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: loc.city },
  ];

  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, `/locations/${loc.slug}`)} />
      <JsonLd data={buildFaqSchema(loc.faqs)} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            LOCAL MARKET · {loc.city.toUpperCase()} ({loc.regionLabel.toUpperCase()})
          </span>
          <h1>{loc.h1}</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>Direct engineering with {siteConfig.founder.name}</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">{loc.coreQuestion}</span>
            <p>{loc.directAnswer}</p>
          </div>
          <p className="definition-note">{loc.marketContext}</p>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">NEIGHBOURHOODS &amp; COMMERCIAL HUBS</span>
              <h2>Which {loc.city} Localities Do We Optimize For?</h2>
            </div>
            <p>
              Local search intent in {loc.city} is shaped by specific commercial pockets, metro
              corridors, and residential sectors.
            </p>
          </div>
          <div className="pill-grid">
            {loc.neighbourhoods.map((hub, idx) => (
              <span className="pill-item" key={hub}>
                <i className={`dot dot-${idx % 3}`} />
                {hub}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section warm">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">LOCAL SECTORS</span>
              <h2>Which {loc.city} Businesses Get the Highest ROI Online?</h2>
            </div>
            <p>Real commercial categories we engineer websites, local SEO, and automation for.</p>
          </div>
          <div className="content-grid-2">
            {loc.keyIndustries.map((ind) => (
              <article className="editorial-card" key={ind.title}>
                <h3>{ind.title}</h3>
                <p>{ind.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">RECOMMENDED SERVICES IN {loc.city.toUpperCase()}</span>
              <h2>Core Services Built for {loc.city} Buyers</h2>
            </div>
            <Link href="/services" className="button-link button-light">
              View All Services <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="content-grid-3">
            {loc.recommendedServices.map((rec) => {
              const svc = getServiceBySlug(rec.slug);
              if (!svc) return null;
              return (
                <article className="editorial-card" key={svc.slug}>
                  <span className={`mini-label ${svc.accent}`}>{svc.eyebrow}</span>
                  <h3>
                    <Link href={`/services/${svc.slug}`}>
                      {svc.shortName} in {loc.city}
                    </Link>
                  </h3>
                  <p style={{ marginBottom: 16 }}>{rec.whyHere}</p>
                  <Link href={`/services/${svc.slug}`} className="orange-text">
                    Explore {svc.shortName} →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">PROOF &amp; EXAMPLE WORK</span>
              <h2>Relevant Deployments &amp; Transparency Note</h2>
            </div>
          </div>
          <div className="proof-callout" style={{ marginBottom: 28 }}>
            {loc.localProofNote}
          </div>
          <div className="content-grid-2">
            {relatedWork.map((cs) => (
              <article className="work-card" key={cs.slug}>
                <div className="card-meta">
                  <b>{cs.client}</b>
                  <span>
                    {cs.city} · {cs.sector}
                  </span>
                </div>
                <h3>
                  <Link href={`/work/${cs.slug}`}>{cs.title}</Link>
                </h3>
                <p>{cs.summary}</p>
                <div className="card-foot">
                  <strong>
                    {cs.headlineMetric} <small>{cs.headlineMetricLabel}</small>
                  </strong>
                  <Link href={`/work/${cs.slug}`}>
                    Case Study <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section warm" id="faq">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">{loc.city.toUpperCase()} FAQ</span>
            <h2>Frequently Asked Questions in {loc.city}</h2>
            <div style={{ marginTop: 22 }}>
              <span className="eyebrow" style={{ marginBottom: 10 }}>
                OTHER NCR HUBS
              </span>
              <div className="pill-grid">
                {otherLocations.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/locations/${other.slug}`}
                    className="pill-item pill-link"
                  >
                    {other.city}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="faq-list">
            {loc.faqs.map((faq) => (
              <details className="faq-item" key={faq.question} open>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown size={20} aria-hidden="true" />
                </summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <span className="eyebrow-pill dark-pill">
            <i />
            FREE 20-MINUTE {loc.city.toUpperCase()} AUDIT
          </span>
          <h2>Growing a Business in {loc.city}? Let&apos;s Talk.</h2>
          <p>
            Share your website or Google Maps link below. {siteConfig.founder.name} will review
            your {loc.city} competition and reply within 3 business hours.
          </p>
          <ContactActions
            locationTag={`location_${loc.slug}`}
            prefillTopic={`digital growth for my ${loc.city} business`}
          />
          <ContactForm defaultCity={loc.city} />
        </div>
      </section>
    </main>
  );
}
