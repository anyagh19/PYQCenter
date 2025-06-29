import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databases } from "../appwrite/config";

const Subject = () => {
  const { year, department, subject } = useParams();
  const [files, setFiles] = useState([]);
  const [pendingDownload, setPendingDownload] = useState(false);

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

        setFiles(subjectFiles);
      } catch (error) {
        console.error("Failed to fetch files:", error);
      }
    };

    fetchFiles();
  }, [year, department, subject]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayClick = async (file) => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "", // Replace with your real Razorpay Key ID
      amount: 1200, // in paise = ₹12
      currency: "INR",
      name: "Solved PYQ Store",
      description: `Download for ${file.name}`,
      image: "https://your-logo-url.com/logo.png", // Optional
      handler: function (response) {
        // Save file info to allow download
        localStorage.setItem(
          "fileToDownload",
          JSON.stringify({ fileId: file.fileId, name: file.name })
        );
        setPendingDownload(true);
        alert("✅ Payment Successful!");
      },
      prefill: {
        name: "Student",
        email: "student@example.com",
      },
      theme: {
        color: "#22c55e",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

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

              <button
                onClick={() => handlePayClick(file)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                ₹12 - Pay & Download
              </button>
            </div>
          ))}
        </div>
      )}

      {pendingDownload && (
        <div className="mt-10">
          <a
            href="/download/manual"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            ✅ I Paid – Download Now
          </a>
        </div>
      )}
    </div>
  );
};

export default Subject;
