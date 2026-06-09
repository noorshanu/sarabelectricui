"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function ServicesSection() {
  return (
    <section id="ifm" className="min-h-screen py-24 px-8 md:px-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-16"
      >
        <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 block">Our Services</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Integrated Solutions.<br/>Exceptional Results.
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl">
          Comprehensive facilities management and engineering services tailored to your needs.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-8"
      >
        {[
          { title: "Integrated Facilities Management", desc: "End-to-end management of your facilities for optimal performance and reliability." },
          { title: "MEP Engineering", desc: "Expertise in Mechanical, Electrical, and Plumbing systems." },
          { title: "Fitout & Interiors", desc: "Creating functional, inspiring spaces that reflect your vision and brand." },
          { title: "Specialized Services", desc: "Advanced solutions for unique building requirements and challenges." }
        ].map((service, i) => (
          <motion.div key={i} variants={fadeUp} className="group bg-white/80 backdrop-blur-lg border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="h-64 bg-slate-200 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400">Image Placeholder</div>
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <button className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                Explore &rarr;
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
