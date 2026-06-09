"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
import Image from "next/image";

export default function ApproachSection() {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-24 py-24 bg-slate-50/50 backdrop-blur-sm">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 block">Our Approach</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            One Partner.<br/>Complete Building Lifecycle.
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Saryab Technicals delivers end-to-end integrated facilities management solutions that ensure efficiency, safety, comfort, and long-term value.
          </p>
          <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-4 transition-all">
            Learn More &rarr;
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-[500px] w-full bg-white rounded-[3rem] shadow-2xl border border-slate-100 flex items-center justify-center overflow-hidden"
        >
          {/* Placeholder for circular diagram */}
          <div className="absolute inset-0 border-[40px] border-slate-50 rounded-full m-12"></div>
          <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold text-blue-600">Operate</div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold text-blue-600">Maintain</div>
          <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold text-blue-600">Build</div>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-full shadow-md text-sm font-semibold text-blue-600">Optimize</div>
          
          <div className="w-48 h-48 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
   <Image src="/images/about.png" alt="Building" width={192} height={192} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
