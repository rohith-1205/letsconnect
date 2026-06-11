import { motion } from "framer-motion";
import { howItWorksSteps } from "../data/programData";

export default function HowItWorks() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-surfaceBg/20">
      {/* Background pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Process Flow
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight">
            How It Works
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            An organized, systematic, and interactive bootcamp journey designed to elevate your professional quotient year after year.
          </p>
        </motion.div>

        {/* Steps Container */}
        {/* Desktop View: Horizontal Stepper */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-4 gap-8 relative"
        >
          {/* Horizontal connecting line behind circles */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-purple-500 to-accent opacity-20 -z-10" />

          {howItWorksSteps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Step Circle */}
              <div className="w-20 h-20 rounded-full bg-cardBg border border-white/10 flex items-center justify-center font-heading font-extrabold text-2xl text-textPrimary relative z-10 shadow-2xl group-hover:border-accent group-hover:shadow-[0_0_25px_rgba(249,115,22,0.35)] transition-all duration-300 transform group-hover:-translate-y-1">
                <span className="text-gradient font-black">{step.step}</span>
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-lg text-textPrimary mt-6 mb-3 group-hover:text-accent transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-textMuted text-sm leading-relaxed font-light px-2">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View: Vertical Timeline */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex md:hidden flex-col gap-10 relative pl-8"
        >
          {/* Vertical connecting line */}
          <div className="absolute left-[20px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-accent opacity-20" />

          {howItWorksSteps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative flex flex-col gap-2 group text-left"
            >
              {/* Node Circle */}
              <div className="absolute -left-12 top-0 w-10 h-10 rounded-full bg-cardBg border border-white/10 flex items-center justify-center font-heading font-extrabold text-base text-textPrimary z-10 shadow-xl group-hover:border-accent transition-colors duration-300">
                <span className="text-gradient font-extrabold">{step.step}</span>
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-lg text-textPrimary group-hover:text-accent transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-textMuted text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
