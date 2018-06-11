import React from 'react';
import { connect } from 'react-redux';
import { fetchReviews, fetchReview, deleteReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => {

  return{
    reviews: state.entities.reviews
  };
};

const mDTP = dispatch => ({
  fetchReviews: listingId => dispatch(fetchReviews(listingId)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(
  mSTP,
  mDTP
)(withRouter(ReviewIndex));
