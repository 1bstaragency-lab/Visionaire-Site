"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    id: "brand",
    n: "01",
    title: "Brand Owner",
    tag: "COMMERCIALS",
    description: "Commercials, campaigns, and brand identity visuals.",
  },
  {
    id: "artist",
    n: "02",
    title: "Music Artist",
    tag: "MUSIC VIDEOS",
    description: "Music videos, performance visuals, and artist branding.",
  },
  {
    id: "narrative",
    n: "03",
    title: "Narrative / Short Film",
    tag: "CINEMA",
    description: "Long-form content, documentaries, and cinematic storytelling.",
  },
  {
    id: "personal",
    n: "04",
    title: "Personal Project",
    tag: "EVENTS",
    description: "Events, milestones, and custom personal visuals.",
  },
];

export default function CategorySelection() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="pt-10 md:pt-16 pb-12 md:pb-20"
      >
        <div className="flex items-end justify-between border-b border-black pb-3">
          <span className="font-mono text-[11px] tracking-widest uppercase">Connect</span>
          <span className="font-mono text-[11px] tracking-widest uppercase text-black/40">
            [&nbsp;Select Your Project Type&nbsp;]
          </span>
        </div>
        <h1 className="pt-10 font-sans font-medium uppercase tracking-[-0.03em] leading-[0.9] text-5xl md:text-8xl">
          Work
          <br />
          With Us
        </h1>
      </motion.div>

      {/* Category index */}
      <div>
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/connect/${category.id}`}
              className="group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[5rem_1fr_12rem_4rem] items-baseline gap-3 py-6 md:py-8 border-b border-black/15"
            >
              <span className="font-mono text-[11px] tracking-widest text-black/35 group-hover:text-black transition-colors">
                [{category.n}]
              </span>
              <span>
                <span className="block font-sans font-medium uppercase tracking-tight text-2xl md:text-5xl leading-none group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-300">
                  {category.title}
                </span>
                <span className="block pt-2 text-sm text-black/40 group-hover:text-black/70 transition-colors">
                  {category.description}
                </span>
              </span>
              <span className="hidden md:block font-mono text-[10px] tracking-widest text-black/40 uppercase text-right">
                {category.tag}
              </span>
              <span className="font-mono text-sm text-black/35 text-right group-hover:text-black group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
