import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Loader from './components/Loader';
import SpotlightBackground from './components/SpotlightBackground';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <AnimatePresence>
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
        {/* Dynamic Mouse Spotlight & Ambient Lights */}
        <SpotlightBackground />

        {/* Global Floating Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Circular Progress Back-to-Top Button */}
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
