"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiClock, FiCheckCircle, FiMapPin } from "react-icons/fi";
import { fadeUp, staggerContainer } from "../../utils/animations";

const stats = [
  { icon: FiBriefcase, value: "500+", label: "Projects Delivered" },
  { icon: FiClock, value: "24/7", label: "Support" },
  { icon: FiCheckCircle, value: "100%", label: "Commitment" },
  { icon: FiMapPin, value: "UAE", label: "Wide Coverage" },
];

export default function StatsSection() {
  return (
    <section className="relative z-20 -mt-10 lg:-mt-14 px-6 lg:px-8">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-white rounded-2xl shadow-xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-200 border border-slate-100 overflow-hidden"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="flex items-center gap-4 px-6 py-7 lg:px-10 lg:py-8"
            >
              <div className="w-12 h-12 rounded-full border-2 border-brand-blue/40 flex items-center justify-center shrink-0">
                <stat.icon className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900 leading-none mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
