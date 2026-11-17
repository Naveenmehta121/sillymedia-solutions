export interface CaseStudy {
  slug: string;
  client: string;
  city: string;
  locationSlug: string;
  sector: string;
  badgeColor: 'orange' | 'green' | 'blue';
  title: string;
  metaTitle: string;
  metaDescription: string; // 140-160 chars
  summary: string;
  headlineMetric: string;
  headlineMetricLabel: string;
  metricVerificationNote: string;
  imageWebp: string;
  imageAvif: string;
  imageAlt: string;
  imageTag: string;
  timeline: string;
  servicesUsed: { slug: string; label: string }[];
  challenge: string[];
  approach: string[];
  results: string[];
  architectureStack: string[];
  // VERIFY: Existing client quote carried over from the original site; confirm written permission & wording
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: 'aura-luxe-fashion',
    client: 'Aura Luxe Fashion',
    city: 'Gurugram',
    locationSlug: 'gurugram',
    sector: 'Retail E-Commerce',
    badgeColor: 'orange',
    title: 'High-Speed Headless Storefront & Instant Mobile Catalog',
    metaTitle: 'Aura Luxe Fashion Case Study — Gurugram E-Commerce',
    metaDescription:
      'How SillyMedia Solutions engineered a fast headless storefront and streamlined UPI checkout for Aura Luxe Fashion in Gurugram.',
    summary:
      'Custom headless e-commerce architecture built for fast mobile catalog browsing and streamlined UPI checkout across DLF CyberCity and pan-India shoppers.',
    // VERIFY: Original site listed "+3.8x checkout conversion rate" and "0.34s Load" — verify exact analytics timeframe & numbers
    headlineMetric: '+3.8x',
    headlineMetricLabel: 'Client-reported checkout conversion lift',
    metricVerificationNote:
      'Outcome reported from the original deployment scope; detailed walkthrough and architecture review available on discovery calls.',
    imageWebp: '/images/hero-showcase-960.webp',
    imageAvif: '/images/hero-showcase-960.avif',
    imageAlt: 'Aura Luxe Fashion headless storefront interface showcase',
    imageTag: 'Headless Storefront · Gurugram',
    timeline: '3 weeks', // VERIFY: Original testimonial mentions "3 weeks"
    servicesUsed: [
      { slug: 'custom-websites', label: 'Custom Websites' },
      { slug: 'web-apps-saas', label: 'Web Apps & SaaS' },
    ],
    challenge: [
      'A heavy template storefront created sluggish product browsing on mobile 4G networks, leading to high bounce rates from paid social and local search traffic.',
      'Multi-step checkout friction slowed down Indian mobile shoppers who prefer fast UPI checkout.',
    ],
    approach: [
      'Engineered a lightweight headless storefront with pre-rendered category and product views, responsive WebP/AVIF imagery, and minimal client-side JavaScript.',
      'Streamlined product discovery, variant selection, and mobile cart-to-UPI checkout flow to reduce taps before payment.',
      'Structured clean product metadata and technical SEO tags for improved organic discoverability.',
    ],
    results: [
      'Significantly faster mobile page loads across 4G connections compared to the legacy theme setup.',
      'Client-reported +3.8x improvement in checkout conversion following launch.', // VERIFY
      'Launched end-to-end in 3 weeks with direct engineering from Naveen.', // VERIFY
    ],
    architectureStack: [
      'Headless Storefront Frontend',
      'Optimized WebP/AVIF Media Pipeline',
      'Streamlined Mobile UPI Checkout Flow',
      'Technical E-Commerce SEO Structure',
    ],
    // VERIFY: Confirm client name, role, and permission for public quote
    testimonial: {
      quote:
        'Our headless e-commerce store loads fast on 4G. Naveen built and launched the platform in 3 weeks.',
      author: 'Rohan Sethi',
      role: 'MD, Aura Luxe Apparel, DLF CyberCity',
    },
  },
  {
    slug: 'delhi-dental-care',
    client: 'Delhi Dental Care',
    city: 'South Delhi',
    locationSlug: 'delhi',
    sector: 'Healthcare',
    badgeColor: 'green',
    title: 'Automated Patient Booking System & South Delhi Local SEO',
    metaTitle: 'Delhi Dental Care Case Study — South Delhi Local SEO',
    metaDescription:
      'Automated patient consultation booking, WhatsApp reminders, and hyperlocal South Delhi Google Maps SEO for Delhi Dental Care in GK-1.',
    summary:
      'Combined hyperlocal Google Business Profile optimization, speciality treatment pages, and automated WhatsApp appointment reminders for a South Delhi clinic.',
    // VERIFY: Original site listed "+185% Patient Leads" and "#1 Local Google Pack" — verify exact analytics timeframe
    headlineMetric: '+185%',
    headlineMetricLabel: 'Client-reported organic consultation leads',
    metricVerificationNote:
      'Reported growth from combined local SEO and automated WhatsApp booking; individual clinic timelines vary by neighbourhood competition.',
    imageWebp: '/images/case-dental-care.webp',
    imageAvif: '/images/case-dental-care.avif',
    imageAlt: 'Delhi Dental Care South Delhi patient booking and local SEO case overview',
    imageTag: 'Local SEO & Booking · South Delhi',
    timeline: '90-day local growth sprint', // VERIFY: Original testimonial mentions "90 days"
    servicesUsed: [
      { slug: 'local-seo-google-maps', label: 'Local SEO & Google Maps' },
      { slug: 'whatsapp-automation', label: 'WhatsApp Automation' },
      { slug: 'custom-websites', label: 'Custom Websites' },
    ],
    challenge: [
      'High local search competition across Greater Kailash (GK-1) and South Delhi kept the clinic buried below aggregated directories on Google Maps.',
      'Front-desk staff manually handled phone and WhatsApp follow-ups, causing missed after-hours inquiries and appointment no-shows.',
    ],
    approach: [
      'Restructured the website with fast treatment-specific pages, clean LocalBusiness schema, and clear South Delhi locality signals.',
      'Audited and optimized the Google Business Profile categories, services, photo cadence, and ethical patient review flow.',
      'Built an automated appointment intake and WhatsApp confirmation/reminder sequence so incoming leads received instant responses.',
    ],
    results: [
      'Stronger Google Maps visibility across target South Delhi and GK-1 dental queries.', // VERIFY: Original claimed "page 4 to #1"
      'Client-reported +185% increase in organic patient consultation leads.', // VERIFY
      'Lower front-desk overhead via automated booking confirmations and reminders.',
    ],
    architectureStack: [
      'Pre-rendered Treatment & Locality Pages',
      'Google Business Profile Optimization',
      'Automated WhatsApp Intake & Reminders',
      'Call & Booking Conversion Tracking',
    ],
    // VERIFY: Confirm client name, role, and permission for public quote
    testimonial: {
      quote:
        'Naveen helped our clinic climb local search in South Delhi and streamlined our monthly consultation bookings.',
      author: 'Dr. Anjali Sharma',
      role: 'Founder, Delhi Dental Care, GK-1',
    },
  },
  {
    slug: 'finops-india',
    client: 'FinOps India',
    city: 'Noida Sector 62',
    locationSlug: 'noida',
    sector: 'Fintech SaaS',
    badgeColor: 'blue',
    title: 'B2B Financial Dashboard & Automated GST Reconciliation Flow',
    metaTitle: 'FinOps India Case Study — Noida Fintech SaaS MVP',
    metaDescription:
      'Multi-tenant B2B financial dashboard with automated GST reconciliation and audit reporting built for FinOps India in Noida Sector 62 in 4 weeks.',
    summary:
      'Production B2B web application with multi-tenant authentication, GST reconciliation workflows, and structured audit reporting delivered in a 4-week sprint.',
    // VERIFY: Confirm 4-week timeline & scope details
    headlineMetric: '4 Weeks',
    headlineMetricLabel: 'Kickoff to production MVP launch',
    metricVerificationNote:
      'Delivered as a fixed-scope milestone sprint with clean TypeScript architecture ready for internal team extension.',
    imageWebp: '/images/case-finops-india.webp',
    imageAvif: '/images/case-finops-india.avif',
    imageAlt: 'FinOps India Noida Sector 62 B2B financial dashboard case overview',
    imageTag: 'B2B SaaS MVP · Noida Sector 62',
    timeline: '4 weeks', // VERIFY
    servicesUsed: [
      { slug: 'web-apps-saas', label: 'Web Apps & SaaS MVPs' },
    ],
    challenge: [
      'Finance teams relied on brittle spreadsheet workflows for GST reconciliation and client audit reporting, slowing monthly close cycles.',
      'The startup needed a production-ready multi-tenant web application quickly without burning months on a bloated agency discovery phase.',
    ],
    approach: [
      'Scoped a crisp 4-week engineering sprint covering relational schema design, role-based multi-tenant access control, and core reconciliation views.',
      'Implemented automated GST validation flows, exportable audit reports, and responsive data tables using strict TypeScript.',
      'Delivered clean repository documentation and deployment pipelines so internal engineers could extend features seamlessly.',
    ],
    results: [
      'Production B2B SaaS platform launched in 4 weeks.', // VERIFY
      'Automated GST reconciliation and audit reporting workflows replacing manual spreadsheet assembly.',
      'Clean, maintainable TypeScript codebase handed over with zero vendor lock-in.',
    ],
    architectureStack: [
      'TypeScript Full-Stack Web App',
      'Multi-Tenant Role-Based Auth',
      'Automated GST Reconciliation Engine',
      'Structured Audit Reporting Exports',
    ],
    // VERIFY: Confirm client name, role, and permission for public quote
    testimonial: {
      quote:
        'Clean engineering and zero agency bloat. Naveen writes scalable code and communicates with total clarity.',
      author: 'Vikram Malhotra',
      role: 'CTO, FinOps India, Noida',
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find((c) => c.slug === slug);
}

// Products section items (renamed from "Lab" -> "Products" per Phase 1)
export const productsData = [
  {
    name: 'LocalRanker NCR',
    category: 'Geo Tracking',
    status: 'BETA',
    color: 'green' as const,
    description:
      'Geo-grid visibility tracker built in-house to monitor Google Business Profile presence across Delhi NCR pin codes.',
  },
  {
    name: 'WhatsDesk Pro',
    category: 'WhatsApp Engine',
    status: 'LIVE',
    color: 'orange' as const,
    description:
      'WhatsApp intake and lead routing toolkit connecting website forms, booking flows, and CRM updates for NCR clinics and service teams.',
  },
  {
    name: 'DocuFlow AI',
    category: 'Vernacular AI',
    status: 'PILOT',
    color: 'blue' as const,
    description:
      'Document intake and multilingual summarization assistant piloted for healthcare and legal inquiry workflows.',
  },
  {
    name: 'SiteSpeed Turbo',
    category: 'Performance',
    status: 'LIVE',
    color: 'dark' as const,
    description:
      'Automated asset and font optimization workflow engineered to keep client builds consistently scoring 90+ on mobile Core Web Vitals.',
  },
];
