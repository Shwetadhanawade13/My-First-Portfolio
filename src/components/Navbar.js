import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Code2, 
  FolderGit2, 
  GraduationCap, 
  Award, 
  Mail, 
  FileDown, 
  Sun, 
  Moon, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'experience', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', ...navLinks.map((l) => l.id)];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // eslint-disable-line

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleResumeClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1 },
      colors: ['#a855f7', '#ec4899', '#3b82f6'],
    });
    window.open('mailto:dhanawadeshweta6@gmail.com?subject=Resume%20Request%20-%20Shweta%20Dhanawade', '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4 pt-3 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-6xl mx-auto rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? 'glass-panel shadow-2xl shadow-purple-950/40 border-purple-500/30'
              : 'bg-slate-950/40 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Logo with Gradient & Pulsing Orb */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-blue-500 p-0.5 shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-pink-300">
                S
              </div>
            </div>
            <div className="text-left">
              <span className="font-extrabold text-lg text-white tracking-tight flex items-center gap-1">
                Shweta<span className="text-pink-500">.</span>
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-purple-500/20 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-purple-300 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80 rounded-lg shadow-md shadow-purple-500/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    <Icon size={14} />
                  </span>
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl bg-slate-900/80 border border-purple-500/20 hover:border-purple-400/50 text-gray-300 hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            >
              {darkMode ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-purple-400" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={handleResumeClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              <FileDown size={14} />
              <span>Resume</span>
              <Sparkles size={12} className="text-yellow-300" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden w-9 h-9 rounded-xl bg-slate-900/80 border border-purple-500/20 flex items-center justify-center text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl glass-panel p-5 border border-purple-500/30 lg:hidden shadow-2xl space-y-2"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span>{link.label}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-purple-500/20">
              <button
                onClick={handleResumeClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-purple-500/30"
              >
                <FileDown size={16} />
                <span>Download / Request Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
