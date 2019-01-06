import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const removeBooking = booking => ({
  type: REMOVE_BOOKING,
  booking
});

export const receiveErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const createBooking = bookingParams => dispatch => (
  APIUtil.createBooking(bookingParams).then(booking => (
    dispatch(receiveBooking(booking))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))

);

export const deleteBooking = booking => dispatch => (
  APIUtil.deleteBooking(booking).then(booking => dispatch(removeBooking(booking)))
);

export const fetchBookings = (currentUser) => dispatch => (
  APIUtil.fetchBookings(currentUser).then(bookings => dispatch(receiveBookings(bookings)))
);
