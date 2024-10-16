import Swal from "sweetalert2";

const showSuccessDialog = (message) =>
  Swal.fire({
    icon: "success",
    title: "success",
    text: message,
    timer: 1500,
  });

const showErrorDialog = (message) =>
  Swal.fire({
    icon: "error",
    title: "Error",
    text: message,
    timer: 3000,
  });

const dialogs = {
  error: showErrorDialog,
  success: showSuccessDialog,
};

export { dialogs };
