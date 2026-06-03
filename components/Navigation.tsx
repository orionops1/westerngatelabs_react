"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { Menu, X, ChevronDown, Brain, Shield, Globe } from "lucide-react";

const solutions = [
  {
    group: "AI Solutions",
    icon: Brain,
    href: "/ai-solutions",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    children: [
      { label: "AI Website Chatbots",        href: "/ai-solutions#chatbots"   },
      { label: "AI Knowledge Assistants",    href: "/ai-solutions#assistants" },
      { label: "AI Content Generation",      href: "/ai-solutions#content"    },
      { label: "AI Business Automation",     href: "/ai-solutions#automation" },
      { label: "Custom AI Solutions",        href: "/ai-solutions#custom"     },
    ],
  },
  {
    group: "Cybersecurity",
    icon: Shield,
    href: "/cybersecurity",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    children: [
      { label: "Security Assessments",       href: "/cybersecurity#assessments"   },
      { label: "Vulnerability Assessments",  href: "/cybersecurity#vulnerability" },
      { label: "Security Consulting",        href: "/cybersecurity#consulting"    },
      { label: "Website Security Audits",    href: "/cybersecurity#audits"        },
    ],
  },
  {
    group: "Digital Solutions",
    icon: Globe,
    href: "/digital-solutions",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    children: [
      { label: "Business Websites",          href: "/digital-solutions#websites"   },
      { label: "WordPress Development",      href: "/digital-solutions#wordpress"  },
      { label: "Next.js Development",        href: "/digital-solutions#nextjs"     },
      { label: "Landing Pages",              href: "/digital-solutions#landing"    },
      { label: "E-Commerce Websites",        href: "/digital-solutions#ecommerce"  },
    ],
  },
];

const topNav = [
  { label: "Services",   href: "/services"   },
  { label: "Industries", href: "/industries" },
  { label: "About",      href: "/about"      },
  { label: "Blog",       href: "/blog"       },
];

export default function Navigation() {
  const [isOpen, setIsOpen]       = useState(false);
  const [dropdown, setDropdown]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const pathname                  = usePathname();
  const closeTimer                = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    href !== "#" && (pathname === href || pathname.startsWith(href.split("#")[0] + "/"));

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown(true);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropdown(false), 120);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#03050f]/90 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-bold text-white hover:opacity-90 transition group flex-shrink-0">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-xs tracking-tight">WG</span>
            </div>
            <span className="text-sm font-semibold tracking-wide hidden sm:inline">Western Gate Labs</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Solutions mega-dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition py-1">
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`} />
              </button>

              {dropdown && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[620px]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-[#07090f] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
                    <div className="grid grid-cols-3 gap-0">
                      {solutions.map((sol, idx) => {
                        const Icon = sol.icon;
                        return (
                          <div
                            key={sol.group}
                            className={`p-5 ${idx < solutions.length - 1 ? "border-r border-white/[0.06]" : ""}`}
                          >
                            {/* Group header — links to main page */}
                            <Link
                              href={sol.href}
                              className="flex items-center gap-2 mb-3 group/header"
                              onClick={() => setDropdown(false)}
                            >
                              <div className={`w-6 h-6 rounded-md ${sol.bg} flex items-center justify-center flex-shrink-0`}>
                                <Icon className={`w-3.5 h-3.5 ${sol.color}`} />
                              </div>
                              <span className={`text-xs font-semibold ${sol.color} group-hover/header:opacity-80 transition`}>
                                {sol.group}
                              </span>
                            </Link>

                            {/* Sub-items */}
                            <ul className="space-y-0.5">
                              {sol.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className="block px-2 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition"
                                    onClick={() => setDropdown(false)}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other nav items */}
            {topNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition animated-link ${
                  isActive(item.href) ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block flex-shrink-0">
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
          <div className="md:hidden pb-5 pt-3 border-t border-white/[0.06] space-y-1">
            {/* Solutions accordion */}
            <div>
              <button
                onClick={() => setMobileOpen(mobileOpen === "solutions" ? null : "solutions")}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpen === "solutions" ? "rotate-180" : ""}`} />
              </button>

              {mobileOpen === "solutions" && (
                <div className="pl-3 mt-1 space-y-3">
                  {solutions.map((sol) => {
                    const Icon = sol.icon;
                    return (
                      <div key={sol.group}>
                        <Link
                          href={sol.href}
                          className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold ${sol.color} hover:opacity-80 transition`}
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {sol.group}
                        </Link>
                        {sol.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other items */}
            {topNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2.5 text-sm rounded-lg transition ${
                  isActive(item.href)
                    ? "text-blue-400 bg-blue-500/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2 px-0">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 text-sm font-semibold text-white rounded-lg"
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
