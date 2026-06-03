import { Metadata } from "next";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { Brain, Shield, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Western Gate Labs",
  description:
    "Our comprehensive services: AI Solutions, Cybersecurity, and Web Development.",
  openGraph: {
    title: "Services | Western Gate Labs",
    description: "Transform your business with our innovative technology solutions.",
  },
};

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive technology solutions designed to transform your business.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ServiceCard
              icon={Brain}
              title="AI Solutions"
              description="Transform your business with intelligent automation and data-driven insights."
              href="/ai-solutions"
              features={["AI Consulting", "Machine Learning", "Automation"]}
            />
            <ServiceCard
              icon={Shield}
              title="Cybersecurity"
              description="Protect your critical assets and maintain compliance with advanced security."
              href="/cybersecurity"
              features={["Security Assessments", "Incident Response", "Monitoring"]}
            />
            <ServiceCard
              icon={Globe}
              title="Web Development"
              description="Build scalable, high-performance web applications for the modern digital landscape."
              href="/web-development"
              features={["Custom Applications", "E-Commerce", "Performance"]}
            />
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Engagement Models</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Project-Based",
                desc: "Fixed scope, timeline, and budget for defined projects.",
                price: "Starting at $50K",
                features: [
                  "Dedicated project team",
                  "Fixed timeline",
                  "Clear deliverables",
                  "Quality guarantee",
                ],
              },
              {
                title: "Time & Materials",
                desc: "Flexible engagement for evolving requirements and exploration.",
                price: "$200-300/hr",
                features: [
                  "Flexible scope",
                  "Experienced consultants",
                  "Scalable team",
                  "Transparent billing",
                ],
              },
              {
                title: "Managed Retainer",
                desc: "Ongoing support and continuous optimization of your systems.",
                price: "$10K-50K/month",
                features: [
                  "24/7 support",
                  "Proactive monitoring",
                  "Priority access",
                  "Predictable costs",
                ],
              },
            ].map((model, idx) => (
              <div key={idx} className="glass p-8 rounded-xl border border-navy-600 hover:border-electric-blue transition">
                <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{model.desc}</p>
                <p className="text-electric-blue font-bold text-lg mb-6">
                  {model.price}
                </p>
                <ul className="space-y-3">
                  {model.features.map((feature, fidx) => (
                    <li key={fidx} className="text-sm text-gray-300 flex gap-2">
                      <span className="text-electric-blue">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Model */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">What's Included in Every Engagement</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Strategy & Planning",
                items: [
                  "Business needs assessment",
                  "Technology roadmap",
                  "Risk analysis",
                  "ROI projection",
                ],
              },
              {
                title: "Implementation",
                items: [
                  "Expert development team",
                  "Agile methodology",
                  "Regular status updates",
                  "Quality assurance",
                ],
              },
              {
                title: "Training & Support",
                items: [
                  "Team training",
                  "Documentation",
                  "Knowledge transfer",
                  "Post-launch support",
                ],
              },
              {
                title: "Optimization",
                items: [
                  "Performance tuning",
                  "Security hardening",
                  "Scalability planning",
                  "Continuous improvement",
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="glass p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, iidx) => (
                    <li key={iidx} className="text-gray-300 text-sm flex gap-2">
                      <span className="text-electric-blue">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Proven Process</h2>

          <div className="relative">
            {/* Timeline */}
            <div className="space-y-8">
              {[
                {
                  phase: "Discovery",
                  duration: "Week 1-2",
                  desc: "Understand your business, technology stack, and objectives.",
                },
                {
                  phase: "Planning",
                  duration: "Week 3-4",
                  desc: "Develop detailed strategy, architecture, and implementation roadmap.",
                },
                {
                  phase: "Development",
                  duration: "Month 2-3+",
                  desc: "Build solution with regular sprints, testing, and feedback.",
                },
                {
                  phase: "Deployment",
                  duration: "Final Week",
                  desc: "Implement, validate, and ensure smooth production launch.",
                },
                {
                  phase: "Optimization",
                  duration: "Ongoing",
                  desc: "Monitor, optimize, and support continuous improvement.",
                },
              ].map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-xl flex gap-6">
                  <div className="w-32 flex-shrink-0">
                    <p className="text-sm text-electric-blue font-bold">
                      {item.duration}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{item.phase}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300">
            Let's discuss which services and engagement model fit your needs.
          </p>
          <Button href="/contact" size="lg">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
