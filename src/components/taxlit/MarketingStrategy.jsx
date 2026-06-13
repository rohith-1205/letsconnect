import { motion } from "framer-motion";
import { Share2, FileText, BarChart3, Handshake } from "lucide-react";
import { platforms, contentFormats, engagementTools } from "../../data/taxlitData";

export default function MarketingStrategy() {
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
    <section id="strategy" className="py-24 relative overflow-hidden bg-surfaceBg/10">
      {/* Decorative Blob */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

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
            Outreach Channels
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            Marketing & Strategy
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Leveraging visual social media formats and gamified community engagement to make tax laws relatable.
          </p>
        </motion.div>

        {/* 3-Column Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
        >
          {/* Card 1: Platforms */}
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-2xl p-8 border border-white/5 relative group overflow-hidden flex flex-col hover:border-teal-500/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-textPrimary mb-4 group-hover:text-glow transition-all duration-300">
              Awareness Platforms
            </h3>
            <ul className="space-y-3.5 text-left">
              {platforms.map((plat, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-textMuted font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                  <span>{plat}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Content Formats */}
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-2xl p-8 border border-white/5 relative group overflow-hidden flex flex-col hover:border-teal-500/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-textPrimary mb-4 group-hover:text-glow transition-all duration-300">
              Content Formats
            </h3>
            <ul className="space-y-3.5 text-left">
              {contentFormats.map((fmt, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-textMuted font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                  <span>{fmt}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Engagement */}
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-2xl p-8 border border-white/5 relative group overflow-hidden flex flex-col hover:border-teal-500/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-textPrimary mb-4 group-hover:text-glow transition-all duration-300">
              Engagement Methods
            </h3>
            <ul className="space-y-3.5 text-left">
              {engagementTools.map((tool, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-textMuted font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Collaborations Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card max-w-4xl mx-auto rounded-2xl p-6 border border-teal-500/20 flex flex-col sm:flex-row items-center gap-4 text-left shadow-lg"
        >
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
            <Handshake className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-textPrimary text-sm mb-1">Collaborations & Joint Outreach</h4>
            <p className="text-textMuted text-xs font-light leading-relaxed">
              Partnering with Chartered Accountant (CA) communities, Legal Influencers, and supporting government awareness campaigns like <span className="text-teal-400 font-semibold">Sabka Saath Sabka Vikas</span>.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
