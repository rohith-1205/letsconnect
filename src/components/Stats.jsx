import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutStats } from "../data/programData";

export function AnimatedCounter({ value, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const end = parseInt(value, 10);
    if (isNaN(end)) {
      setCount(value);
      return;
    }

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
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
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
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto px-4 mt-12"
    >
      {aboutStats.map((stat, idx) => (
        <motion.div
          key={idx}
          variants={cardVariants}
          className="glass-card rounded-2xl p-8 text-center flex flex-col items-center justify-center border border-white/5 shadow-2xl relative group overflow-hidden"
          whileHover={{ y: -5, borderColor: "rgba(108, 63, 238, 0.3)" }}
        >
          {/* Subtle Glow Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-gradient tracking-tight z-10">
            <AnimatedCounter value={stat.value} />
            {stat.suffix}
          </div>
          <div className="mt-3 text-textMuted text-sm md:text-base font-medium uppercase tracking-wider z-10">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
