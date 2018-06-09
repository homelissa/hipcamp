import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';
import listingPhotosReducer from './listing_photos_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  listingPhotos: listingPhotosReducer
});

export default entitiesReducer;
