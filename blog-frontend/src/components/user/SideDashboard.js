
import React from 'react';
import { Link } from 'react-router-dom';
import '../main/styles.css';  

const SideDashboard = () => {
  return (
    <div className="side-dashboard">
      <h2>User Dashboard</h2>
      <ul>
        <li><Link to="/dashboard/home">Home</Link></li>
        <li><Link to="/dashboard/create-post">Create Post</Link></li>
      </ul>
    </div>
  );
};

export default SideDashboard;
