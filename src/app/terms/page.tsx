import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing the use of sillymedia.in and project engagements with SillyMedia Solutions in Delhi NCR.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Terms of Service' }];
  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, '/terms')} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            ENGAGEMENT &amp; WEBSITE TERMS
          </span>
          <h1>Terms of Service</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>{siteConfig.brandName}</span>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container prose-shell">
          <h2>1. Scope &amp; Proposals</h2>
          <p>
            Information published on {siteConfig.siteUrl} — including typical delivery timelines and
            starting scope guidelines — is provided for general planning. Final deliverables,
            milestone pricing, and timelines are governed by the written Statement of Work (SOW)
            agreed between you and {siteConfig.brandName} before work starts.
          </p>

          <h2>2. Code &amp; Asset Ownership</h2>
          <p>
            Upon full settlement of agreed project milestones, clients own the custom application
            source code, website content, and accounts registered in their name. Open-source
            libraries remain governed by their respective licenses.
          </p>

          <h2>3. Search Engine &amp; Platform Disclaimers</h2>
          <p>
            Search rankings (Google Search, Google Maps) and AI engine citations depend on external
            third-party algorithms, local proximity, and market competition. {siteConfig.brandName}{' '}
            follows documented technical SEO and platform compliance standards and does not make
            guaranteed #1 ranking promises.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            Projects may integrate third-party platforms such as Meta WhatsApp Business Cloud API,
            domain registrars, cloud hosting providers, or payment gateways. Usage fees charged
            directly by those platforms remain the client&apos;s responsibility.
          </p>

          <h2>5. Contact</h2>
          <p>
            Questions regarding these terms may be sent to{' '}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
