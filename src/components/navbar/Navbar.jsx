import React, { useContext } from "react";
import "./navbar.css";
import ReactTooltip from "react-tooltip";
import {
  BsSearch,
  BsGlobe,
  BsMoon,
  BsBell,
  BsChatLeft,
  BsSun,
  BsFullscreen,
} from "react-icons/bs";
import { BiCog, BiMenuAltRight } from "react-icons/bi";
import { SidebarContext } from "../../contexts/SidebarContext";
import { DarkModeContext } from "../../contexts/DarkModeContext";

const Navbar = () => {
  const { openSidebar } = useContext(SidebarContext);
  const { dispatch, isDarkMode } = useContext(DarkModeContext);

  return (
    <div className="navbar flex-center-between border-bottom">
      <div className="flex-align-center gap-2">
        <div
          className="menu-toggle-btn cursor-pointer"
          hidden
          onClick={openSidebar}
        >
          <BiMenuAltRight className="ml-2 text-20" />
        </div>
        <form action="" className="pl-2">
          <div className="input-with-icon transparent pr-1">
            <input
              type="search"
              name=""
              id=""
              className="form-control"
              placeholder="Search.."
            />
            <BsSearch />
          </div>
        </form>
      </div>

      <div className="right-nav flex-center-center">
        <ul className="flex-center-center gap-3 pr-4">
          <li>
            <span
              data-tip="Language"
              data-place="bottom"
              className="flex-center-center"
              data-padding="6px"
            >
              <BsGlobe />
              <span className="ml-1">Language</span>
              <ReactTooltip />
            </span>
          </li>
          <li onClick={() => dispatch({ type: "TOGGLE" })}>
            <span
              data-tip={isDarkMode ? "Light" : "Dark"}
              data-place="bottom"
              data-padding="6px"
            >
              {isDarkMode ? <BsSun /> : <BsMoon />}
              <ReactTooltip />
            </span>
          </li>
          <li onClick={() => document.body.requestFullscreen()}>
            <span data-tip="Fullscreen" data-place="bottom" data-padding="6px">
              <BsFullscreen />
              <ReactTooltip />
            </span>
          </li>
          <li className="relative">
            <span
              data-tip="Notifications"
              data-place="bottom"
              data-padding="6px"
            >
              <BsBell />
              <ReactTooltip />
            </span>
            <span className="count">5</span>
          </li>
          <li className="relative">
            <span data-tip="Messages" data-place="bottom" data-padding="6px">
              <BsChatLeft />
              <ReactTooltip />
            </span>
            <span className="count">5</span>
          </li>
        </ul>
        <img
          src="/images/8e2ffbb4ba (1).png"
          alt=""
          className="profile-avatar-sm cursor-pointer"
          data-tip="Profile"
          data-place="bottom"
          data-padding="6px"
        />
        <ReactTooltip />
        <div className="px-2 cursor-pointer">
          <span data-tip="Settings" data-place="bottom" data-padding="6px">
            <BiCog className="text-20" />
            <ReactTooltip />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
