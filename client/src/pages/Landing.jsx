import React from 'react';
import "../styles/Landing.css";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='landing-main'>
      <img 
        src="https://res.cloudinary.com/diogvlobw/image/upload/v1762062126/Logo_SRSIK_Horizontal-x_vehgyz.png" 
        alt="Logo SRSIK" 
        className="landing-logo" 
      />
      <h1>Mulai Skripsi Lebih Mudah</h1>
      <p>Bangun skripsi yang lebih terarah dengan rekomendasi cerdas dari SRSIK Hub. <br /> Masuk atau daftar untuk memulai perjalanan akademik Anda.</p>
      <Link to="/login" className="landing-login-button">Login</Link>
      <Link to="/register" className="landing-register-button">Register</Link>
    </div>
  );
}

export default Landing;
