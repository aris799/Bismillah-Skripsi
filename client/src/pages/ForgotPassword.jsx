import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

// Konfigurasi Axios Global
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const ForgotPassword = () => {
  // Kembalikan state untuk toggle password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

const handleForgotPasswordSubmit = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const newPassword = e.target.newPassword.value;
  const confirmPassword = e.target.confirmPassword.value;

  // Validasi Input
  if (!email || !newPassword || !confirmPassword) {
    toast.error("Harap isi semua field");
    return;
  }

  if (newPassword !== confirmPassword) {
    toast.error("Password tidak cocok");
    return;
  }

  try {
    console.log('Sending Forgot Password Request:', {
      email: email,
      // Jangan log password untuk keamanan
      passwordLength: newPassword.length
    });

    const response = await axios.post("/api/v1/forgot-password", { 
      email,   
      newPassword 
    });

    console.log('Forgot Password Full Response:', {
      status: response.status,
      data: response.data
    });

    toast.success(response.data.msg);
    navigate("/login");
  } catch (err) {
    console.error('Forgot Password Error Details:', {
      responseData: err.response?.data,
      responseStatus: err.response?.status,
      message: err.message,
      config: err.config
    });

    const errorMsg = err.response?.data?.msg || 'Terjadi kesalahan saat reset password';
    toast.error(errorMsg);
  }
};


  return (
    <div className="login-main">
      <div className="login-left">
        <img 
          src="https://res.cloudinary.com/diogvlobw/image/upload/v1762062126/Logo_SRSIK_Vertical_da5k1s.png" 
          alt="Logo SRSIK" 
          className="login-image"
        />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Reset Password</h2>
            <p>Enter your email and new password</p>
            <form onSubmit={handleForgotPasswordSubmit}>
              <input 
                type="email" 
                placeholder="Email" 
                name="email" 
                required 
              />
              
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  name="newPassword"
                  required
                  minLength="6"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>

              <div className="pass-input-div">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required
                  minLength="6"
                />
                {showConfirmPassword ? (
                  <FaEyeSlash
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                ) : (
                  <FaEye
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                )}
              </div>

              <div className="login-center-buttons">
                <button type="submit">Reset Password</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Remember your password? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
