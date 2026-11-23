import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  MessageSquare, 
  MapPin,
  Mail,
  ChevronDown,
  Sparkles,
  Layers,
  Award,
  BookOpen
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo, stats } from '../data/portfolioData';

/* Animated Typewriter Hook */
function useTypewriter(words, speed = 85, deleteSpeed = 50, pause = 1600) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timer;

    if (!deleting && displayed === current) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed === '') {
      setDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setDisplayed(
          deleting
            ? current.slice(0, displayed.length - 1)
            : current.slice(0, displayed.length + 1)
        );
      }, deleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timer);
  }, [displayed, deleting, wordIdx, words, speed, deleteSpeed, pause]);

  return displayed;
}

/* Count-Up Statistic Hook */
function useCountUp(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = Math.max(1, Math.ceil(target / (duration / 25)));
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [target, duration, started]);

  return count;
}

/* Single Statistic Card Component */
const StatCard = ({ stat, isVisible, icon: Icon, delay }) => {
  const count = useCountUp(stat.value, 1800, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-panel rounded-2xl p-5 border border-purple-500/20 hover:border-purple-400/50 shadow-xl relative overflow-hidden group transition-all"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600/30 via-pink-600/20 to-blue-600/30 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:text-pink-300 transition-all shadow-md">
          <Icon size={24} />
        </div>
        <div>
          <div className="text-3xl font-black gradient-text-hero tracking-tight">
            {count}
            <span className="text-pink-400">{stat.suffix}</span>
          </div>
          <p className="text-xs font-semibold text-gray-400 tracking-wide uppercase mt-0.5">
            {stat.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const typedTitle = useTypewriter(personalInfo.titles);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const statIcons = [Rocket, Layers, Award, BookOpen];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-universe"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 flex-1 flex flex-col justify-center">
        {/* Top Grid: Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 pb-12">
          {/* Left Column: Introduction & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase shadow-lg shadow-emerald-950/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for Opportunities</span>
              <Sparkles size={13} className="text-emerald-300 ml-1" />
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-purple-300 text-lg sm:text-xl font-medium tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
                <span className="gradient-text-hero">Shweta Dhanawade</span>
              </h1>
            </div>

            {/* Dynamic Typewriter Title */}
            <div className="h-14 sm:h-16 flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-purple-950/50 border border-purple-500/30 backdrop-blur-md">
                <span className="text-purple-400 font-mono text-sm sm:text-base font-bold">&lt;</span>
                <span className="text-base sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-200 to-white min-w-[220px] sm:min-w-[320px] text-left">
                  {typedTitle}
                </span>
                <span className="w-0.5 h-6 bg-pink-400 animate-pulse" />
                <span className="text-purple-400 font-mono text-sm sm:text-base font-bold">/&gt;</span>
              </div>
            </div>

            {/* Narrative Subtitle */}
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Passionate about building innovative software solutions and transforming data into meaningful insights. I enjoy learning new technologies, solving problems, and creating projects that make a difference.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold text-sm tracking-wider uppercase btn-glow-primary flex items-center justify-center gap-2.5 group"
              >
                <span>Explore My Projects</span>
                <Rocket size={17} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-purple-200 hover:text-white font-bold text-sm tracking-wider uppercase btn-glow-secondary flex items-center justify-center gap-2.5 group"
              >
                <span>Let's Connect</span>
                <MessageSquare size={17} className="group-hover:scale-110 transition-transform text-pink-400" />
              </button>
            </div>

            {/* Social Links & Location Quick Ribbon */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5 text-gray-300">
                <MapPin size={14} className="text-pink-400" />
                <span>Pune, Maharashtra, India</span>
              </span>
              <span className="text-purple-600">•</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
              <span className="text-purple-600">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>
              <span className="text-purple-600">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Developer Avatar Portal with Orbital Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Spinning gradient rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/25 animate-spin-superslow" />
              <div className="absolute -inset-4 rounded-full border border-pink-500/20 animate-spin-superslow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
              <div className="absolute -inset-10 rounded-full border border-blue-500/10" />

              {/* Glowing central orb */}
              <div className="relative w-60 h-60 sm:w-76 sm:h-76 rounded-3xl p-1 bg-gradient-to-tr from-purple-600 via-pink-600 to-blue-500 shadow-2xl shadow-purple-900/60 animate-glow">
                <div className="w-full h-full rounded-[22px] bg-slate-950/95 flex flex-col items-center justify-center overflow-hidden relative p-6">
                  {/* Subtle code matrix watermark */}
                  <div className="absolute inset-0 opacity-15 font-mono text-[10px] text-purple-400 p-4 leading-tight pointer-events-none select-none">
                    <code>
                      def build_future():<br />
                      &nbsp;&nbsp;skills = ['Python', 'Java']<br />
                      &nbsp;&nbsp;vision = 'Innovate'<br />
                      &nbsp;&nbsp;return impact
                    </code>
                  </div>

                  <div className="text-7xl sm:text-8xl mb-3 animate-float-slow select-none">
                    👩‍💻
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tight">
                    Shweta Dhanawade
                  </h3>
                  <p className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mt-1">
                    Software Developer & Analyst
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-[11px] text-purple-200">
                    <span>🎓 BCA Distinction (76%)</span>
                  </div>
                </div>
              </div>

              {/* Orbital Technology Badges */}
              <div className="absolute -top-3 left-4 glass-panel rounded-2xl px-3.5 py-2 text-xs font-bold text-white border border-purple-500/40 shadow-lg shadow-purple-950/40 animate-float-slow flex items-center gap-2">
                <span className="text-base">☕</span>
                <span>Java & OOPs</span>
              </div>

              <div className="absolute top-1/4 -right-6 glass-panel rounded-2xl px-3.5 py-2 text-xs font-bold text-white border border-pink-500/40 shadow-lg shadow-pink-950/40 animate-float-reverse flex items-center gap-2">
                <span className="text-base">🐍</span>
                <span>Python & Data</span>
              </div>

              <div className="absolute -bottom-4 right-6 glass-panel rounded-2xl px-3.5 py-2 text-xs font-bold text-white border border-blue-500/40 shadow-lg shadow-blue-950/40 animate-float-slow flex items-center gap-2">
                <span className="text-base">⚛️</span>
                <span>React & Web</span>
              </div>

              <div className="absolute bottom-1/4 -left-6 glass-panel rounded-2xl px-3.5 py-2 text-xs font-bold text-white border border-amber-500/40 shadow-lg shadow-amber-950/40 animate-float-reverse flex items-center gap-2">
                <span className="text-base">📊</span>
                <span>Power BI & SQL</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: 4 Animated Count-Up Statistics Cards */}
        <div ref={statsRef} className="pt-6 pb-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <StatCard
                key={stat.label}
                stat={stat}
                isVisible={statsVisible}
                icon={statIcons[idx]}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-gray-500 hover:text-purple-400 transition-colors cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-[11px] font-bold uppercase tracking-widest">Scroll Down</span>
          <ChevronDown size={18} className="animate-bounce text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
