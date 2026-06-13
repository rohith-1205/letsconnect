import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, Zap, BookOpen, Users, Check } from "lucide-react";

export default function ServiceToggle() {
  return (
    <div id="service-selector" className="w-full max-w-5xl mx-auto px-4 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        
        {/* Left Card: Financial Services */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden group flex flex-col justify-between text-left hover:border-primary/45"
        >
          {/* Subtle Glow Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-500" />

          <div>
            {/* Header / Badges */}
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                  <Briefcase className="w-5 h-5 text-textPrimary" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-textPrimary bg-primary/20 border border-primary/30 px-3.5 py-1.5 rounded-full">
                For Businesses & Startups
              </span>
            </div>

            {/* Typography */}
            <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-textPrimary mb-4 group-hover:text-glow transition-all duration-300">
              Financial Services
            </h3>
            <p className="text-textMuted text-sm md:text-base font-light mb-8 leading-relaxed">
              From GST filings and annual ITR submissions to trust incorporation and CMA reports. End-to-end regulatory compliance and professional business registration led by Vishal.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {[
                "100% Tax & GST Compliance",
                "Speedy Company & Trust Registration",
                "Expert Business Loan & CMA Support"
              ].map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-textPrimary text-sm font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Link */}
          <Link
            to="/business"
            className="w-full py-4 bg-gradient-hero text-textPrimary font-bold text-center rounded-2xl text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(108,63,238,0.2)] hover:shadow-[0_0_30px_rgba(108,63,238,0.55)] group-hover:scale-[1.01] transition-all duration-300 relative z-10"
          >
            Explore Financial Services →
          </Link>
        </motion.div>

        {/* Right Card: Training & Development */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden group flex flex-col justify-between text-left hover:border-accent/45"
        >
          {/* Subtle Glow Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-accent/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-500" />

          <div>
            {/* Header / Badges */}
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="flex gap-2">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="w-5 h-5 text-textPrimary" />
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-accent bg-accent/20 border border-accent/30 px-3.5 py-1.5 rounded-full">
                For Colleges & Professionals
              </span>
            </div>

            {/* Typography */}
            <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-textPrimary mb-4 group-hover:text-glow transition-all duration-300">
              Training & Development
            </h3>
            <p className="text-textMuted text-sm md:text-base font-light mb-8 leading-relaxed">
              Progressive student soft skills pathing and high-impact corporate workshops. Tailored bootcamps focusing on boardroom etiquette, communication, and placement preparation led by Padmaja L.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {[
                "Intensive Experiential Bootcamps",
                "Structured 4-Year progressive curriculum",
                "High Placement Readiness (PRS) score prep"
              ].map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-textPrimary text-sm font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Link */}
          <Link
            to="/training"
            className="w-full py-4 bg-accent hover:bg-accent/90 text-textPrimary font-bold text-center rounded-2xl text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.55)] group-hover:scale-[1.01] transition-all duration-300 relative z-10"
          >
            Explore Training Services →
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
