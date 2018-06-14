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

    if (this.props.currentUser) {
      return(

        <div className='listing-show-container'>
        <div className='listing-show-carousel'>
        <img className="listing-photo" src={this.props.listing.icon_url}></img>
        <ul className='listing-show-photos'>
        {photos}
        </ul>
        </div>



        <div className="listing-show-name">{this.props.listing.name}</div>
        <div className='listing-description-booking'>

          <div className='host-listing-description'>
            <div className='host-information'>
              <div className='host-name-label'>Hosted By:</div>
              <div>{this.props.listing.host_name}</div>
            </div>


            <div className="listing-show-description">{this.props.listing.description}</div>
          </div>


          <div className='booking-container'>
            <div><BookingContainer /></div>
          </div>

        </div>


        <ul className='listing-show-details'>
        <div className='listing-show-label'>Details:</div>

        <div className='listing-show-values'>
        <li>
        <strong>{this.props.listing.address}</strong>
        </li>

        <li>
        <strong>${this.props.listing.daily_cost}/night</strong>

        </li>


        <li>Check In After:
        <strong> {this.props.listing.check_in_after}</strong>
        </li>


        <li>Check Out Before:
        <strong> {this.props.listing.check_out_before}</strong>
        </li>
        </div>
        </ul>



        <div className='listing-review-container'>
        <div>{this.props.listing.reviews.length}</div>
        <div className="review-label">Reviews</div>
        <div className='add-review-label'><Link to={`/listings/${this.props.listing.id}/review/new`}>Add a Review!</Link></div>
        </div>
        <div><ReviewIndexContainer listingId={this.props.match.params.listingId}/></div>


        </div>
      );

    } else {
      return(

        <div className='listing-show-container'>
        <div className='listing-show-carousel'>
        <img className="listing-photo" src={this.props.listing.icon_url}></img>
        <ul className='listing-show-photos'>
        {photos}
        </ul>
        </div>



        <div className="listing-show-name">{this.props.listing.name}</div>
        <div className='listing-description-booking'>

          <div className='host-listing-description'>
            <div className='host-information'>
              <div className='host-name-label'>Hosted By:</div>
              <div>{this.props.listing.host_name}</div>
            </div>


            <div className="listing-show-description">{this.props.listing.description}</div>
          </div>




        </div>


        <ul className='listing-show-details'>
        <div className='listing-show-label'>Details:</div>

        <div className='listing-show-values'>
        <li>
        <strong>{this.props.listing.address}</strong>
        </li>

        <li>
        <strong>${this.props.listing.daily_cost}/night</strong>

        </li>


        <li>Check In After:
        <strong> {this.props.listing.check_in_after}</strong>
        </li>


        <li>Check Out Before:
        <strong> {this.props.listing.check_out_before}</strong>
        </li>
        </div>
        </ul>



        <div className='listing-review-container'>
        <div>{this.props.numReviews}</div>
        <div className="review-label">Reviews</div>

        </div>
        <div><ReviewIndexContainer listingId={this.props.match.params.listingId}/></div>


        </div>
      );
    }

  }
}



export default ListingShow;
