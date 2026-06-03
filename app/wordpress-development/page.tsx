import { Metadata } from "next";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { Code2, ShoppingCart, Zap, Puzzle, Globe, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "WordPress Development | Western Gate Labs",
  description:
    "Expert WordPress development in Sri Lanka — custom themes, plugin development, WooCommerce, performance optimization, and enterprise WordPress solutions.",
  keywords: [
    "WordPress development Sri Lanka", "custom WordPress plugin", "WooCommerce development",
    "WordPress theme development", "WordPress expert", "WordPress agency",
  ],
  openGraph: {
    title: "WordPress Development | Western Gate Labs",
    description: "Custom WordPress themes, plugins, and WooCommerce solutions.",
  },
};

const services = [
  {
    icon: Globe,
    title: "Custom Theme Development",
    description: "Pixel-perfect WordPress themes built from scratch — fast, accessible, and tailored to your brand.",
    href: "/wordpress-development",
    features: ["Figma to WordPress", "Fully responsive", "SEO-optimized markup", "Accessibility compliant"],
    accent: "blue" as const,
  },
  {
    icon: Puzzle,
    title: "Plugin Development",
    description: "Custom WordPress plugins that extend your site's functionality — built to WordPress coding standards.",
    href: "/wordpress-development",
    features: ["Custom post types & taxonomies", "REST API integration", "Admin dashboard UIs", "Third-party integrations"],
    accent: "purple" as const,
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Solutions",
    description: "Full-featured e-commerce builds on WooCommerce — from product setup to payment gateway integration.",
    href: "/wordpress-development",
    features: ["Custom checkout flows", "Payment gateways", "Inventory management", "Subscription products"],
    accent: "cyan" as const,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Make your WordPress site fast. Core Web Vitals improvements, caching, and database optimization.",
    href: "/wordpress-development",
    features: ["Core Web Vitals audit", "Caching setup", "Image optimization", "Database cleanup"],
    accent: "blue" as const,
  },
  {
    icon: Code2,
    title: "Headless WordPress",
    description: "Use WordPress as a headless CMS with a Next.js or React frontend — best of both worlds.",
    href: "/wordpress-development",
    features: ["WPGraphQL / REST API", "Next.js frontend", "Decoupled architecture", "Better performance"],
    accent: "purple" as const,
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing care for your WordPress site — security updates, backups, and technical support.",
    href: "/wordpress-development",
    features: ["Core & plugin updates", "Daily backups", "Security scanning", "Priority support"],
    accent: "cyan" as const,
  },
];

const pricing = [
  {
    name: "Starter",
    lkr: "LKR 150,000",
    usd: "~ $500 USD",
    desc: "Perfect for small businesses needing a professional WordPress presence.",
    features: [
      "Custom WordPress theme",
      "Up to 10 pages",
      "Mobile responsive",
      "Basic SEO setup",
      "Contact form",
      "1 month support",
    ],
    cta: "Get started",
  },
  {
    name: "Professional",
    lkr: "LKR 450,000",
    usd: "~ $1,500 USD",
    desc: "For businesses needing custom functionality and WooCommerce.",
    features: [
      "Custom theme + plugin",
      "WooCommerce setup",
      "Up to 30 pages",
      "Payment gateway integration",
      "Performance optimization",
      "3 months support",
    ],
    cta: "Most popular",
    highlight: true,
  },
  {
    name: "Enterprise",
    lkr: "LKR 1,200,000+",
    usd: "~ $4,000+ USD",
    desc: "Complex builds with custom plugins, headless architecture, or large-scale WooCommerce.",
    features: [
      "Fully custom solution",
      "Headless WordPress option",
      "Custom plugin suite",
      "Multi-language support",
      "Advanced integrations",
      "6 months support",
    ],
    cta: "Contact us",
  },
];

const expertise = [
  "WordPress 6.x (Block Editor / Gutenberg)",
  "Advanced Custom Fields (ACF) Pro",
  "WooCommerce & WooCommerce Subscriptions",
  "Elementor & Elementor Pro",
  "WPML & Polylang (multilingual)",
  "WPGraphQL / Headless WordPress",
  "BuddyPress / Community sites",
  "LMS: LearnDash, LifterLMS",
  "Membership: MemberPress, Restrict Content Pro",
  "CDN: Cloudflare, BunnyCDN",
  "Caching: WP Rocket, W3 Total Cache",
  "Security: Wordfence, Sucuri",
];

export default function WordPressDevelopmentPage() {
  return (
    <div className="bg-[#03050f]">

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="hero-glow w-96 h-96 bg-blue-600/10 -top-20 right-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="tag mb-4 inline-block">WordPress Development</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            WordPress experts who understand<br className="hidden sm:block" />
            <span className="gradient-text"> modern web development</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">
            Custom themes, bespoke plugins, WooCommerce stores, and headless WordPress
            architecture — built by a team that takes code quality seriously.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="lg">
              Discuss your project
            </Button>
            <Button href="#pricing" variant="secondary" size="lg">
              View pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <span className="tag mb-3 inline-block">Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What we build</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((s, idx) => (
              <ServiceCard key={idx} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise / plugins */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="tag mb-3 inline-block">Expertise</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Plugins & platforms we master</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {expertise.map((item) => (
              <span key={item} className="px-3 py-1.5 glass rounded-lg text-xs sm:text-sm text-slate-300 font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 sm:mb-12">
            <span className="tag mb-3 inline-block">Pricing</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">WordPress project pricing</h2>
            <p className="text-slate-500 text-sm mt-2">Prices in Sri Lankan Rupees (LKR). USD equivalents shown for reference.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-6 sm:p-7 flex flex-col ${
                  plan.highlight
                    ? "bg-gradient-to-b from-blue-900/40 to-blue-950/20 border border-blue-500/40"
                    : "glass"
                }`}
              >
                {plan.highlight && (
                  <span className="tag self-start mb-3">Most Popular</span>
                )}
                <h3 className="text-base font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">{plan.desc}</p>
                <p className="text-2xl font-bold text-white mb-0.5">{plan.lkr}</p>
                <p className="text-xs text-slate-500 mb-6">{plan.usd}</p>
                <ul className="space-y-2 flex-grow mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant={plan.highlight ? "primary" : "secondary"} size="sm" className="w-full justify-center">
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Have a WordPress project?
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
            Share your requirements and we'll send a detailed proposal within 48 hours.
          </p>
          <Button href="/contact" size="lg">
            Get a free quote
          </Button>
        </div>
      </section>

    </div>
  );
}
