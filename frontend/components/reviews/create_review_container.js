import React from 'react';
import { connect } from 'react-redux';
import { fetchReviews, fetchReview, createReview, updateReview, deleteReview } from '../../actions/review_actions';
import { fetchListing } from '../../actions/listing_actions';
import CreateReview from './create_review';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => ({
  reviews: state.entities.reviews,
  current_user: state.session.id,
  errors: state.errors.review,
  listing: state.entities.listings[ownProps.match.params.listingId]
});

const mDTP = dispatch => ({
  fetchReviews: listingId => dispatch(fetchReviews(listingId)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  createReview: (listingId, review) => dispatch(createReview(listingId, review)),
  updateReview: (listingId, review) => dispatch(updateReview(listingId, review)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
  fetchListing: listingId => dispatch(fetchListing(listingId))
});

export default connect(
  mSTP,
  mDTP
)(withRouter(CreateReview));
