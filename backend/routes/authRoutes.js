import express from "express";
import { registerUser, loginUser, updateProfile } from "../controllers/authController.js";
import User from "../models/User.js"; // 🌟 Import User model for the GET route

const router = express.Router();

// 1. CREATE (POST) - User Registration
router.post("/register", registerUser);

// 2. READ (POST) - User Login 
// (We use POST for security, but it's a "Read" operation conceptually)
router.post("/login", loginUser);

// 3. UPDATE (PUT) - Edit User Profile
// This satisfies the "U" in CRUD
router.put("/update-profile", updateProfile);

/**
 * 4. READ (GET) - Platform Statistics
 * 🌟 This is the route you can check directly in your browser!
 * URL: http://localhost:5000/api/auth/stats
 */
router.get("/stats", async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    const activeUsers = await User.find({}, "name email -_id"); // Fetches names/emails

    res.json({
      success: true,
      totalUsers: userCount,
      usersList: activeUsers,
      serverStatus: "Online",
      lastUpdated: new Date().toLocaleString()
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;