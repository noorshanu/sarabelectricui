import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { aboutImage } from "@/lib/images";
import OptimizedImage from "../OptimizedImage";
import ScrollReveal from "../ScrollReveal";

export default function WhoWeAreSection() {
  return (
    <section id="about" className="relative pt-16 lg:pt-20 pb-20 lg:pb-28 blueprint-bg">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-blue/40 to-transparent hidden lg:block" />

      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <ScrollReveal className="lg:col-span-6" x={-40} y={0} duration={1.1}>
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-brand-blue/20 rounded-2xl pointer-events-none" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden section-surface shadow-xl">
                <OptimizedImage
                  fallback={aboutImage.fallback}
                  webp={aboutImage.webp}
                  alt={aboutImage.alt}
                  fill
                />
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-brand-navy/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white text-xs font-display tracking-widest uppercase">
                  <span>Dubai · UAE</span>
                  <span className="text-accent-warm">Est. 2009</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-6" y={40} delay={0.15}>
            <span className="section-label">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 leading-[1.1] font-display">
              Redefining <br />
              <span className="text-brand-blue">Facility Excellence.</span>
            </h2>
            <div className="w-16 h-1 bg-accent-warm mb-6" />
            <p className="text-steel leading-relaxed mb-4">
              Saryab Technicals is a leading integrated facilities management company in the UAE, delivering comprehensive technical, operational, and maintenance solutions for commercial, residential, and industrial properties.
            </p>
            <p className="text-steel leading-relaxed mb-8">
              With a skilled team of professionals and a commitment to quality, we ensure your facilities operate efficiently, safely, and sustainably — so you can focus on what matters most.
            </p>
            <Link href={siteConfig.nav.services} className="btn-primary">
              Learn More
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
