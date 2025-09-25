require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const patientRoutes = require("./routes/patient.routes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/patients", patientRoutes);

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("MongoDB connection error:", err));
