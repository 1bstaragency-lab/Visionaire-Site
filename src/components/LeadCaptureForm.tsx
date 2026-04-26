"use client";

import React, { useActionState } from "react";
import { submitLeadEntry } from "@/app/actions/leads";

const initialState = {
  success: false,
  message: "",
};

export default function LeadCaptureForm() {
  const [state, formAction, isPending] = useActionState(submitLeadEntry, initialState);

  if (state?.success) {
    return (
      <div className="w-full max-w-lg mx-auto bg-zinc-900 border border-white/10 rounded-lg py-16 px-8 text-center my-8 shadow-2xl">
        <h2 className="text-2xl font-light text-white mb-4 tracking-widest uppercase">Information Received</h2>
        <p className="text-zinc-400 mt-4">
          Thanks for reaching out! We've received your details and will be in touch soon.
          <br /><br />
          <span className="text-zinc-500 italic text-sm">Stay creative. We look forward to creating visuals with you.</span>
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-zinc-900 border border-white/10 rounded-lg p-6 md:p-8 my-8 shadow-2xl relative overflow-hidden group">
      {/* Subtle chrome gradient accent at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 opacity-50" />
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2 tracking-widest uppercase">Connect With Us</h2>
        <p className="text-zinc-400 text-sm">Ready to elevate your visuals? Tell us a bit about yourself.</p>
      </div>

      {state?.message && !state?.success && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-md text-red-400 text-sm text-center">
          {state.message}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="artist_name" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">What's your artist name?</label>
          <input 
            type="text" 
            id="artist_name" 
            name="artist_name" 
            required 
            placeholder="Your Stage Name"
            className="bg-black/50 border border-white/5 rounded-md px-4 py-2.5 text-white text-sm text-center placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="contact_info" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">Email or Phone Number?</label>
          <input 
            type="text" 
            id="contact_info" 
            name="contact_info" 
            required 
            placeholder="How can we reach you?"
            className="bg-black/50 border border-white/5 rounded-md px-4 py-2.5 text-white text-sm text-center placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="music_type" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">What type of music do you make?</label>
          <input 
            type="text" 
            id="music_type" 
            name="music_type" 
            required 
            placeholder="Genre / Style"
            className="bg-black/50 border border-white/5 rounded-md px-4 py-2.5 text-white text-sm text-center placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="last_video" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">When's the last time you shot a music video?</label>
          <input 
            type="text" 
            id="last_video" 
            name="last_video" 
            required 
            placeholder="e.g. 6 months ago, Never"
            className="bg-black/50 border border-white/5 rounded-md px-4 py-2.5 text-white text-sm text-center placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="music_duration" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-500 font-medium">How long have you been doing music?</label>
          <input 
            type="text" 
            id="music_duration" 
            name="music_duration" 
            required 
            placeholder="e.g. 3 years, Just started"
            className="bg-black/50 border border-white/5 rounded-md px-4 py-2.5 text-white text-sm text-center placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
          />
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="mt-6 w-full bg-white text-black font-semibold uppercase tracking-widest py-3.5 text-sm rounded-md hover:bg-zinc-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
