# LeafLens – Crop Disease Detection System 🌿

**LeafLens** is a full-stack web application built using the **MERN stack** (MongoDB, Express, React, Node.js). It provides a digital platform for farmers and researchers to monitor crop health by uploading leaf images, receiving simulated diagnostic results, and maintaining a secure historical record of plant health trends.

---

## 🚀 Key Features

* **User Authentication:** Secure Sign-up and Login system powered by **JSON Web Tokens (JWT)** and **Bcrypt** for password encryption.
* **Image Upload Pipeline:** Integrated **Multer** middleware for efficient handling and server-side storage of crop images.
* **Diagnostic Simulation:** A backend "Mock AI" engine that analyzes uploads and returns randomized disease classifications (e.g., Rust, Powdery Mildew, Healthy) with high-confidence scores to demonstrate system readiness for real ML integration.
* **Historical Dashboard:** A personalized user area to track and manage past diagnostic records fetched from **MongoDB Atlas**.
* **Responsive UI:** A modern, mobile-first interface developed with **React.js** and **Tailwind CSS**, optimized for field use.

---

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **MongoDB Atlas** | Cloud NoSQL Database for storing user profiles and detection logs. |
| **Express.js** | Backend web framework for building RESTful API endpoints. |
| **React.js** | Frontend library for creating a dynamic, single-page user interface. |
| **Node.js** | JavaScript runtime for handling server-side logic and file systems. |
| **Tailwind CSS** | Utility-first CSS framework for responsive and modern styling. |

---

## 📂 Project Structure

```text
/LeafLens
├── backend/                # Node.js & Express Server
│   ├── config/             # Database connection (Mongoose)
│   ├── controllers/        # Auth logic & Randomized Detection logic
│   ├── models/             # Mongoose Schemas (User.js, Detection.js)
│   ├── middleware/         # JWT Verification & Multer configuration
│   ├── uploads/            # Local directory for stored leaf images
│   └── server.js           # Server entry point
├── frontend/               # React Client
│   ├── src/components/     # Reusable UI components (Navbar, UploadCard)
│   ├── src/pages/          # Login, Register, Dashboard, History
│   └── App.js              # Client-side routing and state
└── README.md
