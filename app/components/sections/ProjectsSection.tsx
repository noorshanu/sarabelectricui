"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { fadeUp } from "../../utils/animations";

const filters = ["All Projects", "Fitout", "HVAC", "Cleaning", "Security", "Pool", "Maintenance"];

const projects = [
  { title: "Office Fitout Project", location: "Dubai, UAE", category: "Fitout" },
  { title: "Commercial HVAC Upgrade", location: "Abu Dhabi, UAE", category: "HVAC" },
  { title: "Hotel Cleaning Contract", location: "Sharjah, UAE", category: "Cleaning" },
  { title: "Security System Installation", location: "Dubai, UAE", category: "Security" },
  { title: "Pool Maintenance Program", location: "Ajman, UAE", category: "Pool" },
  { title: "Building Maintenance Contract", location: "Dubai, UAE", category: "Maintenance" },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [scrollIndex, setScrollIndex] = useState(0);

  const filtered = activeFilter === "All Projects"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const visibleCount = 3;
  const maxIndex = Math.max(0, filtered.length - visibleCount);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="container-main">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <span className="section-label">Our Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Our Work Speaks <span className="text-brand-blue">For Itself</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setScrollIndex(0); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-brand-blue text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="relative">
          <button
            onClick={() => setScrollIndex((i) => Math.max(0, i - 1))}
            disabled={scrollIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center disabled:opacity-30 hover:bg-blue-700 transition-colors shadow-lg"
          >
            <FiArrowLeft />
          </button>

          <div className="grid md:grid-cols-3 gap-6">
            {filtered.slice(scrollIndex, scrollIndex + visibleCount).map((project) => (
              <div
                key={project.title}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] bg-slate-200 flex items-center justify-center text-slate-400 text-sm">
                  Project Image Placeholder
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-slate-500">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setScrollIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={scrollIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center disabled:opacity-30 hover:bg-blue-700 transition-colors shadow-lg"
          >
            <FiArrowRight />
          </button>
        </div>

        <div className="text-center mt-10">
          <Link href="#projects" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all">
            View All Projects <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
