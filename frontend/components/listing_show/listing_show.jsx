import React from 'react';
import { Link } from 'react-router-dom';

class ListingShow extends React.Component {

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId)
  }

  render(){

    if (!this.props.listing) {
      return null;
    }

    return(
      <div className='listing-show-container'>
        <h1>{this.props.listing.name}</h1>
        <h2>{this.props.listing.description}</h2>
          <ul>
            <li>Location:
               <strong>{this.props.listing.address}</strong>
            </li>

            <li>Daily Cost:
               <strong>{this.props.listing.daily_cost}</strong>
            </li>

            <li>Maximum Guests:
               <strong>{this.props.listing.max_guest}</strong>
            </li>

            <li>Check In After:
               <strong>{this.props.listing.check_in_after}</strong>
            </li>


            <li>Check Out Before:
               <strong>{this.props.listing.check_out_before}</strong>
            </li>

          </ul>
          <img className="listing-photo" src={this.props.listing.icon_url}></img>
          <h2><Link to={`/listings`}>CLICK ME to return to all listings</Link></h2>
          <h2>Book Now Button will be on this page when implemented</h2>
          <h2>Listing Reviews will be on this page when implemented</h2>
      </div>
    );
  }
}

export default ListingShow;
