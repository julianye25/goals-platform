const getGoalsService = async () => {
  try {
    let goals = [1, 2, 3];

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

    return {
      statusCode: 201,
      message: text,
    };
  } catch (error) {
    console.log(error);
  }
};

const updateGoalService = async (id, text) => {
  try {
    if (!id || !text) {
      return {
        statusCode: 500,
        message: "Verificar informacion",
      };
    }
    return {
      statusCode: 200,
      message: text,
    };
  } catch (error) {
    console.log(error);
  }
};

const deleteGoalService = async (id) => {
  try {
    if (!id) {
      return {
        statusCode: 404,
        message: "Verificar informacion",
      };
    }

    return {
      statusCode: 200,
      message: "Borrado",
    };
  } catch (error) {}
};

module.exports = {
  getGoalsService,
  createGoalService,
  updateGoalService,
  deleteGoalService,
};
