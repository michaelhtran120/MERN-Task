// React & Library Imports
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Component Imports
import TaskForm from "../../components/Forms/TaskForm/TaskForm";
import Task from "../../components/Task/Task";

// Redux Imports
import { getTask } from "../../redux/slices/taskSlice";

// Style Imports
import styles from "./Dashboard.module.css";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const { tasks, errorMessage } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  const { firstName, lastName } = user;

  // if (isLoading) {
  //   return <h1>Loading....</h1>;
  // }
  const renderTasks = (taskArr) => {
    if (taskArr.length === 0) {
      return <h4>You currently have no tasks. Please fill out the above form</h4>;
    }
    return taskArr.map((task) => {
      return <Task key={task._id} taskData={task} />;
    });
  };

  return (
    <section className={styles.dashboard}>
      <h1>
        Welcome {firstName} {lastName}!
      </h1>
      <h4>Below are your tasks, add, change, delete!</h4>
      <div>
        <TaskForm />
        {renderTasks(tasks)}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </section>
  );
}

export default Dashboard;
