import React, { useState, useEffect } from 'react';

const systemLogs = [
  'INITIALIZING PRASANTH_OS v2.0.0...',
  'LOADING NEURAL MESH GRID...',
  'ESTABLISHING SECURE PORTFOLIO TUNNEL...',
  'FETCHING SDE 1 CORE CONSOLE...',
  'MOUNTING VERIZON STACK ADAPTERS...',
  'SYSTEM STATUS: ALL CORE MODULES ONLINE.',
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [glitchText, setGlitchText] = useState('BOOTING...');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Increment loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increments for realism
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Match progress percentage to log messages
    const currentLogIndex = Math.min(
      Math.floor((progress / 100) * systemLogs.length),
      systemLogs.length - 1
    );
    setLogIndex(currentLogIndex);

    if (progress === 100) {
      setGlitchText('ACCESS GRANTED');
      // Smooth fade out delay
      const fadeTimeout = setTimeout(() => {
        setIsFading(true);
        const completeTimeout = setTimeout(() => {
          onComplete();
        }, 600); // Duration of fade-out transition
        return () => clearTimeout(completeTimeout);
      }, 500);
      return () => clearTimeout(fadeTimeout);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-[#020208] z-9999 flex flex-col items-center justify-center font-mono text-cyan-400 select-none transition-all duration-700 ease-in-out ${
        isFading ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Matrix/Tech overlay */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-lg px-6 md:px-0 space-y-8 z-10">
        {/* Terminal Header */}
        <div className="border border-cyan-500/20 bg-cyan-950/10 rounded-lg p-6 backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.05)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          
          <div className="flex items-center justify-between mb-4 border-b border-cyan-500/10 pb-2 text-xs text-cyan-500/60">
            <span>TERMINAL CONSOLE_SH</span>
            <span>SYSTEMS: STABLE</span>
          </div>

          {/* Glitch Status */}
          <div className="h-10 flex items-center mb-6">
            <span
              className="text-2xl font-bold glitch-text tracking-widest text-fuchsia-500"
              data-text={glitchText}
            >
              {glitchText}
            </span>
          </div>

          {/* Log Stream */}
          <div className="space-y-1.5 text-xs md:text-sm text-gray-400 h-28 overflow-hidden select-none">
            {systemLogs.slice(0, logIndex + 1).map((log, index) => (
              <div key={index} className="flex gap-2">
                <span className="text-cyan-500">&gt;</span>
                <span className={index === logIndex ? 'text-white' : ''}>{log}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Loading Bar & Stats */}
        <div className="space-y-3">
          <div className="flex justify-between items-end text-sm">
            <span className="text-cyan-400/70">DECRYPTING PACKETS...</span>
            <span className="text-xl font-bold text-white tracking-wider">{progress}%</span>
          </div>

          {/* Glowing track */}
          <div className="h-2 bg-cyan-950/30 rounded-full border border-cyan-500/20 overflow-hidden p-[1px] shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 rounded-full transition-all duration-100 ease-out shadow-[0_0_8px_rgba(34,211,238,0.5)]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-[10px] text-cyan-500/50">
            <span>MEM: 9.04GB/S</span>
            <span>PORT: 8080</span>
          </div>
        </div>
      </div>
    </div>
  );
}
