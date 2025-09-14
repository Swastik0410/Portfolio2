import { motion } from "framer-motion";
import { useState } from "react";

const allProjects = [
  { title: "Streamly", category: "Web", link: "https://github.com/Swastik0410/Chaibackend0ngoing", description: "A FullStack Video Streaming application made using Express, Node, MongoDB, Cloudinary etc.." },
  { title: "Task-Hive", category: "Web", link: "https://www.linkedin.com/posts/swastik-roy-b11162216_taskhive-reactjs-tailwindcss-activity-7364535050685550593-GgnM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZ75b0Bef47O75Cz9iQNrrAoN74prWw1vo", description: "An Employee Management System with Admin and Employee dashboards" },
  { title: "Nutri-Track", category: "Web", link: "https://nutritrack0410.netlify.app/", description: "A calorie Tracker app curated based on Indian food options" },
  { title: "Fake news Detection System", category: "Machine Learning", link: "https://github.com/Swastik0410/fakenews0410", description: "A fake news Detection System based on Logistic Regression  and TF-IDF Vectorization " },
];
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

export default function ProjectGallery() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web", "Machine Learning"];

  const filteredProjects =
    filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 bg-black text-white">
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
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-xl font-medium transition ${
              filter === cat
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {filteredProjects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl shadow-xl p-6 border border-gray-800 hover:border-orange-500 transition"
          >
            <h3 className="text-xl font-bold mb-2 text-orange-400">{p.title}</h3>
            <p className="text-gray-400 mb-4">{p.description}</p>
            <a
              href={p.link}
              className="text-orange-500 hover:text-orange-400 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
