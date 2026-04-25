import React from "react";
import GiveawayForm from "@/components/GiveawayForm";
import Link from "next/link";

export default function GiveawayPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col items-center justify-center p-4 md:p-8">
      
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center justify-center mb-12 gap-4">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <Link href="/">
              <img 
                src="/logo.png" 
                alt="Visionaire Logo" 
                className="h-10 md:h-14 object-contain invert hover:opacity-80 transition-opacity"
              />
            </Link>
            
            <span className="text-zinc-600 text-xl font-light">X</span>
            
            {/* Fallback typography logo for Atlanta Streetwear Market until SVG is provided */}
            <div className="h-10 md:h-14 flex items-center">
              <span className="font-blocky text-2xl md:text-3xl tracking-widest text-white leading-none mt-1">
                ATLANTA STREETWEAR MARKET
              </span>
            </div>
          </div>
          
          <p className="text-zinc-500 text-xs tracking-widest uppercase">* Sponsored by Visionaire *</p>
        </div>

        <GiveawayForm />
      </div>

    </main>
  );
}
