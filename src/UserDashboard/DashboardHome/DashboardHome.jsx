import React from "react";
import "./DashboardHome.css";

const DashboardHome = () => {
  return (
    <div className="dashboard">
      {/* Top Welcome Section */}
      <div className="dashboard-header">
        <h2>Welcome back, Anthony 👋</h2>
        <p>Here’s an overview of your account today.</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="card">
          <h3>120</h3>
          <p>Active Listings</p>
        </div>
        <div className="card">
          <h3>45</h3>
          <p>New Messages</p>
        </div>
        <div className="card">
          <h3>15</h3>
          <p>Pending Requests</p>
        </div>
        <div className="card">
          <h3>$2,300</h3>
          <p>Earnings</p>
        </div>
      </div>

      {/* Main Grid: Chart + Notifications */}
      <div className="main-grid">
        <div className="chart-card">
          <h3>Performance Overview</h3>
          <div className="chart-placeholder">
            📊 Chart will be here
          </div>
        </div>

        <div className="side-card">
          <h3>Recent Activity</h3>
          <ul>
            <li>🏠 New property added</li>
            <li>💬 You received a new message</li>
            <li>📢 System update available</li>
            <li>👤 New client registered</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
