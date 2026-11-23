import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  const [clickedId, setClickedId] = useState(null);

  const handleCardClick = (id) => {
    setClickedId(id);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#ec4899', '#3b82f6'],
    });
    setTimeout(() => setClickedId(null), 1500);
  };

  return (
    <section id="certifications" className="py-28 px-4 sm:px-6 relative overflow-hidden bg-slate-950">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
            <span>🏆 Professional Credentials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Technical <span className="gradient-text-hero">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Structured course certifications verifying core competencies in programming fundamentals, object-oriented concepts, and relational database systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => handleCardClick(cert.id)}
              className="glass-panel rounded-3xl p-7 border border-purple-500/25 hover:border-purple-400/60 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Card top gradient indicator */}
              <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${cert.color}`} />

              <div>
                {/* Icon Banner */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl mb-6 shadow-lg shadow-purple-950/40 group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>

                {/* Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                    <Award size={12} />
                    <span>Verified Credential</span>
                  </span>
                  {clickedId === cert.id && (
                    <span className="text-xs text-pink-400 font-bold animate-bounce flex items-center gap-1">
                      <Sparkles size={12} />
                      <span>Verified!</span>
                    </span>
                  )}
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-1.5">
                  {cert.title}
                </h3>
                <p className="text-xs text-gray-400 mb-5 flex items-center gap-1">
                  <BookOpen size={12} className="text-purple-400" />
                  <span>{cert.issuer}</span>
                </p>

                {/* Competencies covered */}
                <div className="space-y-2 pt-4 border-t border-purple-500/15">
                  <p className="text-[11px] font-bold text-purple-300 uppercase tracking-wider mb-2">
                    Key Competencies Covered:
                  </p>
                  {cert.skillsCovered.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle size={13} className="text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 mt-6 border-t border-purple-500/15 flex items-center justify-between text-xs text-gray-400">
                <span className="text-purple-300 font-medium">Click to celebrate 🎓</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span>Certified</span>
                  <CheckCircle size={13} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
