import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { VaultProvider } from "./context/Vault";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <VaultProvider>
    <App />
  </VaultProvider>
);
