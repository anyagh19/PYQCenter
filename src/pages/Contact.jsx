import React, { useState } from "react";
import { databases } from "../appwrite/config";
import { ID } from "appwrite";

const DATABASE_ID = "684edd3600217892a2a1";
const ISSUE_COLLECTION_ID = "685c1ddd002fab6315c4";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await databases.createDocument(
        DATABASE_ID,
        ISSUE_COLLECTION_ID,
        ID.unique(),
        {
          name: form.name,
          email: form.email,
          message: form.message,
        }
      );

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Issue submission failed:", err);
      setError("❌ Failed to submit issue. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          📬 Contact Us / Report an Issue
        </h2>

        {submitted ? (
          <p className="text-center text-green-600 text-lg">
            ✅ Your issue has been submitted!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Message / Issue</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {error && <p className="text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit Issue
            </button>
          </form>
        )}

        {/* Additional Contact Info */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          <p className="mb-1">📧 Email: <a href="mailto:pyqexplorer@gmail.com" className="text-blue-600">pyqexplorer@gmail.com</a></p>
          <p>📱 Phone / WhatsApp: <a href="tel:+917558417655" className="text-blue-600">+91 7558417655</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
