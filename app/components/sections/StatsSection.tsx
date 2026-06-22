"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiClock, FiCheckCircle, FiMapPin } from "react-icons/fi";
import CountUp from "../CountUp";
import ScrollReveal from "../ScrollReveal";

const stats = [
  { icon: FiBriefcase, type: "counter" as const, end: 500, suffix: "+", label: "Projects Delivered" },
  { icon: FiClock, type: "text" as const, value: "24/7", label: "Support" },
  { icon: FiCheckCircle, type: "counter" as const, end: 100, suffix: "%", label: "Commitment" },
  { icon: FiMapPin, type: "text" as const, value: "UAE", label: "Wide Coverage" },
];

export default function StatsSection() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 lg:-mt-14 px-4 sm:px-6 lg:px-8">
      <div className="container-main">
        <ScrollReveal stagger={0.12} y={32}>
          <div className="section-surface rounded-xl sm:rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y sm:divide-x lg:divide-y-0 divide-line">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 sm:gap-4 px-5 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-brand-blue/30 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-brand-blue/5 group-hover:border-brand-blue">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl sm:text-2xl font-bold text-brand-navy leading-none mb-1 font-display tabular-nums">
                    {stat.type === "counter" ? (
                      <CountUp end={stat.end} suffix={stat.suffix} />
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="text-xs sm:text-sm text-steel leading-snug">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
