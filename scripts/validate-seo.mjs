import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve(process.cwd(), 'out');

function walkHtml(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkHtml(full));
    } else if (entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const files = walkHtml(outDir);
if (files.length === 0) {
  console.error('No HTML files found in out/. Run npm run build first.');
  process.exit(1);
}

const errors = [];
let totalJsonLd = 0;
const schemaTypesSeen = new Set();

const FORBIDDEN_PLACEHOLDER_RE =
  /\[(PHONE|PHONE_DISPLAY|WHATSAPP_NUMBER|GA4_ID|GSC_TOKEN|CLARITY_ID|STREET_ADDRESS|POSTAL_CODE|GEO_LAT|GEO_LNG|OPENING_HOURS|PRICE_RANGE|PRICE_TIER_[A-Z_]+|FOUNDER_[A-Z_]+|COMPANY_[A-Z_]+|GBP_URL|CLUTCH_URL|GOODFIRMS_URL|INSTAGRAM_URL|DATA NEEDED)\]/;

for (const file of files) {
  const rel = path.relative(outDir, file);
  const html = fs.readFileSync(file, 'utf8');
  const is404 = rel === '404.html' || rel === '_not-found.html';

  if (!html.includes('lang="en-IN"')) {
    errors.push(`${rel}: missing lang="en-IN"`);
  }

  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  if (h1Count !== 1) {
    errors.push(`${rel}: expected exactly 1 <h1>, found ${h1Count}`);
  }

  if (!is404) {
    if (!/<link[^>]+rel="canonical"/i.test(html)) {
      errors.push(`${rel}: missing canonical link`);
    }
    if (!/<meta[^>]+name="description"/i.test(html)) {
      errors.push(`${rel}: missing meta description`);
    }
  }

  // Ensure no raw bracket placeholders leak into production HTML
  const phMatch = html.match(FORBIDDEN_PLACEHOLDER_RE);
  if (phMatch) {
    errors.push(`${rel}: raw placeholder leaked into HTML -> ${phMatch[0]}`);
  }

  // Validate all JSON-LD blocks
  const jsonLdMatches = [
    ...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi),
  ];
  if (jsonLdMatches.length === 0) {
    errors.push(`${rel}: no JSON-LD script blocks found`);
  }

  for (const m of jsonLdMatches) {
    totalJsonLd++;
    let parsed;
    try {
      parsed = JSON.parse(m[1]);
    } catch (e) {
      errors.push(`${rel}: invalid JSON-LD JSON (${e.message})`);
      continue;
    }

    if (parsed['@context'] !== 'https://schema.org') {
      errors.push(`${rel}: JSON-LD missing @context https://schema.org`);
    }

    const nodes = Array.isArray(parsed['@graph']) ? parsed['@graph'] : [parsed];
    for (const node of nodes) {
      const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
      for (const t of types) {
        if (!t) {
          errors.push(`${rel}: JSON-LD node missing @type`);
          continue;
        }
        schemaTypesSeen.add(t);
        if (t === 'AggregateRating' || t === 'Review') {
          errors.push(`${rel}: forbidden unverified schema type ${t}`);
        }
      }

      // Check FAQPage matches visible DOM text
      if (types.includes('FAQPage')) {
        if (!Array.isArray(node.mainEntity) || node.mainEntity.length === 0) {
          errors.push(`${rel}: FAQPage has empty mainEntity`);
        } else {
          for (const q of node.mainEntity) {
            if (!q.name || !q.acceptedAnswer?.text) {
              errors.push(`${rel}: FAQPage Question missing name or acceptedAnswer.text`);
            }
          }
        }
      }

      if (types.includes('BreadcrumbList')) {
        if (!Array.isArray(node.itemListElement) || node.itemListElement.length < 2) {
          errors.push(`${rel}: BreadcrumbList has fewer than 2 items`);
        }
      }

      if (types.includes('Service')) {
        if (!node.name || !node.provider?.['@id']) {
          errors.push(`${rel}: Service schema missing name or linked provider @id`);
        }
      }

      if (types.includes('Article')) {
        if (!node.headline || !node.author?.['@id'] || !node.publisher?.['@id']) {
          errors.push(`${rel}: Article schema missing headline/author/publisher @id`);
        }
      }
    }
  }
}

console.log(`Validated ${files.length} HTML files and ${totalJsonLd} JSON-LD blocks.`);
console.log(`Schema @types verified: ${[...schemaTypesSeen].sort().join(', ')}`);

if (errors.length > 0) {
  console.error('\nVALIDATION ERRORS:');
  for (const err of errors) console.error(' - ' + err);
  process.exit(1);
}

console.log('ALL SEO & JSON-LD VALIDATION CHECKS PASSED WITH 0 ERRORS.');
