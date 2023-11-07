/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { Input } from "@mantine/core";
import { useRef } from "react";
import { IconChevronDown } from "@tabler/icons";
import useOutsideAlerter from "../../Utils/Hooks/useOutsideAlerter";

export default function ComponentDropdown({
  isOpen,
  setIsOpen,
  value,
  children,
}) {
  const dropdownRef = useRef();
  useOutsideAlerter(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative cursor-pointer" ref={dropdownRef}>
      <div onClick={() => setIsOpen((old) => !old)}>
        <Input
          className="w-[12rem]"
          value={value}
          rightSection={<IconChevronDown size={14} stroke={1.5} />}
        />
      </div>

      {isOpen && (
        <div className="absolute top-10 border-1 bg-white z-10 pl-2  p-1 rounded-sm min-w-[12rem] ">
          {children}
        </div>
      )}
    </div>
  );
}
