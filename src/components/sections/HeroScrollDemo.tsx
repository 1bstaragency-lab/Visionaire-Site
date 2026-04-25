"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col bg-ink overflow-hidden border-b border-ink-divider relative z-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl md:text-[8rem] font-heading font-extrabold text-paper mt-1 mb-12 leading-[0.9] tracking-tighter uppercase">
              Visionaire
            </h1>
          </>
        }
      >
        <video
          src="/videos/commercials/gap/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="mx-auto rounded-2xl object-cover h-full object-center w-full"
        />
      </ContainerScroll>
    </div>
  );
}
