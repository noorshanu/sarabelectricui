"use client";

import { motion } from "framer-motion";
import { FiCpu, FiActivity, FiSmartphone, FiBarChart2 } from "react-icons/fi";
import { fadeUp } from "../../utils/animations";

export default function TechnologySection() {
  return (
    <section className="py-24 px-8 md:px-24 bg-slate-50">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 block">Our Technology</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Smart Technology.<br/>Smarter Buildings.
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Leveraging advanced technology and digital platforms to deliver intelligent, efficient, and sustainable building solutions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: FiCpu, title: "IoT Integration", desc: "Connected systems for real-time data." },
              { icon: FiActivity, title: "AI-Powered Analytics", desc: "Predict issues and optimize performance." },
              { icon: FiSmartphone, title: "Mobile Access", desc: "Manage your facility from anywhere." },
              { icon: FiBarChart2, title: "Smart Reporting", desc: "Data-driven insights and compliance." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-[600px] bg-white rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center text-slate-400"
        >
          App Interface Placeholder
        </motion.div>
      </div>
    </section>
  );
}
