/** @format */

import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineSettings,
  MdOutlineChevronRight,
  MdOutlineExpandMore,
  MdOutlineArrowRight
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-open-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      {/* Sidebar Top */}
      <div className='sidebar-top'>
        <div className='sidebar-brand'>
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt='logo' />
          <span className='sidebar-brand-text'>Millennium Water Alliance</span>
        </div>
        <button className='sidebar-close-btn' onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>

      {/* Sidebar Body */}
      <div className='sidebar-body'>
        <div className='sidebar-menu'>
          <ul className='menu-list'>
            {/* Dashboard */}
            <li className='menu-item'>
              <Link to='/dashboard' className='menu-link'>
                <span className='menu-link-icon'>
                  <MdOutlineGridView size={18} />
                </span>
                <span className='menu-link-text'>Dashboard</span>
              </Link>
            </li>

            {/* Leave Planner with Sub-Menu */}
            <li className={`menu-item ${openSubMenu === 'planner' ? 'active' : ''}`}>
              <div className='menu-link' onClick={() => toggleSubMenu("planner")}>
                <span className='menu-link-icon'>
                  <MdOutlineBarChart size={20} />
                </span>
                <span className='menu-link-text'>Leave Planner</span>
                <span className='menu-link-icon-right'>
                  {openSubMenu === 'planner' ? (
                    <MdOutlineExpandMore size={20} />
                  ) : (
                    <MdOutlineChevronRight size={20} />
                  )}
                </span>
              </div>
              <ul className={`sub-menu ${openSubMenu === "planner" ? "open" : ""}`}>
                <li className='sub-menu-item' key='new-planner'>
                  <Link to='/leave-planner' className='sub-menu-link'>
                    <MdOutlineArrowRight className='sub-menu-icon' />
                    New Planner
                  </Link>
                </li>
                <li className='sub-menu-item' key='my-planners'>
                  <Link to='/my-planners' className='sub-menu-link'>
                    <MdOutlineArrowRight className='sub-menu-icon' />
                    My Planners
                  </Link>
                </li>
              </ul>
            </li>

            {/* Example of Another Menu Item with Sub-Menu */}
            <li className={`menu-item ${openSubMenu === 'reports' ? 'active' : ''}`}>
              <div className='menu-link' onClick={() => toggleSubMenu("reports")}>
                <span className='menu-link-icon'>
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className='menu-link-text'>Reports</span>
                <span className='menu-link-icon-right'>
                  {openSubMenu === 'reports' ? (
                    <MdOutlineExpandMore size={20} />
                  ) : (
                    <MdOutlineChevronRight size={20} />
                  )}
                </span>
              </div>
              <ul className={`sub-menu ${openSubMenu === "reports" ? "open" : ""}`}>
                <li className='sub-menu-item' key='financial-reports'>
                  <Link to='/financial-reports' className='sub-menu-link'>
                    <MdOutlineArrowRight className='sub-menu-icon' />
                    Financial Reports
                  </Link>
                </li>
                <li className='sub-menu-item' key='sales-reports'>
                  <Link to='/sales-reports' className='sub-menu-link'>
                    <MdOutlineArrowRight className='sub-menu-icon' />
                    Sales Reports
                  </Link>
                </li>
              </ul>
            </li>

            {/* More Menu Items */}
            <li className='menu-item'>
              <Link to='/settings' className='menu-link'>
                <span className='menu-link-icon'>
                  <MdOutlineSettings size={20} />
                </span>
                <span className='menu-link-text'>Settings</span>
              </Link>
            </li>

            <li className='menu-item'>
              <Link to='/logout' className='menu-link'>
                <span className='menu-link-icon'>
                  <MdOutlineLogout size={20} />
                </span>
                <span className='menu-link-text'>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
