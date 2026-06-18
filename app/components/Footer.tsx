/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiArrowRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-1">
            <img src="/images/logo.webp" alt="Saryab Technicals" className="h-16 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Saryab Technicals delivers integrated facility management and engineering solutions across the UAE.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FiFacebook, href: "https://www.facebook.com/profile.php?id=61589287366189", label: "Facebook" },
                { icon: FiInstagram, href: "https://www.instagram.com/saryab_technicals/", label: "Instagram" },
                { icon: FiLinkedin, href: "#", label: "LinkedIn" },
                { icon: FiYoutube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
              {["Home", "About Us", "Services", "Projects", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {["HVAC Services", "Electrical Works", "Cleaning Services", "Security Services", "Fitout & Interiors", "Building Maintenance"].map((item) => (
                <li key={item}>
                  <Link href="#services" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Industries</h4>
            <ul className="space-y-2.5 text-sm">
              {["Commercial", "Hospitality", "Industrial", "Retail", "Residential", "Healthcare"].map((item) => (
                <li key={item}>
                  <Link href="#industries" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to get updates on our latest projects and services.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-l-md bg-slate-800 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-blue"
              />
              <button className="bg-brand-blue px-4 rounded-r-md hover:bg-blue-700 transition-colors">
                <FiArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
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
