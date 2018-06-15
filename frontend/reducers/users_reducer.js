import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { REMOVE_BOOKING, RECEIVE_BOOKING } from '../actions/booking_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case REMOVE_BOOKING:
      const newState = merge({}, state);
      let user = newState[action.booking.guest_id];
      let idx = user.bookings.indexOf(action.booking.id);
      user.bookings.splice(idx, 1);
      return newState;
    case RECEIVE_BOOKING:
      const nState = merge({}, state);
      let nUser = nState[action.booking.guest_id];
      nUser.bookings.push(action.booking);
      return nState;
    default:
      return state;
  }
};

export default usersReducer;
