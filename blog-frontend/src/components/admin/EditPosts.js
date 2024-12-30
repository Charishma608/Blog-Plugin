import React, { useState, useEffect } from 'react';
import './admin.css'; 

const EditPosts = () => {
  const [posts, setPosts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedPost, setEditedPost] = useState({ title: '', content: '' });

  
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  
  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

 
  const startEditing = (index) => {
    const postToEdit = posts[index];
    setEditedPost({ title: postToEdit.title, content: postToEdit.content });
    setEditingIndex(index);
  };

  
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedPost({
      ...editedPost,
      [name]: value,
    });
  };


  const saveEditedPost = () => {
    const updatedPosts = [...posts];
    updatedPosts[editingIndex] = editedPost;
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setEditingIndex(null);
    setEditedPost({ title: '', content: '' });
  };

  return (
    <div className="edit-posts-wrapper">
      <h2>Edit or Delete Posts</h2>

      {/* Displaying the posts */}
      {posts.map((post, index) => (
        <div key={index} className="post-item-wrapper">
          <div className="post-title-wrapper">
            <h3>{post.title}</h3>
            <div className="post-action-buttons">
              <button onClick={() => startEditing(index)} className="edit-post-btn">
                Edit
              </button>
              <button onClick={() => deletePost(index)} className="delete-post-btn">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Edit Form */}
      {editingIndex !== null && (
        <div className="edit-post-form-wrapper">
          <h3>Edit Post</h3>
          <input
            type="text"
            name="title"
            value={editedPost.title}
            onChange={handleEditChange}
            placeholder="Post Title"
          />
          <textarea
            name="content"
            value={editedPost.content}
            onChange={handleEditChange}
            placeholder="Post Content"
          />
          <button onClick={saveEditedPost} className="save-post-btn">
            Save Changes
          </button>
          <button onClick={() => setEditingIndex(null)} className="cancel-post-btn">
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default EditPosts;
