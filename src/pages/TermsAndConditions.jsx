import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Briefcase, 
  UserCheck, 
  DollarSign, 
  FileText, 
  Scale, 
  AlertTriangle, 
  Globe, 
  HelpCircle, 
  Mail,
  FileSpreadsheet
} from "lucide-react";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("acceptance");

  useEffect(() => {
    document.title = "Let's Connect | Terms & Conditions";
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
    { id: "acceptance", title: "1. Acceptance of Terms", icon: ShieldCheck },
    { id: "eligibility", title: "2. Eligibility & Accounts", icon: UserCheck },
    { id: "services", title: "3. Scope of Services", icon: Briefcase },
    { id: "payments", title: "4. Fees & Refund Policy", icon: DollarSign },
    { id: "intellectual", title: "5. Intellectual Property", icon: FileText },
    { id: "liability", title: "6. Limitation of Liability", icon: AlertTriangle },
    { id: "indemnity", title: "7. Indemnification", icon: Scale },
    { id: "governing", title: "8. Governing Law", icon: Globe },
    { id: "changes", title: "9. Modifications to Terms", icon: HelpCircle },
    { id: "contact", title: "10. Contact Information", icon: Mail },
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
            Terms & <span className="text-gradient">Conditions</span>
          </h1>
          <div className="flex items-center gap-3 text-textMuted text-sm">
            <FileSpreadsheet className="w-4 h-4 text-accent" />
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
          
          {/* Section 1: Acceptance of Terms */}
          <div id="acceptance" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <ShieldCheck className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">1. Acceptance of Terms</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                Welcome to <strong>Let's Connect</strong> ("we", "us", "our"). These Terms & Conditions govern your access to and use of our platforms, website (letsconnect.network), physical or digital bootcamps, and professional services, including financial consulting and training modules.
              </p>
              <p>
                By accessing, browsing, registering for, or using our services, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms & Conditions, along with our Privacy Policy. If you do not agree, you must immediately cease all access and use of our website and services.
              </p>
            </div>
          </div>

          {/* Section 2: Eligibility & Accounts */}
          <div id="eligibility" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <UserCheck className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">2. Eligibility & Account Registration</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                To register for our professional soft skills training programs, or to engage us for corporate compliance and financial filing services, you must be at least 18 years of age or have explicit legal guardian consent if under 18 (for educational programs only).
              </p>
              <p>
                You represent that all details you provide during registration, compliance onboarding, or consult queries are truthful, accurate, current, and complete. You are responsible for safeguarding your credentials and notifying us immediately at <span className="text-textPrimary font-semibold">letsconnect2k20@gmail.com</span> of any unauthorized access or security breaches.
              </p>
            </div>
          </div>

          {/* Section 3: Scope of Services */}
          <div id="services" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <Briefcase className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">3. Scope of Services</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-6">
              <div>
                <h3 className="font-heading font-semibold text-textPrimary text-base mb-2">A. Financial & Compliance Engines</h3>
                <p>
                  Let's Connect provides accounting, GST filing, compliance analysis, audit prep, and tax advisory services for startups and SMEs. Users must provide correct tax details, bank statements, invoice records, and company certificates. Let's Connect does not verify the authenticity of user-submitted documents and is not liable for regulatory fines or penalties resulting from missing, falsified, or inaccurate data.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-textPrimary text-base mb-2">B. Professional Training & Bootcamps</h3>
                <p>
                  We offer corporate communication training, placement assistance, soft skills development, and technical workshops. We make no guarantees regarding immediate placements, job offers, or salary increments upon completion of our programs. Educational content, curriculum details, and timelines are subject to adjustments based on industry relevance.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-textPrimary text-base mb-2">C. Tax Literacy Social Platform</h3>
                <p>
                  Our Tax Literacy initiative is a free-of-cost social effort aimed at fighting tax evasion and raising awareness through webinars and articles. All materials published under our Tax Literacy wing are educational and do not constitute formal, licensed legal or investment advice.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Fees & Refund Policy */}
          <div id="payments" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <DollarSign className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">4. Fees, Invoicing, & Refund Policy</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                <strong>Service Fees:</strong> Pricing for compliance services, service packages, and bootcamps is detailed in our service schedules or custom proposals. All rates exclude applicable statutory taxes (like GST) unless stated otherwise.
              </p>
              <p>
                <strong>Payment Schedules:</strong> Compliance packages require advance retainer payments or defined milestone payments. Soft skills training bootcamps require complete enrollment fee settlement prior to course access.
              </p>
              <p>
                <strong>Refund Terms:</strong> Fees paid for professional services are generally non-refundable once work (e.g. data audit, filing drafting, course commencement) has initiated. Refunds for bootcamps or training courses must be formally requested within 7 days of payment, provided less than 15% of the curriculum has been accessed or delivered.
              </p>
            </div>
          </div>

          {/* Section 5: Intellectual Property */}
          <div id="intellectual" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <FileText className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">5. Intellectual Property Rights</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                All source code, UI elements, layouts, software, graphics, branding, curriculum structures, training modules, templates, slides, and educational materials distributed by Let's Connect are the proprietary intellectual property of Let's Connect.
              </p>
              <p>
                You are granted a limited, personal, non-exclusive, non-transferable, and revocable license to access course materials for your personal professional development. You are explicitly prohibited from reproducing, recording, broadcasting, distributing, reselling, or licensing our training modules, slide decks, or financial templates to third parties.
              </p>
            </div>
          </div>

          {/* Section 6: Limitation of Liability */}
          <div id="liability" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <AlertTriangle className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">6. Limitation of Liability</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                To the maximum extent permitted by applicable law, Let's Connect, its directors, officers, employees, or training mentors will not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, business opportunities, or academic setbacks.
              </p>
              <p>
                Our total cumulative liability under these Terms or related to the services will not exceed the amount actually paid by you to Let's Connect in the twelve (12) month period immediately preceding the event that gave rise to the liability.
              </p>
            </div>
          </div>

          {/* Section 7: Indemnification */}
          <div id="indemnity" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <Scale className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">7. Indemnification</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                You agree to defend, indemnify, and hold harmless Let's Connect, its affiliates, licensing partners, and operational contractors from and against any third-party claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your breach of these Terms & Conditions.</li>
                <li>Your submission of fraudulent or incorrect accounting/tax documentation.</li>
                <li>Your violation of any applicable laws, tax regulations, or rights of a third party.</li>
              </ul>
            </div>
          </div>

          {/* Section 8: Governing Law */}
          <div id="governing" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <Globe className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">8. Governing Law & Jurisdiction</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                These Terms & Conditions, and any claims or disputes arising from them, will be governed by and interpreted in accordance with the laws of **India**, without regard to its conflict of law principles.
              </p>
              <p>
                Any dispute, controversy, or claim arising out of these terms will be resolved exclusively through arbitration under the Arbitration and Conciliation Act, or through competent courts situated in the city where Let's Connect's main administrative headquarters is established.
              </p>
            </div>
          </div>

          {/* Section 9: Modifications to Terms */}
          <div id="changes" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/25">
                <HelpCircle className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">9. Modifications to Terms</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                We reserve the right, at our sole discretion, to modify or update these Terms & Conditions at any time. We will indicate revisions by updating the "Last Updated" date at the top of this page.
              </p>
              <p>
                Your continued use of our services or website after any modifications have been published constitutes your acceptance of the updated terms. We recommend checking this page periodically to stay informed of updates.
              </p>
            </div>
          </div>

          {/* Section 10: Contact Information */}
          <div id="contact" className="scroll-mt-28 p-8 rounded-2xl glass-card border border-white/5 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-textPrimary">10. Contact Information</h2>
            </div>
            <div className="text-textMuted text-sm md:text-base leading-relaxed font-light space-y-4">
              <p>
                If you have any questions or clarifications regarding these Terms & Conditions, please contact us at:
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2 font-mono text-sm max-w-md">
                <p><span className="text-textPrimary font-semibold font-sans">Email:</span> letsconnect2k20@gmail.com</p>
                <p><span className="text-textPrimary font-semibold font-sans">Instagram:</span> @letsconnect.network</p>
                <p><span className="text-textPrimary font-semibold font-sans">Business:</span> Let's Connect Network</p>
              </div>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}
