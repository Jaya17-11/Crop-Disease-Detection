import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">🌿 LeafLens</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/register">Register</Link>}
        {token && <Link to="/detect">Detect Disease</Link>}
        {token && (
          <button
            onClick={handleLogout}
            className="bg-white text-green-700 px-3 py-1 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
