"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { works, type Work } from "@/lib/works";

/* Standalone credits page for job applications — a direct link to work
   Joseph creative directed and/or produced, sectioned by discipline. */

const ROLE = "CREATIVE DIRECTION & PRODUCTION";

const sections: { n: string; label: string; items: Work[] }[] = [
  { n: "01", label: "Commercials & Fashion", items: works.filter((w) => w.category === "COMMERCIAL") },
  { n: "02", label: "Music Videos", items: works.filter((w) => w.category === "MUSIC VIDEO") },
];

function Rise({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function PortfolioPage() {
  let counter = 0;
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans px-5 md:px-10 pb-20">
      <header className="flex items-center justify-between py-5">
        <Link href="/">
          <img src="/logo.png" alt="Visionaire" className="h-8 md:h-10 w-auto object-contain hover:opacity-70 transition-opacity" />
        </Link>
        <Link href="/" className="font-mono text-[11px] tracking-widest uppercase hover:opacity-60 transition-opacity">
          <span className="opacity-40">[&nbsp;</span>visionsaire.com<span className="opacity-40">&nbsp;]</span>
        </Link>
      </header>

      {/* Title block */}
      <div className="pt-10 md:pt-16 pb-14 md:pb-20">
        <Rise>
          <div className="flex items-end justify-between border-b border-black pb-3">
            <span className="font-mono text-[11px] tracking-widest uppercase">Portfolio</span>
            <span className="font-mono text-[11px] tracking-widest uppercase text-black/40">
              [&nbsp;{works.length}&nbsp;Works&nbsp;]
            </span>
          </div>
        </Rise>
        <Rise delay={0.08}>
          <h1 className="pt-10 font-sans font-medium uppercase tracking-[-0.03em] leading-[0.9] text-5xl md:text-8xl">
            Selected
            <br />
            Work
          </h1>
        </Rise>
        <Rise delay={0.16}>
          <div className="pt-8 flex flex-col md:flex-row gap-2 md:gap-12 font-mono text-[10px] md:text-[11px] tracking-widest uppercase text-black/50">
            <span>Joseph Barnes</span>
            <span>{ROLE}</span>
            <span>Visionaire Productions — New York / LA / Miami</span>
          </div>
        </Rise>
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <section key={section.n} className="pb-20">
          <Rise>
            <div className="flex items-end justify-between border-b border-black pb-3">
              <span className="font-mono text-[11px] tracking-widest uppercase">
                [{section.n}]&nbsp;&nbsp;{section.label}
              </span>
              <span className="font-mono text-[11px] tracking-widest uppercase text-black/40">
                [&nbsp;{section.items.length}&nbsp;]
              </span>
            </div>
          </Rise>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 pt-10">
            {section.items.map((work) => {
              counter += 1;
              const num = String(counter).padStart(3, "0");
              return (
                <Rise key={work.src}>
                  <figure>
                    <div className="border border-black/25 bg-white p-2">
                      <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
                        <div className="absolute inset-0">
                          <NativeVideo src={work.src} />
                        </div>
                      </div>
                    </div>
                    <figcaption className="pt-3">
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-sans font-medium uppercase tracking-tight text-lg md:text-xl leading-none">
                          <span className="font-mono text-[10px] tracking-widest text-black/35 pr-3">{num}</span>
                          {work.title}
                        </span>
                        <span className="font-mono text-[9px] tracking-widest uppercase text-black/40 text-right whitespace-nowrap">
                          {work.client}
                        </span>
                      </div>
                      <p className="pt-1.5 font-mono text-[9px] tracking-widest uppercase text-black/40">{ROLE}</p>
                    </figcaption>
                  </figure>
                </Rise>
              );
            })}
          </div>
        </section>
      ))}

      {/* Footer / contact */}
      <footer className="border-t border-black pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="font-sans font-medium uppercase tracking-tight text-sm">Joseph Barnes — Visionaire</span>
        <div className="flex gap-8 font-mono text-[10px] tracking-widest uppercase text-black/50">
          <a href="mailto:contact@visionaire.com" className="hover:text-black transition-colors">
            Email
          </a>
          <a
            href="https://www.youtube.com/@visionaireproductions/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://instagram.com/visionsaire"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Instagram
          </a>
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase text-black/40">
          © {new Date().getFullYear()} Visionaire Productions
        </span>
      </footer>
    </main>
  );
}
