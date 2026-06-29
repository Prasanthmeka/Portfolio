import React, { useState } from 'react';
import { Award, GraduationCap, Brain, Eye, ArrowUpRight } from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';

const projects = [
  {
    title: 'LearnOQuBe',
    description: 'Developed an interactive educational platform that enables students to access learning resources, track academic progress, and improve engagement through a user-friendly digital environment. Designed responsive interfaces and optimized usability for better learning experiences.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Prasanthmeka/STUDENT-LEARNING-PORTAL',
    icon: GraduationCap,
    glowClass: 'hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]',
    borderClass: 'hover:border-cyan-400/40',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-400/10 group-hover:bg-cyan-400/20',
    iconAnim: 'group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300',
    blobGradient: 'from-cyan-500/20 to-blue-500/5',
    accentText: 'group-hover:text-cyan-400',
  },
  {
    title: 'Brain Hemorrhage Detection',
    description: 'Developed and implemented a deep learning model for automated detection of brain hemorrhages from CT scans. Applied image classification and segmentation techniques to localize hemorrhagic regions, improving diagnostic support for radiologists.',
    tags: ['Python', 'Deep Learning', 'CNN', 'Image Segmentation', 'TensorFlow', 'Computer Vision'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Prasanthmeka/Brain-Hemorrhage-Detection',
    icon: Brain,
    glowClass: 'hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]',
    borderClass: 'hover:border-rose-400/40',
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-400/10 group-hover:bg-rose-400/20',
    iconAnim: 'group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300',
    blobGradient: 'from-rose-500/20 to-red-500/5',
    accentText: 'group-hover:text-rose-400',
  },
  {
    title: 'Fake Image Detection',
    description: 'Developed and implemented advanced algorithms like CNN and also using metadata analysis for fake image recognition, enhancing accuracy and efficiency in identifying manipulated images. Utilized machine learning techniques to analyze image authenticity and detect forgery patterns.',
    tags: ['Python', 'Machine Learning', 'CNN', 'Metadata Analysis', 'Image Authenticity', 'Forgery Detection'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Prasanthmeka/Fake-Image-Detection',
    icon: Eye,
    glowClass: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]',
    borderClass: 'hover:border-purple-400/40',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-400/10 group-hover:bg-purple-400/20',
    iconAnim: 'group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500',
    blobGradient: 'from-purple-500/20 to-indigo-500/5',
    accentText: 'group-hover:text-purple-400',
  },
];

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '10s' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent animate-gradient">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-world solutions built with passion and purpose
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            const isHovered = hoveredIdx === idx;
            return (
              <ThreeDTilt 
                key={proj.title} 
                maxTilt={6} 
                className="reveal-scale h-full rounded-3xl overflow-hidden"
              >
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:bg-white/[0.04] border border-white/5 ${proj.borderClass} ${proj.glowClass} group h-full relative overflow-hidden transition-all duration-300 block cursor-pointer`}
                  style={{ animationDelay: `${idx * 0.08}s` }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Glowing mesh background circle */}
                  <div className={`absolute -right-10 -top-10 w-36 h-36 bg-gradient-to-br ${proj.blobGradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`}></div>

                  {/* Scanning Laser Line Effect */}
                  {isHovered && <div className="scan-effect"></div>}

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Top Header of Card */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          {/* Project Icon */}
                          <div className={`w-12 h-12 rounded-2xl ${proj.iconBg} flex items-center justify-center border border-white/5 group-hover:border-cyan-500/20 transition-all duration-300`}>
                            <Icon className={`w-6 h-6 ${proj.iconColor} ${proj.iconAnim}`} />
                          </div>

                          {proj.badge && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                              <Award className="w-3.5 h-3.5" />
                              {proj.badge}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className={`text-xl md:text-2xl font-bold text-white mb-3 ${proj.accentText} transition-colors duration-300 flex items-center gap-1.5`}>
                        {proj.title}
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </h3>

                      {/* Project Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {proj.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 glass rounded-md text-[11px] font-medium text-gray-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 hover:scale-105 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </ThreeDTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
}
