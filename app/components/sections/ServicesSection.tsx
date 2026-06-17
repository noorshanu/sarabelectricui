"use client";

import { motion } from "framer-motion";
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
} from "react-icons/fi";
import { MdCleaningServices } from "react-icons/md";
import { fadeUp, staggerContainer } from "../../utils/animations";

const services = [
  { icon: FiWind, title: "HVAC Services", desc: "Installation, maintenance and repairs." },
  { icon: FiZap, title: "Electrical Works", desc: "Power distribution and electrical maintenance." },
  { icon: FiDroplet, title: "Plumbing & Sanitary", desc: "Reliable water and drainage systems." },
  { icon: MdCleaningServices, title: "Cleaning Services", desc: "Professional commercial and residential cleaning." },
  { icon: FiShield, title: "Security Services", desc: "24/7 protection and monitoring." },
  { icon: FiLayout, title: "Fitout & Interiors", desc: "Modern workspaces and renovations." },
  { icon: FiTool, title: "Building Maintenance", desc: "Preventive and corrective maintenance." },
  { icon: FiActivity, title: "Swimming Pool Works", desc: "Design, installation and maintenance." },
  { icon: FiHome, title: "Tents & Sheds", desc: "Professional installation of tents and sheds." },
  { icon: FiLayers, title: "Painting & Flooring", desc: "High quality painting and flooring works." },
  { icon: FiBox, title: "Carpentry Works", desc: "Custom carpentry and wood works." },
  { icon: FiSettings, title: "Metal Works", desc: "Metal fabrication and structural works." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="pt-8 pb-8 bg-slate-50">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <span className="section-label">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Comprehensive <span className="text-brand-blue">Facility Solutions</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group bg-white border border-slate-200 rounded-2xl px-4 py-8 lg:px-5 lg:py-10 text-center cursor-pointer shadow-sm hover:shadow-xl hover:border-brand-blue/40 hover:bg-white transition-[box-shadow,border-color,background-color] duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-16 h-16 mx-auto rounded-2xl border-2 border-brand-blue/25 flex items-center justify-center mb-5 group-hover:border-brand-blue group-hover:bg-brand-blue/5 transition-colors duration-300"
              >
                <service.icon className="w-9 h-9 text-brand-blue group-hover:scale-110 transition-transform duration-300" />
              </motion.div>

              <h3 className="font-bold text-slate-900 text-sm lg:text-base mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-xs lg:text-sm text-slate-500 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
