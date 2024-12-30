import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; 
import SideDashboard from './SideDashboard';
import HomePage from './HomePage';
import CreatePost from './CreatePost';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideDashboard />
      <div className="dashboard-content">
        <Routes>
          <Route index element={<HomePage />} /> 
          <Route path="home" element={<HomePage />} />
          <Route path="create-post" element={<CreatePost />} />
          
          <Route path="*" element={<Navigate to="home" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
