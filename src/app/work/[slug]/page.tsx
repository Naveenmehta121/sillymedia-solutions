import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { caseStudiesData, getCaseStudyBySlug } from '@/data/work';
import { siteConfig } from '@/config/site.config';

export function generateStaticParams() {
  return caseStudiesData.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return {};
  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    alternates: { canonical: `/work/${cs.slug}` },
    openGraph: {
      title: `${cs.metaTitle} | ${siteConfig.brandName}`,
      description: cs.metaDescription,
      url: `${siteConfig.siteUrl}/work/${cs.slug}`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  const otherCases = caseStudiesData.filter((item) => item.slug !== cs.slug);

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: cs.client },
  ];

  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, `/work/${cs.slug}`)} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            CASE STUDY · {cs.city.toUpperCase()} · {cs.sector.toUpperCase()}
          </span>
          <h1>
            {cs.client}: {cs.title}
          </h1>
          <div className="page-meta-row">
            <span>Timeline: {cs.timeline}</span>
            <span>·</span>
            {cs.locationSlug ? (
              <span>
                Location:{' '}
                <Link href={`/locations/${cs.locationSlug}`} style={{ textDecoration: 'underline' }}>
                  {cs.city}
                </Link>
              </span>
            ) : (
              <span>Location: {cs.city}</span>
            )}
            <span>·</span>
            <span>Last updated: {siteConfig.lastUpdated}</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">Project Summary</span>
            <p>{cs.summary}</p>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="visual-card" style={{ maxWidth: 920, marginBottom: 40 }}>
            <div className="image-frame" style={{ aspectRatio: '16/10' }}>
              <img src={cs.imageWebp} alt={cs.imageAlt} width={960} height={600} />
              <div className="image-badge">
                <span>
                  <i />
                  {cs.imageTag}
                </span>
                <b>{cs.headlineMetric}</b>
              </div>
            </div>
          </div>

          <div className="content-grid-3">
            <article className="editorial-card">
              <span className="eyebrow">01 · CHALLENGE</span>
              <h2>What Problem Needed Solving?</h2>
              <ul className="check-list">
                {cs.challenge.map((c) => (
                  <li key={c}>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="editorial-card">
              <span className="eyebrow">02 · APPROACH</span>
              <h2>How Did We Engineer the Solution?</h2>
              <ul className="check-list">
                {cs.approach.map((a) => (
                  <li key={a}>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="editorial-card">
              <span className="eyebrow">03 · OUTCOME</span>
              <h2>Observed Results</h2>
              <p style={{ fontSize: 28, fontWeight: 700, color: '#9c3806', marginBottom: 4 }}>
                {cs.headlineMetric}
              </p>
              <p style={{ fontWeight: 700, color: '#1a1208', marginBottom: 14 }}>
                {cs.headlineMetricLabel}
              </p>
              <ul className="check-list">
                {cs.results.map((r) => (
                  <li key={r}>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 12.5, marginTop: 14, color: '#594138' }}>
                {cs.metricVerificationNote}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section warm">
        <div className="container content-grid-2">
          <div className="editorial-card">
            <span className="eyebrow">ARCHITECTURE &amp; DELIVERABLES</span>
            <h2>Systems Deployed</h2>
            <div className="pill-grid" style={{ marginTop: 14 }}>
              {cs.architectureStack.map((item) => (
                <span className="pill-item" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div style={{ marginTop: 22 }}>
              <span className="eyebrow" style={{ marginBottom: 8 }}>
                RELATED SERVICES
              </span>
              <div className="pill-grid">
                {cs.servicesUsed.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="pill-item pill-link">
                    {s.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {cs.testimonial && (
            <div className="editorial-card">
              <span className="eyebrow">CLIENT NOTE</span>
              <h2>Feedback From {cs.client}</h2>
              <blockquote style={{ margin: '12px 0 18px', fontStyle: 'italic', fontSize: 18, lineHeight: 1.55, color: '#1a1208' }}>
                “{cs.testimonial.quote}”
              </blockquote>
              <p style={{ fontWeight: 700, color: '#1a1208' }}>{cs.testimonial.author}</p>
              <p style={{ fontSize: 13.5 }}>{cs.testimonial.role}</p>
            </div>
          )}
        </div>
      </section>

      {otherCases.length > 0 && (
        <section className="section cream">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">MORE WORK</span>
                <h2>Explore Other Delhi NCR Case Studies</h2>
              </div>
            </div>
          <div className="content-grid-2">
            {otherCases.map((item) => (
              <article className="work-card" key={item.slug}>
                <div className="card-meta">
                  <b>{item.client}</b>
                  <span>
                    {item.city} · {item.sector}
                  </span>
                </div>
                <h3>
                  <Link href={`/work/${item.slug}`}>{item.title}</Link>
                </h3>
                <p>{item.summary}</p>
                <div className="card-foot">
                  <strong>{item.headlineMetric}</strong>
                  <Link href={`/work/${item.slug}`}>
                    Read Case Study <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
        </section>
      )}

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <span className="eyebrow-pill dark-pill">
            <i />
            BUILD SOMETHING SIMILAR
          </span>
          <h2>Want a Similar System for Your Business?</h2>
          <p>
            Tell {siteConfig.founder.name} about your goals and we will map a clear milestone plan.
          </p>
          <ContactActions locationTag={`case_${cs.slug}`} prefillTopic={`a project similar to ${cs.client}`} />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
