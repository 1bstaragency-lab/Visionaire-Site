"use client";
import { commercials } from "@/data/projects";
import CommercialCard from "@/components/cards/CommercialCard";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { motion } from "framer-motion";
import { useState } from "react";
import VideoModal from "@/components/ui/VideoModal";

export default function Commercials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="commercials" className="py-24 px-6 md:px-12 bg-ink border-b border-ink-divider relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <SectionEyebrow className="mb-4">Commercials</SectionEyebrow>
          <h2 className="text-4xl md:text-5xl font-heading text-paper tracking-tight">Campaigns</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16">
          {commercials.map((commercial, idx) => (
            <motion.div
              key={commercial.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <CommercialCard commercial={commercial} onPlay={setActiveVideo} />
            </motion.div>
          ))}
        </div>
      </div>
      
      <VideoModal 
        isOpen={!!activeVideo} 
        onClose={() => setActiveVideo(null)} 
        videoSrc={activeVideo} 
      />
    </section>
  );
}
