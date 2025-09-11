import React from "react";
import { FaSearch, FaBell, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import "./AdminTopbar.css";

const AdminTopbar = () => {
  return (
    <div className="admin-topbar">
      {/* Search Bar */}
      <div className="topbar-search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search users, properties..." />
      </div>

      {/* Right Section */}
      <div className="topbar-right">
        {/* Notifications */}
        <div className="topbar-icon">
          <FaBell />
          <span className="notification-badge">3</span>
        </div>

        {/* Profile Dropdown (dummy for now) */}
        <div className="topbar-profile">
          <FaUserCircle className="profile-avatar" />
          <span className="profile-name">Admin</span>
        </div>

        {/* Logout */}
        <button className="logout-btn">
          <FaSignOutAlt /> <span className="logout-text">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminTopbar;
