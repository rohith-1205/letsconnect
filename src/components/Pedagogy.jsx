import { motion } from "framer-motion";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { pedagogyData } from "../data/programData";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="glass-card p-4 rounded-xl border border-white/10 shadow-2xl text-left max-w-xs bg-cardBg/90 backdrop-blur-md">
        <p className="font-heading font-bold text-textPrimary text-sm">{data.name}</p>
        <p className="text-accent font-extrabold text-xl my-1">{data.value}%</p>
        <p className="text-textMuted text-xs leading-relaxed">{data.description}</p>
      </div>
    );
  }
  return null;
};

export default function Pedagogy() {
  return (
    <section id="pedagogy" className="py-24 relative overflow-hidden bg-surfaceBg/50">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Pedagogy Split
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight">
            Our Teaching Philosophy
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            We believe in learning by doing. The curriculum is balanced to focus heavily on experiential exercises rather than dry lectures.
          </p>
        </motion.div>

        {/* Donut Chart Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mx-auto aspect-square flex items-center justify-center relative bg-cardBg/25 border border-white/5 rounded-full p-4 shadow-3xl"
        >
          {/* Centered label */}
          <div className="absolute flex flex-col items-center justify-center text-center z-10 pointer-events-none">
            <span className="text-textMuted text-xs font-semibold uppercase tracking-widest">70/20/10</span>
            <span className="text-2xl sm:text-3xl font-extrabold font-heading text-textPrimary mt-1">Rule</span>
            <span className="text-accent text-xs mt-1 font-medium">Experiential Focus</span>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pedagogyData}
                cx="50%"
                cy="50%"
                innerRadius="65%"
                outerRadius="85%"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
                animationDuration={1500}
                animationBegin={100}
              >
                {pedagogyData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
        >
          {pedagogyData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl glass-card border-white/5 hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/[0.01] group-hover:bg-white/[0.03] transition-colors" />
              <div className="flex items-center gap-2 mb-3 z-10">
                <span className="w-3.5 h-3.5 rounded-full shadow-lg" style={{ backgroundColor: item.color }} />
                <span className="font-heading font-bold text-textPrimary text-sm">{item.name}</span>
              </div>
              <span className="text-3xl font-extrabold text-gradient z-10">{item.value}%</span>
              <span className="text-textMuted text-xs mt-2 text-center font-light z-10 leading-relaxed max-w-[200px]">
                {item.description}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
