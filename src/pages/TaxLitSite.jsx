import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Import components
import TaxHero from "../components/taxlit/TaxHero";
import VisionMission from "../components/taxlit/VisionMission";
import USP from "../components/taxlit/USP";
import Goals from "../components/taxlit/Goals";
import MarketingStrategy from "../components/taxlit/MarketingStrategy";
import Taglines from "../components/taxlit/Taglines";
import RevenueModel from "../components/taxlit/RevenueModel";
import ContactTax from "../components/taxlit/ContactTax";

export default function TaxLitSite() {
  useEffect(() => {
    document.title = "Let's Connect | Tax Literacy Platform";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-darkBg text-textPrimary overflow-x-hidden">
      
      {/* Top Left Back-to-Home link */}
      <div className="max-w-6xl mx-auto px-6 pt-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-teal-500/20 hover:border-teal-500/40 text-xs text-textMuted hover:text-teal-400 transition-all duration-300 transform hover:-translate-x-0.5"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-teal-400" />
          <span className="text-textMuted hover:text-teal-400">Back to Home</span>
        </Link>
      </div>

      {/* Tax Literacy Site Content */}
      <main>
        <TaxHero />
        <VisionMission />
        <USP />
        <Goals />
        <MarketingStrategy />
        <Taglines />
        <RevenueModel />
        <ContactTax />
      </main>

      {/* Fixed Bottom-Right Back-to-Home Pill */}
      <div className="fixed bottom-6 left-6 z-40">
        <Link
          to="/"
          className="w-12 h-12 rounded-full bg-teal-500 border border-teal-500/20 text-darkBg hover:text-white flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.5)] hover:scale-105 transition-all duration-300"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-5 h-5 text-darkBg" />
        </Link>
      </div>
    </div>
  );
}
