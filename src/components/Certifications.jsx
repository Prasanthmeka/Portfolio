import React, { useState } from 'react';
import {
  Award,
  Brain,
  Sparkles,
  ShieldCheck,
  Code,
  Cpu,
  Cloud,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Rocket
} from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';

const certs = [
  {
    name: 'Google AI Professional Certificate',
    details: 'Coursera - 2026',
    icon: Brain,
    glowClass: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]',
    borderClass: 'group-hover:border-cyan-400/40',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-400/10 group-hover:bg-cyan-400/20',
    iconAnim: 'group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300',
    blobGradient: 'from-cyan-500/20 to-blue-500/5',
    pingColor: 'bg-cyan-400',
    dotColor: 'bg-cyan-500',
  },
  {
    name: 'Google AI Essentials',
    details: 'Coursera - 2026',
    icon: Sparkles,
    glowClass: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]',
    borderClass: 'group-hover:border-purple-400/40',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-400/10 group-hover:bg-purple-400/20',
    iconAnim: 'group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500',
    blobGradient: 'from-purple-500/20 to-indigo-500/5',
    pingColor: 'bg-purple-400',
    dotColor: 'bg-purple-500',
  },
  {
    name: 'Certified System Administrator',
    details: 'Servicenow - 2025',
    icon: ShieldCheck,
    glowClass: 'group-hover:shadow-[0_0_30px_rgba(52,211,153,0.25)]',
    borderClass: 'group-hover:border-emerald-400/40',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10 group-hover:bg-emerald-400/20',
    iconAnim: 'group-hover:scale-110 group-hover:translate-y-[-2px] transition-transform duration-300',
    blobGradient: 'from-emerald-500/20 to-green-500/5',
    pingColor: 'bg-emerald-400',
    dotColor: 'bg-emerald-500',
  },
  {
    name: 'Certified Application Developer',
    details: 'Servicenow - 2025',
    icon: Code,
    glowClass: 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.25)]',
    borderClass: 'group-hover:border-teal-400/40',
    iconColor: 'text-teal-400',
    iconBg: 'bg-teal-400/10 group-hover:bg-teal-400/20',
    iconAnim: 'group-hover:scale-110 group-hover:rotate-[-6deg] transition-transform duration-300',
    blobGradient: 'from-teal-500/20 to-cyan-500/5',
    pingColor: 'bg-teal-400',
    dotColor: 'bg-teal-500',
  },
  {
    name: 'NPTEL IOT',
    details: '79% Silver - 2023',
    icon: Cpu,
    glowClass: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]',
    borderClass: 'group-hover:border-amber-400/40',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10 group-hover:bg-amber-400/20',
    iconAnim: 'group-hover:scale-110 group-hover:rotate-90 transition-transform duration-500',
    blobGradient: 'from-amber-500/20 to-orange-500/5',
    pingColor: 'bg-amber-400',
    dotColor: 'bg-amber-500',
  },
  {
    name: 'NPTEL Cloud Computing',
    details: '64% Certified - 2023',
    icon: Cloud,
    glowClass: 'group-hover:shadow-[0_0_30px_rgba(14,165,233,0.25)]',
    borderClass: 'group-hover:border-sky-400/40',
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-400/10 group-hover:bg-sky-400/20',
    iconAnim: 'group-hover:translate-y-[-4px] transition-transform duration-300',
    blobGradient: 'from-sky-500/20 to-blue-500/5',
    pingColor: 'bg-sky-400',
    dotColor: 'bg-sky-500',
  },
  {
    name: 'The British Hindu STEP',
    details: 'LSRW - 2022',
    icon: BookOpen,
    glowClass: 'group-hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]',
    borderClass: 'group-hover:border-rose-400/40',
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-400/10 group-hover:bg-rose-400/20',
    iconAnim: 'group-hover:scale-110 group-hover:rotate-[4deg] transition-transform duration-300',
    blobGradient: 'from-rose-500/20 to-pink-500/5',
    pingColor: 'bg-rose-400',
    dotColor: 'bg-rose-500',
  },
];

export default function Certifications() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [rightCardHovered, setRightCardHovered] = useState(false);

  return (
    <section id="certifications" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background blobs and grid */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDuration: '10s' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-20 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional credentials validating my technical expertise and commitment to continuous learning
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Certifications Grid (Left & Mid columns) */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-4 reveal-left">
            {certs.map((cert, idx) => {
              const Icon = cert.icon;
              const isHovered = hoveredIdx === idx;
              return (
                <ThreeDTilt key={cert.name} maxTilt={10} className="rounded-xl overflow-hidden h-full">
                  <div
                    className={`glass-card rounded-xl p-5 flex flex-col justify-between hover:bg-white/[0.04] border border-white/5 ${cert.borderClass} ${cert.glowClass} group transition-all duration-300 h-full relative overflow-hidden`}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    {/* Glowing mesh background circle that lights up on hover */}
                    <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${cert.blobGradient} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`}></div>

                    {/* Scanning Laser Line Effect (visible on hover) */}
                    {isHovered && <div className="scan-effect"></div>}

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div className="flex items-start gap-3.5 mb-4">
                        <div className={`w-9 h-9 rounded-lg ${cert.iconBg} flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                          <Icon className={`w-5 h-5 ${cert.iconColor} ${cert.iconAnim}`} />
                        </div>
                        <h3 className="text-sm font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors duration-300" title={cert.name}>
                          {cert.name}
                        </h3>
                      </div>

                      <div className="text-[11px] font-semibold text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 w-fit mt-2 flex items-center gap-1.5 transition-colors duration-300 group-hover:border-cyan-500/20 group-hover:text-gray-300">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${cert.pingColor} opacity-75`}></span>
                          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${cert.dotColor}`}></span>
                        </span>
                        {cert.details}
                      </div>
                    </div>
                  </div>
                </ThreeDTilt>
              );
            })}
          </div>

          {/* Academic & Project Foundations (Right column) */}
          <div className="reveal-right">
            <ThreeDTilt
              maxTilt={4}
              className="rounded-2xl overflow-hidden h-full"
            >
              <div
                className="gradient-border glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col justify-center relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] hover:border-fuchsia-500/20 group"
                onMouseEnter={() => setRightCardHovered(true)}
                onMouseLeave={() => setRightCardHovered(false)}
              >
                {/* Glowing blob on hover */}
                <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Laser scan line effect */}
                {rightCardHovered && <div className="scan-effect"></div>}

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors duration-300 flex items-center gap-2">
                  <span>Professional Foundations</span>
                </h3>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Alongside my professional industry role at Verizon, I continue to drive engineering excellence through key academic and project milestones:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-green-500/30 transition-all duration-300 group/item">
                    <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 border border-green-500/20 group-hover/item:bg-green-500/20 transition-all duration-300">
                      <GraduationCap className="w-5 h-5 text-green-400 group-hover/item:scale-115 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover/item:text-green-400 transition-colors duration-300">
                        Top Academic Performance
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">Consistent CGPA of 9.04 in Computer Science</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-yellow-500/30 transition-all duration-300 group/item">
                    <div className="w-9 h-9 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0 border border-yellow-500/20 group-hover/item:bg-yellow-500/20 transition-all duration-300">
                      <Lightbulb className="w-5 h-5 text-yellow-400 group-hover/item:scale-115 group-hover/item:rotate-12 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover/item:text-yellow-400 transition-colors duration-300">
                        Smart India Hackathon
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">National-level product development finalist</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 p-3 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-cyan-500/30 transition-all duration-300 group/item">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20 group-hover/item:bg-cyan-500/20 transition-all duration-300">
                      <Rocket className="w-5 h-5 text-cyan-400 group-hover/item:translate-y-[-2px] transition-all duration-300" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover/item:text-cyan-400 transition-colors duration-300">
                        3 Real-World Projects
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">Full-stack apps, AI models, and IoT prototypes</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ThreeDTilt>
          </div>

        </div>

      </div>
    </section>
  );
}
