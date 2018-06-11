import React from 'react';
import { connect } from 'react-redux';
import { fetchReview, updateReview, deleteReview } from '../../actions/review_actions';
import EditReview from './edit_review';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => ({
  review: state.entities.reviews[ownProps.match.params.reviewId],
  current_user: state.session.id
});

const mDTP = dispatch => ({
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  updateReview: (listingId, review) => dispatch(updateReview(listingId, review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(
  mSTP,
  mDTP
)(withRouter(EditReview));
