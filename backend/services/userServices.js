const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const getMeService = async (id) => {
  try {
    const { _id, name, email } = await User.findById(id);

    return {
      statusCode: 200,
      message: {
        id: _id,
        name,
        email,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const loginUserService = async (data) => {
  try {
    const { email, password } = data;

    if (!email || !password) {
      return {
        statusCode: 500,
        message: "error",
      };
    }
    const user = await User.findOne({ email });

    if (!user) {
      return {
        statusCode: 500,
        message: "error",
      };
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      return {
        statusCode: 200,
        message: {
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        },
      };
    } else {
      return {
        statusCode: 404,
        message: "invalid credencials",
      };
    }
  } catch (error) {
    console.log(error);
  }
};

const registerUserService = async (data) => {
  try {
    const { name, email, password } = data;
    if (!name || !email || !password) {
      return {
        statusCode: 404,
        message: "data not found",
      };
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return {
        statusCode: 400,
        message: "user already exists",
      };
    } else {
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const createUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      return {
        statusCode: 201,
        message: {
          _id: createUser.id,
          name: createUser.name,
          email: createUser.email,
          token: generateToken(createUser._id),
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

// generate jwt
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRESIN,
  });
};

module.exports = {
  loginUserService,
  registerUserService,
  getMeService,
};
