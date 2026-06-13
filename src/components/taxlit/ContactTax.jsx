import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react";
import { toast } from "react-hot-toast";
import { founders } from "../../data/taxlitData";

export default function ContactTax() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    language: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validations
    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!formData.state) {
      toast.error("Please select your state.");
      return;
    }
    if (!formData.language) {
      toast.error("Please select your language preference.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Successfully registered for the next webinar!", {
        style: {
          background: "#0F0A1E",
          color: "#F5F3FF",
          border: "1px solid rgba(20, 184, 166, 0.3)"
        },
        iconTheme: {
          primary: "#14b8a6",
          secondary: "#0F0A1E"
        }
      });
      // Clear form
      setFormData({
        name: "",
        email: "",
        state: "",
        language: ""
      });
    }, 1200);
  };

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

  const states = [
    "Tamil Nadu",
    "Karnataka",
    "Kerala",
    "Andhra Pradesh",
    "Telangana",
    "Maharashtra",
    "Delhi"
  ];

  const languages = [
    "English",
    "Tamil",
    "Kannada",
    "Hindi",
    "Telugu",
    "Malayalam"
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-surfaceBg/20">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-teal-400 text-xs font-semibold uppercase tracking-widest bg-teal-400/10 px-4 py-1.5 rounded-full border border-teal-400/20">
            Join the Movement
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            Ready to Bridge the Gap?
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Let's connect. Let's grow. Let's succeed — together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto mt-8">
          
          {/* Left Column: Founder Contact Cards & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center text-left">
            {founders.map((founder, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/5 flex gap-4 items-start hover:border-teal-500/20 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 group-hover:scale-115 transition-transform ${founder.avatarColor}`}>
                  <span className="font-heading font-bold text-lg">{founder.name[0]}</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-textPrimary text-base mb-0.5">{founder.name}</h4>
                  <p className="text-teal-400 font-semibold text-xs mb-3">{founder.role}</p>
                  
                  <div className="space-y-1 text-xs text-textMuted font-light">
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-teal-400/80" />
                      <span>+91 {founder.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-teal-400/80" />
                      <span>{founder.email}</span>
                    </p>
                    {founder.social && (
                      <p className="flex items-center gap-2 text-teal-400/90 font-medium">
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
                          <circle cx="18" cy="6" r="1" fill="currentColor"/>
                        </svg>
                        <span>{founder.social}</span>
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Operating Locations */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <h4 className="text-textPrimary font-heading font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                Operating across
              </h4>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-textPrimary">
                {["Hosur", "Bangalore", "Virudhunagar"].map((city, cIdx) => (
                  <span key={cIdx} className="bg-teal-500/10 border border-teal-500/20 py-1.5 px-3.5 rounded-full">
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <h4 className="text-textPrimary font-heading font-bold text-sm uppercase tracking-wider mb-4">
                Follow the Platform
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, sIdx) => {
                  return (
                    <a
                      key={sIdx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-teal-500 hover:text-teal-400 flex items-center justify-center text-textMuted transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      {social.icon}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Webinar Sign-up Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 border border-white/5 shadow-2xl flex flex-col gap-6 text-left"
              noValidate
            >
              <h3 className="font-heading font-bold text-xl text-textPrimary mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                Register for Free Webinar
              </h3>
              
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted/30 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted/30 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                />
              </div>

              {/* State & Language Selector Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="state" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full bg-surfaceBg border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                  >
                    <option value="" disabled className="text-textMuted">Select State</option>
                    {states.map((state, sIdx) => (
                      <option key={sIdx} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="language" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                    Language Preference
                  </label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                    className="w-full bg-surfaceBg border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-300"
                  >
                    <option value="" disabled className="text-textMuted">Select Language</option>
                    {languages.map((lang, lIdx) => (
                      <option key={lIdx} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-darkBg font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(20,184,166,0.45)] disabled:opacity-50 transition-all duration-300 rounded-xl"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Registering...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Register for Free Webinar
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
