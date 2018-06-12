import React from 'react';
import { connect } from 'react-redux';
import { createBooking, receiveErrors } from '../../actions/booking_actions';
import Booking from './booking';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => ({
  bookings: state.entities.bookings,
  current_user: state.session.id,
  errors: state.errors.booking
});

const mDTP = dispatch => ({
  createBooking: bookingParams => dispatch(createBooking(bookingParams)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mSTP,
  mDTP
)(withRouter(Booking));
