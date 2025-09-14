import { motion } from "framer-motion";
import { useState } from "react";

const allProjects = [
  { title: "Weather App", category: "Web", link: "#", description: "Weather info using API" },
  { title: "Task Manager", category: "Web", link: "#", description: "Manage tasks with Firebase" },
  { title: "Chat App", category: "Mobile", link: "#", description: "React Native chat app" },
];

export default function ProjectGallery() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web", "Mobile"];

  const filteredProjects =
    filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 bg-black text-white">
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
