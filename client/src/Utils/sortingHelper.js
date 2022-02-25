export const sortByUpdated = (tasks) => {
  const sortedTasks = [...tasks];
  sortedTasks.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
  return sortedTasks;
};

export const sortByCreated = (tasks) => {
  const sortedTasks = [...tasks];
  sortedTasks.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  return sortedTasks;
};

export const sortByDueDateAsc = (tasks) => {
  const sortedTasks = [...tasks];
  sortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  return sortedTasks;
};
