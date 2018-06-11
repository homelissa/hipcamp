import React from 'react';
import { Link } from 'react-router-dom';


const ReviewIndexItem = ({review, deleteReview}) => {
  return (
    <div className='review-index-item'>
      <div className='review-item-labels'>
        <div>Review Author: </div>
        <div>Review Date: </div>
        <div>Review Description: </div>
      </div>
      <div className='review-item-values'>
        <div>{review.user.first_name}</div>
        <div>{review.created_at}</div>
        <div>{review.description}</div>
        <button onClick={() => deleteReview(review.id)}>Delete</button>
      </div>
    </div>
  )
};





export default ReviewIndexItem;
