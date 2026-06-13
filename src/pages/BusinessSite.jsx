import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";

// Import Financial Services components
import DualEngineHero from "../components/business/DualEngineHero";
import About from "../components/business/About";
import FinancialServices from "../components/business/FinancialServices";
import SealOfTrust from "../components/business/SealOfTrust";
import ServicePackages from "../components/business/ServicePackages";
import HowItWorks from "../components/business/HowItWorks";
import ContactBusiness from "../components/business/ContactBusiness";

// Import Tax Literacy components
import VisionMission from "../components/taxlit/VisionMission";
import USP from "../components/taxlit/USP";
import Goals from "../components/taxlit/Goals";
import MarketingStrategy from "../components/taxlit/MarketingStrategy";
import Taglines from "../components/taxlit/Taglines";
import RevenueModel from "../components/taxlit/RevenueModel";
import ContactTax from "../components/taxlit/ContactTax";

export default function BusinessSite() {
  useEffect(() => {
    document.title = "Let's Connect | Business & Financial Services";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-darkBg text-textPrimary overflow-x-hidden">
      {/* Top Left Back-to-Home link */}
      <div className="max-w-6xl mx-auto px-6 pt-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/5 hover:border-primary/30 text-xs text-textMuted hover:text-textPrimary transition-all duration-300 transform hover:-translate-x-0.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Business Site Content */}
      <main>
        {/* 1. Commercial Hero */}
        <DualEngineHero />

        {/* 2. Commercial About (Vishal's services) */}
        <About />

        {/* 3. Catalog of Services */}
        <FinancialServices />

        {/* 4. Tax Literacy Subsection Wrapper */}
        <section id="tax-literacy" className="relative overflow-hidden border-t border-white/5 bg-darkBg">
          {/* Subsection Header */}
          <div className="max-w-6xl mx-auto px-6 pt-24 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-teal-500/25 mb-6 text-teal-400 font-semibold text-xs tracking-wider uppercase">
                <BookOpen className="w-4 h-4 text-teal-400" />
                <span>Our Free Social Initiative</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight text-textPrimary">
                Tax Literacy Platform
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8 rounded-full" />
              <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
                India's first awareness-driven platform that fights tax ignorance and evasion through free education and live Webinars — without charging a single rupee.
              </p>
            </motion.div>
          </div>

          {/* Mount all Tax Literacy Components */}
          <VisionMission />
          <USP />
          <Goals />
          <MarketingStrategy />
          <Taglines />
          <RevenueModel />
          <ContactTax />
        </section>

        {/* 5. Seal of Trust Table */}
        <SealOfTrust />

        {/* 6. Pricing Packages */}
        <ServicePackages />

        {/* 7. Client Onboarding Journey */}
        <HowItWorks />

        {/* 8. Commercial Contact Form (Vishal) */}
        <ContactBusiness />
      </main>

      {/* Fixed Bottom-Right Back-to-Home Pill */}
      <div className="fixed bottom-6 left-6 z-40">
        <Link
          to="/"
          className="w-12 h-12 rounded-full bg-primary border border-primary/20 text-textPrimary hover:text-accent flex items-center justify-center shadow-[0_0_20px_rgba(108,63,238,0.5)] hover:scale-105 transition-all duration-300"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
