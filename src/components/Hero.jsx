import { motion } from "framer-motion";
import yourPhoto from "../assets/your-photo.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <motion.img
        src={yourPhoto}
        alt="Your portrait"
        className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.h1
        className="text-4xl font-bold mb-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Hi, I'm Your Name
      </motion.h1>
      <p className="text-lg mb-6">Full-Stack Developer | React • Node.js • Cloud</p>
      <Link
  to="/projects"
  className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-200"
    > View My Work</Link>
    
    </section>
  );
}
