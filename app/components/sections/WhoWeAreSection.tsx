/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { fadeUp } from "../../utils/animations";

const hotspots = [
  { label: "HVAC", top: "18%", left: "45%" },
  { label: "Electrical", top: "35%", left: "62%" },
  { label: "Plumbing", top: "55%", left: "38%" },
  { label: "Security", top: "42%", left: "22%" },
  { label: "Cleaning", top: "68%", left: "55%" },
  { label: "Maintenance", top: "75%", left: "30%" },
];

export default function WhoWeAreSection() {
  return (
    <section id="about" className="pt-16 lg:pt-20 pb-20 lg:pb-28 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 border border-slate-200"
          >
         <img src="/images/about2.png" alt="About Us" className="w-full h-full object-cover" />

          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-label font-bold">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Redefining <br /> <span className="text-brand-blue">Facility Excellence.</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Saryab Technicals is a leading integrated facilities management company in the UAE, delivering comprehensive technical, operational, and maintenance solutions for commercial, residential, and industrial properties.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              With a skilled team of professionals and a commitment to quality, we ensure your facilities operate efficiently, safely, and sustainably — so you can focus on what matters most.
            </p>
            <Link href="#about" className="btn-primary">
              Learn More About Us <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
