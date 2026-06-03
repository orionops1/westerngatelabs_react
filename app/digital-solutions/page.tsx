import { Metadata } from "next";
import Button from "@/components/Button";
import { Globe, Code, Smartphone, ShoppingCart, Zap, ArrowRight, CheckCircle2, Palette, Search, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Solutions | Western Gate Labs",
  description:
    "Business websites, WordPress development, Next.js development, landing pages, and e-commerce solutions built for growth and performance.",
  keywords: [
    "web development Sri Lanka", "WordPress development", "Next.js development",
    "e-commerce websites", "business websites", "landing pages", "custom web applications",
  ],
  openGraph: {
    title: "Digital Solutions | Western Gate Labs",
    description: "Business websites, customer portals, SaaS products, and custom web applications built for growth.",
  },
};

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "Business Websites",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    desc: "Professional, responsive websites that establish your brand presence and convert visitors into customers. Built with modern technology, optimized for performance and SEO.",
    capabilities: [
      "Custom design tailored to your brand",
      "Mobile-first responsive layouts",
      "SEO optimization",
      "Content Management System (CMS)",
      "Contact forms & lead capture",
      "Analytics & tracking integration",
      "Fast loading times (< 3s)",
      "SSL security & HTTPS",
    ],
    pricing: "From LKR 25,000",
    timeline: "3-4 weeks",
  },
  {
    id: "wordpress",
    icon: Code,
    title: "WordPress Development",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    desc: "Complete WordPress solutions from setup to custom plugin development. We build robust, scalable WordPress sites with custom themes and functionality that match your exact requirements.",
    capabilities: [
      "Custom theme development",
      "Custom plugin development",
      "WooCommerce e-commerce setup",
      "WordPress multisite networks",
      "Performance optimization",
      "Security hardening",
      "Migration from other platforms",
      "Maintenance & support packages",
    ],
    pricing: "From LKR 35,000",
    timeline: "4-6 weeks",
  },
  {
    id: "nextjs",
    icon: Zap,
    title: "Next.js Development",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    desc: "High-performance web applications built with Next.js and React. Perfect for SaaS products, customer portals, dashboards, and complex web applications that need speed and scalability.",
    capabilities: [
      "Server-side rendering (SSR)",
      "Static site generation (SSG)",
      "API route development",
      "Database integration",
      "Authentication & authorization",
      "Real-time features",
      "Progressive Web Apps (PWA)",
      "Vercel deployment & hosting",
    ],
    pricing: "From LKR 75,000",
    timeline: "6-8 weeks",
  },
  {
    id: "landing",
    icon: Smartphone,
    title: "Landing Pages",
    accent: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    desc: "High-converting landing pages designed specifically for campaigns, product launches, or lead generation. Optimized for conversions with A/B testing capabilities and analytics.",
    capabilities: [
      "Conversion-focused design",
      "A/B testing setup",
      "Form & CTA optimization",
      "Fast deployment (< 1 week)",
      "Email marketing integration",
      "Social proof & testimonials",
      "Analytics & heat mapping",
      "Mobile optimization",
    ],
    pricing: "From LKR 15,000",
    timeline: "1-2 weeks",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    desc: "Complete online stores with secure payment processing, inventory management, and customer accounts. Built on WooCommerce or custom platforms depending on your needs.",
    capabilities: [
      "Product catalog management",
      "Secure payment gateway integration",
      "Shopping cart & checkout",
      "Inventory tracking",
      "Order management system",
      "Customer accounts & wishlists",
      "Shipping & tax calculations",
      "Admin dashboard",
    ],
    pricing: "From LKR 55,000",
    timeline: "6-8 weeks",
  },
];

const techStack = [
  { name: "Next.js", desc: "React framework for production" },
  { name: "WordPress", desc: "World's leading CMS platform" },
  { name: "Tailwind CSS", desc: "Modern utility-first CSS" },
  { name: "TypeScript", desc: "Type-safe JavaScript" },
  { name: "Vercel", desc: "High-performance hosting" },
  { name: "PostgreSQL", desc: "Robust database solution" },
];

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    desc: "Every project starts with your brand identity — we don't use generic templates.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    desc: "60% of traffic is mobile. We design for small screens first, then scale up.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    desc: "Built-in SEO best practices from day one — meta tags, sitemaps, structured data.",
  },
  {
    icon: BarChart3,
    title: "Analytics Ready",
    desc: "Google Analytics, tracking pixels, and conversion monitoring set up from launch.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    desc: "Optimized for speed with lazy loading, image compression, and CDN delivery.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    desc: "Rigorous testing across devices and browsers before launch.",
  },
];

const process = [
  {
    phase: "Discovery & Planning",
    desc: "We start by understanding your business goals, target audience, and technical requirements. Define project scope and deliverables.",
    deliverables: ["Requirements document", "Sitemap & wireframes", "Project timeline"],
  },
  {
    phase: "Design",
    desc: "Create visual designs that match your brand and convert visitors. Review and iterate until perfect.",
    deliverables: ["Design mockups", "Brand guidelines", "Component library"],
  },
  {
    phase: "Development",
    desc: "Build your website with clean, maintainable code. Weekly progress updates and demos.",
    deliverables: ["Functional website", "Admin panel", "Documentation"],
  },
  {
    phase: "Testing & Launch",
    desc: "Comprehensive testing across devices and browsers. SEO setup, analytics, and performance optimization.",
    deliverables: ["QA report", "SEO setup", "Go-live checklist"],
  },
  {
    phase: "Support & Maintenance",
    desc: "Ongoing support, updates, and enhancements. We're here when you need us.",
    deliverables: ["Bug fixes", "Feature updates", "Performance monitoring"],
  },
];

export default function DigitalSolutionsPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-white">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="hero-glow w-[500px] h-[500px] bg-cyan-600/5 -top-20 right-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-4">Digital Solutions</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-5 max-w-3xl">
            Websites & web apps<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">built for growth</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed">
            From business websites and landing pages to custom web applications and e-commerce platforms —
            we build digital solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="lg">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="#websites" variant="secondary" size="lg">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-cyan-300 transition">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-xs text-slate-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services — each with anchor id */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-3">Our Services</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Complete digital solutions
            </h2>
          </div>
          <div className="space-y-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className={`bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-cyan-300 transition scroll-mt-20`}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className={`w-14 h-14 rounded-xl ${svc.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-7 h-7 ${svc.accent}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{svc.title}</h2>
                          <div className="flex flex-wrap gap-3 text-xs">
                            <span className="text-slate-600">
                              <span className="text-slate-700 font-semibold">Pricing:</span> {svc.pricing}
                            </span>
                            <span className="text-slate-600">
                              <span className="text-slate-700 font-semibold">Timeline:</span> {svc.timeline}
                            </span>
                          </div>
                        </div>
                        <Button href="/contact" variant="secondary" size="sm">
                          Get Quote
                        </Button>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">{svc.desc}</p>
                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                        {svc.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {cap}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-3">Technology</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Built with modern tools</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="bg-white border border-slate-200 rounded-xl p-5 text-center hover:shadow-sm hover:border-cyan-300 transition">
                <p className="text-sm font-bold text-slate-900 mb-1">{tech.name}</p>
                <p className="text-xs text-slate-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-semibold mb-3">Process</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How we deliver projects</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {process.map((item, idx, arr) => (
              <div
                key={item.phase}
                className={`p-6 ${idx < arr.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <div className="flex gap-5 mb-3">
                  <span className="text-xs font-mono text-cyan-600 bg-cyan-50 w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 mb-1">{item.phase}</p>
                    <p className="text-xs text-slate-600 mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.deliverables.map((d) => (
                        <span key={d} className="text-xs px-2 py-1 rounded-md bg-cyan-50 text-cyan-700 border border-cyan-100">
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-600 to-blue-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-cyan-100 mb-8 text-sm">
            Get a free consultation and project estimate. We'll help you choose the 
            right solution for your business goals and budget.
          </p>
          <Button href="/contact" size="lg">
            Request Free Consultation
          </Button>
        </div>
      </section>

    </div>
  );
}
