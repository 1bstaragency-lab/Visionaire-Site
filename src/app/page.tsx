"use client";

import React from "react";
import { motion } from "framer-motion";
import NativeVideo from "@/components/NativeVideo";
import { BrandLogo } from "@/components/ui/BrandLogo";

// Combined portfolio videos so they can be reordered seamlessly.
// The first video on the page (ASICS) was requested to be moved to the 5th position.
const portfolioVideos = [
  { type: "local", id: "converse", src: "/videos/converse.mp4", brand: "Converse" },
  { type: "youtube", id: "3adRUaYNmJ4", brand: "CDG x Converse" },
  { type: "youtube", id: "L-iVcooZdt8", brand: "SKIMS" },
  { type: "local", id: "asics", src: "/videos/asics.mp4", brand: "ASICS" },
  { type: "youtube", id: "QyLYTi9qkSg", brand: "adidas" },
  { type: "youtube", id: "V7eHmKc31Bg", brand: "Timberland" },
  { type: "youtube", id: "3T3Dhc5fXxc", brand: "Agent Provocateur" },
  { type: "youtube", id: "q9EzrDZkvLk", brand: "Levi's" },
  { type: "youtube", id: "f-XYpu7gYuw", title: "Scotty Apex - ESCAPE THE FATE" },
  { type: "youtube", id: "aUiCkuA4GyY", title: "Scotty Apex - partners in cryme" },
  { type: "youtube", id: "RAZwSj2puyQ", title: "Scotty Apex - ETERNAL" },
  { type: "youtube", id: "CvAo-ixDS3c", title: "Scotty Apex - SHOT IN THE DARK" },
  { type: "youtube", id: "eWJCHiBNJqE", title: "Xrarestboy - Apple Pay" },
  { type: "youtube", id: "mpk0K9XMtOM", title: "Laylow! - Trust" },
  { type: "youtube", id: "3mrZBy57Fk0", title: "Scotty Apex & Jay Versace - WHEREVER U ARE" },
  { type: "youtube", id: "ckxOuNMgCq0", title: "Scotty Apex - FADE" }
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col items-center justify-between overflow-x-hidden">
      {/* Header with Logo */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center pt-12 pb-6 md:pt-16 md:pb-8"
      >
        <motion.img 
          src="/logo.png" 
          alt="Visionaire Logo" 
          className="h-10 md:h-20 object-contain invert"
          animate={{ rotateY: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.header>

      {/* Video Grid */}
      <section className="w-full max-w-4xl px-4 md:px-8 flex-grow flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 gap-12 md:gap-16 lg:gap-24 mb-16 w-full"
        >
          {portfolioVideos.map((video, idx) => (
            <motion.div
              key={`${video.type}-${video.id}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-video w-full overflow-hidden rounded-md group bg-zinc-900 shadow-2xl ring-1 ring-white/5 flex items-center justify-center self-center"
            >
              {video.type === "local" ? (
                <NativeVideo src={video.src!} />
              ) : (
                <>
                  <div className="absolute inset-0 z-0 bg-gradient-to-tr from-zinc-800/20 to-transparent pointer-events-none" />
                  <div className="w-full h-full">
                    <NativeVideo src={`/videos/youtube/${video.id}.mp4`} />
                  </div>
                </>
              )}
              
              {/* Title / Brand Logo Overlay */}
              <div className="absolute bottom-6 left-6 z-10 pointer-events-none drop-shadow-lg opacity-90">
                {video.brand ? (
                  <BrandLogo brand={video.brand} className="text-white text-3xl md:text-5xl" />
                ) : video.title ? (
                  <h3 className="text-white text-xl md:text-2xl font-blocky tracking-[0.05em] uppercase">
                    {video.title}
                  </h3>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer with Socials */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="w-full py-16 mt-16 border-t border-white/5 flex flex-col items-center gap-6"
      >
        <div className="flex gap-8">
          <a
            href="https://instagram.com/visionsaire"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a
            href="https://www.youtube.com/@visionaireproductions/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors duration-300"
            aria-label="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>
          <a
            href="#"
            className="text-zinc-500 hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a
            href="mailto:contact@visionaire.com"
            className="text-zinc-500 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>
        <p className="text-zinc-600 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Visionaire Productions. All rights reserved.
        </p>
      </motion.footer>
    </main>
  );
}
