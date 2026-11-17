import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How SillyMedia Solutions collects, uses, and protects project inquiry details submitted via our website in India.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }];
  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, '/privacy-policy')} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            LEGAL &amp; DATA HANDLING
          </span>
          <h1>Privacy Policy</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>{siteConfig.brandName}</span>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container prose-shell">
          <h2>1. Information We Collect</h2>
          <p>
            When you submit an inquiry through the {siteConfig.brandName} contact form, we collect
            the details you choose to provide: your name, phone or WhatsApp number, email address,
            business category, requested service, Delhi NCR city, project description, and standard
            campaign attribution parameters (such as UTM source and referring URL).
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to your project inquiry or free 20-minute technical audit request.</li>
            <li>To prepare accurate scope estimates, timelines, and proposals.</li>
            <li>To understand which pages and search queries bring relevant inquiries.</li>
          </ul>
          <p>
            We never sell, rent, or trade your personal contact information to third-party lead
            brokers or spam networks.
          </p>

          <h2>3. Form Processing &amp; Analytics</h2>
          <p>
            Contact form submissions are transmitted securely over HTTPS via Web3Forms to deliver
            your message to {siteConfig.founder.name}&apos;s email inbox ({siteConfig.contact.email}
            ). Where configured, privacy-minded website analytics (such as Google Analytics 4 with
            IP anonymization and Microsoft Clarity) help us measure page speed and conversion flow
            effectiveness.
          </p>

          <h2>4. Data Retention &amp; Deletion Requests</h2>
          <p>
            We retain inquiry correspondence only as long as reasonably required to communicate with
            you about your project or comply with applicable Indian legal obligations. To request
            correction or deletion of your inquiry data at any time, email{' '}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
