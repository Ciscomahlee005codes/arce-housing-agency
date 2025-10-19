import React, { useState } from "react";
import "./AgentProfileSettings.css";

const AgentProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

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
  const [activeIndex, setActiveIndex] = useState(null);

  // FAQ content
  const faqs = [
    {
      question: "How do I update my profile?",
      answer:
        "Go to Settings > Profile, edit your information, and click 'Save Changes'. Your updates will be stored securely.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Navigate to Settings > Change Password. Enter your current password, then your new one, and confirm.",
    },
    {
      question: "How do I contact my agent?",
      answer:
        "Visit the Rental History or Home Listing page. Click on the agent’s profile to see their contact details or use the in-app chat feature.",
    },
    {
      question: "How do I report an issue with a rental?",
      answer:
        "Go to Help & Support > Report an Issue. Fill in the details and our support team will get back to you within 24 hours.",
    },
  ];

  const toggleAccordion = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile changes saved (demo only).");
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password updated (demo only).");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
      alert("Account deleted (demo only).");
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
      <div className="settings-tabs">
        <button
          className={`tab-btn ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile & Settings
        </button>
        <button
          className={`tab-btn ${activeTab === "help" ? "active" : ""}`}
          onClick={() => setActiveTab("help")}
        >
          Help & Support
        </button>
      </div>

      {activeTab === "profile" ? (
        <>
          <h2>Profile & Account Settings</h2>

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
              </label>
              <h3>{user.fullName}</h3>
              <p>{user.email}</p>
            </div>
          </div>

          <div className="settings-form">
            <h3>Account Information</h3>
            <label>Full Name</label>
            <input type="text" name="fullName" value={editedUser.fullName} onChange={handleChange} />

            <label>Email</label>
            <input type="email" name="email" value={editedUser.email} onChange={handleChange} />

            <label>Phone</label>
            <input type="text" name="phone" value={editedUser.phone} onChange={handleChange} />

            <label>Bio</label>
            <textarea name="bio" rows="3" value={editedUser.bio} onChange={handleChange}></textarea>

            {user.role === "Agent" && (
              <>
                <label>Agency Name</label>
                <input type="text" name="agencyName" value={editedUser.agencyName} onChange={handleChange} />

                <label>License Number</label>
                <input type="text" name="licenseNumber" value={editedUser.licenseNumber} onChange={handleChange} />
              </>
            )}
            <button onClick={handleSave} className="save-btn">Save Changes</button>
          </div>

          <div className="settings-form">
            <h3>Change Password</h3>
            <input type="password" placeholder="Current Password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
            <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={handlePasswordChange} className="save-btn">Update Password</button>
          </div>

          <div className="settings-form">
            <h3>Preferences</h3>
            <label>
              <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} /> Enable Dark Mode
            </label>
            <label>
              <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} /> Enable Notifications
            </label>
            <label>
              <input type="checkbox" checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} /> Two-Factor Authentication
            </label>
          </div>

          <div className="danger-zone">
            <h3>Danger Zone</h3>
            <button className="delete-btn" onClick={handleDeleteAccount}>Delete Account</button>
          </div>
        </>
      ) : (
        <div className="help-container">
          <h2>Help & Support</h2>
          <p className="intro">
            Welcome to ARCE Support. Find answers to common questions or contact us directly.
          </p>

          <div className="faq-section">
            <h3>Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <span>{activeIndex === index ? "−" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div className="contact-support">
            <h3>Contact Support</h3>
            <ul>
              <li>📧 Email: <a href="mailto:support@arce.com">support@arce.com</a></li>
              <li>📞 Phone: +234 800 123 4567</li>
              <li>💬 Live Chat: Available in the bottom-right corner</li>
            </ul>
          </div>

          <div className="report-issue">
            <h3>Report an Issue</h3>
            <form>
              <label>Your Email</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Issue</label>
              <textarea placeholder="Describe your issue in detail" rows="4" required></textarea>

              <button type="submit" className="submit-btn">Submit Issue</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentProfileSettings;
