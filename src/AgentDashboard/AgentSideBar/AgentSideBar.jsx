import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaHome,
  FaHistory,
  FaEnvelope,
  FaClipboardList,
  FaUserCog,
  FaBell,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTimes,
  FaBars,
  FaUserCircle,
} from "react-icons/fa";
import "./AgentSideBar.css";

const AgentSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // treat <=768px as mobile
    };

    handleResize(); // run on first load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger Button (only on mobile when sidebar is closed) */}
      {isMobile && !isOpen && (
        <button className="hamburger" onClick={toggleSidebar}>
          <FaBars />
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isMobile && isOpen ? "open" : ""}`}>
        {/* Close Button (only on mobile) */}
        {isMobile && (
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        )}

        {/* User Info */}
        <div className="user-info">
          <FaUserCircle className="user-avatar" />
          <div>
            <h3 className="user-name">Anthony Raphael</h3>
            <p className="user-role">Agent</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul>
          <li>
            <NavLink to="/agentdashboard/home" className="link">
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/agentdashboard/property" className="link">
              <FaHome /> Browse Properties
            </NavLink>
          </li>
          <li>
            <NavLink to="/agentdashboard/rentalPage" className="link">
              <FaHistory /> Rental History
            </NavLink>
          </li>
          <li>
            <NavLink to="/agentdashboard/messages" className="link">
              <FaEnvelope /> Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/agentdashboard/request" className="link">
              <FaClipboardList /> Requests
            </NavLink>
          </li>
          <li>
            <NavLink to="/agentdashboard/profile" className="link">
              <FaUserCog /> Profile & Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/agentdashboard/notification" className="link">
              <FaBell /> Notifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/agentdashboard/helpsupport" className="link">
              <FaQuestionCircle /> Help & Support
            </NavLink>
          </li>
        </ul>

        {/* Logout */}
        <div className="logout">
          <button>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default AgentSideBar;
