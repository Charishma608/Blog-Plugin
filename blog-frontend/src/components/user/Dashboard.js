
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideDashboard from './SideDashboard';
import HomePage from './HomePage';
import CreatePost from './CreatePost';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideDashboard />
      <div className="dashboard-content">
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="create-post" element={<CreatePost />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
