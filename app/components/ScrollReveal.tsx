"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  scrub?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  y = 48,
  x = 0,
  delay = 0,
  duration = 1,
  stagger = 0,
  scrub = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const targets = stagger > 0 ? ref.current?.children : ref.current;
      if (!targets) return;

      gsap.from(targets, {
        opacity: 0,
        y,
        x,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: scrub ? "play none none reverse" : "play none none none",
          scrub: scrub || false,
        },
      });
    },
    { scope: ref, dependencies: [y, x, delay, duration, stagger, scrub] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
