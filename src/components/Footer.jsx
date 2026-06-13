import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const socialLinks = [
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
      link: "https://instagram.com/letsconnect.network",
      label: "Instagram"
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.525 3.545 12 3.545 12 3.545s-7.525 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.025 0 12 0 12s0 3.975.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.863.508 9.388.508 9.388.508s7.525 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.975 24 12 24 12s0-3.975-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      link: "https://youtube.com",
      label: "YouTube"
    },
    {
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.9 9.9 0 0 0-6.98-2.848C6.15 1.002 1.725 5.375 1.721 10.804c-.001 1.702.46 3.36 1.332 4.84l-.994 3.63 3.791-.976-.113-.082zM17.8 14.61c-.3-.15-1.782-.88-2.062-.982-.28-.102-.485-.153-.69.153-.205.306-.795.996-.975 1.2-.18.204-.36.23-.66.08-3.04-1.503-4.14-2.6-4.82-3.77-.18-.306-.02-.472.13-.622.136-.135.306-.357.46-.535.15-.179.2-.306.3-.51.1-.204.05-.383-.025-.536-.075-.153-.69-1.66-.945-2.27-.25-.6-.525-.52-.72-.53-.18-.01-.39-.01-.6-.01s-.55.08-.84.4c-.29.32-1.1 1.08-1.1 2.63s1.12 3.05 1.28 3.25c.16.2 2.2 3.37 5.33 4.73.74.32 1.33.52 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.17-1.43-.08-.1-.28-.15-.58-.3z"/>
        </svg>
      ),
      link: "https://whatsapp.com",
      label: "WhatsApp"
    }
  ];

  return (
    <footer className="bg-darkBg border-t border-white/5 py-16 relative overflow-hidden text-left">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
        
        {/* Branding Column */}
        <div className="md:col-span-4 flex flex-col items-start">
          <Link to="/" className="flex items-center gap-2 group mb-4">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300">
              <Zap className="w-5 h-5 text-accent fill-accent animate-pulse" />
            </div>
            <span className="font-heading font-extrabold text-xl tracking-tight text-textPrimary">
              Let's <span className="text-accent">Connect</span>
            </span>
          </Link>

          
          <p className="text-textMuted text-sm leading-relaxed max-w-sm font-light mb-6">
            Building tomorrow's professionals, today. Aligning compliance precision and career growth capability for individual and enterprise success.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => (
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
            ))}
          </div>
        </div>

        {/* Financial Services Links */}
        <div className="md:col-span-4 flex flex-col items-start">
          <h4 className="font-heading font-bold text-textPrimary text-sm uppercase tracking-wider mb-6">
            Financial Services
          </h4>
          <div className="flex flex-col gap-3.5">
            {[
              { name: "Compliance Services", path: "/business#financial-services" },
              { name: "Tax Literacy Platform", path: "/business#tax-literacy" },
              { name: "Service Packages", path: "/business#packages" },
              { name: "Contact & Consult", path: "/business#contact" }
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="text-textMuted hover:text-textPrimary text-sm transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Training & Development Links */}
        <div className="md:col-span-4 flex flex-col items-start">
          <h4 className="font-heading font-bold text-textPrimary text-sm uppercase tracking-wider mb-6">
            Training & Development
          </h4>
          <div className="flex flex-col gap-3.5">
            {[
              { name: "Soft Skills Curriculum", path: "/training#curriculum" },
              { name: "Pedagogy & Bootcamps", path: "/training#pedagogy" },
              { name: "Testimonials & Feedback", path: "/training#testimonials" },
              { name: "Student Enquiry", path: "/training#contact" }
            ].map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="text-textMuted hover:text-textPrimary text-sm transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
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
