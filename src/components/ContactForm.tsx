'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { trackEvent } from '@/lib/analytics';

interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  businessType?: string;
  service?: string;
  city?: string;
  message?: string;
}

interface UtmParams {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  landing_page: string;
  referrer: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s()-]{7,18}$/;

const SERVICE_OPTIONS = [
  'Custom Website',
  'Hyperlocal SEO & Google Maps',
  'WhatsApp Automation & CRM Bots',
  'Web App / SaaS MVP',
  'AI Chatbot / Voice Agent',
  'Full Growth Package / Audit',
];

const BUSINESS_TYPES = [
  'Clinic / Healthcare',
  'Retail / D2C Brand',
  'Restaurant / Cafe / Hospitality',
  'Startup / SaaS / B2B',
  'Real Estate / Architecture',
  'Education / Coaching',
  'Professional / Legal / CA Services',
  'Gym / Wellness / Salon',
  'Other Local Business',
];

const NCR_CITIES = [
  'Delhi',
  'Gurugram',
  'Noida',
  'Greater Noida',
  'Faridabad',
  'Ghaziabad',
  'Other / Outside NCR',
];

export default function ContactForm({
  defaultCity = '',
  defaultService = '',
}: {
  defaultCity?: string;
  defaultService?: string;
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [service, setService] = useState(defaultService);
  const [city, setCity] = useState(defaultCity);
  const [message, setMessage] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [utm, setUtm] = useState<UtmParams>({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    landing_page: '',
    referrer: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    setUtm({
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      landing_page: window.location.pathname,
      referrer: document.referrer || '',
    });
  }, []);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = 'Please enter your name.';
    if (!phone.trim()) next.phone = 'Please enter your phone or WhatsApp number.';
    else if (!PHONE_RE.test(phone.trim()))
      next.phone = 'Please enter a valid 10-digit phone number (with optional +91).';
    if (!email.trim()) next.email = 'Please enter your email address.';
    else if (!EMAIL_RE.test(email.trim())) next.email = 'That email address does not look right.';
    if (!businessType) next.businessType = 'Please choose your business category.';
    if (!service) next.service = 'Please select the service you need.';
    if (!city) next.city = 'Please select your city in Delhi NCR.';
    if (!message.trim()) next.message = 'Please share a brief overview of your goals.';
    else if (message.trim().length < 10)
      next.message = 'Your message is a bit short — add a few more details.';
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(siteConfig.formBackend.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: siteConfig.formBackend.accessKey,
          subject: `New ${service} Inquiry (${city}) from ${name.trim()} — ${siteConfig.brandName}`,
          from_name: `${siteConfig.brandName} Website`,
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          business_type: businessType,
          service_interested_in: service,
          city,
          message: message.trim(),
          utm_source: utm.utm_source || 'direct',
          utm_medium: utm.utm_medium || 'none',
          utm_campaign: utm.utm_campaign || 'none',
          utm_term: utm.utm_term || '',
          utm_content: utm.utm_content || '',
          landing_page: utm.landing_page,
          referrer: utm.referrer,
          botcheck,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(data.message || '');
        setStatus('failed');
        return;
      }

      trackEvent('form_submit', {
        service,
        city,
        business_type: businessType,
        utm_source: utm.utm_source || 'direct',
      });

      setStatus('sent');
      setName('');
      setPhone('');
      setEmail('');
      setBusinessType('');
      setService(defaultService);
      setCity(defaultCity);
      setMessage('');
      setBotcheck(false);
    } catch {
      setStatus('failed');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-success" id="contact-form" role="status">
        <CheckCircle2 size={30} aria-hidden="true" />
        <h3>Message Sent!</h3>
        <p>
          Thank you for reaching out. {siteConfig.founder.name} will review your project details and
          respond within 3 business hours.
        </p>
        <button
          type="button"
          className="form-reset"
          onClick={() => {
            setStatus('idle');
            setErrors({});
            setErrorMessage('');
          }}
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit} noValidate>
      <input
        type="checkbox"
        name="botcheck"
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
        style={{ display: 'none' }}
        tabIndex={-1}
        aria-hidden="true"
      />

      <div className="form-row">
        <label>
          <span>Your Name *</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder="Priya Sharma"
            aria-invalid={!!errors.name}
          />
          {errors.name && <em>{errors.name}</em>}
        </label>

        <label>
          <span>Phone / WhatsApp *</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            placeholder="+91 98XXX XXXXX"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <em>{errors.phone}</em>}
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Email Address *</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="you@business.in"
            aria-invalid={!!errors.email}
          />
          {errors.email && <em>{errors.email}</em>}
        </label>

        <label>
          <span>Business Type *</span>
          <select
            name="business_type"
            value={businessType}
            onChange={(e) => {
              setBusinessType(e.target.value);
              if (errors.businessType) setErrors({ ...errors, businessType: undefined });
            }}
            aria-invalid={!!errors.businessType}
          >
            <option value="">Select business category…</option>
            {BUSINESS_TYPES.map((bt) => (
              <option key={bt} value={bt}>
                {bt}
              </option>
            ))}
          </select>
          {errors.businessType && <em>{errors.businessType}</em>}
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Service Interested In *</span>
          <select
            name="service"
            value={service}
            onChange={(e) => {
              setService(e.target.value);
              if (errors.service) setErrors({ ...errors, service: undefined });
            }}
            aria-invalid={!!errors.service}
          >
            <option value="">Choose a service…</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && <em>{errors.service}</em>}
        </label>

        <label>
          <span>City (Delhi NCR) *</span>
          <select
            name="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              if (errors.city) setErrors({ ...errors, city: undefined });
            }}
            aria-invalid={!!errors.city}
          >
            <option value="">Select your city…</option>
            {NCR_CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.city && <em>{errors.city}</em>}
        </label>
      </div>

      <label>
        <span>Project Goals &amp; Timeline *</span>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          placeholder="Tell us about your business, locality in Delhi NCR, current website (if any), and what you want to achieve…"
          aria-invalid={!!errors.message}
        />
        {errors.message && <em>{errors.message}</em>}
      </label>

      {status === 'failed' && (
        <p className="form-error-banner" role="alert">
          {errorMessage ||
            `Something went wrong sending your message. Please try again, or email ${siteConfig.contact.email} directly.`}
        </p>
      )}

      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? (
          <>
            <Loader2 size={16} className="spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Send Project Inquiry
          </>
        )}
      </button>
    </form>
  );
}
