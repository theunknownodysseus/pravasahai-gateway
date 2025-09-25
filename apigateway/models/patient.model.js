const mongoose = require("mongoose");

// Define the schema exactly as your existing data
const PatientSchema = new mongoose.Schema({
  patient_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  age: Number,
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  district: String,
  is_migrant: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
});

// Force the model to use the exact collection name from Atlas
// Replace "patients" with your collection name if it’s different (case-sensitive)
module.exports = mongoose.model("Patient", PatientSchema, "patients");
