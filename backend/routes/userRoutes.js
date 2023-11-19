const express = require("express");
const {
  registerUserController,
  loginUserController,
  getMeController,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", registerUserController);
router.post("/login", loginUserController);
router.get("/me", protect, getMeController);

module.exports = router;
