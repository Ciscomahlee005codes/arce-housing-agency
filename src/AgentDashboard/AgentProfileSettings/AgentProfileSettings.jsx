import React, { useState } from "react";
import "./AgentProfileSettings.css";

const AgentProfileSettings = () => {
  const [user] = useState({
    fullName: "Agent Tony",
    email: "tony@arce.com",
    phone: "08012345678",
    role: "Agent",
    agencyName: "ARCE Housing",
    licenseNumber: "AG12345",
    bio: "Helping students and families find the best homes 🚀",
    profileImage: null,
  });

  const [editedUser, setEditedUser] = useState(user);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Save changes:", editedUser);
    alert("Profile changes saved (demo only). Backend will handle later.");
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Password updated:", newPassword);
    alert("Password updated (demo only). Backend will handle later.");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
      console.log("Account deleted:", user.email);
      alert("Account deleted (demo only). Backend will handle later.");
      window.location.href = "/";
    }
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.className = newMode ? "dark-mode" : "";
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setEditedUser({ ...editedUser, profileImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="settings-container">
      <h2>Profile & Account Settings</h2>

      {/* Profile Card */}
<div className="profile-card">
  <div className="profile-pic">
    <img
      src={profileImage || user.profileImage || "/default-avatar.png"}
      alt="Profile"
    />
    <label className="upload-icon">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        hidden
      />
      
  {/* <span>+</span> */}
    </label>
    
    <h3>{user.fullName}</h3>
    <p>{user.email}</p>
  </div>
</div>




      {/* Account Info */}
      <div className="settings-form">
        <h3>Account Information</h3>
        <label>Full Name</label>
        <input type="text" name="fullName" value={editedUser.fullName || ""} onChange={handleChange} />

        <label>Email</label>
        <input type="email" name="email" value={editedUser.email || ""} onChange={handleChange} />

        <label>Phone</label>
        <input type="text" name="phone" value={editedUser.phone || ""} onChange={handleChange} />

        <label>Bio</label>
        <textarea name="bio" rows="3" value={editedUser.bio || ""} onChange={handleChange}></textarea>

        {user.role === "Agent" && (
          <>
            <label>Agency Name</label>
            <input type="text" name="agencyName" value={editedUser.agencyName || ""} onChange={handleChange} />

            <label>License Number</label>
            <input type="text" name="licenseNumber" value={editedUser.licenseNumber || ""} onChange={handleChange} />
          </>
        )}

        <button onClick={handleSave} className="save-btn">Save Changes</button>
      </div>

      {/* Social Links */}
      <div className="settings-form">
        <h3>Social Links</h3>
        <label>LinkedIn</label>
        <input type="url" name="linkedin" value={editedUser.linkedin || ""} onChange={handleChange} />

        <label>WhatsApp</label>
        <input type="text" name="whatsapp" value={editedUser.whatsapp || ""} onChange={handleChange} />

        <label>Website</label>
        <input type="url" name="website" value={editedUser.website || ""} onChange={handleChange} />
      </div>

      {/* Password */}
      <div className="settings-form">
        <h3>Change Password</h3>
        <input type="password" placeholder="Current Password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button onClick={handlePasswordChange} className="save-btn">Update Password</button>
      </div>

      {/* Preferences */}
      <div className="settings-form">
        <h3>Preferences</h3>
        <label>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          Enable Dark Mode
        </label>
        <label>
          <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
          Enable Notifications
        </label>
        <label>
          <input type="checkbox" checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
          Enable Two-Factor Authentication
        </label>
      </div>

      {/* Danger Zone */}
      <div className="danger-zone">
        <h3>Danger Zone</h3>
        <button className="delete-btn" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AgentProfileSettings;
