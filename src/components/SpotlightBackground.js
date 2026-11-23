import React, { useEffect, useState } from 'react';

const SpotlightBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Interactive mouse spotlight glow */}
      <div
        className="absolute w-[650px] h-[650px] rounded-full opacity-35 blur-[120px] transition-transform duration-75 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(236, 72, 153, 0.12) 35%, rgba(59, 130, 246, 0.08) 60%, transparent 75%)',
          left: `${mousePosition.x - 325}px`,
          top: `${mousePosition.y - 325}px`,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Subtle floating background ambient lights */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-purple-700/10 blur-[130px] animate-pulse-glow" />
      <div className="absolute top-[45%] right-[5%] w-[500px] h-[500px] rounded-full bg-pink-700/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-blue-700/10 blur-[130px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
      
      {/* Geometric background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
};

export default SpotlightBackground;
