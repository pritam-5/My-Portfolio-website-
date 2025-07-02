
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Snake Water Gun Game',
      description: 'A fun Python-based console game implementing the classic Rock Paper Scissors concept with Snake, Water, and Gun. Built as a beginner project to practice Python programming fundamentals.',
      image: '/api/placeholder/400/250',
      technologies: ['Python'],
      liveUrl: '#',
      githubUrl: 'https://github.com/pritam-5/Snake-water-gun-game.git',
      featured: true
    },
    {
      title: 'Safe Zones for Teens',
     description:
     'A web application created to offer a safe online environment for teenagers by providing helpful resources, educational content, and content filtering features.',
     image: '/api/placeholder/400/250',
    technologies: ['React', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://safe-zones-for-teens.vercel.app',
    githubUrl: 'https://github.com/pritam-5/Safe-Zones-for-Teens.git',
   featured: true
   },
     {
    title: 'GoldSecure Ledger Vault',
    description: 'A Digital Gold Custody Record Web App for local jewellers and customers to securely log gold handovers, generate QR-coded receipts, and provide police-verifiable records.',
    image: '/api/placeholder/400/250',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://goldsecure-ledger.vercel.app',
    githubUrl: 'https://github.com/pritam-5/goldsecure-ledger.git',
    featured: true
  },

  ];

  return (
    <section id="projects" className="py-20 bg-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-neon-green">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here's what I've been working on as I learn and grow as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 mb-12 max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-obsidian-700/30 rounded-lg overflow-hidden border border-gray-700 hover:border-neon-green/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border-4 border-neon-green rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-neon-green rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-obsidian-600/50 text-neon-green border border-neon-green/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-neon-green text-obsidian-900 rounded hover:bg-neon-blue transition-colors duration-300 font-semibold"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
