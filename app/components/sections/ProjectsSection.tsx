"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ScrollReveal from "../ScrollReveal";

const filters = ["All Projects", "Fitout", "HVAC", "Cleaning", "Security", "Pool", "Maintenance"];

const projects = [
  { title: "Office Fitout Project", location: "Dubai, UAE", category: "Fitout", image: "/images/projects/office.png" },
  { title: "Commercial HVAC Upgrade", location: "Abu Dhabi, UAE", category: "HVAC", image: "/images/projects/hvac.png" },
  { title: "Hotel Cleaning Contract", location: "Sharjah, UAE", category: "Cleaning", image: "/images/projects/cleaning.png" },
  { title: "Security System Installation", location: "Dubai, UAE", category: "Security", image: "/images/projects/security.png" },
  { title: "Pool Maintenance Program", location: "Ajman, UAE", category: "Pool", image: "/images/projects/swimming-pool.png" },
  { title: "Building Maintenance Contract", location: "Dubai, UAE", category: "Maintenance", image: "/images/projects/maintance.png" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [scrollIndex, setScrollIndex] = useState(0);

  const filtered =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const visibleCount = 3;
  const maxIndex = Math.max(0, filtered.length - visibleCount);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-10" y={36}>
          <span className="section-label">Our Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy font-display">
            Our Work Speaks <span className="text-brand-blue">For Itself</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-10" y={24} delay={0.08}>
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full border border-line bg-slate-50">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                type="button"
                whileTap={{ scale: 0.94 }}
                onClick={() => {
                  setActiveFilter(filter);
                  setScrollIndex(0);
                }}
                className={`filter-pill ${activeFilter === filter ? "filter-pill-active" : "filter-pill-idle"}`}
              >
                {activeFilter === filter && (
                  <motion.span
                    layoutId="project-tab"
                    className="absolute inset-0 bg-brand-blue rounded-full"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setScrollIndex((i) => Math.max(0, i - 1))}
            disabled={scrollIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center disabled:opacity-30 shadow-lg"
          >
            <FiArrowLeft />
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${scrollIndex}`}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-3 gap-6"
            >
              {filtered.slice(scrollIndex, scrollIndex + visibleCount).map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="section-surface rounded-xl overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-500" />
                  </div>
                  <div className="p-5 border-t border-line">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-blue mb-1 font-display">{project.category}</p>
                    <h3 className="font-bold text-brand-navy mb-1 font-display">{project.title}</h3>
                    <p className="text-sm text-steel">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setScrollIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={scrollIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center disabled:opacity-30 shadow-lg"
          >
            <FiArrowRight />
          </motion.button>
        </div>

        <div className="text-center mt-10">
          <Link href="#projects" className="inline-flex items-center gap-2 text-brand-blue font-semibold font-display hover:gap-3 transition-all">
            View All Projects <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
