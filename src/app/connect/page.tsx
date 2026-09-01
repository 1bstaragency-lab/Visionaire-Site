import React from "react";
import Link from "next/link";
import CategorySelection from "@/components/CategorySelection";

export const metadata = {
  title: "Connect with Visionaire",
  description: "Tell us about your project and let's create something visually stunning.",
};

export default function CategorySelectionPage() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans px-5 md:px-10 pb-16">
      <header className="flex items-center justify-between py-5">
        <Link href="/">
          <img src="/logo.png" alt="Visionaire" className="h-8 md:h-10 w-auto object-contain hover:opacity-70 transition-opacity" />
        </Link>
        <Link href="/" className="font-mono text-[11px] tracking-widest uppercase hover:opacity-60 transition-opacity">
          <span className="opacity-40">[&nbsp;</span>Home<span className="opacity-40">&nbsp;]</span>
        </Link>
      </header>

      <CategorySelection />
    </main>
  );
}
