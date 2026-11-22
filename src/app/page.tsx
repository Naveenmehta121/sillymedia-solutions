import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ContactActions from '@/components/ContactActions';
import PricingSection from '@/components/PricingSection';
import JsonLd from '@/components/JsonLd';
import { buildFaqSchema, buildWebsitePackagesOffer } from '@/lib/schema';
import { siteConfig } from '@/config/site.config';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import { caseStudiesData, productsData } from '@/data/work';
import { guidesData } from '@/data/guides';
import { homeFaqs } from '@/data/faqs';

function ButtonLink({
  children,
  href = '/#contact',
  light = false,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
}) {
  return (
    <Link href={href} className={`button-link ${light ? 'button-light' : ''}`}>
      {children}
    </Link>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function HomePage() {
  const [featuredCase, ...stackCases] = caseStudiesData;

  return (
    <main id="top">
      <JsonLd data={buildFaqSchema(homeFaqs)} />
      <JsonLd data={buildWebsitePackagesOffer()} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow-pill">
              <i />
              DELHI NCR · FULL-STACK WEB, SEO &amp; AI AUTOMATION
            </span>
            <h1>
              Your Business,
              <br />
              <em>Built for the Web.</em>
            </h1>
            <p className="hero-lede">
              SillyMedia Solutions is a Delhi NCR digital marketing and web engineering agency.
              We build fast custom websites, hyperlocal Google Maps SEO, WhatsApp automation, web
              apps, and AI chatbots for businesses across Delhi, Gurugram, Noida, Greater Noida,
              Faridabad, and Ghaziabad.
            </p>
            <div className="hero-actions">
              <ButtonLink href="/work">
                See Our Work <ArrowRight size={16} aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/#contact" light>
                Talk to Our Team
              </ButtonLink>
            </div>
            <div className="direct-note">
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>
                Zero agency middlemen. Direct architecture &amp; engineering with our senior
                specialists. Fixed milestone scopes — no bloated retainers.
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="image-frame">
                {featuredCase.liveUrl ? (
                  <a
                    href={featuredCase.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit The Diets website (opens in a new tab)"
                    style={{ display: 'block', height: '100%' }}
                  >
                    <img
                      src="/images/hero-showcase.svg"
                      alt="The Diets — online dietitian website built by SillyMedia Solutions"
                      width={960}
                      height={720}
                      fetchPriority="high"
                    />
                  </a>
                ) : (
                  <img
                    src="/images/hero-showcase.svg"
                    alt="The Diets — online dietitian website built by SillyMedia Solutions"
                    width={960}
                    height={720}
                    fetchPriority="high"
                  />
                )}
                <div className="image-badge">
                  <span>
                    <i />
                    Core Web Vitals Optimized
                  </span>
                  <b>Live Deployment</b>
                </div>
              </div>
              <div className="caption">
                <span>CASE SPECIMEN 01 · LIVE DEPLOYMENT</span>
                <small>
                  {featuredCase.liveUrl ? (
                    <a
                      href={featuredCase.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'underline' }}
                    >
                      thediets.in
                    </a>
                  ) : (
                    'thediets.in'
                  )}
                  {' · Online Dietitian'}
                </small>
                <p>
                  Online dietitian platform with 1:1 diet plans, online consultation booking and
                  transparent pricing — built for mobile speed and direct enquiries.
                </p>
              </div>
            </div>
            <div className="stamp" aria-hidden="true">
              NCR
              <br />
              <strong>2026</strong>
            </div>
          </div>
        </div>
        <div className="ticker" aria-hidden="true">
          <div>
            WEB DESIGN <b>·</b> LOCAL SEO <b>·</b> WHATSAPP AUTOMATION <b>·</b> DELHI NCR <b>·</b>{' '}
            WEB APPS <b>·</b> AI CHATBOTS <b>·</b> GOOGLE MAPS <b>·</b> HIGH-CONVERSION LANDING
            PAGES <b>·</b>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="Key indicators">
        <div className="container stats-grid">
          {siteConfig.stats.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <b>{item.label}</b>
              <span>{item.note}</span>
              <Link href={item.proofHref} className="stat-proof-link">
                {item.proofLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section warm" id="who-we-serve">
        <div className="container">
          <SectionHeading
            eyebrow="WHO WE SERVE — 01"
            title="Every Delhi NCR Business Ready to Grow Online"
            description="Serving independent businesses and startups across Delhi, Gurugram, Noida, Greater Noida, Faridabad, and Ghaziabad."
          />
          <div className="tag-list">
            {[
              'Restaurants & Cafes',
              'Retail Shops & D2C',
              'Clinics & Healthcare',
              'Real Estate & Architecture',
              'Gyms & Wellness',
              'Startups & SaaS MVPs',
              'Education & Coaching',
              'Professional & Legal Services',
              'Boutique Hotels & Stays',
            ].map((tag, i) => (
              <span key={tag}>
                <i className={`dot dot-${i % 3}`} />
                {tag}
              </span>
            ))}
          </div>

          <div style={{ marginBottom: 28 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>
              EXPLORE BY DELHI NCR CITY
            </span>
            <div className="pill-grid">
              {locationsData.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="pill-item pill-link"
                >
                  <i className="dot dot-1" />
                  {loc.city} →
                </Link>
              ))}
            </div>
          </div>

          <div className="quote-box">
            <p>
              “If you serve customers in Delhi NCR, we engineer the website, local search presence,
              and WhatsApp workflow that turns searchers into booked conversations.”
            </p>
            <ButtonLink href="/#contact">
              Consult With Our Team <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section white" id="services">
        <div className="container">
          <SectionHeading
            eyebrow="OUR SOLUTIONS — 02"
            title="Engineered for Delhi NCR's Competitive Market"
            description="Five focused technical services replacing slow agency templates with fast, crawlable systems built for commercial inquiries."
          />
          <div className="service-list">
            {servicesData.map((svc) => (
              <article className="service-row" key={svc.slug}>
                <span className={`service-number ${svc.accent}`}>{svc.number}</span>
                <div>
                  <span className={`mini-label ${svc.accent}`}>{svc.eyebrow}</span>
                  <h3>
                    <Link href={`/services/${svc.slug}`}>{svc.name}</Link>
                  </h3>
                  <p>{svc.summary}</p>
                </div>
                <Link href={`/services/${svc.slug}`}>
                  {svc.ctaLabel} <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream" id="work">
        <div className="container">
          <SectionHeading
            eyebrow="OUR WORK — 03"
            title="Selected Work & Production Deployment"
            description="Live production deployment — thediets.in, an online dietitian platform."
          />
          <div className="work-grid">
            {featuredCase && (
              <article className="work-card featured">
                <div className="card-meta">
                  <b>
                    <i className="dot dot-0" />
                    {featuredCase.client}
                  </b>
                  <span>
                    {featuredCase.city} · {featuredCase.sector}
                  </span>
                </div>
                <div className="work-image">
                  {featuredCase.liveUrl ? (
                    <a
                      href={featuredCase.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit The Diets website (opens in a new tab)"
                      style={{ display: 'block', height: '100%' }}
                    >
                      <img
                        src={featuredCase.imageWebp}
                        alt={featuredCase.imageAlt}
                        width={960}
                        height={600}
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <img
                      src={featuredCase.imageWebp}
                      alt={featuredCase.imageAlt}
                      width={960}
                      height={600}
                      loading="lazy"
                    />
                  )}
                  <span>{featuredCase.imageTag}</span>
                </div>
                <h3>
                  <Link href={`/work/${featuredCase.slug}`}>{featuredCase.title}</Link>
                </h3>
                <p>{featuredCase.summary}</p>
                <div className="card-foot">
                  <strong>
                    {featuredCase.headlineMetric}{' '}
                    <small>{featuredCase.headlineMetricLabel}</small>
                  </strong>
                  <ButtonLink href={`/work/${featuredCase.slug}`}>
                    Read Case Study <ExternalLink size={14} aria-hidden="true" />
                  </ButtonLink>
                </div>
              </article>
            )}
            <div className="work-stack">
              {stackCases.map((cs) => (
                <article className="work-card" key={cs.slug}>
                  <div className="card-meta">
                    <b>{cs.client}</b>
                    <span className={cs.badgeColor === 'green' ? 'green-tag' : 'blue-tag'}>
                      {cs.city} · {cs.sector}
                    </span>
                  </div>
                  <h3>
                    <Link href={`/work/${cs.slug}`}>{cs.title}</Link>
                  </h3>
                  <p>{cs.summary}</p>
                  <div className="card-foot">
                    <strong className={cs.badgeColor === 'green' ? 'green-text' : ''}>
                      {cs.headlineMetric} <small>{cs.headlineMetricLabel}</small>
                    </strong>
                    <Link href={`/work/${cs.slug}`}>
                      Case Study <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section green-section">
        <div className="container differentiators">
          <div className="difference-copy">
            <span className="eyebrow light-eyebrow">DIFFERENTIATORS — 04</span>
            <h2>Why Delhi NCR Businesses Work With SillyMedia Solutions, Not Slow Legacy Agencies</h2>
            <p>
              Most digital agencies sell bloated slide decks and delegate execution to junior interns. At{' '}
              {siteConfig.brandName}, our senior engineering and growth specialists build production-ready
              digital growth engines engineered for commercial velocity and verified results.
            </p>
            <div className="standard">
              <span>CORE WORKING STANDARD</span>
              <p>
                “Every line of code and every page exists to drive qualified phone calls, WhatsApp
                chats, and real business revenue.”
              </p>
            </div>
            <div style={{ marginTop: 24 }}>
              <Link href="/about" className="button-link button-light">
                About Our Agency <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="difference-list">
            {[
              [
                '01 / SENIOR SPECIALIST EXECUTION',
                'Senior Engineering & Growth Specialists',
                'You collaborate directly with senior engineers and SEO strategists writing your production code and managing campaigns.',
              ],
              [
                '02 / HYPERLOCAL EXPERTISE',
                'Deep Delhi NCR Hyperlocal Nuance',
                'We understand local neighbourhood search behaviour from South Delhi and Cyber Hub to Noida Sector 62 and Indirapuram.',
              ],
              [
                '03 / COMMERCIAL FOCUS',
                'Speed, Crawlability & Conversions First',
                'Pre-rendered HTML, clear pricing signals, and mobile WhatsApp/call workflows built for both humans and AI search engines.',
              ],
            ].map(([label, title, text]) => (
              <div className="difference-item" key={label}>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section warm" id="products">
        <div className="container">
          <SectionHeading
            eyebrow="IN-HOUSE PRODUCTS — 05"
            title="Digital Products We've Built"
            description="Internal software tools and frameworks engineered to give Delhi NCR clients practical tracking, WhatsApp, and speed advantages."
          />
          <div className="products-grid">
            {productsData.map((prod) => (
              <article className={`product-card ${prod.color}`} key={prod.name}>
                <div>
                  <div className="product-meta">
                    <span>PRODUCT // {prod.category}</span>
                    <b>{prod.status}</b>
                  </div>
                  <h3>{prod.name}</h3>
                  <p>{prod.description}</p>
                </div>
                <Link href="/#contact">
                  Request Details <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PricingSection sectionNumber="06" />

      <section className="section warm" id="guides">
        <div className="container">
          <SectionHeading
            eyebrow="DELHI NCR PLAYBOOKS — 07"
            title="Practical Guides Before You Hire an Agency"
            description="Answer-first technical guides covering Delhi NCR website pricing, Gurugram Google Maps SEO, and clinic WhatsApp automation."
          />
          <div className="content-grid-3">
            {guidesData.map((guide) => (
              <article className="editorial-card" key={guide.slug} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 14 }}>
                <div>
                  <span className="eyebrow">{guide.eyebrow}</span>
                  <h3 style={{ marginTop: 8 }}>
                    <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                  </h3>
                  <p>{guide.directAnswer}</p>
                </div>
                <Link href={`/guides/${guide.slug}`} className="orange-text">
                  Read Guide <ArrowRight size={14} style={{ display: 'inline' }} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-layout">
          <div>
            <SectionHeading
              eyebrow="TRANSPARENCY — 08"
              title="Direct Answers to Hard Questions"
              description="No agency buzzwords, no opaque retainers, and no hidden fine print."
            />
            <div className="email-card">
              <b>Need more answers or a custom scope?</b>
              <p>
                Read our full FAQ or email our team directly with your business
                location and existing site.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 10 }}>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                <Link href="/faq">View Full FAQ →</Link>
              </div>
            </div>
          </div>
          <div className="faq-list">
            {homeFaqs.map((faq) => (
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

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <span className="eyebrow-pill dark-pill">
            <i />
            DIRECT DISCOVERY · NO OBLIGATION
          </span>
          <h2>Ready to Grow Your Business Online?</h2>
          <p>
            Let&apos;s review your current website, local Google Maps visibility, and conversion
            bottlenecks over a free 20-minute strategy call with our agency specialists.
          </p>
          <ContactActions locationTag="home_contact_section" />
          <ContactForm />
          <div className="contact-meta">
            <span>
              <small>DIRECT EMAIL</small>
              {siteConfig.contact.email}
            </span>
            <span>
              <small>SERVICE AREA</small>Delhi · Gurugram · Noida · NCR
            </span>
            <span>
              <small>RESPONSE SLA</small>
              {siteConfig.contact.responseSla}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
