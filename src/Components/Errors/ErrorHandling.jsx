import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Icon } from "@iconify/react";
import { Dialog } from "@mantine/core";

const ErrorHandling = NiceModal.create(({ err }) => {
  const modal = useModal();

  return (
    <Dialog
      opened={modal.visible}
      withCloseButton
      onClose={modal.hide}
      position={{ bottom: 20, left: 75 }}
      transition="slide-up"
      transitionDuration={250}
      classNames={{
        root: "flex items-center gap-4",
        closeButton: "my-1",
      }}
    >
      <Icon icon="bx:error-circle" color="red" />
      <div className="flex flex-col">
        {/* <span className="text-sm mr-5 text-red-600">
          {`${
          err?.response?.status
            ? `Error code: ${err?.response?.status}`
            : ""
        } ${err?.response?.statusText || ""}`}</span> */}
        <span className="text-sm mr-5 text-red-600">
          {err?.response?.data?.message?.split("\n")?.map((e) => (
            <>
              {e}
              <br />
            </>
          ))}
        </span>
      </div>
    </Dialog>
  );
});

export default ErrorHandling;
