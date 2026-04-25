import { motion } from "framer-motion";

export default function LogoMarquee() {
  const clients = ["CONVERSE", "ASICS", "GAP", "CONVERSE", "ASICS", "GAP", "CONVERSE", "ASICS", "GAP"];
  
  return (
    <div className="flex overflow-hidden relative border-y border-ink-divider py-12 bg-ink-raised/50">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex whitespace-nowrap"
      >
        {clients.map((client, idx) => (
          <div key={idx} className="mx-12 md:mx-24 font-heading font-black text-4xl md:text-6xl text-silver-dim/20 tracking-tighter">
            {client}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
