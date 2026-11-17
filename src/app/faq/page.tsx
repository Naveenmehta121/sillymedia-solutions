import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactActions from '@/components/ContactActions';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema, buildFaqSchema } from '@/lib/schema';
import { faqsData } from '@/data/faqs';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Web Design, SEO & AI',
  description:
    'Direct answers about website development timelines, pricing structure, Google Maps SEO, WhatsApp Business API compliance, and code ownership at SillyMedia Solutions.',
  alternates: { canonical: '/faq' },
};

const categories = [
  'General',
  'Pricing & Process',
  'Local SEO & AI Search',
  'Automation & Tech',
] as const;

export default function FaqPage() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'FAQ' }];
  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, '/faq')} />
      <JsonLd data={buildFaqSchema(faqsData)} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            TRANSPARENCY &amp; ANSWERS
          </span>
          <h1>Frequently Asked Questions</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>{faqsData.length} direct answers</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">How does SillyMedia Solutions work?</span>
            <p>
              SillyMedia Solutions works directly with Delhi NCR business owners on fixed milestone
              scopes — typically 14–21 working days for custom websites and 4–6 weeks for web apps
              and SaaS MVPs. Clients retain full code and domain ownership, with transparent
              communication directly from {siteConfig.founder.name}.
            </p>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container" style={{ maxWidth: 960 }}>
          {categories.map((cat) => {
            const items = faqsData.filter((f) => f.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat} style={{ marginBottom: 44 }}>
                <span className="eyebrow">{cat}</span>
                <h2 style={{ font: '700 28px/1.2 Playfair Display, Georgia, serif', margin: '8px 0 18px' }}>
                  {cat} Questions
                </h2>
                <div className="faq-list">
                  {items.map((faq) => (
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
            );
          })}
        </div>
      </section>

      <section className="contact">
        <div className="container contact-inner">
          <span className="eyebrow-pill dark-pill">
            <i />
            STILL HAVE A SPECIFIC QUESTION?
          </span>
          <h2>Ask {siteConfig.founder.name} Directly</h2>
          <p>
            Share your business website or goal and get a clear, honest response within 3 business
            hours.
          </p>
          <ContactActions locationTag="faq_page" prefillTopic="a question from your FAQ page" />
          <Link href="/#contact" className="button-link">
            Open Project Inquiry Form
          </Link>
        </div>
      </section>
    </main>
  );
}
