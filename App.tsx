import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AddPerson from './pages/AddPerson';
import Invite from './pages/Invite';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();
  // Dashboard handles its own layout structure (full screen with sidebar), so we might want to exclude standard footer/margins if needed.
  // However, based on wireframes, Dashboard has a specific layout.
  
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className={`flex flex-col min-h-screen ${isDashboard ? 'h-screen overflow-hidden' : ''}`}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-person" element={<AddPerson />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
      
      {!isDashboard && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;