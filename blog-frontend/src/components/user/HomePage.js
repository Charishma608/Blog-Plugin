import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './user.css';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <div className="home-page">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available. Please create a post!</p>
      ) : (
        <div className="post-list">
          {posts.map((post, index) => (
            <div key={index} className="post-item">
              <div className="post-header">
                <h3>{post.title}</h3>
              </div>
             
              <p>
                {post.content.length > 100 
                  ? `${post.content.slice(0, 100)}...` 
                  : post.content}
              </p>
              {post.imageUrl && <img src={post.imageUrl} alt="Post" className="post-image" />}
             
              <Link to={`/post/${index}`} className="read-more-btn">Read More</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
