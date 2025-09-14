import { motion } from "framer-motion";

const skills = [
  {name: "MongoDB", level: 65},
  {name: "Express.js", level: 80},
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TailwindCSS", level: 80 },
  {name: "MySQL", level: 95},
   {name: "Java", level: 60},
];
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

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-black text-white text-center">
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
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>

      {/* Skills list */}
      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((skill, i) => (
          <div key={i} className="text-left">
            {/* Label */}
            <div className="flex justify-between mb-1 text-gray-300">
              <span className="font-medium">{skill.name}</span>
              <span className="text-orange-400">{skill.level}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-orange-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
