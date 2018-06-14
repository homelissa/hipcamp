import React from 'react';
import { connect } from 'react-redux';
import { fetchBookings, deleteBooking} from '../../actions/booking_actions';
import UserBooking from './user_booking';

const mSTP = (state, ownProps) => ({
  bookings: state.entities.bookings,
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  fetchBookings: currentUser => dispatch(fetchBookings(currentUser)),
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(
  mSTP,
  mDTP
)(UserBooking);
