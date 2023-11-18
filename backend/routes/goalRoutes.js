const express = require("express");
const router = express.Router();
const {
  getGoalController,
  createGoalController,
  updateGoalController,
  deleteGoalController,
} = require("../controllers/goalConroller");

router.route("/").get(getGoalController).post(createGoalController);
router.route("/:id").delete(deleteGoalController).put(updateGoalController);

module.exports = router;
