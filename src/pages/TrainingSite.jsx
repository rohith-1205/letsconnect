import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Import original soft skills training components
import Hero from "../components/Hero";
import About from "../components/About";
import Curriculum from "../components/Curriculum";
import Pedagogy from "../components/Pedagogy";
import HowItWorks from "../components/HowItWorks";
import Workload from "../components/Workload";
import Assessment from "../components/Assessment";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";

export default function TrainingSite() {
  useEffect(() => {
    document.title = "Let's Connect | Training & Development Services";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-darkBg text-textPrimary overflow-x-hidden">
      {/* Top Left Back-to-Home link */}
      <div className="max-w-6xl mx-auto px-6 pt-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-accent/20 hover:border-accent/40 text-xs text-textMuted hover:text-accent transition-all duration-300 transform hover:-translate-x-0.5"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-accent" />
          <span className="text-textMuted hover:text-accent">Back to Home</span>
        </Link>
      </div>

      {/* Main Training Site Content */}
      <main>
        {/* Soft Skills Hero */}
        <Hero />

        {/* Soft Skills About */}
        <About />

        {/* 4-Year Journey Curriculum */}
        <Curriculum />

        {/* Pedagogy Donut Chart */}
        <Pedagogy />

        {/* How It Works 4-step Timeline */}
        <HowItWorks />

        {/* Workload Bar Chart */}
        <Workload />

        {/* Assessment & Certification */}
        <Assessment />

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* Student Enquiry Form */}
        <ContactForm />
      </main>

      {/* Fixed Bottom-Right Back-to-Home Pill */}
      <div className="fixed bottom-6 left-6 z-40">
        <Link
          to="/"
          className="w-12 h-12 rounded-full bg-accent border border-accent/20 text-textPrimary hover:text-darkBg flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-5 h-5 text-textPrimary" />
        </Link>
      </div>
    </div>
  );
}
