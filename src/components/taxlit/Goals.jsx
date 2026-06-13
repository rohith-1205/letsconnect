import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";
import { strategicGoals } from "../../data/taxlitData";

function AnimatedCounter({ value, duration = 1.5 }) {
  const parsedValue = parseInt(value, 10);
  const isValueNan = isNaN(parsedValue);
  const [count, setCount] = useState(() => (isValueNan ? value : 0));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || isValueNan) return;

    const end = parsedValue;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [parsedValue, isValueNan, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function Goals() {
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

  // Milestone values for goals
  const milestones = [
    { value: 1, suffix: "M+", label: "PAN Holders Target" },
    { value: 200, suffix: "+", label: "Free Webinars" },
    { value: 3, suffix: " Sectors", label: "Partnership Framework" },
    { value: 100, suffix: "%", label: "AI-Chatbot Coverage" }
  ];

  return (
    <section id="goals" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs text-teal-400 font-semibold tracking-wider bg-teal-500/10 border border-teal-500/20 rounded-full py-2 px-4 mb-6 mx-auto w-fit">
            <Award className="w-4 h-4" />
            <span>1–3 Year Roadmap</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-2 mb-6 leading-tight text-textPrimary">
            Strategic Milestones
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Our progressive path to expanding financial literacy and legal tax compliance across India.
          </p>
        </motion.div>

        {/* Timeline Desktop Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:grid grid-cols-4 gap-8 relative mb-20"
        >
          {/* Horizontal connecting line behind circles */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 opacity-20 -z-10" />

          {strategicGoals.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center text-center group"
            >
              {/* Step Circle */}
              <div className="w-20 h-20 rounded-full bg-cardBg border border-white/10 flex items-center justify-center font-heading font-extrabold text-2xl text-textPrimary relative z-10 shadow-2xl group-hover:border-teal-400 group-hover:shadow-[0_0_25px_rgba(20,184,166,0.35)] transition-all duration-300 transform group-hover:-translate-y-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-black">
                  {step.id}
                </span>
              </div>

              {/* Counter Display */}
              <div className="text-2xl font-black font-heading text-teal-400 mt-6 mb-1">
                <AnimatedCounter value={milestones[index].value} />
                {milestones[index].suffix}
              </div>
              <div className="text-[10px] text-textMuted uppercase tracking-wider font-medium mb-3">
                {milestones[index].label}
              </div>

              {/* Description */}
              <p className="text-textMuted text-sm leading-relaxed font-light px-2">
                {step.goal}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Mobile View */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex md:hidden flex-col gap-12 relative pl-8"
        >
          {/* Vertical connecting line */}
          <div className="absolute left-[20px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-teal-500 via-emerald-500 to-cyan-500 opacity-20" />

          {strategicGoals.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative flex flex-col gap-2 group text-left"
            >
              {/* Node Circle */}
              <div className="absolute -left-12 top-0 w-10 h-10 rounded-full bg-cardBg border border-white/10 flex items-center justify-center font-heading font-extrabold text-base text-textPrimary z-10 shadow-xl group-hover:border-teal-400 transition-colors duration-300">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 font-extrabold">
                  {step.id}
                </span>
              </div>

              {/* Title & Counter */}
              <h3 className="font-heading font-bold text-lg text-textPrimary group-hover:text-teal-400 transition-colors duration-300 flex items-center gap-2">
                Goal {step.id} 
                <span className="text-xs text-teal-400 font-normal bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                  <AnimatedCounter value={milestones[index].value} />{milestones[index].suffix}
                </span>
              </h3>
              
              {/* Description */}
              <p className="text-textMuted text-sm leading-relaxed font-light">
                {step.goal}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
