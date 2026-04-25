import React from "react";
import GiveawayForm from "@/components/GiveawayForm";
import { BTSCarousel } from "@/components/BTSCarousel";
import Link from "next/link";

export default function GiveawayPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col items-center p-4 md:p-8 overflow-hidden">
      
      <div className="w-full max-w-4xl mt-8">
        <div className="flex flex-col items-center justify-center mb-12 gap-4">
          <div className="flex items-center justify-center gap-6 md:gap-12">
            <Link href="/">
              <img 
                src="/logo.png" 
                alt="Visionaire Logo" 
                className="h-20 md:h-28 object-contain invert hover:opacity-80 transition-opacity"
              />
            </Link>
            
            <span className="text-zinc-600 text-2xl md:text-3xl font-light">X</span>
            
            {/* Atlanta Streetwear Market Logo */}
            <div className="flex items-center">
              <img 
                src="/logos/aswm.png" 
                alt="Atlanta Streetwear Market Logo" 
                className="h-20 md:h-28 object-contain transition-transform hover:scale-105"
              />
            </div>
          </div>
          
          <p className="text-zinc-500 text-xs tracking-widest uppercase">* Sponsored by Visionaire *</p>
        </div>

        <GiveawayForm />
      </div>

      <div className="w-screen mt-24">
        <BTSCarousel />
      </div>

    </main>
  );
}
