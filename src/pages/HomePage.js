import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';  // Import the CSS file

const HomePage = () => {
  return (
    <div className="icontainer">
      <h1 id="hedder">Welcome to the Workshop Manager</h1>
      <p>Select an option to continue:</p>
      <Link to="/admin">Admin Login</Link>
      <br />
      <Link to="/user">User Login</Link>
    </div>
  );
};

export default HomePage;
