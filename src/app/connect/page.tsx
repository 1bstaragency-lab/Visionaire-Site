import React from "react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Link from "next/link";

export const metadata = {
  title: "Connect with Visionaire",
  description: "Tell us about yourself and let's create something visually stunning.",
};

export default function LeadCapturePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col items-center p-4 md:p-8 overflow-hidden relative">
      
      {/* Background visual elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-800/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-4xl mt-8 z-10">
        <div className="flex flex-col items-center justify-center mb-8 gap-4">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="Visionaire Logo" 
              className="h-20 md:h-28 object-contain invert hover:opacity-80 transition-opacity"
            />
          </Link>
          <p className="text-zinc-500 text-xs tracking-widest uppercase">* Application Form *</p>
        </div>

        <LeadCaptureForm />
      </div>

    </main>
  );
}
