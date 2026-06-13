import { motion } from "framer-motion";
import { ArrowDown, Briefcase, BookOpen, Award } from "lucide-react";

export default function HeroCommon() {
  const floatingBadges = [
    {
      text: "Financial Services",
      icon: Briefcase,
      color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400",
      position: "top-12 md:top-20 left-4 md:left-12"
    },
    {
      text: "Tax Education",
      icon: BookOpen,
      color: "from-teal-500/20 to-emerald-500/10 border-teal-500/30 text-teal-400",
      position: "top-1/3 right-4 md:right-16"
    },
    {
      text: "Soft Skills Training",
      icon: Award,
      color: "from-orange-500/20 to-red-500/10 border-orange-500/30 text-orange-400",
      position: "bottom-16 md:bottom-24 left-8 md:left-24"
    }
  ];

  const scrollToSelector = () => {
    const selectorElement = document.getElementById("the-gap");
    if (selectorElement) {
      selectorElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-darkBg">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-primary/20 via-indigo-950/20 to-teal-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-teal-600/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Grid Pattern mask overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161030_1px,transparent_1px),linear-gradient(to_bottom,#161030_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none" />

      {/* Floating Badges */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
        {floatingBadges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -12, 0]
              }}
              transition={{
                opacity: { duration: 0.8, delay: idx * 0.25 },
                scale: { duration: 0.8, delay: idx * 0.25 },
                y: {
                  duration: 6 + idx,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.4
                }
              }}
              className={`absolute ${badge.position} glass-card border p-4 md:p-5 rounded-2xl flex items-center gap-4 bg-gradient-to-br ${badge.color} shadow-2xl hover:scale-105 transition-all duration-300 pointer-events-auto`}
            >
              <div className="p-2.5 bg-white/5 rounded-xl">
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-left">
                <span className="text-textPrimary font-semibold font-heading text-sm md:text-base tracking-wide">
                  {badge.text}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 mb-8 hover:bg-white/5 transition-colors cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
          <span className="font-semibold text-[10px] md:text-xs tracking-widest uppercase text-textPrimary">
            Introducing Our Dual Ecosystem
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black font-heading text-textPrimary leading-tight tracking-tight mb-6"
        >
          LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-teal-400 text-glow">CONNECT</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-teal-400 mb-8 max-w-2xl leading-relaxed"
        >
          Bridging the Gap to Success
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-textMuted text-base sm:text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed"
        >
          Your Dual-Engine Partner for Business Excellence and Professional Growth. We merge corporate tax and regulatory frameworks with specialized career skills training.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4"
        >
          <button
            onClick={() => {
              const toggleElement = document.getElementById("service-selector");
              if (toggleElement) toggleElement.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-gradient-hero rounded-full font-bold hover:shadow-[0_0_30px_rgba(108,63,238,0.5)] hover:scale-105 transition-all duration-300 text-textPrimary text-sm sm:text-base"
          >
            Select a Service
          </button>
        </motion.div>
      </div>

      {/* Scroll Down arrow indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        onClick={scrollToSelector}
        className="absolute bottom-8 cursor-pointer flex flex-col items-center gap-1 z-20 text-textMuted hover:text-teal-400 transition-colors duration-300"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll Down</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
