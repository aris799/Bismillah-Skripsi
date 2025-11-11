import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'  // Ganti dari 'instant' ke 'auto'
    });
  }, [location]);  // Ubah dari location.pathname ke location keseluruhan

  return null;
};

export default ScrollToTop;
