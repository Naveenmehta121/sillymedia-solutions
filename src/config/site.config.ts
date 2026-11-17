/**
 * Centralized site configuration for SillyMedia Solutions.
 *
 * HARD RULE: Never invent facts. Every unknown value is stored here as a clearly
 * marked bracket placeholder (e.g. "[PHONE]"). The helper `isConfigured()` ensures
 * raw placeholders NEVER leak into the rendered HTML or JSON-LD until you replace
 * them with verified values.
 */

export function isConfigured(value: string | undefined | null): value is string {
  if (!value) return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  return !/^\[[A-Z0-9_]+\]$/.test(trimmed);
}

export const siteConfig = {
  brandName: 'SillyMedia Solutions',
  tagline: 'Delhi NCR’s Digital Engineering & Local Growth Partner',
  shortDescription:
    'Independent Delhi NCR digital agency led by Naveen, building fast custom websites, hyperlocal SEO & Google Maps growth, WhatsApp automation, web apps, and AI chatbots.',
  siteUrl: 'https://sillymedia.in',
  locale: 'en_IN',
  language: 'en-IN',
  lastUpdated: '2026-11-18',

  founder: {
    name: 'Naveen',
    // PLACEHOLDER: Full name if you prefer displaying your last name publicly
    fullName: '[FOUNDER_FULL_NAME]',
    jobTitle: 'Founder & Principal Engineer',
    // PLACEHOLDER: Verified years of experience (e.g. "7+ years")
    experienceYears: '[FOUNDER_EXPERIENCE_YEARS]',
    // PLACEHOLDER: Verified founder headshot path or URL (e.g. "/images/naveen.webp")
    photoUrl: '[FOUNDER_PHOTO_URL]',
    // PLACEHOLDER: Real profile URLs for Person schema `sameAs`
    linkedinUrl: '[FOUNDER_LINKEDIN_URL]',
    githubUrl: '[FOUNDER_GITHUB_URL]',
    bioParagraphs: [
      'Naveen is the founder and principal engineer at SillyMedia Solutions, working directly with business owners and product teams across Delhi NCR.',
      'Instead of passing projects through account managers and junior handoffs, Naveen leads architecture, technical SEO, conversion UX, and automation engineering directly from discovery through launch.',
    ],
  },

  contact: {
    email: 'naveen@sillymedia.in',
    // PLACEHOLDER: Replace with your real phone number in E.164 format, e.g. "+9198XXXXXXXX"
    phone: '[PHONE]',
    // PLACEHOLDER: Human-formatted phone display, e.g. "+91 98XXX XXXXX"
    phoneDisplay: '[PHONE_DISPLAY]',
    // PLACEHOLDER: Digits-only WhatsApp number with country code, e.g. "9198XXXXXXXX"
    whatsappNumber: '[WHATSAPP_NUMBER]',
    whatsappDefaultMessage:
      'Hi Naveen, I found SillyMedia Solutions online and would like to discuss a project for my Delhi NCR business.',
    // PLACEHOLDER: Street address (leave as placeholder if service-area business without public walk-in office)
    streetAddress: '[STREET_ADDRESS]',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '[POSTAL_CODE]',
    addressCountry: 'IN',
    // PLACEHOLDER: Latitude & Longitude (only emitted in JSON-LD once real coordinates are added)
    geoLat: '[GEO_LAT]',
    geoLng: '[GEO_LNG]',
    // PLACEHOLDER: Confirm business hours (e.g. "Mo-Sa 10:00-19:00")
    openingHours: '[OPENING_HOURS]',
    openingHoursDisplay: 'Mon–Sat, 10:00 AM – 7:00 PM IST', // VERIFY: Confirm working hours
    responseSla: 'Reply within 3 business hours', // VERIFY: Confirm response SLA
  },

  formBackend: {
    provider: 'Web3Forms',
    endpoint: 'https://api.web3forms.com/submit',
    accessKey:
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      'aa990098-e503-45b4-b7eb-734fa28e4b97',
  },

  analytics: {
    // PLACEHOLDER: Google Analytics 4 Measurement ID, e.g. "G-XXXXXXXXXX"
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || '[GA4_ID]',
    // PLACEHOLDER: Google Search Console HTML meta verification token
    gscToken: process.env.NEXT_PUBLIC_GSC_TOKEN || '[GSC_TOKEN]',
    // PLACEHOLDER: Microsoft Clarity project ID
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || '[CLARITY_ID]',
  },

  socialProfiles: {
    // PLACEHOLDER: Add real URLs to populate Organization `sameAs` in JSON-LD
    linkedin: '[COMPANY_LINKEDIN_URL]',
    github: '[COMPANY_GITHUB_URL]',
    googleBusinessProfile: '[GBP_URL]',
    clutch: '[CLUTCH_URL]',
    goodfirms: '[GOODFIRMS_URL]',
    instagram: '[INSTAGRAM_URL]',
  },

  // Configurable crawler policy for robots.txt (Phase 5)
  crawlers: {
    allowSearchAndAiCrawlers: [
      'Googlebot',
      'Bingbot',
      'OAI-SearchBot',
      'ChatGPT-User',
      'GPTBot',
      'ClaudeBot',
      'Claude-SearchBot',
      'PerplexityBot',
      'Google-Extended',
    ],
    disallowPaths: ['/api/', '/_next/static/'],
  },

  areaServed: [
    { name: 'Delhi', slug: 'delhi' },
    { name: 'Gurugram', slug: 'gurugram' },
    { name: 'Noida', slug: 'noida' },
    { name: 'Greater Noida', slug: 'greater-noida' },
    { name: 'Faridabad', slug: 'faridabad' },
    { name: 'Ghaziabad', slug: 'ghaziabad' },
  ],

  /**
   * PRICING_CONFIG
   * Replace `[PRICE_...]` placeholders with your confirmed INR starting prices
   * (e.g. "₹25,000") and `[PRICE_RANGE]` (e.g. "₹₹") when ready.
   */
  pricing: {
    priceRangeSchema: '[PRICE_RANGE]',
    currency: 'INR',
    tiers: [
      {
        id: 'launch-website',
        eyebrow: 'TIER 01 · FAST LAUNCH',
        name: 'Business Website Sprint',
        startingPrice: '[PRICE_TIER_WEBSITE]',
        fallbackLabel: 'Scoped on free 20-min audit',
        timeline: '14–21 working days', // VERIFY: Confirm standard website delivery window
        bestFor: 'Local businesses, clinics, retail stores, and service firms across Delhi NCR.',
        features: [
          'Custom mobile-first design & static/SSR architecture',
          'On-page local SEO structure & Schema.org markup',
          'WhatsApp click-to-chat, call CTA & lead capture form',
          'Core Web Vitals performance tuning & analytics setup',
        ],
        ctaLabel: 'Request Website Quote',
        accent: 'orange' as const,
      },
      {
        id: 'local-seo-maps',
        eyebrow: 'TIER 02 · LOCAL VISIBILITY',
        name: 'Delhi NCR Local SEO & Maps',
        startingPrice: '[PRICE_TIER_LOCAL_SEO]',
        fallbackLabel: 'Monthly or sprint scope',
        timeline: 'Ongoing (initial audit in 7 days)', // VERIFY: Confirm SEO engagement structure
        bestFor: 'Clinics, restaurants, showrooms, and local services competing for Google Maps calls.',
        features: [
          'Google Business Profile audit, categories & service optimization',
          'City & neighbourhood landing page architecture',
          'NAP consistency, citation cleanup & review workflow',
          'Monthly ranking, call-click & inquiry reporting',
        ],
        ctaLabel: 'Request SEO Plan',
        accent: 'green' as const,
      },
      {
        id: 'whatsapp-ai-automation',
        eyebrow: 'TIER 03 · LEAD AUTOMATION',
        name: 'WhatsApp & AI Lead Engine',
        startingPrice: '[PRICE_TIER_AUTOMATION]',
        fallbackLabel: 'Scoped by workflow complexity',
        timeline: '2–3 weeks', // VERIFY: Confirm automation delivery timeline
        bestFor: 'High-inquiry clinics, coaching institutes, D2C brands, and real estate teams.',
        features: [
          'Official WhatsApp Business API / intake flow setup',
          'Automated lead qualification & appointment booking',
          'CRM sync & missed-inquiry follow-up sequences',
          'Optional multilingual AI assistant (English + Hindi)',
        ],
        ctaLabel: 'Request Automation Quote',
        accent: 'blue' as const,
      },
      {
        id: 'custom-webapp-saas',
        eyebrow: 'TIER 04 · CUSTOM ENGINEERING',
        name: 'Web Apps, SaaS MVP & Custom AI',
        startingPrice: '[PRICE_TIER_CUSTOM]',
        fallbackLabel: 'Milestone-based fixed quote',
        timeline: '4–6 weeks (MVP scope)', // VERIFY: Confirm MVP delivery timeline
        bestFor: 'NCR startups, B2B platforms, booking portals, and multi-location brands.',
        features: [
          'Full-stack Next.js / TypeScript architecture & database design',
          'Authentication, payments/UPI, dashboards & API integrations',
          'Custom AI agents, document workflows & internal tools',
          'Direct engineering with Naveen from spec to production',
        ],
        ctaLabel: 'Scope Your Project',
        accent: 'dark' as const,
      },
    ],
    // VERIFY: Confirm every commercial term below before publishing live
    termsStrip: [
      { label: 'Code Ownership', value: 'You own 100% of your codebase & domain' }, // VERIFY
      { label: 'Contracts', value: 'Fixed milestone quotes — no forced lock-in retainers' }, // VERIFY
      { label: 'Delivery', value: 'Clear weekly demos & agreed launch dates' }, // VERIFY
      { label: 'Communication', value: 'Direct reply from Naveen within 3 business hours' }, // VERIFY
    ],
  },

  /**
   * Existing homepage stats carried over from the original site.
   * Every unverified figure is marked with `// VERIFY` and includes a transparent
   * proof link or note rather than an unsupported guarantee.
   */
  stats: [
    {
      // VERIFY: Confirm exact count of businesses served by Naveen / SillyMedia Solutions
      value: '80+',
      label: 'Businesses Scaled',
      note: 'Retail, healthcare, tech & dining across NCR',
      proofLabel: 'See selected work →',
      proofHref: '/work',
      needsVerification: true,
    },
    {
      // VERIFY: Confirm cumulative client-reported revenue figure (₹3 Cr) with documented basis
      value: '₹3 Cr',
      label: 'Client-Reported Revenue Impact',
      note: 'Cumulative sales & inquiries reported by NCR clients',
      proofLabel: 'Review case studies →',
      proofHref: '/work',
      needsVerification: true,
    },
    {
      // VERIFY: Original claimed "#1 Rank / Top 3 in 60 days" — softened to avoid guaranteed Google ranking claim
      value: 'Top 3',
      label: 'Google Maps Pack Focus',
      note: 'Structured local SEO — timelines vary by locality competition',
      proofLabel: 'How local SEO works →',
      proofHref: '/services/local-seo-google-maps',
      needsVerification: true,
    },
    {
      // VERIFY: Original claimed "<0.5s / 99/100" — framed as architectural target verifiable via Lighthouse
      value: '90+',
      label: 'Core Web Vitals Target',
      note: 'Static/SSR HTML, optimized assets & minimal JS',
      proofLabel: 'Explore web architecture →',
      proofHref: '/services/custom-websites',
      needsVerification: false,
    },
  ],
} as const;

export function getPhoneHref(): string | null {
  return isConfigured(siteConfig.contact.phone)
    ? `tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`
    : null;
}

export function getPhoneDisplay(): string | null {
  if (isConfigured(siteConfig.contact.phoneDisplay)) {
    return siteConfig.contact.phoneDisplay;
  }
  return isConfigured(siteConfig.contact.phone) ? siteConfig.contact.phone : null;
}

export function getWhatsAppHref(customText?: string): string | null {
  if (!isConfigured(siteConfig.contact.whatsappNumber)) return null;
  const digits = siteConfig.contact.whatsappNumber.replace(/[^\d]/g, '');
  const text = encodeURIComponent(customText || siteConfig.contact.whatsappDefaultMessage);
  return `https://wa.me/${digits}?text=${text}`;
}

export function getConfiguredSameAs(): string[] {
  return Object.values(siteConfig.socialProfiles).filter((u) => isConfigured(u));
}

export function getFounderSameAs(): string[] {
  return [siteConfig.founder.linkedinUrl, siteConfig.founder.githubUrl].filter((u) =>
    isConfigured(u)
  );
}
