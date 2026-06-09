"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-24 px-8 md:px-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-16"
      >
        <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 block">Our Projects</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Building Success Stories<br/>Across UAE
        </h2>
        <div className="flex gap-4 mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">All Projects</button>
          <button className="bg-slate-100 text-slate-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-200">Commercial</button>
          <button className="bg-slate-100 text-slate-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-200">Residential</button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl"
      >
        <div className="h-[60vh] bg-slate-200 relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xl">Project Image Placeholder</div>
          <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl max-w-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">The Exchange Tower, Dubai</h3>
            <p className="text-slate-600 mb-4">Complete MEP & Fitout Works</p>
            <button className="text-blue-600 font-medium flex items-center gap-2">
              View Case Study &rarr;
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
