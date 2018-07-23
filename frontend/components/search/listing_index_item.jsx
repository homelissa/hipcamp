import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const ListingIndexItem = ({listing}) => {

  return (
    <li className='listing-index-li'>

      <Link to={`/listings/${listing.id}`}>

          <Link to={`/listings/${listing.id}`}>
            <img className="listing-index-photo" src={listing.icon_url}></img>
          </Link>

          <div className='listing-index-name'>{listing.name}</div>

          <ul className='listing-index-details'>
            <li className='listing-address'>{listing.address}</li>

            <div className='reviews-and-cost'>
              <li>
                 <div className='number-of-reviews'>{listing.reviews.length} Reviews</div>
              </li>

              <li className='daily-cost'>
                 <strong>${listing.daily_cost}/night</strong>
              </li>

            </div>
          </ul>

        </Link>

    </li>

  )

}


export default withRouter(ListingIndexItem);
