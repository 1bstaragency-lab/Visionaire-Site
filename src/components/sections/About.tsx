"use client";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ChromeBorder from "@/components/ui/ChromeBorder";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-ink border-b border-ink-divider relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionEyebrow className="mb-4">About</SectionEyebrow>
            <h2 className="text-4xl md:text-5xl font-heading text-paper tracking-tight mb-8">
              Crafting Visual Legacy
            </h2>
            <div className="space-y-6 text-silver-dim font-sans text-lg leading-relaxed">
              <p>
                Visionaire Productions is a Miami-based creative house dedicated to 
                high-end video production, from cinematic music videos to 
                dynamic brand commercials.
              </p>
              <p>
                We believe in the power of visual storytelling to elevate artists 
                and brands. Our approach marries high-contrast editorial aesthetics 
                with raw, undeniable energy.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ChromeBorder radius="lg" className="aspect-[4/5] w-full max-w-md mx-auto">
              <div className="w-full h-full bg-ink-raised grid place-items-center">
                 <span className="text-silver-dim/40 text-sm tracking-widest uppercase">Portrait Placeholder</span>
              </div>
            </ChromeBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
