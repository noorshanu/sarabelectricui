"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";
import { heroSlides } from "@/lib/images";
import OptimizedImage from "../OptimizedImage";
import { fadeUp } from "../../utils/animations";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    heroSlides.slice(1).forEach((slide) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "image";
      link.href = slide.webp;
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section id="home" className="relative min-h-[93vh] flex flex-col items-start justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <OptimizedImage
              fallback={slide.fallback}
              webp={slide.webp}
              alt={slide.alt}
              fill
              priority={currentSlide === 0}
              imgClassName="object-left"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/45 via-slate-900/20 to-transparent" />
      </div>

      <div className="container-main w-full py-20 lg:py-28 pb-28 lg:pb-36">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl text-left text-white mr-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-left">
            One Partner.{" "}
            <span className="text-brand-blue">Complete</span> Facility Solutions.
          </h1>
          <p className="text-lg text-slate-200 mb-8 max-w-xl leading-relaxed text-left">
            From HVAC and electrical systems to cleaning, security, and fitout — Saryab Technicals delivers end-to-end integrated facility management across the UAE.
          </p>
          <div className="flex flex-wrap gap-4 justify-start">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FaWhatsapp className="w-4 h-4" /> Request Proposal
            </a>
            <Link href={siteConfig.nav.services} className="btn-outline-white">
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-32 lg:bottom-40 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
