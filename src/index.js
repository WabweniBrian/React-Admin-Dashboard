import React from "react";
import ReactDOM from "react-dom/client";
import "./simplified.css";
import App from "./App";
import SidebarContextProvider from "./contexts/SidebarContext";
import DarkModeContextProvider from "./contexts/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeContextProvider>
    <SidebarContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SidebarContextProvider>
  </DarkModeContextProvider>
);
