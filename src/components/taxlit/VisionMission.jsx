import { motion } from "framer-motion";
import { Eye, Shield, Globe, CheckCircle, Target, Compass, ArrowRight } from "lucide-react";
import { vision, missions, coreValues } from "../../data/taxlitData";

function DynamicIcon({ name, className }) {
  if (name === "Eye") return <Eye className={className} />;
  if (name === "Shield") return <Shield className={className} />;
  if (name === "Globe") return <Globe className={className} />;
  if (name === "CheckCircle") return <CheckCircle className={className} />;
  return null;
}

export default function VisionMission() {
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
    <section id="vision" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

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
            Vision & Values
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            Our Purpose & Compass
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Empowering Indian citizens with tax knowledge that ensures compliance, eliminates fear, and accelerates national growth.
          </p>
        </motion.div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-teal-500/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-bl-full pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-8 group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-textPrimary mb-4">
              Our Vision
            </h3>
            <p className="text-textMuted text-base md:text-lg leading-relaxed font-light text-left">
              {vision}
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-105 transition-transform duration-300">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-textPrimary mb-4">
              Our Mission
            </h3>
            <ul className="space-y-4 text-left">
              {missions.map((mission, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-textMuted font-light">
                  <ArrowRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Core Values Headline */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-textPrimary">
            Our Core Values
          </h3>
        </div>

        {/* 4 Animated Value Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {coreValues.map((val, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card rounded-2xl p-6 text-center flex flex-col items-center border border-white/5 shadow-xl relative group overflow-hidden hover:border-teal-500/30 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
                <DynamicIcon name={val.icon} className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-textPrimary text-base mb-2 group-hover:text-glow transition-all duration-300">
                {val.title}
              </h4>
              <p className="text-textMuted text-xs font-light leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
