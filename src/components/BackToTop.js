import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-slate-950/90 border border-purple-500/40 text-white flex items-center justify-center shadow-2xl shadow-purple-900/50 hover:scale-110 active:scale-95 transition-all group backdrop-blur-md"
        >
          {/* Circular progress SVG ring */}
          <svg className="absolute inset-0 w-12 h-12 -rotate-90 pointer-events-none">
            <circle
              cx="24"
              cy="24"
              r="18"
              fill="none"
              stroke="rgba(168, 85, 247, 0.2)"
              strokeWidth="2.5"
            />
            <circle
              cx="24"
              cy="24"
              r="18"
              fill="none"
              stroke="url(#gradientProgress)"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-100 ease-out"
            />
            <defs>
              <linearGradient id="gradientProgress" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          <ArrowUp size={18} className="text-purple-300 group-hover:text-pink-300 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
