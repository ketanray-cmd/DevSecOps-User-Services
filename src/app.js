const express = require("express");
const config = require("./config/env");
const connectDB = require("./config/database");

const app = express();

app.use(express.json());

connectDB();

const mongoose = require("mongoose");

app.get("/health", (req, res) => {
  const dbStatus =
    mongoose.connection.readyState === 1 ? "UP" : "DOWN";

  res.json({
    status: "OK",
    database: dbStatus,
  });
});

const PORT = config.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});