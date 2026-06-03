"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
import { Menu, X, ChevronDown, Brain, Shield, Globe } from "lucide-react";

const services = [
  {
    name: "AI Solutions",
    icon: Brain,
    href: "/ai-solutions",
    color: "text-blue-600",
    bg: "bg-blue-50",
    items: [
      { label: "AI Website Chatbots",     href: "/ai-solutions#chatbots"   },
      { label: "AI Knowledge Assistants", href: "/ai-solutions#assistants" },
      { label: "AI Content Generation",   href: "/ai-solutions#content"    },
      { label: "AI Business Automation",  href: "/ai-solutions#automation" },
      { label: "Custom AI Solutions",     href: "/ai-solutions#custom"     },
    ],
  },
  {
    name: "Cybersecurity",
    icon: Shield,
    href: "/cybersecurity",
    color: "text-violet-600",
    bg: "bg-violet-50",
    items: [
      { label: "Security Assessments",      href: "/cybersecurity#assessments"   },
      { label: "Vulnerability Assessments", href: "/cybersecurity#vulnerability" },
      { label: "Security Consulting",       href: "/cybersecurity#consulting"    },
      { label: "Website Security Audits",   href: "/cybersecurity#audits"        },
    ],
  },
  {
    name: "Digital Solutions",
    icon: Globe,
    href: "/digital-solutions",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    items: [
      { label: "Business Websites",    href: "/digital-solutions#websites"  },
      { label: "WordPress Development",href: "/digital-solutions#wordpress" },
      { label: "Next.js Development",  href: "/digital-solutions#nextjs"    },
      { label: "Landing Pages",        href: "/digital-solutions#landing"   },
      { label: "E-Commerce Websites",  href: "/digital-solutions#ecommerce" },
    ],
  },
];

const otherNav = [
  { label: "Industries", href: "/industries" },
  { label: "Blog",       href: "/blog"       },
];

export default function Navigation() {
  const [isOpen,       setIsOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobOpen,      setMobOpen]      = useState<string | null>(null);
  const pathname                        = usePathname();
  const timer                           = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href.split("#")[0] + "/");

  const openDrop = (name: string) => {
    if (timer.current) clearTimeout(timer.current);
    setActiveDropdown(name);
  };
  
  const closeDrop = () => {
    timer.current = setTimeout(() => setActiveDropdown(null), 130);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-xs">WG</span>
            </div>
            <span className="text-sm font-bold text-slate-900 tracking-tight hidden sm:inline">
              Western Gate Labs
            </span>
          </Link>

          {/* Desktop nav - 3 main services with individual dropdowns */}
          <div className="hidden md:flex items-center gap-6">

            {/* Each service as separate dropdown */}
            {services.map((service) => {
              const Icon = service.icon;
              const isOpen = activeDropdown === service.name;
              return (
                <div
                  key={service.name}
                  className="relative"
                  onMouseEnter={() => openDrop(service.name)}
                  onMouseLeave={closeDrop}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition py-1 ${
                      isOpen || isActive(service.href)
                        ? service.color
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {service.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${
                        isOpen ? `rotate-180 ${service.color}` : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="absolute top-full left-0 pt-3 w-56"
                      onMouseEnter={() => openDrop(service.name)}
                      onMouseLeave={closeDrop}
                    >
                      <div className="bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/60 overflow-hidden">
                        <div className="p-3">
                          <Link
                            href={service.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center gap-2 px-3 py-2 mb-2 rounded-lg hover:bg-slate-50 transition group"
                          >
                            <div className={`w-6 h-6 rounded-md ${service.bg} flex items-center justify-center`}>
                              <Icon className={`w-3.5 h-3.5 ${service.color}`} />
                            </div>
                            <span className={`text-xs font-bold ${service.color}`}>
                              View All {service.name}
                            </span>
                          </Link>
                          <div className="border-t border-slate-100 pt-2">
                            <ul className="space-y-0.5">
                              {service.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="block px-3 py-2 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Other links */}
            {otherNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition animated-link ${
                  isActive(item.href) ? "text-blue-600" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link href="/about" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition">
              About
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition shadow-sm"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-5 pt-3 border-t border-slate-100 space-y-1">

            {/* Each service as accordion */}
            {services.map((service) => {
              const Icon = service.icon;
              const isServiceOpen = mobOpen === service.name;
              return (
                <div key={service.name}>
                  <button
                    onClick={() => setMobOpen(isServiceOpen ? null : service.name)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {service.name}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform text-slate-400 ${
                        isServiceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isServiceOpen && (
                    <div className="pl-6 space-y-1 pb-2 pt-1">
                      <Link
                        href={service.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2 px-3 py-2 text-xs font-bold ${service.color} hover:bg-slate-50 rounded-lg transition`}
                      >
                        View All {service.name}
                      </Link>
                      {service.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {otherNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 text-sm rounded-lg transition ${
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition"
            >
              About
            </Link>

            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
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
