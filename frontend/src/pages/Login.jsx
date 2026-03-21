import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // 🌟 TALK TO REAL BACKEND
      const res = await api.post("/auth/login", { email, password });
      
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      navigate("/detect");
      window.location.reload(); // Refreshes Navbar to show "Logout"
    } catch (err) {
      alert(err.response?.data?.message || "Invalid Login");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input 
          type="email" placeholder="Email" className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          value={email} onChange={(e) => setEmail(e.target.value)} required 
        />
        <input 
          type="password" placeholder="Password" className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          value={password} onChange={(e) => setPassword(e.target.value)} required 
        />
        <button type="submit" className="bg-green-700 hover:bg-green-800 text-white w-full py-3 rounded-lg font-bold transition">
          Sign In
        </button>
      </form>
    </div>
  );
}