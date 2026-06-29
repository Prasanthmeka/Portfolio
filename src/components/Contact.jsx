import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import ThreeDTilt from './ThreeDTilt';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const isFormValid = formData.name && formData.email && formData.message;

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

        {/* Form and Contact Info Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Contact Form */}
          <div className="reveal-left">
            <ThreeDTilt maxTilt={4} className="rounded-2xl overflow-hidden">
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Message sent successfully! I will get back to you shortly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="btn-neon w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ThreeDTilt>
          </div>

          {/* Right Column: Contact Cards and Info */}
          <div className="space-y-6 reveal-right">
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
                    href="https://www.linkedin.com/in/prasanth-meka/" 
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

      </div>
    </section>
  );
}
