import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "AI Solutions", href: "/ai-solutions" },
        { label: "Cybersecurity", href: "/cybersecurity" },
        { label: "Web Development", href: "/web-development" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Industries", href: "/industries" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-navy-800 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-electric-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-black">W</span>
              </div>
              <span className="font-bold">Western Gate Labs</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              AI-powered innovation for modern businesses.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-electric-blue transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-400 hover:text-electric-blue transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="text-gray-400 hover:text-electric-blue transition"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-electric-blue transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:hello@westerngatelabs.com"
                  className="hover:text-electric-blue transition"
                >
                  hello@westerngatelabs.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+14155552671"
                  className="hover:text-electric-blue transition"
                >
                  +1 (415) 555-2671
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-navy-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Western Gate Labs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="mailto:hello@westerngatelabs.com" className="text-gray-400 hover:text-electric-blue transition">
              Privacy Policy
            </a>
            <a href="mailto:hello@westerngatelabs.com" className="text-gray-400 hover:text-electric-blue transition">
              Terms of Service
            </a>
            <Link href="/sitemap" className="text-gray-400 hover:text-electric-blue transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
