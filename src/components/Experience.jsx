import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ExternalLink,
  Layers, 
  Users, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Code2, 
  CheckCircle2,
  Sparkles,
  Server
} from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';

// Map icon names to their respective Lucide React component
const iconMap = {
  MapPin: MapPin,
  Layers: Layers,
  Users: Users,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Activity: Activity,
  Code2: Code2,
  CheckCircle2: CheckCircle2,
  Server: Server,
};

const experiences = [
  {
    role: 'Software Development Engineer 1',
    company: 'Verizon',
    year: 'July 2025 - Present',
    location: 'Hyderabad, India',
    description: 'Contributing as a Java Full Stack Developer to the design, development, and maintenance of enterprise-level web applications used for telecom service management and customer operations.',
    metrics: [
      { label: 'Time Tracking Accuracy', value: '+30%', desc: 'Improvement via automated geofencing' },
      { label: 'Technician Coverage', value: '15,000+', desc: 'Field technician support volume' },
    ],
    highlights: [
      {
        tagline: 'Automated Geofencing',
        desc: 'Developed an automated arrival detection feature using geofencing; improved time-tracking accuracy by 30% and reduced manual logging errors for field technicians by ensuring logs only trigger within 50 meters of a site.',
        iconName: 'MapPin',
        iconColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      },
      {
        tagline: 'Responsive UI Design',
        desc: 'Designed and implemented responsive user interfaces using React.js, HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and optimal performance.',
        iconName: 'Layers',
        iconColor: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20',
      },
      {
        tagline: 'Enterprise Scalability',
        desc: 'Developed responsive React UI components for a large-scale vehicle management platform supporting 15,000+ technicians.',
        iconName: 'Users',
        iconColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      },
      {
        tagline: 'Backend API Integration',
        desc: 'Integrated frontend components with backend APIs, ensuring secure data exchange and smooth user experience.',
        iconName: 'Cpu',
        iconColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      },
      {
        tagline: 'Engineering Quality Standards',
        desc: 'Enforced strict engineering standards using Jest for unit testing and collaborated via Git version control in Agile/Scrum ceremonies.',
        iconName: 'ShieldCheck',
        iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      }
    ],
    skills: ['Java', 'React.js', 'Spring Boot', 'JavaScript', 'HTML5', 'CSS3', 'Jest', 'Git', 'Agile/Scrum'],
    theme: 'from-red-600 to-red-800',
    borderColor: 'from-red-600 to-red-800',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Verizon',
    year: 'Jan 2025 - June 2025',
    location: 'Hyderabad, India',
    description: 'Collaborated with a development team to design and build key elements of Verizon\'s web-based telecom infrastructure.',
    metrics: [
      { label: 'System Design', value: '5G Router', desc: 'Full-stack management solution' },
    ],
    highlights: [
      {
        tagline: 'Full-Stack 5G Router Management',
        desc: 'Collaborated with a development team to design a full-stack 5G Router Management System as part of training.',
        iconName: 'Server',
        iconColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      },
      {
        tagline: 'Full Stack Technologies',
        desc: 'Employed Java, React, MySQL, HTML/CSS for comprehensive development.',
        iconName: 'Code2',
        iconColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      },
      {
        tagline: 'UI Component Collaboration',
        desc: 'Collaborated with project team to build UI components during the training period.',
        iconName: 'CheckCircle2',
        iconColor: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      }
    ],
    skills: ['Java', 'React', 'MySQL', 'HTML', 'CSS', 'Full Stack Development'],
    theme: 'from-gray-700 to-gray-900',
    borderColor: 'from-gray-700 to-gray-900',
  }
];

export default function Experience() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background blobs and grid */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional career journey and industry contributions
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-8 md:pl-16">
          
          {/* Vertical Timeline Track */}
          <div className="absolute left-[15px] md:left-[31px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-transparent opacity-50">
            <div className="laser-glow"></div>
          </div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isHovered = hoveredIdx === idx;
              
              return (
                <div 
                  key={exp.role + exp.year} 
                  className="relative"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  
                  {/* Timeline Interactive Node */}
                  <div 
                    className={`absolute left-[-25px] md:left-[-41px] top-6 w-[18px] h-[18px] rounded-full border-2 border-slate-900 z-20 transition-all duration-500 cursor-pointer ${
                      isHovered 
                        ? 'bg-fuchsia-500 scale-125 shadow-[0_0_20px_#d946ef]' 
                        : 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]'
                    }`}
                  >
                    {isHovered && (
                      <>
                        <div className="node-ripple"></div>
                        <div className="node-ripple-secondary"></div>
                      </>
                    )}
                  </div>

                  {/* Experience Card */}
                  <ThreeDTilt 
                    maxTilt={3} 
                    className="rounded-2xl overflow-hidden reveal-right"
                  >
                    <div className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-300">
                      
                      {/* Scanning Laser Line Effect (only visible on hover) */}
                      {isHovered && <div className="scan-effect"></div>}

                      {/* Highlight Border Left */}
                      <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${exp.borderColor}`}></div>

                      {/* Card Content */}
                      <div className="relative z-10">
                        
                        {/* Header Details */}
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/5 mb-6">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.theme} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                              <Briefcase className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                                {exp.role}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-cyan-400 font-semibold">{exp.company}</span>
                                <span className="text-gray-600">•</span>
                                <span className="text-gray-400 text-sm">{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-start lg:self-center px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-300 text-sm font-mono shadow-inner">
                            <Calendar className="w-4 h-4 text-cyan-400 animate-pulse" />
                            <span>{exp.year}</span>
                          </div>
                        </div>

                        {/* Overview Paragraph */}
                        <p className="text-gray-300 text-base leading-relaxed mb-6">
                          {exp.description}
                        </p>

                        {/* Quantitative Metrics Showcase */}
                        {exp.metrics && (
                          <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {exp.metrics.map((metric, mIdx) => (
                              <div 
                                key={metric.label} 
                                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/[0.02] to-white/[0.04] border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group"
                              >
                                <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent font-mono group-hover:scale-105 transition-transform duration-300">
                                  {metric.value}
                                </div>
                                <div className="border-l border-white/10 pl-3">
                                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{metric.label}</div>
                                  <div className="text-xs text-gray-400 font-medium">{metric.desc}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Contributions Interactive Grid */}
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-fuchsia-400 animate-spin" style={{ animationDuration: '4s' }} />
                            Key Contributions
                          </h4>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            {exp.highlights.map((highlight, hIdx) => {
                              const HighlightIcon = iconMap[highlight.iconName] || CheckCircle2;
                              return (
                                <div 
                                  key={highlight.tagline}
                                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group/item flex gap-4"
                                >
                                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover/item:scale-110 ${highlight.iconColor}`}>
                                    <HighlightIcon className="w-5 h-5" />
                                  </div>
                                  <div>
                                    <h5 className="font-bold text-gray-200 text-sm group-hover/item:text-cyan-400 transition-colors duration-200">
                                      {highlight.tagline}
                                    </h5>
                                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                                      {highlight.desc}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Tech Stack Used */}
                        <div>
                          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Technologies Leveraged</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <span 
                                key={skill}
                                className="px-3 py-1.5 text-xs font-semibold bg-white/5 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 rounded-lg border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </ThreeDTilt>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
