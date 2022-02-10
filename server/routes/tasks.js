const express = require("express");

const taskRouter = express.Router();

const taskController = require("../controllers/taskController");

//prettier-ignore
taskRouter
  .route("/")
  .get(taskController.getTasks)
  .post(taskController.addTasks)
  .put(taskController.updateTasks)
  .delete(taskController.deleteTasks);

taskRouter
  .route("/:id")
  .get(taskController.getTaskId)
  .post(taskController.addTaskId)
  .put(taskController.updateTaskId)
  .delete(taskController.deleteTaskId);

module.exports = taskRouter;
