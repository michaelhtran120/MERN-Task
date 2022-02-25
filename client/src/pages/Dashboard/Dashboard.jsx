// React & Library Imports
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Component Imports
import TaskForm from "../../components/Forms/AddTaskForm/TaskForm";
import { renderTasks } from "../../components/Task/Task";

// Redux Imports
import { getTask, sortByDueDateAscAction, sortByDueDateDescAction } from "../../redux/slices/taskSlice";

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

  return (
    <section className={styles.dashboard}>
      <h1>
        Welcome {firstName} {lastName}!
      </h1>
      <h4>Below are your tasks. Add a new task, change existing task or delete!</h4>
      <div>
        <TaskForm />
        <div className={styles.button_container}>
          <button className="primary" onClick={() => dispatch(sortByDueDateAscAction())}>
            Sort by due date (Ascending)
          </button>
          <button className="primary" onClick={() => dispatch(sortByDueDateDescAction())}>
            Sort by due date (Descending)
          </button>
        </div>
        {isLoading ? null : renderTasks(tasks)}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </section>
  );
}

export default Dashboard;
