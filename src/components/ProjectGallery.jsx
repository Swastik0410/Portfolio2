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

  const filteredProjects = filter === "All" ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-10 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg ${filter === cat ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {filteredProjects.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="mb-4">{p.description}</p>
            <a href={p.link} className="text-indigo-600 underline" target="_blank" rel="noopener noreferrer">View</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
