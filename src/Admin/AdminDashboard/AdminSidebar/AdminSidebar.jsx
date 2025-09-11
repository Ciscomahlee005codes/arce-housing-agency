import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaUserTie,
  FaHome,
  FaEnvelope,
  FaMoneyBillWave,
  FaChartBar,
  FaCog,
  FaBell,
  FaSignOutAlt,
  FaTimes,
  FaBars,
  FaUserShield,
} from "react-icons/fa";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button (only when closed) */}
      {!isOpen && (
        <button className="admin-hamburger" onClick={toggleSidebar}>
          <FaBars />
        </button>
      )}

      {/* Sidebar */}
      <div className={`admin-sidebar ${isOpen ? "open" : ""}`}>
        {/* Close Button (inside sidebar) */}
        <button className="admin-close" onClick={toggleSidebar}>
          <FaTimes />
        </button>

        {/* Admin Info */}
        <div className="admin-info">
          <FaUserShield className="admin-avatar" />
          <div>
            <h3 className="admin-name">System Admin</h3>
            <p className="admin-role">Administrator</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="admin-links">
          <ul>
            <li>
              <NavLink to="/adminDashboard/Home" className="admin-link">
                <FaTachometerAlt /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/adminDashboard/UserManagement" className="admin-link">
                <FaUsers /> Users Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/adminDashboard/AdminManagement" className="admin-link">
                <FaUserTie /> Agents Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/adminDashboard/Properties" className="admin-link">
                <FaHome /> Properties
              </NavLink>
            </li>
            <li>
              <NavLink to="/adminDashboard/Messages" className="admin-link">
                <FaEnvelope /> Messages & Support
              </NavLink>
            </li>
            <li>
              <NavLink to="/adminDashboard/Payment" className="admin-link">
                <FaMoneyBillWave /> Payments
              </NavLink>
            </li>
            <li>
              <NavLink to="/adminDashboard/Reports" className="admin-link">
                <FaChartBar /> Reports & Analytics
              </NavLink>
            </li>
            <li>
              <NavLink to="/adminDashboard/Settings" className="admin-link">
                <FaCog /> System Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/adminDashboard/Notification" className="admin-link">
                <FaBell /> Notifications
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <div className="admin-logout">
          <button>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && <div className="admin-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default AdminSidebar;
