import { useCallback, useState } from "react";

export default function useHandleTableItemSelect(
  data = [],
  identifier = "id",
) {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = useCallback(
    (e) => {
      const { checked } = e.target;
      if (!checked && selectedItems.length > 0) {
        setSelectedItems([]);
      } else {
        setSelectedItems(data.map((item) => item?.[identifier]));
      }
    },
    [selectedItems, data],
  );

  const handleChangeCheckbox = useCallback(
    (id) => {
      if (selectedItems.includes(id)) {
        setSelectedItems(selectedItems.filter((item) => item !== id));
      } else {
        setSelectedItems([...selectedItems, id]);
      }
    },
    [selectedItems],
  );

  return { selectedItems, handleSelectAll, handleChangeCheckbox };
}
