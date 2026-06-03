import { Metadata } from "next";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { Shield, Search, AlertTriangle, Lock, Eye, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions | Western Gate Labs",
  description:
    "Comprehensive cybersecurity services including assessments, penetration testing, and managed security.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "security assessment",
    "managed security",
  ],
  openGraph: {
    title: "Cybersecurity Solutions | Western Gate Labs",
    description: "Protect your business with enterprise-grade cybersecurity solutions.",
  },
};

const securityServices = [
  {
    icon: Search,
    title: "Security Assessments",
    description: "Comprehensive evaluation of your security posture and risk profile.",
    href: "/cybersecurity",
    features: ["Asset Discovery", "Risk Analysis", "Gap Assessment"],
  },
  {
    icon: AlertTriangle,
    title: "Vulnerability Assessments",
    description: "Identify and prioritize security weaknesses in your systems.",
    href: "/cybersecurity",
    features: ["Automated Scanning", "Manual Testing", "Reporting"],
  },
  {
    icon: Shield,
    title: "Penetration Testing",
    description: "Simulate real attacks to test your defenses and identify exploitable weaknesses.",
    href: "/cybersecurity",
    features: ["Network Testing", "Web App Testing", "Social Engineering"],
  },
  {
    icon: Lock,
    title: "Security Consulting",
    description: "Strategic guidance on security architecture, policies, and best practices.",
    href: "/cybersecurity",
    features: ["Security Strategy", "Policy Development", "Compliance Planning"],
  },
  {
    icon: Eye,
    title: "Incident Response",
    description: "Swift response and recovery from security breaches and incidents.",
    href: "/cybersecurity",
    features: ["24/7 Support", "Forensics", "Recovery Planning"],
  },
  {
    icon: Users,
    title: "Managed Security Services",
    description: "Continuous monitoring and management of your security infrastructure.",
    href: "/cybersecurity",
    features: ["24/7 Monitoring", "Threat Detection", "Preventive Maintenance"],
  },
];

export default function CybersecurityPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Enterprise-Grade
              <span className="gradient-text"> Cybersecurity</span>
            </h1>
            <p className="text-xl text-gray-300">
              Protect your critical assets with comprehensive security solutions.
              From assessments to managed services, we keep your business secure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Security Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Security Threats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">The Threat Landscape</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                threat: "Ransomware",
                impact: "Data encryption and business disruption",
                solution: "Backup strategies, detection, and response",
              },
              {
                threat: "Data Breaches",
                impact: "Regulatory fines, reputation damage",
                solution: "Prevention, detection, and incident response",
              },
              {
                threat: "Insider Threats",
                impact: "Data theft, system compromise",
                solution: "Access controls, monitoring, training",
              },
              {
                threat: "API Exploits",
                impact: "Unauthorized data access",
                solution: "API security testing and protection",
              },
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-xl">
                <h3 className="font-semibold text-electric-blue mb-2">
                  {item.threat}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{item.impact}</p>
                <p className="text-sm">
                  <span className="font-semibold">Our Solution:</span>{" "}
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Compliance & Standards</h2>
          <div className="glass p-8 rounded-xl">
            <p className="text-gray-300 mb-6">
              We ensure your security practices align with industry standards and
              regulations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {["HIPAA", "PCI-DSS", "SOC 2", "GDPR", "ISO 27001", "NIST"].map(
                (std) => (
                  <div key={std} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-electric-blue rounded-full" />
                    <span className="font-medium">{std}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Secure Your Business Today</h2>
          <p className="text-lg text-gray-300">
            Get a comprehensive security assessment from our expert team.
          </p>
          <Button href="/contact" size="lg">
            Schedule Security Assessment
          </Button>
        </div>
      </section>
    </div>
  );
}
