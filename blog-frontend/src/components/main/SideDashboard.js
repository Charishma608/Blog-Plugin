import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const SideDashboard = () => {
  return (
    <div className="side-dashboard">
      <h2>Blog Dashboard</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">User Registration</Link></li>
        <li><Link to="/login">User Login</Link></li>
        <li><Link to="/admin">Admin Login</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
      </ul>
    </div>
  );
};

export default SideDashboard;
