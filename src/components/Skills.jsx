import React from 'react';
import { Code, Globe, Database, GitBranch, BookOpen, Zap, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    category: 'Languages',
    icon: Code,
    gradient: 'from-cyan-400 to-blue-500',
    skills: ['C', 'Java', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend & UI',
    icon: Globe,
    gradient: 'from-blue-400 to-cyan-500',
    skills: ['React', 'Redux Toolkit (RTK)', 'Material UI', 'Tailwind CSS'],
  },
  {
    category: 'Database',
    icon: Database,
    gradient: 'from-teal-400 to-green-500',
    skills: ['MySQL'],
  },
  {
    category: 'Tools',
    icon: GitBranch,
    gradient: 'from-purple-400 to-blue-500',
    skills: ['Git', 'GitHub Copilot'],
  },
  {
    category: 'Prompt Engineering',
    icon: Lightbulb,
    gradient: 'from-violet-400 to-purple-500',
    skills: ['Prompt Engineering', 'AI Ethics', 'Security Guidelines'],
  },
  {
    category: 'Soft Skills',
    icon: Zap,
    gradient: 'from-pink-400 to-rose-500',
    skills: ['Strong Leadership', 'Communication', 'Quick Learner'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive skill set built through hands-on experience
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.category}
                className="reveal skill-card glass-card rounded-2xl p-6 md:p-7 group hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-white/10"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 glass rounded-lg text-xs md:text-sm font-medium text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 cursor-default hover:bg-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
