import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; // Pastikan ini merujuk pada CSS yang benar

const Footer = () => {
  return (
    <footer className="footer">
      <div>&copy; 2025 SRSIK Hub. All rights reserved.</div>
      <div className="footer-links">
        <Link to="/privacy-policy">Kebijakan Privasi</Link>
        <span className="separator"> | </span>
        <Link to="/terms-and-conditions">Syarat & Ketentuan</Link>
      </div>
    </footer>
  );
};

export default Footer;