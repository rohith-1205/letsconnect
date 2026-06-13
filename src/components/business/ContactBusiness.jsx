import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react";
import { toast } from "react-hot-toast";
import { founders } from "../../data/businessData";

export default function ContactBusiness() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    package: "",
    message: ""
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
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }
    if (!formData.package) {
      toast.error("Please select a package or service.");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Inquiry submitted! Vishal or Padmaja L will reach out soon.", {
        style: {
          background: "#1A1035",
          color: "#F5F3FF",
          border: "1px solid rgba(108, 63, 238, 0.3)"
        },
        iconTheme: {
          primary: "#F97316",
          secondary: "#1A1035"
        }
      });
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        package: "",
        message: ""
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-surfaceBg/30">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight text-textPrimary">
            Ready to Connect?
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Discuss customized filings, tax advisory, corporate workshops, or institutional student bootcamps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto mt-8">
          
          {/* Left Column: Founder Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center text-left">
            {founders.map((founder, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/5 flex gap-4 items-start hover:border-primary/20 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0 group-hover:scale-110 transition-transform ${founder.avatarColor}`}>
                  <span className="font-heading font-bold text-lg">{founder.name[0]}</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-textPrimary text-base mb-0.5">{founder.name}</h4>
                  <p className="text-accent font-semibold text-xs mb-3">{founder.role}</p>
                  
                  <div className="space-y-1.5 text-xs text-textMuted font-light">
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-accent" />
                      <span>+91 {founder.phone}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-accent" />
                      <span>{founder.email}</span>
                    </p>
                    {founder.social && (
                      <p className="flex items-center gap-2 text-accent font-medium">
                        <svg className="w-3.5 h-3.5 fill-current text-accent" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                <MapPin className="w-4 h-4 text-accent" />
                Operating across
              </h4>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-textPrimary">
                {["Hosur", "Bangalore", "Virudhunagar"].map((city, cIdx) => (
                  <span key={cIdx} className="bg-primary/10 border border-primary/20 py-1.5 px-3.5 rounded-full">
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Business Inquiry Form */}
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
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 99000 99000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
              </div>

              {/* Company Name & Package Choice */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your enterprise name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="package" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                    Requested Service Package
                  </label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full bg-surfaceBg border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  >
                    <option value="" disabled className="text-textMuted">Select Service / Package</option>
                    <option value="Startup Package">Startup Foundation Package</option>
                    <option value="Student Package">Student Starter Package</option>
                    <option value="Growth Package">Growth Acceleration Package</option>
                    <option value="Executive Package">Professional Excellence Package</option>
                    <option value="Financial Services Only">Financial Services (GST, ITR, Loans)</option>
                    <option value="Training Only">Training & Development (Bootcamps)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                  Message Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we assist your business or career growth?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-hero rounded-xl text-textPrimary font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(108,63,238,0.4)] disabled:opacity-50 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Inquiry
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
