import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import PricingSection from '@/components/PricingSection';
import ContactActions from '@/components/ContactActions';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import { siteConfig } from '@/config/site.config';

const pageTitle = 'Web, SEO & AI Services — Delhi NCR';

export const metadata: Metadata = {
  title: pageTitle,
  description:
    'Explore custom website development, hyperlocal Google Maps SEO, WhatsApp automation, SaaS web apps, and AI chatbots by SillyMedia Solutions in Delhi NCR.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.brandName}`,
    description:
      'Explore custom website development, hyperlocal Google Maps SEO, WhatsApp automation, SaaS web apps, and AI chatbots by SillyMedia Solutions in Delhi NCR.',
    url: `${siteConfig.siteUrl}/services`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SillyMedia Solutions — Web Development, Local SEO & AI Services in Delhi NCR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageTitle} | ${siteConfig.brandName}`,
    description:
      'Explore custom website development, hyperlocal Google Maps SEO, WhatsApp automation, SaaS web apps, and AI chatbots by SillyMedia Solutions in Delhi NCR.',
    images: ['/og-image.png'],
  },
};

export default function ServicesIndexPage() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Services' }];
  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, '/services')} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            SERVICES · DELHI NCR DIGITAL ENGINEERING
          </span>
          <h1>Digital Engineering &amp; Local Growth Services in Delhi NCR</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>Direct delivery with {siteConfig.founder.name}</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">Direct Answer</span>
            <p>
              SillyMedia Solutions provides five core digital growth services for businesses across
              Delhi, Gurugram, Noida, Greater Noida, Faridabad, and Ghaziabad: custom pre-rendered
              websites, hyperlocal SEO &amp; Google Maps optimization, official WhatsApp Business
              automation, full-stack web apps and SaaS MVPs, and grounded AI chatbots.
            </p>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SERVICE CATALOG</span>
              <h2>Which Service Fits Your Current Growth Stage?</h2>
            </div>
            <p>
              Every service is built for fast mobile execution, clean search indexability, and
              measurable phone or WhatsApp inquiries.
            </p>
          </div>
          <div className="service-list">
            {servicesData.map((svc) => (
              <article className="service-row" key={svc.slug}>
                <span className={`service-number ${svc.accent}`}>{svc.number}</span>
                <div>
                  <span className={`mini-label ${svc.accent}`}>{svc.eyebrow}</span>
                  <h3>
                    <Link href={`/services/${svc.slug}`}>{svc.name}</Link>
                  </h3>
                  <p>{svc.summary}</p>
                </div>
                <Link href={`/services/${svc.slug}`}>
                  {svc.ctaLabel} <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section warm">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SERVICE AREAS</span>
              <h2>Cities We Serve Across Delhi NCR</h2>
            </div>
            <p>Dedicated hyperlocal playbooks for each major NCR commercial and residential hub.</p>
          </div>
          <div className="pill-grid">
            {locationsData.map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="pill-item pill-link">
                <i className="dot dot-0" />
                {loc.city} ({loc.regionLabel})
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PricingSection sectionNumber="PRICING" />

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <span className="eyebrow-pill dark-pill">
            <i />
            FREE 20-MINUTE TECHNICAL AUDIT
          </span>
          <h2>Not Sure Which Service to Prioritize First?</h2>
          <p>
            Share your current website or Google Maps link and {siteConfig.founder.name} will
            recommend the highest-ROI first step.
          </p>
          <ContactActions locationTag="services_index" prefillTopic="a digital growth audit" />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
