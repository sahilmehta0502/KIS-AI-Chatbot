"use client";
import { useState } from "react";

export default function AdminPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");

  async function uploadFile() {
    if (!file) return setStatus("No file selected");

    try {
      const formData = new FormData();
      formData.append("file", file, file.name);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      setStatus(data.success ? "Upload successful!" : "Upload failed: " + data.message);
    } catch (err) {
      console.error(err);
      setStatus("Upload failed: " + (err as Error).message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Admin Knowledge Upload
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Upload Excel file to update chatbot knowledge
        </p>

        {/* File Input */}
        <input
          type="file"
          accept=".xlsx"
          onChange={e => setFile(e.target.files?.[0] || null)}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-medium
            file:bg-blue-600 file:text-white
            hover:file:bg-blue-700
            transition"
        />

        {/* Upload Button */}
        <button
          onClick={uploadFile}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition"
        >
          Upload Knowledge
        </button>

        {/* Status */}
        {status && (
          <p className="text-center text-sm mt-4 text-gray-700">{status}</p>
        )}
      </div>
    </div>
  );
}
