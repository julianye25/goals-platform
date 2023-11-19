const Goal = require("../models/goalModel");
const User = require("../models/userModel");

const getGoalsService = async (id) => {
  try {
    const goals = await Goal.find({ user: id });

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

const createGoalService = async (id, text) => {
  try {
    if (!text) {
      return {
        statusCode: 404,
        message: "add a text field",
      };
    }

    const goal = await Goal.create({
      text,
      user: id,
    });

    return {
      statusCode: 201,
      message: goal,
    };
  } catch (error) {
    console.log(error);
  }
};

const updateGoalService = async (userId, id, text) => {
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

    const user = await User.findById({ _id: userId });

    if (!user) {
      return {
        statusCode: 401,
        message: "User not found",
      };
    }

    if (goal.user.toString() !== user.id) {
      return {
        statusCode: 401,
        message: "User not authorized",
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

const deleteGoalService = async (userId, id) => {
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

    const user = await User.findById({ _id: userId });

    if (!user) {
      return {
        statusCode: 401,
        message: "User not found",
      };
    }

    if (goal.user.toString() !== user.id) {
      return {
        statusCode: 401,
        message: "User not authorized",
      };
    }

    const deleteGoal = await Goal.findOneAndDelete(goal._id);

    return {
      statusCode: 200,
      message: { id: deleteGoal._id },
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
