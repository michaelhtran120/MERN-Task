const asyncHandler = require("express-async-handler");
const Task = require("../models/task");
const User = require("../models/user");

// @route api/tasks
// @desc Retrieve all tasks
// @access Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.status(200).json(tasks);
});

// @route api/tasks
// @desc Add a single tasks
// @access Private
const addTasks = asyncHandler(async (req, res, next) => {
  if (!req.body.title) {
    res.statusCode = 400;
    return next(new Error("Missing title"));
  } else {
    const newTask = {
      title: req.body.title,
      description: req.body.description,
      user: req.user.id,
    };
    const task = await Task.create(newTask);
    res.status(201).json(task);
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
const getTaskById = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  const user = await User.findById(req.user.id);

  if (!task) {
    res.status(400);
    return next(new Error("Task not found"));
  } 
  if (task.user.toString() !== req.user.id) {
    res.status(403);
    return next(new Error("Task does not belong to this user"));
  }
  res.status(200).json(task);
});

// @route api/tasks/:id
// @desc POST request not allowed.
// @access Private
const addTaskById = (req, res) => {
  res.status(405).json({ message: `POST request not allowed on id: ${req.params.id}` });
};

// @route api/tasks/:id
// @desc Updating a single task by id
// @access Private
const updateTaskById = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  const user = await User.findById(req.user.id);

  if (!task) {
    res.status(400);
    return next(new Error("Task not found"));
  }
  if (!user) {
    res.status(401);
    return next(new Error("User does not exist"));
  }
  if (task.user.toString() !== user.id) {
    res.status(403);
    return next(new Error("Task does not belong to this user"));
  }
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedTask);
});

// @route api/tasks
// @desc Delete task by id
// @access Private
const deleteTaskById = asyncHandler(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  const user = await User.findById(req.user.id);

  if (!task) {
    res.status(400);
    return next(new Error("Task not found"));
  }
  if (!user) {
    res.status(401);
    return next(new Error("User does not exist"));
  }
  if (task.user.toString() !== user.id) {
    res.status(403);
    return next(new Error("Task does not belong to this user"));
  }

  const deletedTask = await Task.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedTask);
});

module.exports = {
  getTasks,
  addTasks,
  updateTasks,
  deleteTasks,
  getTaskById,
  addTaskById,
  updateTaskById,
  deleteTaskById,
};
