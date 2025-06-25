import React from "react";
import "./AboutPage.css";
import { FaCheckCircle, FaMapMarkedAlt, FaMobileAlt, FaUserShield, FaHandshake } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About ARCE Housing Agency</h2>

      <p className="about-intro">
        At <strong>ARCE Housing Agency</strong>, we're on a mission to redefine how people find and rent homes in Nigeria.
        Whether you're searching for a cozy lodge, a modern flat, or a spacious duplex, ARCE connects tenants with trusted landlords and agents — all in one smart platform.
      </p>

      <div className="about-section">
        <h3>🎯 Our Mission</h3>
        <p>
          To simplify the housing experience through speed, transparency, and trust.
          We believe every Nigerian deserves a hassle-free journey to finding a home.
        </p>
      </div>

      <div className="about-section">
        <h3>🔍 What We Do</h3>
        <p>
          We offer a growing list of verified properties across states, locations, and housing types. 
          Our platform enables users to browse, search, and apply for properties directly using just their phone.
        </p>
      </div>

      <div className="about-section">
        <h3>💡 Why Choose Us</h3>
        <ul className="about-list">
          <li><FaCheckCircle className="icon" /> Smart and fast search filters</li>
          <li><FaUserShield className="icon" /> 100% verified listings & trusted agents</li>
          <li><FaMobileAlt className="icon" /> Easy-to-use mobile interface</li>
           <li><FaHandshake className="icon" /> Fair and transparent service – just 10% fee</li>
          <li><FaMapMarkedAlt className="icon" /> Listings across major cities and schools</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>🚀 Our Vision</h3>
        <p>
          To become Africa’s most trusted and innovative housing platform — 
          where anyone, from students to families, can confidently find a place to call home.
        </p>
      </div>

      <div className="about-footer">
        <p>
          Welcome to <span>ARCE</span> — <em>Housing Made Simple.</em>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
