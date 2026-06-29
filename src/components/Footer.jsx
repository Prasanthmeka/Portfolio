import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-6">
          
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            &lt;MP /&gt;
          </a>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/Prasanthmeka" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 glass rounded-full hover:neon-glow transition-all duration-300 group border border-white/5"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/prasanth-meka/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 glass rounded-full hover:neon-glow transition-all duration-300 group border border-white/5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a 
              href="mailto:mekaprasanth19@gmail.com" 
              className="p-3 glass rounded-full hover:neon-glow transition-all duration-300 group border border-white/5"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </a>
          </div>

          {/* Copyright text */}
          <div className="text-center text-sm text-gray-500 flex items-center gap-1.5">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by</span>
            <span className="text-gray-400 font-medium">Meka Prasanth</span>
            <span>© 2026</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
