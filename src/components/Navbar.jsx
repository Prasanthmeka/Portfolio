import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-[#020208]/80 backdrop-blur-md border-b border-white/5 shadow-lg' 
        : 'py-6 bg-transparent'
    }`}>
      {/* Scroll Progress Indicator */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent transition-transform hover:scale-105 duration-300 tracking-wider font-mono"
          >
            &lt;MP /&gt;
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const sectionName = link.href.substring(1);
              const isActive = activeSection === sectionName;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs font-medium uppercase tracking-wider transition-colors duration-300 hover:text-cyan-400 ${
                    isActive ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-[6px] left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div className={`lg:hidden fixed inset-x-0 bg-[#020208]/95 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out z-40 ${
        isOpen ? 'top-[70px] opacity-100 visible' : 'top-[-450px] opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col gap-4 py-6 px-4">
          {navLinks.map((link) => {
            const sectionName = link.href.substring(1);
            const isActive = activeSection === sectionName;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm uppercase tracking-wider font-medium py-2.5 px-4 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 text-cyan-400 border-l-2 border-cyan-400' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
