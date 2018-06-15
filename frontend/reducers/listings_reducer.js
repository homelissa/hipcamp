import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';
import { REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      return merge({}, state, {[action.listing.id]: action.listing});
    case REMOVE_REVIEW:
      const newState = merge({}, state);
      let listing = newState[action.review.listing_id];
      let idx = listing.reviews.indexOf(action.review.id);
      listing.reviews.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};

export default listingsReducer;
