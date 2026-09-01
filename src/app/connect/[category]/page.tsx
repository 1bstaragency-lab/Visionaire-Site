import React from "react";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Connect with Visionaire",
  description: "Tell us about your project.",
};

const validCategories = ["brand", "artist", "narrative", "personal"];

export default async function CategoryFormPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  if (!validCategories.includes(category)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans px-5 md:px-10 pb-16">
      <header className="flex items-center justify-between py-5">
        <Link href="/">
          <img src="/logo.png" alt="Visionaire" className="h-8 md:h-10 w-auto object-contain hover:opacity-70 transition-opacity" />
        </Link>
        <Link
          href="/connect"
          className="font-mono text-[11px] tracking-widest uppercase hover:opacity-60 transition-opacity"
        >
          <span className="opacity-40">[&nbsp;</span>← Back<span className="opacity-40">&nbsp;]</span>
        </Link>
      </header>

      <LeadCaptureForm category={category as "brand" | "artist" | "narrative" | "personal"} />
    </main>
  );
}
