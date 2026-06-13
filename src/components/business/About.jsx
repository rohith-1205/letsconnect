import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { enginesContent } from "../../data/businessData";

export default function About() {
  const { engineOne } = enginesContent;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1638_1px,transparent_1px),linear-gradient(to_bottom,#1f1638_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            About Our Firm
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            Corporate Tax & Regulatory Strategy
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            We handle the complexities of business compliance so you can focus on scale. Strategic planning and legal protection for Indian businesses.
          </p>
        </motion.div>

        {/* Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Side text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-textPrimary mb-2">
              {engineOne.title}
            </h3>
            <p className="text-accent font-semibold text-sm mb-6 uppercase tracking-wider">
              {engineOne.leader}
            </p>
            <p className="text-textMuted text-base font-light mb-8 leading-relaxed">
              {engineOne.description} With years of expertise in tax structuring, corporate filings, auditing protocols, and credit arrangement (CMA) reports, we act as a dedicated compliance engine for startups, SMEs, and individual filers.
            </p>

            <div className="space-y-3">
              <div className="flex gap-3 items-center text-textPrimary text-sm font-semibold">
                <Check className="w-4 h-4 text-accent" />
                <span>100% Hassle-Free Filing & Compliance</span>
              </div>
              <div className="flex gap-3 items-center text-textPrimary text-sm font-semibold">
                <Check className="w-4 h-4 text-accent" />
                <span>Clear Advisory to Minimize Penalties</span>
              </div>
              <div className="flex gap-3 items-center text-textPrimary text-sm font-semibold">
                <Check className="w-4 h-4 text-accent" />
                <span>Strategic setup for Partnership Deeds, Trusts & MSMEs</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Categories Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {engineOne.categories.map((cat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all duration-300 group text-left"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-accent">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <h4 className="text-sm font-bold text-textPrimary group-hover:text-glow transition-all duration-300">
                    {cat.title}
                  </h4>
                </div>
                <p className="text-textMuted text-xs font-light leading-relaxed pl-11">
                  {cat.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
