import React, { useState } from "react";

export default function Detection() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  const diseases = [
    "Leaf Blight",
    "Rust",
    "Powdery Mildew",
    "Leaf Spot",
    "Downy Mildew",
    "Bacterial Wilt",
    "Root Rot"
  ];

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleDetect = () => {
    if (!image) {
      alert("Please upload an image first!");
      return;
    }

    const detected = diseases[Math.floor(Math.random() * diseases.length)];
    setResult(detected);

    const newHistory = [...history, { image, detected }];
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Detect Plant Disease</h2>
      <input
        type="file"
        accept="image/*"
        className="mb-4"
        onChange={handleUpload}
      />
      <button
        onClick={handleDetect}
        className="bg-green-700 text-white px-4 py-2 rounded"
      >
        Detect
      </button>

      {image && (
        <div className="mt-6">
          <img src={image} alt="Uploaded" className="w-60 mx-auto rounded-xl" />
          <p className="mt-3 text-xl text-gray-800">
            {result ? `Detected Disease: ${result}` : ""}
          </p>
        </div>
      )}
    </div>
  );
}
