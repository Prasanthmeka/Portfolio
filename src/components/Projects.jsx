import { Award } from 'lucide-react';

const projects = [
  {
    title: 'LearnOQuBe',
    description: 'Developed an interactive educational platform that enables students to access learning resources, track academic progress, and improve engagement through a user-friendly digital environment. Designed responsive interfaces and optimized usability for better learning experiences.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Prasanthmeka/STUDENT-LEARNING-PORTAL',
  },
  {
    title: 'Brain Hemorrhage Detection',
    description: 'Developed and implemented a deep learning model for automated detection of brain hemorrhages from CT scans. Applied image classification and segmentation techniques to localize hemorrhagic regions, improving diagnostic support for radiologists.',
    tags: ['Python', 'Deep Learning', 'CNN', 'Image Segmentation', 'TensorFlow', 'Computer Vision'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Prasanthmeka/Brain-Hemorrhage-Detection',
  },
  {
    title: 'Fake Image Detection',
    description: 'Developed and implemented advanced algorithms like CNN and also using metadata analysis for fake image recognition, enhancing accuracy and efficiency in identifying manipulated images. Utilized machine learning techniques to analyze image authenticity and detect forgery patterns.',
    tags: ['Python', 'Machine Learning', 'CNN', 'Metadata Analysis', 'Image Authenticity', 'Forgery Detection'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Prasanthmeka/Fake-Image-Detection',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
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
          {projects.map((proj, idx) => (
            <div
              key={proj.title}
              className="reveal glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-white/10 group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div>
                {/* Badge / Trophy if first prize */}
                <div className="flex items-start justify-between mb-4">
                  {proj.badge ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                      <Award className="w-3.5 h-3.5" />
                      {proj.badge}
                    </span>
                  ) : (
                    <div className="h-6"></div> // spacing placeholder
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {proj.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 glass rounded-md text-xs font-medium text-gray-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>


              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
