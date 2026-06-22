/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

const serviceLinks = [
  "HVAC Services",
  "Electrical Works",
  "Plumbing & Sanitary",
  "Cleaning Services",
  "Security Services",
  "Fitout & Interiors",
];

const navLinks = [
  { label: "Home", href: siteConfig.nav.home },
  { label: "About Us", href: siteConfig.nav.about },
  { label: "Projects", href: siteConfig.nav.projects },
  { label: "Why Us", href: siteConfig.nav.whyUs },
  { label: "Contact Us", href: siteConfig.nav.contact },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { nav, whatsappUrl } = siteConfig;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <nav className="container-main flex items-center justify-between h-20 lg:h-24">
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={closeMobile}>
          <img src="/logo.jpeg" alt="Saryab Technicals" className="h-16 lg:h-24 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <Link href={nav.home} className="hover:text-brand-blue transition-colors">
            Home
          </Link>
          <Link href={nav.about} className="hover:text-brand-blue transition-colors">
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href={nav.services} className="flex items-center gap-1 hover:text-brand-blue transition-colors">
              Services <FiChevronDown className="w-4 h-4" />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-xl py-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service}
                    href={nav.services}
                    className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-blue"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={nav.projects} className="hover:text-brand-blue transition-colors">
            Projects
          </Link>
          <Link href={nav.whyUs} className="hover:text-brand-blue transition-colors">
            Why Us
          </Link>
          <Link href={nav.contact} className="hover:text-brand-blue transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Desktop CTA — wrapper hides on mobile (.btn-primary inline-flex overrides hidden) */}
        <div className="hidden lg:flex shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaWhatsapp className="w-4 h-4" /> Request Proposal
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
        >
          {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile sidebar overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-black/50 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
        aria-hidden={!mobileOpen}
      />

      {/* Mobile sidebar panel */}
      <aside
        className={`lg:hidden fixed top-20 right-0 bottom-0 w-[min(320px,88vw)] bg-white border-l border-slate-200 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <nav className="flex flex-col gap-1">
            {navLinks.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className="px-3 py-3.5 text-base font-medium text-slate-800 rounded-lg hover:bg-slate-50 hover:text-brand-blue transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setMobileServicesOpen((open) => !open)}
              className="flex items-center justify-between px-3 py-3.5 text-base font-medium text-slate-800 rounded-lg hover:bg-slate-50 hover:text-brand-blue transition-colors w-full text-left"
            >
              Services
              <FiChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-3 border-l border-slate-200 pl-3 mb-1">
                <Link
                  href={nav.services}
                  onClick={closeMobile}
                  className="block px-3 py-2.5 text-sm font-medium text-brand-blue"
                >
                  All Services
                </Link>
                {serviceLinks.map((service) => (
                  <Link
                    key={service}
                    href={nav.services}
                    onClick={closeMobile}
                    className="block px-3 py-2.5 text-sm text-slate-600 hover:text-brand-blue transition-colors"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className="px-3 py-3.5 text-base font-medium text-slate-800 rounded-lg hover:bg-slate-50 hover:text-brand-blue transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-5 border-t border-slate-200">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="btn-primary w-full justify-center"
          >
            <FaWhatsapp className="w-4 h-4" /> Request Proposal
          </a>
        </div>
      </aside>
    </header>
  );
}
