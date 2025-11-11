import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { toast } from 'react-toastify'; 
import axios from 'axios'; 
import '../styles/Header.css'; 

const Header = () => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('auth')) || '');
  const [username, setUsername] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const fetchUsername = async () => {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get('http://localhost:3000/api/v1/dashboard', axiosConfig);
      setUsername(response.data.msg);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
    toast.success('Logged out successfully');
  };

  useEffect(() => {
    if (token === '') {
      navigate('/login');
      toast.warn('Please login to access dashboard');
    } else {
      fetchUsername();
    }
  }, [token, navigate]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/dashboard">
          <img src="https://res.cloudinary.com/diogvlobw/image/upload/v1762342306/srsik-white_hefdxh.png" alt="Logo" />
        </Link>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/guide">Guide</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li> {/* Rute ke Contact Us harus lowercase */}
        </ul>
      </nav>

      <div className="user-area">
        <span className="username">{username}</span>
        <button onClick={handleLogout} className="logout-btn">
          <img src="https://res.cloudinary.com/diogvlobw/image/upload/v1762380805/log-out_rk0sao.svg" alt="Logout" />
        </button>
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <ul>
            <li><Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/explore" onClick={() => setIsMobileMenuOpen(false)}>Explore</Link></li>
            <li><Link to="/guide" onClick={() => setIsMobileMenuOpen(false)}>Guide</Link></li>
            <li><Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li> {/* Rute untuk dropdown */}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;