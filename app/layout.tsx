import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://western-gate-labs.com"),
  title: "Western Gate Labs | AI & Cybersecurity Solutions",
  description:
    "Transform operations, strengthen security, and accelerate growth through AI-powered innovation and cybersecurity expertise for modern businesses.",
  keywords: [
    "AI solutions",
    "cybersecurity",
    "web development",
    "artificial intelligence",
    "security consulting",
    "AI automation",
  ],
  authors: [{ name: "Western Gate Labs" }],
  creator: "Western Gate Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://western-gate-labs.com",
    siteName: "Western Gate Labs",
    title: "Western Gate Labs | AI & Cybersecurity Solutions",
    description:
      "Transform operations, strengthen security, and accelerate growth through intelligent technology solutions.",
    images: [
      {
        url: "https://western-gate-labs.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Western Gate Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Western Gate Labs | AI & Cybersecurity Solutions",
    description:
      "Transform operations, strengthen security, and accelerate growth through intelligent technology solutions.",
    images: ["https://western-gate-labs.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-navy-900 text-slate-100 overflow-x-hidden font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
