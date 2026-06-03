import { Metadata } from "next";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { Shield, Search, AlertTriangle, Lock, Eye, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity | Western Gate Labs",
  description:
    "Enterprise cybersecurity services: penetration testing, security assessments, incident response, and managed security.",
  keywords: ["cybersecurity", "penetration testing", "security assessment", "managed security"],
  openGraph: {
    title: "Cybersecurity | Western Gate Labs",
    description: "Proactive security for modern threats.",
  },
};

const services = [
  {
    icon: Search,
    title: "Security Assessments",
    description: "A thorough evaluation of your attack surface, controls, and risk exposure — with a prioritized remediation plan.",
    href: "/cybersecurity",
    features: ["Asset discovery", "Risk scoring", "Executive-ready reporting"],
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Management",
    description: "Continuous identification and prioritization of security weaknesses before they can be exploited.",
    href: "/cybersecurity",
    features: ["Automated scanning", "Manual validation", "Remediation guidance"],
  },
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Real-world attack simulations against your network, applications, and people — to find what your defenses miss.",
    href: "/cybersecurity",
    features: ["Network & infrastructure", "Web & API testing", "Social engineering"],
  },
  {
    icon: Lock,
    title: "Security Architecture",
    description: "Strategic guidance on designing systems that are secure by default — from cloud architecture to identity management.",
    href: "/cybersecurity",
    features: ["Zero-trust design", "IAM & access controls", "Cloud security posture"],
  },
  {
    icon: Eye,
    title: "Incident Response",
    description: "When something happens, speed and clarity matter. We contain, investigate, and recover — fast.",
    href: "/cybersecurity",
    features: ["24/7 incident support", "Forensic investigation", "Post-incident review"],
  },
  {
    icon: Users,
    title: "Managed Security",
    description: "Continuous monitoring and threat detection without the cost of a full in-house security team.",
    href: "/cybersecurity",
    features: ["SOC-as-a-service", "SIEM management", "Threat hunting"],
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
    <div className="bg-navy-900">

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/4 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="tag mb-4 inline-block">Cybersecurity</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5 max-w-3xl">
            Security built for the threats you actually face
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-8">
            Most breaches aren't sophisticated. They exploit the basics. We help
            you fix what matters first, then build a program that stays ahead.
          </p>
          <Button href="/contact" size="lg">
            Request a security assessment
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="tag mb-3 inline-block">Services</span>
            <h2 className="text-2xl font-bold text-white">Our security capabilities</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <ServiceCard key={idx} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Threat landscape */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="tag mb-3 inline-block">Threat landscape</span>
            <h2 className="text-2xl font-bold text-white">What we protect you against</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {threats.map((t) => (
              <div key={t.name} className="glass card-hover rounded-xl p-6">
                <p className="text-sm font-semibold text-white mb-1.5">{t.name}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-alt">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="tag mb-3 inline-block">Compliance</span>
            <h2 className="text-2xl font-bold text-white">Frameworks we work with</h2>
            <p className="text-slate-400 text-sm mt-2">
              We align your security program to the standards that matter for your industry.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {standards.map((s) => (
              <span
                key={s}
                className="px-4 py-2 glass rounded-lg text-sm text-slate-300 font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Find out where you're exposed
          </h2>
          <p className="text-slate-400 mb-8 text-sm">
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
