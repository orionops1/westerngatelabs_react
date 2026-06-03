import { Metadata } from "next";
import Button from "@/components/Button";
import { Activity, DollarSign, ShoppingCart, BookOpen, Factory, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | Western Gate Labs",
  description:
    "AI and cybersecurity solutions tailored for healthcare, finance, retail, education, manufacturing, and technology.",
  keywords: [
    "industry solutions",
    "healthcare AI",
    "finance cybersecurity",
    "retail automation",
  ],
  openGraph: {
    title: "Industries | Western Gate Labs",
    description: "Transforming businesses across key industries with AI and security.",
  },
};

const industries = [
  {
    icon: Activity,
    name: "Healthcare",
    description: "Improve patient outcomes and operational efficiency",
    solutions: [
      "Medical image analysis with AI",
      "Patient data security compliance",
      "Predictive analytics for resource planning",
      "HIPAA-compliant cloud infrastructure",
    ],
    impact:
      "Hospitals reduce patient wait times by 30% while improving diagnostic accuracy.",
  },
  {
    icon: DollarSign,
    name: "Finance",
    description: "Secure transactions and intelligent risk management",
    solutions: [
      "Fraud detection AI systems",
      "PCI-DSS compliance implementation",
      "Real-time threat detection",
      "Algorithmic trading optimization",
    ],
    impact:
      "Financial institutions reduce fraud losses by 60% while improving transaction speed.",
  },
  {
    icon: ShoppingCart,
    name: "Retail",
    description: "Personalization and inventory optimization",
    solutions: [
      "Customer recommendation engines",
      "Inventory forecasting AI",
      "Supply chain optimization",
      "Payment security solutions",
    ],
    impact:
      "Retailers increase conversion rates by 25% while reducing inventory waste.",
  },
  {
    icon: BookOpen,
    name: "Education",
    description: "Personalized learning and institutional security",
    solutions: [
      "AI-powered tutoring systems",
      "Student performance prediction",
      "Campus security systems",
      "Data privacy compliance",
    ],
    impact:
      "Educational institutions improve graduation rates by 15% with personalized learning.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Predictive maintenance and process optimization",
    solutions: [
      "Predictive maintenance AI",
      "Production line optimization",
      "Quality assurance automation",
      "Industrial security networks",
    ],
    impact:
      "Manufacturers reduce downtime by 40% and improve product quality by 20%.",
  },
  {
    icon: Cpu,
    name: "Technology",
    description: "Innovation acceleration and security hardening",
    solutions: [
      "DevOps automation",
      "Security testing integration",
      "Cloud infrastructure optimization",
      "API security solutions",
    ],
    impact:
      "Tech companies accelerate release cycles by 50% while maintaining security.",
  },
];

export default function IndustriesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Industry-Specific <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300">
            Tailored AI and cybersecurity solutions designed for your industry's
            unique challenges and opportunities.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div key={idx} className="glass p-8 rounded-xl hover:border-electric-blue transition group">
                  <Icon className="w-12 h-12 text-electric-blue mb-4 group-hover:scale-110 transition" />
                  <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-gray-400 mb-6">{industry.description}</p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm text-electric-blue">
                      Solutions Include:
                    </h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, sidx) => (
                        <li key={sidx} className="text-sm text-gray-300 flex gap-2">
                          <span className="text-electric-blue">→</span>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-navy-700">
                    <p className="text-sm text-gray-400 italic">
                      💡 {industry.impact}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Examples */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>

          <div className="space-y-8">
            {[
              {
                industry: "Healthcare",
                company: "Regional Hospital Network",
                emoji: "🏥",
                challenge:
                  "Manual patient admission process causing 2-hour wait times",
                solution: "Implemented AI chatbot for pre-admission and automated patient routing",
                result: "Reduced wait times from 2 hours to 15 minutes, 95% patient satisfaction increase",
              },
              {
                industry: "Finance",
                company: "Digital Banking Startup",
                emoji: "🏦",
                challenge:
                  "Growing fraud losses as user base expanded beyond manual monitoring capabilities",
                solution: "Deployed real-time fraud detection AI system with behavioral analysis",
                result:
                  "Reduced fraud incidents by 87%, saved $2.3M annually in fraud losses",
              },
              {
                industry: "Retail",
                company: "E-Commerce Platform",
                emoji: "🛍️",
                challenge: "High cart abandonment rates and low average order value",
                solution:
                  "Implemented personalized recommendation engine and dynamic pricing AI",
                result:
                  "Increased AOV by 32%, reduced abandonment rate by 18%, 24% revenue growth",
              },
            ].map((story, idx) => (
              <div key={idx} className="glass p-8 rounded-xl">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">
                      {story.emoji}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <p className="text-sm text-electric-blue font-semibold">
                        {story.industry}
                      </p>
                      <h3 className="text-xl font-bold">{story.company}</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 mt-4">
                      <div>
                        <p className="text-xs text-gray-500 font-semibold mb-1">
                          Challenge
                        </p>
                        <p className="text-sm text-gray-300">{story.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold mb-1">
                          Solution
                        </p>
                        <p className="text-sm text-gray-300">{story.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-semibold mb-1">
                          Result
                        </p>
                        <p className="text-sm text-electric-blue">{story.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready for Industry-Specific Innovation?</h2>
          <p className="text-lg text-gray-300">
            Let's explore how our solutions can transform your business.
          </p>
          <Button href="/contact" size="lg">
            Schedule Industry Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
