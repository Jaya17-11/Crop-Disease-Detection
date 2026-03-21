import React, { useState } from "react";
import api from "../api";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState(user?.name || "");
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put("/auth/update-profile", { email: user.email, name });
      localStorage.setItem("user", JSON.stringify(res.data.user)); // Update local storage
      setMessage(res.data.message);
      setTimeout(() => window.location.reload(), 1000); // Refresh to update Navbar
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-700">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Your Profile</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="text-xs text-gray-500 font-bold uppercase">Email (Read Only)</label>
          <input type="text" value={user?.email} disabled className="w-full p-2 bg-gray-100 border rounded cursor-not-allowed" />
        </div>
        <div>
          <label className="text-xs text-gray-500 font-bold uppercase">Full Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500 outline-none" 
          />
        </div>
        <button type="submit" className="w-full bg-green-700 text-white py-2 rounded-lg font-bold hover:bg-green-800 transition">
          Update Name
        </button>
        {message && <p className="text-center text-green-600 font-semibold">{message}</p>}
      </form>
    </div>
  );
}