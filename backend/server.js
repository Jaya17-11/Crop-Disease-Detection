import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import detectionRoutes from "./routes/detectionRoutes.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/detect", detectionRoutes);


const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
