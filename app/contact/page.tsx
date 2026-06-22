import type { Metadata } from "next";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Call, email, or message us on WhatsApp for facility management services across the UAE.`,
  alternates: { canonical: "/contact" },
};

const fullAddress = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, UAE`;

const socialLinks = [
  { icon: FaFacebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram" },
];

export default function ContactPage() {
  return (
    <main className="pt-24">
      <section className="py-16 lg:py-20 blueprint-bg">
        <div className="container-main">
          <span className="section-label">Contact Us</span>
          <h1 className="text-3xl md:text-5xl font-bold text-brand-navy font-display mb-4 leading-tight">
            Let&apos;s talk about <span className="text-brand-blue">your facility</span>
          </h1>
          <p className="text-steel max-w-2xl leading-relaxed">
            Reach out by phone, email, or social media. Our team is ready to discuss maintenance, security, cleaning, fitout, and complete facility management across the UAE.
          </p>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { icon: FiPhone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phoneTel}` },
              { icon: FiMail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: FiMapPin, label: "Address", value: fullAddress, href: undefined },
            ].map((item) => (
              <div key={item.label} className="section-surface rounded-2xl p-8">
                <div className="w-12 h-12 rounded-full border-2 border-brand-blue/30 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-blue font-display mb-2">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-brand-navy font-medium leading-relaxed hover:text-brand-blue transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-brand-navy font-medium leading-relaxed">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="section-surface rounded-2xl p-8 md:p-10 text-center max-w-xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-blue font-display mb-4">Follow Us</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full border-2 border-brand-blue/30 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-main">
          <div className="relative rounded-2xl overflow-hidden min-h-[280px]">
            <Image
              src="/images/cta.png"
              alt="Contact CTA"
              fill
              className="object-cover object-right"
            />
            <div className="relative z-10 p-8 md:p-12 lg:max-w-lg text-white">
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4 leading-tight">
                Ready to get started?
              </h2>
              <p className="text-slate-200 mb-6 leading-relaxed">
                Send us a message on WhatsApp or call directly — we respond quickly to facility enquiries across Dubai and the UAE.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <FaWhatsapp className="w-5 h-5" /> WhatsApp Us
                </a>
                <a href={`tel:${siteConfig.phoneTel}`} className="btn-outline-white">
                  Call Now <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
