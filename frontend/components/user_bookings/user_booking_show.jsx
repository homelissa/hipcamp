import React from 'react';
import { Link } from 'react-router-dom';

const UserBookingItem = ({booking, deleteBooking, currentUser}) => (

  <div>



      <div className='user-booking-container'>

        <Link to={`/listings/${booking.listing.id}`}>
          <div className='booking-name-photo'>
            <div className='booking-listing-name'>{booking.listing.name}</div>
            <img className="user-booking" src={booking.listing.icon_url}></img>
          </div>
        </Link>


        <div className='booking-detail-labels'>
          <li>Booking Status: </li>
          <li>Check In: </li>
          <li>Check Out: </li>
          <li>Number of Guests: </li>
        </div>

        <div className='booking-details'>
          <li className='booking-status'>{booking.status}</li>
          <li>{booking.check_in}</li>
          <li>{booking.check_out}</li>
          <li>{booking.num_guest}</li>
          <button className='user-booking-delete' onClick={() => deleteBooking(booking)}>Delete Booking Request</button>
        </div>
      </div>
  </div>
);

export default UserBookingItem;
