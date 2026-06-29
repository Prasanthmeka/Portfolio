import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const certs = [
  { name: 'Google AI Professional Certificate', details: 'Coursera-2026' },
  { name: 'Google AI Essentials', details: 'Coursera-2026' },
  { name: 'Certified System Administrator', details: 'Servicenow-2025' },
  { name: 'Certified Application Developer', details: 'Servicenow-2025' },
  { name: 'NPTEL IOT', details: '79% Silver-2023' },
  { name: 'NPTEL Cloud Computing', details: '64% Certified-2023' },
  { name: 'The British Hindu STEP', details: 'LSRW -2022' },


];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Certifications Grid (Left & Mid columns) */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-4 reveal">
            {certs.map((cert, idx) => (
              <div
                key={cert.name}
                className="glass-card rounded-xl p-4 flex flex-col justify-between hover:bg-white/5 border border-white/5 hover:border-cyan-400/20 group transition-all duration-300"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/20 transition-all duration-300">
                    <Award className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white leading-tight group-hover:text-cyan-400 transition-colors duration-300 truncate" title={cert.name}>
                    {cert.name}
                  </h3>
                </div>
                <div className="text-xs font-semibold text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 w-fit">
                  {cert.details}
                </div>
              </div>
            ))}
          </div>

          {/* Building Experience Highlights (Right column) */}
          <div className="reveal">
            <div className="gradient-border glass-card rounded-2xl p-6 md:p-8 h-full flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Building Experience
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                While I don't have formal work experience yet, I've built a strong foundation through:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-500/20">
                    <span className="text-sm">🎓</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Top Academic Performance</h4>
                    <p className="text-xs text-gray-400">Consistent score of CGPA 9.04 across semesters</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-yellow-500/20">
                    <span className="text-sm">💡</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Smart India Hackathon</h4>
                    <p className="text-xs text-gray-400">National level product development competition</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-500/20">
                    <span className="text-sm">🚀</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">5+ Real-World Projects</h4>
                    <p className="text-xs text-gray-400">End-to-end web, ML models, and IoT prototypes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
