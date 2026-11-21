'use client';

import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import BrandMark from '@/components/BrandMark';
import {
  getPhoneDisplay,
  getPhoneHref,
  getWhatsAppHref,
  isConfigured,
  siteConfig,
} from '@/config/site.config';
import { trackEvent } from '@/lib/analytics';

export default function SiteFooter() {
  const phoneHref = getPhoneHref();
  const phoneDisplay = getPhoneDisplay();
  const waHref = getWhatsAppHref();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand-link" aria-label={`${siteConfig.brandName} Home`}>
            <BrandMark variant="stacked" />
          </Link>
          <span className="eyebrow footer-eyebrow">SILLYMEDIA SOLUTIONS · DIGITAL AGENCY · DELHI NCR</span>
          <p>{siteConfig.shortDescription}</p>
          {isConfigured(siteConfig.contact.streetAddress) && (
            <p className="footer-address">
              {siteConfig.contact.streetAddress}, {siteConfig.contact.addressLocality},{' '}
              {siteConfig.contact.addressRegion}
              {isConfigured(siteConfig.contact.postalCode)
                ? ` ${siteConfig.contact.postalCode}`
                : ''}
            </p>
          )}
        </div>

        <div>
          <h2 className="footer-heading">Services</h2>
          <Link href="/services/custom-websites">Custom Websites</Link>
          <Link href="/services/local-seo-google-maps">Hyperlocal SEO &amp; Maps</Link>
          <Link href="/services/whatsapp-automation">WhatsApp Automation</Link>
          <Link href="/services/web-apps-saas">Web Apps &amp; SaaS MVPs</Link>
          <Link href="/services/ai-chatbots-agents">AI Chatbots &amp; Agents</Link>
          <Link href="/services">All Services</Link>
        </div>

        <div>
          <h2 className="footer-heading">Delhi NCR Hubs</h2>
          {siteConfig.areaServed.map((city) => (
            <Link key={city.slug} href={`/locations/${city.slug}`}>
              {city.name}
            </Link>
          ))}
        </div>

        <div>
          <h2 className="footer-heading">Agency Contact</h2>
          <p>Consultations, technical audits, and digital builds delivered directly by our team.</p>
          <a href={`mailto:${siteConfig.contact.email}`} className="orange-text">
            {siteConfig.contact.email}
          </a>
          {phoneHref && phoneDisplay && (
            <a
              href={phoneHref}
              className="footer-contact-action"
              onClick={() => trackEvent('call_click', { location: 'footer' })}
            >
              <Phone size={14} aria-hidden="true" />
              {phoneDisplay}
            </a>
          )}
          {waHref && (
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="footer-contact-action"
              onClick={() => trackEvent('whatsapp_click', { location: 'footer' })}
            >
              <MessageCircle size={14} aria-hidden="true" />
              WhatsApp Our Team
            </a>
          )}
          <div className="footer-sub-links">
            <Link href="/work">Case Studies</Link>
            <Link href="/guides">NCR Guides</Link>
            <Link href="/about">About Our Agency</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 {siteConfig.brandName}. Digital marketing &amp; web agency. All rights reserved.</span>
        <div className="footer-legal-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <a href="/sitemap.xml">Sitemap</a>
          <a href="/llms.txt">llms.txt</a>
        </div>
      </div>
    </footer>
  );
}
