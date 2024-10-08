import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><a href="/admin/workshops">Manage Workshop Schedules</a></li>
        <li><a href="/admin/registrations">Manage Registrations</a></li>
        <li><a href="/admin/materials">Upload Training Materials</a></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
