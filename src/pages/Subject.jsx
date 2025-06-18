import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databases, storage } from "../appwrite/config";

const BUCKET_ID = "684edcde0007daabf07c";

const Subject = () => {
  const { year, department, subject } = useParams();
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const { documents } = await databases.listDocuments(
          "684edd3600217892a2a1",
          "684edd4800385a6358a8"
        );

        const subjectFiles = documents.filter(
          (doc) =>
            doc.year === year &&
            doc.department === department &&
            doc.subject === subject
        );

        const filesWithURLs = await Promise.all(
          subjectFiles.map(async (doc) => {
            try {
              const downloadUrl = await storage.getFileDownload(BUCKET_ID, doc.fileId);
              return {
                ...doc,
                downloadUrl: downloadUrl.href,
              };
            } catch (e) {
              console.warn("Error loading file", e);
              return null;
            }
          })
        );

        setFiles(filesWithURLs.filter(Boolean));
      } catch (error) {
        console.error("Failed to fetch files:", error);
      }
    };

    fetchFiles();
  }, [year, department, subject]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          📄 Files for {subject} ({department}, {year})
        </h2>
        <p className="text-gray-600 mt-2">
          Pay ₹12 to download the solved PYQs.
        </p>
      </div>

      {files.length === 0 ? (
        <p className="text-gray-500">No files found for this subject.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {files.map((file) => (
            <div
              key={file.$id}
              className="bg-white rounded-xl shadow border p-6 flex flex-col items-center text-center"
            >
              <div className="text-lg font-semibold text-gray-700 mb-3">
                {file.name}
              </div>

              <a
                href="https://rzp.io/rzp/ETNKOs7k"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                ₹12 - Pay & Download
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Subject;
