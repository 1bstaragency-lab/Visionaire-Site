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
        <p className="text-zinc-400">Good luck! We'll reach out if you win the free commercial.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-zinc-900 border border-white/10 rounded-lg p-6 md:p-8 my-8 shadow-2xl relative overflow-hidden group">
      {/* Subtle chrome gradient accent at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 opacity-50" />
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2 tracking-widest uppercase">Win a Free Commercial</h2>
        <p className="text-zinc-400 text-sm">Enter below for a chance to win a free video production package for your brand.</p>
      </div>

      {state?.message && !state?.success && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-md text-red-400 text-sm text-center">
          {state.message}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-400 font-medium">What's your name?</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            placeholder="John Doe"
            className="bg-black border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-xs uppercase tracking-widest text-zinc-400 font-medium">What's your number?</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            placeholder="(555) 123-4567"
            className="bg-black border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="duration" className="text-xs uppercase tracking-widest text-zinc-400 font-medium">How long have you had your brand?</label>
          <input 
            type="text" 
            id="duration" 
            name="brand_duration" 
            required 
            placeholder="e.g. 2 years, Just starting, etc."
            className="bg-black border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all"
          />
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="mt-4 w-full bg-white text-black font-semibold uppercase tracking-widest py-4 rounded-md hover:bg-zinc-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Entering..." : "Enter Giveaway"}
        </button>
      </form>
    </div>
  );
}
