import React from 'react';
import { Code, Globe, Database, GitBranch, Lightbulb, Zap } from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';

// --- High-fidelity SVG Logos for Technical Skills ---

const CLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:rotate-12">
    <path fill="#659AD2" d="M12 2L2 6.5v11L12 22l10-4.5v-11L12 2z" />
    <path fill="#FFF" d="M15 8.5c-1-1-2.2-1.5-3.5-1.5-2.8 0-5 2.2-5 5s2.2 5 5 5c1.3 0 2.5-.5 3.5-1.5l1.4 1.4c-1.3 1.3-3.1 2.1-4.9 2.1-3.9 0-7-3.1-7-7s3.1-7 7-7c1.8 0 3.6.8 4.9 2.1L15 8.5z" />
  </svg>
);

const JavaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-500 group-hover/badge:scale-110">
    <path d="M6 3c.3-.8.9-1.2 1.4-.8.5.4-.1 1.4-1.2 1.8-.4.1-.7.2-1 0" fill="none" stroke="#EA2D2E" strokeWidth="1" strokeLinecap="round" className="animate-steam" />
    <path d="M9 2c.3-.8.9-1.2 1.4-.8.5.4-.1 1.4-1.2 1.8-.4.1-.7.2-1 0" fill="none" stroke="#EA2D2E" strokeWidth="1" strokeLinecap="round" className="animate-steam" style={{ animationDelay: '0.5s' }} />
    <path d="M12 3c.3-.8.9-1.2 1.4-.8.5.4-.1 1.4-1.2 1.8-.4.1-.7.2-1 0" fill="none" stroke="#EA2D2E" strokeWidth="1" strokeLinecap="round" className="animate-steam" style={{ animationDelay: '1s' }} />
    <path d="M4 10h12v3.5c0 2.5-1.5 4.5-5 4.5s-5-2-5-4.5V10z" fill="#305C7E" />
    <path d="M16 11c1 0 1.5.5 1.5 1.5s-.5 1.5-1.5 1.5h-1v-3h1z" fill="#305C7E" />
    <path d="M2 19.5h16" stroke="#305C7E" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const JavaScriptLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 rounded transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:[transform:rotateY(360deg)]">
    <rect width="24" height="24" fill="#F7DF1E" rx="3" />
    <path fill="#000" d="M12 18.5c.3.5.7.8 1.4.8.6 0 1-.3 1-.8 0-.5-.4-.7-1.2-1.1l-.4-.2c-1.2-.5-2-1.2-2-2.5 0-1.3 1-2.3 2.5-2.3 1.2 0 2 .5 2.5 1.3l-1.1.7c-.3-.5-.6-.7-1.3-.7-.6 0-1 .3-1 .7 0 .5.4.7 1 .9l.4.2c1.4.6 2.2 1.2 2.2 2.6 0 1.5-1.1 2.4-2.8 2.4-1.7 0-2.8-.8-3.3-1.8l1.2-.8zm-6.2-.2c.2.4.5.7 1.1.7.5 0 .8-.2.8-1v-5.6H9.3v5.6c0 1.7-1 2.6-2.5 2.6-1.3 0-2-.7-2.4-1.5l1.2-.8z" />
  </svg>
);

const HTMLLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:[transform:rotateX(20deg)]">
    <path fill="#E34F26" d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3z" />
    <path fill="#F16529" d="M12 3.7v16.4l5.9-1.6 1.3-14.8H12z" />
    <path fill="#EBEBEB" d="M12 9.4H8.4L8.2 7.1h3.8V5H5.4l.6 6.8H12V9.4zm0 5.8l-2.6-.7-.2-1.9H6.8l.3 3.9 4.9 1.4v-2.7z" />
    <path fill="#FFF" d="M12 9.4h3.6l-.4 3.9-3.2.9v2.7l4.9-1.4.7-7.4H12v2.3zm0-4.4h5.6l.2-2.3H12V5z" />
  </svg>
);

const CSSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:[transform:rotateX(-20deg)]">
    <path fill="#1572B6" d="M3 2l1.6 18 7.4 2 7.4-2L21 2H3z" />
    <path fill="#33A9DC" d="M12 3.7v16.4l5.9-1.6 1.3-14.8H12z" />
    <path fill="#EBEBEB" d="M12 9.4H8.2l-.2-2.3h4V5H5.5l.6 6.8H12V9.4zm0 3.1H9.1l-.2-2.3H12v2.3zm0 2.7l-2.6-.7-.2-1.9H6.8l.3 3.9 4.9 1.4v-2.7z" />
    <path fill="#FFF" d="M12 9.4h3.6l-.4 3.9-3.2.9v2.7l4.9-1.4.7-7.4H12v2.3zm0-4.4h5.6l.2-2.3H12V5z" />
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 transition-transform duration-500 group-hover/badge:scale-110">
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" className="animate-[spin_10s_linear_infinite]" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" className="animate-[spin_10s_linear_infinite]" style={{ animationDelay: '-3.3s' }} />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" className="animate-[spin_10s_linear_infinite]" style={{ animationDelay: '-6.6s' }} />
    </g>
  </svg>
);

const ReduxLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:rotate-180">
    <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 2 .6 3.9 1.7 5.5l1.6-1.6C4.8 14.8 4.5 13.4 4.5 12c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5c-1.4 0-2.8-.4-3.9-1.2l-1.6 1.6c1.6 1.2 3.5 1.8 5.5 1.8 5.4 0 9.8-4.4 9.8-9.8S17.4 2.2 12 2.2z" fill="#764ABC" />
    <path d="M12 7c-2.8 0-5 2.2-5 5 0 .8.2 1.6.6 2.3l1.6-1.6c-.1-.2-.2-.5-.2-.7 0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3c-.2 0-.5-.1-.7-.2l-1.6 1.6c.7.4 1.5.6 2.3.6 2.8 0 5-2.2 5-5s-2.2-5-5-5z" fill="#764ABC" opacity="0.8" />
  </svg>
);

const MUILogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:-translate-y-1">
    <path d="M0 6L12 0l12 6v12l-12 6L0 18V6z" fill="#0081CB" />
    <path d="M12 0v24l12-6V6L12 0z" fill="#00B0FF" />
    <path d="M12 8L6 11v6l6 3 6-3v-6l-6-3z" fill="#FFF" />
    <path d="M12 8v12l6-3v-6l-6-3z" fill="#CFD8DC" />
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:skew-x-12">
    <path fill="#38BDF8" d="M12 6.03c-2.21 0-3.98 1.12-5.3 3.32 1.98-.45 3.54.11 4.65 1.66.66.92 1.16 2.16 1.95 3.32 1.27 1.88 2.92 2.93 5.3 2.93 2.21 0 3.98-1.12 5.3-3.32-1.98.45-3.54-.11-4.65-1.66-.66-.92-1.16-2.16-1.95-3.32-1.27-1.88-2.92-2.93-5.3-2.93zm-6.64 6.64c-2.21 0-3.98 1.12-5.3 3.32 1.98-.45 3.54.11 4.65 1.66.66.92 1.16 2.16 1.95 3.32 1.27 1.88 2.92 2.93 5.3 2.93 2.21 0 3.98-1.12 5.3-3.32-1.98.45-3.54-.11-4.65-1.66-.66-.92-1.16-2.16-1.95-3.32-1.27-1.88-2.92-2.93-5.3-2.93z" />
  </svg>
);

const MySQLLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:translate-x-1">
    <path fill="#00758F" d="M12 2.3c-5.5 0-9.6 2.7-9.6 6.1 0 2.2 1.8 4.2 4.7 5.3-.2-.4-.3-.8-.4-1.2-2-.7-3.1-2-3.1-3.4 0-2.4 3.3-4.5 7.7-4.8.7-.1 1.3-.1 2-.1.7 0 1.3 0 2 .1 4.4.3 7.7 2.4 7.7 4.8 0 1.2-.9 2.4-2.6 3.1-.1-.6-.2-1.1-.5-1.7 1.5-.5 2.3-1.4 2.3-2.2 0-2.4-3.3-4.5-7.7-4.8-.7-.1-1.3-.1-2-.1z" />
    <path fill="#F29111" d="M13.7 9.5c-.3-.1-.6-.2-.9-.2-.3 0-.5 0-.8.1-.7.3-1.3.9-1.5 1.7-.2.8 0 1.6.5 2.2.5.6 1.3.8 2 .8.3 0 .7-.1 1-.2.7-.3 1.3-.9 1.5-1.7.2-.8 0-1.6-.5-2.2-.5-.6-1.3-.8-2-.8z" />
    <path fill="#00758F" d="M10.9 13.6c-.4-.4-.7-.9-.7-1.5 0-1.1.8-2 1.9-2.2 1.1-.2 2.2.4 2.6 1.5.4 1-.1 2.2-.9 2.8-.3.2-.7.3-1 .3-.7 0-1.3-.3-1.9-.9z" />
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:rotate-12">
    <path fill="#F05032" d="M22.6 10.5L13.5 1.4c-.5-.5-1.3-.5-1.8 0L9.1 4.1l2.8 2.8c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8l2.7 2.7c.6-.2 1.3-.1 1.8.4.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.6-1.2-.4-1.8L12.7 10c-.2.1-.4.1-.6.1-.5 0-1-.2-1.3-.5-.4-.4-.5-.9-.5-1.4L7.7 5.6 1.4 11.9c-.5.5-.5 1.3 0 1.8l9.1 9.1c.5.5 1.3.5 1.8 0l9.3-9.3c.5-.5.5-1.4 0-2z" />
  </svg>
);

const CopilotLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#22D3EE] transition-all duration-500 group-hover/badge:scale-115 group-hover/badge:text-[#D946EF] group-hover/badge:drop-shadow-[0_0_6px_rgba(217,70,239,0.6)]">
    <path d="M4 15a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3a8 8 0 0 0-16 0v3z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 11h2v3H2zm18 0h2v3h-2z" />
    <path d="M12 2v2M8 4.5l1.5 1.5M16 4.5 14.5 6" />
    <circle cx="8.5" cy="12.5" r="1.5" fill="currentColor" className="animate-pulse" />
    <circle cx="15.5" cy="12.5" r="1.5" fill="currentColor" className="animate-pulse" />
    <path d="M9 16s1 1.5 3 1.5 3-1.5 3-1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PromptLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#EC4899] transition-all duration-500 group-hover/badge:scale-115 group-hover/badge:text-[#D946EF]">
    <rect width="18" height="18" x="3" y="3" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 8l3 3-3 3M11 14h6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m19 5-2 2M15 4l.5 1.5" className="animate-pulse" />
  </svg>
);

const AIEthicsLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#F59E0B] transition-all duration-500 group-hover/badge:scale-115 group-hover/badge:rotate-12">
    <path d="M12 3v17M2 20h20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 9a7 7 0 0 1-14 0" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 9h14M12 3L6 8h12z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SecurityLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#10B981] transition-all duration-500 group-hover/badge:scale-115 group-hover/badge:text-[#34D399]">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m9 11 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LeadershipLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#F97316] transition-all duration-500 group-hover/badge:scale-115 group-hover/badge:rotate-45">
    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CommunicationLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#6366F1] transition-all duration-500 group-hover/badge:scale-115">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8" cy="10" r="1" fill="currentColor" className="animate-pulse" />
    <circle cx="12" cy="10" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
    <circle cx="16" cy="10" r="1" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
  </svg>
);

const LearnerLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#EAB308] transition-all duration-500 group-hover/badge:scale-115 animate-brain">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Map skill names to their Logo component and custom neon glow class
const SKILL_DETAILS = {
  // Languages
  'C': {
    logo: <CLogo />,
    glowClass: 'hover:border-[#659AD2]/40 hover:shadow-[0_0_20px_rgba(101,154,210,0.2)] hover:text-[#659AD2]',
  },
  'Java': {
    logo: <JavaLogo />,
    glowClass: 'hover:border-[#EA2D2E]/40 hover:shadow-[0_0_20px_rgba(234,45,46,0.2)] hover:text-[#EA2D2E]',
  },
  'JavaScript': {
    logo: <JavaScriptLogo />,
    glowClass: 'hover:border-[#F7DF1E]/40 hover:shadow-[0_0_20px_rgba(247,223,30,0.2)] hover:text-[#F7DF1E]',
  },
  'HTML5': {
    logo: <HTMLLogo />,
    glowClass: 'hover:border-[#E34F26]/40 hover:shadow-[0_0_20px_rgba(227,79,38,0.2)] hover:text-[#E34F26]',
  },
  'CSS3': {
    logo: <CSSLogo />,
    glowClass: 'hover:border-[#1572B6]/40 hover:shadow-[0_0_20px_rgba(21,114,182,0.2)] hover:text-[#1572B6]',
  },
  // Frontend & UI
  'React': {
    logo: <ReactLogo />,
    glowClass: 'hover:border-[#61DAFB]/40 hover:shadow-[0_0_20px_rgba(97,218,251,0.2)] hover:text-[#61DAFB]',
  },
  'Redux Toolkit (RTK)': {
    logo: <ReduxLogo />,
    glowClass: 'hover:border-[#764ABC]/40 hover:shadow-[0_0_20px_rgba(118,74,188,0.2)] hover:text-[#B388FF]',
  },
  'Material UI': {
    logo: <MUILogo />,
    glowClass: 'hover:border-[#0081CB]/40 hover:shadow-[0_0_20px_rgba(0,129,203,0.2)] hover:text-[#00B0FF]',
  },
  'Tailwind CSS': {
    logo: <TailwindLogo />,
    glowClass: 'hover:border-[#38BDF8]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:text-[#38BDF8]',
  },
  // Database
  'MySQL': {
    logo: <MySQLLogo />,
    glowClass: 'hover:border-[#00758F]/40 hover:shadow-[0_0_20px_rgba(0,117,143,0.2)] hover:text-[#00758F]',
  },
  // Tools
  'Git': {
    logo: <GitLogo />,
    glowClass: 'hover:border-[#F05032]/40 hover:shadow-[0_0_20px_rgba(240,80,50,0.2)] hover:text-[#F05032]',
  },
  'GitHub Copilot': {
    logo: <CopilotLogo />,
    glowClass: 'hover:border-[#22D3EE]/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:text-[#22D3EE]',
  },
  // Prompt Engineering
  'Prompt Engineering': {
    logo: <PromptLogo />,
    glowClass: 'hover:border-[#EC4899]/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] hover:text-[#EC4899]',
  },
  'AI Ethics': {
    logo: <AIEthicsLogo />,
    glowClass: 'hover:border-[#F59E0B]/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:text-[#F59E0B]',
  },
  'Security Guidelines': {
    logo: <SecurityLogo />,
    glowClass: 'hover:border-[#10B981]/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:text-[#10B981]',
  },
  // Soft Skills
  'Strong Leadership': {
    logo: <LeadershipLogo />,
    glowClass: 'hover:border-[#F97316]/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:text-[#F97316]',
  },
  'Communication': {
    logo: <CommunicationLogo />,
    glowClass: 'hover:border-[#6366F1]/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:text-[#818CF8]',
  },
  'Quick Learner': {
    logo: <LearnerLogo />,
    glowClass: 'hover:border-[#EAB308]/40 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:text-[#EAB308]',
  },
};

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
              <ThreeDTilt 
                key={cat.category} 
                maxTilt={12} 
                className="h-full rounded-2xl overflow-hidden reveal-scale"
              >
                <div
                  className="skill-card glass-card rounded-2xl p-6 md:p-7 group hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-white/10 h-full"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{cat.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill) => {
                      const detail = SKILL_DETAILS[skill] || {
                        logo: <Code className="w-5 h-5 text-gray-400" />,
                        glowClass: 'hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]',
                      };
                      return (
                        <div
                          key={skill}
                          className={`flex items-center gap-2.5 px-3.5 py-2.5 glass rounded-xl text-xs md:text-sm font-medium text-gray-300 border border-white/5 transition-all duration-500 cursor-default hover:bg-white/5 group/badge ${detail.glowClass} hover:scale-[1.05]`}
                        >
                          <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                            {detail.logo}
                          </div>
                          <span className="font-semibold transition-colors duration-300 whitespace-nowrap">
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ThreeDTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
}
