import React from 'react';
import { Link } from 'react-router-dom';


const ReviewIndexItem = ({review, currentUser, deleteReview, updateReview}) => {

  const listingId = review.listing_id;

  if (review.user.id === currentUser) {
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
      <Link to={`/listings/${listingId}/reviews/${review.id}`}>Edit</Link>
      <li><button onClick={() => deleteReview(review.id)}>Delete</button></li>
      </div>
      </div>
    )

  } else {
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
      </div>
      </div>
    )
  }


};





export default ReviewIndexItem;
