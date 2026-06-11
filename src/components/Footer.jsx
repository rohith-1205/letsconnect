import { Zap } from "lucide-react";
import { navLinks } from "../data/programData";

export default function Footer() {
  return (
    <footer className="bg-darkBg border-t border-white/5 py-16 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
        {/* Branding Column */}
        <div className="md:col-span-5 text-left">
          <a href="#home" className="flex items-center gap-2 group mb-4">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300">
              <Zap className="w-5 h-5 text-accent fill-accent animate-pulse" />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-textPrimary">
              Let's <span className="text-accent">Connect</span>
            </span>
          </a>
          <p className="text-textMuted text-sm leading-relaxed max-w-sm font-light mb-6">
            Building tomorrow's professionals, today. A comprehensive soft skills pathway transforming student character and competence.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                ),
                link: "https://linkedin.com",
                label: "LinkedIn"
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                ),
                link: "https://instagram.com",
                label: "Instagram"
              },
              {
                icon: (
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ),
                link: "https://twitter.com",
                label: "Twitter"
              }
            ].map((social, idx) => {
              return (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-accent hover:text-accent flex items-center justify-center text-textMuted transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 text-left">
          <h4 className="font-heading font-bold text-textPrimary text-sm uppercase tracking-wider mb-6">
            Quick Links
          </h4>
          <div className="flex flex-col gap-3.5">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.path}
                className="text-textMuted hover:text-textPrimary text-sm transition-colors w-fit"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Contact info placeholder / schedule column */}
        <div className="md:col-span-4 text-left">
          <h4 className="font-heading font-bold text-textPrimary text-sm uppercase tracking-wider mb-6">
            Training Framework
          </h4>
          <p className="text-textMuted text-sm leading-relaxed font-light mb-4">
            Available across all undergraduate engineering, commerce, and science departments with structured 6-cycle annual calendars.
          </p>
          <div className="text-xs text-accent font-semibold tracking-wider bg-accent/10 border border-accent/20 rounded-xl py-2 px-4 w-fit">
            Academic Year 2025 - 2026
          </div>
        </div>
      </div>

      {/* Copyright Row */}
      <div className="max-w-6xl mx-auto px-6 border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-textMuted font-light">
        <p>© 2025 Let's Connect. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-textPrimary transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-textPrimary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
