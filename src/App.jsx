import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Toaster } from "react-hot-toast";

// Import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Pedagogy from "./components/Pedagogy";
import Curriculum from "./components/Curriculum";
import HowItWorks from "./components/HowItWorks";
import Workload from "./components/Workload";
import Assessment from "./components/Assessment";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen bg-darkBg text-textPrimary overflow-x-hidden">
      {/* Toast Notification Container */}
      <Toaster position="bottom-right" reverseOrder={false} />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About & Operational Framework (including Stats inside) */}
        <About />

        {/* The 4-Year Journey (Curriculum) */}
        <Curriculum />

        {/* Pedagogy Split (Donut Chart) */}
        <Pedagogy />

        {/* How It Works (Timeline) */}
        <HowItWorks />

        {/* Workload Distribution (Bar Chart) */}
        <Workload />

        {/* Assessment & Certification */}
        <Assessment />

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* Contact Form & Details */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary border border-primary/20 text-textPrimary hover:text-accent flex items-center justify-center shadow-[0_0_20px_rgba(108,63,238,0.5)] hover:scale-105 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
