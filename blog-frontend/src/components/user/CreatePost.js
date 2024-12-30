import React, { useState } from 'react';
import './user.css';

const CreatePost = () => {
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

 
  const applyFormatting = (command, value = null) => {
    document.execCommand(command, false, value);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { ...formData, date: new Date() };

    
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.push({
      ...newPost,
      content: newPost.content.replace(/<\/?[^>]+(>|$)/g, "") 
    });
    localStorage.setItem('posts', JSON.stringify(savedPosts));

    
    setFormData({
      title: '',
      content: '',
      imageUrl: '',
    });
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

       
        <div className="toolbar">
          <button
            type="button"
            onClick={() => applyFormatting('bold')}
            title="Bold"
            className="toolbar-btn"
          >
            <b>B</b>
          </button>
          <button
            type="button"
            onClick={() => applyFormatting('italic')}
            title="Italic"
            className="toolbar-btn"
          >
            <i>I</i>
          </button>
          <button
            type="button"
            onClick={() => applyFormatting('underline')}
            title="Underline"
            className="toolbar-btn"
          >
            <u>U</u>
          </button>
          <button
            type="button"
            onClick={() => applyFormatting('justifyLeft')}
            title="Align Left"
            className="toolbar-btn"
          >
            L
          </button>
          <button
            type="button"
            onClick={() => applyFormatting('justifyCenter')}
            title="Align Center"
            className="toolbar-btn"
          >
            C
          </button>
          <button
            type="button"
            onClick={() => applyFormatting('justifyRight')}
            title="Align Right"
            className="toolbar-btn"
          >
            R
          </button>
          <button
            type="button"
            onClick={() => {
              const color = prompt('Enter color (name or hex):');
              if (color) {
                applyFormatting('foreColor', color);
              }
            }}
            title="Text Color"
            className="toolbar-btn"
          >
            <span style={{ color: 'black' }}>A</span>
          </button>
          <button
            type="button"
            onClick={() => {
              const link = prompt('Enter the URL to link:');
              if (link) {
                applyFormatting('createLink', link);
              }
            }}
            title="Insert Link"
            className="toolbar-btn"
          >
            Link
          </button>
          <button
            type="button"
            onClick={() => {
              const imageUrl = prompt('Enter the Image URL:');
              if (imageUrl) {
                const imgTag = `<img src="${imageUrl}" alt="Image" />`;
                document.execCommand('insertHTML', false, imgTag);
              }
            }}
            title="Insert Image"
            className="toolbar-btn"
          >
            Img
          </button>
        </div>

        
        <div
          className="content-editor"
          contentEditable="true"
          name="content"
          placeholder="Write your post content here..."
          value={formData.content}
          onInput={(e) => setFormData({ ...formData, content: e.target.innerHTML })}
        />

      
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

export default CreatePost;
