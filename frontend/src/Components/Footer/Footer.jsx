import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container" id='big-footer'>

        <div className="footer-column">
          <h3>ARCE.</h3>
          <ul>
            <li>About Us</li>
            <li>How It Works</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Browse Apartments</li>
            <li>Wallet & Rent Pay</li>
            <li>Post Property</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-column social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

      </div>
      <div className="small-container">
         <div className="footer-column social">
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 ARCE Housing Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
