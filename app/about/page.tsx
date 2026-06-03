import { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About | Westerngate Labs",
  description:
    "We're a team of engineers, security researchers, and AI practitioners building serious technology for forward-thinking organizations.",
  openGraph: {
    title: "About | Westerngate Labs",
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
  { value: "2024", label: "Founded" },
  { value: "AI-First", label: "Approach" },
  { value: "Growing", label: "Team" },
  { value: "Global", label: "Reach" },
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
            Westerngate Labs is an AI-first technology startup based in Sri Lanka, 
            focused on building intelligent systems and cybersecurity solutions for modern businesses.
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
                We founded Westerngate Labs as an AI-first startup to help organizations 
                adopt artificial intelligence safely and effectively. We combine cutting-edge 
                AI technology with robust security practices to deliver solutions that create 
                real business value.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                As a startup, we're agile, innovative, and focused on emerging AI technologies. 
                We leverage modern cloud platforms and AI frameworks to build scalable solutions 
                quickly, helping our clients stay ahead in the rapidly evolving AI landscape.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our team brings expertise in machine learning, natural language processing, 
                computer vision, and cybersecurity. We're committed to making AI accessible 
                and practical for businesses of all sizes.
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
