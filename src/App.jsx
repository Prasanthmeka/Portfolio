import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import AnimatedBackground from './components/AnimatedBackground';
import CursorFX from './components/CursorFX';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Manage body scroll locking when loading
  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.overflowX = 'hidden';
    }
  }, [isLoaded]);

  // Setup Scroll Reveal IntersectionObserver
  useEffect(() => {
    if (!isLoaded) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px -20px -50px -20px', // slightly offset trigger zones
      threshold: 0.1, // Trigger as soon as 10% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we don't need to observe it again
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [isLoaded]);

  return (
    <>
      {/* Cyberpunk bootloader */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* Main App Container */}
      <div 
        className={`min-h-screen bg-[#020208] text-gray-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-300 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Interactive neon canvas backplane */}
        <AnimatedBackground />

        {/* Custom cursor following pointer */}
        <CursorFX />

        {/* Header / Navbar */}
        <Navbar />
        
        {/* Page Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Achievements />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
