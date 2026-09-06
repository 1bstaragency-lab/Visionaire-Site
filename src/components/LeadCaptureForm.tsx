"use client";

import React, { useActionState } from "react";
import { submitLeadEntry } from "@/app/actions/leads";
import BookingEmbed from "@/components/BookingEmbed";

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

const inputClasses =
  "w-full bg-transparent border-0 border-b border-black/30 px-0 py-3 text-black text-base placeholder:text-black/25 focus:outline-none focus:border-black transition-colors rounded-none";

function Field({
  id,
  name,
  label,
  placeholder,
  index,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  index: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-widest text-black/50">
        <span className="text-black/30">[{index}]</span>&nbsp;&nbsp;{label}
      </label>
      <input type="text" id={id} name={name} required placeholder={placeholder} className={inputClasses} />
    </div>
  );
}

export default function LeadCaptureForm({ category }: { category: CategoryType }) {
  const [state, formAction, isPending] = useActionState(submitLeadEntry, initialState);
  const config = categoryConfig[category];

  if (state?.success) {
    return (
      <div className="w-full max-w-2xl mx-auto py-12 md:py-20">
        <div className="border-b border-black pb-3 flex items-end justify-between">
          <span className="font-mono text-[11px] tracking-widest uppercase">Confirmation</span>
          <span className="font-mono text-[11px] tracking-widest uppercase text-black/40">[&nbsp;01/01&nbsp;]</span>
        </div>
        <h2 className="pt-10 font-sans font-medium uppercase tracking-[-0.03em] leading-[0.9] text-4xl md:text-6xl">
          Information
          <br />
          Received
        </h2>
        <p className="pt-8 text-black/60 text-sm md:text-base leading-relaxed max-w-md">
          Thanks for reaching out! We&apos;ve received your details and will be in touch soon.
        </p>
        <p className="pt-3 font-mono text-[10px] tracking-widest uppercase text-black/40">
          Stay creative — we look forward to working with you
        </p>

        <div className="pt-12">
          <div className="flex items-end justify-between border-b border-black pb-3 mb-6">
            <span className="font-mono text-[11px] tracking-widest uppercase">Book a Call</span>
            <span className="font-mono text-[11px] tracking-widest uppercase text-black/40">
              [&nbsp;30 Min&nbsp;]
            </span>
          </div>
          <p className="font-mono text-[10px] tracking-widest uppercase text-black/50 pb-6">
            Want to speed things up? Pick a time below
          </p>
          <BookingEmbed />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-8 md:py-14">
      <div className="border-b border-black pb-3 flex items-end justify-between">
        <span className="font-mono text-[11px] tracking-widest uppercase">Inquiry</span>
        <span className="font-mono text-[11px] tracking-widest uppercase text-black/40">[&nbsp;{config.title}&nbsp;]</span>
      </div>

      <h2 className="pt-10 font-sans font-medium uppercase tracking-[-0.03em] leading-[0.9] text-4xl md:text-6xl">
        {config.title}
      </h2>
      <p className="pt-4 pb-10 text-black/50 text-sm md:text-base">{config.subtitle}</p>

      {state?.message && !state?.success && (
        <div className="mb-8 border border-black/30 px-4 py-3 font-mono text-[11px] tracking-widest uppercase text-black/80">
          [ ! ]&nbsp;&nbsp;{state.message}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-8">
        <input type="hidden" name="category" value={category} />
        <input type="hidden" name="subject" value={`${config.title} Form`} />

        <Field id="name" name="name" label="What's your name?" placeholder="Your Name" index="01" />
        <Field id="contact_info" name="contact_info" label="Email or Phone Number?" placeholder="How can we reach you?" index="02" />
        <Field id="question_1" name="question_1" label={config.q1.label} placeholder={config.q1.placeholder} index="03" />
        <Field id="question_2" name="question_2" label={config.q2.label} placeholder={config.q2.placeholder} index="04" />
        <Field id="question_3" name="question_3" label={config.q3.label} placeholder={config.q3.placeholder} index="05" />

        <button
          type="submit"
          disabled={isPending}
          className="mt-4 w-full flex items-center justify-between border border-black/40 hover:bg-black hover:text-white transition-colors duration-300 px-6 py-4 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          <span className="font-mono text-[11px] tracking-widest uppercase">
            {isPending ? "Submitting..." : "Submit"}
          </span>
          <span className="font-mono text-[11px]">→</span>
        </button>
      </form>
    </div>
  );
}
