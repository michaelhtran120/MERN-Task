// React & Lib imports
import React from "react";
import Modal from "react-modal";

// Component imports
import EditTaskForm from "../../Forms/EditTaskForm/EditTaskForm";

// Style imports
import styles from "./EditTaskModal.module.css";

function EditTaskModal({ isModalOpen, taskData, handleCloseModal }) {
  return (
    <Modal isOpen={isModalOpen} className={styles.edit_task_modal} overlayClassName={styles.modal_overlay}>
      <EditTaskForm taskData={taskData} handleCloseModal={handleCloseModal} />
    </Modal>
  );
}

export default EditTaskModal;
