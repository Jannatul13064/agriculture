"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    expertise: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Form Data:", form, "File:", file);
    // TODO: send to backend or API
    setForm({ name: "", email: "", expertise: "", message: "" });
    setFile(null);
  };

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Contact Agricultural Experts
        </h1>
        <p className="text-gray-600 mb-10 mx-auto max-w-2xl">
          Submit inquiries, seek advice, or request additional information from
          agricultural experts. Attach images or documents if necessary.
        </p>

        <form
          className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Your Expertise (optional)"
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={form.expertise}
            onChange={(e) => setForm({ ...form, expertise: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          {/* File Upload with Icon */}
          <label className="w-full border-2 border-dashed border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition">
            <UploadCloud className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-gray-500">
              {file ? file.name : "Click to upload a file (optional)"}
            </span>
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) setFile(e.target.files[0]);
              }}
            />
          </label>

          <button
            type="submit"
            className="w-full bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
