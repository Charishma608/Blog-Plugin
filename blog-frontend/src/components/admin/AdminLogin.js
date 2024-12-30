import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../main/styles.css'; 

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('http://localhost:5000/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setMessage('Admin login successful!');
        navigate('/admin-dashboard'); 
      } else {
        setMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="hero-section">
        <img
          src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Blog"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Admin Login</h1>
          <p>Login to access the admin panel and manage the blog.</p>
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="input-field"
          />
          <button type="submit" className="submit-btn">Login</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;
