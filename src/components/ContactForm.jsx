import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send("your_service_id", "your_template_id", form, "your_user_id")
      .then(() => {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send"));
  };

  return (
    <section id="contact" className="py-16 bg-black text-white text-center">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      {/* Form */}
      <form
        onSubmit={sendEmail}
        className="max-w-lg mx-auto space-y-4 text-left"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full p-3 h-32 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition"
        ></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-orange-500 text-white font-medium rounded-lg shadow-lg hover:bg-orange-600 transition"
        >
          Send Message
        </motion.button>

        {status && (
          <p
            className={`mt-2 text-sm ${
              status === "Message sent!" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
