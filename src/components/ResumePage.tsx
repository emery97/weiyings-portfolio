import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Download, Eye, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export function ResumePage() {
  const handleDownloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to place your actual resume PDF in the public folder
    link.download = 'YourName_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreviewResume = () => {
    // Open resume in a new tab for preview
    window.open('/resume.pdf', '_blank');
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'your.email@example.com', link: 'mailto:your.email@example.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: MapPin, label: 'Location', value: 'Your City, Country', link: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', link: 'https://linkedin.com/in/yourprofile' },
    { icon: Github, label: 'GitHub', value: 'github.com/yourusername', link: 'https://github.com/yourusername' },
  ];

  const resumeHighlights = [
    {
      title: "Education",
      content: "Bachelor's in Information Technology (Expected 2026)"
    },
    {
      title: "Key Skills",
      content: "Full-Stack Development, React, Node.js, Python, Database Design"
    },
    {
      title: "Experience",
      content: "Multiple personal projects, open-source contributions, internship experience"
    },
    {
      title: "Certifications",
      content: "AWS Cloud Practitioner, Google Analytics Certified"
    }
  ];

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
          <h1 className="text-4xl md:text-5xl mb-6">Resume</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Download my resume to learn more about my background, skills, and experience. 
            You can also preview it online before downloading.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                onClick={handleDownloadResume}
                className="px-8 py-3 text-lg"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handlePreviewResume}
                className="px-8 py-3 text-lg"
              >
                <Eye size={20} className="mr-2" />
                Preview Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out to me through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  const content = (
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <Icon size={20} className="text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </div>
                  );

                  return contact.link ? (
                    <motion.a
                      key={index}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="block"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div key={index} whileHover={{ scale: 1.02 }}>
                      {content}
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Resume Highlights</CardTitle>
                <CardDescription>
                  Quick overview of what you'll find in my resume
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-primary/20 pl-4"
                  >
                    <h3 className="font-semibold text-primary mb-1">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm">{highlight.content}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Let's Connect</CardTitle>
              <CardDescription>
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('mailto:your.email@example.com', '_blank')}
                  >
                    <Mail size={18} className="mr-2" />
                    Send Email
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
                  >
                    <Linkedin size={18} className="mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-6">
                Note: Please make sure to place your actual resume PDF file in the public folder as 'resume.pdf' 
                for the download functionality to work properly.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}