import { saveAs } from "file-saver";
import resume from "../assets/resume.pdf";

export default function ResumeViewer() {
  const downloadResume = () => saveAs(resume, "Your_Name_Resume.pdf");

  return (
    <section className="text-center py-10 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-4">My Resume</h2>
      <p className="mb-6">Click below to download my resume as a PDF.</p>
      <button
        onClick={downloadResume}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Download Resume
      </button>
    </section>
  );
}
