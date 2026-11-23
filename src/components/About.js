import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Copy, 
  Check, 
  MapPin, 
  Mail, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  Code, 
  BarChart3, 
  Database, 
  Cpu
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    const codeSnippet = `const developer = {
  name: "${personalInfo.name}",
  role: "Aspiring Software Developer & Data Analyst",
  education: "Bachelor of Computer Applications (76%)",
  location: "${personalInfo.location}",
  skills: ["Java", "Python", "React", "SQL", "Power BI"],
  hobbies: ["Exploring tech", "Data analysis", "Coding practicals"],
  isOpenForHire: true
};`;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const focusCards = [
    {
      icon: Code,
      title: "Software Development",
      description: "Writing clean, scalable code with Java, Python, C++, and object-oriented principles.",
      gradient: "from-purple-500/20 to-indigo-500/10",
      border: "border-purple-500/30",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & BI",
      description: "Extracting actionable KPIs using Power BI, Microsoft Excel, Pandas, NumPy, and SQL.",
      gradient: "from-pink-500/20 to-rose-500/10",
      border: "border-pink-500/30",
    },
    {
      icon: Database,
      title: "Database Engineering",
      description: "Designing relational schemas, queries, joins, and indexing with MySQL & SQL Server.",
      gradient: "from-blue-500/20 to-cyan-500/10",
      border: "border-blue-500/30",
    },
    {
      icon: Cpu,
      title: "Frontend Engineering",
      description: "Crafting modern, responsive user interfaces using React.js, Tailwind CSS, and HTML5/CSS3.",
      gradient: "from-amber-500/20 to-orange-500/10",
      border: "border-amber-500/30",
    },
  ];

  return (
    <section id="about" className="py-28 px-4 sm:px-6 relative overflow-hidden bg-slate-950">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-pink-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
            <span>✨ Get To Know Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="gradient-text-hero">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Code Terminal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl glass-panel border border-purple-500/30 shadow-2xl overflow-hidden group">
              {/* Terminal Window Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-mono text-gray-400 ml-2 flex items-center gap-1.5">
                    <Terminal size={13} className="text-purple-400" />
                    <span>developer_profile.ts</span>
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 rounded-lg bg-slate-800 text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-xs font-mono"
                  title="Copy snippet"
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-x-auto bg-slate-950/80">
                <p><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                <p className="pl-4"><span className="text-purple-300">name</span>: <span className="text-emerald-300">"{personalInfo.name}"</span>,</p>
                <p className="pl-4"><span className="text-purple-300">title</span>: <span className="text-emerald-300">"Software Developer & Data Analyst"</span>,</p>
                <p className="pl-4"><span className="text-purple-300">degree</span>: <span className="text-emerald-300">"BCA, Adarsh College (76%)"</span>,</p>
                <p className="pl-4"><span className="text-purple-300">location</span>: <span className="text-emerald-300">"{personalInfo.location}"</span>,</p>
                <p className="pl-4"><span className="text-purple-300">languages</span>: [<span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"C++"</span>],</p>
                <p className="pl-4"><span className="text-purple-300">databases</span>: [<span className="text-amber-300">"MySQL"</span>, <span className="text-amber-300">"SQL Server"</span>],</p>
                <p className="pl-4"><span className="text-purple-300">openForOpportunities</span>: <span className="text-pink-400">true</span></p>
                <p>&#125;;</p>
                <p className="text-gray-500 mt-2">{'// Ready to contribute to innovative software teams 🚀'}</p>
              </div>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-panel rounded-2xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase mb-1">
                  <MapPin size={14} />
                  <span>Location</span>
                </div>
                <p className="text-sm font-semibold text-white">Pune, Maharashtra</p>
              </div>

              <div className="glass-panel rounded-2xl p-4 border border-pink-500/20">
                <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase mb-1">
                  <GraduationCap size={14} />
                  <span>Education</span>
                </div>
                <p className="text-sm font-semibold text-white">BCA (76% Distinction)</p>
              </div>

              <div className="glass-panel rounded-2xl p-4 border border-blue-500/20">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase mb-1">
                  <Briefcase size={14} />
                  <span>Availability</span>
                </div>
                <p className="text-sm font-semibold text-emerald-400">Immediate / Open</p>
              </div>

              <div className="glass-panel rounded-2xl p-4 border border-amber-500/20">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase mb-1">
                  <Phone size={14} />
                  <span>Phone</span>
                </div>
                <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-white hover:text-purple-300 transition-colors">
                  +91 9209153212
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & 4 Competency Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Aspiring Developer building solutions with{' '}
                <span className="gradient-text-hero">code, logic, and data.</span>
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
                {personalInfo.about}
              </p>
            </div>

            {/* 4 Feature Focus Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {focusCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className={`rounded-2xl p-5 bg-gradient-to-br ${card.gradient} border ${card.border} backdrop-blur-md transition-all shadow-lg`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-purple-300 mb-3 shadow-md">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">{card.title}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">{card.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl glass-panel text-white hover:border-purple-400 font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all hover:scale-105"
              >
                <GithubIcon size={16} />
                <span>GitHub Profile</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-3.5 rounded-xl border border-pink-500/40 text-pink-300 hover:text-white hover:bg-pink-600/20 font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all"
              >
                <Mail size={16} />
                <span>dhanawadeshweta6@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
