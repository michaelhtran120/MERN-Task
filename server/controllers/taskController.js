// @route api/tasks
// @desc Retrieve all tasks
// @access Private
const getTasks = (req, res) => {
  res.status(200).json({ message: "Here are all the tasks" });
};

// @route api/tasks
// @desc Add a single tasks
// @access Private
const addTasks = (req, res) => {
  res.status(200).json({ message: "Just added a task" });
};

// @route api/tasks
// @desc Updating all task not allowed
// @access Private
const updateTasks = (req, res) => {
  res.status(403).json({ message: "Can't do PUT request" });
};

// @route api/tasks
// @desc Deleting all tasks - forbidden for now, but may enable.
// @access Private
const deleteTasks = (req, res) => {
  res.status(403).json({ message: "Can't delete or possibly only admin." });
};

// ID SPECIFIC ROUTES

// @route api/tasks/:id
// @desc Retrieve a single task by id
// @access Private
const getTaskId = (req, res) => {
  res.status(200).json({ message: `Here is task with id: ${req.params.id}` });
};

// @route api/tasks/:id
// @desc POST request not allowed.
// @access Private
const addTaskId = (req, res) => {
  res.status(403).json({ message: `POST request not allowed on id: ${req.params.id}` });
};

// @route api/tasks/:id
// @desc Updating a single task by id
// @access Private
const updateTaskId = (req, res) => {
  res.status(200).json({ message: `Updating task with id: ${req.params.id}` });
};

// @route api/tasks
// @desc Delete task by id
// @access Private
const deleteTaskId = (req, res) => {
  res.status(200).json({ message: `Deleting task with id: ${req.params.id}` });
};

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
