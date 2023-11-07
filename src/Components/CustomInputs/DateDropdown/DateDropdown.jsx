/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";

import Weekly from "./Weekly";
import ComponentDropdown from "../CustomInputs/ComponentDropdown";
import Monthly from "./Monthly";
import Quaterly from "./Quaterly";
import Yearly from "./Yearly";

export default function DateDropdown({
  data = { label: "Weekly", dates: [new Date(), new Date()] },
  setData,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ComponentDropdown
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      value={data.label}
    >
      <Weekly data={data} setData={setData} />
      <Monthly data={data} setData={setData} />
      <Quaterly data={data} setData={setData} />
      <Yearly data={data} setData={setData} />
    </ComponentDropdown>
  );
}
