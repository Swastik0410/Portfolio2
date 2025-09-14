import { saveAs } from "file-saver";
import { motion } from "framer-motion";
import resume from "../assets/resume.pdf";

export default function ResumeViewer() {
  const downloadResume = () => saveAs(resume, "Swastik_Resume.pdf");
  const codePatterns = [
  { id: 1, symbol: "{}", top: "20%", left: "15%" },
  { id: 2, symbol: "</>", top: "40%", left: "75%" },
  { id: 3, symbol: "=>", top: "65%", left: "25%" },
  { id: 4, symbol: "function()", top: "30%", left: "55%" },
  { id: 5, symbol: "console.log()", top: "55%", left: "71%" },
  { id: 6, symbol: "System.Out.Println('Swastik\\'s Portfolio');", top: "79%", left: "5%" }, // escaped apostrophe
  { id: 7, symbol: "SELECT * FROM SWASTIK;", top: "10%", left: "2%" },
  { id: 8, symbol: "npm i swastik", top: "15%", left: "65%" }
];

  return (
    <section className="text-center py-16 bg-black text-white">
      {/* Background code patterns */}
      {codePatterns.map((item) => (
        <span
          key={item.id}
          className="absolute text-gray-700 font-mono select-none pointer-events-none opacity-50"
          style={{
            top: item.top,
            left: item.left,
            fontSize: `clamp(1rem, 5vw, 3rem)` // scales text with screen width
          }}
        >
          {item.symbol}
        </span>
      ))}
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
