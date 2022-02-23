// Library imports
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Component Imports
import EditTaskForm from "../Forms/EditTaskForm/EditTaskForm";

const MySwal = withReactContent(Swal);

export const Modal = (taskData) => {
  return MySwal.fire({
    html: <EditTaskForm taskData={taskData} />,
    width: "40em",
    confirmButtonText: "Save",
    confirmButtonColor: "#34515e",
    confirmButtonAriaLabel: "Save",
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("save changes");
    }
  })
}