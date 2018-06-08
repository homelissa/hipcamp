import React from 'react';
import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';

const mSTP = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId]
});

const mDTP = dispatch => ({
  fetchListing: id => dispatch(fetchListing(id))
});

export default connect(
  mSTP,
  mDTP
)(ListingShow);
