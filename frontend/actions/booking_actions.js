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

export const removeBooking = id => ({
  type: REMOVE_BOOKING,
  id
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

export const deleteBooking = id => dispatch => (
  APIUtil.deleteBooking(id).then(booking => dispatch(removeBooking(id)))
);

export const fetchBookings = (currentUser) => dispatch => (
  APIUtil.fetchBookings(currentUser).then(bookings => dispatch(receiveBookings(bookings)))
);
