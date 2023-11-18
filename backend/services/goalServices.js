const Goal = require("../models/goalModel");

const getGoalsService = async () => {
  try {
    const goals = await Goal.find();

    if (goals.length === 0) {
      return {
        statusCode: 404,
        message: "empty goals",
      };
    }

    return {
      statusCode: 200,
      message: goals,
    };
  } catch (error) {
    console.log(error);
  }
};

const createGoalService = async (text) => {
  try {
    if (!text) {
      return {
        statusCode: 404,
        message: "add a text field",
      };
    }

    const goal = await Goal.create({
      text,
    });

    return {
      statusCode: 201,
      message: goal,
    };
  } catch (error) {
    console.log(error);
  }
};

const updateGoalService = async (id, text) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return {
        statusCode: 500,
        message: "internal server error",
      };
    }

    if (!id || !text) {
      return {
        statusCode: 500,
        message: "Verificar informacion",
      };
    }

    const goal = await Goal.findById(id);

    if (!goal) {
      return {
        statusCode: 404,
        message: "not found",
      };
    }

    const updatedGoal = await Goal.findByIdAndUpdate(
      id,
      { text: text },
      { new: true }
    );

    return {
      statusCode: 200,
      message: updatedGoal,
    };
  } catch (error) {
    console.log(error);
  }
};

const deleteGoalService = async (id) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return {
        statusCode: 500,
        message: "internal server error",
      };
    }

    if (!id) {
      return {
        statusCode: 404,
        message: "Verificar informacion",
      };
    }

    const goal = await Goal.findById(id);

    if (!goal) {
      return {
        statusCode: 404,
        message: "Not found",
      };
    }

    const deleteGoal = await Goal.findOneAndDelete(goal._id);

    return {
      statusCode: 200,
      message: deleteGoal,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getGoalsService,
  createGoalService,
  updateGoalService,
  deleteGoalService,
};
