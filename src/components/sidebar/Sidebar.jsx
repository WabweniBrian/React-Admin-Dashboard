import React, { useContext } from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";
import sidebarLinks from "../../data/sidebarLinks";
import { BsSun, BsMoon } from "react-icons/bs";
import ReactTooltip from "react-tooltip";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SidebarContext } from "../../contexts/SidebarContext";
import { DarkModeContext } from "../../contexts/DarkModeContext";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useContext(SidebarContext);
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className={`sidebar-dialog ${isSidebarOpen && "open"}`}>
      <div className="top border-bottom flex-center-between">
        <a href="/">
          <h1 className="text-25 ml-2">
            Wab
            <span className="danger-color" data-tip="WabAdmin">
              Admin
            </span>
          </h1>
          <ReactTooltip />
        </a>
        <div
          className="close-icon cursor-pointer"
          hidden
          onClick={closeSidebar}
        >
          <AiOutlineCloseCircle className="text-20 mr-2" />
        </div>
      </div>
      <ul className="sidebar-nav pl-2 pt-2">
        {sidebarLinks.map((sidebarLink, index) => {
          const { title, links } = sidebarLink;
          return (
            <div key={index}>
              <h5 className="title uppercase opacity-6 mt-1">{title}</h5>
              {links.map((menuLink, index) => {
                const { link, icon, url } = menuLink;
                return (
                  <li className="flex-align-center" key={index}>
                    <NavLink
                      to={url}
                      key={index}
                      end
                      activeClassName="active"
                      className="pt-1 pb-1 pl-1 pr-12"
                    >
                      {icon}
                      <span className="ml-1">{link}</span>
                    </NavLink>
                  </li>
                );
              })}
            </div>
          );
        })}

        {/* <h5 className="uppercase opacity-6 mt-2">user</h5>
        <Link to="/">
          <li className="flex-align-center pt-1 pb-1">
            <BiUser />
            <span className="ml-1">Profile</span>
          </li>
        </Link>
        <Link to="/">
          <li className="flex-align-center pt-1 pb-1">
            <BiLogOutCircle />
            <span className="ml-1">Logout</span>
          </li>
        </Link> */}
      </ul>
      <div className="theme-btns pl-2 mt-2 pb-3">
        <h5 className="uppercase opacity-6">theme</h5>
        <div className="flex-align-center gap-2 mt-1">
          <button
            className="btn btn-circle shadow  light"
            data-tip="Light"
            onClick={() => dispatch({ type: "LIGHT" })}
          >
            <BsSun />
            <ReactTooltip />
          </button>
          <button
            className="btn btn-circle shadow  dark"
            data-tip="Dark"
            onClick={() => dispatch({ type: "DARK" })}
          >
            <BsMoon />
            <ReactTooltip />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
