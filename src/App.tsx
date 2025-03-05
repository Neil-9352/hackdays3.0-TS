import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./components/Landing";
import EventShowcase from "./components/EventCard";
import Brochure from "./components/brochure";

/**
 * Component to handle Google Analytics page tracking on route changes
 */
const AnalyticsHandler = () => {
  const location = useLocation();

  useEffect(() => {
    sendPageView(location.pathname);
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<EventShowcase />} />
        <Route path="/brochure" element={<Brochure />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
