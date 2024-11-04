// src/components/Comments.jsx
import React, { useState } from 'react';
import axios from 'axios';
import CommentList from './CommentList';

const Comments = () => {
    const [username, setUsername] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [comment, setComment] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username });
            setSessionId(response.data.sessionId);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const handleSubmitComment = async (e) => {
        e.preventDefault();
        if (!comment) return;

        try {
            await axios.post('http://localhost:5000/api/comments', {
                username,
                comment,
            });
            setComment('');
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    return (
        <div>
            {!sessionId ? (
                <div>
                    <h2>Login</h2>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            ) : (
                <div>
                    <h2>Welcome, {username}!</h2>
                    <form onSubmit={handleSubmitComment}>
                        <input
                            type="text"
                            placeholder="Write a comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button type="submit">Submit</button>
                    </form>
                    <CommentList sessionId={sessionId} />
                </div>
            )}
        </div>
    );
};

export default Comments;
