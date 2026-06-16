/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHexagon } from "react-icons/fi";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200/50"
    >
      <Link href="/" className="flex items-center gap-2 text-blue-600">
<img src="/images/logo.webp" alt="logo" className="w-20 h-20 object-contain" />
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <Link href="#overview" className="hover:text-blue-600 transition-colors">Overview</Link>
        <Link href="#ifm" className="hover:text-blue-600 transition-colors">IFM</Link>
        <Link href="#engineering" className="hover:text-blue-600 transition-colors">Engineering</Link>
        <Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
        <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
      </div>

      <Link href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
        Request Proposal &rarr;
      </Link>
    </motion.nav>
  );
}
