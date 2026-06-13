import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Toaster } from "react-hot-toast";

// Import Shared Shell
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Page Containers
import Home from "./pages/Home";
import BusinessSite from "./pages/BusinessSite";
import TrainingSite from "./pages/TrainingSite";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

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

  // Scroll to section when url has a hash anchor on path transitions
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

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

      {/* Navigation Bar (Shared across all portals) */}
      <Navbar />

      {/* Routed Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<BusinessSite />} />
        <Route path="/training" element={<TrainingSite />} />
      </Routes>

      {/* Shared Footer */}
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
