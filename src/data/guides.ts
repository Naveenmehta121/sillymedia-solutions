export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideTable {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface GuideSource {
  label: string;
  url: string;
}

export interface GuideItem {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  // SEO: short title (<=35 chars) used only in <title>/og:title so the full title stays under 60 chars.
  // metaTitle is kept for the visible breadcrumb label and WhatsApp prefill text.
  seoTitle: string;
  metaDescription: string; // 140-160 chars
  datePublished: string;
  dateModified: string;
  readingTime: string;
  coreQuestion: string;
  directAnswer: string; // 40-60 words
  sections: GuideSection[];
  comparisonTable: GuideTable;
  sources: GuideSource[];
  relatedServiceSlugs: string[];
  relatedLocationSlugs: string[];
  faqs: { question: string; answer: string }[];
}

export const guidesData: GuideItem[] = [
  {
    slug: 'website-cost-delhi-ncr',
    eyebrow: 'BUYER GUIDE · WEBSITE PRICING',
    title: 'Website Development Cost in Delhi NCR: What Actually Drives the Price?',
    metaTitle: 'Website Development Cost in Delhi NCR — Complete Guide',
    seoTitle: 'Website Cost in Delhi NCR — Guide',
    metaDescription:
      'Understand what determines custom website development pricing in Delhi NCR, compare template vs custom Next.js builds, and spot hidden agency retainer traps.',
    datePublished: '2026-11-18',
    dateModified: '2026-11-18',
    readingTime: '6 min read',
    coreQuestion: 'What does website development cost in Delhi NCR and why do quotes vary widely?',
    directAnswer:
      'Website quotes in Delhi NCR vary sharply because agencies quote very different deliverables under the same label — from unoptimized drag-and-drop themes to custom pre-rendered web applications with local SEO and WhatsApp automation. Price depends on page architecture, custom engineering depth, integrations, and who actually writes the code.',
    // DATA NEEDED: Add verified INR bracket figures once confirmed in site.config.ts (PRICING_CONFIG)
    sections: [
      {
        heading: 'Why Do Two Agencies in Delhi NCR Quote Wildly Different Prices for a Website?',
        paragraphs: [
          'When business owners in Delhi, Gurugram, or Noida ask for website quotes, one vendor may offer a low-cost site in three days while another quotes significantly higher for a 3-week build. The difference is rarely "design taste" — it is whether you are buying a generic theme install or an engineered commercial asset.',
          'Google’s Core Web Vitals documentation emphasizes fast Largest Contentful Paint (LCP), minimal layout shift (CLS), and responsive interactivity as practical indicators of user experience on mobile networks. Heavy multipurpose themes often fail those benchmarks out of the box, forcing businesses to rebuild within a year.',
        ],
        bullets: [
          'Page count & local SEO structure: A 1-page brochure differs completely from a multi-page site with dedicated service pages, NCR city pages, and Schema.org markup.',
          'Rendering architecture: Static or server-rendered HTML (such as Next.js) is readable immediately by Google and AI crawlers without waiting for heavy client JavaScript.',
          'Integrations: Click-to-call, WhatsApp Business API triggers, CRM lead sync, payment gateways (Razorpay/UPI), and booking calendars each add engineering scope.',
          'Ownership model: Some low upfront quotes lock your domain and hosting inside the agency’s account and charge recurring fees just to change a phone number.',
        ],
      },
      {
        heading: 'How Should You Compare Freelancers, Small Studios, and Large NCR Agencies?',
        paragraphs: [
          'Large digital agencies in Gurugram or South Delhi often carry layers of sales reps, account managers, and office overhead — yet often assign day-to-day build work to junior staff. Agile specialist agencies like SillyMedia Solutions remove those middleman layers so your budget goes directly into senior architecture, SEO, and speed.',
          'Before approving any quote, ask four direct questions: Do I own my domain and Git repository? Is the site pre-rendered HTML or a heavy template? Are local SEO metadata and Schema.org included? What is the exact milestone delivery schedule?',
        ],
      },
      {
        heading: 'What Ongoing Costs Exist After Your Website Launches?',
        paragraphs: [
          'A cleanly engineered static or Next.js website avoids costly plugin licensing and constant security patching. Your predictable recurring items are simply your domain renewal, managed hosting (often free or low-cost on platforms like Vercel for marketing sites), and any optional SEO or feature sprints you choose to run.',
        ],
        // DATA NEEDED: Insert typical annual hosting/domain maintenance estimate in INR if desired
        bullets: [
          'Domain name registration (.in or .com) billed directly to your registrar account.',
          'Hosting on modern edge platforms (Vercel, Netlify, or Cloudflare Pages) or a dedicated VPS if running heavy backend databases.',
          'Optional third-party API usage (Meta WhatsApp Business API templates, transactional email, or LLM APIs) billed transparently on your own accounts.',
        ],
      },
    ],
    comparisonTable: {
      caption: 'Website build models compared for Delhi NCR businesses',
      headers: ['Build Type', 'Typical Delivery', 'Crawlability & Speed', 'Best Fit'],
      rows: [
        [
          'Generic Template / Page Builder',
          '3–7 days',
          'Often heavy JS/CSS; mixed mobile Core Web Vitals',
          'Temporary placeholder only',
        ],
        [
          'Custom Pre-Rendered Business Site (Next.js)',
          '14–21 working days',
          'Full HTML in initial response; 90+ mobile Lighthouse target',
          'Clinics, showrooms, B2B firms, local NCR services',
        ],
        [
          'Headless Storefront / Custom Web App MVP',
          '4–6 weeks',
          'Engineered around API workflows, UPI checkout & auth',
          'D2C brands, Gurugram/Noida startups, SaaS teams',
        ],
      ],
    },
    sources: [
      {
        label: 'Google Search Central — Understanding Core Web Vitals and Google Search Results',
        url: 'https://developers.google.com/search/docs/appearance/core-web-vitals',
      },
      {
        label: 'Google Search Central — SEO Starter Guide',
        url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
      },
    ],
    relatedServiceSlugs: ['custom-websites', 'web-apps-saas'],
    relatedLocationSlugs: ['delhi', 'gurugram', 'noida'],
    faqs: [
      {
        question: 'Can I start with a lean website and add local SEO or WhatsApp automation later?',
        answer:
          'Yes. When the foundation is built cleanly on Next.js with modular components, adding city landing pages, booking forms, or WhatsApp Business API triggers later does not require rebuilding the site.',
      },
      {
        question: 'How do I get an exact website quote from SillyMedia Solutions?',
        answer:
          'Book a free 20-minute review with our team via our contact form. Once we review your page count, localities, and required integrations, you receive a fixed milestone quote with zero hidden fees.',
      },
    ],
  },
  {
    slug: 'rank-on-google-maps-gurugram',
    eyebrow: 'LOCAL SEO PLAYBOOK · GURUGRAM',
    title: 'How to Rank on Google Maps in Gurugram: A Technical Local SEO Playbook',
    metaTitle: 'How to Rank on Google Maps in Gurugram (Local SEO Guide)',
    seoTitle: 'Rank on Google Maps in Gurugram',
    metaDescription:
      'Step-by-step Google Maps and local SEO playbook for Gurugram clinics, studios, and businesses across Cyber Hub, Golf Course Road, and Sohna Road.',
    datePublished: '2026-11-18',
    dateModified: '2026-11-18',
    readingTime: '7 min read',
    coreQuestion: 'What actually determines Google Maps rankings for a business in Gurugram?',
    directAnswer:
      'According to Google’s official Business Profile documentation, local Map Pack rankings are driven by three core factors: relevance (how well your profile and website match the query), distance (proximity to the searcher in Gurugram), and prominence (authentic customer reviews, local links, and web authority). Consistent technical execution beats shortcuts.',
    // DATA NEEDED: Add Gurugram geo-grid / LocalRanker NCR benchmark observations once confirmed with client-cleared numbers
    sections: [
      {
        heading: 'How Does Google Decide Who Appears in the Gurugram 3-Pack?',
        paragraphs: [
          'In Gurugram, proximity shifts rapidly from one sector to the next — a search for a dental clinic or interior studio near Galleria Market (DLF Phase 4) produces a different Map Pack than the same search on Sohna Road or in Sector 56. While you cannot change your physical pin, you directly control relevance and prominence.',
          'Google’s local ranking guidelines explicitly warn against keyword-stuffing business names or creating fake virtual offices, both of which frequently trigger profile suspensions in competitive NCR markets.',
        ],
        bullets: [
          'Primary category accuracy: Pick the single most specific Google Business Profile category that describes your core revenue service.',
          'Complete service menu & attributes: Populate real services, clear business hours, authentic interior/team photography, and accurate service areas.',
          'NAP consistency: Ensure your business name, phone number, and address match verbatim across your website footer, JSON-LD schema, and directory listings.',
        ],
      },
      {
        heading: 'Why Does Your Website Matter for Google Maps Visibility?',
        paragraphs: [
          'Your Google Business Profile does not rank in isolation. Google crawls the website linked from your profile to verify what treatments, products, or B2B services you genuinely offer and which Gurugram neighbourhoods you serve.',
          'Linking your GBP to a fast, pre-rendered page with clear service headings, verified LocalBusiness JSON-LD, and frictionless click-to-call / WhatsApp triggers strengthens both organic rankings and call conversion rate.',
        ],
      },
      {
        heading: 'How Should Gurugram Businesses Build Authentic Review Velocity?',
        paragraphs: [
          'A steady trickle of detailed, authentic customer reviews every week outperforms sudden spikes — and never buy fake reviews, which violates Google’s policies and erodes buyer trust.',
        ],
        // DATA NEEDED: Add verified client review-flow conversion rate once measured
        bullets: [
          'Send a direct Google review link via WhatsApp right after a positive appointment, delivery, or consultation.',
          'Place a clean review QR stand at your clinic reception or showroom checkout.',
          'Reply professionally to every review (positive and critical) referencing the service provided without sounding robotic.',
        ],
      },
    ],
    comparisonTable: {
      caption: 'Google Maps Local SEO Checklist for Gurugram Businesses',
      headers: ['Signal Pillar', 'High-Impact Actions', 'Common Mistakes to Avoid'],
      rows: [
        [
          'Relevance',
          'Exact primary category, complete services list, matching website service pages',
          'Stuffing extra city keywords into your legal business name',
        ],
        [
          'Prominence',
          'Steady authentic reviews, local press/directory citations, structured website authority',
          'Buying fake reviews or ignoring unanswered customer feedback',
        ],
        [
          'Conversion',
          'Fast mobile website, click-to-call, prefilled WhatsApp booking, fresh real photos',
          'Linking GBP to a slow homepage with broken mobile forms',
        ],
      ],
    },
    sources: [
      {
        label: 'Google Business Profile Help — Tips to Improve Your Local Ranking on Google',
        url: 'https://support.google.com/business/answer/7091',
      },
      {
        label: 'Google Business Profile Help — Guidelines for Representing Your Business on Google',
        url: 'https://support.google.com/business/answer/3038177',
      },
    ],
    relatedServiceSlugs: ['local-seo-google-maps', 'custom-websites'],
    relatedLocationSlugs: ['gurugram', 'delhi', 'noida'],
    faqs: [
      {
        question: 'Does adding "Gurugram" to my Google Business Profile name help me rank faster?',
        answer:
          'Only if "Gurugram" is genuinely part of your legal/signage business name. Adding extra keywords violates Google Business Profile guidelines and risks suspension.',
      },
      {
        question: 'How often should a Gurugram business update its Google Business Profile?',
        answer:
          'Aim to reply to new reviews within 48 hours, upload fresh authentic photos monthly, and keep holiday hours, services, and website links continuously up to date.',
      },
    ],
  },
  {
    slug: 'whatsapp-automation-clinics-delhi',
    eyebrow: 'AUTOMATION GUIDE · HEALTHCARE DELHI',
    title: 'WhatsApp Automation for Clinics in Delhi: Architecture & Compliance Guide',
    metaTitle: 'WhatsApp Automation for Clinics in Delhi — Practical Guide',
    seoTitle: 'WhatsApp for Delhi Clinics',
    metaDescription:
      'How Delhi clinics automate patient appointment booking, intake, and reminders using the official Meta WhatsApp Business Cloud API without risking number bans.',
    datePublished: '2026-11-18',
    dateModified: '2026-11-18',
    readingTime: '6 min read',
    coreQuestion: 'How can medical and dental clinics in Delhi automate patient bookings on WhatsApp safely?',
    directAnswer:
      'Clinics in Delhi automate patient intake and appointment reminders safely by running workflows on the official Meta WhatsApp Business Cloud API rather than unofficial browser plugins. Patients click a WhatsApp button from Google Maps or your website, choose a consultation slot, receive instant confirmation, and escalate to reception whenever clinical questions arise.',
    // DATA NEEDED: Add verified Delhi clinic no-show reduction / response-time stats once collected with documented metrics
    sections: [
      {
        heading: 'Why Do Delhi Clinics Lose Appointments on WhatsApp Today?',
        paragraphs: [
          'Patients searching across South Delhi, Dwarka, Rohini, or West Delhi routinely message two or three clinics on WhatsApp between meetings or late in the evening. When a reception desk only replies the next morning, many patients have already booked elsewhere.',
          'Manual reminder messages also consume hours of staff time every week and get skipped on busy clinic days, increasing appointment no-shows.',
        ],
      },
      {
        heading: 'What Should a Clinic Automate — and What Should Stay Human?',
        paragraphs: [
          'Effective healthcare automation handles logistics cleanly while never attempting medical diagnosis. Clear boundaries protect both patient trust and clinical responsibility.',
        ],
        bullets: [
          'Automate: Clinic timings, exact Google Maps location pin, consultation booking requests, slot confirmations, and 24-hour / 2-hour appointment reminders.',
          'Automate: Post-visit feedback prompt with a direct link to leave a Google review.',
          'Keep Human: Clinical symptoms, treatment advice, prescription questions, and urgent rescheduling — routed immediately to your front desk or doctor coordinator.',
        ],
      },
      {
        heading: 'How Does Official WhatsApp Business Cloud API Compliance Work?',
        paragraphs: [
          'Meta’s WhatsApp Business Platform requires verified business accounts, opt-in messaging for proactive outreach, and pre-approved utility templates for appointment reminders. Using the official Cloud API protects your clinic phone number from abrupt bans and gives transparent per-template billing directly from Meta.',
          'Patient privacy also matters: minimize storing sensitive diagnostic details in unsecured spreadsheets and restrict access to authorized clinic staff.',
        ],
      },
    ],
    comparisonTable: {
      caption: 'Manual WhatsApp vs Official Cloud API Automation for Delhi Clinics',
      headers: ['Workflow Stage', 'Manual Front-Desk WhatsApp', 'Official Cloud API Workflow'],
      rows: [
        [
          'After-Hours Inquiry (8 PM – 9 AM)',
          'Unanswered until next morning',
          'Instant greeting, treatment selection & preferred slot capture',
        ],
        [
          'Appointment Reminders',
          'Manually typed or frequently missed',
          'Automated approved utility reminder 24h & 2h before visit',
        ],
        [
          'Number Ban Risk',
          'High if bulk broadcasts sent via unofficial tools',
          'Compliant with Meta Business Platform policies',
        ],
        [
          'Staff Escalation',
          'Mixed inside personal/untracked chat history',
          'Structured summary handed straight to reception',
        ],
      ],
    },
    sources: [
      {
        label: 'Meta WhatsApp Business Platform — Official Cloud API Documentation',
        url: 'https://developers.facebook.com/docs/whatsapp/cloud-api',
      },
      {
        label: 'Meta WhatsApp Business Platform — Pricing & Template Categories',
        url: 'https://developers.facebook.com/docs/whatsapp/pricing',
      },
    ],
    relatedServiceSlugs: ['whatsapp-automation', 'local-seo-google-maps', 'ai-chatbots-agents'],
    relatedLocationSlugs: ['delhi', 'gurugram', 'noida'],
    faqs: [
      {
        question: 'Can a clinic keep its existing reception phone number for WhatsApp automation?',
        answer:
          'Yes, provided the number is migrated properly to the official WhatsApp Business Cloud API (or you can dedicate a clean clinic helpline number so staff continue using existing personal devices uninterrupted).',
      },
      {
        question: 'Does the WhatsApp bot give medical advice to patients?',
        answer:
          'No. We configure strict guardrails so automated flows only handle clinic logistics — timings, location pin, appointment booking, and reminders — and route clinical questions directly to your clinic staff.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): GuideItem | undefined {
  return guidesData.find((g) => g.slug === slug);
}
