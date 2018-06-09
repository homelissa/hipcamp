import { RECEIVE_LISTING } from '../actions/listing_actions';
import merge from 'lodash/merge';

const listingPhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTING:
      return action.listing.listing_photos;
    default:
      return state;
  }
};

export default listingPhotosReducer;
