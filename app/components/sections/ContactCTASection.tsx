"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { fadeUp } from "../../utils/animations";

export default function ContactCTASection() {
  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-brand-navy" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/80" />
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-slate-400 flex items-center justify-center text-slate-600 text-sm">
          City Skyline Image Placeholder
        </div>
      </div>

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Let&apos;s Discuss Your Facility Requirements
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-lg">
              Whether you need technical maintenance, integrated facility management, or a complete fitout solution — our team is ready to assist.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="tel:+971526504599" className="btn-primary">
                <FiPhone /> Call Now
              </Link>
              <Link
                href="https://wa.me/971526504599"
                target="_blank"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" /> WhatsApp Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {[
              { icon: FiPhone, label: "Phone", value: "+971 52 650 4599" },
              { icon: FiMail, label: "Email", value: "info@saryabtechnicals.com" },
              { icon: FiMapPin, label: "Address", value: "Office 101, Al Zarooni Building, Dubai, UAE" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-blue/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-0.5">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
