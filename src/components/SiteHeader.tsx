'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import BrandMark from '@/components/BrandMark';
import { getPhoneDisplay, getPhoneHref, getWhatsAppHref, siteConfig } from '@/config/site.config';
import { trackEvent } from '@/lib/analytics';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/locations/delhi', label: 'Locations' },
  { href: '/work', label: 'Work' },
  { href: '/prices', label: 'Prices' },
  { href: '/#products', label: 'Products' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const phoneHref = getPhoneHref();
  const phoneDisplay = getPhoneDisplay();
  const waHref = getWhatsAppHref();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${siteConfig.brandName} Home`}>
          <BrandMark compact={scrolled} />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          {phoneHref && phoneDisplay && (
            <a
              href={phoneHref}
              className="header-phone"
              onClick={() => trackEvent('call_click', { location: 'header' })}
            >
              <Phone size={14} aria-hidden="true" />
              <span>{phoneDisplay}</span>
            </a>
          )}
          <Link href="/#contact" className="button-link header-cta">
            Get a Free Quote
          </Link>
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav-drawer" aria-label="Mobile navigation">
          <div className="container mobile-nav-inner">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="mobile-nav-ctas">
              {phoneHref && phoneDisplay && (
                <a
                  href={phoneHref}
                  className="button-link button-light"
                  onClick={() => {
                    trackEvent('call_click', { location: 'mobile_menu' });
                    setMobileOpen(false);
                  }}
                >
                  Call {phoneDisplay}
                </a>
              )}
              {waHref && (
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp"
                  onClick={() => {
                    trackEvent('whatsapp_click', { location: 'mobile_menu' });
                    setMobileOpen(false);
                  }}
                >
                  WhatsApp Our Team
                </a>
              )}
              <Link
                href="/#contact"
                className="button-link"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
