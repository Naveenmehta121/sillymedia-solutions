export interface FaqEntry {
  category: 'General' | 'Pricing & Process' | 'Local SEO & AI Search' | 'Automation & Tech';
  question: string;
  answer: string;
  featuredOnHome?: boolean;
}

export const faqsData: FaqEntry[] = [
  {
    category: 'General',
    question: 'Do you work with all types of businesses across Delhi NCR?',
    answer:
      'Yes. SillyMedia Solutions works with medical and dental clinics, retail and D2C brands, restaurants, real estate firms, coaching academies, B2B manufacturers, and technology startups across Delhi, Gurugram, Noida, Greater Noida, Faridabad, and Ghaziabad.',
    featuredOnHome: true,
  },
  {
    category: 'Pricing & Process',
    question: 'How long does a custom website or web app take from kickoff to launch?',
    answer:
      'A custom business website sprint typically takes 14 to 21 working days from scope sign-off and content readiness. Full-stack web applications, SaaS MVPs, and multi-workflow booking systems typically take 4 to 6 weeks.',
    featuredOnHome: true,
  },
  {
    category: 'Local SEO & AI Search',
    question: 'Can you help our business rank in the top 3 on Google Maps in our locality?',
    answer:
      'We apply an engineering-led local SEO methodology — optimizing your Google Business Profile, neighbourhood pages, Schema.org markup, and review workflows. While no ethical agency can guarantee a #1 Google rank, our focus is measurable growth in local visibility, phone calls, and direction clicks.',
    featuredOnHome: true,
  },
  {
    category: 'Pricing & Process',
    question: 'Do you provide ongoing technical support, hosting guidance, and updates?',
    answer:
      'Yes. You own your domain, hosting, and code outright with no forced lock-in. Optional monthly support sprints or direct WhatsApp developer assistance are available whenever you want continuous SEO tracking or feature updates.',
    featuredOnHome: true,
  },
  {
    category: 'Pricing & Process',
    question: 'What does pricing look like for an independent business versus a growing brand?',
    answer:
      'We work on transparent, fixed milestone fees rather than opaque retainers. Independent local businesses start with focused website or local SEO sprints, while SaaS MVPs and custom automation platforms are quoted cleanly per milestone after a free 20-minute technical call.',
    featuredOnHome: true,
  },
  {
    category: 'General',
    question: 'Who actually works on my project at SillyMedia Solutions?',
    answer:
      'You work directly with our senior engineers and digital marketing specialists. There are no middleman account managers or surprise handoffs to junior interns.',
  },
  {
    category: 'Local SEO & AI Search',
    question: 'How do you make my website show up in ChatGPT, Perplexity, and Google AI Overviews?',
    answer:
      'We ship server-rendered or static HTML so AI crawlers can read your content without JavaScript, write clear answer-first service and FAQ copy, implement valid JSON-LD structured data, and ensure your brand entity details stay consistent across your site and public profiles.',
  },
  {
    category: 'Automation & Tech',
    question: 'Is WhatsApp Business automation safe for our official business phone number?',
    answer:
      'Yes, when built on the official Meta WhatsApp Business Cloud API with opt-in flows and approved templates. We never use unofficial browser-scraping tools that risk getting numbers blocked.',
  },
  {
    category: 'Automation & Tech',
    question: 'Can you integrate our website forms with WhatsApp, Google Sheets, or our CRM?',
    answer:
      'Yes. Every contact form we build can capture UTM campaign parameters, deliver instant email/WhatsApp notifications, and push qualified leads into Google Sheets, Zoho, HubSpot, or a custom dashboard.',
  },
];

export const homeFaqs = faqsData.filter((f) => f.featuredOnHome);
