"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import ChromeText from "@/components/ui/ChromeText";

export default function StickyNav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (typeof window !== 'undefined') {
      if (latest < window.innerHeight - 100) {
        setHidden(true);
      } else if (latest > previous && latest > window.innerHeight) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  if (!mounted) return null;

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 h-16 z-50 bg-ink/90 backdrop-blur-md flex items-center justify-between px-6 md:px-12 border-b border-ink-divider"
    >
      <div className="font-heading text-xl font-bold tracking-wide">
        <ChromeText as="a" href="#">Visionaire</ChromeText>
      </div>
      <div className="hidden md:flex gap-6 text-sm text-silver-muted font-sans font-medium">
        <a href="#reel" className="hover:text-paper transition-colors">Reel</a>
        <a href="#commercials" className="hover:text-paper transition-colors">Commercials</a>
        <a href="#music-videos" className="hover:text-paper transition-colors">Music Videos</a>
        <a href="#short-form" className="hover:text-paper transition-colors">Short Form</a>
      </div>
    </motion.nav>
  );
}
