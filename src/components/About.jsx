import React from 'react';
import { Target, Lightbulb, Rocket, Brain } from 'lucide-react';

const attributes = [
  {
    icon: Target,
    title: 'Focused',
    description: 'Dedicated to mastering full stack development',
  },
  {
    icon: Lightbulb,
    title: 'Innovative',
    description: 'Creating solutions for real-world problems',
  },
  {
    icon: Rocket,
    title: 'Driven',
    description: 'Always pushing boundaries in tech',
  },
  {
    icon: Brain,
    title: 'AI Enthusiast',
    description: 'Exploring the frontiers of artificial intelligence',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Who I Am & Objective */}
          <div className="space-y-6 reveal">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I am a <span className="text-cyan-400">Software Development Engineer</span> specializing in the React ecosystem to build high-impact, responsive UI features for enterprise platforms. I have hands-on experience in full-stack Java development, designing SQL databases, and developing robust APIs.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I graduated with a B.Tech in Computer Science from <span className="text-cyan-300 font-medium">Lendi Institute of Engineering and Technology</span> (2021 - 2025) with an academic record of <span className="text-yellow-400 font-semibold">CGPA 9.04</span>.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-cyan-400" />
                Career Objective
              </h3>
              <p className="text-gray-400 leading-relaxed">
                To leverage my technical expertise in the React ecosystem and Java full-stack development to build high-impact, scalable, and responsive applications. I aim to bridge complex technical requirements with robust software solutions, driving efficiency, accelerating delivery, and maintaining high engineering standards.
              </p>
            </div>
          </div>

          {/* Right Column: Grid Attributes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal">
            {attributes.map((attr, idx) => {
              const Icon = attr.icon;
              return (
                <div
                  key={attr.title}
                  className="glass-card rounded-2xl p-6 group hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-cyan-400/30"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{attr.title}</h4>
                  <p className="text-sm text-gray-400">{attr.description}</p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Panel: Innovation Mindset */}
        <div className="mt-12 md:mt-16 reveal">
          <div className="gradient-border glass-card rounded-2xl p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-yellow-400 animate-pulse" />
              <h3 className="text-xl md:text-2xl font-bold text-white">Innovation Mindset</h3>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I believe in the power of technology to transform enterprise operations and user experiences. From geofencing automated systems to deep learning models for medical scan analysis, I am committed to leveraging modern engineering practices to build secure, scalable, and high-impact solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
