'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Delegated click tracking. Lets the footer and the mobile sticky bar stay
 * server components: they mark trackable links with data-track-event /
 * data-track-location, and this single tiny client island reads those
 * attributes on click and forwards them to GA4. No per-link onClick handlers.
 */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.('[data-track-event]');
      if (!el) return;
      const eventName = el.getAttribute('data-track-event');
      const location = el.getAttribute('data-track-location') || undefined;
      if (eventName === 'call_click' || eventName === 'whatsapp_click' || eventName === 'form_submit') {
        trackEvent(eventName, location ? { location } : undefined);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
