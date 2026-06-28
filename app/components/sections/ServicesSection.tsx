"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiWind,
  FiZap,
  FiDroplet,
  FiShield,
  FiLayout,
  FiTool,
  FiActivity,
  FiHome,
  FiLayers,
  FiBox,
  FiSettings,
  FiGrid,
} from "react-icons/fi";
import { MdCleaningServices } from "react-icons/md";
import ScrollReveal from "../ScrollReveal";

const categories = ["All Services", "MEP Systems", "Operations", "Specialty"] as const;

const services = [
  { icon: FiLayout, title: "Fitout & Interiors", desc: "Modern workspaces and renovations.", category: "Specialty" },
  { icon: FiShield, title: "Security Services", desc: "24/7 protection and monitoring.", category: "Operations" },
  { icon: MdCleaningServices, title: "Cleaning Services", desc: "Professional commercial and residential cleaning.", category: "Operations" },
  { icon: FiTool, title: "Building Maintenance", desc: "Preventive and corrective maintenance.", category: "Operations" },
  { icon: FiWind, title: "HVAC Services", desc: "Installation, maintenance and repairs.", category: "MEP Systems" },
  { icon: FiLayers, title: "Painting & Flooring", desc: "High quality painting and flooring works.", category: "Specialty" },
  { icon: FiBox, title: "Carpentry Works", desc: "Custom carpentry and wood works.", category: "Specialty" },
  { icon: FiActivity, title: "Swimming Pool Works", desc: "Design, installation and maintenance.", category: "Specialty" },
  { icon: FiZap, title: "Electrical Works", desc: "Power distribution and electrical maintenance.", category: "MEP Systems" },
  { icon: FiDroplet, title: "Plumbing & Sanitary", desc: "Reliable water and drainage systems.", category: "MEP Systems" },
  { icon: FiSettings, title: "Metal Works", desc: "Metal fabrication and structural works.", category: "Specialty" },
  { icon: FiHome, title: "Tents & Sheds", desc: "Professional installation of tents and sheds.", category: "Specialty" },
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All Services");

  const filtered =
    activeCategory === "All Services"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-16 lg:py-24 bg-brand-navy/[0.03] border-y border-line">
      <div className="container-main">
        <ScrollReveal className="text-center mb-10" y={36}>
          <span className="section-label">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-display">
            Comprehensive <span className="text-brand-blue">Facility Solutions</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-12" y={24} delay={0.1}>
          <div className="relative flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-white border border-line shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`filter-pill ${activeCategory === cat ? "filter-pill-active" : "filter-pill-idle"}`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="service-tab"
                    className="absolute inset-0 bg-brand-blue rounded-full shadow-md shadow-brand-blue/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((service) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -8 }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
                whileTap={{ scale: 0.96 }}
                className="service-card px-4 py-8 lg:px-5 lg:py-10 text-center cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto rounded-2xl border-2 border-brand-blue/20 flex items-center justify-center mb-5 group-hover:border-brand-blue group-hover:bg-brand-blue/5 transition-colors duration-300"
                >
                  <service.icon className="w-9 h-9 text-brand-blue" />
                </motion.div>
                <h3 className="font-bold text-brand-navy text-sm lg:text-base mb-2 leading-snug font-display">
                  {service.title}
                </h3>
                <p className="text-xs lg:text-sm text-steel leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
