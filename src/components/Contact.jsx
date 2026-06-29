import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import ThreeDTilt from './ThreeDTilt';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Info Centered Card Layout */}
        <div className="max-w-2xl mx-auto space-y-6 reveal">
          <ThreeDTilt maxTilt={4} className="rounded-2xl overflow-hidden">
            <div className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              {/* Email Card */}
              <a 
                href="mailto:mekaprasanth19@gmail.com"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 border border-white/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Email</h4>
                  <p className="text-white font-semibold text-sm sm:text-base">mekaprasanth19@gmail.com</p>
                </div>
              </a>

              {/* Location Card */}
              <div 
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 border border-white/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-fuchsia-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-fuchsia-400/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-fuchsia-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Location</h4>
                  <p className="text-white font-semibold text-sm sm:text-base">Vizianagaram, Andhra Pradesh - 535002</p>
                </div>
              </div>

              {/* Phone Card */}
              <a 
                href="tel:9550903344"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 border border-white/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-green-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-400/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                  <p className="text-white font-semibold text-sm sm:text-base">9550903344</p>
                </div>
              </a>
            </div>
          </ThreeDTilt>

          {/* Social channels (Follow Me) */}
          <ThreeDTilt maxTilt={5} className="rounded-2xl overflow-hidden">
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Prasanthmeka" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 p-4 glass rounded-xl hover:neon-glow transition-all duration-300 group border border-white/5"
                >
                  <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm text-gray-300 font-semibold group-hover:text-white">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/prasanth-meka-7a2ab8253" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 p-4 glass rounded-xl hover:neon-glow transition-all duration-300 group border border-white/5"
                >
                  <LinkedinIcon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm text-gray-300 font-semibold group-hover:text-white">LinkedIn</span>
                </a>
              </div>
            </div>
          </ThreeDTilt>
        </div>

      </div>
    </section>
  );
}
