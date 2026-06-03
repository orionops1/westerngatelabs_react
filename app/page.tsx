import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Brain, Shield, Globe, ArrowRight, CheckCircle2, Users, Award,
  Zap, Lock, TrendingUp, Clock, Headphones, Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Western Gate Labs | AI Solutions, Cybersecurity & Digital Transformation",
  description:
    "Leading technology company in Sri Lanka specializing in AI solutions, cybersecurity services, and enterprise digital platforms. Trusted by businesses across industries.",
  keywords: [
    "AI startup Sri Lanka", "AI solutions", "cybersecurity Sri Lanka",
    "machine learning", "web development", "digital transformation",
    "WordPress development", "AI consulting", "IT services Malabe",
  ],
  openGraph: {
    title: "Western Gate Labs | AI Solutions, Cybersecurity & Digital Transformation",
    description: "Transform your business with AI-powered solutions and enterprise-grade security.",
    type: "website",
  },
  alternates: { canonical: "https://westerngatelabs.com" },
};

const stats = [
  { value: "50+", label: "Projects Delivered", icon: CheckCircle2 },
  { value: "100%", label: "Client Satisfaction", icon: Award },
  { value: "Fast", label: "Response Time", icon: Zap },
  { value: "Expert", label: "Team", icon: Users },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    desc: "Experienced professionals in AI, cybersecurity, and web development.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Rigorous testing and quality control for every project we deliver.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect deadlines and deliver projects as committed.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "24/7 technical support and maintenance for all our solutions.",
  },
  {
    icon: Lock,
    title: "Security First",
    desc: "Every solution built with security best practices from day one.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    desc: "Infrastructure that grows with your business needs.",
  },
];

const industries = [
  { name: "Healthcare", icon: "🏥" },
  { name: "Finance", icon: "💰" },
  { name: "Retail", icon: "🛍️" },
  { name: "Education", icon: "🎓" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Technology", icon: "💻" },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    desc: "We understand your business needs and technical requirements",
  },
  {
    step: "02",
    title: "Planning",
    desc: "Develop a comprehensive project plan with clear milestones",
  },
  {
    step: "03",
    title: "Development",
    desc: "Build your solution with regular updates and demonstrations",
  },
  {
    step: "04",
    title: "Deployment",
    desc: "Launch your solution with full testing and documentation",
  },
  {
    step: "05",
    title: "Support",
    desc: "Ongoing maintenance, updates, and technical support",
  },
];

export default function Home() {
  return (
    <div className="bg-white">

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="absolute inset-0 dot-grid opacity-30" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700">
                <Building2 className="w-4 h-4" />
                Professional IT Solutions Provider
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Transform Your Business with
                <span className="block mt-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  AI & Technology
                </span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Western Gate Labs delivers enterprise-grade AI solutions, cybersecurity services, 
                and digital platforms. Based in Malabe, Sri Lanka, we help businesses leverage 
                technology for growth and competitive advantage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button href="/contact" size="lg">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  View Services
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label}>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-blue-600" />
                        <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                      </div>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main card */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">AI Solutions</p>
                        <p className="text-sm text-slate-500">Intelligent automation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Cybersecurity</p>
                        <p className="text-sm text-slate-500">Enterprise protection</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Digital Solutions</p>
                        <p className="text-sm text-slate-500">Web & mobile platforms</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Trusted by</span>
                        <span className="font-semibold text-slate-900">Growing Clients</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold">
                  ✓ Available 24/7
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── OUR SERVICES ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer end-to-end IT services to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Brain}
              accent="blue"
              title="AI Solutions"
              description="Custom AI systems, chatbots, automation platforms, and intelligent assistants designed to improve business efficiency."
              href="/ai-solutions"
              features={[
                "AI Website Chatbots",
                "AI Knowledge Assistants",
                "AI Content Generation",
                "AI Business Automation",
                "Custom AI Solutions",
              ]}
            />
            <ServiceCard
              icon={Shield}
              accent="purple"
              title="Cybersecurity"
              description="Protect your business through assessments, consulting, and security-focused technology strategies."
              href="/cybersecurity"
              features={[
                "Security Assessments",
                "Vulnerability Assessments",
                "Security Consulting",
                "Website Security Audits",
              ]}
            />
            <ServiceCard
              icon={Globe}
              accent="cyan"
              title="Digital Solutions"
              description="Business websites, customer portals, SaaS products, and custom web applications built for growth."
              href="/digital-solutions"
              features={[
                "Business Websites",
                "WordPress Development",
                "Next.js Development",
                "Landing Pages",
                "E-Commerce Websites",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Your Trusted Technology Partner
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine technical expertise with a commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => (
              <div key={item.step} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white font-bold text-lg mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
                
                {/* Connector line */}
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-300 to-violet-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT TESTIMONIALS ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
              Client Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Leading Organizations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Western Gate Labs delivered a robust security assessment that identified critical vulnerabilities we weren't aware of. Their expertise and professionalism are outstanding."
              author="Sarah Chen"
              title="CTO"
              company="TechCorp International"
            />
            <TestimonialCard
              quote="The AI chatbot they developed for our website has transformed our customer service. It handles 70% of inquiries automatically and customers love the instant responses."
              author="Michael Rodriguez"
              title="VP Operations"
              company="Finance Plus"
            />
            <TestimonialCard
              quote="Professional team, excellent communication, and delivered exactly what we needed on time. Our new e-commerce platform is fast, secure, and easy to manage."
              author="Jennifer Park"
              title="Director of IT"
              company="Retail Solutions Inc"
            />
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES WE SERVE ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">
              Industries
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Serving Diverse Sectors
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We understand the unique challenges of different industries
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry) => (
              <Link key={industry.name} href="/industries">
                <div className="bg-white border-2 border-slate-200 rounded-xl p-6 text-center hover:border-blue-400 hover:shadow-lg transition cursor-pointer group">
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition">
                    {industry.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your business goals.
            Get a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
            >
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+94776100099"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition inline-flex items-center gap-2"
            >
              📞 +94 77 610 0099
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-100 text-sm mb-2">Based in Malabe, Sri Lanka</p>
            <p className="text-blue-200 text-sm">Serving clients locally and internationally</p>
          </div>
        </div>
      </section>

    </div>
  );
}
