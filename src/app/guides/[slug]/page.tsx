import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronDown, ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/lib/schema';
import { getGuideBySlug, guidesData } from '@/data/guides';
import { getServiceBySlug } from '@/data/services';
import { getLocationBySlug } from '@/data/locations';
import { siteConfig } from '@/config/site.config';

export function generateStaticParams() {
  return guidesData.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.seoTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: 'article',
      title: `${guide.seoTitle} | ${siteConfig.brandName}`,
      description: guide.metaDescription,
      url: `${siteConfig.siteUrl}/guides/${guide.slug}`,
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${guide.seoTitle} — ${siteConfig.brandName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${guide.seoTitle} | ${siteConfig.brandName}`,
      description: guide.metaDescription,
      images: ['/og-image.png'],
    },
  };
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: guide.metaTitle },
  ];

  const relatedServices = guide.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const relatedLocations = guide.relatedLocationSlugs
    .map((s) => getLocationBySlug(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, `/guides/${guide.slug}`)} />
      <JsonLd
        data={buildArticleSchema({
          slug: guide.slug,
          headline: guide.title,
          description: guide.metaDescription,
          datePublished: guide.datePublished,
          dateModified: guide.dateModified,
        })}
      />
      <JsonLd data={buildFaqSchema(guide.faqs)} />

      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            {guide.eyebrow}
          </span>
          <h1>{guide.title}</h1>
          <div className="page-meta-row">
            <span>By {siteConfig.founder.name} ({siteConfig.brandName})</span>
            <span>·</span>
            <span>Last updated: {guide.dateModified}</span>
            <span>·</span>
            <span>{guide.readingTime}</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">{guide.coreQuestion}</span>
            <p>{guide.directAnswer}</p>
          </div>
        </div>
      </section>

      <article className="section white">
        <div className="container prose-shell">
          {guide.sections.map((sec) => (
            <section key={sec.heading} style={{ marginBottom: 34 }}>
              <h2>{sec.heading}</h2>
              {sec.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {sec.bullets && (
                <ul>
                  {sec.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section style={{ margin: '36px 0' }}>
            <h2>{guide.comparisonTable.caption}</h2>
            <div className="table-wrap" style={{ marginTop: 14 }}>
              <table className="comparison-table">
                <thead>
                  <tr>
                    {guide.comparisonTable.headers.map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {guide.comparisonTable.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section style={{ marginTop: 36, paddingTop: 22, borderTop: '1px solid #d6cec0' }}>
            <h2>Official References &amp; Documentation</h2>
            <ul>
              {guide.sources.map((src) => (
                <li key={src.url}>
                  <a href={src.url} target="_blank" rel="noreferrer">
                    {src.label} <ExternalLink size={13} style={{ display: 'inline' }} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section style={{ marginTop: 32 }}>
            <h3>Related Services &amp; Delhi NCR Locations</h3>
            <div className="pill-grid" style={{ marginTop: 12 }}>
              {relatedServices.map((svc) => (
                <Link key={svc.slug} href={`/services/${svc.slug}`} className="pill-item pill-link">
                  {svc.shortName} →
                </Link>
              ))}
              {relatedLocations.map((loc) => (
                <Link key={loc.slug} href={`/locations/${loc.slug}`} className="pill-item pill-link">
                  {loc.city} →
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      <section className="section warm" id="faq">
        <div className="container faq-layout">
          <div>
            <span className="eyebrow">GUIDE FAQ</span>
            <h2>Quick Questions Answered</h2>
          </div>
          <div className="faq-list">
            {guide.faqs.map((faq) => (
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
            FREE 20-MINUTE TECHNICAL REVIEW
          </span>
          <h2>Want Help Applying This to Your Business?</h2>
          <p>
            Share your website or Google Maps link and {siteConfig.founder.name} will send tailored
            recommendations.
          </p>
          <ContactActions locationTag={`guide_${guide.slug}`} prefillTopic={guide.metaTitle} />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
