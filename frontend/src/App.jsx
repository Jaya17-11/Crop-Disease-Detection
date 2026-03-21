import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detection from "./pages/Detection";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile"; //
import About from './pages/About'; 

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/detect"
          element={
            <ProtectedRoute>
              <Detection />
            </ProtectedRoute>
          }
        />

        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

      </Routes>
    </Router>
  );
}
