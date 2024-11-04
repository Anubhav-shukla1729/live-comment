import React from 'react';

const CommentList = ({ comments }) => {
    return (
        <div style={{ marginBottom: '60px' }}> {/* To make space for the fixed input bar */}
            <h3>Comments</h3>
            {comments.map((comment) => (
                <p key={comment.id}>
                    <strong>{comment.username}:</strong> {comment.comment}
                </p>
            ))}
        </div>
    );
};

export default CommentList;
