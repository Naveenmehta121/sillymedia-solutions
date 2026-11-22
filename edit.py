import re

# ---------- work.ts ----------
p = '/tmp/work3-edits/src/data/work.ts'
s = open(p).read()

s = s.replace(
    "imageWebp: '/images/case-the-diets.svg',\n    imageAvif: '/images/case-the-diets.svg',",
    "imageWebp: '/images/case-the-diets.webp',\n    imageAvif: '/images/case-the-diets.webp',",
)

silly = """  {
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
      'The agency\u2019s own website — a single-page site for restaurant and hospitality brands in Delhi NCR, showing client work, services, process, pricing and team.',
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
      'Put the agency\u2019s published stats up front: 20+ brands transformed, 150k+ growth and a 90% average growth rate.',
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
  },"""

rajesh = """  {
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
  },"""

anchor = "  },\n];\n\nexport function getCaseStudyBySlug"
assert anchor in s, 'work.ts anchor missing'
s = s.replace(anchor, "  },\n" + silly + "\n" + rajesh + "\n];\n\nexport function getCaseStudyBySlug", 1)
open(p, 'w').write(s)
print('work.ts done; entries:', s.count("slug: '"), '| webp refs:', s.count('.webp'))

# ---------- page.tsx (homepage) ----------
p = '/tmp/work3-edits/src/app/page.tsx'
s = open(p).read()
n = s.count('/images/hero-showcase.svg')
s = s.replace('/images/hero-showcase.svg', '/images/hero-showcase.webp')
assert 'title="Selected Work & Production Deployment"' in s
s = s.replace('title="Selected Work & Production Deployment"', 'title="Selected Work & Production Deployments"')
assert 'description="Live production deployment — thediets.in, an online dietitian platform."' in s
s = s.replace('description="Live production deployment — thediets.in, an online dietitian platform."',
              'description="Three live production deployments — thediets.in, sillymedia.co.in and the Rajesh Paul Bridal Collection."')
open(p, 'w').write(s)
print(f'page.tsx done; hero src replaced x{n}; svg left:', s.count('hero-showcase.svg'))

# ---------- work/page.tsx (index) ----------
p = '/tmp/work3-edits/src/app/work/page.tsx'
s = open(p).read()
old_desc = 'Selected web development, local SEO, WhatsApp booking, and B2B SaaS deployments built across Delhi NCR — currently featuring The Diets (thediets.in).'
new_desc = 'Selected web development and design deployments — The Diets (thediets.in), SillyMedia (sillymedia.co.in) and the Rajesh Paul Bridal Collection.'
assert s.count(old_desc) == 3, f'desc count {s.count(old_desc)}'
s = s.replace(old_desc, new_desc)
s = s.replace("const pageTitle = 'Our Work — The Diets (thediets.in)';", "const pageTitle = 'Our Work — Selected Projects';")
s = s.replace('SillyMedia Solutions — Selected Work & Production Deployment', 'SillyMedia Solutions — Selected Work & Production Deployments')
s = s.replace('<h1>Our Work &amp; Production Deployment</h1>', '<h1>Our Work &amp; Production Deployments</h1>')
s = s.replace('<span>Online Dietitian · 1:1 Diet Plans</span>', '<span>Three Live Deployments</span>')
old_ans = """              SillyMedia Solutions engineers production digital systems for Delhi NCR businesses.
              Our live deployment is The Diets (thediets.in) — an online dietitian platform with
              1:1 diet plans, online consultation booking and transparent pricing."""
new_ans = """              SillyMedia Solutions engineers production digital systems for Delhi NCR businesses.
              Our live deployments are The Diets (thediets.in), an online dietitian platform with
              1:1 diet plans; SillyMedia (sillymedia.co.in), the agency&apos;s own website; and the
              Rajesh Paul Bridal Collection, a heritage bridal couture showcase."""
assert old_ans in s, 'answer-box anchor missing'
s = s.replace(old_ans, new_ans)
open(p, 'w').write(s)
print('work/page.tsx done; old desc left:', s.count(old_desc), '| The Diets-only title left:', 'The Diets (thediets.in)' in s.split('const pageTitle')[0])

# ---------- llms.txt ----------
p = '/tmp/work3-edits/public/llms.txt'
s = open(p).read()
anchor = "- [The Diets — Online Dietitian Website (thediets.in)](https://sillymedia.in/work/the-diets): Online dietitian platform with 1:1 diet plans and online consultation booking.\n"
assert anchor in s
s = s.replace(anchor, anchor +
  "- [SillyMedia — Agency Website (sillymedia.co.in)](https://sillymedia.in/work/sillymedia): The agency's own website for restaurant and hospitality brands in Delhi NCR, with client work, services, process and pricing.\n" +
  "- [Rajesh Paul Bridal Collection — Bridal Couture Website](https://sillymedia.in/work/rajesh-paul-bridal-collection): Heritage bridal couture house, est. 1998 — heirloom lehengas and wedding couture with an editorial collections gallery and appointment booking.\n")
open(p, 'w').write(s)
print('llms.txt done')

# ---------- llms-full.txt ----------
p = '/tmp/work3-edits/public/llms-full.txt'
s = open(p).read()
anchor = "- **The Diets** (`/work/the-diets`, Online · Pan-India): Online dietitian platform (thediets.in) with 1:1 diet plans, online consultation booking and transparent plan pricing, built and optimised by SillyMedia Solutions.\n"
assert anchor in s
s = s.replace(anchor, anchor +
  "- **SillyMedia** (`/work/sillymedia`, Delhi NCR): The agency's own website (sillymedia.co.in) for restaurant and hospitality brands, with client work, services, process and pricing.\n" +
  "- **Rajesh Paul Bridal Collection** (`/work/rajesh-paul-bridal-collection`, Kolkata): Heritage bridal couture house, est. 1998 — heirloom lehengas and wedding couture, with an editorial collections gallery and appointment booking.\n")
open(p, 'w').write(s)
print('llms-full.txt done')
print('ALL EDITS OK')
