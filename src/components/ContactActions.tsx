'use client';

import { Mail, MessageCircle, Phone } from 'lucide-react';
import {
  getPhoneDisplay,
  getPhoneHref,
  getWhatsAppHref,
  siteConfig,
} from '@/config/site.config';
import { trackEvent } from '@/lib/analytics';

export default function ContactActions({
  locationTag = 'contact_section',
  prefillTopic,
}: {
  locationTag?: string;
  prefillTopic?: string;
}) {
  const phoneHref = getPhoneHref();
  const phoneDisplay = getPhoneDisplay();
  const waHref = getWhatsAppHref(
    prefillTopic
      ? `Hi Naveen, I'm interested in ${prefillTopic} from SillyMedia Solutions for my Delhi NCR business.`
      : undefined
  );

  return (
    <div className="contact-actions">
      {phoneHref && phoneDisplay && (
        <a
          className="call-button"
          href={phoneHref}
          onClick={() => trackEvent('call_click', { location: locationTag })}
        >
          <Phone size={17} aria-hidden="true" />
          Call {phoneDisplay}
        </a>
      )}

      {waHref ? (
        <a
          className="whatsapp"
          href={waHref}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent('whatsapp_click', { location: locationTag })}
        >
          <MessageCircle size={18} aria-hidden="true" />
          Chat with Naveen on WhatsApp
        </a>
      ) : (
        <a
          className="whatsapp"
          href="#contact-form"
          onClick={() => trackEvent('whatsapp_click', { location: `${locationTag}_fallback` })}
        >
          <MessageCircle size={18} aria-hidden="true" />
          Request a WhatsApp Callback
        </a>
      )}

      <a
        className="orange-button"
        href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
          prefillTopic
            ? `Inquiry: ${prefillTopic} — SillyMedia Solutions`
            : 'Growth Strategy Inquiry — SillyMedia Solutions'
        )}`}
      >
        <Mail size={17} aria-hidden="true" />
        Email {siteConfig.founder.name} Directly
      </a>
    </div>
  );
}
