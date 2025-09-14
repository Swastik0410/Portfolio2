import { motion } from "framer-motion";
import yourPhoto from "../assets/your-photo.jpg";
import { Link } from "react-router-dom";

// Simple fixed background code patterns
const codePatterns = [
  { id: 1, symbol: "{}", top: "20%", left: "15%" },
  { id: 2, symbol: "</>", top: "40%", left: "75%" },
  { id: 3, symbol: "=>", top: "65%", left: "25%" },
  { id: 4, symbol: "function()", top: "30%", left: "55%" },
  { id: 5, symbol: "console.log()", top: "55%", left: "50%" },
  { id: 6, symbol: "System.Out.Println('Swastik's Portfolio');", top: "79%", left: "5%" },
  { id: 7, symbol: "SELECT * FROM SWASTIK;", top: "10%", left: "2%" }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 overflow-hidden">
      {/* Background code patterns */}
      {codePatterns.map((item) => (
        <span
          key={item.id}
          className="absolute text-gray-700 text-5xl font-mono select-none pointer-events-none opacity-50"
          style={{ top: item.top, left: item.left }}
        >
          {item.symbol}
        </span>
      ))}

      {/* Photo */}
      <motion.img
        src={yourPhoto}
        alt="Your portrait"
        className="relative z-10 mx-auto rounded-2xl w-44 h-44 object-cover shadow-lg border-4 border-orange-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Title */}
      <motion.h1
        className="relative z-10 text-4xl md:text-5xl font-bold mt-6 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hi, I’m <span className="text-orange-500">Your Name</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="relative z-10 text-gray-400 text-lg md:text-xl mt-3 max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Full-Stack Developer | React • Node.js • Cloud
      </motion.p>

      {/* Buttons */}
      <div className="relative z-10 mt-8 flex gap-6">
        <Link
          to="/projects"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow-md font-medium transition"
        >
          View My Work
        </Link>
        <Link
          to="/skills"
          className="border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 px-6 py-3 rounded-xl shadow-md font-medium transition"
        >
          My Skills
        </Link>
      </div>
    </section>
  );
}
