import React from "react";

export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        Welcome to LeafLens 🌿
      </h1>

      <p className="text-lg text-gray-700 w-3/4 mx-auto">
        LeafLens helps farmers and garden lovers identify plant diseases instantly. 
        Upload a picture of a leaf, and our system predicts possible infections — 
        like Blight, Rust, or Leaf Spot — so you can take the right action early.
      </p>

      {/* Image Section */}
      <div className="flex justify-center mt-8">
        <img
          src="/crop.jpg"
          alt="Crop field"
          className="rounded-2xl shadow-lg w-[350px] md:w-[450px] lg:w-[550px]"
        />
      </div>

      {/* Info Section Below Image */}
      <div className="bg-green-50 mt-8 py-6 px-8 rounded-2xl shadow-md w-3/4 md:w-1/2 mx-auto">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">
          How LeafLens Works 🌱
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Simply upload an image of an affected leaf, and our intelligent system
          analyzes it using trained AI models. The model detects signs of common
          plant diseases such as <strong>Blight, Rust, Leaf Spot, and Mildew</strong>.
          You’ll instantly receive a diagnosis and care tips to help your crop recover
          and grow healthy again.
        </p>
      </div>
    </div>
  );
}
