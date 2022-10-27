import React, { useContext } from "react";
import "./styles.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Error from "./pages/error/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarContext } from "./contexts/SidebarContext";
import { userInputs, productInputs } from "./data/formSource";
import { DarkModeContext } from "./contexts/DarkModeContext";

const App = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const { isDarkMode } = useContext(DarkModeContext);

  const handleClose = (e) => {
    if (!e.target.classList.contains(".sidebar-dialog")) {
      closeSidebar();
    }
  };

  return (
    <Router>
      <div className={`content-wrapper grid ${isDarkMode && "dark"}`}>
        <div
          className={`sidebar border-right ${isSidebarOpen && "open"}`}
          onClick={handleClose}
        >
          <Sidebar />
        </div>
        <div className="main-content">
          <Navbar />
          <div className="content-container pl-2 pt-8 pr-2">
            {/* Routes */}
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/users"
                element={<List url="/users/new" viewUrl="/users/single" />}
              />
              <Route
                path="/products"
                element={
                  <List url="/products/new" viewUrl="/products/single" />
                }
              />
              <Route path="/users/new" element={<New inputs={userInputs} />} />
              <Route
                path="/products/new"
                element={<New inputs={productInputs} />}
              />
              <Route path="/users/:id" element={<Single />} />
              <Route path="/products/:id" element={<Single />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          {/* //Routes */}
        </div>
      </div>
    </Router>
  );
};

export default App;
