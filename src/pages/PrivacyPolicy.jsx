import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Database, 
  Eye, 
  Key, 
  Share2, 
  Cookie, 
  UserCheck, 
  Users,
  RefreshCw, 
  Mail,
  Lock
} from "lucide-react";

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("collection");

  useEffect(() => {
    document.title = "Let's Connect | Privacy Policy";
    window.scrollTo({ top: 0, behavior: "instant" });

    // Scroll Spy implementation
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "collection", title: "1. Information We Collect", icon: Database },
    { id: "usage", title: "2. How We Use Information", icon: Eye },
    { id: "security", title: "3. Data Security & Storage", icon: Key },
    { id: "sharing", title: "4. Sharing & Disclosure", icon: Share2 },
    { id: "cookies", title: "5. Cookies & Tracking", icon: Cookie },
    { id: "rights", title: "6. Your Rights & Choices", icon: UserCheck },
    { id: "children", title: "7. Children's Privacy", icon: Users },
    { id: "updates", title: "8. Policy Modifications", icon: RefreshCw },
    { id: "contact", title: "9. Contact Us", icon: Mail },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen bg-darkBg text-textPrimary overflow-x-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-28">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/5 hover:border-primary/30 text-xs text-textMuted hover:text-textPrimary transition-all duration-300 transform hover:-translate-x-0.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 tracking-tight leading-none">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <div className="flex items-center gap-3 text-textMuted text-sm">
            <Lock className="w-4 h-4 text-accent" />
            <span>Last Updated: June 15, 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span>Effective Date: June 15, 2026</span>
          </div>
        </motion.div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Sticky Sidebar Navigation (Lg screen) */}
        <aside className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-28 p-6 rounded-2xl glass-card border border-white/5 flex flex-col gap-2">
            <h3 className="font-heading font-bold text-sm text-textPrimary uppercase tracking-wider mb-4 px-3 border-l-2 border-accent">
              Table of Contents
            </h3>
            <div className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto pr-2">
              {sections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-left transition-all duration-300 ${
                      isActive 
                        ? "bg-primary/20 text-textPrimary border border-primary/30 font-semibold pl-4" 
                        : "text-textMuted hover:text-textPrimary hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-accent" : "text-textMuted"}`} />
                    <span>{sec.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Content Column */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Section 1: Information We Collect */}
          <div id="collection" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <Database className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">1. Information We Collect</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                We collect information to provide high-quality compliance and training experiences. The data we collect depends on your interactions with us:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Personal Identifiable Information:</strong> Name, email address, phone number, and professional affiliations provided during consultation or training enrollment.
                </li>
                <li>
                  <strong>Corporate & Tax Data:</strong> To perform GST filing, book auditing, and tax compliance work under our financial engine, you may submit company records, tax identification numbers, financial statements, and invoice documents.
                </li>
                <li>
                  <strong>Technical and Usage Data:</strong> IP addresses, browser specifications, operating system details, page views, and engagement timings gathered automatically via server logs and scripts.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2: How We Use Information */}
          <div id="usage" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <Eye className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">2. How We Use Your Information</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                Let's Connect utilizes your collected data to execute transactions, improve offerings, and ensure security:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Service Delivery:</strong> Managing bootcamp schedules, grading/coaching assignments, and submitting required corporate tax filings.</li>
                <li><strong>Communication:</strong> Dispatching invoice receipts, scheduling consultation calls, providing training updates, or sending tax reminders.</li>
                <li><strong>Security & Authentication:</strong> Preserving log safety and protecting accounts from fraudulent access or cyber-attacks.</li>
                <li><strong>Initiatives:</strong> Sharing invitations to free webinars under our Tax Literacy social engine.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Data Security & Storage */}
          <div id="security" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <Key className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">3. Data Security & Storage</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                We implement industry-standard administrative, physical, and digital safeguards to keep your sensitive records secure. All communication between your device and our servers is encrypted using Secure Socket Layer (SSL/TLS) protocols.
              </p>
              <p>
                Corporate tax papers and commercial financial documents are kept in isolated, access-restricted database systems. While we apply top-tier security standards, no electronic storage method or transmission over the internet can be guaranteed as 100% secure. You share financial parameters and records with us at your own risk.
              </p>
            </div>
          </div>

          {/* Section 4: Sharing & Disclosure */}
          <div id="sharing" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <Share2 className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">4. Sharing & Disclosure</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                We do not sell, lease, or rent your personal info or business accounting spreadsheets to marketing brokers. We only share details in the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Statutory Regulators:</strong> Submitting company records and tax schedules to governmental entities (like the Income Tax Department of India/GST portal) directly upon your service requests.
                </li>
                <li>
                  <strong>Service Providers:</strong> Using trusted third parties to process payments, host database structures, or coordinate curriculum email newsletters under strict confidentiality terms.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> Sharing details under subpoena, regulatory audit, or to prevent financial fraud.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 5: Cookies & Tracking */}
          <div id="cookies" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <Cookie className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">5. Cookies & Tracking Technologies</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                Our portal uses cookies and similar storage markers to track session logs, analyze layout traffic, and customize your experience.
              </p>
              <p>
                You have the option to disable cookies through your browser preferences. However, note that disabling cookies might disable or limit access to several interactive elements and dashboards on our platform.
              </p>
            </div>
          </div>

          {/* Section 6: Your Rights & Choices */}
          <div id="rights" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <UserCheck className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">6. Your Rights & Choices</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                Depending on your location and regulatory jurisdiction, you have certain rights concerning your data:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Access & Export:</strong> Request a digital summary of the personal details we store.</li>
                <li><strong>Correction:</strong> Ask us to rectify incorrect contact details or credentials.</li>
                <li><strong>Deletion:</strong> Request account erasure. Note that accounting documents and filing logs might be retained for mandatory periods to comply with statutory tax laws or audit rules.</li>
              </ul>
            </div>
          </div>

          {/* Section 7: Children's Privacy */}
          <div id="children" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">7. Children's Privacy</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                Our services are directed toward business professionals and students looking for skill development. We do not knowingly collect, store, or target personal information from children under the age of 13.
              </p>
              <p>
                If we discover that a child under 13 has shared profile data with us, we will immediately initiate deletion protocols. If you believe we have inadvertently collected such information, please reach out to our team.
              </p>
            </div>
          </div>

          {/* Section 8: Policy Modifications */}
          <div id="updates" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <RefreshCw className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">8. Modifications to This Policy</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                We may revise this Privacy Policy from time to time. The updated date will always be visible at the top of the page.
              </p>
              <p>
                We encourage you to inspect this page frequently to stay informed about the steps we take to protect your data. Continued use of our compliance services or education dashboards after changes are posted constitutes your explicit consent to the updated policy.
              </p>
            </div>
          </div>

          {/* Section 9: Contact Us */}
          <div id="contact" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">9. Contact Us</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                For data protection requests, queries, or to exercise your rights under this privacy document, please message us at:
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2 font-mono text-sm max-w-md">
                <p><span className="text-textPrimary font-semibold font-sans">Email:</span> letsconnect2k20@gmail.com</p>
                <p><span className="text-textPrimary font-semibold font-sans">Instagram:</span> @letsconnect.network</p>
                <p><span className="text-textPrimary font-semibold font-sans">Compliance Portal:</span> Let's Connect Network</p>
              </div>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}
