import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  Star,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCDgYyMIKsRPZbNFWeX7b8IT_enRm4Tjx6cfknuLGgcy2NWqGtpfCqy9ih-r85PtsFtdIBHsrXAc7Zp0lrtclccF1oPXGc0sUG2QOwP4_7mWZEYkjOwDYu95LmGAamMRhM5MxAuzigfxVmOLdrhtpp4FiKH9-NUcmaE4YdnCSfktBLmf1azX1dXyPBFz4NCKIoeS4FJwx1YyWmrFu4tO652ZvPfH9ML8z2-Nf-WfvuKgpqCTjNUR4sd';
const logo =
  'https://lh3.googleusercontent.com/aida/AEtjO1WAMKGrRqjBsrl8Cu6wdDLapCU1bQ9btA6fX3j69pg6O95kZsNFrPQkcbjrbwq4eDUmoUAyxG-5C2vYheBzuvx4iRCIpbqyKu_3EvznaGHy2HFuAxbYDZ882hx-qNvYLQlCyYzOn8Hjl0WwYZg1lZLlmFl_Evc8nb8CYVHxYTrVJ4NVYGXYvO-tWMokdGg7i1WyHw2CJMsyXbfot3D56QRDyHPNBmkX96nmKz4mX1NVWe73ltRIyTiKqlg';

const services = [
  ['01', 'Speed & Conversion', 'Custom Websites & Headless Web Architecture', 'Sub-second load times, mobile-first design, and high-converting layouts built to turn visitors into paying clients.', 'Explore Websites', 'orange'],
  ['02', 'Local Dominance', 'Hyperlocal Delhi NCR SEO & Google Maps', 'Dominate local search in Connaught Place, Cyber Hub, South Ex, Sector 62 and Indirapuram.', 'Review SEO Playbook', 'green'],
  ['03', 'Zero Lead Drop-Off', 'WhatsApp Automation & CRM Bots', 'Convert inquiries 24/7 with automated appointment booking, follow-ups, and catalog orders.', 'See WhatsApp Flows', 'orange'],
  ['04', 'Product Engineering', 'Web Apps & Full-Stack SaaS MVPs', 'From validated idea to production web application in weeks, built for NCR startups and enterprise teams.', 'Explore App Engineering', 'blue'],
  ['05', 'Algorithmic Edge', 'Custom AI Agents & Voice/Chat Bots', 'Intelligent customer service, multilingual support, and internal workflow automation for fast-growing teams.', 'Inspect AI Lab', 'green'],
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
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{description && <p>{description}</p>}</div>;
}

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand"><img src={logo} alt="SillyMedia Solutions" /></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#work">Work</a><a href="#services">Services</a><a href="#who-we-serve">Who We Serve</a><a href="#lab-products">Lab</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
          </nav>
          <ButtonLink>Get a Free Quote</ButtonLink>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow-pill"><i />DELHI NCR · FULL-STACK WEB, SEO & AI AUTOMATION</span>
              <h1>Your Business,<br /><em>Built for the Web.</em></h1>
              <p className="hero-lede">Custom websites, high-converting web apps, Google Maps ranking, and AI automation for every ambitious business across Delhi, Gurugram, and Noida.</p>
              <div className="hero-actions"><ButtonLink href="#work">See Our Work <ArrowRight size={16} /></ButtonLink><ButtonLink href="#contact" light>Talk to Naveen</ButtonLink></div>
              <div className="direct-note"><CheckCircle2 size={20} /><span>Zero agency middlemen. Direct architecture & engineering with Naveen. No bloated retainers.</span></div>
            </div>
            <div className="hero-visual">
              <div className="visual-card"><div className="image-frame"><img src={heroImage} alt="Digital interfaces for Delhi NCR businesses" /><div className="image-badge"><span><i />Speed: &lt;0.5s · Google 99/100</span><b>Multi-Sector</b></div></div><div className="caption"><span>CASE SPECIMEN 01–04 · DELHI NCR ECOSYSTEM</span><small>South Delhi · Cyber Hub · Noida</small><p>Multi-sector digital architecture across South Delhi, Cyber Hub & Noida. High-intent conversion workflows and local search dominance.</p></div></div>
              <div className="stamp">NCR<br /><strong>2026</strong></div>
            </div>
          </div>
          <div className="ticker"><div>WEB DESIGN <b>·</b> LOCAL SEO <b>·</b> WHATSAPP AUTOMATION <b>·</b> DELHI NCR <b>·</b> WEB APPS <b>·</b> AI CHATBOTS <b>·</b> GOOGLE MAPS <b>·</b> HIGH-CONVERSION LANDING PAGES <b>·</b></div></div>
        </section>

        <section className="stats"><div className="container stats-grid">{[['80+', 'Businesses Scaled', 'Retail, Healthcare, Tech & Dining'], ['₹3 Cr', 'Revenue Generated', 'Direct sales & inquiries for NCR clients'], ['#1 Rank', 'Google Maps Pack', 'Top 3 local placement in 60 days'], ['<0.5s', 'Core Web Vitals', 'Mobile-first 99/100 Google score']].map(([value, label, note]) => <div className="stat" key={value}><strong>{value}</strong><b>{label}</b><span>{note}</span></div>)}</div></section>

        <section className="section warm" id="who-we-serve"><div className="container"><SectionHeading eyebrow="WHO WE SERVE" title="Every Business That Wants to Grow Online" /><div className="tag-list">{['Restaurants & Cafes', 'Retail Shops & D2C', 'Clinics & Healthcare', 'Real Estate & Architecture', 'Gyms & Wellness', 'Startups & SaaS MVPs', 'Education & Coaching', 'Professional & Legal Services', 'Boutique Hotels & Stays'].map((tag, i) => <span key={tag}><i className={`dot dot-${i % 3}`} />{tag}</span>)}</div><div className="quote-box"><p>“If you have customers in Delhi NCR, we have an engineered digital solution to bring them through your door.”</p><ButtonLink href="#contact">Consult With Naveen <ArrowRight size={16} /></ButtonLink></div></div></section>

        <section className="section white" id="services"><div className="container"><SectionHeading eyebrow="OUR SOLUTIONS — 02" title="Engineered for Delhi NCR's Competitive Market" description="High-velocity digital engineering that replaces slow agencies with precision web systems and measurable commercial outcomes." /><div className="service-list">{services.map(([num, eyebrow, title, text, link, color]) => <article className="service-row" key={num}><span className={`service-number ${color}`}>{num}</span><div><span className={`mini-label ${color}`}>{eyebrow}</span><h3>{title}</h3><p>{text}</p></div><a href="#contact">{link} <ArrowRight size={15} /></a></article>)}</div></div></section>

        <section className="section cream" id="work"><div className="container"><SectionHeading eyebrow="OUR WORK — 03" title="Selected Works & Production Deployments" description="Validated production deployments across Delhi NCR" /><div className="work-grid"><article className="work-card featured"><div className="card-meta"><b><i className="dot dot-0" />Aura Luxe Fashion</b><span>Gurugram · Retail E-Commerce</span></div><div className="work-image"><img src={heroImage} alt="Aura Luxe Fashion ecommerce interface" /><span>0.34s Load · Headless</span></div><h3>High-Speed Headless Shopify Store & Instant Catalog</h3><p>Custom headless storefront with sub-second product browsing, one-click UPI checkout, and a 3.8x checkout conversion increase.</p><div className="card-foot"><strong>+3.8x <small>Checkout conversion rate</small></strong><ButtonLink>View Live Demo <ExternalLink size={14} /></ButtonLink></div></article><div className="work-stack"><article className="work-card"><div className="card-meta"><b>Delhi Dental Care</b><span className="green-tag">South Delhi · Healthcare</span></div><h3>Automated Patient Booking System & #1 Local Google Pack</h3><p>Automated booking and WhatsApp reminders increased organic patient consultation leads by 185%.</p><div className="card-foot"><strong className="green-text">+185% <small>Patient Leads</small></strong><a href="#contact">Case Study <ArrowRight size={14} /></a></div></article><article className="work-card"><div className="card-meta"><b>FinOps India</b><span className="blue-tag">Noida Sector 62 · Fintech SaaS</span></div><h3>Intuitive B2B Financial Dashboard & Automated GST Flow</h3><p>Enterprise dashboard with GST reconciliation, multi-tenant authentication, and audit reporting launched in 4 weeks.</p><div className="card-foot"><strong>4-Week <small>Launch</small></strong><a href="#contact">Case Study <ArrowRight size={14} /></a></div></article></div></div></div></section>

        <section className="section green-section"><div className="container differentiators"><div className="difference-copy"><span className="eyebrow light-eyebrow">DIFFERENTIATORS — 04</span><h2>Why 80+ Delhi Businesses Work With Naveen, Not Big Agencies</h2><p>Most digital agencies sell bloated slide decks and delegate your project to interns. We build production-ready digital growth engines engineered directly by Naveen for commercial velocity.</p><div className="standard"><span>CORE WORKING STANDARD</span><p>“Every line of code and every pixel exists to drive phone inquiries, store visits, and direct bank transfers.”</p></div></div><div className="difference-list">{[['01 / DIRECT ACCOUNTABILITY', 'Direct Principal Accountability', 'You work 1-on-1 with the senior engineer and designer who builds your system.'], ['02 / HYPERLOCAL EXPERTISE', 'Deep Delhi NCR Hyperlocal Nuance', 'We understand footfall dynamics, regional search habits, and local buyer intent.'], ['03 / COMMERCIAL FOCUS', 'Speed & Revenue First, Not Pixel Vanity', 'Every millisecond and every line of copy is tuned to maximize conversions.']].map(([label, title, text], i) => <div className="difference-item" key={label}><span>{label}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

        <section className="section warm" id="lab-products"><div className="container"><SectionHeading eyebrow="PROPRIETARY TECH — 05" title="Digital Products We've Built" description="In-house tools and software frameworks engineered to give Delhi NCR businesses an asymmetric algorithmic advantage." /><div className="products-grid">{[['LocalRanker NCR', 'Geo Tracking', 'Automated geo-grid ranking tracker for Google Business Profiles across Delhi NCR hubs.', 'BETA', 'green'], ['WhatsDesk Pro', 'WhatsApp Engine', 'Omnichannel WhatsApp CRM and lead distribution engine for retail, clinics, and service operations.', 'LIVE', 'orange'], ['DocuFlow AI', 'Vernacular AI', 'Multilingual assistant for patient intake and legal inquiry summarization.', 'PILOT', 'blue'], ['SiteSpeed Turbo', 'Performance', 'Automated asset optimization pipeline guaranteeing 95+ Core Web Vitals.', 'LIVE', 'dark']].map(([title, category, text, status, color]) => <article className={`product-card ${color}`} key={title}><div><div className="product-meta"><span>PRODUCT // {category}</span><b>{status}</b></div><h3>{title}</h3><p>{text}</p></div><a href="#contact">Request Details <ArrowRight size={14} /></a></article>)}</div></div></section>

        <section className="section testimonials"><div className="container"><SectionHeading eyebrow="VALIDATION — 06" title="Client Testimonials" description="Real founders & operators across Delhi NCR" /><div className="testimonial-grid">{[['Dr. Anjali Sharma', 'Founder, Delhi Dental Care, GK-1', 'Naveen took our clinic from page 4 to #1 on Google Maps in South Delhi. Our monthly consultation bookings doubled in 90 days.'], ['Rohan Sethi', 'MD, Aura Luxe Apparel, DLF CyberCity', 'Our headless e-commerce store loads instantly on 4G. Naveen built and launched the entire platform in 3 weeks.'], ['Vikram Malhotra', 'CTO, FinOps India, Noida', 'Flawless engineering and zero agency bloat. Naveen writes clean, scalable code and communicates with total clarity.']].map(([name, role, quote]) => <article className="testimonial" key={name}><div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={15} fill="currentColor" />)}</div><p>“{quote}”</p><footer><b>{name}</b><span>{role}</span></footer></article>)}</div></div></section>

        <section className="section faq-section" id="faq"><div className="container faq-layout"><div><SectionHeading eyebrow="TRANSPARENCY — 07" title="Direct Answers to Hard Questions" description="No agency buzzwords, no opaque retainers, and no hidden fine print." /><div className="email-card"><b>Need a custom scope?</b><p>Send an email directly to Naveen with your business location and existing site.</p><a href="mailto:naveen@sillymedia.in">naveen@sillymedia.in</a></div></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><ChevronDown size={20} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

        <section className="contact" id="contact"><div className="container contact-inner"><span className="eyebrow-pill dark-pill"><i />DIRECT DISCOVERY · NO OBLIGATION</span><h2>Ready to Grow Your Business Online?</h2><p>Let's review your current digital presence, local Google ranking, and conversion bottlenecks over a free 20-minute strategy call with Naveen.</p><div className="contact-actions"><a className="whatsapp" href="https://wa.me/919800000000" target="_blank" rel="noreferrer"><MessageCircle size={18} />Chat with Naveen on WhatsApp</a><a className="orange-button" href="mailto:naveen@sillymedia.in?subject=Growth%20Strategy%20Inquiry">Book a 20-Min Strategy Call</a></div><ContactForm /><div className="contact-meta"><span><small>DIRECT EMAIL</small>naveen@sillymedia.in</span><span><small>HEADQUARTERS</small>Delhi NCR, India</span><span><small>RESPONSE SLA</small>Response within 3 hours</span></div></div></section>
      </main>

      <footer className="footer"><div className="container footer-grid"><div><img src={logo} alt="SillyMedia Solutions" className="footer-logo" /><span className="eyebrow">BROADSHEET STUDIO · DELHI NCR</span><p>Independent digital product architecture and growth consulting operated by Naveen.</p></div><div><h4>Services</h4><a href="#services">Custom Websites</a><a href="#services">Hyperlocal SEO</a><a href="#services">WhatsApp Automation</a><a href="#services">Web Apps & SaaS</a><a href="#services">Custom AI Agents</a></div><div><h4>Cities Served</h4><p>Delhi · Gurugram · Noida</p><p>Faridabad · Ghaziabad</p><p>Greater Noida</p></div><div><h4>Direct Contact</h4><p>Consultations, technical audits, and new builds directly led by Naveen.</p><a href="mailto:naveen@sillymedia.in" className="orange-text">naveen@sillymedia.in</a></div></div><div className="container footer-bottom"><span>© 2026 SillyMedia Solutions. All rights reserved.</span><span>Architectural engineering by Naveen.</span></div></footer>
    </div>
  );
}

export default App;
