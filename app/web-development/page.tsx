import { Metadata } from "next";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { Globe, ShoppingCart, Zap, Code, Palette, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development | Westerngate Labs",
  description:
    "Custom web applications, APIs, and digital platforms built with modern stacks and security-first architecture.",
  keywords: ["web development", "custom applications", "Next.js", "API development"],
  openGraph: {
    title: "Web Development | Westerngate Labs",
    description: "Scalable web applications built the right way.",
  },
};

const services = [
  {
    icon: Globe,
    title: "Corporate Web",
    description: "Fast, accessible, and SEO-optimized websites that represent your brand with authority.",
    href: "/web-development",
    features: ["Next.js & React", "CMS integration", "Core Web Vitals optimized"],
  },
  {
    icon: Code,
    title: "Custom Applications",
    description: "Bespoke web apps engineered for your specific workflows — built to scale from day one.",
    href: "/web-development",
    features: ["Scalable architecture", "Real-time features", "API design"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "High-conversion commerce experiences with secure payment flows and inventory intelligence.",
    href: "/web-development",
    features: ["Payment integration", "Inventory management", "Analytics & conversion"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean, functional interfaces grounded in user research — not just visual trends.",
    href: "/web-development",
    features: ["User research", "Figma prototyping", "Accessibility (WCAG 2.1)"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Make your existing web properties faster. Better Core Web Vitals, better conversion.",
    href: "/web-development",
    features: ["Load time audits", "Caching & CDN", "Bundle optimization"],
  },
  {
    icon: TrendingUp,
    title: "Maintenance & Support",
    description: "Ongoing monitoring, updates, and technical support so your platform stays reliable.",
    href: "/web-development",
    features: ["Security patching", "Uptime monitoring", "Technical support"],
  },
];

const stack = [
  { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", techs: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"] },
  { category: "Cloud & DevOps", techs: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD"] },
  { category: "Security", techs: ["OAuth 2.0", "WAF", "HTTPS / TLS", "OWASP standards", "CSP"] },
];

export default function WebDevelopmentPage() {
  return (
    <div className="bg-navy-900">

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="tag mb-4 inline-block">Web Development</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Applications that perform under pressure
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-8">
            We build web platforms with the same discipline we bring to security
            work — careful architecture, clean code, and no shortcuts.
          </p>
          <Button href="/contact" size="lg">
            Start a web project
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="tag mb-3 inline-block">Capabilities</span>
            <h2 className="text-2xl font-bold text-white">What we build</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <ServiceCard key={idx} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="tag mb-3 inline-block">Stack</span>
            <h2 className="text-2xl font-bold text-white">Technology we use</h2>
            <p className="text-slate-500 text-sm mt-2">
              Proven, modern, and maintainable — no unnecessary complexity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {stack.map((group) => (
              <div key={group.category} className="glass rounded-xl p-6">
                <p className="text-xs font-semibold text-electric-blue mb-4 uppercase tracking-widest">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 text-slate-300 rounded-md text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality standards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="tag mb-3 inline-block">Standards</span>
            <h2 className="text-2xl font-bold text-white">What we target</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { metric: "Page load", target: "< 2s", note: "Core Web Vitals" },
              { metric: "Uptime", target: "99.9%", note: "SLA-backed" },
              { metric: "Security score", target: "A+", note: "SSL Labs / Observatory" },
              { metric: "Lighthouse", target: "95+", note: "Mobile & desktop" },
            ].map((item) => (
              <div key={item.metric} className="glass rounded-xl p-6 text-center">
                <p className="text-xs text-slate-500 mb-2">{item.metric}</p>
                <p className="text-2xl font-bold text-electric-blue mb-1">{item.target}</p>
                <p className="text-xs text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
            Share what you're building and we'll talk through the right approach.
          </p>
          <Button href="/contact" size="lg">
            Discuss your project
          </Button>
        </div>
      </section>

    </div>
  );
}
