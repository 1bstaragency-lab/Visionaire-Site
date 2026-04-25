"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ChromeText from "@/components/ui/ChromeText";

export default function ShowreelHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="reel" className="relative h-[100svh] w-full bg-ink overflow-hidden border-b border-ink-divider">
      <motion.div 
        style={shouldReduceMotion ? {} : { y, opacity }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/commercials/asics/asics-slide-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <ChromeText as="h1" className="text-6xl md:text-[9vw] font-heading font-extrabold tracking-tighter leading-[0.9]">
            Visionaire
          </ChromeText>
          <p className="mt-6 text-silver-muted font-sans font-semibold tracking-[0.3em] uppercase text-xs md:text-sm">
            Miami &nbsp;&bull;&nbsp; Productions
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-16 bg-silver-dim/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 64] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-paper"
          />
        </div>
      </motion.div>
    </section>
  );
}
