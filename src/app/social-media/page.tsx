import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbSchema, buildFaqSchema } from '@/lib/schema';
import { siteConfig } from '@/config/site.config';

const pageTitle = 'Social Media Management, Delhi NCR';

export const metadata: Metadata = {
  title: pageTitle,
  description:
    'Social media management for restaurants, cafés and hospitality brands in Delhi NCR — Instagram, reels, Meta ads and influencers by SillyMedia.',
  alternates: { canonical: '/social-media' },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.brandName}`,
    description:
      'Social media management for restaurants, cafés and hospitality brands in Delhi NCR — Instagram, reels, Meta ads and influencers by SillyMedia.',
    url: `${siteConfig.siteUrl}/social-media`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SillyMedia Solutions — Social Media Management, Delhi NCR',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageTitle} | ${siteConfig.brandName}`,
    description:
      'Social media management for restaurants, cafés and hospitality brands in Delhi NCR — Instagram, reels, Meta ads and influencers by SillyMedia.',
    images: ['/og-image.png'],
  },
};

// All facts below are as published on sillymedia.co.in (fetched 22 Nov 2026).
const services = [
  {
    number: '01',
    label: 'SOCIAL MEDIA',
    name: 'Social Media Management',
    summary:
      'Daily Instagram posting, reel publishing, community engagement and platform optimisation — with content calendars, hashtag research and monthly analytics.',
  },
  {
    number: '02',
    label: 'BRANDING',
    name: 'Branding',
    summary:
      'Complete brand identity for restaurants, cafés and lifestyle businesses — logo design, brand guidelines, visual identity and positioning.',
  },
  {
    number: '03',
    label: 'CONTENT',
    name: 'Content Creation',
    summary:
      'Professional food photography, graphic design, Instagram reels and copywriting for restaurant and F&B brands, with monthly content planning.',
  },
  {
    number: '04',
    label: 'PAID ADS',
    name: 'Ads & Campaigns',
    summary:
      'Targeted Meta Ads (Facebook & Instagram) and Google Ads for restaurants and cafés — driving reservations, footfall and brand awareness.',
  },
  {
    number: '05',
    label: 'INFLUENCERS',
    name: 'Influencer Marketing',
    summary:
      'Dedicated influencer division with a commission-based model — compensation tied to measurable outcomes, reducing upfront risk.',
  },
  {
    number: '06',
    label: 'VIDEO',
    name: 'Video Editing',
    summary:
      'Professional video editing for Instagram Reels, YouTube Shorts and promotional videos — motion graphics, hooks and captions.',
  },
  {
    number: '07',
    label: 'WHATSAPP',
    name: 'WhatsApp API Marketing',
    summary:
      'WhatsApp Business API campaigns — broadcast messaging, automated replies, customer segmentation and tracked analytics.',
  },
  {
    number: '08',
    label: 'WEBSITES',
    name: 'Web Development',
    summary:
      'Custom responsive websites and landing pages for restaurants and cafés — e-commerce, online reservation pages and on-page SEO.',
  },
];

const packages = [
  {
    eyebrow: 'STARTER PACKAGE',
    name: 'Starter',
    amount: '₹15,999',
    timeline: 'per month · was ₹18,999',
    bestFor:
      'Small businesses, cafés and local brands building a consistent social media presence.',
    features: [
      '4–5 reels + 4 posts every month (8–9 creatives)',
      'Content planning & monthly calendar',
      'Reel ideation, basic editing & captions',
      'Graphic post design',
      'Caption writing with relevant hashtags',
      'Basic engagement & posting support',
    ],
    accent: 'orange',
  },
  {
    eyebrow: 'MOST POPULAR · GROWTH PACKAGE',
    name: 'Growth',
    amount: '₹34,999',
    timeline: 'per month · was ₹43,999',
    bestFor:
      'Growing brands, restaurants, cafés and clubs aiming for higher visibility and engagement.',
    features: [
      '6 reels + 6 posts every month (12 creatives)',
      'Structured monthly content calendar',
      'High-quality reel ideation, editing & captions',
      'Branded graphic & carousel posts',
      'Strategic captions with CTAs & hashtags',
      'Offer / event-based story updates',
      'Trend & competitor analysis',
    ],
    accent: 'green',
  },
  {
    eyebrow: 'PREMIUM PACKAGE',
    name: 'Premium',
    amount: '₹49,999',
    timeline: 'per month · was ₹65,999',
    bestFor:
      'Established brands, clubs and lounges seeking strong brand presence and growth-driven content.',
    features: [
      '8–10 reels + 8–10 posts every month (16–20 creatives)',
      'Detailed content strategy & monthly calendar',
      'Cinematic reels with strong hooks',
      'Campaign planning — events, launches, festivals',
      'Google Business Profile optimisation',
      'Professional customer review replies',
      'Reputation management & local visibility',
    ],
    accent: 'blue',
  },
];

const results = [
  {
    client: 'Bakoo Yaar',
    outcome:
      '+180% engagement, +45% footfall and 3.2M+ reach over a 4-month campaign for this multi-location restaurant & bar.',
  },
  {
    client: 'The Spot',
    outcome:
      '+400% engagement and +85% footfall in 2 months for this café and entertainment venue in Greater Noida.',
  },
  {
    client: 'Delight Dining',
    outcome: '+220% engagement for this luxury dining restaurant — fully booked every weekend.',
  },
  {
    client: 'BIRINJ BIRYANI',
    outcome: '+250% follower growth for this iconic biryani chain in Delhi NCR.',
  },
  {
    client: 'Odam Café',
    outcome: '2M+ impressions from daily content publishing and community building.',
  },
  {
    client: 'Olives and Figs',
    outcome: 'Full reservation bookings within 3 months of launch from zero digital presence.',
  },
];

const processSteps = [
  {
    number: '01',
    name: 'Understand Your Brand',
    summary:
      'Deep dive into your business, audience, competitors and goals — brand audit, audience research and KPI definition.',
  },
  {
    number: '02',
    name: 'Create Bold Strategies & Content',
    summary:
      'Unique creative strategies and thumb-stopping content — content strategy, visual identity and campaign concepts.',
  },
  {
    number: '03',
    name: 'Regular Posting & Growth Tracking',
    summary:
      'Daily content publishing, community management and real-time performance monitoring.',
  },
  {
    number: '04',
    name: 'Optimize for Crazy Results',
    summary:
      'Continuous data-driven refinement — A/B testing, ROI maximisation and scaling what works.',
  },
];

const socialFaqs = [
  {
    question: 'What does social media management cost at SillyMedia?',
    answer:
      'Three monthly packages: Starter at ₹15,999/month (8–9 creatives), Growth at ₹34,999/month (12 creatives with strategy, analytics and stories), and Premium at ₹49,999/month (16–20 creatives with full brand management, Google Business Profile and reputation management). Custom enterprise quotes are also available.',
  },
  {
    question: 'How soon can I see results?',
    answer:
      'Initial engagement improvements are typically visible within 2–3 weeks. Meaningful follower growth and business impact — footfall, reservations, online orders — usually appear within 4–6 weeks.',
  },
  {
    question: 'Does SillyMedia do influencer marketing?',
    answer:
      'Yes. SillyMedia runs a dedicated influencer marketing division for restaurant and hospitality brands in Delhi NCR — discovery, outreach, campaign management and performance tracking, including a commission-based model where compensation is tied to measurable outcomes.',
  },
  {
    question: 'What areas of Delhi NCR does SillyMedia cover?',
    answer:
      'SillyMedia is based in Greater Noida and serves Delhi, Noida, Greater Noida and Gurgaon — single-outlet brands and multi-location chains across the NCR.',
  },
];

export default function SocialMediaPage() {
  const crumbs = [{ label: 'Home', href: '/' }, { label: 'Social Media' }];
  return (
    <main>
      <JsonLd data={buildBreadcrumbSchema(crumbs, '/social-media')} />
      <JsonLd data={buildFaqSchema(socialFaqs)} />
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={crumbs} />
          <span className="eyebrow-pill">
            <i />
            RESTAURANT &amp; HOSPITALITY · DELHI NCR
          </span>
          <h1>Social Media Management, Delhi NCR</h1>
          <div className="page-meta-row">
            <span>Last updated: {siteConfig.lastUpdated}</span>
            <span>·</span>
            <span>Delivered by SillyMedia</span>
          </div>
          <div className="answer-box">
            <span className="answer-box-label">Is social media management part of SillyMedia Solutions?</span>
            <p>
              Social media management is delivered by SillyMedia — our restaurant and hospitality
              agency at{' '}
              <a
                href="https://sillymedia.co.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                sillymedia.co.in
              </a>
              . This page summarises what they do, from daily Instagram and reels to Meta ads and
              influencers. For packages and bookings, visit SillyMedia.
            </p>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WHAT SILLYMEDIA DOES</span>
              <h2>Social Media, Content, Ads &amp; Influencers</h2>
            </div>
            <p>
              SillyMedia provides social media management, influencer marketing, content creation,
              paid advertising, web development and WhatsApp marketing to restaurant, café and
              hospitality brands across Delhi NCR.
            </p>
          </div>
          <div className="service-list">
            {services.map((svc) => (
              <article className="service-row" key={svc.number}>
                <span className="service-number">{svc.number}</span>
                <div>
                  <span className="mini-label">{svc.label}</span>
                  <h3>{svc.name}</h3>
                  <p>{svc.summary}</p>
                </div>
                <a
                  href="https://sillymedia.co.in/#services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SOCIAL MEDIA PACKAGES — MONTHLY</span>
              <h2>Social Media Packages With Clear Monthly Pricing</h2>
            </div>
            <p>
              Three monthly packages from SillyMedia — no setup fees, cancel anytime, 30-day
              money-back guarantee. Prices as published on sillymedia.co.in.
            </p>
          </div>
          <div className="pricing-grid">
            {packages.map((pkg) => (
              <article className={`pricing-card pricing-${pkg.accent}`} key={pkg.name}>
                <div>
                  <span className="pricing-eyebrow">{pkg.eyebrow}</span>
                  <h3>{pkg.name}</h3>
                  <div className="pricing-price-block">
                    <span className="pricing-starting-label">Per month</span>
                    <strong className="pricing-amount">{pkg.amount}</strong>
                    <small className="pricing-timeline">{pkg.timeline}</small>
                  </div>
                  <p className="pricing-best-for">{pkg.bestFor}</p>
                  <ul className="pricing-features">
                    {pkg.features.map((feat) => (
                      <li key={feat}>
                        <CheckCircle2 size={15} aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://sillymedia.co.in/#pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-link pricing-cta"
                >
                  Choose Plan <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
          <div className="terms-strip" aria-label="Commercial terms">
            <div className="terms-strip-item">
              <span>Setup fees</span>
              <strong>None</strong>
            </div>
            <div className="terms-strip-item">
              <span>Contract</span>
              <strong>Cancel anytime</strong>
            </div>
            <div className="terms-strip-item">
              <span>Guarantee</span>
              <strong>30-day money-back</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CLIENT RESULTS</span>
              <h2>Results SillyMedia Publishes</h2>
            </div>
            <p>
              Measured outcomes from SillyMedia&apos;s restaurant, café and hospitality campaigns —
              20+ brands transformed, 150k+ growth, 90% average growth rate and 98% client
              retention, as published on sillymedia.co.in.
            </p>
          </div>
          <div className="content-grid-3">
            {results.map((r) => (
              <article
                key={r.client}
                style={{
                  border: '1px solid var(--border, #e5e0d8)',
                  borderRadius: 12,
                  padding: '20px 22px',
                }}
              >
                <h3 style={{ margin: '0 0 8px' }}>{r.client}</h3>
                <p style={{ margin: 0 }}>{r.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HOW SILLYMEDIA WORKS</span>
              <h2>A Proven 4-Step Process</h2>
            </div>
            <p>
              The process SillyMedia uses to take restaurant and hospitality brands from unknown
              to unforgettable.
            </p>
          </div>
          <div className="content-grid-3">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span
                  style={{
                    display: 'block',
                    font: '700 34px/1 Playfair Display, Georgia, serif',
                    marginBottom: 10,
                  }}
                >
                  {step.number}
                </span>
                <h3 style={{ margin: '0 0 8px' }}>{step.name}</h3>
                <p style={{ margin: 0 }}>{step.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container" style={{ maxWidth: 960 }}>
          <span className="eyebrow">QUESTIONS, ANSWERED</span>
          <h2 style={{ font: '700 28px/1.2 Playfair Display, Georgia, serif', margin: '8px 0 18px' }}>
            Social Media Questions
          </h2>
          <div className="faq-list">
            {socialFaqs.map((faq) => (
              <details className="faq-item" key={faq.question} open>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown size={20} aria-hidden="true" />
                </summary>
                <p className="faq-answer">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="container contact-inner">
          <span className="eyebrow-pill dark-pill">
            <i />
            WANT SOCIAL MEDIA MANAGEMENT?
          </span>
          <h2>Get It From SillyMedia</h2>
          <p>
            Social media management, packages and bookings live at sillymedia.co.in — SillyMedia&apos;s
            restaurant and hospitality agency in Greater Noida.
          </p>
          <a
            href="https://sillymedia.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="button-link"
          >
            Visit sillymedia.co.in <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <p style={{ marginTop: 18 }}>
            <a href="tel:+917070490795">Call +91 70704 90795</a>
            {' · '}
            <a href="mailto:sillymedia.in@gmail.com">sillymedia.in@gmail.com</a>
            {' · '}
            <a
              href="https://instagram.com/sillymedia.co.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sillymedia.co.in
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
