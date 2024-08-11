const express = require("express");
const router = express.Router();

const emailRoutes = require("./emailRoutes");
const authRoutes = require("./authRoutes");
const telegramRoutes = require("./telegramRoutes");

router.use("/auth", authRoutes);
router.use("/email", emailRoutes);

module.exports = router;
