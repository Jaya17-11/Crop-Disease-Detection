import Detection from "../models/Detection.js";

export const detectDisease = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No image uploaded" });
        }

        // Broad list of diseases across different crops
        const diseasePool = [
            "Tomato: Bacterial Spot", "Tomato: Early Blight", "Tomato: Healthy",
            "Potato: Late Blight", "Potato: Early Blight", "Potato: Healthy",
            "Corn: Common Rust", "Corn: Gray Leaf Spot",
            "Rice: Leaf Blast", "Rice: Brown Spot",
            "Grape: Black Rot", "Apple: Scab"
        ];

        // 1. Random Selection
        const randomResult = diseasePool[Math.floor(Math.random() * diseasePool.length)];
        
        // 2. Random Confidence (89% - 99%)
        const randomConf = (Math.random() * (99 - 89) + 89).toFixed(2) + "%";

        // 3. Save to History (MongoDB)
        const newDetection = new Detection({
            diseaseName: randomResult,
            confidence: randomConf,
            status: "Success"
        });
        await newDetection.save();

        // 4. Send back to Frontend
        res.status(200).json({
            prediction: randomResult,
            confidence: randomConf,
            status: "success"
        });

    } catch (error) {
        res.status(500).json({ message: "Detection Error", error: error.message });
    }
};

// Function for the History Page
export const getHistory = async (req, res) => {
    try {
        const history = await Detection.find().sort({ createdAt: -1 });
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: "History Error" });
    }
};