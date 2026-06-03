import { Metadata } from "next";
import Button from "@/components/Button";
import { Shield, Search, AlertTriangle, Lock, Eye, Users, CheckCircle2, ArrowRight, Target, FileSearch, Radar } from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity | Westerngate Labs",
  description:
    "Enterprise cybersecurity services: penetration testing, security assessments, incident response, and managed security.",
  keywords: ["cybersecurity", "penetration testing", "security assessment", "managed security"],
  openGraph: {
    title: "Cybersecurity | Westerngate Labs",
    description: "Proactive security for modern threats.",
  },
};

const services = [
  {
    id: "assessments",
    icon: Search,
    title: "Security Assessments",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    description: "A thorough evaluation of your attack surface, controls, and risk exposure — with a prioritized remediation plan based on real business impact.",
    capabilities: [
      "Complete asset discovery and inventory",
      "Risk scoring and prioritization",
      "Control effectiveness evaluation",
      "Gap analysis against frameworks",
      "Executive-ready reporting",
      "Actionable remediation roadmap",
      "Follow-up verification testing",
      "Compliance mapping",
    ],
    pricing: "From LKR 45,000",
    timeline: "2-3 weeks",
  },
  {
    id: "vulnerability",
    icon: AlertTriangle,
    title: "Vulnerability Assessments",
    accent: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    description: "Continuous identification and prioritization of security weaknesses before they can be exploited. Both automated scanning and manual verification.",
    capabilities: [
      "Automated vulnerability scanning",
      "Manual verification of findings",
      "False positive elimination",
      "CVSS scoring and risk rating",
      "Patch management guidance",
      "Remediation tracking",
      "Quarterly rescans",
      "Vulnerability trend analysis",
    ],
    pricing: "From LKR 35,000",
    timeline: "1-2 weeks",
  },
  {
    id: "consulting",
    icon: Shield,
    title: "Security Consulting",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    description: "Strategic guidance on building and improving your security program. From policy development to architecture review — we help you make the right security decisions.",
    capabilities: [
      "Security program development",
      "Policy and procedure creation",
      "Architecture and design review",
      "Technology selection guidance",
      "Compliance roadmap planning",
      "Security training programs",
      "Vendor security assessments",
      "Board-level reporting",
    ],
    pricing: "From LKR 40,000/month",
    timeline: "Ongoing engagement",
  },
  {
    id: "audits",
    icon: FileSearch,
    title: "Website Security Audits",
    accent: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    description: "Comprehensive security testing of your web applications — identifying vulnerabilities before attackers do. OWASP Top 10 coverage and beyond.",
    capabilities: [
      "OWASP Top 10 testing",
      "Authentication bypass attempts",
      "SQL injection & XSS testing",
      "API security review",
      "Session management testing",
      "Business logic flaws",
      "SSL/TLS configuration audit",
      "Detailed vulnerability report",
    ],
    pricing: "From LKR 30,000",
    timeline: "1-2 weeks",
  },
];

const threats = [
  { name: "Ransomware", desc: "Data encryption and operational shutdown. Average recovery cost: $1.4M." },
  { name: "Data breaches", desc: "Regulatory fines, litigation, and permanent reputational damage." },
  { name: "Insider threats", desc: "Privileged access misuse — often undetected for months." },
  { name: "Supply chain attacks", desc: "Third-party compromise that bypasses your perimeter controls." },
];

const standards = ["HIPAA", "PCI-DSS", "SOC 2 Type II", "GDPR", "ISO 27001", "NIST CSF", "FedRAMP", "CCPA"];

export default function CybersecurityPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-violet-50/30 to-white">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-semibold mb-4">Cybersecurity</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-5 max-w-3xl">
            Security built for the threats you actually face
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mb-8">
            Most breaches aren't sophisticated. They exploit the basics. We help
            you fix what matters first, then build a program that stays ahead.
          </p>
          <Button href="/contact" size="lg">
            Request Security Assessment <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-violet-50 text-violet-700 text-sm font-semibold mb-3">Services</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our security capabilities</h2>
          </div>
          <div className="space-y-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className={`bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-violet-300 transition scroll-mt-20`}
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
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">{svc.description}</p>
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
        </div>
      </section>

      {/* Threat landscape */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-semibold mb-3">Threat landscape</span>
            <h2 className="text-2xl font-bold text-slate-900">What we protect you against</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {threats.map((t) => (
              <div key={t.name} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-red-200 transition">
                <p className="text-sm font-semibold text-slate-900 mb-1.5">{t.name}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-3">Compliance</span>
            <h2 className="text-2xl font-bold text-slate-900">Frameworks we work with</h2>
            <p className="text-slate-600 text-sm mt-2">
              We align your security program to the standards that matter for your industry.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {standards.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 font-medium hover:border-blue-300 hover:shadow-sm transition"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-600 to-purple-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Find out where you're exposed
          </h2>
          <p className="text-violet-100 mb-8 text-sm">
            Start with a no-obligation security consultation. We'll give you an honest
            assessment of your risk — no scare tactics.
          </p>
          <Button href="/contact" size="lg">
            Schedule security assessment
          </Button>
        </div>
      </section>

    </div>
  );
}
