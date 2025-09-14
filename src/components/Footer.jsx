import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-center p-4 border-t mt-10">
      <div className="flex justify-center space-x-6 mb-2">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        <a href="mailto:you@example.com"><Mail /></a>
      </div>
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  );
}
