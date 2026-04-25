"use client";
import { Commercial } from "@/data/projects";
import ChromeBorder from "@/components/ui/ChromeBorder";
import { useState, useRef } from "react";
import { Play } from "lucide-react";

interface Props {
  commercial: Commercial;
  onPlay: (src: string) => void;
}

export default function CommercialCard({ commercial, onPlay }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const videoSrc = `/videos/commercials/${commercial.slug}/${commercial.heroFile}`;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (videoRef.current) {
    if (isHovered) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <div 
      className="group flex flex-col cursor-pointer" 
      onClick={() => onPlay(videoSrc)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ChromeBorder 
        radius="md" 
        className="aspect-video mb-4 overflow-hidden relative group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1"
      >
        <video
          ref={videoRef}
          src={videoSrc + "#t=0.1"} 
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className={`absolute inset-0 bg-ink/20 grid place-items-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
           <div className="w-12 h-12 rounded-full backdrop-blur-sm bg-white/10 flex items-center justify-center border border-white/20">
             <Play className="text-white w-5 h-5 ml-1 opacity-90" fill="currentColor" />
           </div>
        </div>
      </ChromeBorder>
      <div className="px-1">
        <h3 className="text-paper font-sans font-semibold text-lg leading-snug group-hover:text-silver-muted transition-colors">{commercial.client}</h3>
        <p className="text-silver-dim text-sm font-sans mt-0.5">{commercial.title}</p>
      </div>
    </div>
  );
}
