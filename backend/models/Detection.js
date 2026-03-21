import mongoose from "mongoose";

const detectionSchema = new mongoose.Schema({
    diseaseName: { type: String, required: true },
    confidence: { type: String, required: true },
    status: { type: String, default: "Success" },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Detection", detectionSchema);