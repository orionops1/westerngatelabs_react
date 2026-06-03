import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Brain, Shield, Globe, ArrowRight,
  Cpu, Network, Lock, Zap, Database, Code2,
  MessageSquare, BarChart3, Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Western Gate Labs | AI-First Technology & Cybersecurity",
  description:
    "Western Gate Labs is an AI-first technology company based in Malabe, Sri Lanka. We build intelligent systems, secure infrastructure, and enterprise web platforms powered by Google Cloud and Vertex AI.",
  keywords: [
    "AI startup Sri Lanka", "AI solutions", "cybersecurity Sri Lanka",
    "Google Cloud AI", "Vertex AI", "machine learning", "web development",
    "WordPress development", "AI consulting", "digital transformation",
  ],
  openGraph: {
    title: "Western Gate Labs | AI-First Technology & Cybersecurity",
    description: "AI-powered innovation from Sri Lanka — built on Google Cloud.",
    type: "website",
  },
  alternates: { canonical: "https://westerngatelabs.com" },
};

const stats = [
  { value: "250+", label: "Projects delivered" },
  { value: "98%",  label: "Client retention"   },
  { value: "40%",  label: "Avg. cost reduction" },
  { value: "24/7", label: "Security coverage"   },
];

const techStack = [
  { icon: Cpu,          name: "Vertex AI",         desc: "Google's managed ML platform for training and deploying models at scale" },
  { icon: MessageSquare,name: "Gemini API",         desc: "Multimodal LLM integration for intelligent applications" },
  { icon: Database,     name: "BigQuery",           desc: "Petabyte-scale analytics and AI-ready data warehousing" },
  { icon: Network,      name: "Cloud Run",          desc: "Serverless container deployment for scalable AI workloads" },
  { icon: BarChart3,    name: "Looker Studio",      desc: "Data visualization and business intelligence dashboards" },
  { icon: Search,       name: "Vertex AI Search",   desc: "Enterprise search powered by Google's retrieval models" },
];

const capabilities = [
  { icon: Lock,    label: "Zero-trust security"   },
  { icon: Cpu,     label: "LLM & GenAI deployment" },
  { icon: Network, label: "Threat intelligence"    },
  { icon: Brain,   label: "Predictive analytics"   },
  { icon: Zap,     label: "Real-time automation"   },
  { icon: Code2,   label: "API-first architecture" },
];

export default function Home() {
  return (
    <div className="bg-[#03050f]">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="hero-glow w-[500px] h-[500px] bg-blue-600/10 top-1/4 -left-32" />
        <div className="hero-glow w-[400px] h-[400px] bg-violet-600/8 top-1/3 right-0" />

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/8 text-xs font-medium text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-slow" />
              AI-First · Built on Google Cloud · Malabe, Sri Lanka
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.06] tracking-tight text-white mb-6">
              Intelligent systems.<br />
              <span className="gradient-text">Unbreakable security.</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
              Western Gate Labs builds AI-powered applications, hardens cybersecurity
              infrastructure, and delivers enterprise web platforms — all powered by
              Google Cloud's AI ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <Button href="/contact" size="lg">
                Start a project <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/ai-solutions" variant="secondary" size="lg">
                Explore AI solutions
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-10 border-t border-white/[0.07]">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-14">
            <span className="tag mb-3 inline-block">What we do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Three practices. One integrated team.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <ServiceCard
              icon={Brain}
              accent="blue"
              title="AI Solutions"
              description="Custom AI systems, chatbots, automation platforms, and intelligent assistants designed to improve business efficiency."
              href="/ai-solutions"
              features={["AI Website Chatbots", "AI Knowledge Assistants", "AI Content Generation", "AI Business Automation", "Custom AI Solutions"]}
            />
            <ServiceCard
              icon={Shield}
              accent="purple"
              title="Cybersecurity"
              description="Protect your business through assessments, consulting, and security-focused technology strategies."
              href="/cybersecurity"
              features={["Security Assessments", "Vulnerability Assessments", "Security Consulting", "Website Security Audits"]}
            />
            <ServiceCard
              icon={Globe}
              accent="cyan"
              title="Digital Platforms"
              description="Business websites, customer portals, SaaS products, and custom web applications built for growth."
              href="/digital-solutions"
              features={["Business Websites", "WordPress Development", "Next.js Development", "Landing Pages", "E-Commerce Websites"]}
            />
          </div>
        </div>
      </section>

      {/* ─── GOOGLE CLOUD TECHNOLOGY ─── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="tag mb-4 inline-block">Our Technology</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                Built on Google Cloud's<br />
                <span className="gradient-text">AI ecosystem</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                We build on Google Cloud because it gives our clients access to the
                most advanced AI infrastructure available — Vertex AI for model
                training, Gemini for multimodal intelligence, BigQuery for data at
                scale, and a global security backbone.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                This isn't a vendor preference — it's a deliberate technical decision
                that gives our clients faster time-to-production, lower ML costs, and
                enterprise-grade reliability from day one.
              </p>
              <Button href="/ai-solutions" variant="outline" size="md">
                See our AI capabilities
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div key={tech.name} className="grad-border p-5 group hover:bg-blue-950/20 transition">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-sm font-semibold text-white mb-1">{tech.name}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{tech.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY WGL ─── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="tag mb-4 inline-block">Why us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                AI and security are not separate problems
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                Most firms specialize in one or the other. We built Western Gate Labs
                at the intersection — because organizations that win in the AI era
                need both working together by design, not as an afterthought.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div key={cap.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-sm text-slate-300">{cap.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grad-border p-6 sm:p-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
                How we engage
              </p>
              <div className="space-y-0">
                {[
                  { n: "01", label: "Discovery",   desc: "Understand your stack, goals, and risk profile" },
                  { n: "02", label: "Strategy",    desc: "Define scope, milestones, and success metrics" },
                  { n: "03", label: "Delivery",    desc: "Iterative builds with weekly checkpoints" },
                  { n: "04", label: "Operate",     desc: "Launch support, monitoring, and optimization" },
                ].map((step, idx, arr) => (
                  <div key={step.n} className={`flex gap-5 py-4 sm:py-5 ${idx < arr.length - 1 ? "border-b border-white/[0.06]" : ""}`}>
                    <span className="text-xs font-mono text-blue-500/50 w-6 flex-shrink-0 mt-0.5">{step.n}</span>
                    <div>
                      <p className="text-sm font-semibold text-white mb-0.5">{step.label}</p>
                      <p className="text-xs text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-14">
            <span className="tag mb-3 inline-block">Client results</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Trusted by teams that ship
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <TestimonialCard
              quote="Their team identified critical gaps in our cloud security posture within a week. The remediation roadmap they built is now the backbone of our security program."
              author="Sarah Chen"
              title="CTO"
              company="TechCorp International"
            />
            <TestimonialCard
              quote="The AI automation they deployed cut our manual processing time by 40%. ROI was visible within the first quarter — genuinely one of the best decisions we made."
              author="Michael Rodriguez"
              title="VP Operations"
              company="Finance Plus"
            />
            <TestimonialCard
              quote="Not just technical depth — they communicated clearly to non-technical stakeholders. We finally have a security posture our board understands."
              author="Jennifer Park"
              title="Director of Security"
              company="Health Systems Inc"
            />
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="tag mb-3 inline-block">Sectors</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Deep experience across industries
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {["Healthcare", "Finance", "Retail", "Education", "Manufacturing", "Technology"].map((ind) => (
              <Link key={ind} href="/industries">
                <div className="glass card-hover rounded-xl p-4 sm:p-5 text-center cursor-pointer">
                  <p className="text-sm font-medium text-slate-300">{ind}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="hero-glow w-96 h-96 bg-blue-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to build with AI?
          </h2>
          <p className="text-slate-400 mb-8 text-sm sm:text-base">
            Tell us about your project. We respond within one business day from
            Malabe, Sri Lanka.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact" size="lg">
              Book a consultation <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View all services
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
