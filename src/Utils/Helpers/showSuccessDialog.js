import NiceModal from "@ebay/nice-modal-react";

export default function showSuccessDialog(message, title) {
  NiceModal.show("success-handling-dialog", { message, title });
  setTimeout(() => {
    NiceModal.hide("success-handling-dialog");
    setTimeout(() => {
      NiceModal.remove("success-handling-dialog");
    }, 500);
  }, 3000);
}
