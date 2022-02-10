const e = require("express");
const asyncHandler = require("express-async-handler");
const Task = require("../models/task");

// @route api/tasks
// @desc Retrieve all tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

// @route api/tasks
// @desc Add a single tasks
// @access Private
const addTasks = asyncHandler(async (req, res, next) => {
  if (!req.body.title) {
    res.statusCode = 400;
    next(new Error("Missing title"));
  } else {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  }
});

// @route api/tasks
// @desc Updating all task not allowed
// @access Private
const updateTasks = (req, res) => {
  res.status(405).json({ message: "Can't do PUT request" });
};

// @route api/tasks
// @desc Deleting all tasks - forbidden for now, but may enable.
// @access Private
const deleteTasks = (req, res) => {
  res.status(405).json({ message: "Can't delete or possibly only admin." });
};

// ID SPECIFIC ROUTES

// @route api/tasks/:id
// @desc Retrieve a single task by id
// @access Private
const getTaskId = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    next(new Error("Task does not exist"));
  } else {
    res.status(200).json(task);
  }
});

// @route api/tasks/:id
// @desc POST request not allowed.
// @access Private
const addTaskId = (req, res) => {
  res.status(405).json({ message: `POST request not allowed on id: ${req.params.id}` });
};

// @route api/tasks/:id
// @desc Updating a single task by id
// @access Private
const updateTaskId = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    next(new Error("Task not found"));
  } else {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTask);
  }
});

// @route api/tasks
// @desc Delete task by id
// @access Private
const deleteTaskId = asyncHandler(async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    res.status(400);
    next(new Error("task does not exist"));
  } else {
    res.status(200).json(task);
  }
});

module.exports = {
  getTasks,
  addTasks,
  updateTasks,
  deleteTasks,
  getTaskId,
  addTaskId,
  updateTaskId,
  deleteTaskId,
};
