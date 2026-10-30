import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, FileText } from 'lucide-react';

interface FloatingActionsProps {
  onOpenResumeModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenResumeModal }) => {
  const [showButton, setShowButton] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? Math.round((scrolled / total) * 100) : 0;
      setScrollPercent(pct);
      setShowButton(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5"
        >
          {/* Quick Resume Pill */}
          <button
            onClick={onOpenResumeModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D0F1A]/90 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-black/40 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
            title="View Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Back to top circle with SVG progress ring */}
          <button
            onClick={scrollToTop}
            className="relative w-11 h-11 rounded-full bg-[#0D0F1A]/90 border border-white/[0.1] text-slate-300 hover:text-white backdrop-blur-md shadow-xl flex items-center justify-center transition-all hover:scale-105 cursor-pointer group"
            aria-label="Back to top"
            title={`Scroll to top (${scrollPercent}%)`}
          >
            {/* Circular progress SVG */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="2.5"
              />
              <circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                stroke="#6366F1"
                strokeWidth="2.5"
                strokeDasharray="113.1"
                strokeDashoffset={113.1 - (113.1 * scrollPercent) / 100}
                strokeLinecap="round"
                className="transition-all duration-100 ease-out"
              />
            </svg>

            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
