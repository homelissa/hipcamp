import React from 'react';
import { Link } from 'react-router-dom';

const UserBookingItem = ({booking, deleteBooking}) => (

  <div>
      <div className='user-booking-container'>
        <div className='booking-name-photo'>
          <div className='booking-listing-name'>{booking.listing.name}</div>
          <img className="listing-photo" src={booking.listing.icon_url}></img>
        </div>
        <div className='booking-detail-labels'>
          <div>Booking Status: </div>
          <div>Booking Request Check In: </div>
          <div>Booking Request Check Out: </div>
        </div>

        <div className='booking-details'>
          <div className='booking-status'>{booking.status}</div>
          <div>{booking.check_in}</div>
          <div>{booking.check_out}</div>
          <button className='user-booking-delete' onClick={() => deleteBooking(booking.id)}>Delete</button>
        </div>
      </div>
  </div>
);

export default UserBookingItem;
