import { motion } from "framer-motion";
import { MessageSquare, Users, Laptop } from "lucide-react";

// Import existing training components
import Curriculum from "../Curriculum";
import Pedagogy from "../Pedagogy";
import Workload from "../Workload";
import Assessment from "../Assessment";
import Testimonials from "../Testimonials";

export default function TrainingServices() {
  const subSections = [
    {
      title: "Communication Mastery",
      desc: "Confidence drills, professional etiquette, body language cues, and structured public speaking coaching.",
      icon: MessageSquare
    },
    {
      title: "Career & Leadership Growth",
      desc: "Collaborative dynamics, conflict resolution playbook, emotional intelligence, and boardroom behavior.",
      icon: Users
    },
    {
      title: "Tech Adaptation",
      desc: "ATS-friendly resume styling, portfolio passport building, elevator pitch creation, and mock HR/Tech drills.",
      icon: Laptop
    }
  ];

  return (
    <section id="training-services" className="relative overflow-hidden bg-darkBg">
      {/* Decorative Blob */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Intro */}
      <div className="max-w-6xl mx-auto px-6 pt-24 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Engine Two
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            Training & Development
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Led by <span className="text-accent font-semibold">Padmaja L</span>, Co-Founder & HR Tech Consultant. Progressive pathway designed to transform academic competence into boardroom excellence.
          </p>
        </motion.div>

        {/* 3 Core Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
          {subSections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card rounded-2xl p-6 border border-white/5 flex gap-4 items-start text-left hover:border-primary/25 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-accent flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-textPrimary text-base mb-1">{sec.title}</h4>
                  <p className="text-textMuted text-xs font-light leading-relaxed">{sec.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Embed the original detailed soft skills training sections */}
      <Curriculum />
      <Pedagogy />
      <Workload />
      <Assessment />
      <Testimonials />
    </section>
  );
}
