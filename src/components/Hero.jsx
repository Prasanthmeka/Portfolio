import React, { useState, useEffect } from 'react';
import { Code, Star, GraduationCap, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const words = ["Software Development Engineer", "Java Full Stack Developer", "React Developer", "Collaborative Problem Solver"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setTypedText(prev => prev.slice(0, -1));
        setTypingSpeed(75);
      }, typingSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    // Handle full word typed
    if (!isDeleting && typedText === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500); // Wait before starting delete
    }

    // Handle full word deleted
    if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setTypingSpeed(150);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-16 md:py-20">
      {/* Background blobs and grid */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1000 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-cyan-400 font-medium tracking-wider uppercase text-sm md:text-base">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Hi, I'm<br />
                <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_6s_linear_infinite]">
                  Meka Prasanth
                </span>
              </h1>
            </div>

            {/* Typewriter subtitle */}
            <div className="h-8 md:h-10 flex items-center justify-center lg:justify-start">
              <p className="text-xl md:text-2xl text-gray-400 font-semibold font-mono">
                <span className="text-fuchsia-400">&lt;</span>
                <span className="text-cyan-300">{typedText}</span>
                <span className="typing-cursor text-cyan-400">|</span>
                <span className="text-fuchsia-400"> /&gt;</span>
              </p>
            </div>

            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Software Development Engineer 1 at <span className="text-red-500 font-semibold">Verizon</span> specializing in the React ecosystem and full-stack Java development. B.Tech Computer Science graduate with a CGPA of 9.04.
            </p>
            <p className="text-sm md:text-base text-gray-500 italic">
              "Building Scalable & High-Quality Enterprise Web Applications"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="btn-neon px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-neon px-8 py-3 border border-cyan-500/50 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-300 text-center"
              >
                Let's Connect
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/Prasanthmeka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:neon-glow transition-all duration-300 group"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/prasanth-meka/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:neon-glow transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="gradient-border glass-card rounded-3xl p-6 md:p-8 max-w-sm w-full float">
              <div className="flex justify-center mb-6">
                <div className="profile-ring w-32 h-32 md:w-40 md:h-40 rounded-full p-1">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      alt="Meka Prasanth"
                      className="object-cover w-full h-full"
                      src="./images/prasanth.jpg?v=2"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Meka Prasanth</h2>
                <p className="text-cyan-400 font-medium">Software Development Engineer</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 glass rounded-xl">
                  <Code className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 mx-auto mb-1" />
                  <p className="text-lg md:text-xl font-bold text-white">6+</p>
                  <p className="text-xs text-gray-400">Projects</p>
                </div>
                <div className="text-center p-3 glass rounded-xl">
                  <Star className="w-5 h-5 md:w-6 md:h-6 text-fuchsia-400 mx-auto mb-1" />
                  <p className="text-lg md:text-xl font-bold text-white">10+</p>
                  <p className="text-xs text-gray-400">Technologies</p>
                </div>
                <div className="text-center p-3 glass rounded-xl">
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-green-400 mx-auto mb-1" />
                  <p className="text-lg md:text-xl font-bold text-white">1.5+</p>
                  <p className="text-xs text-gray-400">Years Exp</p>
                </div>
              </div>

              <div className="glass rounded-xl p-4 mb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400 text-sm">CGPA</span>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">9.04</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full transition-all duration-1000"
                    style={{ width: '90.4%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
