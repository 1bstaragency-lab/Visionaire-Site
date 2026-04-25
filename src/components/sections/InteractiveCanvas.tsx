"use client";

import StackedPanels from "@/components/ui/stacked-panels-cursor-intereactive-component";

export default function DemoOne() {
  return (
    <section className="relative w-full h-[600px] rounded-xl overflow-hidden bg-ink-elevated flex flex-col items-center justify-center border border-ink-divider shadow-2xl">
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="w-full h-full p-4">
        <StackedPanels />
      </div>

      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[10px] tracking-widest uppercase text-silver-muted font-sans font-medium select-none bg-ink/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5">
        Move cursor to interact
      </p>
    </section>
  );
}
