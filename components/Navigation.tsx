"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Services", href: "/services" },
  {
    label: "Solutions",
    href: "#",
    children: [
      { label: "AI Solutions",           href: "/ai-solutions" },
      { label: "Cybersecurity",          href: "/cybersecurity" },
      { label: "Web Development",        href: "/web-development" },
      { label: "WordPress Development",  href: "/wordpress-development" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "About",      href: "/about" },
  { label: "Blog",       href: "/blog" },
];

export default function Navigation() {
  const [isOpen, setIsOpen]       = useState(false);
  const [dropdown, setDropdown]   = useState(false);
  const pathname                  = usePathname();

  const isActive = (href: string) =>
    href !== "#" && (pathname === href || pathname.startsWith(href + "/"));

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#03050f]/85 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-bold text-white hover:opacity-90 transition group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-electric-blue to-electric-purple flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-xs tracking-tight">WG</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-electric-blue to-electric-purple opacity-0 group-hover:opacity-30 blur-sm transition" />
            </div>
            <span className="text-sm font-semibold tracking-wide hidden sm:inline">Western Gate Labs</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition py-1">
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`} />
                  </button>

                  {dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52">
                      <div className="bg-[#070a18] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center gap-2.5 px-4 py-3 text-sm transition hover:bg-white/5 ${
                              isActive(child.href) ? "text-electric-blue" : "text-slate-400 hover:text-white"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition animated-link ${
                    isActive(item.href) ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-semibold text-white rounded-lg transition relative overflow-hidden group"
              style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition rounded-lg hover:bg-white/5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-5 pt-3 border-t border-white/[0.06] space-y-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <p className="px-3 py-2 text-xs font-semibold text-slate-600 uppercase tracking-widest">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-5 py-2.5 text-sm rounded-lg transition ${
                        isActive(child.href)
                          ? "text-electric-blue bg-electric-dim"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2.5 text-sm rounded-lg transition ${
                    isActive(item.href)
                      ? "text-electric-blue bg-electric-dim"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 px-3">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 text-sm font-semibold text-white rounded-lg transition"
                style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
