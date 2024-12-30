import React from 'react';
import './styles.css'; 

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <img
          src="https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Blog"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Welcome to the Blog!</h1>
          <p>Stay updated with the latest posts and trends.</p>
        </div>
      </div>
      <div className="content">
        <p className="intro-text">
          This is the home page.
          <br />
          <br />
          Dive into the world of blogging, where you can share your thoughts, read
          interesting posts, and engage with a community of like-minded individuals.
        </p>
      </div>
    </div>
  );
};

export default Home;
