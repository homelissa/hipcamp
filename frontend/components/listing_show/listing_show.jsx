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
              <li className='listing-show-address'>{this.props.listing.address}</li>

              <li className='listing-show-daily-cost'>${this.props.listing.daily_cost}/night</li>


              <li><div className='new-check-in-after'>Check In After:</div>{this.props.listing.check_in_after}</li>


              <li><div className='new-check-in-after'>Check Out Before:</div>
                <div className='new-val'> {this.props.listing.check_out_before}</div>
              </li>

            </div>
          </ul>



          <div className='listing-review-container'>
            <div className='review-label'>{this.props.listing.reviews.length} Reviews</div>
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
              <li className='listing-show-address'>{this.props.listing.address}</li>

              <li className='listing-show-daily-cost'>${this.props.listing.daily_cost}/night</li>


              <li><div className='new-check-in-after'>Check In After:</div>
              <div className='new-val'>{this.props.listing.check_in_after}</div>
              </li>


              <li><div className='new-check-in-after'>Check Out Before:</div>
                <div className='new-val'> {this.props.listing.check_out_before}</div>
              </li>

            </div>
          </ul>



          <div className='listing-review-container'>
            <div className='review-label'>{this.props.listing.reviews.length} Reviews</div>
          </div>
          <div><ReviewIndexContainer listingId={this.props.match.params.listingId}/></div>


        </div>
      );

    }

  }
}



export default ListingShow;
