import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'Software Development Engineer 1',
    company: 'Verizon',
    year: 'July 2025 - Present',
    location: 'Hyderabad, India',
    description: 'Contributing as a Java Full Stack Developer to the design, development, and maintenance of enterprise-level web applications used for telecom service management and customer operations.',
    highlights: [
      'Developed an automated arrival detection feature using geofencing; improved time-tracking accuracy by 30% and reduced manual logging errors for field technicians by ensuring logs only trigger within 50 meters of a site.',
      'Designed and implemented responsive user interfaces using React.js, HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and optimal performance.',
      'Developed responsive React UI components for a large-scale vehicle management platform supporting 15,000+ technicians.',
      'Integrated frontend components with backend APIs, ensuring secure data exchange and smooth user experience.',
      'Enforced strict engineering standards using Jest for unit testing and collaborated via Git version control in Agile/Scrum ceremonies.'
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
    highlights: [
      'Collaborated with a development team to design a full-stack 5G Router Management System as part of training.',
      'Employed Java, React, MySQL, HTML/CSS for comprehensive development.',
      'Collaborated with project team to build UI components during the training period.'
    ],
    skills: ['Java', 'React', 'MySQL', 'HTML', 'CSS', 'Full Stack Development'],
    theme: 'from-gray-700 to-gray-900',
    borderColor: 'from-gray-700 to-gray-900',
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional experience and internships
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={exp.company}
              className="reveal glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Highlight Border Left */}
              <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${exp.borderColor}`}></div>

              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.theme} flex items-center justify-center flex-shrink-0`}>
                  <Briefcase className="w-7 h-7 text-white" />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights section */}
                  {exp.highlights && (
                    <ul className="list-disc list-outside text-gray-400 space-y-2 mb-6 text-sm leading-relaxed pl-5">
                      {exp.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  )}

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-white/5 text-cyan-400 rounded-full border border-cyan-400/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Courses section */}
                  {exp.courses && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-2 font-semibold">Courses &amp; Training:</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.courses.map((course) => (
                          <span 
                            key={course}
                            className="px-3 py-1 text-xs font-medium bg-white/5 text-fuchsia-400 rounded-full border border-fuchsia-400/20"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Projects section (if exists) */}
                  {exp.projects && (
                    <div>
                      <p className="text-sm text-gray-400 mb-2 font-semibold">Internship Projects:</p>
                      <div className="flex flex-wrap gap-3">
                        {exp.projects.map((proj) => (
                          <a 
                            key={proj.name}
                            href={proj.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 text-cyan-400 text-sm transition-all duration-300 group border border-white/5"
                          >
                            <span>{proj.name}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
