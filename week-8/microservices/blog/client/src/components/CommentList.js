import React from 'react';

const CommentList = ({ comments }) => {
    const renderedComments = comments.map(comment => {
        let content = comment.content;
        return <li key={comment.id}>{content}</li>;
    });

    return <ul>{renderedComments}</ul>;
};

export default CommentList;