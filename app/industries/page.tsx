import { Metadata } from "next";
import Button from "@/components/Button";
import { Activity, DollarSign, ShoppingCart, BookOpen, Factory, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | Western Gate Labs",
  description:
    "AI and cybersecurity solutions tailored for healthcare, finance, retail, education, manufacturing, and technology.",
  openGraph: {
    title: "Industries | Western Gate Labs",
    description: "Specialized expertise across high-stakes industries.",
  },
};

const industries = [
  {
    icon: Activity,
    name: "Healthcare",
    desc: "Patient data security, HIPAA compliance, and AI-driven clinical workflows.",
    solutions: ["Medical data security", "HIPAA-compliant infrastructure", "Clinical AI systems", "Patient data privacy"],
  },
  {
    icon: DollarSign,
    name: "Finance",
    desc: "Fraud detection, PCI-DSS compliance, and intelligent risk management.",
    solutions: ["Fraud detection models", "PCI-DSS compliance", "Real-time threat monitoring", "Regulatory reporting"],
  },
  {
    icon: ShoppingCart,
    name: "Retail",
    desc: "Recommendation engines, supply chain intelligence, and payment security.",
    solutions: ["Recommendation AI", "Inventory forecasting", "Payment security", "Customer analytics"],
  },
  {
    icon: BookOpen,
    name: "Education",
    desc: "Personalized learning platforms, student data protection, and campus security.",
    solutions: ["Adaptive learning AI", "Student data privacy", "Campus security systems", "FERPA compliance"],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    desc: "Predictive maintenance, quality assurance automation, and OT/IT security.",
    solutions: ["Predictive maintenance", "Quality assurance AI", "OT/ICS security", "Supply chain optimization"],
  },
  {
    icon: Cpu,
    name: "Technology",
    desc: "DevSecOps, cloud security posture, and AI-accelerated product development.",
    solutions: ["DevSecOps integration", "Cloud security posture", "API security testing", "AI product development"],
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">Industries</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-5 max-w-3xl">
            Specialized for the sectors that can't afford mistakes
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Generic advice doesn't work in high-stakes industries. We bring
            deep domain knowledge alongside our technical expertise.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.name} className="bg-white border border-slate-200 rounded-xl p-7 hover:shadow-lg hover:border-blue-200 transition group">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{ind.name}</h3>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">{ind.desc}</p>
                  <ul className="space-y-2">
                    {ind.solutions.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-violet-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Don't see your industry?
          </h2>
          <p className="text-blue-100 mb-8 text-sm">
            We work across sectors. Get in touch and we'll tell you honestly whether
            we're the right fit.
          </p>
          <Button href="/contact" size="lg">
            Let's talk
          </Button>
        </div>
      </section>

    </div>
  );
}
