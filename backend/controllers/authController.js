import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // 🌟 CREATE THE ACTUAL TOKEN
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secret_key", { expiresIn: "1d" });

    res.json({ 
      message: "Login successful", 
      token, 
      user: { name: user.name, email: user.email } 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { email, name } = req.body; // We use email to find the user
    const updatedUser = await User.findOneAndUpdate(
      { email }, 
      { name }, 
      { new: true } // This returns the updated document
    );
    
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    
    res.json({ 
      message: "Profile updated successfully!", 
      user: { name: updatedUser.name, email: updatedUser.email } 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};