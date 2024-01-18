

function Modal(props) {

    let modalClass = "";

    return (
        modal
    )

}

Modal.defaultProps = {
  title: "Are you sure?",
  description: "",
  showCancelButton: false,
  showConfirmButton: false,
  confirmButtonColor: "bg-red-500",
  cancelButtonColor: "bg-sky-500",
  confirmButtonText: "Delete",
  cancelButtonText: "Cancel",
  visible: false,
};


export default Modal;