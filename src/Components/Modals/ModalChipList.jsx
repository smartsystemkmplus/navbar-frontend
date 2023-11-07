import NiceModal, { useModal } from "@ebay/nice-modal-react";
import closeNiceModal from "../../Utils/Helpers/closeNiceModal";
import Badge from "../Badge";
import NoItems from "../Errors/NoItems";
import SectionModalTemplate from "./Templates/SectionModal";
import MODAL_IDS from "./modalIds";

/**
 * @param {string} title
 * @param {array} data - array of string
 */
const ModalChipList = NiceModal.create(({ title, data }) => {
  const modalId = MODAL_IDS.GENERAL.CHIP_LIST;
  const modal = useModal(modalId);

  return (
    <SectionModalTemplate
      title={title}
      isOpen={modal.visible}
      withCloseButton
      handleClose={() => closeNiceModal(modalId)}
      withFooter={false}
      classNames={{
        modal: "max-w-[75vw]",
      }}
    >
      <div className="flex flex-col gap-5 p-5">
        {(() => {
          if (data?.length) {
            return (
              <div className="flex flex-wrap gap-3">
                {data?.map((item) => (
                  <Badge value={item} variant="primary-border" />
                ))}
              </div>
            );
          }
          return <NoItems />;
        })()}
      </div>
    </SectionModalTemplate>
  );
});

export default ModalChipList;
