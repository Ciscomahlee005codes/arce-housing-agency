import React from "react";
import { FaHome, FaUsers, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import "./UserActivity.css";

const UserActivity = () => {
  const activities = [
    {
      id: 1,
      title: "Total Listings",
      count: 128,
      icon: <FaHome />,
      color: "#4e73df",
    },
    {
      id: 2,
      title: "Active Tenants",
      count: 54,
      icon: <FaUsers />,
      color: "#1cc88a",
    },
    {
      id: 3,
      title: "Pending Requests",
      count: 12,
      icon: <FaHourglassHalf />,
      color: "#f6c23e",
    },
    {
      id: 4,
      title: "Completed Deals",
      count: 76,
      icon: <FaCheckCircle />,
      color: "#36b9cc",
    },
  ];

  return (
    <div className="activity-grid">
      {activities.map((item) => (
        <div key={item.id} className="activity-card">
          <div className="icon-box" style={{ backgroundColor: item.color }}>
            {item.icon}
          </div>
          <div className="activity-info">
            <h4>{item.title}</h4>
            <p>{item.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserActivity;
