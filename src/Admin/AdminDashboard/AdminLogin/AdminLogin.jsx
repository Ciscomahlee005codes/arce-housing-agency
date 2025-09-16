import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

// API URL from VITE env
const API_BASE = import.meta.env.VITE_API_URL;

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "admin", // 🔒 fixed role
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    const { email, password } = formData;
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE}/auth/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { detail: "Server unreachable" };
        }
        throw new Error(errorData.detail || "Login failed");
      }

      const data = await response.json();
      console.log("Admin Login response:", data);

      if (data.role !== "admin") {
        throw new Error("Access denied. Only Admins can login.");
      }

      alert("Welcome Admin 🚀");
      navigate("/admin/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image"></div>
      <div className="auth-form login-mode">
        <AnimatePresence mode="wait">
          <motion.div
            key="admin-login"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="form-box"
          >
            <h2>Admin Login</h2>
            <input
              name="email"
              type="email"
              placeholder="Admin Email"
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
              {isLoading ? "Signing in..." : "Login"}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminLogin;
