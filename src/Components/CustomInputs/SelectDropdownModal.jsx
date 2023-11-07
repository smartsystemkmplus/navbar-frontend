/* eslint-disable react/prop-types */
import NiceModal from "@ebay/nice-modal-react";
import { Button } from "@mantine/core";
import { useState } from "react";
import closeNiceModal from "../../Utils/Helpers/closeNiceModal";
import SectionModalTemplate from "../Modals/Templates/SectionModal";
import MODAL_IDS from "../Modals/modalIds";
import CustomMantineSelect from "./CustomMantineSelect";

const SelectDropdownModal = NiceModal.create(
  ({
    title,
    inputLabel,
    inputPlaceholder,
    data,
    onAdd,
    onSearchChange,
    value,
    searchValue,
    isLoading = false,
    isFetching = false,
    multiple = false,
  }) => {
    const modalId = MODAL_IDS.GENERAL.SELECT_DROPDOWN;
    const modal = NiceModal.useModal(modalId);

    const [tempValue, setTempValue] = useState(
      value || (multiple ? [] : null),
    );

    const handleSubmitValue = () => {
      onAdd(tempValue);
      closeNiceModal(modalId);
    };

    const handleChangeTempValue = (newValue) => {
      setTempValue(newValue);
    };

    return (
      <SectionModalTemplate
        isOpen={modal.visible}
        handleClose={() => closeNiceModal(modalId)}
        title={title}
        withCloseButton
        withFooter
        footerElement={
          <>
            <Button
              variant="outline"
              onClick={() => closeNiceModal(modalId)}
            >
              Batalkan
            </Button>
            <Button onClick={handleSubmitValue}>Tambah</Button>
          </>
        }
      >
        <div className="p-5 h-[400px] overflow-y-auto scroll-style-2">
          <CustomMantineSelect
            renderValueOutside
            multiple={multiple}
            searchLoading={isLoading} // state when loading first time
            searchFetching={isFetching} // state when fetching next page (currently unused)
            value={tempValue}
            onChange={handleChangeTempValue}
            data={data}
            label={inputLabel}
            placeholder={inputPlaceholder}
            size="md"
            searchable
            searchValue={searchValue}
            onSearchChange={onSearchChange}
            classNames={{
              label: "text-primary3 font-medium mb-1 text-base",
            }}
          />
        </div>
      </SectionModalTemplate>
    );
  },
);
export default SelectDropdownModal;
