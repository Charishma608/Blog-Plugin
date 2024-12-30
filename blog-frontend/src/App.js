import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/main/UserRegistration';
import Login from './components/main/UserLogin';
import Home from './components/main/Home';
import SideDashboard from './components/main/SideDashboard';
import FAQs from './components/main/FAQs';
import AdminLogin from './components/admin/AdminLogin';
import Dashboard from './components/user/Dashboard';
import PostDetails from './components/user/PostDetails';
import ViewPosts from './components/admin/ViewPosts';
import EditPosts from './components/admin/EditPosts';
import CreatePost from './components/admin/CreatePost';
import AdminDashboard from './components/admin/AdminDashboard';




const App = () => {
  return (
    <Router>
    <div className="app-container">
        <SideDashboard />
        <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/post/:postId/*" element={<PostDetails />} />
        
       
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/view-posts" element={<ViewPosts />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-posts" element={<EditPosts />} />
       
      </Routes>
      </div>
      </div>
    </Router>
  );
};

export default App;
