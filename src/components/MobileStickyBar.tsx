import Link from 'next/link';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { getPhoneHref, getWhatsAppHref, siteConfig } from '@/config/site.config';

export default function MobileStickyBar() {
  const phoneHref = getPhoneHref();
  const waHref = getWhatsAppHref();

  return (
    <div className="mobile-sticky-bar" role="region" aria-label="Quick contact actions">
      {phoneHref ? (
        <a
          href={phoneHref}
          className="sticky-btn sticky-call"
          data-track-event="call_click"
          data-track-location="mobile_sticky_bar"
        >
          <Phone size={15} aria-hidden="true" />
          <span>Call</span>
        </a>
      ) : (
        <a
          href={`mailto:${siteConfig.contact.email}?subject=Callback%20Request`}
          className="sticky-btn sticky-call"
          data-track-event="call_click"
          data-track-location="mobile_sticky_bar_email_fallback"
        >
          <Phone size={15} aria-hidden="true" />
          <span>Callback</span>
        </a>
      )}

      {waHref ? (
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="sticky-btn sticky-wa"
          data-track-event="whatsapp_click"
          data-track-location="mobile_sticky_bar"
        >
          <MessageCircle size={15} aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      ) : (
        <Link
          href="/#contact"
          className="sticky-btn sticky-wa"
          data-track-event="whatsapp_click"
          data-track-location="mobile_sticky_bar_form_fallback"
        >
          <MessageCircle size={15} aria-hidden="true" />
          <span>Chat</span>
        </Link>
      )}

      <Link href="/#contact" className="sticky-btn sticky-quote">
        <Send size={15} aria-hidden="true" />
        <span>Free Quote</span>
      </Link>
    </div>
  );
}
