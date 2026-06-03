import { Metadata } from "next";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { Brain, Shield, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Western Gate Labs",
  description:
    "AI solutions, cybersecurity, and web development services for modern organizations.",
  openGraph: {
    title: "Services | Western Gate Labs",
    description: "End-to-end technology expertise for forward-thinking teams.",
  },
};

const engagements: { title: string; desc: string; price: string; sub: string; features: string[] }[] = [
  {
    title: "Project-based",
    desc: "Fixed scope, defined deliverables, and a clear timeline. Best for discrete initiatives.",
    price: "LKR 500,000+",
    sub: "~ $1,700 USD",
    features: ["Dedicated team", "Fixed timeline", "Clear deliverables", "Quality assurance"],
  },
  {
    title: "Time & materials",
    desc: "Flexible for evolving requirements. You pay for what you use, with full transparency.",
    price: "LKR 9,000 / hr",
    sub: "~ $30 USD / hr",
    features: ["Flexible scope", "Senior practitioners", "Scalable team", "Weekly billing"],
  },
  {
    title: "Managed retainer",
    desc: "Ongoing partnership for continuous optimization, monitoring, and advisory.",
    price: "LKR 300,000 / mo",
    sub: "~ $1,000 USD / mo",
    features: ["24/7 security coverage", "Proactive monitoring", "Priority access", "Monthly reviews"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-navy-900">

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="tag mb-4 inline-block">Services</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Technology expertise across the full stack
          </h1>
          <p className="text-lg text-slate-400 max-w-xl">
            Three core practices. One integrated approach. We help organizations
            build, protect, and optimize their digital operations.
          </p>
        </div>
      </section>

      {/* Core services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="tag mb-3 inline-block">Core practices</span>
            <h2 className="text-2xl font-bold text-white">What we do</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={Brain}
              title="AI Solutions"
              description="Strategy, implementation, and production deployment of AI systems — from automation to generative AI."
              href="/ai-solutions"
              features={["AI strategy & consulting", "Machine learning", "Process automation", "LLM integration"]}
            />
            <ServiceCard
              icon={Shield}
              title="Cybersecurity"
              description="Proactive security across your attack surface — from penetration testing to managed monitoring."
              href="/cybersecurity"
              features={["Penetration testing", "Security assessments", "Incident response", "Managed SOC"]}
            />
            <ServiceCard
              icon={Globe}
              title="Web Development"
              description="Scalable web applications and APIs built with modern stacks and security-first architecture."
              href="/web-development"
              features={["Custom applications", "API development", "Cloud deployment", "Performance optimization"]}
            />
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="tag mb-3 inline-block">Engagement models</span>
            <h2 className="text-2xl font-bold text-white">How we work together</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((e) => (
              <div key={e.title} className="glass card-hover rounded-xl p-7">
                <h3 className="text-sm font-semibold text-white mb-1">{e.title}</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">{e.desc}</p>
                <p className="text-xl font-bold text-blue-400 mb-0.5">{e.price}</p>
                <p className="text-xs text-slate-600 mb-5">{e.sub}</p>
                <ul className="space-y-2">
                  {e.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="tag mb-3 inline-block">Standard inclusions</span>
            <h2 className="text-2xl font-bold text-white">Every engagement includes</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Business alignment", desc: "We map every deliverable to your actual goals — not just technical milestones." },
              { title: "Agile delivery", desc: "Weekly sprints, clear updates, and room to adjust direction as you learn." },
              { title: "Knowledge transfer", desc: "Your team understands what we built and why. No black boxes." },
              { title: "Documentation", desc: "Everything documented — architecture, runbooks, and decision rationale." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-xl p-6">
                <p className="text-sm font-semibold text-white mb-1.5">{item.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
            Tell us what you're trying to solve. We'll help you figure out the right
            starting point.
          </p>
          <Button href="/contact" size="lg">
            Talk to us
          </Button>
        </div>
      </section>

    </div>
  );
}
