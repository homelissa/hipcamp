import React from 'react';
import UserBookingItem from './user_booking_show';

class UserBooking extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookings(this.props.currentUser)
  }

  render(){


    if (Object.values(this.props.bookings).length < 1) {
      return (
        <div className='user-booking-header'>
          <div className='user-booking-first-name'>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</div>
          <ul className='user-booking-profile'>
            <li className='user-booking-verified'>Verified Hipcamper</li>
            <li className='user-booking-from'>Where are you from?</li>
            <li className='user-booking-edit-profile'>Edit profile</li>
          </ul>

          <div className='user-booking-upcoming-trips'>Upcoming trips</div>
          <div className='user-num-bookings'>{this.props.currentUser.bookings.length} Booking Requests</div>
        </div>

      )
    } else {
      console.log(this.props);
        const bookings = Object.values(this.props.bookings).map(booking => {
          return (
              <UserBookingItem
              key={booking.id}
              booking={booking}
              currentUser={this.props.currentUser}
              deleteBooking={this.props.deleteBooking}
              />
          		)
			}
		)

		return (
			<div>

        <div className='user-booking-header'>
          <div className='user-booking-first-name'>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</div>
          <ul className='user-booking-profile'>
            <li className='user-booking-verified'>Verified Hipcamper</li>
            <li className='user-booking-from'>Where are you from?</li>
            <li className='user-booking-edit-profile'>Edit profile</li>
          </ul>

          <div className='user-booking-upcoming-trips'>Upcoming trips</div>
          <div className='user-num-bookings'>{this.props.currentUser.bookings.length} Booking Requests</div>
        </div>


				<ul>
					{bookings}
				</ul>
			</div>
		)
      }

  }
}

export default UserBooking;
