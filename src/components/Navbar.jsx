import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Zap, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  // Determine active route state
  const isBusinessPath = location.pathname === "/business";
  const isTrainingPath = location.pathname === "/training";
  const isHomePath = location.pathname === "/";

  // Build links based on path
  let navLinks;
  let logoPath;
  let ctaText;
  let ctaLink;
  let ctaColor;

  if (isBusinessPath) {
    logoPath = "#home";
    ctaText = "Get a Quote";
    ctaLink = "#contact";
    ctaColor = "bg-primary hover:bg-primary/95 hover:shadow-[0_0_20px_rgba(108,63,238,0.4)]";
    navLinks = [
      { name: "← Home", path: "/", isRouter: true },
      { name: "Services", path: "#financial-services" },
      { name: "Tax Literacy", path: "#tax-literacy" },
      { name: "Packages", path: "#packages" },
      { name: "Contact", path: "#contact" }
    ];
  } else if (isTrainingPath) {
    logoPath = "#home";
    ctaText = "Enroll Now";
    ctaLink = "#contact";
    ctaColor = "bg-accent hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]";
    navLinks = [
      { name: "← Home", path: "/", isRouter: true },
      { name: "Curriculum", path: "#curriculum" },
      { name: "Pedagogy", path: "#pedagogy" },
      { name: "Testimonials", path: "#testimonials" },
      { name: "Contact", path: "#contact" }
    ];
  } else {
    // Common Landing Home
    logoPath = "#home";
    ctaText = "Get Started";
    ctaLink = "#service-selector";
    ctaColor = "bg-primary hover:bg-primary/95 hover:shadow-[0_0_20px_rgba(108,63,238,0.4)]";
    navLinks = [
      { name: "Home", path: "#home" },
      { name: "About", path: "#the-gap" },
      { name: "Contact", path: "#service-selector" }
    ];
  }

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
        {isHomePath ? (
          <a href={logoPath} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300">
              <Zap className="w-5 h-5 text-accent fill-accent animate-pulse" />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-textPrimary group-hover:text-glow transition-all duration-300">
              Let's <span className="text-accent">Connect</span>
            </span>
          </a>
        ) : (
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300">
              <Zap className={`w-5 h-5 animate-pulse ${isTrainingPath ? "text-accent fill-accent" : "text-primary fill-primary"}`} />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-textPrimary group-hover:text-glow transition-all duration-300">
              Let's <span className={isTrainingPath ? "text-accent" : "text-primary"}>Connect</span>
            </span>
          </Link>
        )}

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            link.isRouter ? (
              <Link
                key={idx}
                to={link.path}
                className="text-sm font-medium text-textMuted hover:text-textPrimary transition-colors relative py-2 group"
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${isTrainingPath ? "bg-accent" : "bg-primary"}`} />
              </Link>
            ) : (
              <a
                key={idx}
                href={link.path}
                className="text-sm font-medium text-textMuted hover:text-textPrimary transition-colors relative py-2 group"
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${isTrainingPath ? "bg-accent" : "bg-primary"}`} />
              </a>
            )
          ))}
        </div>

        {/* Service Indicator Pill & CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          {isBusinessPath && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-textPrimary border border-primary/30 shadow-md">
              Financial Services
            </span>
          )}
          {isTrainingPath && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent border border-accent/30 shadow-md">
              Training & Development
            </span>
          )}

          {isHomePath ? (
            <a
              href={ctaLink}
              className={`px-6 py-2.5 text-textPrimary font-bold text-sm rounded-full transition-all duration-300 transform hover:-translate-y-0.5 ${ctaColor}`}
            >
              {ctaText}
            </a>
          ) : (
            <a
              href={ctaLink}
              className={`px-6 py-2.5 font-bold text-sm rounded-full transition-all duration-300 transform hover:-translate-y-0.5 ${
                isTrainingPath ? "text-textPrimary" : "text-textPrimary"
              } ${ctaColor}`}
            >
              {ctaText}
            </a>
          )}
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
            link.isRouter ? (
              <Link
                key={idx}
                to={link.path}
                onClick={handleLinkClick}
                className="text-base font-semibold text-textMuted hover:text-textPrimary transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={idx}
                href={link.path}
                onClick={handleLinkClick}
                className="text-base font-semibold text-textMuted hover:text-textPrimary transition-colors"
              >
                {link.name}
              </a>
            )
          ))}

          {/* Mobile indicator badge */}
          {isBusinessPath && (
            <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-primary/20 text-textPrimary border border-primary/30">
              Financial Services
            </span>
          )}
          {isTrainingPath && (
            <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-accent/20 text-accent border border-accent/30">
              Training & Development
            </span>
          )}

          <a
            href={ctaLink}
            onClick={handleLinkClick}
            className={`w-full text-center py-3 font-bold rounded-xl shadow-lg transition-colors mt-2 text-textPrimary ${ctaColor}`}
          >
            {ctaText}
          </a>
        </div>
      </div>
    </nav>
  );
}
