const {
  registerUserService,
  loginUserService,
  getMeService,
} = require("../services/userServices");

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUserController = async (req, res) => {
  try {
    const data = { ...req.body };
    const loginUser = await loginUserService(data);
    res.status(loginUser.statusCode).send(loginUser.message);
  } catch (error) {
    console.log(error);
  }
};

// @desc Register new user
// @route POST /api/users
// @access Public
const registerUserController = async (req, res) => {
  try {
    const data = { ...req.body };
    const user = await registerUserService(data);

    res.status(user.statusCode).send(user.message);
  } catch (error) {
    console.log(error);
  }
};

// @desc Get user data
// @route POST /api/users/me
// @access Private
const getMeController = async (req, res) => {
  try {
    const getMe = await getMeService(req.user.id);
    res.status(getMe.statusCode).send(getMe.message);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  registerUserController,
  loginUserController,
  getMeController,
};
