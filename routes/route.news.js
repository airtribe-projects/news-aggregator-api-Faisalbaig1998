const express = require("express");
const router = express.Router();
const { fetchNews } = require("../controllers/news.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, fetchNews);

module.exports = router;
