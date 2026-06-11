import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { curriculumData } from "../data/programData";

function DynamicIcon({ name, className }) {
  const IconComponent = LucideIcons[name];
  if (!IconComponent) {
    return <LucideIcons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
}

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState(1);

  const activeData = curriculumData.find((item) => item.year === activeTab);
  const isTwoCards = activeData.topics.length === 2;

  return (
    <section id="curriculum" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Decorative Blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Curriculum
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight">
            The 4-Year Journey
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Each academic year focuses on distinct soft skill modules, progressive bootcamps, and real-world placement readiness evaluations.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap md:flex-nowrap gap-2 bg-cardBg/30 p-2 rounded-full border border-white/5 shadow-2xl relative">
            {curriculumData.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveTab(item.year)}
                className={`relative px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300 font-heading z-10 ${
                  activeTab === item.year
                    ? "text-textPrimary"
                    : "text-textMuted hover:text-textPrimary"
                }`}
              >
                {/* Smooth Sliding Highlight */}
                {activeTab === item.year && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-primary rounded-full border border-primary/20 -z-10 shadow-lg"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                Year {item.year}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {/* Title & Description of active year */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-textPrimary mb-3">
                {activeData.title}
              </h3>
              <p className="text-textMuted text-sm md:text-base font-light">
                {activeData.description}
              </p>
            </div>

            {/* Topic Cards Grid */}
            <div
              className={`grid gap-8 ${
                isTwoCards
                  ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
                  : "grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"
              }`}
            >
              {activeData.topics.map((topic, index) => (
                <motion.div
                  key={index}
                  className="glass-card rounded-2xl p-8 border border-white/5 relative group overflow-hidden flex flex-col justify-between"
                  whileHover={{ y: -5, borderColor: "rgba(108, 63, 238, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Hover Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                        <DynamicIcon name={topic.icon} className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="text-lg font-bold font-heading text-textPrimary group-hover:text-glow transition-all duration-300">
                        {topic.title}
                      </h4>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {topic.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-2.5 text-sm text-textMuted font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Border Line */}
                  <div className="w-full h-0.5 bg-gradient-to-r from-primary/10 to-accent/10 mt-8 rounded-full group-hover:from-primary/45 group-hover:to-accent/45 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
