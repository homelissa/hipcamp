import React from 'react';
import { Link } from 'react-router-dom';

const UserBookingItem = ({booking, deleteBooking, currentUser}) => (

  <div>

      <div className='user-booking-container'>
        <div className='booking-name-photo'>
          <div>{currentUser.first_name}</div>
          <div>{currentUser.bookings.length}</div>
          <div className='booking-listing-name'>{booking.listing.name}</div>
          <img className="listing-photo user-booking" src={booking.listing.icon_url}></img>
        </div>
        <div className='booking-detail-labels'>
          <li>Booking Status: </li>
          <li>Check In: </li>
          <li>Check Out: </li>
        </div>

        <div className='booking-details'>
          <li className='booking-status'>{booking.status}</li>
          <li>{booking.check_in}</li>
          <li>{booking.check_out}</li>
          <button className='user-booking-delete' onClick={() => deleteBooking(booking.id)}>Delete Booking Request</button>
        </div>
      </div>
  </div>
);

export default UserBookingItem;
