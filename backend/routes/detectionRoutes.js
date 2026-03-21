import express from "express";
import multer from "multer";
import { detectDisease, getHistory } from "../controllers/detectionController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// POST: http://localhost:8080/api/detect
router.post("/", upload.single("image"), detectDisease);

// GET: http://localhost:8080/api/detect/history
router.get("/history", getHistory);

export default router;