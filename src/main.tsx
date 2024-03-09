import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NiceModal from "@ebay/nice-modal-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NiceModal.Provider>
      <App />
    </NiceModal.Provider>
  </React.StrictMode>
);
