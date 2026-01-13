const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getPreferences,
  putPreferences,
} = require("../controllers/register.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.post("/signup", registerUser);
router.post("/login", loginUser);

router.get("/preferences", authMiddleware, getPreferences);
router.put("/preferences", authMiddleware, putPreferences);

module.exports = router;
