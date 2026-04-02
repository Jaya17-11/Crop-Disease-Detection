import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import detectionRoutes from "./routes/detectionRoutes.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
// Replace the origin with your actual Vercel URL once deployed
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

// Health Check Route (To verify the server is live in browser)
app.get("/", (req, res) => {
    res.send("LeafLens API is running successfully!");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/detect", detectionRoutes);

// Database Connection
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Stop the server if DB fails
  });

// Port Configuration for Render
const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on port ${PORT}`);
});