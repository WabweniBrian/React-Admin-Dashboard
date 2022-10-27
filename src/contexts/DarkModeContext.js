import React, { createContext, useEffect, useReducer } from "react";
import { DarkModeReducer } from "../reducers/DarkModeReducer";

export const DarkModeContext = createContext();
const INITIAL_STATE =
  JSON.parse(localStorage.getItem("react-admin-theme")) || {};

const DarkModeContextProvider = ({ children }) => {
  const [darkMode, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("react-admin-theme", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ ...darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
