import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '@/lib/schema';
import { getServiceBySlug, servicesData } from '@/data/services';
import { getLocationBySlug } from '@/data/locations';
import { getCaseStudyBySlug } from '@/data/work';
import { isConfigured, siteConfig } from '@/config/site.config';

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} | ${siteConfig.brandName}`,
      description: service.metaDescription,
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${service.metaTitle} — ${siteConfig.brandName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.metaTitle} | ${siteConfig.brandName}`,
      description: service.metaDescription,
      images: ['/og-image.png'],
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const tier = siteConfig.pricing.tiers.find((t) => t.id === service.pricingTierId);
  const relatedWork = service.relatedWorkSlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedLocations = service.relatedLocationSlugs
    .map((s) => getLocationBySlug(s))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.shortName },
  ];

  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, `/services/${service.slug}`)} />
      <JsonLd data={buildServiceSchema(service)} />
      <JsonLd data={buildFaqSchema(service.faqs)} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            SERVICE {service.number} · {service.eyebrow}
          </span>
          <h1>{service.h1}</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>Typical timeline: {service.typicalTimeline}</span>
            {tier && (
              <>
                <span>·</span>
                {isConfigured(tier.startingPrice) ? (
                  <span>
                    Starting from: {tier.startingPrice}
                  </span>
                ) : (
                  <span>{tier.fallbackLabel}</span>
                )}
              </>
            )}
          </div>
          <div className="answer-box">
            <span className="answer-box-label">{service.coreQuestion}</span>
            <p>{service.directAnswer}</p>
          </div>
          <p className="definition-note">{service.definitionSentence}</p>
        </div>
      </section>

      <section className="section white">
        <div className="container content-grid-2">
          <div className="editorial-card">
            <span className="eyebrow">INCLUDED DELIVERABLES</span>
            <h2>What Is Included in This Engagement?</h2>
            <ul className="check-list">
              {service.deliverables.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="editorial-card">
            <span className="eyebrow">IDEAL FIT IN DELHI NCR</span>
            <h2>Who Benefits Most From {service.shortName}?</h2>
            <ul className="check-list">
              {service.idealFor.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 22 }}>
              <a href="#contact" className="button-link">
                Discuss Your Scope <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section warm">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">DELIVERY PROCESS</span>
              <h2>How Does SillyMedia Solutions Execute {service.shortName}?</h2>
            </div>
            <p>Four milestone steps led directly by {siteConfig.founder.name} from kickoff to launch.</p>
          </div>
          <div className="process-grid">
            {service.processSteps.map((step) => (
              <div className="process-card" key={step.step}>
                <span className="process-step">STEP {step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">COMPARISON</span>
              <h2>How Does SillyMedia Solutions Compare With Typical Agencies?</h2>
            </div>
            <p>Side-by-side differences in execution model, crawlability, and ownership.</p>
          </div>
          <div className="table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>SillyMedia Solutions</th>
                  <th>Typical Digital Agency</th>
                </tr>
              </thead>
              <tbody>
                {service.comparisonTable.map((row) => (
                  <tr key={row.dimension}>
                    <td>{row.dimension}</td>
                    <td>{row.sillyMedia}</td>
                    <td>{row.typicalAgency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {relatedWork.length > 0 && (
        <section className="section white">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">RELATED WORK</span>
                <h2>Relevant Case Studies in Delhi NCR</h2>
              </div>
              <Link href="/work" className="button-link button-light">
                All Case Studies <ArrowRight size={15} aria-hidden="true" />
              </Link>
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
                      Read Case Study <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section warm">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">LOCAL COVERAGE</span>
              <h2>Where in Delhi NCR Do We Deliver {service.shortName}?</h2>
            </div>
            <p>Explore city-specific local strategies across Delhi NCR.</p>
          </div>
          <div className="pill-grid">
            {relatedLocations.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="pill-item pill-link">
                <i className="dot dot-1" />
                {service.shortName} in {loc.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section white" id="faq">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">SERVICE FAQ</span>
            <h2>Common Questions About {service.shortName}</h2>
            <p style={{ color: '#594138', marginTop: 12 }}>
              Direct answers about timelines, ownership, and deliverables before you book a call.
            </p>
          </div>
          <div className="faq-list">
            {service.faqs.map((item) => (
              <details className="faq-item" key={item.question} open>
                <summary>
                  <span>{item.question}</span>
                  <ChevronDown size={20} aria-hidden="true" />
                </summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <span className="eyebrow-pill dark-pill">
            <i />
            DIRECT CONSULTATION
          </span>
          <h2>Ready to Plan Your {service.shortName} Project?</h2>
          <p>
            Share your requirements below and {siteConfig.founder.name} will respond within 3
            business hours with a clear technical roadmap.
          </p>
          <ContactActions locationTag={`service_${service.slug}`} prefillTopic={service.shortName} />
          <ContactForm defaultService={service.formServiceValue} />
        </div>
      </section>
    </main>
  );
}
