import React from 'react';
import { connect } from 'react-redux';
import { fetchReview, updateReview, deleteReview } from '../../actions/review_actions';
import { fetchListing } from '../../actions/listing_actions';
import EditReview from './edit_review';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => ({
  reviews: state.entities.reviews,
  review: state.entities.reviews[ownProps.match.params.reviewId],
  current_user: state.session.id,
  listing: state.entities.listings[ownProps.match.params.listingId],
  errors: state.errors.review,
});

const mDTP = dispatch => ({
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  updateReview: (listingId, review) => dispatch(updateReview(listingId, review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
  fetchListing: listingId => dispatch(fetchListing(listingId))
});

export default connect(
  mSTP,
  mDTP
)(withRouter(EditReview));
