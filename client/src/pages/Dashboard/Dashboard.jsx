import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskForm from "../../components/Forms/TaskForm/TaskForm";
import { getTask, deleteTask } from "../../redux/slices/taskSlice";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, errorMessage } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
    console.log(tasks);
  }, [user, tasks]);

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  const { firstName, lastName } = user;

  // if (isLoading) {
  //   return <h1>Loading....</h1>;
  // }
  const renderTasks = (taskArr) => {

    const handleDelete = (id) => {
      console.log("deleting");
      dispatch(deleteTask(id));
    };

    if (taskArr.length === 0) {
      return <h3>You currently have no tasks.</h3>;
    }
    return taskArr.map((task) => {
      return (
        <div key={task._id}>
          <p>{task.title}</p>
          <p>{task.description}</p>
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <div>
        TASKSSS
        <TaskForm />
        {renderTasks(tasks)}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Dashboard;
