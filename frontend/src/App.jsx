import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

const App = () => {
    const [username, setUsername] = useState('');
    const [sessionId, setSessionId] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/comments');
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const handleLogin = async () => {
        if (!username.trim()) {
            alert("Username cannot be empty.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username });
            setSessionId(response.data.sessionId);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleAddComment = async () => {
        if (!commentText.trim()) {
            alert("Comment cannot be empty.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/comments', {
                username,
                comment: commentText,
                sessionId // Include the sessionId in the request
            });
            setComments((prevComments) => [...prevComments, response.data]);
            setCommentText('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const handleDeleteAllComments = async () => {
        try {
            await axios.delete('http://localhost:5000/api/comments'); // Assume your API has this endpoint
            setComments([]); // Clear the comments from the state
        } catch (error) {
            console.error('Error deleting comments:', error);
        }
    };

    return (
        <div className="app-container">
            {!sessionId ? (
                <div className="login-container">
                    <h3>Welcome! Enter your username</h3>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="input-field"
                    />
                    <button onClick={handleLogin} className="button login-button">Login</button>
                </div>
            ) : (
                <div className="comments-container">
                    <h3>Comments</h3>
                    <div className="comment-input-container">
                        <input
                            type="text"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            placeholder="Write a comment..."
                            className="input-field"
                        />
                        <button onClick={handleAddComment} className="button comment-button">Add Comment</button>
                    </div>
                    <div className="comments-list">
                        {comments.map((comment) => (
                            <div key={comment.id} className="comment">
                                <strong>{comment.username}</strong>: {comment.comment}
                            </div>
                        ))}
                    </div>
                    <button onClick={handleDeleteAllComments} className="button delete-button">Delete All Comments</button>
                </div>
            )}
        </div>
    );
};

export default App;
