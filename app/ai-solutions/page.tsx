import { Metadata } from "next";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { Brain, Zap, Target, TrendingUp, Code, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Solutions | Western Gate Labs",
  description:
    "Enterprise AI consulting, machine learning, automation, and generative AI implementation services.",
  keywords: ["AI consulting", "machine learning", "AI automation", "generative AI"],
  openGraph: {
    title: "AI Solutions | Western Gate Labs",
    description: "From strategy to production — AI solutions that deliver measurable results.",
  },
};

const aiServices = [
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description: "We assess your operations, identify high-impact AI opportunities, and build a roadmap that fits your timeline and budget.",
    href: "/ai-solutions",
    features: ["Opportunity assessment", "Technology selection", "ROI modeling"],
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Replace manual, repetitive workflows with intelligent automation — from document processing to multi-step approval chains.",
    href: "/ai-solutions",
    features: ["RPA & intelligent agents", "Workflow orchestration", "Integration with existing systems"],
  },
  {
    icon: Target,
    title: "Conversational AI",
    description: "Deploy LLM-powered assistants for customer support, internal knowledge retrieval, and complex Q&A at scale.",
    href: "/ai-solutions",
    features: ["RAG architectures", "Custom fine-tuning", "Multi-language support"],
  },
  {
    icon: Code,
    title: "Machine Learning",
    description: "Build, train, and deploy production-grade models for classification, forecasting, anomaly detection, and recommendation.",
    href: "/ai-solutions",
    features: ["Custom model development", "Data pipeline engineering", "MLOps & monitoring"],
  },
  {
    icon: Cpu,
    title: "Generative AI Integration",
    description: "Embed GPT-4, Claude, Gemini, and open-source models into your products and internal tools — with proper guardrails.",
    href: "/ai-solutions",
    features: ["API integration & orchestration", "Prompt engineering", "Safety & compliance controls"],
  },
  {
    icon: TrendingUp,
    title: "AI Enablement",
    description: "Train your team to work alongside AI effectively. Workshops, playbooks, and ongoing advisory for AI-native organizations.",
    href: "/ai-solutions",
    features: ["Team training & workshops", "AI governance frameworks", "Ongoing advisory"],
  },
];

export default function AISolutionsPage() {
  return (
    <div className="bg-navy-900">

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="tag mb-4 inline-block">AI Solutions</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            AI that works in the real world
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-8">
            We don't do proofs-of-concept that never ship. We take you from problem
            definition to production — and stay accountable for results.
          </p>
          <Button href="/contact" size="lg">
            Talk to our AI team
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
            {aiServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="tag mb-3 inline-block">Outcomes</span>
            <h2 className="text-2xl font-bold text-white">What clients report</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "40–60%", label: "Reduction in operational costs" },
              { value: "3–5×", label: "Faster processing times" },
              { value: "87%", label: "Fraud detection improvement" },
              { value: "< 90 days", label: "Average time to production" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-6">
                <p className="text-3xl font-bold text-electric-blue mb-1">{stat.value}</p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <span className="tag mb-3 inline-block">Process</span>
            <h2 className="text-2xl font-bold text-white">How we deliver AI projects</h2>
          </div>
          <div className="space-y-0 glass rounded-2xl overflow-hidden">
            {[
              { phase: "Discovery", desc: "Understand your data, goals, and infrastructure constraints." },
              { phase: "Strategy", desc: "Define the use case, select the right models, and scope a pilot." },
              { phase: "Proof of Concept", desc: "Build a working prototype with real data and validate assumptions." },
              { phase: "Production Build", desc: "Engineer a robust, monitored system ready for real workloads." },
              { phase: "Optimization", desc: "Track model performance and improve based on production feedback." },
            ].map((item, idx, arr) => (
              <div
                key={item.phase}
                className={`flex gap-6 p-6 ${idx < arr.length - 1 ? "border-b border-white/[0.06]" : ""}`}
              >
                <span className="text-xs font-mono text-electric-blue/50 w-5 flex-shrink-0 mt-0.5">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white mb-0.5">{item.phase}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to explore AI for your business?
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
            We'll start with a free scoping call — no commitment, no pitch deck.
          </p>
          <Button href="/contact" size="lg">
            Schedule AI consultation
          </Button>
        </div>
      </section>

    </div>
  );
}
