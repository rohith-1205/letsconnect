import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { usp, differentiators } from "../../data/taxlitData";

export default function USP() {
  return (
    <section id="usp" className="py-24 relative overflow-hidden bg-surfaceBg/10">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Sparkle badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-teal-500/25 mb-8 text-teal-400 font-semibold text-xs tracking-wider uppercase"
        >
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>Our Unique Differentiator</span>
        </motion.div>

        {/* Large Pull Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-textPrimary leading-snug tracking-tight text-center italic relative">
            <span className="absolute -top-8 -left-4 text-7xl text-teal-500/20 font-serif">“</span>
            {usp}
            <span className="absolute -bottom-16 right-4 text-7xl text-teal-500/20 font-serif">”</span>
          </blockquote>
        </motion.div>

        {/* Teal separator line */}
        <div className="h-0.5 w-16 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-12 rounded-full" />

        {/* Differentiator pills list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
        >
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-heading font-semibold text-xs tracking-wider uppercase shadow-md hover:border-teal-500/40 hover:bg-teal-500/15 transition-all duration-300 transform hover:-translate-y-0.5 cursor-default"
            >
              {diff}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
