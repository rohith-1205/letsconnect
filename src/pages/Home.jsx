import { useEffect } from "react";
import { motion } from "framer-motion";
import HeroCommon from "../components/home/HeroCommon";
import TheGap from "../components/home/TheGap";
import TwoEngines from "../components/home/TwoEngines";

export default function Home() {
  useEffect(() => {
    document.title = "Let's Connect | Bridging the Gap to Success";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-darkBg text-textPrimary overflow-x-hidden">
      {/* 1. Common Hero */}
      <HeroCommon />

      {/* 2. The Gap Section */}
      <TheGap />

      {/* 3. Service Selector Cards Section */}
      <TwoEngines />

      {/* 4. One-Liner Trust Quote */}
      <section className="py-20 relative overflow-hidden bg-darkBg border-t border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          
          {/* Top Divider */}
          <div className="h-0.5 w-16 bg-teal-400 mx-auto mb-10 rounded-full opacity-60" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl font-extrabold font-heading text-textPrimary leading-relaxed max-w-3xl mx-auto italic">
              "We built a 'Single Partner' ecosystem where a business can get its GST filed in the morning and its team trained in communication in the afternoon."
            </p>
          </motion.div>

          {/* Bottom Divider */}
          <div className="h-0.5 w-16 bg-teal-400 mx-auto mt-10 rounded-full opacity-60" />

        </div>
      </section>
    </div>
  );
}
