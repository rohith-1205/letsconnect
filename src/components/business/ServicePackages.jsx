import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { servicePackages } from "../../data/businessData";

export default function ServicePackages() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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

  const colorMap = {
    primary: "border-primary/20 hover:border-primary/50 text-primary bg-primary/10 hover:shadow-[0_0_30px_rgba(108,63,238,0.2)]",
    accent: "border-accent/20 hover:border-accent/50 text-accent bg-accent/10 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]",
    purple: "border-purple-500/20 hover:border-purple-500/50 text-purple-400 bg-purple-500/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    green: "border-emerald-500/20 hover:border-emerald-500/50 text-emerald-400 bg-emerald-500/10 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
  };

  return (
    <section id="packages" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Decorative Blob */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            Service Packages
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Integrated compliance registration and capability training bundled for maximum value.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {servicePackages.map((pkg, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`glass-card rounded-3xl p-6 md:p-8 border flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 ${colorMap[pkg.accent]}`}
            >
              <div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-textMuted mb-2 block">
                  {pkg.tagline}
                </span>
                <h3 className="text-xl font-bold font-heading text-textPrimary mb-4 leading-tight">
                  {pkg.name}
                </h3>
                
                <div className="text-2xl font-black font-heading text-textPrimary mb-6">
                  {pkg.price}
                </div>

                <div className="w-full h-px bg-white/5 mb-6" />

                <ul className="space-y-4 mb-8 text-left">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-textMuted font-light">
                      <Check className="w-4 h-4 text-textPrimary flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-textPrimary font-bold text-center rounded-xl text-xs uppercase tracking-wider transition-all duration-300"
              >
                Inquire Now
              </a>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
