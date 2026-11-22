import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { isConfigured, siteConfig } from '@/config/site.config';

export default function PricingSection({ sectionNumber = '06' }: { sectionNumber?: string }) {
  return (
    <section className="section cream" id="pricing">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">TRANSPARENT ENGAGEMENT — {sectionNumber}</span>
            <h2>How Much Does a Website, Local SEO, or Automation Cost in Delhi NCR?</h2>
          </div>
          <p>
            Fixed milestone scopes matched to your commercial goal — no vague agency retainers or
            hidden add-ons. Every quote is finalized after a free 20-minute technical review.
          </p>
        </div>

        <div className="pricing-grid">
          {siteConfig.pricing.tiers.map((tier) => {
            const hasPrice = isConfigured(tier.startingPrice);
            return (
              <article className={`pricing-card pricing-${tier.accent}`} key={tier.id}>
                <div>
                  <span className="pricing-eyebrow">{tier.eyebrow}</span>
                  <h3>{tier.name}</h3>
                  <div className="pricing-price-block">
                    {hasPrice && <span className="pricing-starting-label">Starting from</span>}
                    <strong className="pricing-amount">
                      {hasPrice ? tier.startingPrice : tier.fallbackLabel}
                    </strong>
                    <small className="pricing-timeline">Typical timeline: {tier.timeline}</small>
                  </div>
                  <p className="pricing-best-for">{tier.bestFor}</p>
                  <ul className="pricing-features">
                    {tier.features.map((feat) => (
                      <li key={feat}>
                        <CheckCircle2 size={15} aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/#contact" className="button-link pricing-cta">
                  {tier.ctaLabel} <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        <div style={{ marginTop: 56 }}>
          <div className="section-heading">
            <div>
              <span className="eyebrow">WEBSITE PACKAGES — FIXED PRICES</span>
              <h2>Website Packages With Clear, Fixed Pricing</h2>
            </div>
            <p>
              One-page, multi-page and e-commerce websites at fixed prices — no hidden add-ons.
              Every package starts with a free 20-minute review.
            </p>
          </div>

          <div className="pricing-grid">
            {siteConfig.pricing.websitePackages.map((tier) => {
              const hasPrice = isConfigured(tier.startingPrice);
              return (
                <article className={`pricing-card pricing-${tier.accent}`} key={tier.id}>
                  <div>
                    <span className="pricing-eyebrow">{tier.eyebrow}</span>
                    <h3>{tier.name}</h3>
                    <div className="pricing-price-block">
                      {hasPrice && <span className="pricing-starting-label">Starting from</span>}
                      <strong className="pricing-amount">
                        {hasPrice ? tier.startingPrice : tier.fallbackLabel}
                      </strong>
                      <small className="pricing-timeline">Typical timeline: {tier.timeline}</small>
                    </div>
                    <p className="pricing-best-for">{tier.bestFor}</p>
                    <ul className="pricing-features">
                      {tier.features.map((feat) => (
                        <li key={feat}>
                          <CheckCircle2 size={15} aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/#contact" className="button-link pricing-cta">
                    {tier.ctaLabel} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>

        <div className="terms-strip" aria-label="Commercial terms">
          {siteConfig.pricing.termsStrip.map((term) => (
            <div className="terms-strip-item" key={term.label}>
              <span>{term.label}</span>
              <strong>{term.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
