import React from 'react';
import './navbar.css';

function SideNavigationBar() {
  return (
    <div className="sidenav">
      <a href="/">Home</a>
      <a href="/workshop/:id">Workshops</a>
      <a href="/user/workshops">Registered</a>
      <a href="/attendence">Attendence</a>
      <a href="#contact">Contact</a>
      <a id="logout"href="">Logout</a>
      
    </div>
  );
}

export default SideNavigationBar;