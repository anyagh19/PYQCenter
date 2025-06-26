import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About PYQ Explorer 📘</h1>

      <div className="max-w-3xl text-gray-700 text-lg leading-relaxed">
        <p className="mb-4">
          <strong>PYQ Explorer</strong> is a platform dedicated to helping university students prepare
          more effectively by providing easy access to <strong>organized, solved previous year question papers (PYQs)</strong>.
        </p>

        <p className="mb-4">
          Whether you're in your first or final year of engineering, we bring you subject-wise and department-wise
          PDF collections to make exam prep easier, smarter, and more focused.
        </p>

        <p className="mb-4">
          Our mission is to reduce stress and save your time by giving you exactly what matters the most —
          **real past questions and quality solutions**.
        </p>

        <p className="mb-4">
          Built with ❤️ by <strong>Aniket Markad</strong>, this tool empowers students across all engineering branches
          to succeed and score better with less hassle.
        </p>
      </div>

      <div className="mt-8 text-gray-600 text-sm">
        📍 Based in India | ✉️ Contact: pyqexplorer@gmail.com
      </div>
    </div>
  );
};

export default About;
