import React from 'react';
import { Trophy, Award, Lightbulb, Rocket, Briefcase } from 'lucide-react';

const achievementsList = [
  {
    title: 'SDE 1 at Verizon',
    description: 'Full-time Software Development Engineer contributing to telecom service management web platforms.',
    icon: Briefcase,
    colors: 'from-red-500 to-red-700',
    shadow: 'rgba(239, 68, 68, 0.25)',
  },
  {
    title: 'Smart India Hackathon',
    description: 'Participated in the National-level Smart India Hackathon to solve real-world industry challenges.',
    icon: Lightbulb,
    colors: 'from-fuchsia-400 to-pink-500',
    shadow: 'rgba(232, 121, 249, 0.25)',
  },
  {
    title: 'HACKTRAID Season 1',
    description: 'Collaborated in building innovative solutions and demonstrated strong problem-solving expertise.',
    icon: Trophy,
    colors: 'from-yellow-400 to-orange-500',
    shadow: 'rgba(250, 204, 21, 0.25)',
  },
  {
    title: 'Top Academic Performance',
    description: 'Graduated in B.Tech Computer Science with a high academic score of CGPA 9.04.',
    icon: Award,
    colors: 'from-green-400 to-emerald-500',
    shadow: 'rgba(74, 222, 128, 0.25)',
  },
  {
    title: 'AI & Full Stack Projects',
    description: 'Developed models for brain hemorrhage detection and fake image classification.',
    icon: Rocket,
    colors: 'from-cyan-400 to-blue-500',
    shadow: 'rgba(34, 211, 238, 0.25)',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Milestones that reflect my dedication to excellence
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <div 
                key={ach.title}
                className="reveal achievement-card glass-card rounded-2xl p-6 text-center group cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div 
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${ach.colors} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 0 30px ${ach.shadow}` }}
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {ach.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {ach.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
