// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoalController = (req, res) => {
  res.status(200).json({ message: "get goals from the controller" });
};

// @desc Create goal
// @route POST /api/goals
// @access Private
const createGoalController = (req, res) => {
  res.status(201).json({ message: "Create goal from controller" });
};

// @desc Update a goal
// @route Put /api/goals/:id
// @access Private
const updateGoalController = (req, res) => {
  res
    .status(200)
    .json({ message: `update a goal ${req.params.id} from controller` });
};

// @desc Delete a goal
// @route Delete /api/goals/:id
// @access Private
const deleteGoalController = (req, res) => {
  res
    .status(200)
    .json({ message: `delete a goal ${req.params.id} from controller` });
};

module.exports = {
  getGoalController,
  createGoalController,
  updateGoalController,
  deleteGoalController,
};
