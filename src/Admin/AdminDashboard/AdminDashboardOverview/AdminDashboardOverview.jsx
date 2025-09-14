import React from "react";
import { FaUsers, FaUserTie, FaHome, FaGlobe, FaDollarSign } from "react-icons/fa";
import "./AdminDashboardOverview.css";

const AdminDashboardOverview = () => {
  return (
    <div className="admin-dashboard-overview">
      {/* Welcome */}
      <h2 className="welcome-message">Kway, Mega 👋</h2>

      {/* Stats Boxes */}
      <div className="stats-grid">
        <div className="stat-card">
          <FaUsers className="stat-icon users" />
          <div>
            <h3>12,450</h3>
            <p>Total Users</p>
          </div>
        </div>

        <div className="stat-card">
          <FaUserTie className="stat-icon agents" />
          <div>
            <h3>320</h3>
            <p>Total Agents</p>
          </div>
        </div>

        <div className="stat-card">
          <FaHome className="stat-icon properties" />
          <div>
            <h3>2,150</h3>
            <p>Total Properties</p>
          </div>
        </div>

        <div className="stat-card">
          <FaGlobe className="stat-icon states" />
          <div>
            <h3>18</h3>
            <p>States Covered</p>
          </div>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="revenue-section">
        <h3>Revenue Overview</h3>
        <div className="revenue-box">
          <FaDollarSign className="revenue-icon" />
          <p><span>$125,430</span> this month</p>
        </div>
        {/* later we can integrate chart.js / recharts here */}
      </div>

      {/* Recent Activities */}
      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          <li>User <b>John Doe</b> applied as Agent.</li>
          <li>Property <b>Duplex in Abuja</b> was added.</li>
          <li>Agent <b>Jane Smith</b> updated profile.</li>
          <li>System alert: <b>3 flagged properties</b>.</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboardOverview;
