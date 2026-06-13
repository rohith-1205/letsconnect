import { motion, AnimatePresence } from "framer-motion";
import { Zap, Play, X, RefreshCw, Flame, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function DualEngineHero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Floating pill data
  const floatPills = [
    { text: "Financial Services", icon: RefreshCw, color: "from-primary/20 to-primary/10 border-primary/30" },
    { text: "Training & Development", icon: Flame, color: "from-accent/20 to-accent/10 border-accent/30" },
    { text: "Bridging the Gap", icon: CheckCircle2, color: "from-purple-500/20 to-purple-500/10 border-purple-500/30" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-darkBg">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary to-accent opacity-20 rounded-full blur-[160px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-600/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern mask overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#161030_1px,transparent_1px),linear-gradient(to_bottom,#161030_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left text column */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 mb-6 text-sm text-textPrimary hover:bg-white/5 transition-colors cursor-pointer"
          >
            <Zap className="w-4 h-4 text-accent animate-bounce" />
            <span className="font-semibold text-xs tracking-wider uppercase">Dual-Engine Business Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-textPrimary leading-tight tracking-tight mb-6"
          >
            LET'S <span className="text-gradient">CONNECT</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-2xl sm:text-3xl font-bold font-heading text-accent mb-6 leading-tight"
          >
            Bridging the Gap to Success
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-textMuted text-lg sm:text-xl font-light mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Your Dual-Engine Partner for Business Excellence and Professional Growth. We align corporate regulatory compliance with career development soft skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-hero rounded-full font-bold hover:shadow-[0_0_30px_rgba(108,63,238,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 text-center text-textPrimary"
            >
              Explore Our Services
            </a>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Play className="w-4 h-4 text-accent fill-accent group-hover:scale-110 transition-transform" />
              Watch Overview
            </button>
          </motion.div>
        </div>

        {/* Right floating stat pills column */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center relative h-[350px] lg:h-[400px]">
          {floatPills.map((pill, index) => {
            const positions = [
              "top-6 lg:top-12 left-6 lg:left-0",
              "top-1/2 -translate-y-1/2 right-4 lg:right-0",
              "bottom-6 lg:bottom-12 left-4 lg:left-12"
            ];
            
            const Icon = pill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -15, 0] 
                }}
                transition={{
                  opacity: { duration: 0.6, delay: index * 0.2 },
                  scale: { duration: 0.6, delay: index * 0.2 },
                  y: {
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }
                }}
                className={`absolute ${positions[index]} glass-card border p-5 rounded-2xl flex items-center gap-4 bg-gradient-to-br ${pill.color} shadow-2xl hover:scale-105 hover:border-white/20 transition-all duration-300 max-w-xs`}
              >
                <div className="p-3 bg-white/5 rounded-xl">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <div className="text-textPrimary font-semibold font-heading text-base">{pill.text.split(" ")[0]}</div>
                  <div className="text-textMuted text-xs font-light">{pill.text.split(" ").slice(1).join(" ")}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-surfaceBg"
            >
              <div className="p-4 border-b border-white/5 flex justify-between items-center bg-darkBg/50">
                <span className="font-heading font-semibold text-textPrimary flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Let's Connect - Integrated Services Overview
                </span>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors text-textMuted hover:text-textPrimary"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center border border-primary/40 mb-4 animate-pulse">
                  <Zap className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-textPrimary mb-2">
                  Bridging compliance and skill development
                </h3>
                <p className="text-textMuted text-sm max-w-md">
                  Discover how our Dual-Engine ecosystem enables startups to handle their GST returns while training their employees in workplace leadership.
                </p>
                <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 text-xs text-textMuted bg-darkBg/60 py-2 px-4 rounded-lg">
                  <Play className="w-4 h-4 text-accent fill-accent" />
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-accent" />
                  </div>
                  <span>01:15 / 04:30</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
