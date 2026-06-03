import { Metadata } from "next";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { Brain, Zap, Target, TrendingUp, Code, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Solutions | Western Gate Labs",
  description:
    "Comprehensive AI consulting and implementation services including machine learning, automation, and generative AI.",
  keywords: ["AI consulting", "machine learning", "AI automation", "generative AI"],
  openGraph: {
    title: "AI Solutions | Western Gate Labs",
    description:
      "Transform your business with cutting-edge artificial intelligence solutions.",
  },
};

const aiServices = [
  {
    icon: Brain,
    title: "AI Consulting",
    description: "Strategic guidance to identify AI opportunities and develop implementation roadmaps.",
    href: "/ai-solutions",
    features: ["Opportunity Assessment", "Strategy Development", "ROI Analysis"],
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Automate repetitive processes and workflows to improve efficiency and reduce costs.",
    href: "/ai-solutions",
    features: ["Process Automation", "RPA Solutions", "Workflow Optimization"],
  },
  {
    icon: Target,
    title: "AI Chatbots",
    description: "Deploy intelligent conversational AI for customer service and internal support.",
    href: "/ai-solutions",
    features: ["Natural Language Processing", "24/7 Support", "Multi-language"],
  },
  {
    icon: Code,
    title: "Machine Learning",
    description: "Build predictive models and data-driven insights for better business decisions.",
    href: "/ai-solutions",
    features: ["Model Development", "Data Analysis", "Predictions"],
  },
  {
    icon: Cpu,
    title: "Generative AI",
    description: "Leverage GPT and other generative models for content creation and problem-solving.",
    href: "/ai-solutions",
    features: ["Custom AI Models", "Content Generation", "Integration"],
  },
  {
    icon: TrendingUp,
    title: "AI Integration",
    description: "Seamlessly integrate AI into your existing systems and workflows.",
    href: "/ai-solutions",
    features: ["System Integration", "API Development", "Custom Pipelines"],
  },
];

export default function AISolutionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <span className="gradient-text">AI Solutions</span> that
              Accelerate Growth
            </h1>
            <p className="text-xl text-gray-300">
              From AI strategy and consulting to implementation and optimization,
              we help enterprises harness the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our AI Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Why AI Matters Now</h2>
            <p className="text-gray-300 leading-relaxed">
              The AI revolution is reshaping every industry. Companies that adopt
              AI today gain competitive advantages in efficiency, decision-making,
              and innovation. We help you navigate this transformation with proven
              strategies and technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Business Impact",
                points: [
                  "40-60% reduction in operational costs",
                  "3-5x faster time to market",
                  "Improved customer satisfaction",
                  "Data-driven decision making",
                ],
              },
              {
                title: "Technical Excellence",
                points: [
                  "Scalable architecture",
                  "Production-ready models",
                  "Ongoing optimization",
                  "Security & compliance",
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="glass p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, pidx) => (
                    <li key={pidx} className="flex gap-3 text-gray-300">
                      <span className="text-electric-blue font-bold">✓</span>
                      {point}
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our AI Implementation Process</h2>
          <div className="space-y-6">
            {[
              {
                phase: "Discovery",
                desc: "Assess your business goals, current infrastructure, and AI readiness.",
              },
              {
                phase: "Strategy",
                desc: "Develop a roadmap identifying high-impact AI opportunities.",
              },
              {
                phase: "Proof of Concept",
                desc: "Validate approach with a small-scale pilot project.",
              },
              {
                phase: "Implementation",
                desc: "Deploy AI solutions with proper governance and controls.",
              },
              {
                phase: "Optimization",
                desc: "Continuously monitor and improve model performance.",
              },
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-xl flex gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.phase}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Unlock AI's Potential?</h2>
          <p className="text-lg text-gray-300">
            Let's explore how artificial intelligence can transform your operations.
          </p>
          <Button href="/contact" size="lg">
            Schedule AI Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
