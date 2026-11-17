declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEventName = 'call_click' | 'whatsapp_click' | 'form_submit';

export function trackEvent(
  eventName: AnalyticsEventName,
  params?: Record<string, string | number | boolean | undefined>
) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params || {});
  }
}
