import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.6 }}
    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712]"
  >
    <div className="relative mb-6">
      <div className="w-20 h-20 rounded-2xl border-2 border-purple-500/20 border-t-purple-500 border-r-pink-500 animate-spin" />
      <div className="absolute inset-2 w-16 h-16 rounded-2xl border-2 border-blue-500/20 border-b-blue-500 border-l-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
      <div className="absolute inset-0 flex items-center justify-center font-black text-xl gradient-text-hero">
        S
      </div>
    </div>
    
    <div className="gradient-text-hero text-2xl font-black tracking-widest">
      Shweta<span className="text-pink-500">.</span>
    </div>
    <div className="flex items-center gap-1.5 mt-3 text-xs text-purple-300/80 font-mono">
      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
      <span>Loading Portfolio...</span>
    </div>
  </motion.div>
);

export default Loader;
