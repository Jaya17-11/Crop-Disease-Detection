import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // 🌟 Importing axios to talk to your backend

export default function Register() {
  const [name, setName] = useState(""); // 🌟 New state for Name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // 🌟 Calling your backend API instead of just localStorage
      const response = await axios.post("http://localhost:8080/api/auth/register", {
        name,
        email,
        password,
      });

      if (response.status === 201) {
        alert("Registration successful! Welcome to Leaflens.");
        navigate("/login");
      }
    } catch (error) {
      // Handles "User already exists" or other backend errors
      alert(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Register</h2>
      <form onSubmit={handleRegister}>
        {/* 🌟 FULL NAME INPUT */}
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white w-full py-2 rounded font-semibold transition-colors"
        >
          Register
        </button>
      </form>
      
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account? <span className="text-green-700 cursor-pointer" onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  );
}