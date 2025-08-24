// Next.js configuration without any internationalization plugins

/** @type {import('next').NextConfig} */
// Use empty string for local development and testing to use relative paths
const isProduction = process.env.NODE_ENV === "production";
// Only use remote URL when in VERCEL production environment
const isVercel = process.env.VERCEL === "1" || process.env.VERCEL === "true";
const URL = isProduction && isVercel ? "https://home.gutricious.com" : "";

const nextConfig = {
  assetPrefix: URL,
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add redirects for root path
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    unoptimized: isProduction,
  },
  // Exclude test and example files from production build
  outputFileTracingExcludes: {
    "*": [
      "**/test/**",
      "**/examples/**",
      "**/__tests__/**",
      "**/__mocks__/**",
      "**/test-utils/**",
    ],
  },
};

module.exports = nextConfig;
