const express = require("express");
const router = express.Router();
const {
  getGoalController,
  createGoalController,
  updateGoalController,
  deleteGoalController,
} = require("../controllers/goalConroller");

const { protect } = require("../middlewares/authMiddleware");

router
  .route("/")
  .get(protect, getGoalController)
  .post(protect, createGoalController);
router
  .route("/:id")
  .delete(protect, deleteGoalController)
  .put(protect, updateGoalController);

module.exports = router;
