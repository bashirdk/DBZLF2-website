// components/PageTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// // Initialize GA4 once outside component rendering
// ReactGA.initialize('G-9YGRTR4JP0'); 

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview on route change
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title,
    });
  }, [location]);

  return null;
};

export default PageTracker;