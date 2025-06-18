import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { databases } from "../appwrite/config";

const Department = () => {
  const { year, department } = useParams();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const { documents } = await databases.listDocuments(
          "684edd3600217892a2a1",
          "684edd4800385a6358a8"
        );
        const filtered = documents.filter(
          (doc) => doc.year === year && doc.department === department
        );
        const uniqueSubjects = [...new Set(filtered.map((doc) => doc.subject))];
        setSubjects(uniqueSubjects);
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
      }
    };

    fetchSubjects();
  }, [year, department]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          📘 {department.toUpperCase()} - {year}
        </h2>
        <p className="text-gray-600 mt-2">Choose a subject to view solved PYQs.</p>
      </div>

      {subjects.length === 0 ? (
        <p className="text-gray-500">No subjects found for this department and year.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {subjects.map((subject) => (
            <Link
              key={subject}
              to={`/year/${year}/${department}/${subject}`}
              className="bg-white rounded-xl shadow hover:shadow-lg border border-gray-200 p-6 text-center text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-transform duration-300 hover:scale-105"
            >
              {subject}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Department;
