import { RECEIVE_LISTINGS } from '../actions/listing_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    default:
      return state;
  }
};

export default listingsReducer;
