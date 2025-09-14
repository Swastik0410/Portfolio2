import { motion } from "framer-motion";
import yourPhoto from "../assets/your-photo.jpg";
import { Link } from "react-router-dom";

// Fixed background code patterns with string escaping
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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 overflow-hidden">
      
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

      {/* Photo */}
      <motion.img
        src={yourPhoto}
        alt="Your portrait"
        className="relative z-10 mx-auto rounded-2xl w-40 h-40 sm:w-44 sm:h-44 object-cover shadow-lg border-4 border-orange-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Title */}
      <motion.h1
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold mt-6 tracking-tight text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hi, I’m <span className="text-orange-500">Swastik</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="relative z-10 text-gray-400 text-base sm:text-lg md:text-xl mt-3 max-w-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        MERN-Stack Developer | React • Node.js • Express.js • MongoDB 
      </motion.p>

      {/* Buttons */}
      <div className="relative z-10 mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
        <Link
          to="/projects"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow-md font-medium transition text-center"
        >
          View My Work
        </Link>
        <Link
          to="/skills"
          className="border border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 px-6 py-3 rounded-xl shadow-md font-medium transition text-center"
        >
          My Skills
        </Link>
      </div>
    </section>
  );
}
