
import React from 'react';


const renderStars = n => {
    let stars = []
    for (let i = 0; i < n; i++)
        stars.push(<i key={i} style={{ color: 'red', fontSize: '20px' }} className="fa fa-star"></i>)
    return stars;
}

function Review({ value: reviewData }) {
    return (
        <div className="alert alert-warning">
            <span>{renderStars(reviewData.stars)}</span>
            &mdash;
            <span>{reviewData.author}</span>
            <hr />
            <div>{reviewData.body}</div>
        </div>
    );
}

export default Review;