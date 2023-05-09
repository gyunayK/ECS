import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "@/routes/AppRoute";
import "./index.css";
import AppProvider from "@/Redux/Store";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <ToastContainer autoClose={2000} hideProgressBar closeOnClick />
    <AppRoute />
  </AppProvider>
);
