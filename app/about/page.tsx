import { Metadata } from "next";
import Button from "@/components/Button";
import { Award, Users, Target, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Western Gate Labs",
  description:
    "Learn about Western Gate Labs' mission, values, and expertise in AI and cybersecurity.",
  openGraph: {
    title: "About Us | Western Gate Labs",
    description: "Discover our story and commitment to innovation and security.",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            About <span className="gradient-text">Western Gate Labs</span>
          </h1>
          <p className="text-xl text-gray-300">
            We believe in the transformative power of artificial intelligence and
            the critical importance of cybersecurity in the digital age.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-300 leading-relaxed">
                Founded in 2021, Western Gate Labs emerged from a vision to help
                businesses navigate the intersection of innovation and security.
                Our founding team recognized that companies struggled to adopt AI
                while maintaining robust security posture.
              </p>
              <p className="text-gray-300 leading-relaxed">
                What started as a small consulting team has grown into a trusted
                partner for Fortune 500 companies, startups, and government
                agencies. We've delivered transformative projects across
                healthcare, finance, retail, and technology sectors.
              </p>
            </div>
            <div className="glass p-8 rounded-xl">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Years of Experience</span>
                  <span className="text-2xl font-bold text-electric-blue">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Projects Completed</span>
                  <span className="text-2xl font-bold text-electric-blue">250+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Team Members</span>
                  <span className="text-2xl font-bold text-electric-blue">85+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Client Satisfaction</span>
                  <span className="text-2xl font-bold text-electric-blue">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-xl space-y-4">
              <Target className="w-12 h-12 text-electric-blue" />
              <h3 className="text-2xl font-bold">Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower organizations with cutting-edge AI and cybersecurity
                solutions that drive growth, protect assets, and build resilient
                digital infrastructure.
              </p>
            </div>
            <div className="glass p-8 rounded-xl space-y-4">
              <Lightbulb className="w-12 h-12 text-electric-blue" />
              <h3 className="text-2xl font-bold">Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where businesses of all sizes can harness the power of
                artificial intelligence while maintaining the highest standards of
                security and privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                desc: "We deliver exceptional results that exceed expectations.",
              },
              {
                icon: Users,
                title: "Partnership",
                desc: "Your success is our success. We're invested in your growth.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                desc: "We embrace emerging technologies and novel approaches.",
              },
              {
                icon: Target,
                title: "Integrity",
                desc: "Trust and transparency guide everything we do.",
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="glass p-6 rounded-xl">
                  <Icon className="w-10 h-10 text-electric-blue mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Why Choose Western Gate Labs?</h2>
          <div className="space-y-6">
            {[
              {
                title: "Proven Track Record",
                desc: "Decades of combined experience delivering transformative projects.",
              },
              {
                title: "Expert Team",
                desc: "Certified professionals with deep expertise in AI, security, and development.",
              },
              {
                title: "Holistic Approach",
                desc: "We address technology, people, and processes for lasting impact.",
              },
              {
                title: "Scalable Solutions",
                desc: "From startups to enterprises, our solutions grow with you.",
              },
              {
                title: "Continuous Support",
                desc: "Ongoing optimization and support after implementation.",
              },
              {
                title: "Security First",
                desc: "Every solution is built with security and compliance in mind.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-xl flex gap-4 border border-navy-600 hover:border-electric-blue transition"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-navy-800 to-navy-700">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Let's Work Together</h2>
          <p className="text-lg text-gray-300">
            Ready to partner with us? Let's discuss your vision and goals.
          </p>
          <Button href="/contact" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
