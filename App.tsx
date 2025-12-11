import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AddPerson from './pages/AddPerson';
import Invite from './pages/Invite';
import Footer from './components/Footer';
import { TreeProvider } from './context/TreeContext';

const AppContent = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard' || location.pathname === '/add-person' || location.pathname === '/invite';

  return (
    <div className={`flex flex-col min-h-screen ${isDashboard ? 'bg-[#f0f4f8] dark:bg-[#111]' : ''}`}>
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
    <TreeProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </TreeProvider>
  );
};

export default App;
