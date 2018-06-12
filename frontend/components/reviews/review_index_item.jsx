import React from 'react';
import { Link } from 'react-router-dom';


const ReviewIndexItem = ({review, currentUser, deleteReview, updateReview}) => {
  debugger
  const listingId = review.listing_id;

  if (review.user.id === currentUser) {
    return (
      <div className='review-index-item'>

        <div className='review-item-values'>
          <div className='review-user-name'>{review.user.first_name}</div>
          <div className='review-user-created-date'>{review.created_at}</div>
          <div className='reivew-user-description'>{review.description}</div>
        </div>

        <div>
          <Link className='edit-review-link' to={`/listings/${listingId}/reviews/${review.id}`}>Edit</Link>
          <li><button className='delete-review-button' onClick={() => deleteReview(review.id)}>Delete</button></li>
        </div>
      </div>
    )

  } else {
    return (
      <div className='review-index-item'>

        <div className='review-item-values'>
          <li className='review-user-name'>{review.user.first_name}</li>
          <li className='review-user-created-date'>{review.created_at}</li>
          <li className='review-user-description'>{review.description}</li>
        </div>

      </div>
    )
  }


};





export default ReviewIndexItem;
