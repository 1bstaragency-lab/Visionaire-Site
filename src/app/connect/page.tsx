import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Connect with Visionaire",
  description: "Tell us about your project and let's create something visually stunning.",
};

const categories = [
  {
    id: "brand",
    title: "Brand Owner",
    description: "Commercials, campaigns, and brand identity visuals.",
    gradient: "from-[#FFD700]/20 to-transparent",
    border: "border-[#FFD700]/30"
  },
  {
    id: "artist",
    title: "Music Artist",
    description: "Music videos, performance visuals, and artist branding.",
    gradient: "from-blue-500/20 to-transparent",
    border: "border-blue-500/30"
  },
  {
    id: "narrative",
    title: "Narrative / Short Film",
    description: "Long-form content, documentaries, and cinematic storytelling.",
    gradient: "from-purple-500/20 to-transparent",
    border: "border-purple-500/30"
  },
  {
    id: "personal",
    title: "Personal Project",
    description: "Events, milestones, and custom personal visuals.",
    gradient: "from-emerald-500/20 to-transparent",
    border: "border-emerald-500/30"
  }
];

export default function CategorySelectionPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col items-center p-4 md:p-8 overflow-hidden relative">
      
      {/* Background visual elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-800/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-4xl mt-4 md:mt-8 z-10">
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12 gap-2 md:gap-4">
          <Link href="/">
            <img 
              src="/logo.png" 
              alt="Visionaire Logo" 
              className="h-16 md:h-28 object-contain invert hover:opacity-80 transition-opacity"
            />
          </Link>
          <p className="text-zinc-500 text-[10px] md:text-xs tracking-widest uppercase">* Select Your Project Type *</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/connect/${category.id}`}
              className={`group relative overflow-hidden bg-zinc-900/50 border border-white/10 rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-light tracking-widest uppercase">{category.title}</h3>
                <p className="text-zinc-400 text-sm">{category.description}</p>
                
                <div className="mt-4 flex items-center text-xs tracking-[0.2em] uppercase font-bold text-white/50 group-hover:text-white transition-colors duration-300">
                  Select <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
