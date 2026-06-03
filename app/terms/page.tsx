import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Westerngate Labs",
  description: "Westerngate Labs terms of service — the legal agreement governing use of our services.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-gray-400 text-sm">Last updated: January 2024</p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-300 leading-relaxed">
          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website and services, you agree to be bound by these Terms of Service
              and all applicable laws and regulations. If you do not agree with any of these terms, you are
              prohibited from using or accessing this site.
            </p>
          </div>

          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Services</h2>
            <p>
              Westerngate Labs provides AI consulting, cybersecurity, and web development services.
              The specific terms of any engagement are governed by a separate Statement of Work or
              Service Agreement executed between Westerngate Labs and the client.
            </p>
          </div>

          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Intellectual Property</h2>
            <p>
              The content, features, and functionality of this website are owned by Westerngate Labs
              and are protected by international copyright, trademark, and other intellectual property laws.
              Work product developed for clients is governed by the applicable client agreement.
            </p>
          </div>

          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Limitation of Liability</h2>
            <p>
              Westerngate Labs shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages resulting from your use or inability to use our services. Our total
              liability is limited to the amount paid for the specific service giving rise to the claim.
            </p>
          </div>

          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary information disclosed
              during engagements. Specific confidentiality terms are detailed in client agreements
              and Non-Disclosure Agreements.
            </p>
          </div>

          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the State
              of California, United States, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="glass p-8 rounded-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">7. Contact</h2>
            <p>
              For questions about these Terms of Service, contact us at:{" "}
              <a href="mailto:hello@westerngatelabs.com" className="text-electric-blue hover:underline">
                hello@westerngatelabs.com
              </a>
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
