import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";

export default function ResumeViewer() {
  const downloadResume = () => saveAs(resume, "Your_Name_Resume.pdf");

  return (
    <section className="text-center py-16 bg-black text-white">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Resume
      </motion.h2>

      {/* Description */}
      <p className="text-gray-400 mb-8">
        View or download my resume below.
      </p>

      {/* PDF Preview */}
      <div className="max-w-3xl mx-auto mb-8 border border-gray-800 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={resume}
          title="Resume Preview"
          className="w-full h-[600px]"
        />
      </div>

      {/* Download Button */}
      <motion.button
        onClick={downloadResume}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-orange-500 text-white font-medium rounded-xl shadow-lg hover:bg-orange-600 transition"
      >
        Download Resume
      </motion.button>
    </section>
  );
}
