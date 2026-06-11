import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2, Send } from "lucide-react";
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
    department: "",
    year: "",
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

    // Basic Validations
    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!formData.department) {
      toast.error("Please select your department.");
      return;
    }
    if (!formData.year) {
      toast.error("Please select your year of study.");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter a message.");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
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
        department: "",
        year: "",
        message: ""
      });
    }, 1200);
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

              {/* Email & Dept Row */}
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
                    placeholder="name@university.edu"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm placeholder:text-textMuted/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full bg-surfaceBg border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  >
                    <option value="" disabled className="text-textMuted">Select Department</option>
                    <option value="CSE">Computer Science (CSE)</option>
                    <option value="ECE">Electronics (ECE)</option>
                    <option value="IT">Information Tech (IT)</option>
                    <option value="MECH">Mechanical Eng (ME)</option>
                    <option value="EEE">Electrical Eng (EEE)</option>
                    <option value="CIVIL">Civil Eng</option>
                  </select>
                </div>
              </div>

              {/* Year of Study */}
              <div>
                <label htmlFor="year" className="block text-textPrimary text-xs font-semibold uppercase tracking-wider mb-2">
                  Year of Study
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full bg-surfaceBg border border-white/10 rounded-xl px-4 py-3 text-textPrimary text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                >
                  <option value="" disabled>Select Academic Year</option>
                  <option value="1">Year 1 - Foundational</option>
                  <option value="2">Year 2 - Collaborative</option>
                  <option value="3">Year 3 - Career Architecture</option>
                  <option value="4">Year 4 - Launchpad</option>
                </select>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
