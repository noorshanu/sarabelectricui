/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Industries", href: "#industries" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  "HVAC Services",
  "Electrical Works",
  "Plumbing & Sanitary",
  "Cleaning Services",
  "Security Services",
  "Fitout & Interiors",
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <nav className="container-main flex items-center justify-between h-24">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo.jpeg" alt="Saryab Technicals" className="h-24 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          {navLinks.slice(0, 1).map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-blue transition-colors">
              {link.label}
            </Link>
          ))}

          <Link href="#about" className="hover:text-brand-blue transition-colors">
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-brand-blue transition-colors">
              Services <FiChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-xl py-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service}
                    href="#services"
                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-blue"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-blue transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <Link href="#contact" className="btn-primary shrink-0">
          Request Proposal <FiArrowRight />
        </Link>
      </nav>
    </header>
  );
}
