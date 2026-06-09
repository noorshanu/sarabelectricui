"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";
import { fadeUp } from "../../utils/animations";

export default function HeroSection() {
  return (
    <section id="overview" className="relative min-h-[90vh] flex flex-col justify-center px-8 md:px-24 pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/images/herobg.png" 
          alt="Hero Background" 
          fill 
          className="object-cover opacity-90"
          priority
        />
      </div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
          Complete Control.<br/>
          <span className="text-blue-600">Total Performance.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-xl">
          Integrated Facilities Management for modern buildings. From infrastructure to interiors — we manage everything.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
            Request Proposal &rarr;
          </button>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-medium border border-slate-200 hover:border-slate-300 transition-colors flex items-center gap-2">
            Explore Systems <FiSettings className="animate-spin-slow" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
