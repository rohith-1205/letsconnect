import { motion } from "framer-motion";
import { sealOfTrustData } from "../../data/businessData";

export default function SealOfTrust() {
  const { title, subtitle, headers, rows } = sealOfTrustData;

  return (
    <section id="seal-of-trust" className="py-24 relative overflow-hidden bg-surfaceBg/10">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

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
            Comparison Framework
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            {title}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            {subtitle}
          </p>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="w-full overflow-x-auto max-w-5xl mx-auto glass-card rounded-3xl border border-white/5 shadow-2xl"
        >
          <table className="w-full min-w-[700px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className={`p-6 text-sm font-heading font-extrabold text-textPrimary uppercase tracking-wider ${
                      idx === 0 ? "w-[30%]" : "w-[35%]"
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300"
                >
                  <td className="p-6 font-heading font-bold text-sm text-accent">
                    {row.feature}
                  </td>
                  <td className="p-6 text-xs md:text-sm text-textPrimary font-light leading-relaxed">
                    {row.business}
                  </td>
                  <td className="p-6 text-xs md:text-sm text-textMuted font-light leading-relaxed">
                    {row.individual}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
}
