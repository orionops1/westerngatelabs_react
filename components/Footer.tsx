import Link from "next/link";
import { Linkedin, Twitter, Github, Mail, Phone, MapPin } from "lucide-react";

const services = [
  { label: "AI Solutions",          href: "/ai-solutions" },
  { label: "Cybersecurity",         href: "/cybersecurity" },
  { label: "Web Development",       href: "/web-development" },
  { label: "WordPress Development", href: "/wordpress-development" },
  { label: "Industries",            href: "/industries" },
];

const company = [
  { label: "About",   href: "/about" },
  { label: "Blog",    href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#03050f] border-t border-white/[0.06]">
      {/* Top CTA strip */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-base font-semibold text-white">Ready to build something?</p>
            <p className="text-sm text-slate-500">Talk to our team in Malabe, Sri Lanka.</p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg whitespace-nowrap"
            style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
          >
            Start a conversation
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-electric-purple flex items-center justify-center">
                <span className="text-white font-black text-xs">WG</span>
              </div>
              <span className="font-semibold text-sm text-white">Western Gate Labs</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              AI-first technology solutions and cybersecurity services for forward-thinking organizations.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-slate-600 hover:text-blue-400 transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-slate-600 hover:text-blue-400 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" aria-label="GitHub" className="text-slate-600 hover:text-blue-400 transition">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-slate-500 hover:text-white transition animated-link">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Company</p>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-slate-500 hover:text-white transition animated-link">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@westerngatelabs.com" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition">
                  <Mail className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  hello@westerngatelabs.com
                </a>
              </li>
              <li>
                <a href="tel:+94776100099" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition">
                  <Phone className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  +94 77 610 0099
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Malabe, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-700">
            © {year} Western Gate Labs (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            <Link href="/privacy" className="text-xs text-slate-700 hover:text-slate-400 transition">Privacy Policy</Link>
            <Link href="/terms"   className="text-xs text-slate-700 hover:text-slate-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
