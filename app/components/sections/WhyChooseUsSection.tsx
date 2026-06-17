"use client";

import { motion } from "framer-motion";
import { FiUsers, FiClock, FiLayers, FiAward, FiDollarSign, FiMapPin } from "react-icons/fi";
import { fadeUp, staggerContainer } from "../../utils/animations";

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
    <section id="why-us" className="py-16 lg:py-20 bg-slate-50 border-y border-slate-200">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={fadeUp} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full border-2 border-brand-blue/20 flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{reason.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
