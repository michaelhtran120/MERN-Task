// React & Library Imports
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Component Imports
import TaskForm from "../../components/Forms/TaskForm/TaskForm";
import { MemoizedTask } from "../../components/Task/Task";

// Redux Imports
import { getTask, sortByCreatedDate, sortByUpdatedDate } from "../../redux/slices/taskSlice";

// Style Imports
import styles from "./Dashboard.module.css";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const { tasks, isLoading, errorMessage } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  const { firstName, lastName } = user;

  const renderTasks = (taskArr) => {
    if (taskArr.length === 0) {
      return <h4>You currently have no tasks. Please fill out the above form</h4>;
    }
    return taskArr.map((task) => {
      if (task) {
        return <MemoizedTask key={task._id} taskData={task} />;
      }
    });
  };

  return (
    <section className={styles.dashboard}>
      <h1>
        Welcome {firstName} {lastName}!
      </h1>
      <h4>Below are your tasks. Add a new task, change existing task or delete!</h4>
      <div>
        <TaskForm />
        <button onClick={() => dispatch(sortByCreatedDate())}>Sort by created date</button>
        <button onClick={() => dispatch(sortByUpdatedDate())}>Sort by updated date</button>
        {isLoading ? <p>Loading...</p> : renderTasks(tasks)}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </section>
  );
}

export default Dashboard;
