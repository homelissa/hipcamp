import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';
import listingPhotosReducer from './listing_photos_reducer';
import bookingsReducer from './booking_reducers';
import reviewsReducer from './review_reducers';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  listingPhotos: listingPhotosReducer,
  bookings: bookingsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;
