import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaHome,
  FaHistory,
  FaMoneyBill,
  FaHeart,
  FaEnvelope,
  FaClipboardList,
  FaUserCog,
  FaBell,
  FaQuestionCircle,
  FaSignOutAlt,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import "./UserSideBar.css";

const UserSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger / Close Button */}
      <button className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* User Info */}
        <div className="user-info">
          <h3>Anthony Raphael</h3>
          <p className="role">Tenant</p>
        </div>

        <ul>
          <li>
            <NavLink to="/dashboard" className="link">
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/browse" className="link">
              <FaHome /> Browse Properties
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookings" className="link">
              <FaHistory /> My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/payments" className="link">
              <FaMoneyBill /> Payments/ Invoice
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" className="link">
              <FaEnvelope /> Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/requests" className="link">
              <FaClipboardList /> Requests
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="link">
              <FaUserCog /> Profile & Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/notifications" className="link">
              <FaBell /> Notifications
            </NavLink>
          </li>
          <li>
            <NavLink to="/help" className="link">
              <FaQuestionCircle /> Help & Support
            </NavLink>
          </li>
        </ul>

        {/* Logout Button at Bottom */}
        <div className="logout">
          <button>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default UserSideBar;
