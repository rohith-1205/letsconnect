import { motion } from "framer-motion";
import ServiceToggle from "../ServiceToggle";

export default function TwoEngines() {
  return (
    <section id="two-engines" className="py-24 relative overflow-hidden bg-surfaceBg/10">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/5 via-indigo-950/10 to-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Choose Your Portal
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            Two Verticals, One Brand
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-indigo-500 to-teal-500 mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            We operate twin initiatives designed to bridge key skill and financial gaps in the modern Indian landscape.
          </p>
        </motion.div>

        {/* Render the ServiceToggle Switcher */}
        <ServiceToggle />
      </div>
    </section>
  );
}
