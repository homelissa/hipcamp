import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});


export const fetchListings = () => dispatch => (
  APIUtil.fetchListings().then(listings => dispatch(receiveListings(listings)))
);

export const fetchListing = id => dispatch => (
  APIUtil.fetchListing(id).then(listing => dispatch(receiveListing(listing)))
);

// export const searchListingsByAddress = searchByAddress => dispatch => (
//   APIUtil.searchListingsByAddress(searchByAddress).then(payload => dispatch(receiveListings(payload)))
// );
//
// export const searchListingsByAllowPets = searchByAllowPets => dispatch => (
//   APIUtil.searchListings(searchByAllowPets).then(payload => dispatch(receiveListings(payload)))
// );
//
// export const searchListingsByIsCamping = searchByIsCamping => dispatch => (
//   APIUtil.searchListingsByIsCamping(searchByIsCamping).then(payload => dispatch(receiveListings(payload)))
// );
//
// export const searchListingsByUnderFifty = searchByUnderFifty => dispatch => (
//   APIUtil.searchListings(searchByUnderFifty).then(payload => dispatch(receiveListings(payload)))
// );
