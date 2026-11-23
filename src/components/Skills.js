import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Database, 
  BarChart, 
  Wrench, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech Stack', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'web', label: 'Web Tech', icon: Globe },
    { id: 'database', label: 'Databases', icon: Database },
    { id: 'analytics', label: 'Data Analytics', icon: BarChart },
    { id: 'tools', label: 'Developer Tools', icon: Wrench },
  ];

  // Aggregate items based on active tab
  const getDisplayedSkills = () => {
    if (activeTab === 'languages') return skills.languages;
    if (activeTab === 'web') return skills.web;
    if (activeTab === 'database') return skills.database;
    if (activeTab === 'analytics') return skills.analytics;
    if (activeTab === 'tools') return skills.tools;

    return [
      ...skills.languages.map((s) => ({ ...s, category: 'Language' })),
      ...skills.web.map((s) => ({ ...s, category: 'Web' })),
      ...skills.database.map((s) => ({ ...s, category: 'Database' })),
      ...skills.analytics.map((s) => ({ ...s, category: 'Analytics' })),
      ...skills.tools.map((s) => ({ ...s, category: 'Tools' })),
    ];
  };

  const displayedSkills = getDisplayedSkills();

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 relative overflow-hidden bg-universe">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
            <span>⚡ Core Technical Proficiencies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Technical <span className="gradient-text-hero">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Hands-on technical capabilities developed through academic coursework, practical application builds, and self-directed software projects.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'text-white'
                    : 'glass-panel text-gray-400 hover:text-purple-300 hover:border-purple-400/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategoryTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg shadow-purple-500/30"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">
                  <Icon size={16} />
                </span>
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Skills Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          <AnimatePresence>
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="glass-panel rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-purple-500/20 hover:border-purple-400/60 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 group relative overflow-hidden transition-all"
              >
                {/* Glow pill behind icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} p-0.5 shadow-md shadow-purple-900/30 group-hover:scale-110 transition-transform mb-3`}>
                  <div className="w-full h-full bg-slate-950/80 rounded-[14px] flex items-center justify-center text-2xl">
                    {skill.icon}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>

                {skill.category && (
                  <span className="mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {skill.category}
                  </span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Additional Competencies Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl glass-panel border border-purple-500/30 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-500/30">
              <Sparkles size={28} />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-white mb-1">
                Data Engineering & Software Methodology
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                Data Cleaning • KPI Analysis • Power Query • Basic DAX • Object-Oriented Programming (OOPs) • Relational Schema Design • Responsive UI Architecture
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold whitespace-nowrap">
              <CheckCircle2 size={14} />
              <span>Job-Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
