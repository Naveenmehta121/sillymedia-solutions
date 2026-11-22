import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import JsonLd from '@/components/JsonLd';
import PricingSection from '@/components/PricingSection';
import { buildBreadcrumbSchema, buildWebsitePackagesOffer } from '@/lib/schema';
import { siteConfig } from '@/config/site.config';

const pageTitle = 'Website Prices in Delhi NCR';

export const metadata: Metadata = {
  title: pageTitle,
  description:
    'Fixed website prices in Delhi NCR — one-page ₹4,999, multi-page ₹14,999, e-commerce ₹17,999 without payment gateway and ₹24,999 with. No hidden add-ons.',
  alternates: { canonical: '/prices' },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.brandName}`,
    description:
      'Fixed website prices in Delhi NCR — one-page ₹4,999, multi-page ₹14,999, e-commerce ₹17,999 without payment gateway and ₹24,999 with. No hidden add-ons.',
    url: `${siteConfig.siteUrl}/prices`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SillyMedia Solutions — Website Prices in Delhi NCR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageTitle} | ${siteConfig.brandName}`,
    description:
      'Fixed website prices in Delhi NCR — one-page ₹4,999, multi-page ₹14,999, e-commerce ₹17,999 without payment gateway and ₹24,999 with. No hidden add-ons.',
    images: ['/og-image.png'],
  },
};

export default function PricesPage() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Prices' }];
  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, '/prices')} />
      <JsonLd data={buildWebsitePackagesOffer('/prices')} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            FIXED PRICES · NO HIDDEN ADD-ONS
          </span>
          <h1>Website Prices in Delhi NCR</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>4 fixed website packages</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">How much does a website cost with SillyMedia Solutions?</span>
            <p>
              One-page websites start at ₹4,999, multi-page websites at ₹14,999, and e-commerce
              at ₹17,999 without a payment gateway or ₹24,999 with one. Every package starts with
              a free 20-minute review — local SEO, WhatsApp automation, web apps and AI chatbots
              are scoped on the same call.
            </p>
          </div>
        </div>
      </section>

      <PricingSection sectionNumber="01" />

      <section className="contact">
        <div className="container contact-inner">
          <span className="eyebrow-pill dark-pill">
            <i />
            NOT SURE WHICH PACKAGE FITS?
          </span>
          <h2>Ask {siteConfig.founder.name} Directly</h2>
          <p>
            Share your business website or goal and get a clear, honest response within 3 business
            hours.
          </p>
          <ContactActions locationTag="prices_page" prefillTopic="a website package from your Prices page" />
          <Link href="/#contact" className="button-link">
            Open Project Inquiry Form
          </Link>
        </div>
      </section>
    </main>
  );
}
