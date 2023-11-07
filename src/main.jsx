import dayjs from "dayjs";
import "dayjs/locale/id";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Configs/Yup";
import "./index.css";

dayjs.locale("id");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
