"use client";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import LogoMarquee from "@/components/ui/LogoMarquee";
import { motion } from "framer-motion";

export default function Clients() {
  const testimonials = [
    { quote: "Visionaire brought an unparalleled energy to the project.", author: "Converse" },
    { quote: "The final cut exceeded all expectations. True professionals.", author: "GAP Team" },
  ];

  return (
    <section id="clients" className="py-24 bg-ink border-b border-ink-divider relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
           className="text-center"
        >
          <SectionEyebrow className="mb-4">Partners</SectionEyebrow>
          <h2 className="text-4xl md:text-5xl font-heading text-paper tracking-tight">Trusted By</h2>
        </motion.div>
      </div>

      <LogoMarquee />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
               <div key={idx} className="p-8 rounded-lg bg-ink-elevated border border-ink-divider">
                  <p className="text-silver-muted text-lg italic mb-6">"{t.quote}"</p>
                  <p className="text-paper text-sm tracking-wider uppercase font-semibold">{t.author}</p>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}
