"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import NativeVideo from "@/components/NativeVideo";

/* ————————————————————————————————————————————————
   DATA
———————————————————————————————————————————————— */

type Work = {
  title: string;
  src: string;
  category: "COMMERCIAL" | "MUSIC VIDEO";
  client: string;
};

const works: Work[] = [
  { title: "CONVERSE", src: "/videos/converse.mp4", category: "COMMERCIAL", client: "CONVERSE" },
  { title: "CDG × CONVERSE", src: "/videos/youtube/3adRUaYNmJ4.mp4", category: "COMMERCIAL", client: "COMME DES GARÇONS" },
  { title: "SKIMS", src: "/videos/youtube/L-iVcooZdt8.mp4", category: "COMMERCIAL", client: "SKIMS" },
  { title: "ASICS", src: "/videos/asics.mp4", category: "COMMERCIAL", client: "ASICS" },
  { title: "ADIDAS", src: "/videos/youtube/QyLYTi9qkSg.mp4", category: "COMMERCIAL", client: "ADIDAS" },
  { title: "TIMBERLAND", src: "/videos/youtube/V7eHmKc31Bg.mp4", category: "COMMERCIAL", client: "TIMBERLAND" },
  { title: "AGENT PROVOCATEUR", src: "/videos/youtube/3T3Dhc5fXxc.mp4", category: "COMMERCIAL", client: "AGENT PROVOCATEUR" },
  { title: "LEVI'S", src: "/videos/youtube/q9EzrDZkvLk.mp4", category: "COMMERCIAL", client: "LEVI'S" },
  { title: "ESCAPE THE FATE", src: "/videos/youtube/f-XYpu7gYuw.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX" },
  { title: "PARTNERS IN CRYME", src: "/videos/youtube/aUiCkuA4GyY.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX" },
  { title: "ETERNAL", src: "/videos/youtube/RAZwSj2puyQ.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX" },
  { title: "SHOT IN THE DARK", src: "/videos/youtube/CvAo-ixDS3c.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX" },
  { title: "APPLE PAY", src: "/videos/youtube/eWJCHiBNJqE.mp4", category: "MUSIC VIDEO", client: "XRARESTBOY" },
  { title: "TRUST", src: "/videos/youtube/mpk0K9XMtOM.mp4", category: "MUSIC VIDEO", client: "LAYLOW!" },
  { title: "WHEREVER U ARE", src: "/videos/youtube/3mrZBy57Fk0.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX & JAY VERSACE" },
  { title: "FADE", src: "/videos/youtube/ckxOuNMgCq0.mp4", category: "MUSIC VIDEO", client: "SCOTTY APEX" },
];

const services = [
  { n: "01", name: "MUSIC VIDEOS", sub: "CONCEPT TO FINAL CUT" },
  { n: "02", name: "COMMERCIALS", sub: "BRAND FILMS" },
  { n: "03", name: "CREATIVE DIRECTION", sub: "VISUAL SYSTEM" },
  { n: "04", name: "SHORT FORM", sub: "SOCIAL CONTENT" },
];

const stats = [
  { n: "01", value: 10, suffix: "+", label: "CLIENT COLLABORATIONS" },
  { n: "02", value: 5, suffix: "+", label: "YEARS IN PRACTICE" },
  { n: "03", value: 25, suffix: "+", label: "DELIVERED WORKS" },
  { n: "04", value: 100, suffix: "%", label: "END-TO-END DELIVERY" },
];

const faqs = [
  {
    n: "01",
    q: "WHAT SERVICES DO YOU OFFER?",
    tag: "SERVICES",
    a: "Full-scale video production — music videos, commercials, brand films, and short-form social content. From concept and creative direction through shooting, editing, color, and delivery.",
  },
  {
    n: "02",
    q: "WHAT IS YOUR TYPICAL TURNAROUND TIME?",
    tag: "TIMELINE",
    a: "Most projects deliver within 2–4 weeks from the shoot date, depending on scope. Rush deliveries are available for campaigns on a deadline.",
  },
  {
    n: "03",
    q: "WHERE ARE YOU BASED? DO YOU TRAVEL?",
    tag: "LOCATION",
    a: "We're based in Miami, FL, and travel worldwide for productions. Travel costs are scoped into the project quote up front.",
  },
  {
    n: "04",
    q: "CAN YOU HANDLE BOTH CREATIVE AND PRODUCTION?",
    tag: "WORKFLOW",
    a: "Yes — that's the point. One team owns the idea and the execution, so nothing gets lost between the treatment and the final cut.",
  },
  {
    n: "05",
    q: "WHO HAVE YOU WORKED WITH?",
    tag: "CLIENTS",
    a: "Converse, Comme des Garçons, SKIMS, ASICS, adidas, Timberland, Agent Provocateur, Levi's, and GAP — alongside recording artists including Scotty Apex, Laylow!, and Xrarestboy.",
  },
  {
    n: "06",
    q: "WHAT DOES YOUR PROCESS LOOK LIKE?",
    tag: "PROCESS",
    a: "Conversation → treatment → pre-production → shoot → post → delivery. You see the work at every stage, and revisions are built into the schedule.",
  },
];

/* ————————————————————————————————————————————————
   PRIMITIVES
———————————————————————————————————————————————— */

// Mono label wrapped in editorial brackets: [ LABEL ]
function Bracketed({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-[11px] tracking-widest uppercase ${className}`}>
      <span className="opacity-40">[&nbsp;</span>
      {children}
      <span className="opacity-40">&nbsp;]</span>
    </span>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ label, count }: { label: string; count?: string }) {
  return (
    <div className="flex items-end justify-between border-b border-black pb-3">
      <span className="font-mono text-[11px] tracking-widest uppercase">{label}</span>
      {count && <Bracketed>{count}</Bracketed>}
    </div>
  );
}

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

/* Spinning 3D fan of work previews — mirrors the reference hero.
   Small radius keeps the cards overlapping like a fanned deck. */
const fanCards = [
  { src: "/videos/converse.mp4", w: 240, h: 144 },
  { src: "/videos/youtube/aUiCkuA4GyY.mp4", w: 240, h: 144 },
  { src: "/videos/youtube/3T3Dhc5fXxc.mp4", w: 240, h: 144 },
  { src: "/videos/youtube/V7eHmKc31Bg.mp4", w: 240, h: 144 },
  { src: "/videos/youtube/3adRUaYNmJ4.mp4", w: 240, h: 144 },
  { src: "/videos/youtube/L-iVcooZdt8.mp4", w: 240, h: 144 },
  { src: "/videos/asics.mp4", w: 240, h: 144 },
  { src: "/videos/youtube/QyLYTi9qkSg.mp4", w: 240, h: 144 },
];

function HeroFan() {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.9);

  // Grab-to-rotate: drag offsets applied on top of the ambient spin.
  const dragRX = useMotionValue(0);
  const dragRY = useMotionValue(0);
  const springRX = useSpring(dragRX, { stiffness: 60, damping: 14 });
  const springRY = useSpring(dragRY, { stiffness: 60, damping: 14 });
  const lastPointer = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const vids = el.querySelectorAll("video");
    const obs = new IntersectionObserver(
      ([entry]) => {
        vids.forEach((v) => {
          if (entry.isIntersecting) v.play().catch(() => {});
          else v.pause();
        });
      },
      { threshold: 0.05 }
    );
    obs.observe(el);

    // Fit the fan to whatever free space the hero leaves it — never overlap the type.
    const fit = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const desktop = window.innerWidth >= 768;
      const fitScale = desktop
        ? Math.min(height / 330, width / 500)
        : Math.min(height / 460, width / 680);
      setScale(Math.min(Math.max(fitScale, 0.35), desktop ? 2 : 1.35));
    });
    fit.observe(el);

    return () => {
      obs.disconnect();
      fit.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-0 flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-none"
      onPointerDown={(e) => {
        lastPointer.current = { x: e.clientX, y: e.clientY };
        (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (!lastPointer.current) return;
        dragRY.set(dragRY.get() + (e.clientX - lastPointer.current.x) * 0.4);
        dragRX.set(dragRX.get() - (e.clientY - lastPointer.current.y) * 0.4);
        lastPointer.current = { x: e.clientX, y: e.clientY };
      }}
      onPointerUp={() => (lastPointer.current = null)}
      onPointerCancel={() => (lastPointer.current = null)}
    >
      <div className="relative" style={{ perspective: "1400px", transform: `scale(${scale})` }}>
        <motion.div style={{ rotateX: springRX, rotateY: springRY, transformStyle: "preserve-3d" }}>
        <div style={{ transform: "rotateX(-14deg)", transformStyle: "preserve-3d" }}>
          {/* Signature mark at the hub — a 3D asset inside the scene: the glyph is
              extruded from stacked Z-layers so it has real thickness, spins like a
              coin, and tilts with the wheel when dragged. */}
          <motion.div
            aria-hidden
            className="absolute left-0 top-0 pointer-events-none select-none"
            style={{ x: "-50%", y: "calc(-50% - 130px)", transformStyle: "preserve-3d" }}
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <span
                key={i}
                className="block text-5xl md:text-6xl leading-none"
                style={{
                  position: i === 0 ? "relative" : "absolute",
                  inset: 0,
                  transform: `translateZ(${(i - 12) * 0.7}px)`,
                }}
              >
                👁️‍🗨️
              </span>
            ))}
          </motion.div>
          <motion.div
            className="relative"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateY: 360,
              rotateX: [0, 12, 0, -12, 0],
              rotateZ: [0, -8, 0, 8, 0],
            }}
            transition={{
              rotateY: { repeat: Infinity, duration: 26, ease: "linear" },
              rotateX: { repeat: Infinity, duration: 15, ease: "easeInOut" },
              rotateZ: { repeat: Infinity, duration: 21, ease: "easeInOut" },
            }}
          >
            {fanCards.map((c, i) => (
              // Each work gets its own blade: rotated around the shared center,
              // then pushed outward along its own plane — evenly spaced, all parallel.
              <div
                key={c.src}
                className="absolute bg-black shadow-2xl overflow-hidden"
                style={{
                  width: c.w,
                  height: c.h,
                  left: -c.w / 2,
                  top: -c.h / 2,
                  transform: `rotateY(${i * (360 / fanCards.length)}deg) translateX(${c.w * 0.62}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <video src={c.src} className="w-full h-full object-cover" muted loop playsInline autoPlay preload="metadata" />
              </div>
            ))}
          </motion.div>
        </div>
        </motion.div>
      </div>
    </div>
  );
}

/* Site soundtrack: tries to autoplay; if the browser blocks it, starts on the
   visitor's first interaction. Hides itself entirely if no track file exists. */
function Soundtrack() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;

    const tryPlay = () => audio.play().then(() => setPlaying(true)).catch(() => {});
    tryPlay();

    // Autoplay blocked → arm one-time first-interaction starters.
    const start = () => {
      if (audio.paused && !audio.dataset.userPaused) tryPlay();
      cleanup();
    };
    const cleanup = () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
      window.removeEventListener("scroll", start);
    };
    window.addEventListener("pointerdown", start);
    window.addEventListener("keydown", start);
    window.addEventListener("scroll", start, { passive: true });
    return cleanup;
  }, []);

  if (!available) return null;

  return (
    <>
      <audio ref={audioRef} src="/audio/theme.mp3" loop preload="auto" onError={() => setAvailable(false)} />
      <button
        onClick={() => {
          const audio = audioRef.current;
          if (!audio) return;
          if (audio.paused) {
            delete audio.dataset.userPaused;
            audio.play().then(() => setPlaying(true)).catch(() => {});
          } else {
            audio.dataset.userPaused = "1";
            audio.pause();
            setPlaying(false);
          }
        }}
        className="fixed bottom-5 right-5 md:bottom-8 md:right-10 z-50 mix-blend-difference text-white cursor-pointer"
        aria-label={playing ? "Turn sound off" : "Turn sound on"}
      >
        <Bracketed className="hover:opacity-60 transition-opacity">
          Sound {playing ? "On" : "Off"}
        </Bracketed>
      </button>
    </>
  );
}

function MiamiClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="text-right font-mono text-[10px] tracking-widest uppercase leading-relaxed">
      <p className="tabular-nums">{time || "00:00:00"} EST</p>
      <p>Miami, FL</p>
    </div>
  );
}

/* ————————————————————————————————————————————————
   LOADER
———————————————————————————————————————————————— */

function Loader({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-white text-[11px] tracking-widest uppercase"
          >
            VISIONAIRE — CREATIVE AGENCY + PRODUCTION HOUSE
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ————————————————————————————————————————————————
   WORK INDEX ROW
———————————————————————————————————————————————— */

function WorkRow({ work, index, open, onToggle }: { work: Work; index: number; open: boolean; onToggle: () => void }) {
  const num = String(index + 1).padStart(3, "0");
  return (
    <div className="border-b border-black/15">
      <button
        onClick={onToggle}
        className="group w-full grid grid-cols-[3rem_1fr_auto] md:grid-cols-[5rem_1fr_14rem_6rem] items-baseline gap-3 py-4 md:py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-mono text-[11px] tracking-widest text-black/35 group-hover:text-black transition-colors">
          {num}
        </span>
        <span
          className={`font-sans font-medium uppercase tracking-tight text-xl md:text-4xl leading-none transition-transform duration-300 ${
            open ? "translate-x-2 md:translate-x-4" : "group-hover:translate-x-2 md:group-hover:translate-x-4"
          }`}
        >
          {work.title}
        </span>
        <span className="hidden md:block font-mono text-[10px] tracking-widest text-black/40 uppercase text-right">
          {work.client}
        </span>
        <span className="font-mono text-[11px] tracking-widest text-black/35 text-right uppercase">
          {open ? "[−]" : "[+]"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 md:pb-12 flex justify-center">
              <div className="w-full md:w-1/2">
                <div className="border border-black/25 bg-white p-2 md:p-3 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)]">
                  <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
                    <div className="absolute inset-0">
                      <NativeVideo src={work.src} />
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline pt-2 md:pt-3 px-0.5">
                    <span className="font-mono text-[9px] tracking-widest text-black/45 uppercase">
                      {work.category} — {work.client}
                    </span>
                    <span className="font-mono text-[9px] tracking-widest text-black/45 uppercase">
                      VISIONAIRE© {num}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ————————————————————————————————————————————————
   FAQ ROW
———————————————————————————————————————————————— */

function FaqRow({ faq, open, onToggle }: { faq: (typeof faqs)[number]; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-black/15">
      <button
        onClick={onToggle}
        className="group w-full grid grid-cols-[3rem_1fr_auto] md:grid-cols-[5rem_1fr_8rem] items-baseline gap-3 py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-mono text-[11px] tracking-widest text-black/35">[{faq.n}]</span>
        <span className="font-sans font-medium uppercase tracking-tight text-base md:text-2xl leading-snug group-hover:translate-x-2 transition-transform duration-300">
          {faq.q}
        </span>
        <span className="font-mono text-[10px] tracking-widest text-black/40 uppercase text-right">{faq.tag}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-12 md:pl-20 max-w-2xl text-sm md:text-base leading-relaxed text-black/60">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ————————————————————————————————————————————————
   PAGE
———————————————————————————————————————————————— */

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [openWork, setOpenWork] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white overflow-x-hidden">
      <Loader done={loaded} />
      <Soundtrack />

      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference text-white">
        <div className="flex items-start justify-between px-5 md:px-10 py-5">
          <img src="/logo.png" alt="Visionaire" className="h-8 md:h-10 w-auto object-contain invert" />
          <nav className="hidden md:flex gap-24 font-mono text-[10px] tracking-widest uppercase leading-relaxed">
            <div className="flex flex-col">
              <a href="#top" className="hover:opacity-60 transition-opacity">
                Home
              </a>
              <a href="#work" className="hover:opacity-60 transition-opacity">
                Works
              </a>
            </div>
            <div className="flex flex-col">
              <a href="#about" className="hover:opacity-60 transition-opacity">
                About
              </a>
              <Link href="/connect" className="hover:opacity-60 transition-opacity">
                Contact
              </Link>
            </div>
          </nav>
          <div className="flex items-start gap-6">
            <Link href="/connect" className="md:hidden group">
              <Bracketed className="group-hover:opacity-60 transition-opacity">Contact</Bracketed>
            </Link>
            <div className="hidden md:block">
              <MiamiClock />
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" ref={heroRef} className="relative min-h-svh flex flex-col px-5 md:px-10 pb-8 pt-24 md:pt-28">
        <div className="relative flex-grow min-h-[240px]">
          <HeroFan />
        </div>
        <motion.div className="relative z-10 pointer-events-none" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="flex justify-between items-start mb-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-mono text-[11px] tracking-widest uppercase text-black/50 max-w-56"
            >
              Cinematic work for artists &amp; brands — music, fashion, film
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="hidden md:block"
            >
              <Bracketed>Scroll Down</Bracketed>
            </motion.div>
          </div>
          <h1 className="font-sans font-medium uppercase leading-[0.85] tracking-[-0.04em] text-[14vw] md:text-[10vw] text-center">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={loaded ? { y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                Our <span className="text-[#6E1423]">Vision</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={loaded ? { y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-black/25">at</span> Visionaire
              </motion.span>
            </span>
          </h1>
        </motion.div>
      </section>

      {/* WORK INDEX */}
      <section id="work" className="px-5 md:px-10 pt-10 pb-28">
        <Reveal>
          <SectionHeader label="Latest" count={String(works.length)} />
        </Reveal>
        <div>
          {works.map((w, i) => (
            <Reveal key={w.src} delay={Math.min(i * 0.03, 0.3)}>
              <WorkRow
                work={w}
                index={i}
                open={openWork === i}
                onToggle={() => setOpenWork(openWork === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 md:px-10 pb-28">
        <Reveal>
          <SectionHeader label="Service(s)" count="04" />
        </Reveal>
        <div>
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="group grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr_14rem] items-baseline gap-3 py-6 md:py-8 border-b border-black/15">
                <span className="font-mono text-[11px] tracking-widest text-black/35">[{s.n}]</span>
                <span className="font-sans font-medium uppercase tracking-tight text-2xl md:text-5xl leading-none group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-300">
                  {s.name}
                </span>
                <span className="hidden md:block font-mono text-[10px] tracking-widest text-black/40 uppercase text-right">
                  {s.sub}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section id="about" className="px-5 md:px-10 pb-28">
        <Reveal>
          <SectionHeader label="What We Do" />
        </Reveal>
        <div className="grid md:grid-cols-12 gap-10 pt-10">
          <div className="md:col-span-3">
            <Reveal>
              <p className="font-mono text-[11px] tracking-widest uppercase text-black/50">A Selected Approach</p>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <Reveal delay={0.1}>
              <p className="font-sans font-medium uppercase tracking-tight leading-tight text-2xl md:text-4xl max-w-4xl">
                Visionaire is a Miami-based creative agency and production house working at the intersection of
                music, fashion, and film — directing and producing cinematic work where concept, motion, and execution come together as
                one cohesive vision.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-x-10 gap-y-2 pt-10 font-mono text-[10px] tracking-widest uppercase text-black/40">
                <span>Visionaire</span>
                <span>{new Date().getFullYear()}</span>
                <span>Miami, FL</span>
                <span>映像 制作</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATEMENT — dark band */}
      <section className="bg-black text-white px-5 md:px-10 py-32 md:py-44">
        <Reveal>
          <p className="font-mono text-[11px] tracking-widest uppercase text-white/40 mb-8">The Standard</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-sans font-medium uppercase tracking-[-0.03em] leading-[0.95] text-4xl md:text-7xl max-w-5xl">
            Every frame is an ambassador of your brand
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="pt-10">
            <Link href="/connect">
              <Bracketed className="text-white hover:opacity-60 transition-opacity">Start a Project</Bracketed>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="px-5 md:px-10 py-28">
        <Reveal>
          <SectionHeader label="The Advantage" />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="pt-10 pb-14 font-sans font-medium uppercase tracking-tight text-2xl md:text-4xl">
            Experience guides the work
          </p>
        </Reveal>
        <div className="border-t border-black/20">
          {stats.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="grid grid-cols-[3rem_1fr_minmax(0,7rem)] md:grid-cols-[8rem_1fr_16rem] items-center py-4 md:py-6 border-b border-black/20">
                <span className="font-mono text-[11px] tracking-widest text-black/60">[{s.n}]</span>
                <p className="font-sans font-medium tracking-tight text-5xl md:text-7xl leading-none text-center">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <span className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase text-right md:whitespace-nowrap justify-self-end">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 md:px-10 pb-28">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8 pb-16 md:pb-24">
            <div className="flex items-start justify-between md:block">
              <span className="font-mono text-[11px] tracking-widest uppercase">Frequently Asked Questions</span>
              <span className="md:hidden font-mono text-[11px] tracking-widest uppercase text-black/40">Clarity</span>
            </div>
            <div className="flex items-start justify-between gap-6">
              <h2 className="font-sans font-medium uppercase tracking-[-0.03em] leading-[0.95] text-4xl md:text-6xl">
                Clarity
                <br />
                Builds the Image
              </h2>
              <span className="hidden md:block font-mono text-[11px] tracking-widest uppercase text-black/40 pt-2">
                Clarity
              </span>
            </div>
          </div>
        </Reveal>
        <div>
          {faqs.map((f, i) => (
            <FaqRow key={f.n} faq={f} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
          ))}
        </div>
      </section>

      {/* CONTACT — dark */}
      <section className="bg-black text-white px-5 md:px-10 pt-28 pb-16">
        <Reveal>
          <div className="flex items-end justify-between border-b border-white/25 pb-3">
            <span className="font-mono text-[11px] tracking-widest uppercase">Contact</span>
            <Bracketed className="text-white">Inquiry</Bracketed>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-12 gap-10 pt-14 pb-24">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-sans font-medium uppercase tracking-[-0.03em] leading-[0.9] text-6xl md:text-8xl">
                Say
                <br />
                Hello
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 flex flex-col justify-end gap-10">
            <Reveal delay={0.1}>
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-sm">
                Every connection begins with a conversation. Share your vision with us, and together we&apos;ll
                create something that lasts.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-4">
                <Link
                  href="/connect"
                  className="inline-flex items-center justify-between border border-white/30 hover:bg-white hover:text-black transition-colors duration-300 px-6 py-4"
                >
                  <span className="font-mono text-[11px] tracking-widest uppercase">Work With Us</span>
                  <span className="font-mono text-[11px]">→</span>
                </Link>
                <Link
                  href="/giveaway"
                  className="inline-flex items-center justify-between border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition-colors duration-300 px-6 py-4"
                >
                  <span className="font-mono text-[11px] tracking-widest uppercase">Enter the Giveaway</span>
                  <span className="font-mono text-[11px]">→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-white/15 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-sans font-semibold uppercase tracking-tight text-sm">Visionaire®</span>
          <div className="flex gap-8 font-mono text-[10px] tracking-widest uppercase text-white/50">
            <a
              href="https://instagram.com/visionsaire"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@visionaireproductions/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              YouTube
            </a>
            <a href="mailto:contact@visionaire.com" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
          <p className="font-mono text-[10px] tracking-widest uppercase text-white/40">
            © {new Date().getFullYear()} Visionaire Productions
          </p>
        </footer>
      </section>
    </main>
  );
}
