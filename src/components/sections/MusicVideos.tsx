"use client";
import { musicVideos } from "@/data/projects";
import MusicVideoCard from "@/components/cards/MusicVideoCard";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { motion } from "framer-motion";

export default function MusicVideos() {
  return (
    <section id="music-videos" className="py-24 px-6 md:px-12 bg-ink border-b border-ink-divider relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <SectionEyebrow className="mb-4">Music Videos</SectionEyebrow>
          <h2 className="text-4xl md:text-5xl font-heading text-paper tracking-tight">Directed by Jay Vision</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16">
          {musicVideos.map((video, idx) => (
            <motion.div
              key={video.youtubeId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <MusicVideoCard video={video} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
