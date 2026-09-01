"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";
import { works } from "@/lib/works";

const STEP = 360 / works.length;

export default function ShowcasePage() {
  // Camera look-around: rotY pans the room, rotX pitches within limits.
  const rotY = useMotionValue(0);
  const rotX = useMotionValue(0);
  const springY = useSpring(rotY, { stiffness: 55, damping: 16 });
  const springX = useSpring(rotX, { stiffness: 55, damping: 16 });
  const dragging = useRef(false);
  const lastPointer = useRef<{ x: number; y: number } | null>(null);
  const [panel, setPanel] = useState({ w: 480, h: 270, r: 1200 });
  const [entered, setEntered] = useState(false);

  // Panels sized to the viewport; radius keeps the cylinder seamless.
  useEffect(() => {
    const fit = () => {
      const w = Math.min(500, Math.max(280, window.innerWidth * 0.5));
      setPanel({ w, h: (w * 9) / 16, r: Math.round((w / 2 / Math.tan(Math.PI / works.length)) * 1.18) });
    };
    fit();
    window.addEventListener("resize", fit);
    const t = setTimeout(() => setEntered(true), 300);
    return () => {
      window.removeEventListener("resize", fit);
      clearTimeout(t);
    };
  }, []);

  // Slow auto-pan while the visitor isn't dragging.
  useAnimationFrame((_, delta) => {
    if (!dragging.current) rotY.set(rotY.get() - delta * 0.0025);
  });

  return (
    <main
      className="fixed inset-0 bg-black text-white selection:bg-white selection:text-black overflow-hidden cursor-grab active:cursor-grabbing select-none touch-none"
      onPointerDown={(e) => {
        dragging.current = true;
        lastPointer.current = { x: e.clientX, y: e.clientY };
        (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!dragging.current || !lastPointer.current) return;
        rotY.set(rotY.get() + (e.clientX - lastPointer.current.x) * 0.22);
        rotX.set(Math.max(-16, Math.min(16, rotX.get() - (e.clientY - lastPointer.current.y) * 0.1)));
        lastPointer.current = { x: e.clientX, y: e.clientY };
      }}
      onPointerUp={() => {
        dragging.current = false;
        lastPointer.current = null;
      }}
      onPointerCancel={() => {
        dragging.current = false;
        lastPointer.current = null;
      }}
    >
      {/* The room */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{ z: 1000, rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        >
          {works.map((work, i) => (
            <div
              key={work.src}
              className="absolute"
              style={{
                width: panel.w,
                left: -panel.w / 2,
                top: -panel.h / 2,
                transform: `rotateY(${i * STEP}deg) translateZ(-${panel.r}px)`,
              }}
            >
              <div className="bg-zinc-950 overflow-hidden" style={{ width: panel.w, height: panel.h }}>
                <video
                  src={work.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                />
              </div>
              <div className="flex justify-between pt-2">
                <span className="font-mono text-[9px] tracking-widest uppercase text-white/50">
                  {String(i + 1).padStart(3, "0")} — {work.title}
                </span>
                <span className="font-mono text-[9px] tracking-widest uppercase text-white/30">{work.client}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)]" />

      {/* UI overlay */}
      <header className="absolute top-0 inset-x-0 flex items-center justify-between px-5 md:px-10 py-5 z-10">
        <Link href="/" onPointerDown={(e) => e.stopPropagation()}>
          <img src="/logo.png" alt="Visionaire" className="h-8 md:h-10 w-auto object-contain invert hover:opacity-70 transition-opacity" />
        </Link>
        <span className="font-mono text-[11px] tracking-widest uppercase text-white/60">
          Showcase — {works.length} Works
        </span>
        <Link
          href="/"
          onPointerDown={(e) => e.stopPropagation()}
          className="font-mono text-[11px] tracking-widest uppercase hover:opacity-60 transition-opacity"
        >
          <span className="opacity-40">[&nbsp;</span>← Back<span className="opacity-40">&nbsp;]</span>
        </Link>
      </header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 inset-x-0 flex justify-center pointer-events-none z-10"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase text-white/50">
          [&nbsp;Drag to Look Around&nbsp;]
        </span>
      </motion.div>
    </main>
  );
}
