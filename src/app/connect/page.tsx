import React from "react";
import CategorySelection from "@/components/CategorySelection";

export const metadata = {
  title: "Connect with Visionaire",
  description: "Tell us about your project and let's create something visually stunning.",
};

export default function CategorySelectionPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col items-center p-4 md:p-8 overflow-hidden relative">
      <CategorySelection />
    </main>
  );
}
