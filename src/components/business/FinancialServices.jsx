import { motion } from "framer-motion";
import { FileText, Shield, Briefcase, Check } from "lucide-react";
import { financialServicesList } from "../../data/businessData";

export default function FinancialServices() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const subSections = [
    {
      title: "Tax & GST Care",
      desc: "Comprehensive filing and regulatory solutions to avoid penalties.",
      icon: Shield
    },
    {
      title: "Business Setup & Filings",
      desc: "All initial licenses and registrations sorted quickly and securely.",
      icon: Briefcase
    },
    {
      title: "Operations & Loan Support",
      desc: "Accurate financial reports and project plans to secure capital.",
      icon: FileText
    }
  ];

  return (
    <section id="financial-services" className="py-24 relative overflow-hidden bg-surfaceBg/10">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Engine One
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            Financial Services
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Led by <span className="text-accent font-semibold">Vishal</span>, Founder & Business Tax Consultant. Professional corporate governance, compliance, and capital planning.
          </p>
        </motion.div>

        {/* Subsections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
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

        {/* Catalog Subheading */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold font-heading text-textPrimary mb-3">
            Full Compliance Catalog
          </h3>
          <p className="text-textMuted text-sm font-light">
            Providing full-spectrum compliance solutions to over 100+ businesses and individual clients.
          </p>
        </div>

        {/* 14 Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto"
        >
          {financialServicesList.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-card rounded-xl p-5 border border-white/5 flex gap-3 text-left items-start hover:border-accent/30 transition-all duration-300 group"
              whileHover={{ y: -3 }}
            >
              <div className="w-6 h-6 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-0.5 group-hover:bg-accent group-hover:text-darkBg transition-all duration-300">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-textPrimary text-sm mb-1 group-hover:text-glow transition-all duration-300">
                  {service.name}
                </h4>
                <p className="text-textMuted text-[11px] font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
