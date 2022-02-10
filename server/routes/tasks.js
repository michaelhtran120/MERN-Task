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
  .get(authenticateMiddleware, taskController.getTaskId)
  .post(taskController.addTaskId)
  .put(authenticateMiddleware, taskController.updateTaskId)
  .delete(authenticateMiddleware, taskController.deleteTaskId);

module.exports = taskRouter;
