import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Icon } from "@iconify/react";
import { Dialog } from "@mantine/core";
import { color } from "../../Utils/Constants";

const SuccessHandling = NiceModal.create(({ message, title }) => {
  const modal = useModal("success-handling-dialog");

  return (
    <Dialog
      opened={modal.visible}
      withCloseButton
      onClose={modal.hide}
      position={{ bottom: 20, left: 75 }}
      transition="slide-up"
      transitionDuration={250}
      classNames={{
        root: "flex items-center gap-4 border-l-green border-l-4",
        closeButton: "my-1",
      }}
    >
      <Icon
        icon="akar-icons:circle-check-fill"
        color={color.green}
        width={35}
      />
      <div className="flex flex-col">
        <span className="font-semibold text-base">
          {title || "Berhasil"}
        </span>
        <span className="text-sm mr-5">{message}</span>
      </div>
    </Dialog>
  );
});

export default SuccessHandling;
