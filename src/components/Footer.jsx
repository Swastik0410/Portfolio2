import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-center p-6 border-t border-gray-800 mt-16">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-500 transition"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:you@example.com"
          className="hover:text-orange-500 transition"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-white">Your Name</span>. All rights reserved.
      </p>
    </footer>
  );
}
