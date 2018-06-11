import React from 'react';
import { Link } from 'react-router-dom';
import BookingContainer from '../bookings/booking_container'
import CreateReviewContainer from '../reviews/create_review_container';
import ReviewIndexContainer from '../reviews/review_index_container';

class ListingShow extends React.Component {

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId)
  }

  render(){

    if (!this.props.listing) {
      return null;
    }

    let photos = this.props.listingPhotos.map((photo) =>
      <li key={photo.id}><img className="listing-photo" src={photo.image_url}></img></li>
    )

    return(
      <div className='listing-show-container'>
        <div className='listing-show-carousel'>
          <img className="listing-photo" src={this.props.listing.icon_url}></img>
          <ul className='listing-show-photos'>
            {photos}
          </ul>
        </div>



          <div className="listing-show-name">{this.props.listing.name}</div>
          <div className="listing-show-description">{this.props.listing.description}</div>

          <div className='listing-description-booking'>

              <ul className='listing-show-details'>
                <li>
                   <strong>{this.props.listing.address}</strong>
                </li>

                <li>
                  <strong>${this.props.listing.daily_cost}/night</strong>

                </li>

                <li>Maximum Guests:
                   <strong> {this.props.listing.max_guest}</strong>
                </li>

                <li>Check In After:
                   <strong> {this.props.listing.check_in_after}</strong>
                </li>


                <li>Check Out Before:
                   <strong> {this.props.listing.check_out_before}</strong>
                </li>
              </ul>


              <div className='booking-container'>
                <div><BookingContainer /></div>
              </div>

            </div>

          <Link to={`/listings/${this.props.listing.id}/review/new`}>Add a Review!</Link>
          <div><ReviewIndexContainer listingId={this.props.match.params.listingId}/></div>


      </div>
    );
  }
}



export default ListingShow;
