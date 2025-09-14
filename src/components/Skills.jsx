import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TailwindCSS", level: 80 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-black text-white text-center">
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
