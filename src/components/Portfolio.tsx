import React, { useState } from 'react';
import { ExternalLink, Play, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A modern e-commerce platform with advanced filtering and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Complete brand identity package including logo, color palette, and brand guidelines.',
      technologies: ['Illustrator', 'Photoshop', 'Figma'],
      link: '#'
    },
    {
      id: 3,
      title: 'Product Launch Video',
      category: 'video',
      image: 'https://images.unsplash.com/photo-1574717024621-6becaaa0d4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Dynamic product launch video with motion graphics and professional editing.',
      technologies: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
      link: '#',
      isVideo: true
    },
    {
      id: 4,
      title: 'Mobile App UI',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Intuitive mobile app interface design with user-centered approach.',
      technologies: ['Figma', 'Principle', 'Sketch'],
      link: '#'
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Professional corporate website with CMS integration and SEO optimization.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 6,
      title: 'Marketing Campaign',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive marketing campaign with print and digital materials.',
      technologies: ['Photoshop', 'Illustrator', 'InDesign'],
      link: '#'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'design', label: 'Graphic Design' },
    { key: 'video', label: 'Video Editing' },
    { key: 'ui', label: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-cyan-400">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Explore our latest projects and see how we've helped clients achieve their digital goals.
          </p>

          {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-cyan-400 text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.isVideo ? (
                    <Play className="h-12 w-12 text-white" />
                  ) : (
                    <ExternalLink className="h-12 w-12 text-white" />
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a
                href={selectedProject.link}
                className="inline-flex items-center space-x-2 bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
              >
                <span>View Project</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;