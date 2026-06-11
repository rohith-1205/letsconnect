import { motion } from "framer-motion";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Info } from "lucide-react";
import { workloadData } from "../data/programData";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card py-2.5 px-4 rounded-xl border border-white/10 shadow-2xl bg-cardBg/90 backdrop-blur-md text-left">
        <span className="text-textPrimary font-semibold text-sm block">{payload[0].payload.year}</span>
        <span className="text-accent font-extrabold text-base mt-0.5 block">{payload[0].payload.label}</span>
      </div>
    );
  }
  return null;
};

export default function Workload() {
  return (
    <section id="workload" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Workload Distribution
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight">
            Training Days Per Academic Year
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Our modular training is scheduled strategically to ensure students absorb soft skills incrementally without academic load conflicts.
          </p>
        </motion.div>

        {/* Bar Chart Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full max-w-3xl mx-auto glass-card p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={workloadData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="workloadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#6C3FEE" />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="year" 
                stroke="#A89FC8" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                dy={10} 
              />
              <YAxis 
                stroke="#A89FC8" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                domain={[0, 10]}
                dx={-10}
              />
              <Tooltip 
                content={<CustomTooltip />} 
                cursor={{ fill: 'rgba(255, 255, 255, 0.03)', radius: 8 }} 
              />
              <Bar 
                dataKey="days" 
                fill="url(#workloadGradient)" 
                radius={[8, 8, 0, 0]} 
                barSize={45} 
                isAnimationActive={true}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>

          {/* Legend Details */}
          <div className="flex justify-center items-center gap-6 mt-6 border-t border-white/5 pt-6 text-xs text-textMuted font-light">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-accent" />
              <span>Orange: Max Acceleration</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded bg-primary" />
              <span>Violet: Root Foundations</span>
            </div>
          </div>
        </motion.div>

        {/* Annotation Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-start md:items-center gap-4 bg-primary/10 border border-primary/20 rounded-2xl py-4 px-6 max-w-xl mx-auto mt-10 shadow-lg"
        >
          <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 md:mt-0" />
          <p className="text-textPrimary text-sm font-medium leading-relaxed">
            <span className="text-accent font-bold">Note:</span> Foundational years are intensive; application years are focused.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
