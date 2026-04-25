import React from "react";
import GiveawayForm from "@/components/GiveawayForm";
import Link from "next/link";

export default function GiveawayPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col items-center justify-center p-4 md:p-8">
      
      <div className="w-full max-w-4xl">
        <div className="flex justify-center mb-12">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="Visionaire Logo" 
              className="h-12 md:h-16 object-contain invert hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        <GiveawayForm />
      </div>

    </main>
  );
}
