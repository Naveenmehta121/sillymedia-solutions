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
    imageWebp: '/images/case-the-diets.svg',
    imageAvif: '/images/case-the-diets.svg',
    imageAlt: 'The Diets online dietitian website — 1:1 diet plans and consultation booking',
    imageTag: 'Online Dietitian · India',
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
