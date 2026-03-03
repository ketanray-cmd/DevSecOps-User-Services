const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json({ message: "User route working" });
});

module.exports = router;
