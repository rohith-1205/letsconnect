import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function TheGap() {
  const bulletPoints = [
    "The distance between a brilliant idea and the compliance to protect it.",
    "The space between a university degree and boardroom confidence.",
    "Finance and Personal Growth treated as separate — they are not.",
    "At Let's Connect, we believe they are two sides of the same coin."
  ];

  return (
    <section id="the-gap" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Grid Pattern mask overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1638_1px,transparent_1px),linear-gradient(to_bottom,#1f1638_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-primary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest bg-teal-400/10 px-4 py-1.5 rounded-full border border-teal-400/20">
            Our Core Thesis
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            The "Gap" in the Modern Journey
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Professionals and corporate systems suffer when operational strategy and human potential are decoupled.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (60%) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left"
          >
            <p className="text-textMuted text-lg font-light mb-8 leading-relaxed">
              Every day, aspiring founders launch ideas that stumble on legal framework details, while corporate hires with high technical marks struggle due to communication barriers. These are not separate hurdles; they are symptoms of a fragmented system.
            </p>

            <ul className="space-y-5">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-textPrimary text-base md:text-lg font-light leading-normal">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/5 shadow-2xl relative w-full max-w-md aspect-[4/3] flex flex-col justify-between overflow-hidden group hover:border-teal-500/30 transition-all duration-300">
              {/* Card gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-teal-500/10 opacity-60 pointer-events-none" />
              
              {/* Interactive glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20">
                    Synergy Map
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                </div>

                <div className="space-y-4 my-6 text-left">
                  <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                    <span className="text-xs text-textMuted font-medium">Compliance & Taxes</span>
                    <div className="h-1.5 w-3/4 bg-teal-400/80 rounded-full" />
                  </div>
                  
                  {/* The Bridge Symbol */}
                  <div className="flex justify-center my-1">
                    <div className="h-8 w-0.5 border-l border-dashed border-teal-400/40 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-teal-400 bg-darkBg px-1.5 py-0.5 rounded border border-white/10 font-bold uppercase tracking-wider scale-90">
                        Bridge
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                    <span className="text-xs text-textMuted font-medium">Competence & Skills</span>
                    <div className="h-1.5 w-5/6 bg-primary/80 rounded-full" />
                  </div>
                </div>

                <div className="text-xs text-textMuted font-light text-center border-t border-white/5 pt-4">
                  "Let's Connect aligns both engines seamlessly."
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
