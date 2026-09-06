"use client";

import React from "react";
import Cal from "@calcom/embed-react";

/* Inline scheduling on the contact flow.
 *
 * Points at Cal.com by default, or at a self-hosted Cal.diy instance when
 * NEXT_PUBLIC_CAL_ORIGIN / NEXT_PUBLIC_CAL_EMBED_JS_URL are set.
 * Falls back to the existing Calendly link until NEXT_PUBLIC_CAL_LINK exists,
 * so the contact page never ships a broken booking widget.
 */

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK;
const CAL_ORIGIN = process.env.NEXT_PUBLIC_CAL_ORIGIN;
const CAL_EMBED_JS_URL = process.env.NEXT_PUBLIC_CAL_EMBED_JS_URL;
const CALENDLY_FALLBACK = "https://calendly.com/visionaireproduction/30min";

export default function BookingEmbed() {
  if (!CAL_LINK) {
    return (
      <a
        href={CALENDLY_FALLBACK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full md:w-auto items-center justify-between gap-10 border border-black/40 hover:bg-black hover:text-white transition-colors duration-300 px-6 py-4"
      >
        <span className="font-mono text-[11px] tracking-widest uppercase">Schedule a 30-min Call</span>
        <span className="font-mono text-[11px]">→</span>
      </a>
    );
  }

  return (
    <div className="border border-black/25 bg-white p-2 md:p-3">
      <Cal
        calLink={CAL_LINK}
        calOrigin={CAL_ORIGIN}
        embedJsUrl={CAL_EMBED_JS_URL}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
