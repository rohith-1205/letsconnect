import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { taglines } from "../../data/taxlitData";

export default function Taglines() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="taglines" className="py-24 relative overflow-hidden bg-surfaceBg/10">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest bg-teal-400/10 px-4 py-1.5 rounded-full border border-teal-400/20">
            Our Voice
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            Core Messaging
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8 rounded-full" />
        </motion.div>

        {/* Tagline Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {taglines.map((tag, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 text-left border-l-4 border-l-teal-400 border-t-white/5 border-r-white/5 border-b-white/5 shadow-xl relative group overflow-hidden flex flex-col justify-between hover:border-teal-500/35 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex-1 flex gap-4 items-start relative z-10">
                <Quote className="w-5 h-5 text-teal-500/30 flex-shrink-0 rotate-180" />
                <p className="text-textPrimary text-base font-semibold leading-relaxed font-heading mt-1">
                  {tag}
                </p>
              </div>

              <div className="mt-6 text-[10px] text-textMuted uppercase tracking-widest font-semibold flex items-center gap-1.5 border-t border-white/5 pt-3">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                <span>Let's Connect Network</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
