import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, Send, CheckCircle2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { contactInfo } from "../data/programData";

function DynamicIcon({ name, className }) {
  if (name === "Mail") return <Mail className={className} />;
  if (name === "Phone") return <Phone className={className} />;
  if (name === "MapPin") return <MapPin className={className} />;
  return null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    organization: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validations
    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!formData.role) {
      toast.error("Please select who you are contacting as.");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter a message.");
      return;
    }

    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "5f3ed534-11f0-4a42-ab04-b70194d6d3b8";
    const payload = {
      access_key: accessKey,
      subject: "Let's Connect - New Soft Skills Training enquiry",
      from_name: "Let's Connect - Training Portal",
      ...formData
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        toast.success("We'll be in touch soon!", {
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
          role: "",
          organization: "",
          message: ""
        });
        setIsSubmitted(true);
      } else {
        toast.error(result.message || "Submission failed. Please check your Web3Forms configuration.");
      }
    } catch (error) {
      toast.error("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-surfaceBg/30">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight">
            Ready to Connect?
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Have questions about student bootcamps, departmental cycles, or customized corporate soft skills pathways? Reach out to us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto mt-8">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/5 flex gap-4 items-start hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                  <DynamicIcon name={info.icon} className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-heading font-bold text-textPrimary text-sm mb-1">{info.title}</h4>
                  <p className="text-accent font-semibold text-sm break-all">{info.value}</p>
                  <p className="text-textMuted text-xs font-light mt-1 leading-relaxed">{info.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-8 border border-white/5 shadow-2xl flex flex-col items-center justify-center text-center gap-6 min-h-[400px]"
              >
                <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-accent mb-2 relative">
                  <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75" />
                  <CheckCircle2 className="w-10 h-10 relative z-10" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-textPrimary">
                  Thank You!
                </h3>
                
                <p className="text-textMuted text-sm md:text-base leading-relaxed max-w-md">
                  Your soft skills training enquiry has been received. Our team will reach out to you as soon as possible.
                </p>
                
                <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full my-2" />
                
                <button
                  onClick={() => setIsSubmitted(false)}
                  type="button"
                  className="px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-textPrimary text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
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
                    placeholder="name@institution.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
              </div>

              {/* Contacting As & Organization Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                    I am contacting as a...
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-surfaceBg border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  >
                    <option value="" disabled className="text-textMuted">Select Contact Type</option>
                    <option value="Student">Student</option>
                    <option value="Educational Institution / College Representative">Educational Institution / College Representative</option>
                    <option value="Corporate Partner">Corporate Partner</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                    Institution / Organization Name
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g., University or Company name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                  Enquiry Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we assist you in your soft skills training?"
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
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Enquiry
                  </>
                )}
              </button>
            </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
