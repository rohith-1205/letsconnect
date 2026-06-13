import { motion } from "framer-motion";
import { BookOpen, RefreshCw, Flame, CheckCircle2, ChevronRight } from "lucide-react";

export default function TaxHero() {
  // Floating pills data tailored to Tax Literacy
  const floatPills = [
    { text: "CGST Act", icon: RefreshCw, color: "from-teal-500/20 to-teal-500/10 border-teal-500/30" },
    { text: "Income Tax Act", icon: Flame, color: "from-emerald-500/20 to-emerald-500/10 border-emerald-500/30" },
    { text: "TDS Compliance", icon: CheckCircle2, color: "from-cyan-500/20 to-cyan-500/10 border-cyan-500/30" },
    { text: "Free Webinars", icon: BookOpen, color: "from-teal-400/20 to-teal-400/10 border-teal-400/30" }
  ];

  const handleJoinMovement = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-darkBg">
      {/* Teal background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/20 to-emerald-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern mask overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#102028_1px,transparent_1px),linear-gradient(to_bottom,#102028_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left text column */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-teal-500/20 mb-6 text-sm text-textPrimary hover:bg-white/5 transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-teal-400 animate-bounce" />
            <span className="font-semibold text-xs tracking-wider uppercase text-teal-400">100% Free Public Education Initiative</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-textPrimary leading-tight tracking-tight mb-6"
          >
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 text-glow">CONNECT</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-2xl sm:text-3xl font-bold font-heading text-teal-400 mb-6 leading-tight"
          >
            Connecting Tax Literacy with Every Indian
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-textMuted text-base sm:text-lg font-light mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            India's first awareness-driven platform using social media and free education to fight tax ignorance — without charging a single rupee.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={handleJoinMovement}
              className="w-full sm:w-auto px-8 py-4 bg-teal-500 text-darkBg font-bold rounded-full hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1"
            >
              Join the Movement <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const visionSection = document.getElementById("vision");
                if (visionSection) visionSection.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-bold transition-all duration-300 text-textPrimary"
            >
              Read Our Vision
            </button>
          </motion.div>
        </div>

        {/* Right floating stat pills column */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center relative h-[350px] lg:h-[400px]">
          {floatPills.map((pill, index) => {
            const positions = [
              "top-6 lg:top-8 left-6 lg:left-0",
              "top-1/3 -translate-y-1/2 right-4 lg:right-0",
              "bottom-24 lg:bottom-28 left-4 lg:left-12",
              "bottom-6 lg:bottom-8 right-6 lg:right-16"
            ];
            
            const Icon = pill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -12, 0] 
                }}
                transition={{
                  opacity: { duration: 0.6, delay: index * 0.15 },
                  scale: { duration: 0.6, delay: index * 0.15 },
                  y: {
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }
                }}
                className={`absolute ${positions[index]} glass-card border p-4 rounded-2xl flex items-center gap-3.5 bg-gradient-to-br ${pill.color} shadow-2xl hover:scale-105 hover:border-teal-500/40 transition-all duration-300 max-w-xs`}
              >
                <div className="p-2.5 bg-white/5 rounded-xl text-teal-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-textPrimary font-semibold font-heading text-sm">{pill.text}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
