const express = require("express");
const router = express.Router();
const Patient = require("../models/patient.model");

// CREATE a patient
router.post("/", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all patients
router.get("/", async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// READ single patient by patient_id
router.get("/:patient_id", async (req, res) => {
  const patient = await Patient.findOne({ patient_id: req.params.patient_id });
  if (!patient) return res.status(404).json({ error: "Patient not found" });
  res.json(patient);
});

// UPDATE patient by patient_id
router.put("/:patient_id", async (req, res) => {
  try {
    const patient = await Patient.findOneAndUpdate(
      { patient_id: req.params.patient_id },
      req.body,
      { new: true }
    );
    if (!patient) return res.status(404).json({ error: "Patient not found" });
    res.json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE patient by patient_id
router.delete("/:patient_id", async (req, res) => {
  const patient = await Patient.findOneAndDelete({ patient_id: req.params.patient_id });
  if (!patient) return res.status(404).json({ error: "Patient not found" });
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
