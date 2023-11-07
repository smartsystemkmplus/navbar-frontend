import NiceModal from "@ebay/nice-modal-react";

export default function showErrorDialog(err, duration = 3000) {
  NiceModal.show("error-handling-dialog", { err });
  setTimeout(() => {
    NiceModal.hide("error-handling-dialog");
    setTimeout(() => {
      NiceModal.remove("error-handling-dialog");
    }, 500);
  }, duration || 3000);
}
