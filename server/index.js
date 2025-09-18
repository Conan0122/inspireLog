const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(cors());
// app.use(express.json()); // Parse JSON data

// Test Route
app.get("/test", (req, res) => {
  res.send("Backend is running guys!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
