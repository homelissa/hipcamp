import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const ListingIndexItem = ({listing}) => {

  return (
    <div className='listing-index-li'>
      Number of Reviews:{listing.reviews.length}
      <Link to={`/listings/${listing.id}`}>
        <img className="listing-photo" src={listing.icon_url}></img>
      </Link>
      <div className='listing-index-name'>{listing.name}</div>
        <ul className='listing-index-details'>

          <div className='address-and-cost'>
            <li>
               <strong>{listing.address}</strong>
            </li>

            <li className='daily-cost'>
               <strong>${listing.daily_cost}/night</strong>
            </li>
          </div>

          <Link to={`/listings/${listing.id}`}>See More Details</Link>
        </ul>
    </div>

  )

}


export default withRouter(ListingIndexItem);
