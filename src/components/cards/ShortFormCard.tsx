"use client";
import { useInView } from "@/lib/useInView";
import { useEffect, useRef } from "react";

interface Props {
  src: string;
}

export default function ShortFormCard({ src }: Props) {
  const { ref, isInView } = useInView<HTMLDivElement>(0.6);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-ink-raised ring-1 ring-white/10 group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
      <video
        ref={videoRef}
        src={src + "#t=0.1"}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div className="flex gap-2">
             <div className="w-6 h-6 rounded-full bg-chrome animate-pulse opacity-80 mix-blend-screen" />
          </div>
      </div>
    </div>
  );
}
