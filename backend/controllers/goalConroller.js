const {
  createGoalService,
  getGoalsService,
  updateGoalService,
  deleteGoalService,
} = require("../services/goalServices");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoalController = async (req, res) => {
  const getGoals = await getGoalsService();
  try {
    res.status(getGoals.statusCode).json(getGoals.message);
  } catch (error) {
    console.log(error);
  }
};

// @desc Create goal
// @route POST /api/goals
// @access Private
const createGoalController = async (req, res) => {
  try {
    const createGoal = await createGoalService(req.body.text);

    console.log(createGoal);

    res.status(createGoal.statusCode).json(createGoal.message);
  } catch (error) {
    console.log(error);
  }
};

// @desc Update a goal
// @route Put /api/goals/:id
// @access Private
const updateGoalController = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
    const updateGoal = await updateGoalService(id, text);

    res.status(updateGoal.statusCode).send(updateGoal);
  } catch (error) {
    console.log(error);
  }
};

// @desc Delete a goal
// @route Delete /api/goals/:id
// @access Private
const deleteGoalController = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteGoal = await deleteGoalService(id);

    res.status(deleteGoal.statusCode).json(deleteGoal.message);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getGoalController,
  createGoalController,
  updateGoalController,
  deleteGoalController,
};
