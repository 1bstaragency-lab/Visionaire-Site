"use client";

import React, { useActionState } from "react";
import { submitGiveawayEntry } from "@/app/actions/giveaway";

const initialState = {
  success: false,
  message: "",
};

export default function GiveawayForm() {
  const [state, formAction, isPending] = useActionState(submitGiveawayEntry, initialState);

  if (state?.success) {
    return (
      <div className="w-full max-w-lg mx-auto bg-zinc-900 border border-white/10 rounded-lg p-8 text-center my-8 shadow-2xl">
        <h2 className="text-2xl font-light text-white mb-2 tracking-widest uppercase">You're Entered!</h2>
        <p className="text-zinc-400">
          Good luck! We'll reach out if you win any of the prizes.
          <br /><br />
          <span className="text-zinc-500 italic text-sm">psst... even if you don't win, we will still show love at a future shoot if you book with us!</span>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-zinc-900 border border-white/10 rounded-lg p-6 md:p-8 my-8 shadow-2xl relative overflow-hidden group">
      {/* Subtle chrome gradient accent at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 opacity-50" />
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-light text-white mb-2 tracking-widest uppercase">Win a Free Commercial</h2>
        <p className="text-zinc-400 text-sm">Enter below for a chance to win a free video production package for your brand.</p>
        <p className="text-zinc-300 text-xs mt-2 uppercase tracking-widest border border-white/10 inline-block px-3 py-1 rounded-full">
          *We provide full crew & production services
        </p>
      </div>

      <div className="flex flex-col gap-2 mb-6 bg-zinc-950 border border-white/5 p-3 rounded-lg shadow-inner">
        <div className="bg-gradient-to-b from-[#FFD700]/10 to-transparent border border-[#FFD700]/20 p-2 rounded-md text-center flex flex-col items-center justify-center">
          <p className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-0.5">1st Place — Gold</p>
          <p className="text-white text-xs">15-30 second editorial narrative or fashion commercial.</p>
        </div>
        <div className="bg-gradient-to-b from-[#C0C0C0]/10 to-transparent border border-[#C0C0C0]/20 p-2 rounded-md text-center flex flex-col items-center justify-center">
          <p className="text-[#C0C0C0] text-xs font-bold uppercase tracking-widest mb-0.5">2nd Place — Silver</p>
          <p className="text-white text-xs">2 High-End Instagram Reels.</p>
        </div>
        <div className="bg-gradient-to-b from-[#CD7F32]/10 to-transparent border border-[#CD7F32]/20 p-2 rounded-md text-center flex flex-col items-center justify-center">
          <p className="text-[#CD7F32] text-xs font-bold uppercase tracking-widest mb-0.5">3rd Place — Bronze</p>
          <p className="text-white text-xs">50% off any commercial production.</p>
        </div>
        <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-2 rounded-md text-center mt-1">
          <p className="text-zinc-300 text-[10px] tracking-wider uppercase mb-0.5">Plus 2 Additional Winners</p>
          <p className="text-zinc-400 text-[10px] leading-tight">We will randomly select 2 other brands to receive smaller production prizes. We will reach out individually!</p>
        </div>
      </div>

      {state?.message && !state?.success && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-md text-red-400 text-sm text-center">
          {state.message}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-400 font-medium">What's your name?</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            placeholder="John Doe"
            className="bg-black border border-white/10 rounded-md px-4 py-3 text-white text-center placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="phone" className="text-xs uppercase tracking-widest text-zinc-400 font-medium">What's your number?</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            placeholder="(555) 123-4567"
            className="bg-black border border-white/10 rounded-md px-4 py-3 text-white text-center placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="duration" className="text-xs uppercase tracking-widest text-zinc-400 font-medium">How long have you had your brand?</label>
          <input 
            type="text" 
            id="duration" 
            name="brand_duration" 
            required 
            placeholder="e.g. 2 years, Just starting, etc."
            className="bg-black border border-white/10 rounded-md px-4 py-3 text-white text-center placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
          />
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="mt-4 w-full bg-white text-black font-semibold uppercase tracking-widest py-4 rounded-md hover:bg-zinc-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-center"
        >
          {isPending ? "Entering..." : "Enter Giveaway"}
        </button>
      </form>
    </div>
  );
}
