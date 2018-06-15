export const fetchBookings = currentUser => (
  $.ajax({
    method: 'GET',
    url: `api/bookings/${currentUser.id}`
  })
);


export const fetchBooking = id => (
  $.ajax({
    method: 'GET',
    url: `api/bookings/${id}`
  })
);

export const createBooking = bookingParams => (
  $.ajax({
    method: 'POST',
    url: `api/listings/${bookingParams.listing_id}/bookings`,
    data: {
      booking: {
        guest_id: bookingParams.guest_id,
        listing_id: bookingParams.listing_id,
        check_in: bookingParams.check_in,
        check_out: bookingParams.check_out,
        num_guest: bookingParams.num_guest,
        total_price: bookingParams.total_price

      }
    }
  })
);


export const deleteBooking = booking => (
  $.ajax({
    method: 'DELETE',
    url: `api/bookings/${booking.id}`
  })
);
