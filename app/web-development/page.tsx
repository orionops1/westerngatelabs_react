import { Metadata } from "next";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { Globe, ShoppingCart, Zap, Code, Palette, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development | Western Gate Labs",
  description:
    "Custom web development services including corporate websites, e-commerce, and performance optimization.",
  keywords: ["web development", "custom applications", "e-commerce", "web design"],
  openGraph: {
    title: "Web Development | Western Gate Labs",
    description: "Build scalable, high-performance web applications.",
  },
};

const webServices = [
  {
    icon: Globe,
    title: "Corporate Websites",
    description: "Professional, high-performance websites that represent your brand.",
    href: "/web-development",
    features: ["Responsive Design", "SEO Optimized", "CMS Integration"],
  },
  {
    icon: Code,
    title: "Custom Applications",
    description: "Tailored web applications built to solve your specific business needs.",
    href: "/web-development",
    features: ["Scalable Architecture", "API Development", "Real-time Features"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Feature-rich e-commerce platforms that drive sales and customer engagement.",
    href: "/web-development",
    features: ["Payment Integration", "Inventory Management", "Analytics"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with.",
    href: "/web-development",
    features: ["User Research", "Prototyping", "Accessibility"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your web applications for better user experience and conversion.",
    href: "/web-development",
    features: ["Load Time Optimization", "Caching Strategies", "CDN Integration"],
  },
  {
    icon: TrendingUp,
    title: "Website Maintenance",
    description: "Ongoing support and maintenance to keep your web properties running smoothly.",
    href: "/web-development",
    features: ["Security Updates", "Monitoring", "Technical Support"],
  },
];

export default function WebDevelopmentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Modern Web
              <span className="gradient-text"> Development</span> Solutions
            </h1>
            <p className="text-xl text-gray-300">
              From beautiful corporate websites to complex custom applications, we
              build web solutions that drive business results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our Web Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Modern Tech Stack</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Frontend",
                techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
              },
              {
                category: "Backend",
                techs: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"],
              },
              {
                category: "Cloud & DevOps",
                techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
              },
              {
                category: "Security",
                techs: ["OAuth 2.0", "JWT", "SSL/TLS", "OWASP", "WAF"],
              },
            ].map((group, idx) => (
              <div key={idx} className="glass p-8 rounded-xl">
                <h3 className="text-lg font-bold mb-4 text-electric-blue">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-navy-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Phases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Development Process</h2>

          <div className="space-y-6">
            {[
              {
                phase: "Discovery & Planning",
                desc: "Understand your vision, user needs, and business goals.",
                deliverables: ["Requirement specs", "User flows", "Wireframes"],
              },
              {
                phase: "Design",
                desc: "Create intuitive, beautiful interfaces that users love.",
                deliverables: ["UI mockups", "Prototypes", "Design system"],
              },
              {
                phase: "Development",
                desc: "Build your application with clean, maintainable code.",
                deliverables: ["Frontend code", "Backend APIs", "Databases"],
              },
              {
                phase: "Testing & QA",
                desc: "Comprehensive testing to ensure quality and performance.",
                deliverables: ["Unit tests", "Integration tests", "Performance reports"],
              },
              {
                phase: "Deployment",
                desc: "Launch your application with zero downtime.",
                deliverables: ["Production setup", "Monitoring", "Documentation"],
              },
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-xl">
                <div className="flex gap-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{item.phase}</h3>
                    <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.deliverables.map((d) => (
                        <span
                          key={d}
                          className="text-xs bg-navy-700 text-gray-300 px-2 py-1 rounded"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Quality Standards</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                metric: "Page Load",
                target: "< 2 seconds",
                importance: "Critical for user experience and SEO",
              },
              {
                metric: "Uptime",
                target: "99.9%",
                importance: "Reliable service availability",
              },
              {
                metric: "Security Score",
                target: "A+",
                importance: "Protected against vulnerabilities",
              },
              {
                metric: "Mobile Score",
                target: "95+",
                importance: "Optimized for all devices",
              },
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-xl">
                <h3 className="font-bold text-electric-blue mb-2">{item.metric}</h3>
                <p className="text-2xl font-bold mb-2">{item.target}</p>
                <p className="text-sm text-gray-400">{item.importance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Build Something Great?</h2>
          <p className="text-lg text-gray-300">
            Let's discuss your web development needs and create an amazing digital
            experience.
          </p>
          <Button href="/contact" size="lg">
            Start Your Web Project
          </Button>
        </div>
      </section>
    </div>
  );
}
