import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'tenant',
    // tenant
    preferredLocation: '',
    budget: '',
    propertyType: '',
    // student
    schoolName: '',
    // landlord
    companyName: '',
    propertyLocation: '',
    landlordPropertyType: '',
    // agent
    agencyName: '',
    licenseNumber: '',
    serviceAreas: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const login = (user) => {
    console.log("Logged in user:", user);
  };

  const handleToggleForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      role: 'tenant',
      preferredLocation: '',
      budget: '',
      propertyType: '',
      schoolName: '',
      companyName: '',
      propertyLocation: '',
      landlordPropertyType: '',
      agencyName: '',
      licenseNumber: '',
      serviceAreas: ''
    });
    setIsLoginForm(prev => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const simulateLoading = (callback) => {
    setIsLoading(true);
    setTimeout(() => {
      callback();
      setIsLoading(false);
    }, 1500);
  };

  const handleSignUp = () => {
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    simulateLoading(() => {
      login(formData);
      navigate('/dashboard/home');
    });
  };

  const handleLogin = () => {
    simulateLoading(() => {
      login(formData);
      navigate('/dashboard/home');
    });
  };

  // Role-specific fields
  const renderRoleFields = () => {
    switch (formData.role) {
      case 'tenant':
        return (
          <>
            <input
              name="preferredLocation"
              type="text"
              placeholder="Preferred Location"
              value={formData.preferredLocation}
              onChange={handleInputChange}
            />
            <input
              name="budget"
              type="number"
              placeholder="Budget"
              value={formData.budget}
              onChange={handleInputChange}
            />
            <input
              name="propertyType"
              type="text"
              placeholder="Property Type"
              value={formData.propertyType}
              onChange={handleInputChange}
            />
          </>
        );
      case 'student':
        return (
          <input
            name="schoolName"
            type="text"
            placeholder="School/University Name"
            value={formData.schoolName}
            onChange={handleInputChange}
          />
        );
      case 'landlord':
        return (
          <>
            <input
              name="companyName"
              type="text"
              placeholder="Company/Business Name (optional)"
              value={formData.companyName}
              onChange={handleInputChange}
            />
            <input
              name="propertyLocation"
              type="text"
              placeholder="Property Location"
              value={formData.propertyLocation}
              onChange={handleInputChange}
            />
            <input
              name="landlordPropertyType"
              type="text"
              placeholder="Property Type (Residential/Commercial)"
              value={formData.landlordPropertyType}
              onChange={handleInputChange}
            />
          </>
        );
      case 'agent':
        return (
          <>
            <input
              name="agencyName"
              type="text"
              placeholder="Agency Name"
              value={formData.agencyName}
              onChange={handleInputChange}
            />
            <input
              name="licenseNumber"
              type="text"
              placeholder="License Number"
              value={formData.licenseNumber}
              onChange={handleInputChange}
            />
            <input
              name="serviceAreas"
              type="text"
              placeholder="Service Areas (City/State)"
              value={formData.serviceAreas}
              onChange={handleInputChange}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image"></div>
      <div className={`auth-form ${isLoginForm ? 'login-mode' : ''}`}>
        <AnimatePresence mode="wait">
          {isLoginForm ? (
            <motion.div
              key="login"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="form-box"
            >
              <h2>Welcome Back to ARCE</h2>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                className="primary-btn"
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Sign In'}
              </button>
              <p onClick={handleToggleForm}>
                Don't have an account? <span>Sign Up</span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="form-box"
            >
              <h2>Create an Account on ARCE</h2>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />

              {/* Role Selection */}
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="role-select"
              >
                <option value="tenant">Tenant</option>
                <option value="student">Student</option>
                <option value="landlord">Landlord</option>
                <option value="agent">Agent</option>
              </select>

              {renderRoleFields()}

              <button
                className="primary-btn"
                onClick={handleSignUp}
                disabled={isLoading}
              >
                {isLoading ? 'Signing up...' : 'Sign Up'}
              </button>
              <p onClick={handleToggleForm}>
                Already have an account? <span>Login</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Login;
