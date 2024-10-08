import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Dashboard</h1>
      <ul className="dashboard-menu">
        <li className="menu-item">
          <a href="/user/workshops">View Available Workshops</a>
        </li>
        <li className="menu-item">
          <a href="/user/resources">Access Post-Training Resources</a>
        </li>
      </ul>
    </div>

  );
};

export default UserDashboard;
