import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import './user.css';

const PostDetails = () => {
  const { postId } = useParams(); 
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [reacts, setReacts] = useState({});

 
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const savedReacts = JSON.parse(localStorage.getItem('reacts')) || {};
    const savedComments = JSON.parse(localStorage.getItem('comments')) || {};

    setPost(savedPosts[postId]);
    setReacts(savedReacts);
    setComments(savedComments);
  }, [postId]);

 
  const handleReaction = (reactionType) => {
    const currentReacts = reacts[postId] || { like: 0, love: 0, funny: 0, heart: 0, support: 0 };
    currentReacts[reactionType] += 1;

    const updatedReacts = {
      ...reacts,
      [postId]: currentReacts,
    };

    setReacts(updatedReacts);
    localStorage.setItem('reacts', JSON.stringify(updatedReacts));
  };

 
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

 
  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;

    const postComments = comments[postId] || [];
    postComments.push(newComment);

    const updatedComments = {
      ...comments,
      [postId]: postComments,
    };

    setComments(updatedComments);
    setNewComment('');
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  
  const handleShare = () => {
    const link = `${window.location.origin}/post/${postId}`;
    navigator.clipboard
      .writeText(link)
      .then(() => alert('Link copied to clipboard!'))
      .catch(() => alert('Failed to copy the link.'));
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {post.imageUrl && <img src={post.imageUrl} alt="Post" className="post-image" />}

      <div className="reactions">
        <button onClick={() => handleReaction('like')}>👍 Like ({reacts[postId]?.like || 0})</button>
        <button onClick={() => handleReaction('love')}>❤️ Love ({reacts[postId]?.love || 0})</button>
        <button onClick={() => handleReaction('funny')}>😂 Funny ({reacts[postId]?.funny || 0})</button>
        <button onClick={() => handleReaction('heart')}>💖 Heart ({reacts[postId]?.heart || 0})</button>
        <button onClick={() => handleReaction('support')}>💪 Support ({reacts[postId]?.support || 0})</button>
      </div>

      <button onClick={handleShare} className="share-btn">Share</button>

      <div className="comments-section">
        <h4>Comments</h4>
        <div className="comments-list">
          {(comments[postId] || []).map((comment, i) => (
            <div key={i} className="comment">
              <p>{comment}</p>
            </div>
          ))}
        </div>

        <input
          type="text"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          className="comment-input"
        />
        <button onClick={handleCommentSubmit} className="comment-submit-btn">Post Comment</button>
      </div>
    </div>
  );
};

export default PostDetails;
