"use client";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ShortFormCard from "@/components/cards/ShortFormCard";
import { motion } from "framer-motion";

export default function ShortForm() {
  const gapVideos = [
    "/videos/commercials/gap/gap-slide-2.mp4",
    "/videos/commercials/gap/gap-slide-3.mp4",
    "/videos/commercials/gap/gap-slide-4.mp4",
    "/videos/commercials/converse/converse-slide-2.mp4", 
  ];

  return (
    <section id="short-form" className="py-24 px-6 md:px-12 bg-ink border-b border-ink-divider relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
           className="mb-12 md:mb-16 flex flex-col items-center text-center"
        >
          <SectionEyebrow className="mb-4">Short Form</SectionEyebrow>
          <h2 className="text-4xl md:text-5xl font-heading text-paper tracking-tight">The Feed</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {gapVideos.map((src, idx) => (
             <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
             >
               <ShortFormCard src={src} />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
