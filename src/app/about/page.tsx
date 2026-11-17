import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { isConfigured, siteConfig } from '@/config/site.config';
import { servicesData } from '@/data/services';

export const metadata: Metadata = {
  title: 'About Naveen & SillyMedia Solutions — Delhi NCR',
  description:
    'Meet Naveen, founder and principal engineer of SillyMedia Solutions in Delhi NCR. Direct custom web engineering, hyperlocal SEO, and WhatsApp/AI automation.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const displayName = isConfigured(siteConfig.founder.fullName)
    ? siteConfig.founder.fullName
    : siteConfig.founder.name;
  const hasPhoto = isConfigured(siteConfig.founder.photoUrl);
  const hasLinkedin = isConfigured(siteConfig.founder.linkedinUrl);
  const hasGithub = isConfigured(siteConfig.founder.githubUrl);
  const hasYears = isConfigured(siteConfig.founder.experienceYears);

  const crumbs = [{ label: 'Home', href: '/' }, { label: 'About' }];

  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, '/about')} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            PRINCIPAL-LED DIGITAL ENGINEERING
          </span>
          <h1>About {siteConfig.brandName} &amp; {displayName}</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>Serving Delhi, Gurugram, Noida, Greater Noida, Faridabad &amp; Ghaziabad</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">Who runs SillyMedia Solutions?</span>
            <p>
              SillyMedia Solutions is an independent Delhi NCR digital agency founded and led
              directly by {displayName}. Every website, hyperlocal SEO campaign, WhatsApp workflow,
              and web application is architected and engineered directly with the founder — giving
              local businesses senior technical execution without big-agency middlemen or lock-in
              retainers.
            </p>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container founder-grid">
          <div className="founder-portrait">
            {hasPhoto ? (
              <img
                src={siteConfig.founder.photoUrl}
                alt={`${displayName}, ${siteConfig.founder.jobTitle} at ${siteConfig.brandName}`}
                width={320}
                height={400}
              />
            ) : (
              <>
                <span className="founder-monogram" aria-hidden="true">
                  N
                </span>
                <strong style={{ fontSize: 22, fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {displayName}
                </strong>
                <small>{siteConfig.founder.jobTitle}</small>
                <small style={{ marginTop: 6, color: '#d6cec0' }}>Delhi NCR · India</small>
              </>
            )}
          </div>

          <div className="prose-shell">
            <span className="eyebrow">FOUNDER PROFILE</span>
            <h2 style={{ marginTop: 8 }}>Why Direct Engineering Beats Agency Handoffs</h2>
            {siteConfig.founder.bioParagraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
            {hasYears && (
              <p>
                <strong>Experience:</strong> {siteConfig.founder.experienceYears} building web
                systems, technical SEO architectures, and commercial lead workflows.
              </p>
            )}

            <h3>Working Principles</h3>
            <ul className="check-list">
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                <span>
                  <strong>Full Ownership:</strong> Clients own their domain, hosting, analytics, and
                  Git source repository from launch day.
                </span>
              </li>
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                <span>
                  <strong>Crawlable, Fast Engineering:</strong> Pre-rendered HTML, clean semantic
                  structure, and verified Schema.org data so both Google and AI search engines read
                  every page reliably.
                </span>
              </li>
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                <span>
                  <strong>Honest Commercial Scope:</strong> Fixed milestone quotes and realistic
                  timelines — never fake ranking guarantees or invented metrics.
                </span>
              </li>
            </ul>

            {(hasLinkedin || hasGithub) && (
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 24 }}>
                {hasLinkedin && (
                  <a
                    href={siteConfig.founder.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-link button-light"
                  >
                    LinkedIn <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
                {hasGithub && (
                  <a
                    href={siteConfig.founder.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button-link button-light"
                  >
                    GitHub <ExternalLink size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section warm">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CORE CAPABILITIES</span>
              <h2>What We Build Together</h2>
            </div>
            <Link href="/services" className="button-link button-light">
              Explore All Services <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="content-grid-3">
            {servicesData.map((svc) => (
              <article className="editorial-card" key={svc.slug}>
                <span className={`mini-label ${svc.accent}`}>{svc.eyebrow}</span>
                <h3>
                  <Link href={`/services/${svc.slug}`}>{svc.shortName}</Link>
                </h3>
                <p>{svc.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <span className="eyebrow-pill dark-pill">
            <i />
            WORK DIRECTLY WITH {siteConfig.founder.name.toUpperCase()}
          </span>
          <h2>Start With a Free 20-Minute Technical Audit</h2>
          <p>No sales script — just practical feedback on your site, local SEO, and lead capture.</p>
          <ContactActions locationTag="about_page" prefillTopic="a 20-minute consultation" />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
