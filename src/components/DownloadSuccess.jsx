import React, { useEffect } from "react";
import { storage } from "../appwrite/config";

const BUCKET_ID = "684edcde0007daabf07c";

const DownloadSuccess = () => {
  useEffect(() => {
    const storedData = localStorage.getItem("fileToDownload");
    if (!storedData) return;

    const { fileId, name } = JSON.parse(storedData);

    storage.getFileDownload(BUCKET_ID, fileId)
      .then((res) => {
        const link = document.createElement("a");
        link.href = res.href;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        localStorage.removeItem("fileToDownload"); // cleanup
      })
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl text-gray-700">✅ Payment done! Downloading file...</p>
    </div>
  );
};

export default DownloadSuccess;
