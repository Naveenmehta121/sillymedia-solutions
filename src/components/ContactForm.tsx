'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'aa990098-e503-45b4-b7eb-734fa28e4b97';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = 'Please enter your name.';
    if (!email.trim()) next.email = 'Please enter your email address.';
    else if (!EMAIL_RE.test(email.trim())) next.email = 'That email address does not look right.';
    if (!message.trim()) next.message = 'Please tell us a little about your business.';
    else if (message.trim().length < 10) next.message = 'Your message is a bit short — add a few more details.';
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
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Inquiry from ${name.trim()} — SillyMedia Solutions`,
          from_name: 'SillyMedia Solutions Website',
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          botcheck,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(data.message || '');
        setStatus('failed');
        return;
      }

      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
      setBotcheck(false);
    } catch {
      setStatus('failed');
    }
  }

  if (status === 'sent') {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={30} />
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. Naveen will get back to you within 3 hours — usually much sooner.</p>
        <button
          className="form-reset"
          onClick={() => { setStatus('idle'); setErrors({}); setErrorMessage(''); }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
          <span>Your Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => { setName(e.target.value); if (errors.name) setErrors({ ...errors, name: undefined }); }}
            placeholder="Priya Sharma"
            aria-invalid={!!errors.name}
          />
          {errors.name && <em>{errors.name}</em>}
        </label>
        <label>
          <span>Email Address</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({ ...errors, email: undefined }); }}
            placeholder="you@business.in"
            aria-invalid={!!errors.email}
          />
          {errors.email && <em>{errors.email}</em>}
        </label>
      </div>
      <label>
        <span>How Can We Help?</span>
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors({ ...errors, message: undefined }); }}
          placeholder="Tell us about your business, your location in Delhi NCR, and what you'd like to build…"
          aria-invalid={!!errors.message}
        />
        {errors.message && <em>{errors.message}</em>}
      </label>
      {status === 'failed' && (
        <p className="form-error-banner" role="alert">
          {errorMessage || 'Something went wrong sending your message. Please try again, or email naveen@sillymedia.in directly.'}
        </p>
      )}
      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? <><Loader2 size={16} className="spin" />Sending…</> : <><Send size={16} />Send Message</>}
      </button>
    </form>
  );
}
