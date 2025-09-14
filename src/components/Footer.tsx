import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:leeweiying.info@gmail.com",
      color: "hover:text-blue-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lee-weiying",
      color: "hover:text-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/emery97",
      color: "hover:text-gray-600 dark:hover:text-gray-400",
    },
    {
      name: "Telegram",
      icon: Send,
      href: "https://t.me/getanicesleep",
      color: "hover:text-[#0088cc]",
    },
  ];

  return (
    <footer className="bg-background border-t border-border pt-16 pb-32 px-4">
      <div className="flex flex-col items-center gap-8">
        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel={
                social.href.startsWith("mailto:") ? "" : "noopener noreferrer"
              }
              className={`text-muted-foreground transition-colors duration-200 ${social.color}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              aria-label={social.name}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>

        {/* Built with ❤️ */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-muted-foreground text-sm text-center"
        >
          Built with ❤️ using React & Tailwind
        </motion.p>

        {/* Last updated */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-muted-foreground text-xs text-center mb-8"
        >
          Last updated {currentYear}
        </motion.p>
      </div>
    </footer>
  );
}
