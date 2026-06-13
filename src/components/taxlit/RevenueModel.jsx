import { motion } from "framer-motion";
import { Laptop, Award, Users, TrendingUp, ShieldCheck } from "lucide-react";
import { revenueStreams } from "../../data/taxlitData";

function DynamicIcon({ name, className }) {
  if (name === "Laptop") return <Laptop className={className} />;
  if (name === "Award") return <Award className={className} />;
  if (name === "Users") return <Users className={className} />;
  if (name === "TrendingUp") return <TrendingUp className={className} />;
  return null;
}

export default function RevenueModel() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="revenue-model" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest bg-teal-400/10 px-4 py-1.5 rounded-full border border-teal-400/20">
            Roadmap for Scale
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            Future Roadmap for Scale
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Core education remains <span className="text-teal-400 font-semibold">100% free</span>. Future streams for platform sustainability and outreach operations include:
          </p>
        </motion.div>

        {/* 4 Icon Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {revenueStreams.map((stream, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 text-center flex flex-col items-center border border-white/5 shadow-xl relative group overflow-hidden hover:border-teal-500/35 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Subtle hover background highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-all duration-300">
                <DynamicIcon name={stream.icon} className="w-6 h-6" />
              </div>

              {/* Title */}
              <h4 className="font-heading font-bold text-textPrimary text-base mb-3 group-hover:text-glow transition-all duration-300">
                {stream.title}
              </h4>
              
              {/* Description */}
              <p className="text-textMuted text-xs font-light leading-relaxed">
                {stream.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-400/5 border border-teal-400/20 text-teal-400 text-xs font-medium mt-16 max-w-xl mx-auto"
        >
          <ShieldCheck className="w-4 h-4 text-teal-400 animate-pulse flex-shrink-0" />
          <span>Our primary commitment is public welfare. Free public campaigns will never be gated.</span>
        </motion.div>

      </div>
    </section>
  );
}
