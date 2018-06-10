import React from 'react';
import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import Booking from './booking';

const mSTP = (state, ownProps) => ({
  bookings: state.entities.bookings
});

const mDTP = dispatch, ownProps => ({
  createBooking: bookingParams => dispatch(createBooking(bookingParams))
});

export default connect(
  mSTP,
  mDTP
)(Booking);
