import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Western Gate Labs",
  description:
    "Get in touch with Western Gate Labs. Request a consultation or ask any questions.",
  openGraph: {
    title: "Contact Us | Western Gate Labs",
    description: "Ready to transform your business? Let's talk.",
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Let's Build Something
            <span className="gradient-text"> Amazing</span>
          </h1>
          <p className="text-xl text-gray-300">
            Have questions? Want to discuss your project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-800/50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="glass p-6 rounded-xl space-y-4">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a
                    href="mailto:hello@westerngatelabs.com"
                    className="text-gray-400 hover:text-electric-blue transition"
                  >
                    hello@westerngatelabs.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl space-y-4">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a
                    href="tel:+14155552671"
                    className="text-gray-400 hover:text-electric-blue transition"
                  >
                    +1 (415) 555-2671
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Mon-Fri, 9 AM - 6 PM PT
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl space-y-4">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Office</p>
                  <p className="text-gray-400">
                    San Francisco, CA<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl space-y-4">
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Response Time</p>
                  <p className="text-gray-400 text-sm">
                    Standard inquiries: 24 hours<br />
                    Urgent matters: 2 hours (during business hours)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "What's the typical timeline for an AI implementation project?",
                a: "Most projects take 3-6 months from discovery to deployment, depending on scope and complexity. We'll provide a detailed timeline during the consultation phase.",
              },
              {
                q: "Do you offer ongoing support after implementation?",
                a: "Yes. We provide comprehensive post-deployment support including monitoring, optimization, and maintenance. Custom support packages are available.",
              },
              {
                q: "What industries do you specialize in?",
                a: "We have expertise across healthcare, finance, retail, education, manufacturing, and technology. However, our AI-first approach works for any industry.",
              },
              {
                q: "Can you work with our existing systems?",
                a: "Absolutely. We specialize in integrating AI and security solutions into existing infrastructure with minimal disruption.",
              },
              {
                q: "What's your pricing model?",
                a: "We offer flexible engagement models: project-based, time-and-materials, or managed retainers. We'll discuss what works best during consultation.",
              },
              {
                q: "How do you ensure security in AI solutions?",
                a: "Security is built into every phase: secure development practices, regular audits, compliance verification, and ongoing monitoring.",
              },
              {
                q: "Do you provide training for our team?",
                a: "Yes. We include team training and knowledge transfer as part of every engagement to ensure long-term success.",
              },
              {
                q: "What's your availability for emergency support?",
                a: "We offer 24/7 emergency support for managed services clients and extended hours for critical production issues.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group glass p-6 rounded-xl cursor-pointer transition"
              >
                <summary className="font-semibold flex justify-between items-center">
                  {item.q}
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <p className="text-gray-400 mt-4 pt-4 border-t border-navy-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
