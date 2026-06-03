import Link from "next/link";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "AI Solutions",       href: "/ai-solutions"      },
  { label: "Cybersecurity",      href: "/cybersecurity"     },
  { label: "Digital Solutions",  href: "/digital-solutions" },
  { label: "Industries",         href: "/industries"        },
];

const companyLinks = [
  { label: "About",   href: "/about"   },
  { label: "Blog",    href: "/blog"    },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms"   },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">

      {/* CTA strip */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-base font-semibold text-white">Ready to build something great?</p>
            <p className="text-sm text-slate-400 mt-0.5">We respond within one business day.</p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-500 transition whitespace-nowrap"
          >
            Start a conversation
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xs">WG</span>
              </div>
              <span className="font-bold text-sm text-white">Western Gate Labs</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              AI solutions, cybersecurity, and digital platforms for forward-thinking organizations.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" aria-label="LinkedIn"
                className="text-slate-500 hover:text-white transition"><Linkedin className="w-4 h-4" /></a>
              <a href="https://twitter.com"  aria-label="Twitter"
                className="text-slate-500 hover:text-white transition"><Twitter  className="w-4 h-4" /></a>
              <a href="https://github.com"   aria-label="GitHub"
                className="text-slate-500 hover:text-white transition"><Github   className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-slate-400 hover:text-white transition">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-slate-400 hover:text-white transition">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@westerngatelabs.com"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
                  <Mail className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  hello@westerngatelabs.com
                </a>
              </li>
              <li>
                <a href="tel:+94776100099"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition">
                  <Phone className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  +94 77 610 0099
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                Malabe, Sri Lanka
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {year} Western Gate Labs (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-xs text-slate-500 hover:text-slate-300 transition">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
