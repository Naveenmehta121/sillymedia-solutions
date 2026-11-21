import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const uploadedPath = 'C:/Users/hpsin/.gemini/antigravity/brain/4ec75522-4235-42e3-a41b-7e5d8b4d060e/.user_uploaded/media_1795288595120_1a65452d.jpg';
const root = process.cwd();
const imagesDir = path.join(root, 'public', 'images');
fs.mkdirSync(imagesDir, { recursive: true });

async function processAllVariants() {
  const { data, info } = await sharp(uploadedPath).raw().toBuffer({ resolveWithObject: true });

  // Remove white background with smooth anti-aliased alpha
  const rgba = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    const brightness = (r + g + b) / 3;

    let alpha = 255;
    if (brightness > 250) {
      alpha = 0;
    } else if (brightness > 235) {
      alpha = Math.round(((250 - brightness) / 15) * 255);
    }

    rgba[i * 4] = r;
    rgba[i * 4 + 1] = g;
    rgba[i * 4 + 2] = b;
    rgba[i * 4 + 3] = alpha;
  }

  const rawFull = sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } });

  // 1. Original stacked lockup (minX: 257, maxX: 743, minY: 280, maxY: 655)
  const fullBuf = await rawFull
    .clone()
    .extract({ left: 245, top: 270, width: 510, height: 395 })
    .png()
    .toBuffer();

  await sharp(fullBuf).png({ compressionLevel: 9 }).toFile(path.join(imagesDir, 'logo.png'));
  await sharp(fullBuf).webp({ quality: 95 }).toFile(path.join(imagesDir, 'logo.webp'));

  // 2. Just the Sm mark (top: 275, bottom: 512, left: 250, right: 735)
  const markBuf = await rawFull
    .clone()
    .extract({ left: 250, top: 275, width: 485, height: 238 })
    .png()
    .toBuffer();

  await sharp(markBuf).png().toFile(path.join(imagesDir, 'logo-mark.png'));
  await sharp(markBuf).webp().toFile(path.join(imagesDir, 'logo-mark.webp'));

  // 3. Just the text block "silly media \n DIGITAL MARKETING" (top: 535 to 655, left: 255 to 735)
  const textBuf = await rawFull
    .clone()
    .extract({ left: 255, top: 535, width: 480, height: 120 })
    .png()
    .toBuffer();

  await sharp(textBuf).png().toFile(path.join(imagesDir, 'logo-text.png'));
  await sharp(textBuf).webp().toFile(path.join(imagesDir, 'logo-text.webp'));

  // 4. Horizontal lockup: Sm mark on left (scaled), text block on right (scaled)
  // Let's create an elegant wide banner lockup: width 800, height 200
  const scaledMark = await sharp(markBuf).resize({ height: 160 }).toBuffer();
  const markMeta = await sharp(scaledMark).metadata();
  const scaledText = await sharp(textBuf).resize({ height: 110 }).toBuffer();
  const textMeta = await sharp(scaledText).metadata();

  const totalW = markMeta.width + 30 + textMeta.width;
  const canvasH = 180;
  const markY = Math.round((canvasH - markMeta.height) / 2);
  const textY = Math.round((canvasH - textMeta.height) / 2);

  const horizontalBuf = await sharp({
    create: {
      width: totalW,
      height: canvasH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: scaledMark, top: markY, left: 0 },
      { input: scaledText, top: textY, left: markMeta.width + 30 },
    ])
    .png()
    .toBuffer();

  await sharp(horizontalBuf).png().toFile(path.join(imagesDir, 'logo-horizontal.png'));
  await sharp(horizontalBuf).webp().toFile(path.join(imagesDir, 'logo-horizontal.webp'));

  // 5. App Icons & Favicons
  // Square mark with padding
  const squareCanvas = await sharp(markBuf)
    .resize(400, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 100,
      bottom: 100,
      left: 0,
      right: 0,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  await sharp(squareCanvas).resize(16, 16).png().toFile(path.join(root, 'public', 'favicon-16x16.png'));
  await sharp(squareCanvas).resize(32, 32).png().toFile(path.join(root, 'public', 'favicon-32x32.png'));
  await sharp(squareCanvas).resize(180, 180).png().toFile(path.join(root, 'public', 'apple-touch-icon.png'));
  await sharp(squareCanvas).resize(192, 192).png().toFile(path.join(root, 'public', 'icon-192.png'));
  await sharp(squareCanvas).resize(512, 512).png().toFile(path.join(root, 'public', 'icon-512.png'));

  // 6. Favicon SVG
  const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
    <rect width="512" height="512" fill="#ffffff" rx="100"/>
    <image href="/images/logo-mark.png" x="32" y="96" width="448" height="320"/>
  </svg>`;
  fs.writeFileSync(path.join(root, 'public', 'favicon.svg'), svgFavicon);

  // 7. OG Image
  const ogOverlay = await sharp(fullBuf).resize(420, 325, { fit: 'contain' }).toBuffer();
  const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f5f0e8"/>
    <rect x="0" y="0" width="1200" height="14" fill="#e8611a"/>
    <rect x="0" y="566" width="1200" height="64" fill="#1a1208"/>
    <rect x="56" y="54" width="1088" height="468" fill="#ffffff" stroke="#1a1208" stroke-width="3"/>
    <rect x="64" y="62" width="1088" height="468" fill="none"/>
    <line x1="96" y1="360" x2="1104" y2="360" stroke="#d6cec0" stroke-width="2"/>
    <text x="96" y="412" font-family="Georgia, serif" font-size="34" font-weight="700" fill="#1a1208">Delhi NCR Digital Marketing &amp; Web Engineering Agency</text>
    <text x="96" y="454" font-family="sans-serif" font-size="20" fill="#594138">Custom Websites · Hyperlocal Google Maps SEO · WhatsApp Automation · Web Apps &amp; AI</text>
    <rect x="96" y="478" width="220" height="38" fill="#e8611a"/>
    <text x="206" y="502" text-anchor="middle" font-family="monospace" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1.5">DELHI · GURUGRAM</text>
    <rect x="330" y="478" width="230" height="38" fill="#1d4d2e"/>
    <text x="445" y="502" text-anchor="middle" font-family="monospace" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1.5">NOIDA · FARIDABAD</text>
    <rect x="574" y="478" width="230" height="38" fill="#1a1208"/>
    <text x="689" y="502" text-anchor="middle" font-family="monospace" font-size="14" font-weight="700" fill="#ffffff" letter-spacing="1.5">GHAZIABAD · NCR</text>
    <text x="56" y="605" font-family="monospace" font-size="17" font-weight="700" fill="#f5f0e8" letter-spacing="2">SILLYMEDIA.IN · DIGITAL MARKETING &amp; WEB ARCHITECTURE</text>
  </svg>`;

  await sharp(Buffer.from(ogSvg))
    .composite([{ input: ogOverlay, top: 70, left: 96 }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(root, 'public', 'og-image.png'));

  await sharp(path.join(root, 'public', 'og-image.png'))
    .webp({ quality: 85 })
    .toFile(path.join(root, 'public', 'og-image.webp'));

  console.log('All variants generated: logo.png, logo-mark.png, logo-text.png, logo-horizontal.png, favicons, OG!');
}

processAllVariants().catch((e) => {
  console.error(e);
  process.exit(1);
});
