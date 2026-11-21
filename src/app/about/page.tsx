import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/config/site.config';
import { servicesData } from '@/data/services';

export const metadata: Metadata = {
  title: 'About SillyMedia Solutions — Delhi NCR Digital Marketing & Web Agency',
  description:
    'SillyMedia Solutions is a Delhi NCR digital marketing and web engineering agency. Fast custom websites, hyperlocal SEO, WhatsApp automation, and custom web apps.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'About' }];

  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, '/about')} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            DIGITAL MARKETING &amp; WEB ENGINEERING AGENCY
          </span>
          <h1>About {siteConfig.brandName}</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>Serving Delhi, Gurugram, Noida, Greater Noida, Faridabad &amp; Ghaziabad</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">What is SillyMedia Solutions?</span>
            <p>
              SillyMedia Solutions is a Delhi NCR digital marketing and web engineering agency
              headquartered in New Delhi. We build high-speed custom websites, hyperlocal Google
              Maps SEO, WhatsApp Business automation workflows, and custom web applications for
              businesses across Delhi, Gurugram, Noida, Greater Noida, Faridabad, and Ghaziabad. We
              replace slow legacy agency layers with senior specialist execution and verifiable
              commercial results.
            </p>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container founder-grid">
          <div className="founder-portrait" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
            <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: 4, border: '2px solid #1A1208', boxShadow: '3px 3px 0px #1A1208', marginBottom: '1.25rem', width: '100%', maxWidth: 260, display: 'flex', justifyContent: 'center' }}>
              <picture>
                <source srcSet="/images/logo.webp" type="image/webp" />
                <img
                  src="/images/logo.png"
                  alt="SillyMedia Solutions — Digital Marketing Agency"
                  width={220}
                  height={170}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </picture>
            </div>
            <strong style={{ fontSize: 20, fontFamily: 'Playfair Display, Georgia, serif', color: '#1A1208' }}>
              SillyMedia Solutions
            </strong>
            <small style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: '#E8611A', fontWeight: 700, marginTop: 4 }}>
              DIGITAL MARKETING &amp; WEB ENGINEERING
            </small>
            <small style={{ marginTop: 6, color: '#6e675f', fontFamily: 'Space Mono, monospace', fontSize: '0.6875rem' }}>
              Delhi NCR · Serving 6 Regions
            </small>
          </div>

          <div className="prose-shell">
            <span className="eyebrow">AGENCY PROFILE</span>
            <h2 style={{ marginTop: 8 }}>Why Our Agency Model Beats Traditional Legacy Firms</h2>
            <p>
              Traditional agencies often pitch you with senior partners and then hand off your
              website or search campaigns to junior interns learning on your budget. At SillyMedia
              Solutions, we run a tight, specialist-led engineering and digital marketing agency.
            </p>
            <p>
              Every custom Next.js web application, Google Maps optimization strategy, and WhatsApp
              automation workflow is planned, architected, and deployed directly by our senior
              specialists. We prioritize mobile Core Web Vitals, pre-rendered server HTML,
              crawlability for AI search engines, and measurable commercial inquiries over cosmetic
              vanity metrics.
            </p>

            <h3>Agency Working Principles</h3>
            <ul className="check-list">
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                <span>
                  <strong>Full Client Ownership:</strong> You own 100% of your domain, hosting,
                  analytics, content, and Git source code repository from launch day. No proprietary
                  lock-in.
                </span>
              </li>
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                <span>
                  <strong>Crawlable, Fast Engineering:</strong> Pre-rendered static/SSR HTML, clean
                  semantic structure, and verified Schema.org data so both Google and AI search engines
                  index every page accurately.
                </span>
              </li>
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                <span>
                  <strong>Honest Commercial Scope:</strong> Fixed milestone scopes and transparent
                  timelines — never fake ranking guarantees or inflated claims.
                </span>
              </li>
            </ul>
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
            WORK DIRECTLY WITH OUR SENIOR SPECIALISTS
          </span>
          <h2>Start With a Free 20-Minute Technical Audit</h2>
          <p>No sales script — just practical feedback from our team on your site, local SEO, and lead capture.</p>
          <ContactActions locationTag="about_page" prefillTopic="a 20-minute consultation" />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
