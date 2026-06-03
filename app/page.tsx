import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Zap,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle,
  Brain,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Western Gate Labs | AI & Cybersecurity Solutions",
  description:
    "Transform operations, strengthen security, and accelerate growth through AI-powered innovation and cybersecurity expertise.",
  keywords: [
    "AI solutions",
    "artificial intelligence consulting",
    "cybersecurity services",
    "web development",
    "digital transformation",
  ],
  openGraph: {
    title: "Western Gate Labs | AI & Cybersecurity Solutions",
    description:
      "Transform operations, strengthen security, and accelerate growth through intelligent technology solutions.",
    type: "website",
  },
  alternates: {
    canonical: "https://western-gate-labs.com",
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">AI-Powered Innovation</span>
                {" "}for Modern Businesses
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                Transform operations, strengthen security, and accelerate growth
                through intelligent technology solutions. We help enterprises
                harness AI, defend against threats, and build scalable digital
                infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Book a Consultation
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  size="lg"
                >
                  Explore Services
                </Button>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-sm text-gray-400 font-medium">
                  Trusted by innovative companies:
                </p>
                <div className="flex gap-4 text-gray-400 text-sm">
                  <span>🏢 Fortune 500 Companies</span>
                  <span>🚀 Startups</span>
                  <span>🏛️ Enterprises</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative animate-slideUp">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-electric-purple/20 rounded-2xl blur-3xl" />
              <div className="relative glass p-8 rounded-2xl border border-electric-blue/30">
                <div className="space-y-4">
                  <div className="h-32 bg-navy-700 rounded-lg flex items-center justify-center text-5xl">
                    🤖
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-navy-700 rounded-lg flex items-center justify-center">
                      🔒
                    </div>
                    <div className="h-16 bg-navy-700 rounded-lg flex items-center justify-center">
                      💻
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our Core Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Brain}
              title="AI Solutions"
              description="Leverage artificial intelligence to automate workflows, gain insights, and innovate faster."
              href="/ai-solutions"
              features={["AI Consulting", "Machine Learning", "Automation"]}
            />
            <ServiceCard
              icon={Shield}
              title="Cybersecurity"
              description="Protect your assets with advanced security assessments, threat detection, and incident response."
              href="/cybersecurity"
              features={["Penetration Testing", "Threat Analysis", "Compliance"]}
            />
            <ServiceCard
              icon={Globe}
              title="Web Development"
              description="Build scalable, high-performance web applications designed for modern digital experiences."
              href="/web-development"
              features={["Custom Applications", "E-Commerce", "APIs"]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Why Choose Western Gate Labs?
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "AI-First Approach",
                    desc: "We prioritize intelligent automation to maximize your competitive advantage.",
                  },
                  {
                    icon: Shield,
                    title: "Security-Focused Mindset",
                    desc: "Every solution includes security by design and compliance best practices.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Scalable Architecture",
                    desc: "Solutions built to grow with your business, from startups to enterprises.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Business-Driven Results",
                    desc: "We measure success by your metrics: ROI, efficiency, and growth.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass p-8 rounded-xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Process</h3>
                {[
                  { step: "1", label: "Discover", desc: "Understand your business goals" },
                  { step: "2", label: "Plan", desc: "Design tailored solutions" },
                  { step: "3", label: "Build", desc: "Implement with precision" },
                  { step: "4", label: "Deploy", desc: "Launch and optimize" },
                  { step: "5", label: "Scale", desc: "Support your growth" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 bg-electric-blue text-navy-900 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold">{item.label}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Industries We Serve
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Expertise across sectors with tailored solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Healthcare",
              "Finance",
              "Retail",
              "Education",
              "Manufacturing",
              "Technology",
            ].map((industry) => (
              <Link key={industry} href="/industries">
                <div className="glass p-6 rounded-xl text-center hover:border-electric-blue transition cursor-pointer group">
                  <p className="font-semibold text-lg group-hover:text-electric-blue transition">
                    {industry}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Industry-specific solutions
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how our solutions have transformed businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Western Gate Labs transformed our data infrastructure and improved security posture significantly. Their expertise in AI implementation was invaluable."
              author="Sarah Chen"
              title="CTO"
              company="TechCorp International"
              rating={5}
            />
            <TestimonialCard
              quote="The team's AI automation solutions reduced our operational costs by 40% while improving accuracy. Highly professional and results-oriented."
              author="Michael Rodriguez"
              title="VP Operations"
              company="Finance Plus"
              rating={5}
            />
            <TestimonialCard
              quote="Outstanding cybersecurity assessment and remediation. They identified critical vulnerabilities we didn't know we had. Now we sleep better at night."
              author="Jennifer Park"
              title="Director of Security"
              company="Health Systems Inc"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy-800 to-navy-700">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300">
            Let's discuss how AI and cybersecurity can drive growth for your
            organization.
          </p>
          <Button href="/contact" size="lg">
            Schedule Your Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
