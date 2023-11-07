import { useContext } from "react";
import FilterContext from "../Context/FilterContext";

export default function ChangeApiParams(parameter) {
  const { apiParams, setApiParams } = useContext(FilterContext);

  const updateParams = {
    ...apiParams,
    ...parameter,
  };

  setApiParams(updateParams);
}
