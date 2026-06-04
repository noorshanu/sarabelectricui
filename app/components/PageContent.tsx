"use client";

import { motion, Variants } from "framer-motion";
import { FiCheckCircle, FiClock, FiSettings, FiShield, FiActivity, FiCpu, FiSmartphone, FiBarChart2, FiHexagon } from "react-icons/fi";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function PageContent() {
  return (
    <div id="main-scroll-container" className="relative z-10 w-full">
      
      {/* 1. Hero Section */}
      <section id="overview" className="min-h-screen flex flex-col justify-center px-8 md:px-24 pt-24">
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

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl bg-white/60 backdrop-blur-xl p-8 rounded-3xl border border-slate-100 shadow-xl"
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-slate-900 mb-2">15+</span>
            <span className="text-sm text-slate-500">Years of Excellence</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold text-slate-900 mb-2">500+</span>
            <span className="text-sm text-slate-500">Projects Completed</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <FiClock className="w-6 h-6 text-blue-600" />
              <span className="text-3xl font-bold text-slate-900">24/7</span>
            </div>
            <span className="text-sm text-slate-500">Support & Monitoring</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <FiCheckCircle className="w-6 h-6 text-blue-600" />
              <span className="text-3xl font-bold text-slate-900">100%</span>
            </div>
            <span className="text-sm text-slate-500">Client Satisfaction</span>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Approach Section */}
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
              Building Image
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-12 border-y border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by Leading Brands</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
            <span className="text-xl font-bold">EMAAR</span>
            <span className="text-xl font-bold">DAMAC</span>
            <span className="text-xl font-bold">ALDAR</span>
            <span className="text-xl font-bold">NAKHEEL</span>
            <span className="text-xl font-bold">MERAAS</span>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
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

      {/* 4. Dashboard Section */}
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

      {/* 5. Projects Section */}
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

      {/* 6. Technology Section */}
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

      {/* 7. About & Contact Section */}
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

    </div>
  );
}
