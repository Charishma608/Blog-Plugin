import React from 'react';
import { Link } from 'react-router-dom'; 
import '../user/user.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <main className="content">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>Select an option from the boxes below to manage posts.</p>
        
       
        <div className="link-box-container">
          <div className="link-box">
            <Link to="/view-posts">View All Posts</Link>
          </div>
          <div className="link-box">
            <Link to="/create-post">Create Post</Link>
          </div>
          <div className="link-box">
            <Link to="/edit-posts">Edit/Delete Posts</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
