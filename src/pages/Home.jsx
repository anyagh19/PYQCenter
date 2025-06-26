import React from "react";
import { Link } from "react-router-dom";

const years = [
  { year: "FE", label: "First Year Engineering", color: "bg-blue-500" },
  { year: "SE", label: "Second Year Engineering", color: "bg-green-500" },
  { year: "TE", label: "Third Year Engineering", color: "bg-yellow-500" },
  { year: "BE", label: "Fourth Year Engineering", color: "bg-pink-500" },
];

const Home = () => (
  <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
    {/* Hero Section */}
    <div className="max-w-5xl w-full text-center mb-12">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2965/2965871.png"
        alt="Books Illustration"
        className="w-32 h-32 mx-auto mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to PYQ Explorer 🎓</h1>
      <p className="text-gray-600 text-lg leading-relaxed">
        Struggling with exam preparation? No worries! <strong>PYQ Explorer</strong> provides <strong>organized and solved previous year question papers</strong> for all engineering years.
        Get access to year-wise, subject-wise PDFs that help you understand the exam pattern and practice smart.
      </p>
      <p className="text-gray-500 mt-4 text-md">
        Empowering university students to study efficiently, boost scores, and reduce stress.
      </p>
    </div>

    {/* Year Selection */}
    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Select Your Year</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
      {years.map((year) => (
        <Link
          key={year.year}
          to={`/year/${year.year}`}
          className={`block rounded-xl shadow-md text-white text-center text-xl font-semibold py-12 transition-transform duration-300 hover:scale-105 ${year.color}`}
        >
          {year.label}
        </Link>
      ))}
    </div>
  </div>
);

export default Home;
