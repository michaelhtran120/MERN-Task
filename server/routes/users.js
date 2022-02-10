const express = require("express");
const userController = require("../controllers/userController");
const authenticateMiddleware = require("../middleware/authenticateMiddleware");

const userRouter = express.Router();

userRouter.post("/signup", userController.signupUser);
userRouter.post("/login", userController.loginUser);
userRouter.get("/me", authenticateMiddleware, userController.getUser);

module.exports = userRouter;
