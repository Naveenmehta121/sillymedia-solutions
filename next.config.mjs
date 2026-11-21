/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // Removed case studies (22 Nov 2026) — send old URLs to the Work index
    return [
      { source: '/work/aura-luxe-fashion', destination: '/work', permanent: true },
      { source: '/work/delhi-dental-care', destination: '/work', permanent: true },
      { source: '/work/finops-india', destination: '/work', permanent: true },
    ];
  },
};

export default nextConfig;
