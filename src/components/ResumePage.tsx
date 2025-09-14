import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import pdfFile from "../Assets/lee-wei-ying-resume.pdf"; // correct import

// Set PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.10.377/es5/build/pdf.worker.min.js`;

export function ResumePage() {
  const [width, setWidth] = useState(1200);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleDownloadResume = () => {
    // pdfFile is now a valid URL thanks to Webpack
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Lee_Wei_Ying_Resume.pdf";
    link.target = "_blank"; // ensures it works in all browsers
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreviewResume = () => {
    setShowPreview(true);
    document
      .getElementById("resume-preview")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6">Resume</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Download my resume or preview it below
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="px-8 py-3 text-lg"
              >
                <AiOutlineDownload size={20} className="mr-2" />
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
                Preview Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {showPreview && (
          <div id="resume-preview" className="resume my-8 flex justify-center">
            <Document file={pdfFile}>
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </div>
        )}
      </div>
    </div>
  );
}
