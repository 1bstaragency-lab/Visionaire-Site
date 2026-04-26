"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    id: "brand",
    title: "Brand Owner",
    description: "Commercials, campaigns, and brand identity visuals.",
    color: "#FFD700",
    gradient: "from-[#FFD700]/20 to-transparent",
  },
  {
    id: "artist",
    title: "Music Artist",
    description: "Music videos, performance visuals, and artist branding.",
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    id: "narrative",
    title: "Narrative / Short Film",
    description: "Long-form content, documentaries, and cinematic storytelling.",
    color: "#a855f7",
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    id: "personal",
    title: "Personal Project",
    description: "Events, milestones, and custom personal visuals.",
    color: "#10b981",
    gradient: "from-emerald-500/20 to-transparent",
  }
];

export default function CategorySelection() {
  return (
    <>
      {/* Moving Background visual elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0], 
            y: [0, -50, 50, 0] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zinc-800/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 50, 0], 
            y: [0, 50, -50, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/5 rounded-full blur-[100px]" 
        />
      </div>

      <div className="w-full max-w-4xl mt-4 md:mt-8 z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center mb-8 md:mb-12 gap-2 md:gap-4 relative z-10"
        >
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="Visionaire Logo" 
              className="h-16 md:h-28 object-contain invert hover:opacity-80 transition-opacity"
            />
          </Link>
          <p className="text-zinc-500 text-[10px] md:text-xs tracking-widest uppercase">* Select Your Project Type *</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto relative z-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={`/connect/${category.id}`}
                className="group relative overflow-hidden bg-zinc-950 rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 block h-full"
              >
                {/* Moving highlighted border effect (Conic Gradient) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <motion.div 
                    className="absolute -inset-[100%] opacity-30"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0 300deg, ${category.color} 360deg)`
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Inner background to mask the spinning gradient, leaving a 1px border */}
                <div className="absolute inset-[1px] bg-zinc-950 rounded-xl z-0 transition-colors duration-500 group-hover:bg-zinc-900/80" />
                
                {/* Subtle hover gradient inside */}
                <div className={`absolute inset-[1px] bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-40 rounded-xl transition-opacity duration-500 z-0`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-light tracking-widest uppercase text-white">{category.title}</h3>
                  <p className="text-zinc-400 text-sm">{category.description}</p>
                  
                  <div className="mt-4 flex items-center text-xs tracking-[0.2em] uppercase font-bold text-white/50 group-hover:text-white transition-colors duration-300">
                    Select <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
