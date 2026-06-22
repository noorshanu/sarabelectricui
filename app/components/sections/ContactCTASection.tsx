"use client";

import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";
import ScrollReveal from "../ScrollReveal";

const fullAddress = `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, UAE`;

const contactInfo = [
  { icon: FiPhone, value: siteConfig.phone, href: `tel:${siteConfig.phoneTel}` },
  { icon: FiMail, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: FiMapPin, value: fullAddress, href: siteConfig.nav.contact },
];

export default function ContactCTASection() {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="container-main">
        <ScrollReveal y={40}>
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-[280px]">
          <Image
            src="/images/cta.png"
            alt="Contact CTA Background"
            fill
            className="object-cover object-right"
            priority
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12 p-8 lg:p-10 xl:p-12 h-full">
            {/* Left — Heading, text & buttons */}
            <div className="lg:max-w-[42%] text-white">
              <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-bold mb-4 leading-tight">
                Let&apos;s Discuss Your Facility Requirements
              </h2>
              <p className="text-sm md:text-base text-slate-200 leading-relaxed mb-6 max-w-md">
                Whether you need technical maintenance, security, cleaning, fitout, or complete facility management, our team is ready to assist.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="tel:+971586166905"
                  className="btn-primary px-5 py-2.5 rounded-lg text-sm"
                >
                  Call Now <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#20bd5a] transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" /> WhatsApp Us
                </Link>
                <Link href={siteConfig.nav.contact} className="btn-outline-white px-5 py-2.5 rounded-lg text-sm">
                  Contact Us <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Middle — Contact info */}
            <div className="flex flex-col gap-5 lg:gap-6 lg:mr-auto">
              {contactInfo.map((item) => (
                <Link
                  key={item.value}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-cyan-400/80 flex items-center justify-center shrink-0 group-hover:border-cyan-300 group-hover:bg-cyan-400/10 transition-colors">
                    <item.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-sm md:text-base text-white font-medium leading-snug max-w-xs">
                    {item.value}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
