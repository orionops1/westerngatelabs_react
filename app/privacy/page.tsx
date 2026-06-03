import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Western Gate Labs",
  description: "Western Gate Labs privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-gray-400 text-sm">Last updated: January 2024</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-300 leading-relaxed">
          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you fill out our contact form,
              request a consultation, or communicate with us via email or phone. This may include your name,
              company, email address, phone number, and any other information you choose to provide.
            </p>
            <p>
              We also automatically collect certain technical information when you visit our website,
              including your IP address, browser type, operating system, referring URLs, and pages visited.
            </p>
          </div>

          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
            <ul className="space-y-2">
              {[
                "To respond to your inquiries and provide requested services",
                "To send you information about our services, updates, and newsletters (with your consent)",
                "To improve and optimize our website and services",
                "To comply with legal obligations",
                "To protect against fraud and security threats",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-electric-blue font-bold">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Data Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties
              without your consent, except as required by law or to trusted service providers who
              assist us in operating our website and conducting our business, subject to confidentiality agreements.
            </p>
          </div>

          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information
              from unauthorized access, disclosure, alteration, or destruction. However, no method
              of transmission over the internet is 100% secure.
            </p>
          </div>

          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. You may also
              withdraw consent for marketing communications at any time. Contact us at{" "}
              <a href="mailto:hello@westerngatelabs.com" className="text-electric-blue hover:underline">
                hello@westerngatelabs.com
              </a>{" "}
              to exercise these rights.
            </p>
          </div>

          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p>
              Email:{" "}
              <a href="mailto:hello@westerngatelabs.com" className="text-electric-blue hover:underline">
                hello@westerngatelabs.com
              </a>
              <br />
              Address: San Francisco, CA, United States
            </p>
          </div>

          <div className="text-center">
            <Link href="/" className="text-electric-blue hover:text-cyan-400 transition">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
