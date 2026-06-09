"use client";

import { motion } from "framer-motion";
import { FiClock, FiCheckCircle } from "react-icons/fi";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { FiHexagon } from "react-icons/fi";

export default function StatsSection() {
  return (
    <section className="relative z-20 -mt-16 px-8 md:px-24 flex justify-center pb-24">
      <div className="w-full max-w-5xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-100 shadow-2xl mb-16"
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <FiHexagon className="w-6 h-6 text-blue-600" />
              <span className="text-4xl font-bold text-slate-900">15+</span>
            </div>
            <span className="text-sm font-medium text-slate-500">Years of Excellence</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <FiHexagon className="w-6 h-6 text-blue-600" />
              <span className="text-4xl font-bold text-slate-900">500+</span>
            </div>
            <span className="text-sm font-medium text-slate-500">Projects Completed</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <FiClock className="w-6 h-6 text-blue-600" />
              <span className="text-4xl font-bold text-slate-900">24/7</span>
            </div>
            <span className="text-sm font-medium text-slate-500">Support & Monitoring</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <FiCheckCircle className="w-6 h-6 text-blue-600" />
              <span className="text-4xl font-bold text-slate-900">100%</span>
            </div>
            <span className="text-sm font-medium text-slate-500">Client Satisfaction</span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center text-slate-400"
        >
          <span className="text-sm font-medium mb-4">Scroll to explore</span>
          <div className="w-8 h-12 rounded-full border-2 border-slate-300 flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-slate-300 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
