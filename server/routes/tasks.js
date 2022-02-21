const express = require("express");

const taskRouter = express.Router();
const authenticateMiddleware = require("../middleware/authenticateMiddleware");
const taskController = require("../controllers/taskController");

//prettier-ignore
taskRouter
  .route("/")
  .get(authenticateMiddleware, taskController.getTasks)
  .post(authenticateMiddleware, taskController.addTasks)
  .put(taskController.updateTasks)
  .delete(authenticateMiddleware, taskController.deleteTasks);

taskRouter
  .route("/:id")
  .get(authenticateMiddleware, taskController.getTaskById)
  .post(taskController.addTaskById)
  .put(authenticateMiddleware, taskController.updateTaskById)
  .delete(authenticateMiddleware, taskController.deleteTaskById);

module.exports = taskRouter;
