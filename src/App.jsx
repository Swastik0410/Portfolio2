import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectGallery from "./components/ProjectGallery";
import Skills from "./components/Skills";
import ResumeViewer from "./components/ResumeViewer";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<ResumeViewer />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </>
  );
}
