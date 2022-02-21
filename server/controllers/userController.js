// Library import
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

// Model import
const User = require("../models/user");

// NOT A ROUTE - function to generate JWT for users.
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @route /api/users/signup
// @desc  Sign up new users
// @access Public
const signupUser = asyncHandler(async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  // Check if all fields have been provided
  if (!email || !password || !firstName || !lastName) {
    res.status(400);
    return next(new Error("Missing fields"));
  }
  // Check if email is used, if true, throw error.
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    return next(new Error("Email is already used"));
  }

  // Hash/Salt password
  const salt = await bcrypt.genSalt(10);
  const hashedPW = await bcrypt.hash(password, salt);

  // Create new user
  const newUser = await User.create({
    email,
    password: hashedPW,
    firstName,
    lastName,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      message: "Sign up successful",
      token: generateToken(newUser.id),
    });
  } else {
    res.status(400);
    return next(new Error("Invalid user data"));
  }
});

// @route /api/users/login
// @desc  Log in users
// @access Public
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    return next(new Error("Missing fields"));
  }
  // Check for user via email
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    return next(new Error("User does not exist"));
  }

  // If user exist, check/compare hash password with req.body password.
  if (user && (await bcrypt.compare(password, user.password))) {
    console.log("id:", user.id);
    console.log("_id:", user._id);
    res.status(200).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      message: "Log in successful",
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    return next(new Error("Invalid password"));
  }
});

// @route /api/users/me
// @desc Get user data
// @access Public
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    id: req.user._id,
    email: req.user.email,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
  });
});



module.exports = {
  signupUser,
  loginUser,
  getUser,
};
