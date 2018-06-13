import React from 'react';
import UserBookingItem from './user_booking_show';

class UserBooking extends React.Component {

  componentDidMount() {
    this.props.fetchBookings(this.props.currentUser)
  }

  render(){


    if (Object.values(this.props.bookings).length < 1) {
      return null;
    } else {
      console.log(this.props);
        const bookings = Object.values(this.props.bookings).map(booking => {
          return (
              <UserBookingItem
              key={booking.id}
              booking={booking}
              deleteBooking={this.props.deleteBooking}
              />
          		)
			}
		)

		return (
			<div>
				<ul>
					{bookings}
				</ul>
			</div>
		)
      }

  }
}

export default UserBooking;
