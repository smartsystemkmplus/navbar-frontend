import { useState } from "react";

export default function useObjectState(initialState) {
  const [state, setState] = useState(initialState);
  const handleChange = (name, value) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };
  return [state, handleChange];
}
