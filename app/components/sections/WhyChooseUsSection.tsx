"use client";

import { motion } from "framer-motion";
import { FiUsers, FiClock, FiLayers, FiAward, FiDollarSign, FiMapPin } from "react-icons/fi";
import ScrollReveal from "../ScrollReveal";

const reasons = [
  { icon: FiUsers, title: "Professional Team", desc: "Skilled and certified professionals" },
  { icon: FiClock, title: "Fast Response", desc: "24/7 rapid response to emergencies" },
  { icon: FiLayers, title: "Complete Solutions", desc: "End-to-end facility management" },
  { icon: FiAward, title: "Quality Assurance", desc: "ISO-compliant service standards" },
  { icon: FiDollarSign, title: "Competitive Pricing", desc: "Cost-effective without compromise" },
  { icon: FiMapPin, title: "UAE Wide Coverage", desc: "Serving clients across the Emirates" },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 lg:py-20 bg-brand-navy text-white overflow-hidden">
      <div className="container-main">
        <ScrollReveal className="text-center mb-12" y={32}>
          <span className="section-label text-brand-blue/80">Why Choose Us</span>
          <h2 className="text-2xl md:text-3xl font-bold font-display">
            Built for buildings that <span className="text-accent-warm">never stop running</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger={0.1} y={40}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                whileHover={{ y: -4 }}
                className={`text-center p-4 rounded-xl border border-white/10 hover:border-brand-blue/50 hover:bg-white/5 transition-colors duration-300 ${
                  i !== reasons.length - 1 ? "lg:border-r lg:border-white/10 lg:rounded-none lg:border-y-0 lg:border-l-0" : ""
                }`}
              >
                <div className="w-14 h-14 mx-auto rounded-full border border-brand-blue/40 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="font-bold text-sm mb-1 font-display">{reason.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
