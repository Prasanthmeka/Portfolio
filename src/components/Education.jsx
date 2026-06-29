import React from 'react';
import { GraduationCap, Calendar, Star } from 'lucide-react';
import ThreeDTilt from './ThreeDTilt';

const educationHistory = [
  {
    degree: 'Bachelor of Technology, Computer Science',
    institution: 'Lendi Institute of Engineering and Technology - Vizianagaram, AP',
    period: '2021 – 2025',
    gradeType: 'CGPA',
    grade: '9.04',
  },
  {
    degree: 'Board of Intermediate Education, MPC',
    institution: 'Sri Chaitanya Junior College - Visakhapatnam, AP',
    period: '2019 – 2021',
    gradeType: 'Percentage',
    grade: '92.1%',
  },
  {
    degree: 'Board of Secondary Education (SSC)',
    institution: 'Sri Chaitanya High School - Vizianagaram, AP',
    period: '2018 – 2019',
    gradeType: 'CGPA',
    grade: '9.3',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-6 md:pl-8 border-l border-white/10 space-y-8 md:space-y-12">
          {educationHistory.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={edu.degree}
                className={`relative ${isLeft ? 'reveal-left' : 'reveal-right'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Dot Indicator */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-400 border-4 border-background flex items-center justify-center shadow-lg shadow-cyan-400/30"></div>

                {/* Card Container with ThreeDTilt */}
                <ThreeDTilt maxTilt={5} className="rounded-2xl overflow-hidden w-full">
                  <div className="glass-card rounded-2xl p-6 md:p-8 hover:bg-white/5 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="w-6 h-6 text-cyan-400" />
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                            {edu.degree}
                          </h3>
                          <p className="text-gray-400 text-sm">{edu.institution}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {/* Grade display banner */}
                    <div className="flex items-center justify-between p-4 glass rounded-xl">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400/10" />
                        <span className="text-gray-400 text-sm font-medium">{edu.gradeType}</span>
                      </div>
                      <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </ThreeDTilt>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
