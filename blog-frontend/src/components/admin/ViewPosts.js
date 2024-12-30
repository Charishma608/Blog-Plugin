import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 


const ViewPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <div className="view-posts">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div className="post-list">
          {posts.map((post, index) => (
            <div key={index} className="post-item">
              <div className="post-header">
                <h3>{post.title}</h3>
              </div>
              <p>{post.content.slice(0, 100)}...</p> 
              {post.imageUrl && <img src={post.imageUrl} alt="Post" className="post-image" />}
              
              <Link to={`/post/${index}`} className="read-more-btn">Read More</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewPosts;
