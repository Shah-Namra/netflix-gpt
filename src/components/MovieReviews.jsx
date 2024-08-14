import React from 'react';

const MovieReviews = ({ reviews }) => {
    if (!reviews || reviews.length === 0) return <p>No reviews available.</p>;

    return (
        <div>
            {reviews.map((review) => (
                <div key={review.id} className="mb-4 p-4 border-b border-gray-300">
                    <h3 className="text-lg font-semibold">{review.author}</h3>
                    <p>{review.content}</p>
                </div>
            ))}
        </div>
    );
};

export default MovieReviews;
