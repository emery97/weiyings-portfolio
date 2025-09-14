import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      status: "Completed",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://your-ecommerce-demo.com",
      image: "project-ecommerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      status: "In Progress",
      github: "https://github.com/yourusername/taskmanager",
      demo: "https://your-taskmanager-demo.com",
      image: "task-management"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions and forecasts for multiple cities.",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API"],
      status: "Completed",
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://your-weather-demo.com",
      image: "weather-dashboard"
    },
    {
      title: "Portfolio Website",
      description: "This portfolio website showcasing my projects and skills with animations and responsive design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Motion"],
      status: "Completed",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio.com",
      image: "portfolio-website"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, user authentication, and message history.",
      technologies: ["React", "Socket.io", "Node.js", "Express"],
      status: "Completed",
      github: "https://github.com/yourusername/chat-app",
      demo: "https://your-chat-demo.com",
      image: "chat-application"
    },
    {
      title: "Data Visualization Tool",
      description: "Interactive data visualization tool for analyzing and presenting complex datasets.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      status: "In Progress",
      github: "https://github.com/yourusername/data-viz",
      demo: null,
      image: "data-visualization"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a step in my learning journey 
            and showcases different technologies and problem-solving approaches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="h-48 flex items-center justify-center">
                    <div className="text-6xl text-primary/20">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      className={`${getStatusColor(project.status)} text-white text-xs`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-auto flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl mb-4">Want to see more?</h2>
          <p className="text-muted-foreground mb-6">
            Check out my GitHub profile for more projects and contributions.
          </p>
          <Button 
            className="px-8 py-3"
            onClick={() => window.open('https://github.com/yourusername', '_blank')}
          >
            <Github size={20} className="mr-2" />
            Visit My GitHub
          </Button>
        </motion.div>
      </div>
    </div>
  );
}