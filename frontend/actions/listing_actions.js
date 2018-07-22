import * as APIUtil from '../util/listing_api_util';
import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveListing = listing => ({
  type: RECEIVE_LISTING,
  listing
});

const receiveSearchResults = (searchResults) => ({
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
});

export const fetchListings = (filters) => dispatch => (
  APIUtil.fetchListings(filters).then(listings => dispatch(receiveListings(listings)))
);

export const fetchListing = id => dispatch => (
  APIUtil.fetchListing(id).then(listing => dispatch(receiveListing(listing)))
);


export const searchListings = (query) => dispatch => (
  SearchAPIUtil.getListingByNeighborhood(query)
    .then((searchResults) => dispatch(receiveSearchResults(searchResults)))
);
