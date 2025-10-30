import express from "express";
import multer from "multer";
import { detectDisease } from "../controllers/detectionController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), detectDisease);

export default router;
