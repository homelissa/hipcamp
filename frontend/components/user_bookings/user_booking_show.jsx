import React from 'react';
import { Link } from 'react-router-dom';

const UserBookingItem = ({booking, deleteBooking}) => (
  <li>
    {booking.check_in}
    {booking.check_out}
    <button onClick={() => deleteBooking(booking.id)}>Delete</button>
  </li>
);

export default UserBookingItem;
