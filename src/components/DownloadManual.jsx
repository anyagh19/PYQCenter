import React, { useEffect } from "react";
import { storage } from "../appwrite/config";

const BUCKET_ID = "684edcde0007daabf07c";

const DownloadManual = () => {
  useEffect(() => {
    const stored = localStorage.getItem("fileToDownload");

    if (!stored) {
      alert("No file selected for download.");
      return;
    }

    const { fileId, name } = JSON.parse(stored);

    const download = async () => {
      try {
        const res = await storage.getFileDownload(BUCKET_ID, fileId);
        const url = res?.href || res;

        if (!url) throw new Error("No download URL");

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", name || "file.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        localStorage.removeItem("fileToDownload");
      } catch (error) {
        console.error("Download failed:", error);
        alert("Download failed. Try again or contact support.");
      }
    };

    download();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl text-gray-700">⬇️ Downloading your file...</p>
    </div>
  );
};

export default DownloadManual;
