import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      "your_service_id",
      "your_template_id",
      form,
      "your_user_id"
    ).then(() => {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    }).catch(() => setStatus("Failed to send"));
  };

  return (
    <section id="contact" className="py-10 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <form onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full p-2 border rounded" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" className="w-full p-2 border rounded"></textarea>
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Send</button>
        {status && <p className="mt-2 text-green-600">{status}</p>}
      </form>
    </section>
  );
}
