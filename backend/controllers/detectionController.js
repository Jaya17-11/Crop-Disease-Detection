export const detectDisease = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No image uploaded" });

    // Mock detection (replace with ML model later)
    const diseases = ["Healthy Leaf", "Powdery Mildew", "Leaf Spot", "Rust"];
    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];

    res.json({ result: randomDisease });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
