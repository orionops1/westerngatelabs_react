import { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About | Western Gate Labs",
  description:
    "We're a team of engineers, security researchers, and AI practitioners building serious technology for forward-thinking organizations.",
  openGraph: {
    title: "About | Western Gate Labs",
    description: "Our mission: help organizations build and defend their digital future.",
  },
};

const values = [
  {
    title: "Direct, not diplomatic",
    desc: "We tell you what we actually find — the uncomfortable parts too. Honest assessments protect clients better than reassuring ones.",
  },
  {
    title: "Outcome focused",
    desc: "Deliverables are a means to an end. What matters is whether the work actually improves your security posture or business performance.",
  },
  {
    title: "Security by design",
    desc: "Every AI system we build, every application we deliver, is designed with security as a constraint — not a checkbox at the end.",
  },
  {
    title: "Practical over perfect",
    desc: "We operate in real organizations with real constraints. We design solutions that get implemented and used — not just architecturally ideal.",
  },
];

const stats = [
  { value: "2021", label: "Founded in Sri Lanka" },
  { value: "50+", label: "Projects Completed" },
  { value: "10+", label: "Team Members" },
  { value: "5+", label: "Countries Served" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">About Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-5 max-w-3xl">
            We work at the intersection of AI and security
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Western Gate Labs is an AI-first technology company based in Sri Lanka. 
            We help organizations build intelligent systems and defend them — because 
            the two problems are inseparable.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-3 space-y-5">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">Our story</span>
              <h2 className="text-2xl font-bold text-slate-900">
                Built by practitioners, not generalists
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We started Western Gate Labs in Sri Lanka because we kept seeing 
                the same problem: organizations were adopting AI without thinking about 
                what that meant for their security footprint, and their security teams 
                weren't equipped to reason about AI-specific risks.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our founding team came from offensive security research and ML
                engineering. We built a firm where those disciplines work together.
                Every AI system we design is threat-modeled. Every security engagement
                considers AI risk vectors. The result is advice grounded in how these
                systems actually fail in the real world.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We leverage modern cloud infrastructure and AI platforms to give clients
                enterprise-grade capabilities without the overhead of managing their own
                ML infrastructure — allowing faster time-to-production and better scalability.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm space-y-0">
                {stats.map((s, idx, arr) => (
                  <div
                    key={s.label}
                    className={`flex justify-between items-center py-4 ${idx < arr.length - 1 ? "border-b border-slate-100" : ""}`}
                  >
                    <span className="text-sm text-slate-500">{s.label}</span>
                    <span className="text-xl font-bold text-slate-900">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-3">Values</span>
            <h2 className="text-2xl font-bold text-slate-900">How we work</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-xl p-7 hover:shadow-lg hover:border-blue-200 transition">
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
              Mission
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              To help organizations build AI systems that create real value — and
              security programs that protect them reliably, without security
              theater.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
              Vision
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              A world where AI and security engineering are practiced as one
              discipline — where teams build confidently because they've
              designed trust into their systems from the start.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-violet-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Let's work together
          </h2>
          <p className="text-blue-100 mb-8 text-sm">
            Whether you need a security assessment, an AI strategy, or both —
            we'll start with a conversation.
          </p>
          <Button href="/contact" size="lg">
            Get in touch
          </Button>
        </div>
      </section>

    </div>
  );
}
