import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  Star,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const services = [
  ['01', 'Speed & Conversion', 'Custom Websites & Headless Web Architecture', 'Sub-second load times, mobile-first design, and high-converting layouts built to turn visitors into paying clients.', 'Explore Websites', 'orange'],
  ['02', 'Local Dominance', 'Hyperlocal Delhi NCR SEO & Google Maps', 'Dominate local search in Connaught Place, Cyber Hub, South Ex, Sector 62 and Indirapuram.', 'Review SEO Playbook', 'green'],
  ['03', 'Zero Lead Drop-Off', 'WhatsApp Automation & CRM Bots', 'Convert inquiries 24/7 with automated appointment booking, follow-ups, and catalog orders.', 'See WhatsApp Flows', 'orange'],
  ['04', 'Product Engineering', 'Web Apps & Full-Stack SaaS MVPs', 'From validated idea to production web application in weeks, built for NCR startups and enterprise teams.', 'Explore App Engineering', 'blue'],
  ['05', 'Algorithmic Edge', 'Custom AI Agents & Voice/Chat Bots', 'Intelligent customer service, multilingual support, and internal workflow automation for fast-growing teams.', 'Inspect AI Products', 'green'],
];

const faqs = [
  ['Do you work with all types of businesses across Delhi NCR?', 'Yes. We work with retail shops, medical clinics, corporate services, real estate developers, education academies, and technology startups across Delhi, Gurugram, and Noida.'],
  ['How long does a bespoke website or web app take from kickoff to launch?', 'A custom high-performance website takes between 14 and 21 working days. Full-stack web applications, SaaS MVPs, and complex booking engines typically take 4 to 6 weeks.'],
  ['Can you rank our business in the top 3 on Google Maps in our locality?', 'Yes. We apply an engineering-led local SEO methodology tailored to the specific neighborhoods, search habits, and buyer intent of your NCR market.'],
  ['Do you provide ongoing technical support, hosting, and updates?', 'Absolutely. We provide proactive maintenance, security patching, local ranking tracking, and direct developer support on WhatsApp.'],
  ['What does pricing look like for an independent business versus a growing brand?', 'We work on fixed, transparent architectural project fees. Independent businesses can launch with flat-fee sprints, while larger platforms are scoped around clear delivery milestones.'],
];

function ButtonLink({ children, href = '#contact', light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return <a href={href} className={`button-link ${light ? 'button-light' : ''}`}>{children}</a>;
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
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
  return (
    <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow-pill"><i />DELHI NCR · FULL-STACK WEB, SEO &amp; AI AUTOMATION</span>
              <h1>Your Business,<br /><em>Built for the Web.</em></h1>
              <p className="hero-lede">Custom websites, high-converting web apps, Google Maps ranking, and AI automation for every ambitious business across Delhi, Gurugram, and Noida.</p>
              <div className="hero-actions">
                <ButtonLink href="#work">See Our Work <ArrowRight size={16} /></ButtonLink>
                <ButtonLink href="#contact" light>Talk to Naveen</ButtonLink>
              </div>
              <div className="direct-note">
                <CheckCircle2 size={20} />
                <span>Zero agency middlemen. Direct architecture &amp; engineering with Naveen. No bloated retainers.</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-card">
                <div className="image-frame">
                  <picture>
                    <source srcSet="/images/hero-showcase-640.avif 640w, /images/hero-showcase-960.avif 960w" type="image/avif" sizes="(max-width: 900px) 92vw, 520px" />
                    <source srcSet="/images/hero-showcase-640.webp 640w, /images/hero-showcase-960.webp 960w" type="image/webp" sizes="(max-width: 900px) 92vw, 520px" />
                    <img
                      src="/images/hero-showcase-960.webp"
                      alt="Digital interfaces built by SillyMedia Solutions for Delhi NCR businesses"
                      width={960}
                      height={720}
                      fetchPriority="high"
                    />
                  </picture>
                  <div className="image-badge">
                    <span><i />Core Web Vitals Optimized</span>
                    <b>Multi-Sector</b>
                  </div>
                </div>
                <div className="caption">
                  <span>CASE SPECIMEN 01–04 · DELHI NCR ECOSYSTEM</span>
                  <small>South Delhi · Cyber Hub · Noida</small>
                  <p>Multi-sector digital architecture across South Delhi, Cyber Hub &amp; Noida. High-intent conversion workflows and local search dominance.</p>
                </div>
              </div>
              <div className="stamp">NCR<br /><strong>2026</strong></div>
            </div>
          </div>
          <div className="ticker" aria-hidden="true">
            <div>WEB DESIGN <b>·</b> LOCAL SEO <b>·</b> WHATSAPP AUTOMATION <b>·</b> DELHI NCR <b>·</b> WEB APPS <b>·</b> AI CHATBOTS <b>·</b> GOOGLE MAPS <b>·</b> HIGH-CONVERSION LANDING PAGES <b>·</b></div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            {[
              ['80+', 'Businesses Scaled', 'Retail, Healthcare, Tech & Dining'],
              ['₹3 Cr', 'Revenue Generated', 'Direct sales & inquiries for NCR clients'],
              ['#1 Rank', 'Google Maps Pack', 'Local placement strategy across NCR'],
              ['<0.5s', 'Core Web Vitals', 'Mobile-first speed architecture'],
            ].map(([value, label, note]) => (
              <div className="stat" key={value}>
                <strong>{value}</strong>
                <b>{label}</b>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section warm" id="who-we-serve">
          <div className="container">
            <SectionHeading eyebrow="WHO WE SERVE — 01" title="Every Business That Wants to Grow Online" />
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
                <span key={tag}><i className={`dot dot-${i % 3}`} />{tag}</span>
              ))}
            </div>
            <div className="quote-box">
              <p>“If you have customers in Delhi NCR, we have an engineered digital solution to bring them through your door.”</p>
              <ButtonLink href="#contact">Consult With Naveen <ArrowRight size={16} /></ButtonLink>
            </div>
          </div>
        </section>

        <section className="section white" id="services">
          <div className="container">
            <SectionHeading
              eyebrow="OUR SOLUTIONS — 02"
              title="Engineered for Delhi NCR's Competitive Market"
              description="High-velocity digital engineering that replaces slow agencies with precision web systems and measurable commercial outcomes."
            />
            <div className="service-list">
              {services.map(([num, eyebrow, title, text, link, color]) => (
                <article className="service-row" key={num}>
                  <span className={`service-number ${color}`}>{num}</span>
                  <div>
                    <span className={`mini-label ${color}`}>{eyebrow}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <a href="#contact">{link} <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cream" id="work">
          <div className="container">
            <SectionHeading
              eyebrow="OUR WORK — 03"
              title="Selected Works & Production Deployments"
              description="Production deployments across Delhi NCR"
            />
            <div className="work-grid">
              <article className="work-card featured">
                <div className="card-meta">
                  <b><i className="dot dot-0" />Aura Luxe Fashion</b>
                  <span>Gurugram · Retail E-Commerce</span>
                </div>
                <div className="work-image">
                  <picture>
                    <source srcSet="/images/hero-showcase-640.avif 640w, /images/hero-showcase-960.avif 960w" type="image/avif" sizes="(max-width: 900px) 92vw, 680px" />
                    <source srcSet="/images/hero-showcase-640.webp 640w, /images/hero-showcase-960.webp 960w" type="image/webp" sizes="(max-width: 900px) 92vw, 680px" />
                    <img src="/images/hero-showcase-960.webp" alt="Aura Luxe Fashion ecommerce interface" width={960} height={600} loading="lazy" />
                  </picture>
                  <span>Headless Architecture</span>
                </div>
                <h3>High-Speed Headless Shopify Store &amp; Instant Catalog</h3>
                <p>Custom headless storefront with sub-second product browsing, streamlined UPI checkout, and conversion-focused product architecture.</p>
                <div className="card-foot">
                  <strong>+3.8x <small>Reported checkout lift</small></strong>
                  <ButtonLink>Request Walkthrough <ExternalLink size={14} /></ButtonLink>
                </div>
              </article>
              <div className="work-stack">
                <article className="work-card">
                  <div className="card-meta">
                    <b>Delhi Dental Care</b>
                    <span className="green-tag">South Delhi · Healthcare</span>
                  </div>
                  <h3>Automated Patient Booking System &amp; Local Google Pack</h3>
                  <p>Automated booking and WhatsApp reminders engineered to capture organic local consultation leads.</p>
                  <div className="card-foot">
                    <strong className="green-text">+185% <small>Reported patient leads</small></strong>
                    <a href="#contact">Case Study <ArrowRight size={14} /></a>
                  </div>
                </article>
                <article className="work-card">
                  <div className="card-meta">
                    <b>FinOps India</b>
                    <span className="blue-tag">Noida Sector 62 · Fintech SaaS</span>
                  </div>
                  <h3>Intuitive B2B Financial Dashboard &amp; Automated GST Flow</h3>
                  <p>Enterprise dashboard with GST reconciliation, multi-tenant authentication, and audit reporting launched in 4 weeks.</p>
                  <div className="card-foot">
                    <strong>4-Week <small>Launch</small></strong>
                    <a href="#contact">Case Study <ArrowRight size={14} /></a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section green-section">
          <div className="container differentiators">
            <div className="difference-copy">
              <span className="eyebrow light-eyebrow">DIFFERENTIATORS — 04</span>
              <h2>Why Delhi Businesses Work With Naveen, Not Big Agencies</h2>
              <p>Most digital agencies sell bloated slide decks and delegate your project to juniors. We build production-ready digital growth engines engineered directly by Naveen for commercial velocity.</p>
              <div className="standard">
                <span>CORE WORKING STANDARD</span>
                <p>“Every line of code and every pixel exists to drive phone inquiries, store visits, and direct revenue.”</p>
              </div>
            </div>
            <div className="difference-list">
              {[
                ['01 / DIRECT ACCOUNTABILITY', 'Direct Principal Accountability', 'You work 1-on-1 with the senior engineer and designer who builds your system.'],
                ['02 / HYPERLOCAL EXPERTISE', 'Deep Delhi NCR Hyperlocal Nuance', 'We understand footfall dynamics, regional search habits, and local buyer intent.'],
                ['03 / COMMERCIAL FOCUS', 'Speed & Revenue First, Not Pixel Vanity', 'Every millisecond and every line of copy is tuned to maximize conversions.'],
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
              description="In-house tools and software frameworks engineered to give Delhi NCR businesses a practical digital advantage."
            />
            <div className="products-grid">
              {[
                ['LocalRanker NCR', 'Geo Tracking', 'Automated geo-grid ranking tracker for Google Business Profiles across Delhi NCR hubs.', 'BETA', 'green'],
                ['WhatsDesk Pro', 'WhatsApp Engine', 'Omnichannel WhatsApp CRM and lead distribution engine for retail, clinics, and service operations.', 'LIVE', 'orange'],
                ['DocuFlow AI', 'Vernacular AI', 'Multilingual assistant for patient intake and legal inquiry summarization.', 'PILOT', 'blue'],
                ['SiteSpeed Turbo', 'Performance', 'Automated asset optimization pipeline built for high Core Web Vitals.', 'LIVE', 'dark'],
              ].map(([title, category, text, status, color]) => (
                <article className={`product-card ${color}`} key={title}>
                  <div>
                    <div className="product-meta">
                      <span>PRODUCT // {category}</span>
                      <b>{status}</b>
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <a href="#contact">Request Details <ArrowRight size={14} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <SectionHeading eyebrow="VALIDATION — 06" title="Client Testimonials" description="Founders & operators across Delhi NCR" />
            <div className="testimonial-grid">
              {[
                ['Dr. Anjali Sharma', 'Founder, Delhi Dental Care, GK-1', 'Naveen helped our clinic climb local search in South Delhi and streamlined consultation bookings.'],
                ['Rohan Sethi', 'MD, Aura Luxe Apparel, DLF CyberCity', 'Our headless e-commerce store loads fast on 4G. Naveen built and launched the platform in 3 weeks.'],
                ['Vikram Malhotra', 'CTO, FinOps India, Noida', 'Clean engineering and zero agency bloat. Naveen writes scalable code and communicates with total clarity.'],
              ].map(([name, role, quote]) => (
                <article className="testimonial" key={name}>
                  <div className="stars" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={15} fill="currentColor" />)}
                  </div>
                  <p>“{quote}”</p>
                  <footer>
                    <b>{name}</b>
                    <span>{role}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div>
              <SectionHeading eyebrow="TRANSPARENCY — 07" title="Direct Answers to Hard Questions" description="No agency buzzwords, no opaque retainers, and no hidden fine print." />
              <div className="email-card">
                <b>Need a custom scope?</b>
                <p>Send an email directly to Naveen with your business location and existing site.</p>
                <a href="mailto:naveen@sillymedia.in">naveen@sillymedia.in</a>
              </div>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details className="faq-item" key={question} open>
                  <summary>
                    <span>{question}</span>
                    <ChevronDown size={20} aria-hidden="true" />
                  </summary>
                  <p className="faq-answer">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container contact-inner">
            <span className="eyebrow-pill dark-pill"><i />DIRECT DISCOVERY · NO OBLIGATION</span>
            <h2>Ready to Grow Your Business Online?</h2>
            <p>Let&apos;s review your current digital presence, local Google ranking, and conversion bottlenecks over a free 20-minute strategy call with Naveen.</p>
            <div className="contact-actions">
              <a className="whatsapp" href="#contact">
                <MessageCircle size={18} />Request WhatsApp Consultation
              </a>
              <a className="orange-button" href="mailto:naveen@sillymedia.in?subject=Growth%20Strategy%20Inquiry">
                Book a 20-Min Strategy Call
              </a>
            </div>
            <ContactForm />
            <div className="contact-meta">
              <span><small>DIRECT EMAIL</small>naveen@sillymedia.in</span>
              <span><small>HEADQUARTERS</small>Delhi NCR, India</span>
              <span><small>RESPONSE SLA</small>Response within 3 hours</span>
            </div>
          </div>
        </section>
      </main>
  );
}
