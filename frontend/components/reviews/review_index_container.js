import React from 'react';
import { connect } from 'react-redux';
import { fetchReviews, fetchReview, deleteReview, updateReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => {

  return{
    reviews: state.entities.reviews,
    currentUser: state.session.id
  };
};

const mDTP = dispatch => ({
  fetchReviews: listingId => dispatch(fetchReviews(listingId)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
  updateReview: (listingId, review) => dispatch(updateReview(listingId, review))
});

export default connect(
  mSTP,
  mDTP
)(withRouter(ReviewIndex));
