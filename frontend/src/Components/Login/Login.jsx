import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Login.css';

//calling either dev or production API FROM .ENV USING VITE
//VITE uses import.meta.env.localhostname. 
const API_BASE = import.meta.env.VITE_API_URL;


const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'tenant',
    schoolName: '',
    companyName: '',
    propertyLocation: '',
    landlordPropertyType: '',
    agencyName: '',
    licenseNumber: '',
    serviceAreas: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleToggleForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      role: 'tenant',
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

  // Determine API path based on role
  const getSignupPath = () => {
    switch(formData.role) {
      case 'tenant': return '/auth/tenant/signup';
      case 'student': return '/auth/student/signup';
      case 'landlord': return '/auth/landlord/signup';
      case 'agent': return '/auth/agent/signup';
      default: return '/auth/tenant/signup';
    }
  };

  const getLoginPath = () => {
    switch(formData.role) {
      case 'tenant': return '/auth/tenant/login';
      case 'student': return '/auth/student/login';
      case 'landlord': return '/auth/landlord/login';
      case 'agent': return '/auth/agent/login';
      default: return '/auth/tenant/login';
    }
  };
  
const handleSignUp = async () => {
  const { password, confirmPassword, fullName, email, phone } = formData;
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  setIsLoading(true);

  try {
    // Base payload
    let payload = { 
      full_name: fullName, 
      email, 
      phone, 
      password 
    };

    // Add role-specific fields
    switch (formData.role) {
      case 'student':
        payload.school_name = formData.schoolName;
        break;
      case 'landlord':
        payload.company_name = formData.companyName;
        payload.property_location = formData.propertyLocation;
        payload.landlord_property_type = formData.landlordPropertyType;
        break;
      case 'agent':
        payload.agency_name = formData.agencyName;
        payload.license_number = formData.licenseNumber;
        payload.service_areas = formData.serviceAreas;
        break;
      default:
        break; // tenant
    }

    // const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8000";

    const response = await fetch(`${API_BASE}${getSignupPath()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { detail: "Server unreachable" };
      }
      throw new Error(errorData.detail || 'Signup failed');
    }

    const data = await response.json();
    console.log('Signup successful:', data);
    alert("Signup successful, please log in!");
    setIsLoginForm(true); // Switch to login
  } catch (error) {
    alert(error.message);
  } finally {
    setIsLoading(false);
  }
};

  // ---------------- Login ----------------

const handleLogin = async () => {
  const { email, password } = formData;
  setIsLoading(true);

  try {
    const response = await fetch(`${API_BASE}${getLoginPath()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include' // cookies
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { detail: "Server unreachable" };
      }
      throw new Error(errorData.detail || 'Login failed');
    }

    const data = await response.json();
    console.log("Login response:", data);

    // ✅ backend should always return a string now
    const role = data.role;

    // Navigate by role (left unchanged)
    switch (role) {
      case 'tenant':
        navigate('/home');
        break;
      case 'student':
        navigate('/student/dashboard');
        break;
      case 'landlord':
        navigate('/landlord/dashboard');
        break;
      case 'agent':
        navigate('/dashboard/home');
        break;
      default:
        navigate('/home');
    }
  } catch (error) {
    alert(error.message);
  } finally {
    setIsLoading(false);
  }
};























  //   const handleLogin = async () => {
//   const { email, password } = formData;
//   setIsLoading(true);

//   try {
//     const response = await fetch(`http://localhost:8000${getLoginPath()}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }),
//       credentials: 'include' // cookies
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.detail || 'Login failed');
//     }

//     const data = await response.json();
//     console.log("Login response:", data); // 🔎 log everything

//     // ✅ normalize role (backend sometimes sends object instead of string)
//     // let role = data.role;
//     // if (typeof role === "object" && role !== null) {
//     //   // fallback: if backend mistakenly returns agent object instead of "agent"
//     //   role = "agent";
//     // }

//     // ✅ Navigate based on role
//     switch (role) {
//       case 'tenant':
//         navigate('/');
//         break;
//       case 'student':
//         navigate('/student/dashboard');
//         break;
//       case 'landlord':
//         navigate('/landlord/dashboard');
//         break;
//       case 'agent':
//         navigate('/dashboard/home'); // make sure your route is lowercase!
//         break;
//       default:
//         navigate('/'); // fallback
//     }
//   } catch (error) {
//     alert(error.message);
//   } finally {
//     setIsLoading(false);
//   }
// };

  
  
  
  
  // const handleLogin = async () => {
  //   const { email, password } = formData;
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch(`http://localhost:8000${getLoginPath()}`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ email, password }),
  //       credentials: 'include' // cookies
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.detail || 'Login failed');
  //     }

  //     const data = await response.json();
  //     console.log(data.message); // "Login successful"
  //     navigate('/'); // Redirect to dashboard/home
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // ---------------- Role-specific fields ----------------
  const renderRoleFields = () => {
    switch (formData.role) {
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
        return null; // Tenant has no extra fields for now
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
