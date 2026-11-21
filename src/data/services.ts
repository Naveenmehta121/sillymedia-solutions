export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceComparisonRow {
  dimension: string;
  sillyMedia: string;
  typicalAgency: string;
}

export interface ServiceItem {
  slug: string;
  number: string;
  eyebrow: string;
  shortName: string;
  name: string;
  metaTitle: string;
  metaDescription: string; // 140-160 chars
  accent: 'orange' | 'green' | 'blue';
  h1: string;
  coreQuestion: string;
  directAnswer: string; // 40-60 words answer-first summary
  definitionSentence: string;
  summary: string;
  ctaLabel: string;
  formServiceValue: string;
  pricingTierId: string;
  typicalTimeline: string;
  deliverables: string[];
  processSteps: { step: string; title: string; detail: string }[];
  comparisonTable: ServiceComparisonRow[];
  idealFor: string[];
  relatedWorkSlugs: string[];
  relatedLocationSlugs: string[];
  faqs: ServiceFaq[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: 'custom-websites',
    number: '01',
    eyebrow: 'SPEED & CONVERSION',
    shortName: 'Custom Websites',
    name: 'Custom Website Development in Delhi NCR',
    metaTitle: 'Custom Websites in Delhi NCR',
    metaDescription:
      'Custom Next.js and headless websites in Delhi NCR built by SillyMedia Solutions. Fast Core Web Vitals, clean local SEO structure, and WhatsApp lead capture.',
    accent: 'orange',
    h1: 'Custom Website Development in Delhi NCR',
    coreQuestion: 'What makes a custom business website convert in Delhi NCR?',
    directAnswer:
      'A high-converting website for a Delhi NCR business loads cleanly on mobile 4G networks, presents services and locality trust signals clearly, and makes calling or messaging on WhatsApp effortless. SillyMedia Solutions builds static and server-rendered custom websites in 14–21 working days with full code ownership and local SEO structure baked in.',
    definitionSentence:
      'Custom website development is the engineering of a tailored, pre-rendered web platform designed around a business’s conversion funnel, mobile speed, and search visibility rather than bloated drag-and-drop themes.',
    summary:
      'Fast, mobile-first custom websites and headless storefronts engineered to turn Delhi NCR search traffic into phone calls, WhatsApp chats, and store visits.',
    ctaLabel: 'Explore Websites',
    formServiceValue: 'Custom Website',
    pricingTierId: 'launch-website',
    typicalTimeline: '14–21 working days', // VERIFY
    deliverables: [
      'Server-rendered or static HTML pages so Google and AI crawlers read all content immediately',
      'Mobile-first responsive design matched to your brand with zero heavy theme bloat',
      'Local SEO architecture: unique titles, meta descriptions, canonicals, and Schema.org JSON-LD',
      'Click-to-call, prefilled WhatsApp triggers, and validated lead capture forms with UTM tracking',
      'Self-hosted or preloaded fonts and WebP/AVIF imagery tuned for 90+ mobile Core Web Vitals',
      'Complete Git repository handover — you own your domain, hosting account, and source code',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Commercial & Technical Discovery',
        detail:
          'A focused 20-minute consultation with our senior specialists to map your target NCR localities, customer objections, competitors, and required lead flows.',
      },
      {
        step: '02',
        title: 'Information Architecture & Copy Structure',
        detail:
          'We organize service pages, local landing pages, proof points, and direct CTAs so visitors and crawlers understand what you offer in seconds.',
      },
      {
        step: '03',
        title: 'Engineering & Performance Optimization',
        detail:
          'Built in TypeScript and Next.js with pre-rendered HTML, semantic landmarks, WebP/AVIF media, and zero layout shift.',
      },
      {
        step: '04',
        title: 'QA, Lighthouse Audit & Launch',
        detail:
          'We verify mobile Lighthouse scores, JSON-LD markup, Search Console sitemap submission, and live form delivery before handing over full access.',
      },
    ],
    comparisonTable: [
      {
        dimension: 'Initial HTML & Crawlability',
        sillyMedia: 'Pre-rendered static/SSR HTML visible without JS',
        typicalAgency: 'Heavy page builders or client-only JS templates',
      },
      {
        dimension: 'Who Builds Your Site',
        sillyMedia: 'Direct engineering with our senior specialists',
        typicalAgency: 'Handed off to junior theme installers',
      },
      {
        dimension: 'Code & Domain Ownership',
        sillyMedia: '100% owned by you in your repository',
        typicalAgency: 'Locked into proprietary retainers or shared accounts',
      },
      {
        dimension: 'Mobile Conversion Paths',
        sillyMedia: 'Sticky Call, WhatsApp, and UTM-tracked inquiry form',
        typicalAgency: 'Generic contact page buried in a menu',
      },
    ],
    idealFor: [
      'Clinics and diagnostic centres in South Delhi, Noida, and Gurugram',
      'D2C retail brands and showrooms upgrading from slow themes',
      'B2B firms, architects, legal practices, and advisory boutiques',
      'Hospitality venues, cafes, and coaching institutes targeting local searches',
    ],
    relatedWorkSlugs: ['the-diets'],
    relatedLocationSlugs: ['delhi', 'gurugram', 'noida'],
    faqs: [
      {
        question: 'How long does custom website development take at SillyMedia Solutions?',
        answer:
          'Most custom business websites take 14 to 21 working days from scope sign-off and content inputs to production launch. Multi-location platforms or headless e-commerce builds take 3 to 5 weeks depending on catalog and integrations.',
      },
      {
        question: 'Do I own the website code, domain, and hosting after launch?',
        answer:
          'Yes. You retain full ownership of your domain, hosting account, and Git source code with no mandatory lock-in retainer.',
      },
      {
        question: 'Why build with Next.js static/SSR instead of a standard WordPress template?',
        answer:
          'Pre-rendered Next.js sites ship clean HTML with minimal JavaScript, avoid plugin security patches, achieve higher mobile Core Web Vitals on Indian 4G networks, and make structured SEO markup straightforward to maintain.',
      },
      {
        question: 'Can you migrate our existing website without losing Google rankings?',
        answer:
          'Yes. We audit existing indexed URLs, preserve high-performing slugs, configure 301 redirects for changed paths, and carry over verified metadata and structured data during launch.',
      },
    ],
  },
  {
    slug: 'local-seo-google-maps',
    number: '02',
    eyebrow: 'LOCAL VISIBILITY',
    shortName: 'Local SEO & Google Maps',
    name: 'Hyperlocal SEO & Google Maps Ranking in Delhi NCR',
    metaTitle: 'Local SEO & Maps in Delhi NCR',
    metaDescription:
      'Hyperlocal SEO and Google Business Profile optimization across Delhi, Gurugram, Noida, Faridabad, and Ghaziabad. Technical SEO built for local map calls.',
    accent: 'green',
    h1: 'Hyperlocal SEO & Google Maps Ranking in Delhi NCR',
    coreQuestion: 'How do Delhi NCR businesses rank higher in Google Maps and local search?',
    directAnswer:
      'Ranking in Delhi NCR local search depends on three pillars: an accurately categorized and active Google Business Profile, genuinely helpful neighbourhood-specific website pages with consistent NAP details, and steady authentic customer reviews. SillyMedia Solutions pairs technical SEO with structured local architecture to grow map calls and direction clicks.',
    definitionSentence:
      'Hyperlocal SEO is the practice of aligning a business’s Google Business Profile, website locality signals, structured data, and real-world citations so nearby customers find it first on Google Search and Google Maps.',
    summary:
      'Technical local SEO and Google Business Profile engineering tailored to Delhi NCR commercial hubs such as South Delhi, Cyber Hub, Noida Sector 62, and Indirapuram.',
    ctaLabel: 'Review SEO Playbook',
    formServiceValue: 'Hyperlocal SEO & Google Maps',
    pricingTierId: 'local-seo-maps',
    typicalTimeline: 'Initial audit in 7 days; meaningful ranking movement varies by competition',
    deliverables: [
      'Full Google Business Profile audit: primary/secondary categories, services, Q&A, and photo cadence',
      'LocalBusiness / ProfessionalService JSON-LD linked cleanly to your visible site NAP and service areas',
      'Unique city and locality landing pages built around real neighbourhood search intent — never doorway spam',
      'Technical SEO cleanup: indexation, canonicals, sitemap.xml, internal linking, and Core Web Vitals',
      'Ethical customer review collection workflow (QR code + WhatsApp follow-up link) and response playbook',
      'Monthly tracking of map calls, website clicks, direction requests, and priority local keywords',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Local Baseline & Competitor Audit',
        detail:
          'We inspect your Google Business Profile, current map visibility across target NCR pin codes, technical crawl issues, and top local competitors.',
      },
      {
        step: '02',
        title: 'GBP & On-Site Entity Alignment',
        detail:
          'We tighten categories, business descriptions, service menus, NAP consistency, and schema markup so Google clearly connects your brand to each locality.',
      },
      {
        step: '03',
        title: 'Neighbourhood Content & Authority',
        detail:
          'We publish genuinely useful service-by-locality pages, local FAQs, and buyer guides answering the exact questions NCR searchers ask.',
      },
      {
        step: '04',
        title: 'Review Velocity & Monthly Iteration',
        detail:
          'We put a repeatable review request flow in place and refine pages using Google Search Console query data and GBP call insights.',
      },
    ],
    comparisonTable: [
      {
        dimension: 'Ranking Promises',
        sillyMedia: 'Transparent roadmap; no fake #1 guarantees',
        typicalAgency: 'Unrealistic "guaranteed #1 in 15 days" claims',
      },
      {
        dimension: 'Location Pages',
        sillyMedia: 'Unique neighbourhood guides & local FAQs per city',
        typicalAgency: 'Copy-pasted doorway pages swapping only city names',
      },
      {
        dimension: 'Technical Depth',
        sillyMedia: 'Direct Next.js, schema, and Core Web Vitals fixes',
        typicalAgency: 'PDF audit decks with no engineering execution',
      },
      {
        dimension: 'Reporting Metrics',
        sillyMedia: 'Phone calls, WhatsApp clicks, Search Console impressions',
        typicalAgency: 'Vanity keyword screenshots disconnected from leads',
      },
    ],
    idealFor: [
      'Dental, dermatology, eye, and orthopaedic clinics across Delhi NCR',
      'Salons, gyms, cafes, restaurants, and local retail showrooms',
      'Home services, interior designers, architects, and real estate consultants',
      'Coaching centres, diagnostic labs, and multi-branch NCR businesses',
    ],
    relatedWorkSlugs: ['the-diets'],
    relatedLocationSlugs: ['delhi', 'gurugram', 'noida', 'ghaziabad', 'faridabad', 'greater-noida'],
    faqs: [
      {
        question: 'Can any agency guarantee a #1 ranking on Google Maps in Delhi NCR?',
        answer:
          'No ethical SEO specialist can guarantee a #1 rank because Google’s local algorithm weighs proximity to the searcher, category competition, and review velocity. We focus on controllable engineering, GBP hygiene, local content depth, and measurable growth in calls and inquiries.',
      },
      {
        question: 'How long does local SEO take to show results in competitive hubs like South Delhi or Gurugram?',
        answer:
          'Technical fixes and Google Business Profile optimization typically improve impressions within 4 to 8 weeks, while competitive top-3 map placement in dense hubs like South Delhi or Cyber Hub generally requires 3 to 6 months of consistent execution.',
      },
      {
        question: 'Do we need a physical address in every NCR city to rank there?',
        answer:
          'Google Maps strongly favours verified physical locations for map-pack results. If you operate from one office and serve all of Delhi NCR, we pair your verified GBP with honest service-area settings and strong organic city landing pages.',
      },
      {
        question: 'Does local SEO also help our business appear in ChatGPT, Perplexity, and Google AI Overviews?',
        answer:
          'Yes. Clear entity naming, structured JSON-LD, answer-first service pages, and consistent third-party profiles make it significantly easier for AI search systems to cite and recommend your business.',
      },
    ],
  },
  {
    slug: 'whatsapp-automation',
    number: '03',
    eyebrow: 'ZERO LEAD DROP-OFF',
    shortName: 'WhatsApp Automation',
    name: 'WhatsApp Automation & CRM Workflows in Delhi NCR',
    metaTitle: 'WhatsApp Automation in Delhi NCR',
    metaDescription:
      'Automate appointment booking, lead qualification, and follow-ups on WhatsApp for clinics and local businesses across Delhi NCR — on the official Meta API.',
    accent: 'orange',
    h1: 'WhatsApp Business Automation & Lead Workflows in Delhi NCR',
    coreQuestion: 'How does WhatsApp automation increase conversions for Delhi NCR businesses?',
    directAnswer:
      'Most Delhi NCR buyers prefer messaging on WhatsApp over filling long web forms, and leads cool off quickly if replies take hours. WhatsApp Business automation responds in seconds, captures key requirements, books consultation slots, sends reminders, and routes qualified prospects straight to your team or CRM.',
    definitionSentence:
      'WhatsApp Business automation connects the official WhatsApp Business Cloud API with your website forms, booking calendar, and CRM to handle instant replies, qualification, and reminders automatically.',
    summary:
      'Capture and qualify inquiries 24/7 on India’s primary messaging channel with automated intake, appointment reminders, and clean CRM handoffs.',
    ctaLabel: 'See WhatsApp Flows',
    formServiceValue: 'WhatsApp Automation & CRM Bots',
    pricingTierId: 'whatsapp-ai-automation',
    typicalTimeline: '2–3 weeks', // VERIFY
    deliverables: [
      'Official Meta WhatsApp Business Cloud API setup and template approval guidance',
      'Click-to-WhatsApp website triggers with prefilled service/locality context',
      'Automated lead qualification flows (service needed, locality, budget/timing)',
      'Appointment confirmation and reminder workflows for clinics and service teams',
      'Two-way sync into Google Sheets, HubSpot, Zoho, or custom web dashboards',
      'Instant human-agent escalation so our automated workflows never trap a serious buyer in a bot loop',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Inquiry Funnel Mapping',
        detail:
          'We review your last 30–50 real WhatsApp chats to identify repeated questions, drop-off points, and required booking details.',
      },
      {
        step: '02',
        title: 'Official API & Template Setup',
        detail:
          'We configure your Meta Business verification, phone number connection, and compliant message templates so your number stays safe.',
      },
      {
        step: '03',
        title: 'Workflow Engineering & CRM Sync',
        detail:
          'We build structured menu flows, webhook listeners, reminder schedules, and live lead logging into your existing CRM or sheet.',
      },
      {
        step: '04',
        title: 'Live Testing & Staff Handoff',
        detail:
          'Your front desk or sales team tests real escalation scenarios before going live, with clear documentation for day-to-day use.',
      },
    ],
    comparisonTable: [
      {
        dimension: 'API Compliance',
        sillyMedia: 'Official Meta WhatsApp Cloud API (ban-safe)',
        typicalAgency: 'Unofficial browser-scraping tools risking number bans',
      },
      {
        dimension: 'Human Handoff',
        sillyMedia: 'One-tap escalation to staff at any point',
        typicalAgency: 'Rigid bot loops that frustrate buyers',
      },
      {
        dimension: 'Website Integration',
        sillyMedia: 'Contextual triggers passing city, service & UTM data',
        typicalAgency: 'Disconnected generic chat widget',
      },
      {
        dimension: 'Recurring SaaS Markup',
        sillyMedia: 'Direct Meta billing + transparent build fee',
        typicalAgency: 'Inflated per-message markups and locked subscriptions',
      },
    ],
    idealFor: [
      'Medical and dental clinics managing daily appointment bookings and reminders',
      'Real estate brokers and builders qualifying site-visit inquiries',
      'Coaching institutes handling batch schedules, fees, and demo class bookings',
      'D2C retail brands sending order updates, catalog links, and repeat offers',
    ],
    relatedWorkSlugs: [],
    relatedLocationSlugs: ['delhi', 'gurugram', 'noida', 'faridabad'],
    faqs: [
      {
        question: 'Will WhatsApp automation risk getting our business number banned?',
        answer:
          'Not when built properly on the official Meta WhatsApp Business Cloud API with opt-in user conversations and approved utility templates. We never use unofficial browser-automation hacks.',
      },
      {
        question: 'Can our receptionists or sales staff still reply manually on WhatsApp?',
        answer:
          'Yes. Automated flows handle initial greeting, basic FAQs, and intake details, then assign the conversation to your team with a clean summary for personal follow-up.',
      },
      {
        question: 'Can WhatsApp automation connect to our existing website form and CRM?',
        answer:
          'Yes. When a visitor submits your website inquiry form, we can automatically log the lead in your CRM and send an immediate WhatsApp acknowledgement or appointment link.',
      },
      {
        question: 'Does Meta charge per conversation on the WhatsApp Business API?',
        answer:
          'Meta’s pricing distinguishes between user-initiated service conversations (which include free entry windows) and business-initiated marketing/utility templates billed directly by Meta at India rates. We walk you through exact Meta costs before setup.',
      },
    ],
  },
  {
    slug: 'web-apps-saas',
    number: '04',
    eyebrow: 'PRODUCT ENGINEERING',
    shortName: 'Web Apps & SaaS MVPs',
    name: 'Full-Stack Web Apps & SaaS MVP Development in Delhi NCR',
    metaTitle: 'Web Apps & SaaS MVPs in Delhi NCR',
    metaDescription:
      'Full-stack TypeScript, Next.js, and Postgres web apps and SaaS MVPs built in Delhi NCR — auth, payments, dashboards, APIs and integrations included.',
    accent: 'blue',
    h1: 'Web Applications & Full-Stack SaaS MVPs in Delhi NCR',
    coreQuestion: 'How fast can a Delhi NCR startup or SME launch a production web app MVP?',
    directAnswer:
      'A focused, production-ready web application or B2B SaaS MVP typically launches in 4 to 6 weeks when scope is disciplined around core user workflows. SillyMedia Solutions engineers full-stack TypeScript applications with authentication, role-based dashboards, UPI/payment integrations, and maintainable database schemas without agency overhead.',
    definitionSentence:
      'Full-stack web application engineering covers frontend UX, backend APIs, relational databases, authentication, and cloud deployment required to operate a custom digital product or internal business platform.',
    summary:
      'From validated concept to production web app in 4–6 weeks — built for Gurugram/Noida startups, B2B teams, and SMEs automating operations.',
    ctaLabel: 'Explore App Engineering',
    formServiceValue: 'Web App / SaaS MVP',
    pricingTierId: 'custom-webapp-saas',
    typicalTimeline: '4–6 weeks for MVP launch', // VERIFY
    deliverables: [
      'Clean TypeScript full-stack codebase (Next.js App Router, Node.js, PostgreSQL / Supabase)',
      'Role-based authentication, multi-tenant data isolation, and row-level security',
      'Operational dashboards, booking engines, GST/invoice exports, or customer portals',
      'Payment gateway integration (Razorpay / Stripe / UPI) and webhook reliability',
      'Automated builds, error logging, and staging/production deployment on Vercel or cloud VPS',
      'Clear architecture documentation so an in-house developer can extend the codebase later',
    ],
    processSteps: [
      {
        step: '01',
        title: 'PRD & Architecture Scoping',
        detail:
          'We distill your product into a ruthless V1 scope — defining database entities, user roles, critical screens, and milestone dates.',
      },
      {
        step: '02',
        title: 'Core Data Model & Interactive Prototype',
        detail:
          'Week 1–2 establishes database schemas, auth flows, and clickable core screens so you validate UX early.',
      },
      {
        step: '03',
        title: 'Integrations & Edge-Case Hardening',
        detail:
          'Week 3–4 wires payments, webhooks, PDF/CSV exports, validation rules, and mobile responsiveness.',
      },
      {
        step: '04',
        title: 'Production Launch & Handover',
        detail:
          'Security checks, load sanity testing, monitoring setup, and clean Git repository handover with onboarding walkthrough.',
      },
    ],
    comparisonTable: [
      {
        dimension: 'Engineering Model',
        sillyMedia: 'Senior full-stack engineering team',
        typicalAgency: 'Layered PMs and rotating junior contractors',
      },
      {
        dimension: 'MVP Time-to-Launch',
        sillyMedia: '4–6 week milestone sprints with weekly demos',
        typicalAgency: '3–6 month open-ended discovery & billing cycles',
      },
      {
        dimension: 'Code Maintainability',
        sillyMedia: 'Strict TypeScript, clean SQL migrations, zero lock-in',
        typicalAgency: 'Spaghetti boilerplate hard for future hires to own',
      },
      {
        dimension: 'Post-Launch Flexibility',
        sillyMedia: 'Optional sprint support or seamless in-house handover',
        typicalAgency: 'Mandatory long-term maintenance retainers',
      },
    ],
    idealFor: [
      'Seed-stage founders in Gurugram and Noida launching a SaaS MVP',
      'B2B service and finance firms replacing spreadsheet workflows with web portals',
      'Multi-branch healthcare, logistics, or education businesses needing custom booking/CRM tools',
      'D2C brands needing headless storefronts or custom configurators',
    ],
    relatedWorkSlugs: [],
    relatedLocationSlugs: ['gurugram', 'noida', 'delhi', 'greater-noida'],
    faqs: [
      {
        question: 'What tech stack do you recommend for most SaaS MVPs and web apps?',
        answer:
          'For most B2B web apps and SaaS products, we recommend Next.js with TypeScript, PostgreSQL (managed via Supabase or Neon), Tailwind CSS, and deployment on Vercel or AWS/Railway. It is fast to build, easy to hire for in India, and scales cleanly.',
      },
      {
        question: 'Can you integrate Indian payment gateways like Razorpay and UPI?',
        answer:
          'Yes. We routinely integrate Razorpay, Cashfree, and Stripe with verified server-side webhooks, subscription billing, and GST-ready invoice generation.',
      },
      {
        question: 'How do you handle intellectual property and source code ownership?',
        answer:
          'You own 100% of the source code, intellectual property, cloud accounts, and database from day one upon milestone settlement.',
      },
      {
        question: 'What if we already have an in-house designer or backend team?',
        answer:
          'We integrate smoothly with existing Figma designs or API teams, working via Git pull requests and structured weekly milestones.',
      },
    ],
  },
  {
    slug: 'ai-chatbots-agents',
    number: '05',
    eyebrow: 'PRACTICAL AI ENGINEERING',
    shortName: 'AI Chatbots & Agents',
    name: 'Custom AI Chatbots & Workflow Agents in Delhi NCR',
    metaTitle: 'AI Chatbots & Agents in Delhi NCR',
    metaDescription:
      'Grounded custom AI chatbots, multilingual English/Hindi support assistants, and internal workflow agents built for Delhi NCR businesses by SillyMedia Solutions.',
    accent: 'green',
    h1: 'Custom AI Chatbots & Workflow Agents for Delhi NCR Teams',
    coreQuestion: 'Where do custom AI chatbots actually deliver ROI for Indian businesses?',
    directAnswer:
      'Custom AI assistants deliver real ROI when grounded in your verified business documents — answering repetitive product, clinic, or policy questions in English and Hinglish, summarizing intake documents, and drafting CRM entries without hallucinating prices or promises. SillyMedia Solutions builds guardrailed AI agents connected directly to your website, WhatsApp, and internal tools.',
    definitionSentence:
      'A grounded AI agent is a software assistant powered by large language models and retrieval over your private knowledge base, constrained by strict guardrails and connected to your business tools.',
    summary:
      'Guardrailed multilingual customer assistants, document intake summarizers, and internal workflow automation built for reliability rather than hype.',
    ctaLabel: 'Inspect AI Solutions',
    formServiceValue: 'AI Chatbot / Voice Agent',
    pricingTierId: 'custom-webapp-saas',
    typicalTimeline: '2–4 weeks depending on integrations', // VERIFY
    deliverables: [
      'Knowledge-base retrieval (RAG) grounded strictly in your approved PDFs, FAQs, and catalogs',
      'Multilingual support across English, Hindi, and Hinglish customer queries',
      'Strict guardrails: automatic escalation to a human when confidence is low or pricing is custom',
      'Website widget, WhatsApp Business integration, or internal Slack/dashboard interface',
      'Document intake summarization for clinics, legal practices, and B2B operations',
      'Transparent LLM API billing directly on your own provider account with cost caps',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Use-Case Feasibility & Guardrail Design',
        detail:
          'We separate tasks suited to deterministic workflows from tasks where an LLM adds real speed — preventing unnecessary AI cost or risk.',
      },
      {
        step: '02',
        title: 'Knowledge Curation & Prompt Engineering',
        detail:
          'We structure your service catalog, policies, and FAQs into clean indexed chunks with citation and fallback rules.',
      },
      {
        step: '03',
        title: 'Channel Integration & Evaluation Suite',
        detail:
          'We connect web/WhatsApp/CRM endpoints and test against 50+ real customer queries, edge cases, and adversarial prompts.',
      },
      {
        step: '04',
        title: 'Monitoring & Continuous Refinement',
        detail:
          'Conversation logs highlight unanswered customer questions so your team can update the knowledge base in minutes.',
      },
    ],
    comparisonTable: [
      {
        dimension: 'Hallucination Control',
        sillyMedia: 'Strict retrieval grounding + human fallback rules',
        typicalAgency: 'Unconstrained prompt wrappers inventing answers',
      },
      {
        dimension: 'Language Fit for NCR',
        sillyMedia: 'Tested across English, Hindi, and natural Hinglish',
        typicalAgency: 'English-only generic templates',
      },
      {
        dimension: 'API Cost Transparency',
        sillyMedia: 'Runs on your own API keys with usage caps',
        typicalAgency: 'Opaque SaaS markup per seat or message',
      },
      {
        dimension: 'Data Privacy',
        sillyMedia: 'Minimized PII handling and clear retention controls',
        typicalAgency: 'Unverified third-party no-code embeds',
      },
    ],
    idealFor: [
      'Clinics and hospitals streamlining patient FAQ and intake summarization',
      'Legal, CA, and consulting practices reviewing structured client documents',
      'Education academies answering course, eligibility, and fee inquiries 24/7',
      'D2C and SaaS teams reducing repetitive tier-1 support tickets',
    ],
    relatedWorkSlugs: [],
    relatedLocationSlugs: ['gurugram', 'noida', 'delhi'],
    faqs: [
      {
        question: 'How do you stop an AI chatbot from giving wrong prices or medical/legal advice?',
        answer:
          'We restrict the assistant to an approved knowledge base, enforce deterministic rules for sensitive topics, and trigger an immediate handover to your staff whenever a question falls outside verified answers.',
      },
      {
        question: 'Can the AI assistant understand Hindi and Hinglish inquiries?',
        answer:
          'Yes. Modern foundation models handle English, Devanagari Hindi, and Romanized Hinglish accurately when prompted and tested with real Delhi NCR customer phrasing.',
      },
      {
        question: 'Can an AI chatbot work inside WhatsApp as well as on our website?',
        answer:
          'Yes. We can deploy the same grounded assistant on your website chat widget and your official WhatsApp Business Cloud API number with shared CRM logging.',
      },
      {
        question: 'Do we need a large dataset to get started with a custom AI assistant?',
        answer:
          'No. A clear 5–20 page service guide, FAQ document, and your recent customer questions are usually enough to launch a reliable first version.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}
