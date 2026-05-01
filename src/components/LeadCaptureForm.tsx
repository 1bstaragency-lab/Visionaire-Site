"use client";

import React, { useActionState } from "react";
import { submitLeadEntry } from "@/app/actions/leads";

const initialState = {
  success: false,
  message: "",
};

type CategoryType = "brand" | "artist" | "narrative" | "personal";

const categoryConfig: Record<CategoryType, { title: string, subtitle: string, q1: any, q2: any, q3: any }> = {
  artist: {
    title: "Music Artist",
    subtitle: "Ready to elevate your visuals? Tell us a bit about yourself.",
    q1: { label: "What type of music do you make?", placeholder: "Genre / Style" },
    q2: { label: "When's the last time you shot a music video?", placeholder: "e.g. 6 months ago, Never" },
    q3: { label: "How long have you been doing music?", placeholder: "e.g. 3 years, Just started" }
  },
  brand: {
    title: "Brand Campaign",
    subtitle: "Let's create powerful visuals for your brand.",
    q1: { label: "What is your brand name?", placeholder: "Your Brand" },
    q2: { label: "What is the main goal of this project?", placeholder: "e.g. Product launch, Brand awareness" },
    q3: { label: "What is your estimated budget?", placeholder: "e.g. $1k - $3k" }
  },
  narrative: {
    title: "Narrative & Film",
    subtitle: "Tell us about your story and vision.",
    q1: { label: "What is the working title?", placeholder: "Project Title" },
    q2: { label: "What is the genre?", placeholder: "e.g. Drama, Thriller, Documentary" },
    q3: { label: "Do you have a finished script?", placeholder: "Yes / No / In Progress" }
  },
  personal: {
    title: "Personal Project",
    subtitle: "Let's capture your special moments.",
    q1: { label: "What type of project is this?", placeholder: "e.g. Wedding, Birthday, Milestone" },
    q2: { label: "When is the occasion?", placeholder: "Date or Timeline" },
    q3: { label: "Where will it be located?", placeholder: "City or Venue" }
  }
};

export default function LeadCaptureForm({ category }: { category: CategoryType }) {
  const [state, formAction, isPending] = useActionState(submitLeadEntry, initialState);
  const config = categoryConfig[category];

  if (state?.success) {
    return (
      <div className="w-full max-w-lg mx-auto bg-zinc-900 border border-white/10 rounded-lg py-12 px-6 md:py-16 md:px-8 text-center my-4 md:my-8 shadow-2xl">
        <h2 className="text-xl md:text-2xl font-light text-white mb-4 tracking-widest uppercase">Information Received</h2>
        <p className="text-zinc-400 mt-4 mb-8">
          Thanks for reaching out! We've received your details and will be in touch soon.
          <br /><br />
          <span className="text-zinc-500 italic text-sm">Stay creative. We look forward to working with you.</span>
        </p>

        <div className="flex flex-col items-center gap-4">
          <p className="text-white text-xs uppercase tracking-[0.2em] font-medium">Want to speed things up?</p>
          <a 
            href="https://calendly.com/visionaireproduction/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold uppercase tracking-[0.2em] py-4 px-10 text-[10px] md:text-xs rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:-translate-y-0.5"
          >
            Schedule a 30-min Call
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-zinc-900 border border-white/10 rounded-lg p-5 md:p-8 my-2 md:my-8 shadow-2xl relative overflow-hidden group">
      {/* Subtle chrome gradient accent at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 opacity-50" />
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2 tracking-widest uppercase">{config.title}</h2>
        <p className="text-zinc-400 text-sm">{config.subtitle}</p>
      </div>

      {state?.message && !state?.success && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-md text-red-400 text-sm text-center">
          {state.message}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-6">
        <input type="hidden" name="category" value={category} />
        <input type="hidden" name="subject" value={`${config.title} Form`} />
        
        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="name" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-300 font-medium">What's your name?</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            placeholder="Your Name"
            className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-white text-sm text-center placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="contact_info" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-300 font-medium">Email or Phone Number?</label>
          <input 
            type="text" 
            id="contact_info" 
            name="contact_info" 
            required 
            placeholder="How can we reach you?"
            className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-white text-sm text-center placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="question_1" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-300 font-medium">{config.q1.label}</label>
          <input 
            type="text" 
            id="question_1" 
            name="question_1" 
            required 
            placeholder={config.q1.placeholder}
            className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-white text-sm text-center placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="question_2" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-300 font-medium">{config.q2.label}</label>
          <input 
            type="text" 
            id="question_2" 
            name="question_2" 
            required 
            placeholder={config.q2.placeholder}
            className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-white text-sm text-center placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 text-center">
          <label htmlFor="question_3" className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-300 font-medium">{config.q3.label}</label>
          <input 
            type="text" 
            id="question_3" 
            name="question_3" 
            required 
            placeholder={config.q3.placeholder}
            className="bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-white text-sm text-center placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
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
