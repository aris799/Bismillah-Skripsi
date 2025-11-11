import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollReset = () => {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll dengan multiple method
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);
};

export default useScrollReset;
