import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

import ameliaXweiying from "../Assets/Projects/ameliaXweiying.png";
import eduHelper from "../Assets/Projects/eduHelper.png";
import ticketFinder from "../Assets/Projects/ticketFinder.png";
import legitAnot from "../Assets/Projects/legitAnot.png";
import SPM from "../Assets/Projects/SPM.png";
import sustainify from "../Assets/Projects/sustainify.png";
import chioset from "../Assets/Projects/chioset.jpg";

export function ProjectsPage() {
  const projects = [
    {
      title: "Chioset",
      description:
        "Helps users plan outfits efficiently with AR try-ons and weather-based suggestions.",
      technologies: ["React", "Bootstrap", "TensorFlow", "MongoDB"],
      status: "Completed",
      github: "https://github.com/emery97/HackAndRoll.git",
      demo: null,
      image: chioset,
    },
    {
      title: "Ticket Finder | Android App",
      description:
        "Simplifies event discovery and booking with seat selection, ticket transfer, and automated reminders.",
      technologies: ["Java", "XML", "Firebase"],
      status: "Completed",
      github: "https://github.com/emery97/MAD24_P02_Team3.git",
      demo: "https://www.canva.com/design/DAGbDpzpoIs/M85vZfoxhGgMjBTaL1PHqA/edit?utm_content=DAGbDpzpoIs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      image: ticketFinder,
    },
    {
      title: "Sustainify",
      description:
        "Helps transport companies track and reduce carbon emissions with dashboards, reports, and actionable insights.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      github: "https://github.com/emery97/sustainify.git",
      demo: null,
      image: sustainify,
    },
    {
      title: "Legit Anot",
      description:
        "Protects users from malicious links with real-time safety evaluations and feedback integration.",
      technologies: ["React", "Bootstrap", "MongoDB"],
      status: "Completed",
      github: "https://github.com/enjiawu/youthxhack.git",
      demo: "https://www.canva.com/design/DAGbD_UhG9I/JogaW6SvL2QPgORJbO9udw/edit?utm_content=DAGbD_UhG9I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      image: legitAnot,
    },
    {
      title: "EduHelper",
      description:
        "Linkedin-inspired web app enabling students to access courses and lectures while allowing educators to upload content seamlessly.",
      technologies: ["HTML", "CSS", "JavaScript", "MS SQL Server"],
      status: "Completed",
      github: "https://github.com/NgJoeYi/BED2024Apr_P07_T08.git",
      demo: null,
      image: eduHelper,
    },
    {
      title: "Ngee Ann City",
      description:
        "Demonstrates SCRUM methodology while delivering a functional website in a collaborative class project.",
      technologies: ["HTML", "CSS", "JavaScript", "Jira"],
      status: "Completed",
      github: "https://github.com/RaeannTaiYuXuan/SPM_Assignment.git",
      demo: null,
      image: SPM,
    },
    {
      title: "Amelia x Weiying",
      description:
        "Empowers teenage girls with stylish, affordable clothing through a user-friendly website.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      github: "https://github.com/emery97/FED-ameliaXweiying.git",
      demo: "https://emery97.github.io/FED-ameliaXweiying/",
      image: ameliaXweiying,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "In Progress":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
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
            Here are some of the projects I've worked on. Each project
            represents a step in my learning journey and showcases different
            technologies and problem-solving approaches.
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
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain h-full"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${getStatusColor(
                        project.status
                      )} text-white text-xs`}
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
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.demo, "_blank")}
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
            onClick={() => window.open("https://github.com/emery97", "_blank")}
          >
            <Github size={20} className="mr-2" />
            Visit My GitHub
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
