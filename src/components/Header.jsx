import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Your Name</h1>
      <nav className={`space-x-4 md:block ${menuOpen ? "block" : "hidden"}`}>
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <Link to="/projects" className="hover:text-indigo-600">Projects</Link>
        <Link to="/skills" className="hover:text-indigo-600">Skills</Link>
        <Link to="/resume" className="hover:text-indigo-600">Resume</Link>
        <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
      </nav>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden px-3 py-1 bg-indigo-600 text-white rounded-lg"
      >
        Menu
      </button>
    </header>
  );
}
