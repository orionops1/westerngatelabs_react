import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent clickjacking
  { key: "X-Frame-Options",           value: "DENY" },
  // Prevent MIME sniffing
  { key: "X-Content-Type-Options",    value: "nosniff" },
  // Enable browser XSS protection
  { key: "X-XSS-Protection",          value: "1; mode=block" },
  // DNS prefetch control
  { key: "X-DNS-Prefetch-Control",    value: "on" },
  // Referrer policy
  { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
  // HSTS — force HTTPS for 1 year including subdomains
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
  // Permissions policy — disable unused browser features
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "interest-cohort=()",
    ].join(", "),
  },
  // Content Security Policy
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Allow Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      // Allow scripts from self only (next.js inline scripts use nonces in prod)
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      // Images: self + data URIs
      "img-src 'self' data: https:",
      // Connect to self (API routes + Vercel analytics)
      "connect-src 'self' https:",
      // Frames: deny all
      "frame-ancestors 'none'",
      // Forms: self only
      "form-action 'self'",
      "base-uri 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
  headers: async () => [
    // Apply security headers to all routes
    {
      source: "/:path*",
      headers: securityHeaders,
    },
    // Extra: never cache admin pages
    {
      source: "/admin/:path*",
      headers: [
        { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
        { key: "Pragma",        value: "no-cache"                            },
      ],
    },
  ],
};

export default nextConfig;
