import { useState } from "react";

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, order management, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "https://github.com/username/ecommerce-platform",
    demo: "https://ecommerce-demo.com",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%234F46E5'/%3E%3Crect x='50' y='50' width='300' height='200' fill='%23FFF' rx='10'/%3E%3Crect x='70' y='70' width='260' height='30' fill='%23E5E7EB'/%3E%3Crect x='70' y='120' width='120' height='80' fill='%23F3F4F6'/%3E%3Crect x='210' y='120' width='120' height='80' fill='%23F3F4F6'/%3E%3Ctext x='200' y='40' text-anchor='middle' fill='%23FFF' font-size='20' font-weight='bold'%3EE-Commerce%3C/text%3E%3C/svg%3E"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Socket.io.",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "Framer Motion"],
    github: "https://github.com/username/task-manager",
    demo: "https://taskmanager-demo.com",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2310B981'/%3E%3Crect x='50' y='50' width='300' height='200' fill='%23FFF' rx='10'/%3E%3Crect x='70' y='70' width='80' height='160' fill='%23EF4444' rx='5'/%3E%3Crect x='160' y='70' width='80' height='160' fill='%23F59E0B' rx='5'/%3E%3Crect x='250' y='70' width='80' height='160' fill='%2310B981' rx='5'/%3E%3Ctext x='200' y='40' text-anchor='middle' fill='%23FFF' font-size='18' font-weight='bold'%3ETask Manager%3C/text%3E%3C/svg%3E"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather and forecasts for multiple cities. Features include location-based weather, search functionality, and weather maps.",
    technologies: ["Vue.js", "TypeScript", "Chart.js", "OpenWeather API", "SCSS"],
    github: "https://github.com/username/weather-dashboard",
    demo: "https://weather-demo.com",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%2306B6D4'/%3E%3Ccircle cx='200' cy='100' r='30' fill='%23FCD34D'/%3E%3Cpath d='M100 150 Q150 130 200 150 Q250 170 300 150' fill='none' stroke='%23FFF' stroke-width='5'/%3E%3Cpath d='M120 180 Q170 160 220 180 Q270 200 320 180' fill='none' stroke='%23FFF' stroke-width='3'/%3E%3Ctext x='200' y='40' text-anchor='middle' fill='%23FFF' font-size='18' font-weight='bold'%3EWeather App%3C/text%3E%3C/svg%3E"
  }
];

export default function ProjectsModal({ isOpen, onClose }: ProjectsModalProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card text-card-foreground rounded-lg p-6 max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar modal-animate border border-border shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <i className="fas fa-laptop text-2xl text-primary"></i>
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        
        {!selectedProject ? (
          /* Projects Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-muted rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted-foreground/20 text-muted-foreground text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Project Detail View */
          <div>
            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
            >
              <i className="fas fa-arrow-left"></i>
              Back to Projects
            </button>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
