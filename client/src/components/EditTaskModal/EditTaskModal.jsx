// React & Lib imports
import React from "react";
import Modal from "react-modal";

// Component imports
import EditTaskForm from "../Forms/EditTaskForm/EditTaskForm";

function EditTaskModal({ isModalOpen, taskData, handleCloseModal }) {
  return (
    <Modal isOpen={isModalOpen} >
      <EditTaskForm taskData={taskData} handleCloseModal={handleCloseModal} />
    </Modal>
  );
}

export default EditTaskModal;
