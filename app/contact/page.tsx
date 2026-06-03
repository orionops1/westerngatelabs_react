import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Westerngate Labs",
  description:
    "Get in touch with Westerngate Labs. Request a consultation for AI solutions or cybersecurity services.",
  openGraph: {
    title: "Contact | Westerngate Labs",
    description: "Let's talk about what you're building or defending.",
  },
};

const faqs = [
  {
    q: "How quickly can you start a project?",
    a: "Typically within 2–3 weeks of engagement, depending on scope and current capacity. Urgent security incidents are prioritized.",
  },
  {
    q: "What's the minimum engagement size?",
    a: "Project-based work starts at $50K. For advisory or assessments, we offer focused engagements starting at $10K.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. About half our clients are Series A–C startups. We scope work to budget and stage.",
  },
  {
    q: "How do you handle sensitive data during security assessments?",
    a: "All work is done under NDA. We follow strict data handling protocols and can work within your compliance environment.",
  },
  {
    q: "Can you integrate with our existing tools and workflows?",
    a: "Yes. We design solutions to fit your stack, not replace it — unless a change is genuinely warranted.",
  },
  {
    q: "Do you offer ongoing support after a project ends?",
    a: "Yes. Managed retainer engagements provide continuous support. We also offer ad-hoc advisory for past clients.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-4">Contact</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight mb-4 max-w-2xl">
            Let's talk about your project
          </h1>
          <p className="text-slate-600 max-w-lg">
            Fill in the form and we'll respond within one business day. Based in
            Sri Lanka — working with clients globally.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">

          {/* Info */}
          <div className="lg:col-span-2 space-y-7">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">
                Contact details
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Email</p>
                    <a
                      href="mailto:hello@westerngatelabs.com"
                      className="text-sm text-slate-900 hover:text-blue-600 transition"
                    >
                      hello@westerngatelabs.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Location</p>
                    <p className="text-sm text-slate-900">Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Phone</p>
                    <a href="tel:+94776100099" className="text-sm text-slate-900 hover:text-blue-600 transition">
                      +94 77 610 0099
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">Response time</p>
                    <p className="text-sm text-slate-900">Within 1 business day</p>
                    <p className="text-xs text-slate-500 mt-0.5">Security incidents: 2 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <p className="text-xs font-semibold text-blue-600 mb-3">
                What to expect
              </p>
              <ul className="space-y-2.5">
                {[
                  "A real person replies — not a bot",
                  "We'll ask a few focused questions",
                  "Free scoping call if there's a fit",
                  "No commitment required",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="w-1 h-1 rounded-full bg-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-3">FAQ</span>
            <h2 className="text-2xl font-bold text-slate-900">Common questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group bg-white border border-slate-200 rounded-xl cursor-pointer hover:shadow-md transition"
              >
                <summary className="flex justify-between items-center px-6 py-4 text-sm font-medium text-slate-900 list-none">
                  {item.q}
                  <span className="text-slate-500 group-open:rotate-180 transition ml-4 flex-shrink-0 text-xs">
                    ▾
                  </span>
                </summary>
                <p className="px-6 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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
