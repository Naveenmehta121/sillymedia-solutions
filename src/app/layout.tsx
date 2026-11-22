import type { Metadata, Viewport } from 'next';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MobileStickyBar from '@/components/MobileStickyBar';
import AnalyticsScripts from '@/components/AnalyticsScripts';
import ClickTracker from '@/components/ClickTracker';
import JsonLd from '@/components/JsonLd';
import { buildGlobalGraph } from '@/lib/schema';
import { isConfigured, siteConfig } from '@/config/site.config';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1208',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    // SEO: default title kept under 60 characters (was 81 with the full tagline)
    default: `${siteConfig.brandName} | Delhi NCR Web, SEO & AI Agency`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.defaultMetaDescription,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} | Delhi NCR Web, SEO & AI Agency`,
    description: siteConfig.defaultMetaDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.brandName} — Delhi NCR Web Development, Local SEO & AI Automation`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.brandName} | Delhi NCR Web, SEO & AI Agency`,
    description: siteConfig.defaultMetaDescription,
    images: ['/og-image.png'],
  },
  verification: isConfigured(siteConfig.analytics.gscToken)
    ? { google: siteConfig.analytics.gscToken }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <head>
        <link
          rel="preload"
          href="/fonts/dm-sans-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/playfair-display-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/space-mono-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <JsonLd data={buildGlobalGraph()} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="site-shell">
          <SiteHeader />
          <div id="main-content">{children}</div>
          <SiteFooter />
          <MobileStickyBar />
        </div>
        <AnalyticsScripts />
        <ClickTracker />
      </body>
    </html>
  );
}
