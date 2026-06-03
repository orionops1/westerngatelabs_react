import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

const services = [
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Web Development", href: "/web-development" },
  { label: "Industries", href: "/industries" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-white/[0.06] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-md bg-electric-blue flex items-center justify-center">
                <span className="text-navy-900 font-black text-xs">WG</span>
              </div>
              <span className="font-semibold text-sm text-white">Western Gate Labs</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              AI and cybersecurity solutions for forward-thinking organizations.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-slate-500 hover:text-electric-blue transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-slate-500 hover:text-electric-blue transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" aria-label="GitHub" className="text-slate-500 hover:text-electric-blue transition">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-slate-500 hover:text-white transition">
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
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-slate-500 hover:text-white transition">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:hello@westerngatelabs.com" className="text-sm text-slate-500 hover:text-white transition">
                  hello@westerngatelabs.com
                </a>
              </li>
              <li className="text-sm text-slate-500">San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {year} Western Gate Labs. All rights reserved.
          </p>
          <div className="flex gap-5">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-slate-600 hover:text-slate-400 transition">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
