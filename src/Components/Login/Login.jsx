import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LogInPicture from "../../assets/House-4.jpg"
import './Login.css';

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'developer',
    skills: '',
    experience: '',
    github: '',
    companyName: '',
    hiringFor: '',
    availability: '',
    yearsExperience: ''
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
      role: 'developer',
      skills: '',
      experience: '',
      github: '',
      companyName: '',
      hiringFor: '',
      availability: '',
      yearsExperience: ''
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

  // Renders role-specific inputs
  const renderRoleFields = () => {
    switch (formData.role) {
      case 'developer':
        return (
          <>
            <input name="skills" type="text" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleInputChange} />
            <input name="experience" type="text" placeholder="Experience Level" value={formData.experience} onChange={handleInputChange} />
            <input name="github" type="text" placeholder="GitHub/Portfolio URL" value={formData.github} onChange={handleInputChange} />
          </>
        );
      case 'mentor':
        return (
          <>
            <input name="skills" type="text" placeholder="Mentoring Skills" value={formData.skills} onChange={handleInputChange} />
            <input name="yearsExperience" type="number" placeholder="Years of Experience" value={formData.yearsExperience} onChange={handleInputChange} />
            <input name="availability" type="text" placeholder="Availability (e.g., 5 hrs/week)" value={formData.availability} onChange={handleInputChange} />
          </>
        );
      case 'recruiter':
        return (
          <>
            <input name="companyName" type="text" placeholder="Company Name" value={formData.companyName} onChange={handleInputChange} />
            <input name="hiringFor" type="text" placeholder="Hiring For (Role/Skills)" value={formData.hiringFor} onChange={handleInputChange} />
          </>
        );
      case 'admin':
        return (
          <>
            <p style={{ fontSize: '0.85rem', color: '#888' }}>Admins will be verified by the Mentra team.</p>
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
              <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
              <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
              <button className="primary-btn" onClick={handleLogin} disabled={isLoading}>
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
              <input name="fullName" type="text" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} />
              <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
              <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
              <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
              <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} />

              {/* Role Selection */}
              <select name="role" value={formData.role} onChange={handleInputChange} className="role-select">
                <option value="developer">Developer</option>
                <option value="mentor">Mentor</option>
                <option value="recruiter">Recruiter</option>
                <option value="admin">Admin</option>
              </select>

              {/* Role Specific Fields */}
              {renderRoleFields()}

              <button className="primary-btn" onClick={handleSignUp} disabled={isLoading}>
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