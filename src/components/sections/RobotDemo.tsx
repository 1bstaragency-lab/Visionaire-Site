'use client';

import React from 'react';
import { InteractiveRobotSpline } from '@/components/blocks/interactive-3d-robot'
import ChromeText from "@/components/ui/ChromeText";

export function RobotSection() { 
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-ink border-y border-ink-divider my-24">
      {/* Heavy CSS filtering to override the remote WebGL colors into high-contrast B&W Chrome */}
      <InteractiveRobotSpline
        scene={ROBOT_SCENE_URL}
        className="absolute inset-0 z-0 grayscale contrast-[1.3] brightness-125 sepia-[0.1] mix-blend-screen" 
      />

      <div className="
        absolute inset-0 z-10
        flex flex-col items-center justify-center
        pointer-events-none     
      ">
        <div className="
          text-center             
          w-full max-w-2xl        
          mx-auto                 
        ">
          <ChromeText as="h1" className="
            text-4xl md:text-6xl lg:text-7xl 
            font-heading font-extrabold tracking-tighter drop-shadow-2xl
          ">
            Automata
          </ChromeText>
          <p className="mt-4 text-silver-muted font-sans font-medium tracking-[0.2em] uppercase text-xs drop-shadow-md">
            Interactive Dimension
          </p>
        </div>
      </div>
    </div> 
  );
}
