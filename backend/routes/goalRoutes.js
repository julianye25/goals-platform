const express = require("express");
const router = express.Router();
const {
  getGoalController,
  createGoalController,
  updateGoalController,
  deleteGoalController,
} = require("../controllers/goalConroller");

router.route("/").get(getGoalController).post(createGoalController);
router.route("/:id").put(updateGoalController).delete(deleteGoalController);

module.exports = router;
