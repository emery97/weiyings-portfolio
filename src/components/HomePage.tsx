import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronDown, Linkedin, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HomePage() {
  const roles = [
    "an Information Technology Student",
    "a Junior Full Stack Web Developer",
    "a Problem Solver",
    "a Tech Enthusiast",
    "a Creative Thinker",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/lee-weiying/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/emery97", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />

      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="text-center z-10 px-4">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 rounded-full animate-pulse"></div>
            <div className="absolute inset-1 bg-background rounded-full">
              <ImageWithFallback
                src="src/Assets/pfp.jpeg"
                alt="Wei Ying"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
            Hi there, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Wei Ying
            </span>
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl mb-8 h-12 flex items-center justify-center"
        >
          <span className="mr-3">I am</span>
          <motion.span
            key={currentRoleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            {roles[currentRoleIndex]}
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Passionate about technology, always learning, and ready to create
          amazing digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* LinkedIn Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLinkedInClick}
            className="btn linkedin-btn"
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.button>

          {/* GitHub Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGitHubClick}
            className="btn github-btn"
          >
            <Github size={20} />
            GitHub
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
