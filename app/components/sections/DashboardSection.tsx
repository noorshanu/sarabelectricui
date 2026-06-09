"use client";

import { motion } from "framer-motion";
import { FiActivity, FiSettings, FiShield, FiHexagon } from "react-icons/fi";
import { fadeUp } from "../../utils/animations";

export default function DashboardSection() {
  return (
    <section className="min-h-screen py-24 px-8 md:px-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/20" />
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center h-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4 block">Integrated Facilities Management</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Smarter Management.<br/>Better Performance.
          </h2>
          <p className="text-lg text-slate-300 mb-12">
            Our IFM approach ensures every aspect of your facility is monitored, maintained, and optimized for excellence.
          </p>
          
          <div className="space-y-8">
            {[
              { icon: FiActivity, title: "24/7 Monitoring", desc: "Real-time monitoring and rapid response to critical events." },
              { icon: FiSettings, title: "Preventive Maintenance", desc: "Scheduled maintenance to prevent breakdowns and reduce downtime." },
              { icon: FiShield, title: "Compliance & Safety", desc: "Ensure regulatory compliance and maintain a safe environment." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white rounded-3xl p-2 shadow-2xl shadow-blue-900/50 border border-slate-700">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 h-[600px] flex flex-col">
              <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <FiHexagon className="text-blue-600 w-6 h-6" />
                  <span className="font-bold text-slate-900">IFM Dashboard</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center text-slate-400 bg-white rounded-xl border border-slate-100 shadow-sm">
                Dashboard UI Placeholder
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
