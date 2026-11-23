import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Calendar,
  Layers,
  LayoutGrid,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="h-full rounded-3xl glass-panel border border-purple-500/25 hover:border-purple-400/60 shadow-2xl hover:shadow-purple-500/20 flex flex-col overflow-hidden group transition-all duration-300">
      {/* Top Banner with Gradient Art & Project Meta */}
      <div className={`relative h-56 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-between overflow-hidden`}>
        {/* Glow & Geometric Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-black/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
        
        {/* Top Badges */}
        <div className="flex items-center justify-between z-10">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-black/50 text-white backdrop-blur-md border border-white/20 shadow-md">
            {project.badge}
          </span>
          {project.featured && (
            <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-amber-400 text-amber-950 flex items-center gap-1 shadow-lg shadow-amber-400/30">
              <Sparkles size={13} />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* Title Inside Banner */}
        <div className="z-10 text-white">
          <div className="text-4xl mb-2 drop-shadow-md select-none">{project.icon}</div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight drop-shadow-md">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-purple-100 font-medium tracking-wide mt-1 flex items-center gap-1.5 opacity-90">
            <Calendar size={13} />
            <span>{project.duration}</span>
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5 bg-slate-950/70">
        <div className="space-y-4">
          <p className="text-sm text-gray-300 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Key Contribution & Specific Responsibilities Drawer */}
          <div className="rounded-2xl bg-purple-950/40 border border-purple-500/25 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                <Layers size={14} className="text-pink-400" />
                <span>My Specific Contribution</span>
              </span>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-1 transition-colors"
              >
                <span>{isExpanded ? 'Less' : 'More'}</span>
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>

            <p className={`text-xs text-gray-300 leading-relaxed transition-all duration-300 ${
              isExpanded ? '' : 'line-clamp-2'
            }`}>
              {project.contribution}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="space-y-1.5">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Technologies Used</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-900 border border-purple-500/30 text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Actions / GitHub link */}
        <div className="pt-4 border-t border-purple-500/15 flex items-center gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-600/30 hover:from-purple-600 hover:to-pink-600 border border-purple-500/40 hover:border-purple-400 text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-purple-500/30 hover:scale-[1.02]"
            >
              <GithubIcon size={16} />
              <span>View Verified Repository ↗</span>
            </a>
          ) : (
            <div className="w-full py-3 px-4 rounded-xl bg-slate-900 text-gray-400 text-xs font-semibold text-center border border-white/5">
              Academic Demonstration Project
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 relative overflow-hidden bg-slate-950">
      {/* Background radial spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
            <span>🚀 Practical Software Engineering</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Featured <span className="gradient-text-hero">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mx-auto mt-4" />
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Showcasing real-world full-stack architectures, AI-based matching workflows, and comprehensive data analytics dashboards.
          </p>

          {/* View Mode Toggle Button */}
          <div className="mt-8 inline-flex items-center gap-1.5 p-1 rounded-xl glass-panel border border-purple-500/30">
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'carousel'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <SlidersHorizontal size={14} />
              <span>Interactive Carousel</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <LayoutGrid size={14} />
              <span>All Projects Grid</span>
            </button>
          </div>
        </div>

        {/* Carousel View */}
        {viewMode === 'carousel' ? (
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projects[currentIndex].id}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ProjectCard project={projects[currentIndex]} />
                </motion.div>
              </AnimatePresence>

              {/* Prev & Next Floating Navigation Buttons */}
              <button
                onClick={prevSlide}
                aria-label="Previous Project"
                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl glass-panel border border-purple-500/40 text-white flex items-center justify-center hover:bg-purple-600/80 hover:scale-110 active:scale-95 transition-all shadow-xl z-20"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next Project"
                className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl glass-panel border border-purple-500/40 text-white flex items-center justify-center hover:bg-purple-600/80 hover:scale-110 active:scale-95 transition-all shadow-xl z-20"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Carousel Slide Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Jump to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-10 bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'w-2.5 bg-slate-800 hover:bg-purple-500/50'
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-xs text-gray-500 mt-2 font-mono">
              Slide {currentIndex + 1} of {projects.length}
            </p>
          </div>
        ) : (
          /* Grid View */
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Bottom GitHub Callout Banner */}
        <div className="mt-20 p-8 rounded-3xl glass-panel border border-purple-500/30 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl font-black text-white mb-2">Want to explore all my code?</h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto mb-6">
            Review commit histories, branch workflows, and technical implementations directly on GitHub.
          </p>
          <a
            href="https://github.com/Shwetadhanawade13"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs tracking-wider uppercase transition-all hover:scale-105 shadow-lg shadow-purple-600/30"
          >
            <GithubIcon size={16} />
            <span>Visit @Shwetadhanawade13 on GitHub ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
