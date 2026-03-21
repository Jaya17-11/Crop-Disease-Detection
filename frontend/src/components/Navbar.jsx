import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); // Get user info

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>🌿 LeafLens</h1>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-green-200">Home</Link>
        
        {!token && <Link to="/login" className="hover:text-green-200">Login</Link>}
        {!token && <Link to="/register" className="hover:text-green-200">Register</Link>}
        
        {token && (
          <>
            <Link to="/detect" className="hover:text-green-200">Detect</Link>
            {/* 🌟 ADD PROFILE LINK HERE */}
            <Link to="/profile" className="hover:text-green-200 font-semibold bg-green-800 px-3 py-1 rounded">
              👤 {user?.name || "Profile"}
            </Link>
            <button
              onClick={handleLogout}
              className="bg-white text-green-700 px-3 py-1 rounded font-bold hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}