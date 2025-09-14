import React, { useState } from "react";
import { FaBan, FaCheckCircle, FaUndo, FaUserShield } from "react-icons/fa";
import "./AdminUserManagement.css";

const dummyUsers = [
  { id: 1, name: "John Doe", role: "Tenant", status: "Active" },
  { id: 2, name: "Jane Smith", role: "Student", status: "Blocked" },
  { id: 3, name: "Mike Johnson", role: "Student", status: "Pending" },
  { id: 4, name: "Sarah Williams", role: "Tenant", status: "Active" },
];

const AdminUserManagement = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [filter, setFilter] = useState("All");

  const handleBlock = (id) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, status: "Blocked" } : u)));
  };

  const handleUnblock = (id) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, status: "Active" } : u)));
  };

  const handleReset = (id) => {
    alert(`Reset credentials for User ID: ${id}`);
  };

  const handleApprove = (id) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, status: "Active" } : u)));
  };

  // Filtering logic
  const filteredUsers =
    filter === "All" ? users : users.filter((u) => u.status === filter);

  return (
    <div className="user-management">
      <h2>User Management</h2>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {["All", "Active", "Blocked", "Pending"].map((tab) => (
          <button
            key={tab}
            className={`filter-btn ${filter === tab ? "active" : ""}`}
            onClick={() => setFilter(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* User Table */}
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className={user.status.toLowerCase()}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td className="actions">
                {user.status === "Active" && (
                  <button
                    onClick={() => handleBlock(user.id)}
                    className="btn block"
                  >
                    <FaBan /> Block
                  </button>
                )}
                {user.status === "Blocked" && (
                  <button
                    onClick={() => handleUnblock(user.id)}
                    className="btn unblock"
                  >
                    <FaUndo /> Unblock
                  </button>
                )}
                {user.status === "Pending" && (
                  <button
                    onClick={() => handleApprove(user.id)}
                    className="btn approve"
                  >
                    <FaCheckCircle /> Approve
                  </button>
                )}
                <button
                  onClick={() => handleReset(user.id)}
                  className="btn reset"
                >
                  <FaUserShield /> Reset
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserManagement;
