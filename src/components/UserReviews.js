import React, { useState } from 'react';

// Function to generate a random user review
const generateRandomReview = () => {
  const users = ['Saad','Asif','Arshil'];
  const comments = [
    'This product is amazing! I loved it.',
    'Pretty good, but there are some issues.',
    'Not bad, but I expected more.',
    'Could use some improvements.',
    'Best purchase I’ve made in a while!',
  ];
  const randomUser = users[Math.floor(Math.random() * users.length)];
  const randomRating = Math.floor(Math.random() * 5) + 1; // Random rating between 1 and 5
  const randomComment = comments[Math.floor(Math.random() * comments.length)];

  return { id: Date.now(), user: randomUser, rating: randomRating, comment: randomComment };
};

const reviewsData = [
  { id: 1, user: 'Saad', rating: 5, comment: 'Excellent product, highly recommend!' },
  { id: 2, user: 'Asif', rating: 4, comment: 'Very good, but could be improved.' },
  { id: 3, user: 'Arshil', rating: 3, comment: 'Average experience.' },
  { id: 4, user: 'Fazil', rating: 2, comment: 'Not as expected, quite disappointed.' },
];

const UserReviews = () => {
  const [reviews, setReviews] = useState([...reviewsData, generateRandomReview()]); // Add a random review

  return (
    <div className="reviews-container">
      <h2>User Reviews</h2> 
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="review">
            <h3>{review.user}</h3>
            <div className="rating">Rating: {review.rating} / 5</div>
            <p>{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default UserReviews;
