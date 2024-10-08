import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import LoginPage from './pages/LoginPage';
import WorkshopList from './pages/WorkshopList';
import WorkshopDetail from './pages/WorkshopDetail';
import Navbar from './pages/navbar';
import Attendence from './pages/Attendence';

function App() {
  const location = useLocation(); // Use useLocation to get the current path

  return (
    <div>
      {/* Conditionally render Navbar, except on the home page ("/") */}
      {location.pathname !== '/' && <Navbar />}
      <div style={{ display: 'flex' }}>
        <div style={{ marginLeft: '300px', padding: '20px', flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<LoginPage userType="admin" />} />
            <Route path="/user" element={<LoginPage userType="user" />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/workshops" element={<WorkshopList />} />
            <Route path="/workshop/:id" element={<WorkshopDetail />} />
            <Route path="/attendence" element={<Attendence />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
