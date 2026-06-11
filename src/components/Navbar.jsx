import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";
import { navLinks } from "../data/programData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300">
            <Zap className="w-5 h-5 text-accent fill-accent animate-pulse" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-textPrimary group-hover:text-glow transition-all duration-300">
            Let's <span className="text-accent">Connect</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.path}
              className="text-sm font-medium text-textMuted hover:text-textPrimary transition-colors relative py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Enroll Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-primary hover:bg-primary/95 text-textPrimary font-bold text-sm rounded-full hover:shadow-[0_0_20px_rgba(108,63,238,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-textMuted hover:text-textPrimary focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[72px] bg-darkBg/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.path}
              onClick={handleLinkClick}
              className="text-base font-semibold text-textMuted hover:text-textPrimary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="w-full text-center py-3 bg-primary hover:bg-primary/90 text-textPrimary font-bold rounded-xl shadow-lg transition-colors mt-4"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
}
