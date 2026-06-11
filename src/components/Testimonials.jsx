import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/programData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-play interval setup
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-92 h-92 rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-widest bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">
            Student Feedback
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mt-6 mb-6 leading-tight">
            What Our Students Say
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-textMuted text-base md:text-lg leading-relaxed font-light">
            Real stories from undergraduate students who went through our progressive bootcamps and successfully stepped into the corporate landscape.
          </p>
        </motion.div>

        {/* Carousel Outer Wrapper with Hover Pause listeners */}
        <div
          className="relative w-full max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides Container */}
          <div className="relative min-h-[320px] sm:min-h-[260px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full glass-card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative flex flex-col justify-between"
              >
                {/* Background Large Quote Icon */}
                <Quote className="absolute top-6 right-8 w-28 h-28 text-white/[0.02] pointer-events-none transform rotate-180" />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-textPrimary text-base md:text-lg leading-relaxed font-light italic mb-8 relative z-10">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Profile Details */}
                <div className="flex items-center gap-4 border-t border-white/5 pt-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-heading font-black text-textPrimary text-base shadow-lg">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <cite className="not-italic font-heading font-bold text-textPrimary text-sm md:text-base block">
                      {currentTestimonial.name}
                    </cite>
                    <span className="text-textMuted text-xs font-light block mt-0.5">
                      {currentTestimonial.dept} Department, {currentTestimonial.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-[-20px] sm:left-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card border border-white/10 hover:border-accent flex items-center justify-center text-textMuted hover:text-textPrimary transition-all duration-300 shadow-xl"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-[-20px] sm:right-[-50px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card border border-white/10 hover:border-accent flex items-center justify-center text-textMuted hover:text-textPrimary transition-all duration-300 shadow-xl"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Dots Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "bg-accent w-6"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
