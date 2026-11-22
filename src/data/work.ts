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
  liveUrl?: string; // public URL of the client's live website (opens in a new tab)
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
    slug: 'the-diets',
    client: 'The Diets',
    city: 'Online · Pan-India',
    locationSlug: '',
    sector: 'Online Dietitian & Nutrition',
    badgeColor: 'green',
    title: 'Online Dietitian Consultations & 1:1 Diet Plans',
    metaTitle: 'The Diets — Online Dietitian',
    metaDescription:
      'How SillyMedia Solutions built and optimised thediets.in — an online dietitian platform with 1:1 diet plans, online consultations and transparent pricing.',
    summary:
      'Custom website for The Diets — an online dietitian platform offering 1:1 diet plans led by qualified dietitians, with online consultation booking and transparent plan pricing.',
    headlineMetric: '1:1',
    headlineMetricLabel: 'Personalised diet plans with online consultation',
    metricVerificationNote:
      'Plans, dietitians and pricing as published on thediets.in.',
    imageWebp: '/images/case-the-diets.webp',
    imageAvif: '/images/case-the-diets.webp',
    imageAlt: 'The Diets online dietitian website — 1:1 diet plans and consultation booking',
    imageTag: 'Online Dietitian · India',
    liveUrl: 'https://www.thediets.in',
    timeline: 'Ongoing',
    servicesUsed: [
      { slug: 'custom-websites', label: 'Custom Websites' },
      { slug: 'local-seo-google-maps', label: 'Local SEO & Google Maps' },
    ],
    challenge: [
      'People searching for diet plans face conflicting advice online and need a trustworthy place to book a qualified dietitian.',
      'The platform needed clear plan pages for PCOS, thyroid, weight loss and diabetes, with a simple path to book an online consultation.',
    ],
    approach: [
      'Built a fast, pre-rendered website with dedicated pages for PCOS, weight-loss, diabetes and thyroid diet plans.',
      'Added a clear online consultation flow with transparent plan pricing and WhatsApp contact options.',
      'Structured clean diet-plan metadata and technical SEO so the right plan pages surface for the right searches.',
    ],
    results: [
      'Dedicated plan pages for PCOS, thyroid, weight loss and diabetes care.',
      'Online consultation booking with transparent pricing published on the site.',
      'Fast mobile pages built for search visibility and direct consultation enquiries.',
    ],
    architectureStack: [
      'Pre-rendered diet-plan pages',
      'Online consultation flow',
      'Transparent plan pricing',
      'Technical SEO structure',
    ],
  },
  {
    slug: 'sillymedia',
    client: 'SillyMedia',
    city: 'Delhi NCR',
    locationSlug: 'delhi',
    sector: 'Digital Marketing Agency',
    badgeColor: 'blue',
    title: 'Restaurant & Hospitality Social Media Agency Website',
    metaTitle: 'SillyMedia — Agency Website',
    metaDescription:
      'How SillyMedia Solutions built sillymedia.co.in — the agency website for restaurant and hospitality brands, with client work, services and pricing.',
    summary:
      'The agency’s own website — a single-page site for restaurant and hospitality brands in Delhi NCR, showing client work, services, process, pricing and team.',
    headlineMetric: '20+',
    headlineMetricLabel: 'Brands transformed, as published on sillymedia.co.in',
    metricVerificationNote:
      'Stats (20+ brands, 150k+ growth, 90% average growth rate) as published on sillymedia.co.in.',
    imageWebp: '/images/case-sillymedia.webp',
    imageAvif: '/images/case-sillymedia.webp',
    imageAlt: 'SillyMedia agency website — restaurant and hospitality social media, Delhi NCR',
    imageTag: 'Agency Website · Delhi NCR',
    liveUrl: 'https://sillymedia.co.in',
    timeline: 'Ongoing',
    servicesUsed: [
      { slug: 'custom-websites', label: 'Custom Websites' },
    ],
    challenge: [
      'The agency needed one place to show its restaurant and hospitality work — client results, services, process, pricing and team — and turn visits into enquiries.',
      'Restaurant and bar brands judge an agency by its own site, so the site had to look as bold as the work it sells.',
    ],
    approach: [
      'Built a single-page agency site with a work portfolio, services, process, pricing and team sections, plus a contact path.',
      'Led with client stories — Bakoo Yaar, Delight Dining, Saga and Olives and Figs — each with what was delivered and the outcome.',
      'Put the agency’s published stats up front: 20+ brands transformed, 150k+ growth and a 90% average growth rate.',
    ],
    results: [
      'Live agency site with a named client portfolio and published outcomes for Delhi NCR restaurants and bars.',
      'Clear services, process and pricing sections with a direct contact path for new business.',
      'Stats-led credibility — 20+ brands, 150k+ growth, 90% average growth rate — as published on the site.',
    ],
    architectureStack: [
      'Single-page agency site',
      'Client portfolio',
      'Services & pricing sections',
      'Contact enquiry flow',
    ],
  },
  {
    slug: 'rajesh-paul-bridal-collection',
    client: 'Rajesh Paul Bridal Collection',
    city: 'Kolkata',
    locationSlug: '',
    sector: 'Bridal Couture',
    badgeColor: 'green',
    title: 'Heirloom Bridal Couture & Lehengas Website',
    metaTitle: 'Rajesh Paul — Bridal Couture',
    metaDescription:
      'How SillyMedia Solutions built the Rajesh Paul Bridal Collection website — heirloom lehengas and wedding couture, est. 1998, with an editorial gallery.',
    summary:
      'An editorial website for a heritage bridal couture house, est. 1998 — hand-embroidered lehengas and wedding couture, with a collections gallery and appointment booking.',
    headlineMetric: '1998',
    headlineMetricLabel: 'Heritage bridal couture house, est. 1998',
    metricVerificationNote:
      'Est. 1998 and Kolkata as published on the Rajesh Paul Bridal Collection website.',
    imageWebp: '/images/case-rajesh-paul.webp',
    imageAvif: '/images/case-rajesh-paul.webp',
    imageAlt: 'Rajesh Paul Bridal Collection website — heirloom lehengas and wedding couture',
    imageTag: 'Bridal Couture · Kolkata',
    liveUrl: 'https://rajesh-paul-bridal-collection-websi.vercel.app',
    timeline: 'Ongoing',
    servicesUsed: [
      { slug: 'custom-websites', label: 'Custom Websites' },
    ],
    challenge: [
      'A heritage bridal house needed an online showcase that carries the weight of heirloom craft — zardozi embroidery, hand-woven silks and bespoke fittings — not just a catalogue.',
      'Browsing had to lead somewhere: private appointments and WhatsApp enquiries, not a checkout.',
    ],
    approach: [
      'Built an editorial-style site around the brand story — from the bylanes of Chandni Chowk to the modern Indian bride — with a four-step craft process.',
      'Added a filterable collections gallery (8 editorial pieces across Bridal, Occasion Wear and Cocktail) with a piece-detail view.',
      'Kept the enquiry path personal: book-an-appointment and WhatsApp enquiry, plus maps and Instagram links.',
    ],
    results: [
      'Live editorial showcase with an 8-piece collections gallery across bridal, occasion wear and cocktail.',
      'Brand story and four-step craft process (zardozi, fabric study, drape & fitting, final styling) published on the site.',
      'Appointment booking and WhatsApp enquiries wired into every collection piece.',
    ],
    architectureStack: [
      'Editorial collections gallery',
      'Appointment booking',
      'WhatsApp enquiry',
      'Brand story & craft sections',
    ],
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
