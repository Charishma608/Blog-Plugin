import React, { useState } from 'react';


const AdminCreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

   
    const strippedContent = formData.content.replace(/<\/?[^>]+(>|$)/g, ""); 

    const newPost = { ...formData, content: strippedContent, date: new Date() };
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(savedPosts));

   
    setFormData({
      title: '',
      content: '',
      imageUrl: '',
    });

    alert('Post created successfully!');
  };

  return (
    <div className="create-post">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="input-field"
        />

       
        <div
          className="content-editor"
          contentEditable="true"
          name="content"
          placeholder="Write your post content here..."
          value={formData.content}
          onInput={(e) => setFormData({ ...formData, content: e.target.innerHTML })}
        />

        {/* Image URL Input */}
        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL (Optional)"
          value={formData.imageUrl}
          onChange={handleChange}
          className="input-field"
        />

        <button type="submit" className="submit-btn">Create Post</button>
      </form>
    </div>
  );
};

export default AdminCreatePost;
