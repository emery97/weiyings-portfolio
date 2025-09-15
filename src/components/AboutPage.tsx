import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function AboutPage() {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const timelineRef = useRef(null);

  const techStack = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Express.js",
    "Next.js",
    "C++",
    "C#",
    "React Native",
    "Java",
    "SQL",
  ];

  const tools = [
    "PowerBI",
    "Figma",
    "Visual Paradigm",
    "Postman",
    "GitHub",
    "Canva",
    "Andriod Studio",
    "Jira",
    "Visual Studio Code",
  ];

  const timelineItems = [
    {
      year: "Mar 2025 - Mar 2026",
      title: "Software Development Intern",
      company: "A*STAR | Agency for Science, Technology and Research",
      description:
        "Contributed to software development projects, collaborating with cross-functional teams to design, implement, and optimize software solutions for sustainability initiatives.",
      type: "experience",
    },
    {
      year: "2023 - 2026",
      title: "Diploma in Information Technology",
      company: "Ngee Ann Polytechnic, School of Infocomm Technology",
      description:
        "Specialized in Software Engineering with a minor in Social Media Marketing. Gained comprehensive knowledge in IT systems, programming, and digital marketing strategies.",
      type: "education",
    },
    {
      year: "Dec 2023 - Feb 2024",
      title: "Indoor Sales Associate",
      company: "AR Robotics and Automation",
      description:
        "Composed persuasive email campaigns targeting companies, promoted robotic solutions, sourced and compiled contact information using Apollo.io and Hunter.io, and optimized outreach strategies to improve productivity and conversion.",
      type: "experience",
    },
    {
      year: "Nov 2020 - Nov 2023",
      title: "Crew",
      company: "McDonald’s, Singapore",
      description:
        "Cross-trained across multiple store positions to ensure smooth operations. Delivered excellent customer service and effectively handled inquiries and complaints.",
      type: "experience",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const elementTop = rect.top + scrollTop;
      const viewportBottom = scrollTop + viewportHeight;

      // Calculate scroll progress from 0 to 1
      const progress = Math.min(
        1,
        Math.max(0, (scrollTop - elementTop + viewportHeight) / containerHeight)
      );

      // Map progress to timeline index
      const newActiveIndex = Math.min(
        Math.floor(progress * (timelineItems.length - 1) + 0.3),
        timelineItems.length - 1
      );

      setActiveTimelineItem(newActiveIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [timelineItems.length]);

  // Assign colors based on timeline item type
  const getTimelineItemColor = (type: string) => {
    const colorMap: Record<string, string> = {
      education: "bg-blue-500",
      experience: "bg-green-500",
      project: "bg-purple-500",
      skill: "bg-purple-500",
    };

    return colorMap[type] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6">About Me</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              I have a deep passion for both technology and business. My
              long-term goal is to build my own business, integrating technology
              to drive innovation and growth. I pride myself on a strong work
              ethic, resilience in the face of challenges, and the ability to
              thrive both as a team player and as a leader.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              One of my guiding principles is the mindset of "Not Yet," inspired
              by Matt Abrahams’ <em>Think Faster, Talk Smarter</em>. This
              perspective helps me view setbacks as opportunities rather than
              failures, turning challenges into stepping stones for continuous
              learning and growth.
            </p>
            <p className="text-lg text-muted-foreground">
              If you’d like to connect or have job opportunities available, feel
              free to reach out to me at{" "}
              <a href="mailto:leeweiying.info@gmail.com" className="email-link">
                leeweiying.info@gmail.com
              </a>
              .
            </p>
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl text-center mb-8">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl text-center mb-8">Tool Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {tool} {/* render the single tool */}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl text-center mb-12">My Journey</h2>
          <div
            ref={timelineRef}
            className="relative max-w-4xl mx-auto pb-[100vh]"
          >
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-primary/70 origin-top"
                initial={{ height: "0%" }}
                animate={{
                  height: `${
                    (activeTimelineItem /
                      Math.max(timelineItems.length - 1, 1)) *
                    100
                  }%`,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              />
            </div>

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    className={`w-4 h-4 rounded-full border-4 border-background ${
                      index <= activeTimelineItem
                        ? getTimelineItemColor(item.type)
                        : "bg-muted"
                    }`}
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{
                      scale: index <= activeTimelineItem ? 1.2 : 0.8,
                      opacity: index <= activeTimelineItem ? 1 : 0.5,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                  />
                  {index <= activeTimelineItem && (
                    <motion.div
                      className={`absolute inset-0 rounded-full ${getTimelineItemColor(
                        item.type
                      )} opacity-30`}
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } md:w-1/2`}
                >
                  <motion.div
                    initial={{ opacity: 0.6, scale: 0.95 }}
                    animate={{
                      opacity: index <= activeTimelineItem ? 1 : 0.6,
                      scale: index <= activeTimelineItem ? 1 : 0.95,
                      y: index <= activeTimelineItem ? 0 : 10,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <Card
                      className={`transition-all duration-500 rounded-xl overflow-hidden ${
                        index <= activeTimelineItem
                          ? "shadow-lg border-primary/20 bg-card"
                          : "shadow-sm border-border/50 bg-muted/30"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {item.year}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className={`text-xs ${getTimelineItemColor(
                              item.type
                            )} text-white`}
                          >
                            {item.type}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <div className="text-indigo-600 font-light text-sm mb-2">
                          {item.company}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
