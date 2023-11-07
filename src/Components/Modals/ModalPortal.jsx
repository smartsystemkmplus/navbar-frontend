import { ModalDef } from "@ebay/nice-modal-react";
import SelectDropdownModal from "../CustomInputs/SelectDropdownModal";
import ErrorHandling from "../Errors/ErrorHandling";
import SuccessHandling from "../Errors/SuccessHandling";
import Confirmations from "./Confirmations";
import ModalChipList from "./ModalChipList";
import MODAL_IDS from "./modalIds";

export default function ModalPortal() {
  return (
    <>
      {/* General */}
      <ModalDef
        id="error-handling-dialog"
        component={ErrorHandling}
      />
      <ModalDef
        id="success-handling-dialog"
        component={SuccessHandling}
      />
      <ModalDef
        id={MODAL_IDS.GENERAL.CONFIRMATION}
        component={Confirmations}
      />
      <ModalDef
        id={MODAL_IDS.GENERAL.SELECT_DROPDOWN}
        component={SelectDropdownModal}
      />
      <ModalDef
        id={MODAL_IDS.GENERAL.CHIP_LIST}
        component={ModalChipList}
      />
    </>
  );
}
