import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { assessmentCards } from "../data/programData";

function DynamicIcon({ name, className }) {
  const IconComponent = LucideIcons[name];
  if (!IconComponent) {
    return <LucideIcons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
}

export default function Assessment() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="assessment" className="py-24 relative overflow-hidden bg-surfaceBg/40">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Graduation Criteria
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight">
            How You Graduate
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Graduation from the program requires meeting clear targets across attendance, career portfolio items, and mock interviews.
          </p>
        </motion.div>

        {/* 3 cards side by side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {assessmentCards.map((card, idx) => {
            // Give different cards different glow highlights on hover
            const borderColors = [
              "group-hover:border-primary/40 group-hover:shadow-[0_15px_35px_rgba(108,63,238,0.25)]",
              "group-hover:border-accent/40 group-hover:shadow-[0_15px_35px_rgba(249,115,22,0.2)]",
              "group-hover:border-purple-400/40 group-hover:shadow-[0_15px_35px_rgba(155,89,245,0.2)]"
            ];
            const iconWrappers = [
              "bg-primary/15 border-primary/30 text-primary",
              "bg-accent/15 border-accent/30 text-accent",
              "bg-purple-500/15 border-purple-500/30 text-purple-400"
            ];

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`glass-card rounded-3xl p-8 border border-white/5 relative group transition-all duration-500 overflow-hidden flex flex-col justify-between items-start ${borderColors[idx]} hover:-translate-y-2.5`}
              >
                {/* Background light gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] via-transparent to-transparent group-hover:from-white/[0.03] transition-all duration-500" />
                
                <div className="w-full">
                  {/* Glowing Node Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-8 group-hover:scale-110 transition-transform duration-300 ${iconWrappers[idx]}`}>
                    <DynamicIcon name={card.icon} className="w-7 h-7" />
                  </div>

                  {/* Heading */}
                  <h3 className="font-heading font-bold text-xl text-textPrimary mb-4 group-hover:text-glow transition-all duration-300">
                    {card.title}
                  </h3>

                  {/* Text */}
                  <p className="text-textMuted text-sm md:text-base leading-relaxed font-light mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom arrow metric */}
                <div className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-1.5 mt-auto group-hover:translate-x-1 transition-transform">
                  <span>Requirement Core</span>
                  <LucideIcons.ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
