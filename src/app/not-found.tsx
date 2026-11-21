import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="page-hero" style={{ minHeight: '72vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="not-found-box">
          <span className="eyebrow">ERROR 404 · PAGE NOT FOUND</span>
          <h1>That Page Isn&apos;t Here.</h1>
          <p style={{ color: '#594138', fontSize: 16, lineHeight: 1.6 }}>
            The link you followed may have moved or the URL might have a typo. Use the quick links
            below to reach our Delhi NCR services, city pages, or case studies.
          </p>
          <div className="not-found-links">
            <Link href="/" className="button-link">
              Back to Home <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/services" className="button-link button-light">
              Explore Services
            </Link>
            <Link href="/locations" className="button-link button-light">
              Delhi NCR Locations
            </Link>
            <Link href="/work" className="button-link button-light">
              Case Studies
            </Link>
            <Link href="/#contact" className="button-link button-light">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
