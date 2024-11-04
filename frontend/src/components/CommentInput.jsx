import React, { useState } from 'react';

const CommentInput = ({ onAddComment }) => {
    const [commentText, setCommentText] = useState('');

    const handleSubmit = () => {
        if (commentText.trim()) {
            onAddComment(commentText);
            setCommentText(''); // Clear the input field
        }
    };

    return (
        <div style={{ position: 'fixed', bottom: 0, width: '100%', padding: '10px', backgroundColor: '#f8f8f8' }}>
            <input
                type="text"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment"
                style={{ width: '70%', marginRight: '10px' }}
            />
            <button onClick={handleSubmit}>Add Comment</button>
        </div>
    );
};

export default CommentInput;
