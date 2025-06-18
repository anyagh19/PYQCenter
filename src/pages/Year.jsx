import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { databases } from "../appwrite/config";

const Year = () => {
  const { year } = useParams();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const { documents } = await databases.listDocuments(
          "684edd3600217892a2a1",
          "684edd4800385a6358a8"
        );
        const filtered = documents.filter((doc) => doc.year === year);
        const uniqueDepts = [...new Set(filtered.map((doc) => doc.department))];
        setDepartments(uniqueDepts);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, [year]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">🏫 Departments in {year}</h2>
        <p className="text-gray-600 mt-2">Select your department to view subjects and solved PYQs.</p>
      </div>

      {departments.length === 0 ? (
        <p className="text-gray-500">No departments found for this year.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {departments.map((dept) => (
            <Link
              key={dept}
              to={`/year/${year}/${dept}`}
              className="bg-white rounded-xl shadow hover:shadow-lg border border-gray-200 p-6 text-center text-lg font-semibold text-gray-700 hover:text-blue-600 transition-transform duration-300 hover:scale-105"
            >
              {dept}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Year;
