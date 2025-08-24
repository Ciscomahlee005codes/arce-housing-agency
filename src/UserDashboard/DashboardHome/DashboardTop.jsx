import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaSliders } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import "./DashboardTop.css";

const DashboardTop = () => {
  return (
    <div className="main-top">
      <div className="dashboard-top">
        {/* Search bar */}
        <div className="search-bar">
          <FiSearch className="icon" />
          <input type="text" placeholder="Search listings, tenants..." />
          <button className="filter-btn">
            <FaSliders />
          </button>
        </div>

        {/* Actions */}
        <div className="top-actions">
          <div className="t-icons">
            <MdMessage className="top-icon" />
            <IoMdNotifications className="top-icon" />
          </div>

          <div className="user-data">
            <FaUser className="user-icon" />
            <h3>Welcome, User</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
