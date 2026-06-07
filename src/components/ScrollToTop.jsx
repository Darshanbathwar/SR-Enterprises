// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render any UI
  return null;
};

export default ScrollToTop;