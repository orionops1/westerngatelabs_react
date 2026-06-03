import { Metadata } from "next";
import Button from "@/components/Button";
import { Brain, MessageSquare, Sparkles, Zap, Cpu, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Solutions | Western Gate Labs",
  description:
    "AI Website Chatbots, Knowledge Assistants, Content Generation, Business Automation, and Custom AI Solutions built on Google Cloud — by Western Gate Labs, Sri Lanka.",
  keywords: [
    "AI chatbot Sri Lanka", "AI solutions", "AI business automation",
    "AI knowledge assistant", "AI content generation", "custom AI development",
    "Google Cloud AI", "Vertex AI", "Gemini API",
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
    ],
    built: "Built with Gemini API · Dialogflow CX · Vertex AI",
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
    ],
    built: "Built with Vertex AI Search · Gemini · Cloud Storage",
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
    ],
    built: "Built with Gemini API · Vertex AI · Cloud Workflows",
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
    ],
    built: "Built with Document AI · Cloud Workflows · Pub/Sub",
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
    ],
    built: "Built with Vertex AI · BigQuery ML · Cloud Run",
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
    <div className="bg-[#03050f]">

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="hero-glow w-[500px] h-[500px] bg-blue-600/8 -top-20 right-0" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="tag mb-4 inline-block">AI Solutions</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            AI that works in<br className="hidden sm:block" />
            <span className="gradient-text">the real world</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">
            Custom AI systems, chatbots, automation platforms, and intelligent
            assistants designed to improve business efficiency — built on Google
            Cloud's AI infrastructure.
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {outcomes.map((o) => (
            <div key={o.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{o.value}</p>
              <p className="text-xs text-slate-500">{o.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services — each with anchor id */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className={`glass rounded-2xl p-6 sm:p-8 border ${svc.border} scroll-mt-20`}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className={`w-12 h-12 rounded-xl ${svc.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${svc.accent}`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-bold text-white mb-3">{svc.title}</h2>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">{svc.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                      {svc.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-xs text-slate-400">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${svc.accent}`}
                            style={{ background: "currentColor" }} />
                          {cap}
                        </div>
                      ))}
                    </div>
                    <p className={`text-xs font-mono ${svc.accent} opacity-60`}>{svc.built}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="tag mb-3 inline-block">Process</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How we deliver AI projects</h2>
          </div>
          <div className="glass rounded-2xl overflow-hidden">
            {[
              { phase: "Discovery",        desc: "Understand your data, goals, and infrastructure constraints." },
              { phase: "Strategy",         desc: "Define the use case, select the right models, and scope a pilot." },
              { phase: "Proof of Concept", desc: "Build a working prototype with real data and validate assumptions." },
              { phase: "Production Build", desc: "Engineer a robust, monitored system ready for real workloads." },
              { phase: "Optimization",     desc: "Track model performance and improve based on production feedback." },
            ].map((item, idx, arr) => (
              <div
                key={item.phase}
                className={`flex gap-5 p-5 sm:p-6 ${idx < arr.length - 1 ? "border-b border-white/[0.06]" : ""}`}
              >
                <span className="text-xs font-mono text-blue-500/40 w-5 flex-shrink-0 mt-0.5">
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to explore AI for your business?
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
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
