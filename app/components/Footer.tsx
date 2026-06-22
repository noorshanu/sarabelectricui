/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { siteConfig } from "@/lib/site";

const { nav, whatsappUrl } = siteConfig;

const quickLinks = [
  { label: "Home", href: nav.home },
  { label: "About Us", href: nav.about },
  { label: "Services", href: nav.services },
  { label: "Projects", href: nav.projects },
  { label: "Why Us", href: nav.whyUs },
  { label: "Contact Us", href: nav.contact },
];

const serviceLinks = [
  "HVAC Services",
  "Electrical Works",
  "Plumbing & Sanitary",
  "Cleaning Services",
  "Security Services",
  "Fitout & Interiors",
  "Building Maintenance",
];

const fullAddress = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, UAE`;

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href={nav.home} className="inline-block mb-4">
              <img src="/logo.jpeg" alt="Saryab Technicals" className="h-20 w-auto object-contain rounded-md bg-white/95 p-1" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Saryab Technicals delivers integrated facility management and engineering solutions across the UAE.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FiFacebook, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: FiInstagram, href: siteConfig.social.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <Link href={nav.services} className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-white transition-colors">{siteConfig.phone}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
              </li>
              <li>
                <Link href={nav.contact} className="hover:text-white transition-colors">{fullAddress}</Link>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-main py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Saryab Technicals. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
