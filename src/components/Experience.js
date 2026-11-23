import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Award, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { education } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-4 sm:px-6 relative overflow-hidden bg-universe">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
            <span>🎓 Academic Track Record</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Education & <span className="gradient-text-hero">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Structured computer applications degree, high school foundations, and hands-on software development training.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 -translate-x-1/2 opacity-40 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

          <div className="space-y-12 sm:space-y-16">
            {education.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  {/* Central Node Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-slate-950 border-2 border-purple-500 flex items-center justify-center text-xl shadow-xl shadow-purple-950/60 group-hover:scale-110 group-hover:border-pink-400 group-hover:shadow-purple-500/30 transition-all duration-300 z-10">
                    <span className="text-2xl select-none">{item.icon}</span>
                  </div>

                  {/* Desktop layout spacer */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card */}
                  <div className="ml-14 md:ml-0 md:w-1/2">
                    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/25 hover:border-purple-400/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                          <Calendar size={12} />
                          <span>{item.duration}</span>
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <Award size={13} />
                          <span>{item.score}</span>
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-purple-400 font-semibold text-sm mt-1">
                        {item.institution}
                      </p>
                      <p className="text-gray-400 text-xs mt-1 flex items-center gap-1 mb-4">
                        <MapPin size={12} className="text-pink-400" />
                        <span>{item.location}</span>
                      </p>

                      {/* Detail points */}
                      <ul className="space-y-2 pt-3 border-t border-purple-500/15">
                        {item.details.map((point, i) => (
                          <li key={i} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2 leading-relaxed">
                            <span className="text-purple-400 mt-1 shrink-0">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Practical Learning Summary Card */}
        <div className="mt-20 p-8 rounded-3xl glass-panel border border-purple-500/30 text-center relative overflow-hidden">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white mx-auto mb-4 shadow-lg shadow-purple-500/30">
            <Sparkles size={24} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Practical Learning Focus</h3>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
            Prioritizing hands-on engineering experience in frontend UI development, relational databases, AI-powered matchmaking algorithms, and business intelligence reporting.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Frontend & Responsive Design",
              "Python & Data Wrangling",
              "SQL Query Design",
              "Power BI Dashboards",
              "OOP Architecture",
              "Git & GitHub Workflow",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-200 border border-purple-500/30 flex items-center gap-1.5"
              >
                <CheckCircle2 size={13} className="text-purple-400" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
