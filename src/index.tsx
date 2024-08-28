import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app";

import { StoreProvider } from "./context/Store";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
