import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentInput from './CommentInput';

const CommentApp = () => {
    const [username, setUsername] = useState('');
    const [sessionId, setSessionId] = useState(null);
    const [comments, setComments] = useState([]);

    // Fetch comments initially
    useEffect(() => {
        fetchComments();
    }, []);

    // Function to fetch comments
    const fetchComments = async () => {
        try {
            const response = await axios.get('/api/comments');
            setComments(response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    // Handle login and session ID generation
    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', { username });
            setSessionId(response.data.sessionId);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    // Handle new comment submission and update comment list
    const handleAddComment = async (commentText) => {
        try {
            const response = await axios.post('/api/comments', { username, comment: commentText });
            setComments((prevComments) => [...prevComments, response.data]);
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div>
            {!sessionId ? (
                <div>
                    <h3>Enter your username</h3>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <h3>Welcome, {username}!</h3>
                    <CommentInput onAddComment={handleAddComment} />
                    <CommentList comments={comments} />
                </div>
            )}
        </div>
    );
};

export default CommentApp;
