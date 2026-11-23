import React from 'react';
import { 
  Mail, 
  Sparkles
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050f] border-t border-purple-500/20 py-16 px-4 sm:px-6 overflow-hidden">
      {/* Background glow banner */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-gradient-to-r from-purple-600/10 via-pink-600/15 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-purple-500/15 items-center">
          {/* Logo & Headline */}
          <div className="md:col-span-5 text-center md:text-left space-y-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="gradient-text-hero text-3xl font-black tracking-tight inline-block"
            >
              Shweta Dhanawade<span className="text-pink-500">.</span>
            </button>
            <p className="text-sm text-gray-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Aspiring Software Developer & Data Analyst. Passionate about building modern applications, extracting insights from data, and solving real-world challenges.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap justify-center gap-x-6 gap-y-2.5">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xs uppercase tracking-wider font-semibold text-gray-400 hover:text-purple-300 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Profiles */}
          <div className="md:col-span-3 flex justify-center md:justify-end gap-2.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-2xl glass-panel border border-purple-500/30 hover:border-purple-400 text-gray-300 hover:text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-2xl glass-panel border border-purple-500/30 hover:border-purple-400 text-gray-300 hover:text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="w-11 h-11 rounded-2xl glass-panel border border-purple-500/30 hover:border-purple-400 text-gray-300 hover:text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} Shweta Dhanawade. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-400">
            <span>Built with modern</span>
            <span className="text-purple-400 font-semibold">React.js</span>,
            <span className="text-pink-400 font-semibold">Tailwind CSS</span> &
            <span className="text-blue-400 font-semibold">Framer Motion</span>
            <Sparkles size={12} className="text-amber-400 ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
