import React from 'react';
import { connect } from 'react-redux';
import { fetchReviews, fetchReview, createReview, updateReview, deleteReview } from '../../actions/review_actions';
import CreateReview from './create_review';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => ({
  reviews: state.entities.reviews,
  current_user: state.session.id
});

const mDTP = dispatch => ({
  fetchReviews: listingId => dispatch(fetchReviews(listingId)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  createReview: (listingId, review) => dispatch(createReview(listingId, review)),
  updateReview: (listingId, review) => dispatch(updateReview(listingId, review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(
  mSTP,
  mDTP
)(withRouter(CreateReview));
