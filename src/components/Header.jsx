import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-orange-400 backdrop-blur-md shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo / Name */}
      <h1 className="text-2xl font-bold text-black">Your Name</h1>

      {/* Desktop Nav */}
      <nav className=" hidden md:flex space-x-6 text-black">
        <Link to="/" className="hover:text-gray-600 transition">Home</Link>
        <Link to="/projects" className="hover:text-gray-600 transition">Projects</Link>
        <Link to="/skills" className="hover:text-gray-600 transition">Skills</Link>
        <Link to="/resume" className="hover:text-gray-600 transition">Resume</Link>
        <Link to="/contact" className="hover:text-gray-600 transition">Contact</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden px-3 py-2 bg-orange-500 text-white rounded-lg focus:outline-none"
      >
        Menu
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/95 text-gray-300 flex flex-col items-center space-y-4 py-6 md:hidden">
          <Link onClick={() => setMenuOpen(false)} to="/" className="hover:text-orange-500">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/projects" className="hover:text-orange-500">Projects</Link>
          <Link onClick={() => setMenuOpen(false)} to="/skills" className="hover:text-orange-500">Skills</Link>
          <Link onClick={() => setMenuOpen(false)} to="/resume" className="hover:text-orange-500">Resume</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact" className="hover:text-orange-500">Contact</Link>
        </div>
      )}
    </header>
  );
}
