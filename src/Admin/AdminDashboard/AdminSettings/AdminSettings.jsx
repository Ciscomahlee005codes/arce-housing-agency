import React, { useState } from "react"
import "./AdminSettings.css"
import { FaChevronDown, FaChevronUp, FaCloudDownloadAlt, FaUpload, FaShieldAlt, FaBell, FaCogs } from "react-icons/fa"

const AdminSettings = () => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="settings-container">
      <h2>System Settings</h2>

      {/* General Settings */}
      <div className="settings-section">
        <div className="section-header" onClick={() => toggleSection("general")}>
          <FaCogs /> <span>General Settings</span>
          {openSection === "general" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "general" && (
          <div className="section-body">
            <form>
              <label>App Name</label>
              <input type="text" placeholder="Enter app name" />

              <label>Brand Logo</label>
              <input type="file" />

              <label>Support Email</label>
              <input type="email" placeholder="support@example.com" />

              <button type="submit">Save Changes</button>
            </form>
          </div>
        )}
      </div>

      {/* Notification Preferences */}
      <div className="settings-section">
        <div className="section-header" onClick={() => toggleSection("notifications")}>
          <FaBell /> <span>Notification Preferences</span>
          {openSection === "notifications" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "notifications" && (
          <div className="section-body">
            <label>
              <input type="checkbox" /> Email Notifications
            </label>
            <label>
              <input type="checkbox" /> SMS Notifications
            </label>
            <label>
              <input type="checkbox" /> Push Notifications
            </label>
            <button type="button">Update Preferences</button>
          </div>
        )}
      </div>

      {/* Security Settings */}
      <div className="settings-section">
        <div className="section-header" onClick={() => toggleSection("security")}>
          <FaShieldAlt /> <span>Security</span>
          {openSection === "security" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "security" && (
          <div className="section-body">
            <label>
              <input type="checkbox" /> Enable Two-Factor Authentication
            </label>
            <label>Admin Roles</label>
            <select>
              <option>Super Admin</option>
              <option>Manager</option>
              <option>Support Staff</option>
            </select>
            <button type="button">Save Security Settings</button>
          </div>
        )}
      </div>

      {/* Backup & Export */}
      <div className="settings-section">
        <div className="section-header" onClick={() => toggleSection("backup")}>
          <FaCloudDownloadAlt /> <span>Backup & Export</span>
          {openSection === "backup" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "backup" && (
          <div className="section-body">
            <button className="backup-btn">
              <FaUpload /> Backup Now
            </button>
            <button className="export-btn">
              <FaCloudDownloadAlt /> Export Data
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminSettings
