"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message submitted! 🎵");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen mt-8 bg-gray-950 text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-teal-400">Contact Us</h2>
          <p className="mt-2 text-gray-400">
            Have questions about our music courses? Reach out and we’ll get back to you!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md transition"
          >
            Send Message
          </button>
        </form>
        <div className="text-center text-sm text-gray-500">
          Or email us directly at{" "}
          <a href="mailto:info@musicacademy.com" className="text-teal-400 underline">
            info@musicacademy.com
          </a>
        </div>
      </div>
    </div>
  );
}
