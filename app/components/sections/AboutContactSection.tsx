"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function AboutContactSection() {
  return (
    <section id="contact" className="py-24 px-8 md:px-24">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 block">About Us</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Engineering Excellence.<br/>Trusted Partnerships.
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Saryab Technicals is a leading integrated Facilities Management company in the UAE, delivering exceptional value since 2009.
          </p>
          <div className="flex gap-8 mb-12">
            <div>
              <span className="block text-3xl font-bold text-slate-900">15+</span>
              <span className="text-sm text-slate-500">Years Experience</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-slate-900">500+</span>
              <span className="text-sm text-slate-500">Projects Delivered</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-slate-900">300+</span>
              <span className="text-sm text-slate-500">Skilled Professionals</span>
            </div>
          </div>
          
          <div className="h-64 bg-slate-200 rounded-3xl flex items-center justify-center text-slate-400">
            Team Image Placeholder
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-3xl border border-slate-200 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-2">Let&apos;s Build a Better Tomorrow Together</h3>
          <p className="text-slate-600 mb-8">Get in touch with our experts to discuss your project or facility management needs.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white font-medium py-4 rounded-xl hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
