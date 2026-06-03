import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Brain, Shield, Globe, ArrowRight, Lock, Cpu, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Western Gate Labs | AI & Cybersecurity Solutions",
  description:
    "Enterprise AI solutions and cybersecurity services. We help organizations build intelligent systems and defend their digital infrastructure.",
  keywords: [
    "AI solutions",
    "cybersecurity",
    "machine learning",
    "security consulting",
    "AI automation",
    "digital transformation",
  ],
  openGraph: {
    title: "Western Gate Labs | AI & Cybersecurity Solutions",
    description:
      "Enterprise AI solutions and cybersecurity services for modern organizations.",
    type: "website",
  },
  alternates: {
    canonical: "https://westerngatelabs.com",
  },
};

const stats = [
  { value: "250+", label: "Projects delivered" },
  { value: "98%", label: "Client retention" },
  { value: "40%", label: "Avg. cost reduction" },
  { value: "24/7", label: "Security monitoring" },
];

const capabilities = [
  {
    icon: Lock,
    label: "Zero-trust architecture",
  },
  {
    icon: Cpu,
    label: "LLM & GenAI integration",
  },
  {
    icon: Network,
    label: "Threat intelligence",
  },
  {
    icon: Brain,
    label: "Predictive analytics",
  },
];

export default function Home() {
  return (
    <div className="bg-navy-900">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-40" />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
          <div className="max-w-3xl">
            <span className="tag mb-6 inline-block">AI · Cybersecurity · Strategy</span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6">
              Build smarter.<br />
              <span className="gradient-text">Stay secure.</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-xl mb-10">
              Western Gate Labs helps organizations deploy AI systems, harden their
              security posture, and build digital infrastructure that scales.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <Button href="/contact" size="lg">
                Book a consultation
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore services
              </Button>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-white/[0.07]">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-white">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Services ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="tag mb-3 inline-block">What we do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              End-to-end technology expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={Brain}
              title="AI Solutions"
              description="From strategy to production — we design and deploy AI systems that automate decisions, reduce costs, and create competitive advantage."
              href="/ai-solutions"
              features={["AI consulting & roadmaps", "Machine learning models", "LLM & GenAI integration", "Process automation"]}
            />
            <ServiceCard
              icon={Shield}
              title="Cybersecurity"
              description="Proactive security for modern threats. We assess, harden, and monitor your infrastructure — from penetration testing to managed SOC."
              href="/cybersecurity"
              features={["Penetration testing", "Threat detection & response", "Compliance (SOC 2, HIPAA, GDPR)", "Security architecture review"]}
            />
            <ServiceCard
              icon={Globe}
              title="Web Development"
              description="Scalable, performant web applications built with modern stacks. Clean code, strong security defaults, and architecture that grows."
              href="/web-development"
              features={["Custom web applications", "API design & development", "Performance optimization", "Cloud deployment"]}
            />
          </div>
        </div>
      </section>

      {/* ── Why WGL ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag mb-3 inline-block">Why us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                Security and AI are not separate problems
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                Most firms specialize in one or the other. We built Western Gate Labs
                at the intersection — because the organizations that will win in the
                next decade need both to work together, by design, not as an afterthought.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <div key={cap.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-electric-dim flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-electric-blue" />
                      </div>
                      <span className="text-sm text-slate-300">{cap.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Process card */}
            <div className="glass rounded-2xl p-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
                How we engage
              </p>
              <div className="space-y-0">
                {[
                  { n: "01", label: "Discovery", desc: "Understand your stack, goals, and risk profile" },
                  { n: "02", label: "Strategy", desc: "Define scope, milestones, and success metrics" },
                  { n: "03", label: "Delivery", desc: "Iterative builds with weekly checkpoints" },
                  { n: "04", label: "Operate", desc: "Launch support, monitoring, and optimization" },
                ].map((step, idx, arr) => (
                  <div key={step.n} className={`flex gap-5 py-5 ${idx < arr.length - 1 ? "border-b border-white/[0.06]" : ""}`}>
                    <span className="text-xs font-mono text-electric-blue/60 w-6 flex-shrink-0 mt-0.5">
                      {step.n}
                    </span>
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

      {/* ── Testimonials ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="tag mb-3 inline-block">Client results</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Trusted by teams that ship
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Their team identified critical gaps in our cloud security posture within a week. The remediation roadmap they built is now the backbone of our security program."
              author="Sarah Chen"
              title="CTO"
              company="TechCorp International"
            />
            <TestimonialCard
              quote="The AI automation they deployed cut our manual processing time by 40%. ROI was visible within the first quarter. Genuinely one of the best decisions we made."
              author="Michael Rodriguez"
              title="VP Operations"
              company="Finance Plus"
            />
            <TestimonialCard
              quote="Not just technical depth — they communicated everything clearly to non-technical stakeholders. We finally have a security posture our board understands."
              author="Jennifer Park"
              title="Director of Security"
              company="Health Systems Inc"
            />
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="tag mb-3 inline-block">Sectors</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Deep experience across industries
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Healthcare", "Finance", "Retail", "Education", "Manufacturing", "Technology"].map((ind) => (
              <Link key={ind} href="/industries">
                <div className="glass card-hover rounded-xl p-5 text-center cursor-pointer">
                  <p className="text-sm font-medium text-slate-300">{ind}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-400 mb-8">
            Tell us about your project. We'll respond within one business day.
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
