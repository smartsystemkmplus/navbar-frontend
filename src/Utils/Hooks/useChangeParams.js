import { useContext, useState } from "react";
import FilterContext from "../Context/FilterContext";

function useChangeParams() {
  const { apiParams, setApiParams } = useContext(FilterContext);

  const [params, setParams] = useState([]);

  const updateParams = {
    ...apiParams,
    priceUp: null,
    priceDown: 300000,
  };

  setApiParams(updateParams);

  return [setParams];
}

export default useChangeParams;
