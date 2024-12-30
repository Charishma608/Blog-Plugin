import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setMessage('Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000); 
      } else {
        setMessage(data.message || 'Registration failed.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="hero-section">
        <img
          src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Blog"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Register</h1>
          <p>Create an account to access the blog and start sharing!</p>
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
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
          <button type="submit" className="submit-btn">Register</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
