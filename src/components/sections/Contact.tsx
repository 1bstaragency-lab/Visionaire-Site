"use client";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ChromeText from "@/components/ui/ChromeText";

export default function Contact() {
  return (
    <footer id="contact" className="py-24 px-6 md:px-12 bg-ink relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <SectionEyebrow className="mb-4">Get In Touch</SectionEyebrow>
          <h2 className="text-5xl md:text-7xl font-heading text-paper tracking-tight mb-8 leading-none">
            Start a<br/>Project
          </h2>
          <a 
            href="mailto:contact@visionsaire.com" 
            className="inline-block text-xl md:text-2xl text-silver-dim hover:text-paper transition-colors mb-12 border-b border-silver-dim/30 hover:border-paper pb-2"
          >
            contact@visionsaire.com
          </a>
        </div>
        
        <div className="flex flex-col justify-end md:items-end">
          <div className="space-y-4 text-left md:text-right">
             <a href="https://instagram.com/visionsaire" target="_blank" rel="noreferrer" className="block text-lg text-silver-dim hover:text-paper transition-colors uppercase tracking-widest">Instagram</a>
             <a href="#" className="block text-lg text-silver-dim hover:text-paper transition-colors uppercase tracking-widest">TikTok</a>
             <a href="#" className="block text-lg text-silver-dim hover:text-paper transition-colors uppercase tracking-widest">YouTube</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-ink-divider flex flex-col md:flex-row justify-between items-center gap-6">
         <ChromeText as="div" className="text-3xl font-heading tracking-tighter font-bold">Visionaire</ChromeText>
         <p className="text-[10px] text-silver-dim tracking-[0.2em] uppercase">
           &copy; {new Date().getFullYear()} Visionaire Productions
         </p>
      </div>
    </footer>
  );
}
