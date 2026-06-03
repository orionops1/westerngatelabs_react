import { Metadata } from "next";
import Button from "@/components/Button";
import { Brain, MessageSquare, Sparkles, Zap, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Solutions | Western Gate Labs",
  description:
    "AI Website Chatbots, Knowledge Assistants, Content Generation, Business Automation, and Custom AI Solutions — by Western Gate Labs, Sri Lanka.",
  keywords: [
    "AI chatbot Sri Lanka", "AI solutions", "AI business automation",
    "AI knowledge assistant", "AI content generation", "custom AI development",
  ],
  openGraph: {
    title: "AI Solutions | Western Gate Labs",
    description: "Custom AI systems, chatbots, and automation platforms that improve business efficiency.",
  },
};

const services = [
  {
    id: "chatbots",
    icon: MessageSquare,
    title: "AI Website Chatbots",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    desc: "Deploy intelligent, conversational AI assistants on your website that answer customer questions 24/7, qualify leads, book appointments, and handle support — without human intervention.",
    capabilities: [
      "Natural language understanding",
      "Live handoff to human agents",
      "CRM & helpdesk integration",
      "Multi-language support",
      "Custom personality & tone",
      "Analytics dashboard",
      "Knowledge base training",
      "Appointment booking",
    ],
    pricing: "From LKR 40,000",
    timeline: "3-4 weeks",
  },
  {
    id: "assistants",
    icon: Brain,
    title: "AI Knowledge Assistants",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    desc: "Internal AI assistants that understand your company's documents, SOPs, product catalogs, and knowledge base — enabling your team to find answers instantly instead of searching for hours.",
    capabilities: [
      "RAG (retrieval-augmented generation)",
      "PDF, Word, web source ingestion",
      "Role-based access control",
      "Semantic search",
      "Slack / Teams integration",
      "Audit logs",
      "Source attribution",
      "Continuous learning",
    ],
    pricing: "From LKR 50,000",
    timeline: "4-6 weeks",
  },
  {
    id: "content",
    icon: Sparkles,
    title: "AI Content Generation",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    desc: "Automate the creation of marketing copy, product descriptions, blog articles, social media posts, and email campaigns — in your brand voice, at scale.",
    capabilities: [
      "Brand voice fine-tuning",
      "Bulk content generation",
      "SEO-optimized output",
      "Multi-format export",
      "Human review workflow",
      "CMS publishing integration",
      "A/B testing variants",
      "Performance analytics",
    ],
    pricing: "From LKR 35,000",
    timeline: "3-5 weeks",
  },
  {
    id: "automation",
    icon: Zap,
    title: "AI Business Automation",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    desc: "Replace manual, repetitive business processes with intelligent automation — from document processing and data entry to invoice handling, email triage, and multi-step approval workflows.",
    capabilities: [
      "Document intelligence (OCR + AI)",
      "Email classification & routing",
      "Invoice & form processing",
      "Multi-step workflow orchestration",
      "Exception handling with human fallback",
      "Process analytics",
      "Integration with existing systems",
      "Custom workflow design",
    ],
    pricing: "From LKR 65,000",
    timeline: "6-8 weeks",
  },
  {
    id: "custom",
    icon: Cpu,
    title: "Custom AI Solutions",
    accent: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    desc: "Bespoke AI systems designed around your specific business problem — predictive models, recommendation engines, computer vision, anomaly detection, or any AI capability your operation requires.",
    capabilities: [
      "ML model development & training",
      "Predictive analytics",
      "Recommendation engines",
      "Computer vision systems",
      "Anomaly & fraud detection",
      "MLOps & model monitoring",
      "Data pipeline development",
      "Model deployment & scaling",
    ],
    pricing: "From LKR 100,000",
    timeline: "8-12 weeks",
  },
];

const outcomes = [
  { value: "40–60%",   label: "Reduction in manual workload"     },
  { value: "3–5×",     label: "Faster information retrieval"     },
  { value: "24/7",     label: "Automated customer coverage"      },
  { value: "< 90 days",label: "Average time to production"       },
];

export default function AISolutionsPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="hero-glow w-[500px] h-[500px] bg-blue-600/5 -top-20 right-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">AI Solutions</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-5 max-w-3xl">
            AI that works in<br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">the real world</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed">
            Custom AI systems, chatbots, automation platforms, and intelligent
            assistants designed to improve business efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="lg">
              Talk to our AI team <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="#chatbots" variant="secondary" size="lg">
              Explore services
            </Button>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {outcomes.map((o) => (
            <div key={o.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">{o.value}</p>
              <p className="text-xs text-slate-600">{o.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services — each with anchor id */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className={`bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-blue-300 transition scroll-mt-20`}
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
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-3">Process</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">How we deliver AI projects</h2>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            {[
              { phase: "Discovery",        desc: "Understand your data, goals, and infrastructure constraints." },
              { phase: "Strategy",         desc: "Define the use case, select the right models, and scope a pilot." },
              { phase: "Proof of Concept", desc: "Build a working prototype with real data and validate assumptions." },
              { phase: "Production Build", desc: "Engineer a robust, monitored system ready for real workloads." },
              { phase: "Optimization",     desc: "Track model performance and improve based on production feedback." },
            ].map((item, idx, arr) => (
              <div
                key={item.phase}
                className={`flex gap-5 p-5 sm:p-6 ${idx < arr.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <span className="text-xs font-mono text-blue-600 bg-blue-50 w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0 font-bold mt-0.5">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">{item.phase}</p>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-violet-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to explore AI for your business?
          </h2>
          <p className="text-blue-100 mb-8 text-sm">
            We&apos;ll start with a free scoping call — no commitment, no pitch deck.
          </p>
          <Button href="/contact" size="lg">
            Schedule AI consultation
          </Button>
        </div>
      </section>

    </div>
  );
}
