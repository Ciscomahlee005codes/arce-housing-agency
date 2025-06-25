import React, { useState, useRef } from "react";
import "./MyProfile.css";
import {
  FaUser,
  FaPlus,
  FaKey,
  FaBell,
  FaLink,
  FaSignOutAlt,
  FaPhoneAlt,
  FaInfoCircle,
  FaQuestionCircle,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [photoURL, setPhotoURL] = useState(
    localStorage.getItem("profileImage") || ""
  );
  const fileInputRef = useRef(null);
  const [userData] = useState({
    name: "John Doe",
    email: "johndoe@email.com",
  });

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageURL = reader.result;
      localStorage.setItem("profileImage", imageURL);
      setPhotoURL(imageURL);
    };
    reader.readAsDataURL(file);
  };

  const handleLogout = () => {
    localStorage.clear();
    alert("You've been logged out.");
    window.location.href = "/";
  };

  const menuItems = [
    { title: "Profile Settings", icon: <FaUser />, link: "/" },
    { title: "Password Settings", icon: <FaKey />, link: "/" },
    { title: "Notifications", icon: <FaBell />, link: "/" },
    { title: "Referral Links", icon: <FaLink />, link: "/" },
    { title: "Contact Us", icon: <FaPhoneAlt />, link: "/contactUs", hideOnBig: true },
    { title: "About Us", icon: <FaInfoCircle />, link: "/aboutUs", hideOnBig: true },
    { title: "FAQs", icon: <FaQuestionCircle />, link: "/faq", hideOnBig: true },
    { title: "Testimonials", icon: <FaStar />, link: "/testimonials", hideOnBig: true },
  ];

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="img-section">
          <div className="img-wrapper" onClick={handleImageClick}>
            {photoURL ? (
              <img src={photoURL} alt="profile" />
            ) : (
              <div className="upload-icon">
                <FaPlus />
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
          <h2 className="username">{userData.name}</h2>
        </div>

        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`menu-item ${item.hideOnBig ? "hide-on-small" : ""}`}
            >
              <Link to={item.link} className="menu-link">
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-title">{item.title}</span>
              </Link>
            </li>
          ))}

          <li className="logout">
            <div className="menu-link" onClick={handleLogout}>
              <span className="menu-icon">
                <FaSignOutAlt />
              </span>
              <span className="menu-title">Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
